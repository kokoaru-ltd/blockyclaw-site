import * as THREE from 'three';
import './style.css';
import { createRuneAtlas, createSigilPool } from './vfx/sigil.js';
import { createParticleEngine } from './vfx/particles.js';
import { createPostProcess } from './vfx/postprocess.js';
import { createVolumetrics } from './vfx/volumetric.js';
import { createSound } from './vfx/sound.js';
import { createMusic } from './vfx/music.js';
import { createFirstPersonStaff } from './vfx/staff.js';
import { createArena, ARENA_RADIUS } from './arena/arena.js';
import { createArenaPillars } from './arena/pillars.js';
import { createFighter, loadCharacterRig } from './arena/fighter.js';
import { analyzeDrawing, compileSpell, getDefaultLoadout, getFullSpellbook } from './spells/compiler.js';
import { createSpellExecutor } from './spells/executor.js';
import { createArenaUI } from './spells/forge-ui.js';

// --- Renderer & Scene ---
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.autoClear = false;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.15, 320);

// --- Core VFX, Sound & Orchestral BGM ---
const sound = createSound();
const music = createMusic({ base: './music/' });
const runeTex = createRuneAtlas();
const post = createPostProcess(renderer, runeTex);
const sigils = createSigilPool(scene, runeTex, 28);
const particles = createParticleEngine(scene, runeTex);
const volumetrics = createVolumetrics(scene);

// --- Sunlit Painterly Arena, Sliceable Pillars & Rigged Three.js Humanoid Fighters ---
const arena = createArena(scene);
const pillars = createArenaPillars(scene, arena.sunDir);
const fpStaff = createFirstPersonStaff(runeTex, arena.sunDir);
const charGltf = await loadCharacterRig('./models/Xbot.glb');

const player = createFighter({
  scene,
  gltf: charGltf,
  isPlayer: true,
  armorHex: '#2c4fa8',
  jointHex: '#68f0ff',
  accentHex: '#f4cf7a',
});

const rival = createFighter({
  scene,
  gltf: charGltf,
  isPlayer: false,
  armorHex: '#9c2038',
  jointHex: '#ff5c44',
  accentHex: '#ff9648',
});

const executor = createSpellExecutor({
  scene, camera, arena, pillars, particles, sigils, volumetrics, post, sound,
});

// --- Spellbooks: 3 Equipped Duel Spells + Full 9-Spell Sandbox Library ---
const duelLoadout = getDefaultLoadout();
const sandboxSpells = getFullSpellbook();
const rivalLoadout = [
  compileSpell({ text: 'Crimson lightning storm barrage bolts', slotIndex: 0 }),
  compileSpell({ text: 'Void purple gravity crush slam', slotIndex: 1 }),
  compileSpell({ text: 'Solar fire meteor blast', slotIndex: 2 }),
];

let mode = 'home'; // 'home' | 'forge' | 'duel' | 'sandbox'
let activeSpells = duelLoadout;
let selectedSlot = 0;
let playerCooldowns = new Array(9).fill(0);
const rivalCooldowns = [1.5, 2.8, 4.2];
const roundScore = { player: 0, rival: 0 };
let matchOver = false;
let thirdPerson = false;

// Full-Screen 3D Forge Drawing State
let currentForgedSpell = duelLoadout[0];
let forgeDrawing = false;
let forgeStrokePts = [];

let camYaw = 0;
let camPitch = -0.06;
let turnDx = 0;
let turnDy = 0;
let damageVignette = 0;
let prevPlayerHp = 100;
let prevRivalHp = 100;

// --- Input State ---
const keys = new Set();
let mouseLeft = false;
let prevMouseLeft = false;
let mouseRight = false;
let pointerLocked = false;

function lockPointer() {
  if (mode !== 'duel' && mode !== 'sandbox') return;
  if (matchOver) return;
  try {
    const res = renderer.domElement.requestPointerLock?.();
    if (res && typeof res.catch === 'function') res.catch(() => {});
  } catch { /* ignore */ }
}

function syncActiveSpellVisuals() {
  const sp = activeSpells[selectedSlot] || activeSpells[0];
  if (!sp) return;
  player.setSpellColor(sp.palette.primary);
  fpStaff.setSpell(sp.palette.primary, sp.sides);
}

function enterMode(nextMode) {
  mode = nextMode;
  matchOver = false;
  forgeDrawing = false;
  executor.clear();
  particles.clear();
  sigils.clear();
  volumetrics.clear();
  arena.clearMarks();
  pillars.reset();
  ui.hideResult();

  if (mode === 'home') {
    if (document.pointerLockElement) document.exitPointerLock?.();
    player.reset(-4.5, 4.5, Math.PI * 0.25);
    rival.reset(4.5, -4.5, -Math.PI * 0.75);
  } else if (mode === 'forge') {
    if (document.pointerLockElement) document.exitPointerLock?.();
    // Place sparring target & intact pillars directly in front of the full-screen 3D Forge camera!
    player.reset(0, 14, Math.PI);
    rival.reset(0, -1, 0);
    rival.state.hp = 100;
    prevRivalHp = 100;
    ui.showForgeSpec(currentForgedSpell);
    sigils.spawn({ pos: new THREE.Vector3(0, 0.14, -1), color: '#f4cf7a', sides: 6, radius: 5.5, life: 60, turn: 0.35 });
  } else if (mode === 'duel') {
    activeSpells = duelLoadout;
    selectedSlot = 0;
    ui.setDockSpells(activeSpells);
    resetCombatEntities();
    lockPointer();
  } else if (mode === 'sandbox') {
    activeSpells = sandboxSpells;
    selectedSlot = 8; // Start with #9 Astral Cleave ready, or press 1..9!
    ui.setDockSpells(activeSpells);
    resetCombatEntities();
    lockPointer();
  }

  ui.setMode(mode);
  syncActiveSpellVisuals();
}

function resetCombatEntities() {
  matchOver = false;
  ui.hideResult();
  executor.clear();
  particles.clear();
  sigils.clear();
  volumetrics.clear();
  arena.clearMarks();
  pillars.reset();

  player.reset(0, 11, Math.PI);
  rival.reset(0, -11, 0);
  prevPlayerHp = 100;
  prevRivalHp = 100;
  camYaw = 0;
  camPitch = -0.05;
  playerCooldowns.fill(0);
  rivalCooldowns[0] = 1.4;
  rivalCooldowns[1] = 2.6;
  rivalCooldowns[2] = 4.0;
  syncActiveSpellVisuals();
  rival.setSpellColor(rivalLoadout[0].palette.primary);
}

const ui = createArenaUI({
  duelLoadout,
  music,
  sound,
  onStartDuel: () => enterMode('duel'),
  onStartSandbox: () => enterMode('sandbox'),
  onOpenForge: () => enterMode('forge'),
  onOpenHome: () => enterMode('home'),
  onRematch: () => {
    resetCombatEntities();
    lockPointer();
  },
  onForgeResetPillars: () => {
    pillars.reset();
    arena.clearMarks();
    rival.reset(0, -1, 0);
    prevRivalHp = 100;
    sound.forge();
  },
  onForgePreset: (text) => {
    currentForgedSpell = compileSpell({ text, slotIndex: 0 });
    ui.showForgeSpec(currentForgedSpell);
    fireSpellInForge(currentForgedSpell);
  },
  onForgeTextCast: (text) => {
    currentForgedSpell = compileSpell({ text, slotIndex: 0 });
    ui.showForgeSpec(currentForgedSpell);
    fireSpellInForge(currentForgedSpell);
  },
  onForgeBindSlot: (slotIdx) => {
    duelLoadout[slotIdx] = { ...currentForgedSpell };
    ui.refreshBindButtons();
    sound.forge();
  },
});

function fireSpellInForge(spell) {
  rival.state.hp = 100;
  prevRivalHp = 100;
  const origin = player.getStaffTip(new THREE.Vector3());
  const dir = rival.getCenter(new THREE.Vector3()).sub(origin).normalize();
  if (spell.archetype === 'cleave') {
    // Showcase live slash across the sparring dummy & pillars
    executor.beginForgeStroke(-0.48, 0.22, spell.palette.primary);
    executor.moveForgeStroke(0.48, -0.18, spell.palette.rgb);
    executor.finishForgeStroke(spell, player, rival);
  } else {
    executor.castSpell({ spell, caster: player, target: rival, origin, dir, isPlayer: true });
  }
}

enterMode('home');

// --- Event Listeners ---
window.addEventListener('resize', () => {
  const aspect = window.innerWidth / window.innerHeight;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  fpStaff.resize(aspect);
  renderer.setSize(window.innerWidth, window.innerHeight);
  post.resize();
});

document.addEventListener('pointerlockchange', () => {
  pointerLocked = document.pointerLockElement === renderer.domElement;
  document.getElementById('aim-dot').classList.toggle('hidden', (mode !== 'duel' && mode !== 'sandbox') || executor.cleaveLocked);
});

const wakeAudio = () => {
  sound.unlock();
  music.wake();
};
window.addEventListener('pointerdown', wakeAudio, { passive: true });
window.addEventListener('keydown', wakeAudio, { passive: true });

// Full-screen 3D Forge Drawing directly on the Three.js WebGL canvas!
const toNdc = (e) => ({
  ndcX: (e.clientX / window.innerWidth) * 2 - 1,
  ndcY: -(e.clientY / window.innerHeight) * 2 + 1,
  nx: e.clientX / window.innerWidth,
  ny: e.clientY / window.innerHeight,
});

renderer.domElement.addEventListener('mousedown', (e) => {
  wakeAudio();
  if (mode === 'forge' && e.button === 0) {
    forgeDrawing = true;
    const { ndcX, ndcY, nx, ny } = toNdc(e);
    forgeStrokePts = [{ x: nx, y: ny }];
    executor.beginForgeStroke(ndcX, ndcY, currentForgedSpell.palette.primary);
    sound.cleaveAim();
    return;
  }
  if (mode !== 'duel' && mode !== 'sandbox') return;
  if (!pointerLocked) lockPointer();
  if (e.button === 0) mouseLeft = true;
  if (e.button === 2) {
    mouseRight = true;
    if (executor.cleaveLocked) executor.cancelCleave();
    else if (!matchOver) sound.ward();
  }
});

window.addEventListener('mousemove', (e) => {
  if (mode === 'forge') {
    if (!forgeDrawing) return;
    const { ndcX, ndcY, nx, ny } = toNdc(e);
    forgeStrokePts.push({ x: nx, y: ny });
    executor.moveForgeStroke(ndcX, ndcY, currentForgedSpell.palette.rgb);
    return;
  }
  if ((mode !== 'duel' && mode !== 'sandbox') || matchOver) return;
  if (!pointerLocked && !mouseLeft && !executor.cleaveLocked) return;
  const sens = 0.0023;
  const dx = e.movementX * sens;
  const dy = -e.movementY * sens;
  turnDx = dx;
  turnDy = dy;
  if (executor.steerCleave(dx, dy)) return;
  camYaw -= dx;
  camPitch = THREE.MathUtils.clamp(camPitch + dy, -0.95, 0.72);
});

window.addEventListener('mouseup', (e) => {
  if (mode === 'forge' && forgeDrawing && e.button === 0) {
    forgeDrawing = false;
    const analysis = analyzeDrawing(forgeStrokePts);
    currentForgedSpell = compileSpell({
      text: ui.getForgeText(),
      drawing: analysis,
      slotIndex: 0,
    });
    ui.showForgeSpec(currentForgedSpell);
    rival.state.hp = 100;
    prevRivalHp = 100;
    executor.finishForgeStroke(currentForgedSpell, player, rival);
    return;
  }
  if (e.button === 0) mouseLeft = false;
  if (e.button === 2) mouseRight = false;
});

renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

window.addEventListener('wheel', (e) => {
  if (mode !== 'duel' && mode !== 'sandbox') return;
  const len = activeSpells.length;
  selectSlot((selectedSlot + (e.deltaY > 0 ? 1 : len - 1)) % len);
});

window.addEventListener('keydown', (e) => {
  if (mode === 'home') {
    if (ui.handleLobbyKey(e)) e.preventDefault();
    return;
  }

  // Don't hijack typing inside Forge text input
  if (mode === 'forge' && document.activeElement?.id === 'forge-text') {
    if (e.code === 'Escape') {
      document.activeElement.blur();
    }
    return;
  }

  if (e.code === 'Tab') {
    e.preventDefault();
    enterMode(mode === 'forge' ? 'duel' : 'forge');
    return;
  }
  if (e.code === 'Escape') {
    if (mode === 'forge') {
      enterMode('home');
    } else if (!pointerLocked) {
      enterMode('home');
    }
    return;
  }

  if (mode !== 'duel' && mode !== 'sandbox') return;

  keys.add(e.code);
  const digitIdx = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9'].indexOf(e.code);
  if (digitIdx >= 0 && digitIdx < activeSpells.length) selectSlot(digitIdx);

  if (e.code === 'KeyV') thirdPerson = !thirdPerson;
  if (e.code === 'KeyM') {
    const m = !sound.muted;
    sound.muted = m;
    music.muted = m;
  }
  if (e.code === 'KeyN') music.nextTrack();
  if (e.code === 'KeyR') {
    resetCombatEntities();
    lockPointer();
  }
  if (e.code === 'Space' && !matchOver && player.state.jumpsLeft > 0) {
    player.state.vel.y = player.state.jumpsLeft === 2 ? 12.2 : 11.2;
    player.state.grounded = false;
    player.state.jumpsLeft--;
    particles.burst(player.state.pos.clone().add(new THREE.Vector3(0, 0.2, 0)), [0.65, 0.9, 1.0], 14, 5, 3);
  }
  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !matchOver && player.state.dashCooldown <= 0) {
    performDash(player, getPlayerMoveDir());
    sound.dash();
  }
});

window.addEventListener('keyup', (e) => keys.delete(e.code));

function selectSlot(idx) {
  if (selectedSlot !== idx && idx >= 0 && idx < activeSpells.length) {
    executor.cancelCleave();
    selectedSlot = idx;
    syncActiveSpellVisuals();
    sound.forge();
  }
}

function getPlayerMoveDir() {
  const fwd = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
  const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw));
  const move = new THREE.Vector3();
  if (keys.has('KeyW')) move.add(fwd);
  if (keys.has('KeyS')) move.sub(fwd);
  if (keys.has('KeyD')) move.add(right);
  if (keys.has('KeyA')) move.sub(right);
  if (move.lengthSq() > 0.001) move.normalize();
  return move;
}

function performDash(fighter, moveDir) {
  const dir = moveDir.lengthSq() > 0.01
    ? moveDir.clone()
    : new THREE.Vector3(Math.sin(fighter.state.yaw), 0, Math.cos(fighter.state.yaw));
  fighter.state.vel.x = dir.x * 23;
  fighter.state.vel.z = dir.z * 23;
  fighter.state.vel.y = Math.max(fighter.state.vel.y, 2.5);
  fighter.state.dashCooldown = 1.15;
  fighter.state.dashTimer = 0.22;
  for (let i = 0; i < 16; i++) {
    particles.spawn({
      kind: 5,
      x: fighter.state.pos.x + particles.rnd(0.4),
      y: fighter.state.pos.y + 0.5 + Math.random() * 1.2,
      z: fighter.state.pos.z + particles.rnd(0.4),
      vx: -dir.x * 12, vy: particles.rnd(1.5), vz: -dir.z * 12,
      life: 0.3,
      size: [0.04, 0.015],
      colour: [0.65, 0.92, 1.0],
    });
  }
}

function stepFighterPhysics(fighter, desiredDir, dt) {
  const s = fighter.state;
  s.dashCooldown = Math.max(0, s.dashCooldown - dt);
  s.dashTimer = Math.max(0, s.dashTimer - dt);
  s.gravSuspended = Math.max(0, s.gravSuspended - dt);

  if (s.wardActive) {
    s.wardEnergy = Math.max(0, s.wardEnergy - dt * 0.42);
    if (s.wardEnergy <= 0.01) s.wardActive = false;
  } else {
    s.wardEnergy = Math.min(1, s.wardEnergy + dt * 0.26);
  }

  const maxSpeed = s.wardActive ? 5.2 : 10.6;
  if (s.dashTimer <= 0 && s.gravSuspended <= 0) {
    const accel = s.grounded ? 42 : 18;
    s.vel.x += (desiredDir.x * maxSpeed - s.vel.x) * Math.min(1, accel * dt);
    s.vel.z += (desiredDir.z * maxSpeed - s.vel.z) * Math.min(1, accel * dt);
  }

  if (s.gravSuspended <= 0) s.vel.y -= 28 * dt;
  s.pos.addScaledVector(s.vel, dt);

  if (s.pos.y <= 0) {
    if (s.vel.y < -18) {
      particles.burst(new THREE.Vector3(s.pos.x, 0.2, s.pos.z), [0.85, 0.8, 0.72], 24, 9, 2);
    }
    s.pos.y = 0;
    s.vel.y = 0;
    s.grounded = true;
    s.jumpsLeft = 2;
  }

  const r = Math.hypot(s.pos.x, s.pos.z);
  const maxR = ARENA_RADIUS - 0.9;
  if (r > maxR) {
    const sc = maxR / r;
    s.pos.x *= sc;
    s.pos.z *= sc;
    s.vel.x *= 0.4;
    s.vel.z *= 0.4;
  }
  pillars.collideCircle(s.pos, s.radius, s.height);
}

// --- Rival AI (Active in Duel, Sparring Dummy in Sandbox & Forge) ---
const ai = { strafeSign: 1, strafeTimer: 1.5, thinkTimer: 0.5 };

function updateRivalAI(dt) {
  const rs = rival.state;
  const ps = player.state;
  const toPlayer = ps.pos.clone().sub(rs.pos);
  const dist = Math.hypot(toPlayer.x, toPlayer.z);
  const dirFlat = dist > 0.01 ? new THREE.Vector3(toPlayer.x / dist, 0, toPlayer.z / dist) : new THREE.Vector3(0, 0, 1);

  rs.yaw = Math.atan2(dirFlat.x, dirFlat.z);

  if (mode !== 'duel') {
    // Sparring dummy in Sandbox/Forge: reacts to gravity & knockback and recovers HP!
    stepFighterPhysics(rival, new THREE.Vector3(), dt);
    if (rs.hp < rs.maxHp) rs.hp = Math.min(rs.maxHp, rs.hp + dt * 12);
    return;
  }

  ai.strafeTimer -= dt;
  if (ai.strafeTimer <= 0) {
    ai.strafeTimer = 1.2 + Math.random() * 1.6;
    ai.strafeSign *= -1;
  }

  const perp = new THREE.Vector3(-dirFlat.z * ai.strafeSign, 0, dirFlat.x * ai.strafeSign);
  const move = perp.clone().multiplyScalar(0.85);
  if (dist > 19) move.addScaledVector(dirFlat, 0.75);
  else if (dist < 10) move.addScaledVector(dirFlat, -0.75);
  if (move.lengthSq() > 0.001) move.normalize();

  if (rs.dashCooldown <= 0 && dist < 11 && Math.random() < dt * 0.9) performDash(rival, perp);
  rs.wardActive = rs.wardEnergy > 0.4 && executor.cleavePhase === 'draw';

  stepFighterPhysics(rival, move, dt);

  for (let i = 0; i < 3; i++) rivalCooldowns[i] = Math.max(0, rivalCooldowns[i] - dt);
  ai.thinkTimer -= dt;
  if (ai.thinkTimer <= 0 && rs.gravSuspended <= 0) {
    const ready = [0, 1, 2].filter((idx) => rivalCooldowns[idx] <= 0);
    if (ready.length > 0 && dist < 34) {
      const pick = ready[Math.floor(Math.random() * ready.length)];
      const sp = rivalLoadout[pick];
      rival.setSpellColor(sp.palette.primary);
      const aimOrigin = rival.getStaffTip(new THREE.Vector3());
      const aimTarget = player.getCenter(new THREE.Vector3()).addScaledVector(ps.vel, 0.25);
      const aimDir = aimTarget.sub(aimOrigin).normalize();
      executor.castSpell({
        spell: sp,
        caster: rival,
        target: player,
        origin: aimOrigin,
        dir: aimDir,
        isPlayer: false,
      });
      rivalCooldowns[pick] = sp.cooldown * 1.4 + 1.1;
      ai.thinkTimer = 1.2;
    }
  }
}

// --- Main Loop ---
const clock = new THREE.Clock();
let simNow = 0;

function animate() {
  requestAnimationFrame(animate);
  const realDt = Math.min(clock.getDelta(), 0.05);
  const pace = mode === 'home' ? 0.55 : executor.worldPace;
  const worldDt = realDt * pace;
  simNow += worldDt;

  music.duck = (executor.cleaveLocked || forgeDrawing) ? 0.35 : 1.0;

  if ((mode === 'duel' || mode === 'sandbox') && !matchOver) {
    for (let i = 0; i < playerCooldowns.length; i++) {
      const rate = mode === 'sandbox' ? 2.2 : 1.0;
      playerCooldowns[i] = Math.max(0, playerCooldowns[i] - worldDt * rate);
    }

    player.state.wardActive = mouseRight && !executor.cleaveLocked && player.state.wardEnergy > 0.05;
    const moveDir = executor.cleaveLocked ? new THREE.Vector3() : getPlayerMoveDir();
    player.state.yaw = camYaw + Math.PI;
    stepFighterPhysics(player, moveDir, worldDt);

    const activeSpell = activeSpells[selectedSlot];
    if (activeSpell) {
      if (activeSpell.archetype === 'cleave') {
        if (playerCooldowns[selectedSlot] <= 0 || executor.cleavePhase !== 'idle') {
          const fired = executor.handlePlayerCleaveInput(mouseLeft, prevMouseLeft, activeSpell, player, rival);
          if (fired) playerCooldowns[selectedSlot] = activeSpell.cooldown;
        }
      } else if (mouseLeft && !prevMouseLeft && playerCooldowns[selectedSlot] <= 0 && !executor.cleaveLocked) {
        const camDir = new THREE.Vector3();
        camera.getWorldDirection(camDir);
        executor.castSpell({
          spell: activeSpell,
          caster: player,
          target: rival,
          origin: camera.position.clone(),
          dir: camDir,
          isPlayer: true,
        });
        playerCooldowns[selectedSlot] = activeSpell.cooldown;
      }
    }

    updateRivalAI(worldDt);

    if (mode === 'duel' && (rival.state.hp <= 0 || player.state.hp <= 0)) {
      matchOver = true;
      executor.cancelCleave();
      if (rival.state.hp <= 0) {
        roundScore.player++;
        ui.showResult('VICTORY', 'The Crimson Warlock falls. Rematch or forge new spells.');
        sound.victory();
      } else {
        roundScore.rival++;
        ui.showResult('DEFEAT', 'Enter the 3D Spell Forge to craft a stronger loadout.');
      }
      if (document.pointerLockElement) document.exitPointerLock?.();
    }
  } else if (mode === 'forge') {
    updateRivalAI(worldDt);
  } else if (mode === 'home') {
    camYaw += realDt * 0.14;
  }

  prevMouseLeft = mouseLeft;

  // Floating damage popups
  if (rival.state.hp < prevRivalHp) {
    const hitAmt = prevRivalHp - rival.state.hp;
    const p3 = rival.getCenter(new THREE.Vector3()).add(new THREE.Vector3(0, 1.0, 0)).project(camera);
    if (p3.z < 1) {
      const sp = mode === 'forge' ? currentForgedSpell : (activeSpells[selectedSlot] || duelLoadout[0]);
      ui.spawnDamageNumber(
        (p3.x * 0.5 + 0.5) * window.innerWidth,
        (-p3.y * 0.5 + 0.5) * window.innerHeight,
        hitAmt,
        sp.palette.primary
      );
    }
  }
  prevRivalHp = rival.state.hp;

  if (player.state.hp < prevPlayerHp) damageVignette = 1.0;
  prevPlayerHp = player.state.hp;
  damageVignette = Math.max(0, damageVignette - realDt * 2.8);
  post.uniforms.uDamage.value = damageVignette;

  // Camera per mode
  camera.fov = THREE.MathUtils.clamp(62 + executor.fovOffset, 38, 86);
  camera.updateProjectionMatrix();

  const lookQuat = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(camPitch + executor.jolt.x, camYaw + executor.jolt.y, executor.jolt.z, 'YXZ')
  );

  if (mode === 'home') {
    // Cinematic framing with both mages visible on the right half of the screen
    const r = 18.5;
    camera.position.set(Math.sin(camYaw) * r - 4, 6.2, Math.cos(camYaw) * r);
    camera.lookAt(2.5, 2.0, -1.0);
  } else if (mode === 'forge') {
    // Wide open full-screen 3D Sanctum drawing view!
    camera.position.set(executor.jolt.y * 2, 4.2 + executor.jolt.x * 2, 16.5);
    camera.lookAt(0, 2.0, -2.0);
  } else if (thirdPerson) {
    const back = new THREE.Vector3(0, 0, 1).applyQuaternion(lookQuat);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(lookQuat);
    const pivot = player.state.pos.clone().add(new THREE.Vector3(0, 2.15, 0));
    camera.position.copy(pivot).addScaledVector(back, 5.4).addScaledVector(right, 0.85);
    if (camera.position.y < 0.7) camera.position.y = 0.7;
    camera.quaternion.copy(lookQuat);
  } else {
    camera.position.copy(player.state.pos).add(new THREE.Vector3(0, 1.88, 0));
    camera.quaternion.copy(lookQuat);
  }

  // Update all world & VFX systems
  executor.update(realDt, worldDt, simNow);
  arena.update(worldDt, simNow);
  pillars.update(worldDt, simNow);
  particles.update(worldDt);
  sigils.update(worldDt, simNow);
  volumetrics.update(worldDt, simNow, camera);

  const playerSpeed = Math.hypot(player.state.vel.x, player.state.vel.z);
  fpStaff.update(realDt, simNow, {
    speed: playerSpeed,
    recoil: player.state.castRecoil,
    charge: executor.cleaveLocked ? 1 : 0,
    turnDx,
    turnDy,
  });
  turnDx *= 0.8;
  turnDy *= 0.8;

  const hidePlayerMesh = (mode === 'duel' || mode === 'sandbox') && !thirdPerson;
  player.updateVisuals(worldDt, simNow, hidePlayerMesh || mode === 'forge');
  rival.updateVisuals(worldDt, simNow, false);

  const showHand = (mode === 'duel' || mode === 'sandbox') && !thirdPerson;
  post.render(scene, camera, showHand ? fpStaff : null);

  if (mode === 'duel' || mode === 'sandbox') {
    ui.refreshHUD(selectedSlot, playerCooldowns, player.state, rival.state, executor.cleavePhase, roundScore);
    document.getElementById('aim-dot').classList.toggle('hidden', executor.cleaveLocked || matchOver);
  }
}

animate();
