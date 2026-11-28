import * as THREE from 'three';

const F30 = 1 / 30;

/**
 * Executes all 6 custom Spell DNA archetypes (cleave, gravity, blast, vortex, beam, barrage)
 * for both the Player and the Rival AI, driving:
 * - Post-process impact frames, screen split, 3D rune rings, glass dome, gravity lens
 * - Volumetric raymarched fireballs, tornados, accretion discs, beams
 * - Procedural magic circles, instanced particles, and sliceable/gravity arena pillars!
 */
export function createSpellExecutor({ scene, camera, arena, pillars, particles, sigils, volumetrics, post, sound }) {
  // --- Player Cleave 3D Glowing Ribbon & Aim Star Cursor ---
  const RIBBON_N = 64;
  const LAY = 5.5;
  const RIBBON_W = 0.075;
  const ribbonGeo = new THREE.BufferGeometry();
  const ribbonPos = new Float32Array((RIBBON_N + 1) * 2 * 3);
  const ribbonUv = new Float32Array((RIBBON_N + 1) * 2 * 2);
  const ribbonIdx = [];
  for (let i = 0; i <= RIBBON_N; i++) {
    ribbonUv.set([i / RIBBON_N, -1, i / RIBBON_N, 1], i * 4);
    if (i < RIBBON_N) {
      const a = i * 2;
      ribbonIdx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  ribbonGeo.setAttribute('position', new THREE.BufferAttribute(ribbonPos, 3));
  ribbonGeo.setAttribute('uv', new THREE.BufferAttribute(ribbonUv, 2));
  ribbonGeo.setIndex(ribbonIdx);

  const ribbonMat = new THREE.ShaderMaterial({
    transparent: true,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: {
      uFade: { value: 1 },
      uT: { value: 0 },
      uFlare: { value: 0 },
      uSurge: { value: -1 },
      uCount: { value: 12 },
      uColor: { value: new THREE.Color('#ffd56b') },
      uDark: { value: new THREE.Color('#0e0a1f') },
      tRunes: { value: post.uniforms.tRunes.value },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform float uFade, uT, uFlare, uSurge, uCount;
      uniform vec3 uColor, uDark;
      uniform sampler2D tRunes;
      void main() {
        float u = vUv.x, a = abs(vUv.y);
        float body = mix(0.1, 1.0, smoothstep(0.0, 0.3, u)) * (1.0 - 0.3 * smoothstep(0.94, 1.0, u));
        float aa = a / max(body, 1e-3);
        float ends = smoothstep(0.0, 0.02, u) * smoothstep(1.0, 0.99, u);
        float heart = 1.0 - smoothstep(0.1, 0.2, aa);
        float shimmer = 0.78 + 0.22 * sin(u * 75.0 - uT * 26.0) * sin(u * 25.0 + uT * 9.0);
        float bead = pow(0.5 + 0.5 * sin(u * 28.0 - uT * 34.0), 10.0);
        float glow = exp(-aa * aa * 5.2) * shimmer;
        vec3 col = mix(uColor * 1.15, vec3(1.0, 0.98, 0.92), heart) * (1.1 + 1.6 * heart + 1.6 * bead * heart);
        float light = max(heart, glow * 0.65);
        float shade = (1.0 - smoothstep(0.5, 1.0, aa)) * 0.62;
        if (uSurge >= 0.0) {
          float behind = step(u, uSurge);
          float head = exp(-pow((u - uSurge) / 0.06, 2.0));
          float wire = 1.0 - smoothstep(0.07, 0.14, aa);
          light = mix(light, max(wire, glow * 0.3), behind);
          col = mix(col, vec3(1.0, 0.98, 0.94) * 3.2, behind * wire);
          float lobe = head * exp(-aa * aa * 1.6);
          col += uColor * 3.0 * lobe;
          light = max(light, lobe);
        }
        col = mix(uDark, col, clamp(light * 1.5, 0.0, 1.0));
        float alpha = max(light, shade) * ends;
        if (uFlare > 0.0) {
          float k = u * uCount;
          float g = mod(floor(k) * 5.0 + 3.0, 32.0);
          vec2 gv = vec2(fract(k) * 1.2 - 0.1, vUv.y * 0.62 + 0.5);
          float rune = (gv.x < 0.0 || gv.x > 1.0 || gv.y < 0.0 || gv.y > 1.0)
            ? 0.0
            : texture2D(tRunes, (vec2(mod(g, 8.0), 3.0 - floor(g / 8.0)) + gv) / vec2(8.0, 4.0)).r;
          rune *= step(u, uFlare * 1.05) * ends;
          col = mix(col, vec3(1.0, 0.96, 0.85) * 2.8, rune);
          alpha = max(alpha * (1.0 + uFlare), rune);
          col *= 1.0 + 0.75 * uFlare;
        }
        gl_FragColor = vec4(col, min(alpha, 1.0) * uFade);
      }
    `,
  });
  const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
  ribbonMesh.frustumCulled = false;
  ribbonMesh.renderOrder = 25;
  ribbonMesh.visible = false;
  scene.add(ribbonMesh);

  // 4-pointed star aim sprite for Cleave brush
  const starTex = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 60);
    gr.addColorStop(0, 'rgba(255,248,220,0.95)');
    gr.addColorStop(0.22, 'rgba(255,214,130,0.45)');
    gr.addColorStop(1, 'rgba(255,190,100,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#fffef2';
    for (const [lx, ly] of [[58, 5], [5, 58]]) {
      g.beginPath();
      g.moveTo(64 - lx, 64);
      g.quadraticCurveTo(64, 64 - ly * 0.1 - 2, 64 + lx, 64);
      g.quadraticCurveTo(64, 64 + ly * 0.1 + 2, 64 - lx, 64);
      g.fill();
      g.beginPath();
      g.moveTo(64, 64 - lx);
      g.quadraticCurveTo(64 - ly * 0.1 - 2, 64, 64, 64 + lx);
      g.quadraticCurveTo(64 + ly * 0.1 + 2, 64, 64, 64 - lx);
      g.fill();
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })();
  const aimDot = new THREE.Sprite(new THREE.SpriteMaterial({
    map: starTex,
    depthTest: false,
    depthWrite: false,
    transparent: true,
    blending: THREE.AdditiveBlending,
  }));
  aimDot.renderOrder = 26;
  aimDot.visible = false;
  aimDot.scale.setScalar(LAY * 0.22);
  scene.add(aimDot);

  // --- Shared Cleave & Impact State ---
  const cleave = {
    phase: 'idle', // idle | aim | draw | strike
    spell: null,
    caster: null,
    target: null,
    t: 0,
    aimT: 0,
    focusK: 0,
    punch: 0,
    ringAge: -1,
    haze: 0,
    cutDone: false,
    brushX: 0,
    brushY: 0,
    baseYaw: 0,
    basePitch: 0,
    eye: new THREE.Vector3(),
    d0: new THREE.Vector3(),
    d1: new THREE.Vector3(),
    n: new THREE.Vector3(0, 1, 0),
    e1: new THREE.Vector3(1, 0, 0),
    e2: new THREE.Vector3(0, 0, 1),
    theta: 0,
    path: [],
    post: {
      a: new THREE.Vector2(0.15, 0.5),
      b: new THREE.Vector2(0.85, 0.5),
      mode: 0,
      k: 0,
      written: 0,
      fringe: 0,
      focus: 0,
      up: 1,
      C: new THREE.Vector3(),
      N: new THREE.Vector3(0, 1, 0),
      M: new THREE.Vector3(0, 0, 1),
      age: 0,
      haze: 0,
      frame: 0,
      circle: 0,
      D: 18,
      split: 0,
    },
  };

  // --- Active Spell Instances (projectiles, gravity wells, blasts, vortices, ai cleaves) ---
  const actives = [];
  const kicks = [];
  const jolt = new THREE.Vector3();
  let shakeT = 0;
  let inkTimer = 0;
  let inkSign = 0;
  let whiteFlash = 0;
  let doomLevel = 0;
  let shockVisual = { active: false, pos: new THREE.Vector3(), age: 0, maxAge: 0.7, maxR: 20 };

  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  const tmp1 = new THREE.Vector3();
  const tmp2 = new THREE.Vector3();
  const tmpSide = new THREE.Vector3();

  const kickCamera = (power) => kicks.push({ t: 0, power });
  const dirFromYawPitch = (yaw, pitch, out) =>
    out.set(0, 0, -1).applyEuler(euler.set(pitch, yaw, 0, 'YXZ')).normalize();

  function computeSheet() {
    cleave.n.crossVectors(cleave.d0, cleave.d1);
    const l = cleave.n.length();
    if (l < 1e-4) {
      cleave.theta = 0;
      return false;
    }
    cleave.n.multiplyScalar(1 / l);
    cleave.e1.copy(cleave.d0).normalize();
    cleave.e2.crossVectors(cleave.n, cleave.e1).normalize();
    cleave.theta = Math.atan2(cleave.d1.dot(cleave.e2), cleave.d1.dot(cleave.e1));
    return true;
  }

  function alongCleave(u, out) {
    return out.copy(cleave.e1).applyAxisAngle(cleave.n, cleave.theta * u);
  }

  function updateRibbonGeometry(width) {
    const ex = camera.position;
    const last = cleave.path.length - 1;
    for (let i = 0; i <= RIBBON_N; i++) {
      if (last >= 2) {
        const f = (i / RIBBON_N) * last;
        const k = Math.min(last - 1, Math.floor(f));
        tmp1.copy(cleave.path[k]).lerp(cleave.path[k + 1], f - k).normalize();
        tmpSide.copy(cleave.path[Math.min(last, k + 2)]).sub(cleave.path[Math.max(0, k - 1)]);
        tmpSide.crossVectors(tmp1, tmpSide);
        if (tmpSide.lengthSq() < 1e-10) tmpSide.copy(cleave.n);
        else tmpSide.normalize();
      } else {
        alongCleave(i / RIBBON_N, tmp1);
        tmpSide.copy(cleave.n);
      }
      const c = tmp2.copy(ex).addScaledVector(tmp1, LAY);
      const w = LAY * width;
      ribbonPos.set(
        [
          c.x - tmpSide.x * w, c.y - tmpSide.y * w, c.z - tmpSide.z * w,
          c.x + tmpSide.x * w, c.y + tmpSide.y * w, c.z + tmpSide.z * w,
        ],
        i * 6
      );
    }
    ribbonGeo.attributes.position.needsUpdate = true;
    ribbonGeo.computeBoundingSphere();
  }

  /** Spawns a 3D burst tracing the user's custom drawn stroke (if drawn in the Forge!) */
  function spawnDrawnTrace(spell, origin, forward) {
    if (!spell.strokeNorm || spell.strokeNorm.length < 3) return;
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(right, forward).normalize();
    const center = origin.clone().addScaledVector(forward, 2.2);
    for (const pt of spell.strokeNorm) {
      const p = center.clone().addScaledVector(right, pt.x * 2.2).addScaledVector(up, -pt.y * 2.2);
      particles.spawn({
        kind: 3,
        x: p.x, y: p.y, z: p.z,
        vx: forward.x * 2.2 + particles.rnd(0.6),
        vy: forward.y * 2.2 + particles.rnd(0.6),
        vz: forward.z * 2.2 + particles.rnd(0.6),
        life: 0.55 + Math.random() * 0.25,
        size: [0.22, 0.04],
        colour: spell.palette.rgb,
      });
    }
  }

  function triggerImpactBeat(spell, worldPos, isHeavy = true) {
    const pal = spell.palette;
    post.setPalette(pal.palDark, pal.palMid, pal.palHi, pal.palLight);
    if (spell.hasImpact) {
      inkTimer = isHeavy ? 0.14 : 0.08;
      inkSign = 1;
    }
    whiteFlash = isHeavy ? 0.55 : 0.25;
    shockVisual = { active: true, pos: worldPos.clone(), age: 0, maxAge: 0.72, maxR: 22 * spell.scale };
    arena.triggerFloorShock(worldPos.x, worldPos.z);
    arena.flashLight(worldPos.clone().add(new THREE.Vector3(0, 2, 0)), pal.primary, 22);
    kickCamera(isHeavy ? 2.8 : 1.4);
  }

  function triggerShockwaveRings(worldPos, normal, midDir, spell) {
    const pal = spell.palette;
    post.setPalette(pal.palDark, pal.palMid, pal.palHi, pal.palLight);
    cleave.post.C.copy(worldPos);
    cleave.post.N.copy(normal).normalize();
    cleave.post.M.copy(midDir).normalize();
    cleave.post.D = Math.min(35, Math.max(9, camera.position.distanceTo(worldPos)));
    cleave.ringAge = 0;
    cleave.haze = 0.85;
  }

  function executeCleaveCut(now) {
    cleave.cutDone = true;
    const spell = cleave.spell;
    const pal = spell.palette;
    const upSign = cleave.n.y < 0 ? -1 : 1;
    const nu = cleave.n.clone().multiplyScalar(upSign);
    const mid = alongCleave(0.5, new THREE.Vector3());

    // Find strike center along mid ray (opponent, pillar, or arena floor)
    let D = 18;
    const targetCenter = cleave.target.getCenter(new THREE.Vector3());
    const toTarget = targetCenter.clone().sub(cleave.eye);
    const tDist = toTarget.length();
    if (tDist < 55 && toTarget.clone().normalize().dot(mid) > 0.78) {
      D = tDist;
    } else if (mid.y < -0.05) {
      D = Math.min(36, Math.max(8, -cleave.eye.y / mid.y));
    }
    const strikeCenter = cleave.eye.clone().addScaledVector(mid, D);

    cleave.post.C.copy(strikeCenter);
    cleave.post.N.copy(nu);
    cleave.post.M.copy(mid);
    cleave.post.D = Math.max(8, Math.min(34, D));
    cleave.haze = 1.0;

    // Slide vector along the cut sheet
    const down = new THREE.Vector3(0, -1, 0).addScaledVector(nu, nu.y);
    const slide = down.length() > 0.3
      ? down.normalize()
      : alongCleave(1, new THREE.Vector3()).sub(alongCleave(0, new THREE.Vector3())).normalize();

    // 1. Slice every arena pillar crossed by the 3D plane!
    pillars.slicePlane({
      eye: cleave.eye,
      n: nu,
      e1: cleave.e1,
      e2: cleave.e2,
      theta: cleave.theta,
      reach: 65,
      slide,
      now,
      cutColorHex: pal.primary,
    });

    // 2. Check if the opponent lies across the slash plane within the drawn angular span!
    const d0 = nu.dot(cleave.eye);
    const relOpp = targetCenter.clone().sub(cleave.eye);
    const oppFar = relOpp.length();
    const oppAng = Math.atan2(relOpp.dot(cleave.e2), relOpp.dot(cleave.e1));
    const oppPlaneDist = Math.abs(nu.dot(targetCenter) - d0);
    if (oppFar < 60 && oppAng >= -0.22 && oppAng <= cleave.theta + 0.22 && oppPlaneDist < 2.6 * spell.scale) {
      const knock = slide.clone().multiplyScalar(0.75).addScaledVector(nu, 0.65).normalize();
      cleave.target.damage(spell.damage, knock, 16 * spell.scale);
      particles.burst(targetCenter, pal.rgb, 55, 13, 1);
      particles.burst(targetCenter, [1, 0.96, 0.85], 16, 8, 3);
      sound.hit();
    }

    // 3. Floor scorch along cut intersection + particle ribbons
    for (let i = 0; i <= 18; i++) {
      alongCleave(i / 18, tmp1);
      if (tmp1.y < -0.02) {
        const t = -cleave.eye.y / tmp1.y;
        if (t > 2 && t < 48) {
          const gx = cleave.eye.x + tmp1.x * t;
          const gz = cleave.eye.z + tmp1.z * t;
          if (i % 5 === 0) arena.addMark(gx, gz, 1.8 * spell.scale, pal.rgb, 0);
          particles.spawn({
            kind: 5,
            x: gx, y: 0.4, z: gz,
            vx: slide.x * 10 + particles.rnd(3),
            vy: 3 + Math.random() * 6,
            vz: slide.z * 10 + particles.rnd(3),
            life: 0.45 + Math.random() * 0.3,
            size: [0.04, 0.02],
            colour: pal.rgb,
          });
        }
      }
    }

    arena.triggerFloorShock(strikeCenter.x, strikeCenter.z);
    arena.flashLight(strikeCenter, pal.primary, 26);
    sound.cleaveSlash();
    kickCamera(2.6);
  }

  /** Find aim point on arena floor or opponent */
  function findAimPoint(origin, dir, opponent) {
    // Soft aim-assist toward opponent if aiming close
    const oppCenter = opponent.getCenter(new THREE.Vector3());
    const toOpp = oppCenter.clone().sub(origin);
    const distOpp = toOpp.length();
    if (distOpp < 48 && toOpp.clone().normalize().dot(dir) > 0.94) {
      return oppCenter.clone();
    }
    const pHit = pillars.raycast(origin, dir, 48);
    if (pHit) return pHit.point;
    if (dir.y < -0.02) {
      const t = Math.min(44, Math.max(4, -origin.y / dir.y));
      const p = origin.clone().addScaledVector(dir, t);
      p.y = 0.05;
      const r = Math.hypot(p.x, p.z);
      if (r > arena.radius - 1) {
        p.x *= (arena.radius - 1) / r;
        p.z *= (arena.radius - 1) / r;
      }
      return p;
    }
    const p = origin.clone().addScaledVector(dir, 22);
    p.y = Math.max(0.05, p.y);
    return p;
  }

  return {
    get cleavePhase() { return cleave.phase; },
    get cleaveLocked() { return cleave.phase === 'aim' || cleave.phase === 'draw'; },
    get worldPace() {
      if (cleave.phase === 'aim' || cleave.phase === 'draw') {
        return 1 - 0.95 * Math.min(1, cleave.aimT / 0.2);
      }
      if (cleave.phase === 'strike' && cleave.t < 5 * F30) return 0;
      if (cleave.phase === 'strike' && cleave.t < 13 * F30) return 0.22;
      if (inkTimer > 0) return 0.08;
      return 1;
    },
    get fovOffset() {
      return 13 * cleave.focusK - 14 * cleave.punch;
    },
    get jolt() { return jolt; },

    steerCleave(dx, dy) {
      if (cleave.phase !== 'aim' && cleave.phase !== 'draw') return false;
      const half = (camera.fov * Math.PI) / 360;
      const wide = Math.atan(Math.tan(half) * camera.aspect);
      cleave.brushX = THREE.MathUtils.clamp(cleave.brushX + dx, -wide * 0.9, wide * 0.9);
      cleave.brushY = THREE.MathUtils.clamp(cleave.brushY + dy, -half * 0.85, half * 0.85);
      return true;
    },

    cancelCleave() {
      if (cleave.phase === 'aim' || cleave.phase === 'draw') {
        cleave.phase = 'idle';
        ribbonMesh.visible = false;
        aimDot.visible = false;
      }
    },

    /**
     * Full-screen 3D Three.js drawing inside the Spell Forge!
     * Converts screen NDC (-1..1) rays directly into the glowing 64-segment 3D ribbon + star particles.
     */
    beginForgeStroke(ndcX, ndcY, colorHex = '#f4cf7a') {
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
      cleave.eye.copy(camera.position);
      cleave.d0.copy(ray.ray.direction).normalize();
      cleave.d1.copy(cleave.d0);
      cleave.path.length = 0;
      cleave.path.push(cleave.d0.clone());
      ribbonMat.uniforms.uColor.value.set(colorHex);
      ribbonMat.uniforms.uDark.value.set('#0d091c');
      ribbonMat.uniforms.uFlare.value = 0;
      ribbonMat.uniforms.uSurge.value = -1;
      ribbonMat.uniforms.uFade.value = 1;
      ribbonMesh.visible = true;
      aimDot.visible = true;
      aimDot.position.copy(camera.position).addScaledVector(cleave.d0, LAY);
    },

    moveForgeStroke(ndcX, ndcY, rgb = [1, 0.85, 0.45]) {
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
      cleave.d1.copy(ray.ray.direction).normalize();
      if (cleave.path.length === 0 || cleave.path[cleave.path.length - 1].angleTo(cleave.d1) > 0.006) {
        if (cleave.path.length < 320) cleave.path.push(cleave.d1.clone());
      }
      computeSheet();
      if (cleave.path.length >= 2) {
        ribbonMesh.visible = true;
        updateRibbonGeometry(RIBBON_W * 1.1);
      }
      aimDot.visible = true;
      aimDot.position.copy(camera.position).addScaledVector(cleave.d1, LAY);
      // Spawn live 3D glowing sparks along the drawn stroke!
      const p = camera.position.clone().addScaledVector(cleave.d1, LAY);
      particles.spawn({
        kind: 3,
        x: p.x + particles.rnd(0.08),
        y: p.y + particles.rnd(0.08),
        z: p.z + particles.rnd(0.08),
        vx: particles.rnd(0.4), vy: 0.3 + Math.random() * 0.4, vz: particles.rnd(0.4),
        life: 0.4,
        size: [0.16, 0.02],
        colour: rgb,
      });
    },

    finishForgeStroke(spell, caster, target) {
      aimDot.visible = false;
      if (spell.archetype === 'cleave' && computeSheet() && Math.abs(cleave.theta) >= 0.08) {
        // Trigger the EXACT #9 full-screen 30fps Cleave impact right from the drawn 3D stroke!!
        cleave.spell = spell;
        cleave.caster = caster;
        cleave.target = target;
        ribbonMat.uniforms.uColor.value.set(spell.palette.primary);
        ribbonMat.uniforms.uDark.value.set(spell.palette.palDark);
        post.setPalette(spell.palette.palDark, spell.palette.palMid, spell.palette.palHi, spell.palette.palLight);
        cleave.phase = 'strike';
        cleave.t = 0;
        cleave.cutDone = false;
        return;
      }
      ribbonMesh.visible = false;
      // Fire the compiled spell immediately at the target in 3D space!
      const dir = target.getCenter(new THREE.Vector3()).sub(camera.position).normalize();
      this.castSpell({ spell, caster, target, origin: camera.position.clone(), dir, isPlayer: true });
    },

    /** Handle mouse press/release for Player Cleave spell (#9-style) */
    handlePlayerCleaveInput(isDown, wasDown, spell, caster, target) {
      if (cleave.phase === 'strike') return false;
      const pressed = isDown && !wasDown;
      if (pressed && cleave.phase === 'idle') {
        cleave.phase = 'aim';
        cleave.spell = spell;
        cleave.caster = caster;
        cleave.target = target;
        cleave.aimT = 0;
        cleave.theta = 0;
        cleave.path.length = 0;
        euler.setFromQuaternion(camera.quaternion, 'YXZ');
        cleave.baseYaw = euler.y;
        cleave.basePitch = euler.x;
        cleave.brushX = 0;
        cleave.brushY = 0;
        ribbonMat.uniforms.uColor.value.set(spell.palette.primary);
        ribbonMat.uniforms.uDark.value.set(spell.palette.palDark);
        post.setPalette(spell.palette.palDark, spell.palette.palMid, spell.palette.palHi, spell.palette.palLight);
        sound.cleaveAim();
        return false;
      }
      if (pressed && cleave.phase === 'aim') {
        cleave.phase = 'draw';
        cleave.eye.copy(camera.position);
        dirFromYawPitch(cleave.baseYaw - cleave.brushX, cleave.basePitch + cleave.brushY, cleave.d0);
        cleave.d1.copy(cleave.d0);
        cleave.path.length = 0;
        cleave.path.push(cleave.d0.clone());
        return false;
      }
      if (cleave.phase === 'draw') {
        cleave.eye.copy(camera.position);
        if (isDown) {
          dirFromYawPitch(cleave.baseYaw - cleave.brushX, cleave.basePitch + cleave.brushY, cleave.d1);
          computeSheet();
          if (cleave.path[cleave.path.length - 1].angleTo(cleave.d1) > 0.008 && cleave.path.length < 300) {
            cleave.path.push(cleave.d1.clone());
          }
          return false;
        } else {
          if (computeSheet() && Math.abs(cleave.theta) >= 0.08) {
            cleave.path.push(cleave.d1.clone());
            cleave.phase = 'strike';
            cleave.t = 0;
            cleave.cutDone = false;
            caster.state.castRecoil = 1.0;
            return true; // spell consumed -> start cooldown!
          } else {
            cleave.phase = 'aim';
            cleave.theta = 0;
            cleave.path.length = 0;
            ribbonMesh.visible = false;
            return false;
          }
        }
      }
      return false;
    },

    /** Cast any non-interactive spell (or AI quick-cleave) immediately! */
    castSpell({ spell, caster, target, origin, dir, isPlayer }) {
      const pal = spell.palette;
      const tip = caster.getStaffTip(new THREE.Vector3());
      const aimPt = findAimPoint(origin, dir, target);
      caster.state.castRecoil = 0.9;

      // Trace the player's custom Forge drawing in 3D particles!
      spawnDrawnTrace(spell, tip, dir);

      // Caster's launch magic circle
      sigils.spawn({
        pos: tip.clone().addScaledVector(dir, 0.8),
        color: pal.primary,
        sides: spell.sides,
        radius: 1.3 * spell.scale,
        endRadius: 1.8 * spell.scale,
        life: 0.75,
        normal: dir,
      });

      if (spell.archetype === 'cleave') {
        // AI or Quick Cleave (telegraphs a glowing line then slices through target!)
        const targetPos = target.getCenter(new THREE.Vector3());
        const slashDir = new THREE.Vector3(Math.random() - 0.5, (Math.random() - 0.5) * 0.5, Math.random() - 0.5).normalize();
        sigils.spawn({
          pos: new THREE.Vector3(targetPos.x, 0.12, targetPos.z),
          color: pal.primary,
          sides: 2,
          radius: 4.5,
          life: 0.9,
        });
        actives.push({
          kind: 'ai-cleave',
          spell,
          caster,
          target,
          center: targetPos.clone(),
          slashDir,
          age: 0,
          windup: 0.65,
          done: false,
        });
        sound.cleaveAim();
        return;
      }

      if (spell.archetype === 'gravity') {
        const mode = spell.gravityMode || 'lift-slam';
        const groundPt = new THREE.Vector3(aimPt.x, 0.14, aimPt.z);
        const rad = (mode === 'blackhole' ? 11.5 : 10.5) * spell.scale;
        arena.addMark(groundPt.x, groundPt.z, rad * 0.8, pal.rgb, 1);

        sigils.spawn({
          pos: groundPt.clone(),
          color: pal.primary,
          sides: spell.sides,
          radius: rad * 0.75,
          endRadius: rad * 0.95,
          life: mode === 'slam' ? 1.1 : 2.3,
          turn: 0.9,
        });

        let disc = null;
        if (mode === 'blackhole') {
          disc = volumetrics.acquireDisc();
          disc.mesh.position.set(groundPt.x, 4.6, groundPt.z);
          disc.mesh.rotation.set(0.32, 0, 0.18);
          disc.mesh.scale.setScalar(1.35 * spell.scale);
          disc.mat.uniforms.uColA.value.set(pal.primary);
          disc.mat.uniforms.uColB.value.set(pal.secondary);
          disc.mat.uniforms.uOn.value = 1;
        } else {
          // Overhead gravity seal
          sigils.spawn({
            pos: new THREE.Vector3(groundPt.x, mode === 'slam' ? 9.5 : 11.0, groundPt.z),
            color: pal.secondary,
            sides: spell.sides,
            radius: rad * 0.65,
            endRadius: rad * 0.8,
            life: mode === 'slam' ? 0.9 : 2.1,
            turn: -1.1,
            rise: mode === 'slam' ? -6.5 : 0,
          });
        }

        actives.push({
          kind: 'gravity',
          mode,
          spell,
          caster,
          target,
          isPlayer,
          center: new THREE.Vector3(groundPt.x, mode === 'blackhole' ? 4.6 : 0.2, groundPt.z),
          radius: rad,
          age: 0,
          phaseDur: mode === 'slam' ? 0.45 : mode === 'blackhole' ? 2.1 : 1.15,
          slammed: false,
          disc,
        });
        sound.gravityLift();
        return;
      }

      if (spell.archetype === 'blast') {
        const groundPt = new THREE.Vector3(aimPt.x, 0.14, aimPt.z);
        const rad = 8.5 * spell.scale;
        // Stack 3 rising arcane circles over target (small-magic Explosion homage!)
        [1.5, 5.2, 9.2].forEach((h, idx) => {
          sigils.spawn({
            pos: new THREE.Vector3(groundPt.x, h, groundPt.z),
            color: idx === 2 ? pal.secondary : pal.primary,
            sides: [3, 6, 8][idx],
            radius: (5.8 - idx * 1.1) * spell.scale,
            life: 1.0,
            turn: (idx % 2 ? -1 : 1) * (0.7 + idx * 0.2),
          });
        });
        actives.push({
          kind: 'blast',
          spell,
          caster,
          target,
          isPlayer,
          center: groundPt,
          radius: rad,
          age: 0,
          windup: 0.62,
          detonated: false,
        });
        sound.blastCharge();
        return;
      }

      if (spell.archetype === 'vortex') {
        const groundPt = new THREE.Vector3(aimPt.x, 0.08, aimPt.z);
        const slot = volumetrics.acquireVortex();
        slot.mat.uniforms.uBase.value.copy(groundPt);
        slot.mat.uniforms.uShape.value.set(16 * spell.scale, 1.3 * spell.scale, 5.0 * spell.scale, 1);
        slot.mat.uniforms.uColA.value.set(pal.primary);
        slot.mat.uniforms.uColB.value.set(pal.palDark);
        sigils.spawn({
          pos: groundPt.clone().add(new THREE.Vector3(0, 0.1, 0)),
          color: pal.primary,
          sides: spell.sides,
          radius: 4.5 * spell.scale,
          life: 1.4,
          turn: 1.8,
        });
        actives.push({
          kind: 'vortex',
          spell,
          caster,
          target,
          pos: groundPt,
          vel: new THREE.Vector3(),
          age: 0,
          life: 3.6,
          slot,
          hitTick: 0,
        });
        sound.vortex();
        return;
      }

      if (spell.archetype === 'beam') {
        const endPt = origin.clone().addScaledVector(dir, 46);
        const pHit = pillars.raycast(origin, dir, 46);
        let maxLen = 46;
        if (pHit) {
          endPt.copy(pHit.point);
          maxLen = pHit.dist;
        }
        // Check hit on opponent cylinder along ray
        const oppC = target.getCenter(new THREE.Vector3());
        const rel = oppC.clone().sub(tip);
        const proj = rel.dot(dir);
        if (proj > 0 && proj < maxLen + 2) {
          const perp = rel.clone().addScaledVector(dir, -proj).length();
          if (perp < 1.65 * spell.scale) {
            target.damage(spell.damage, dir, 15 * spell.scale);
            particles.burst(oppC, pal.rgb, 45, 11, 1);
            sound.hit();
          }
        }
        volumetrics.spawnBeam({
          from: tip,
          to: endPt,
          radius: 0.72 * spell.scale,
          color: pal.primary,
          life: 0.65,
        });
        pillars.applyBlast(endPt, 6.5 * spell.scale, 18);
        particles.burst(endPt, pal.rgb, 55, 13, 0);
        particles.burst(endPt, [1, 0.96, 0.85], 35, 16, 1);
        arena.addMark(endPt.x, endPt.z, 3.6 * spell.scale, pal.rgb, 0);
        if (isPlayer) {
          triggerShockwaveRings(endPt, new THREE.Vector3(0, 1, 0), dir.clone(), spell);
          kickCamera(1.9);
        }
        arena.flashLight(endPt, pal.primary, 20);
        sound.beam();
        return;
      }

      // Default: 'barrage' (5 rapid homing arcane/lightning bolts!)
      const count = spell.isMega ? 7 : 5;
      for (let i = 0; i < count; i++) {
        actives.push({
          kind: 'bolt',
          spell,
          caster,
          target,
          delay: i * 0.085,
          launched: false,
          pos: new THREE.Vector3(),
          vel: new THREE.Vector3(),
          age: 0,
          life: 2.2,
          spreadIdx: i - (count - 1) * 0.5,
          dir: dir.clone(),
        });
      }
      sound.bolt();
    },

    clear() {
      actives.forEach((a) => {
        if (a.disc) volumetrics.releaseDisc(a.disc);
        if (a.slot) volumetrics.releaseVortex(a.slot);
      });
      actives.length = 0;
      kicks.length = 0;
      cleave.phase = 'idle';
      cleave.ringAge = -1;
      cleave.haze = 0;
      cleave.focusK = 0;
      cleave.punch = 0;
      inkTimer = 0;
      whiteFlash = 0;
      doomLevel = 0;
      ribbonMesh.visible = false;
      aimDot.visible = false;
      post.setHole(camera, new THREE.Vector3(), 1, 0);
      post.setShock(camera, new THREE.Vector3(), 1, 0);
    },

    update(realDt, worldDt, now) {
      // --- 1. Update Camera Kicks (30fps quantized jolt) ---
      for (const k of kicks) k.t += realDt;
      while (kicks.length && kicks[0].t > 1.0) kicks.shift();
      const amp = 0.55 * kicks.reduce((acc, k) => acc + k.power * Math.exp(-k.t * 5.8) * Math.min(1, k.t * 50), 0);
      shakeT += realDt;
      if (Math.floor(shakeT * 30) !== Math.floor((shakeT - realDt) * 30)) {
        jolt.set((Math.random() - 0.5) * 0.065 * amp, (Math.random() - 0.5) * 0.055 * amp, (Math.random() - 0.5) * 0.085 * amp);
      }
      if (amp < 0.004) jolt.set(0, 0, 0);

      // --- 2. Update Cleave (#9-style) Timeline & Post-Process ---
      const cp = cleave.post;
      cp.mode = 0; cp.k = 0; cp.circle = 0; cp.split = 0; cp.written = 0;
      ribbonMat.uniforms.uT.value = now;

      if (cleave.ringAge >= 0) {
        cleave.ringAge += realDt;
        cp.age = cleave.ringAge;
        if (cleave.ringAge > 0.92) {
          cleave.ringAge = -1;
          cp.age = 0;
        }
      } else {
        cp.age = 0;
      }
      cleave.haze = Math.max(0, cleave.haze - realDt * 0.75);
      cp.haze = cleave.haze * cleave.haze;

      if (cleave.phase === 'aim' || cleave.phase === 'draw' || (cleave.phase === 'strike' && cleave.t < 5 * F30)) {
        cleave.aimT += realDt;
        cleave.focusK += (1 - cleave.focusK) * Math.min(1, realDt * 11);
      } else if (cleave.phase === 'strike' && cleave.t < 14 * F30) {
        cleave.focusK = 0;
        cleave.punch = 1;
      } else {
        cleave.focusK += (0 - cleave.focusK) * Math.min(1, realDt * 14);
        cleave.punch *= Math.exp(-realDt * 2.6);
        if (cleave.punch < 0.003) cleave.punch = 0;
      }

      cp.focus = cleave.phase === 'aim'
        ? 0.65 * Math.min(1, cleave.aimT / 0.18)
        : cleave.phase === 'draw'
          ? 0.65 + 0.35 * Math.min(1, Math.abs(cleave.theta) / 0.45)
          : cleave.phase === 'strike' && cleave.t < 5 * F30
            ? 1
            : cleave.phase === 'strike'
              ? 0
              : Math.max(0, cp.focus - realDt * 6);
      cp.fringe = cleave.ringAge >= 0 ? Math.max(0, 1 - cleave.ringAge / 0.7) * 0.72 : 0;

      if (cleave.phase === 'aim') {
        ribbonMesh.visible = false;
        dirFromYawPitch(cleave.baseYaw - cleave.brushX, cleave.basePitch + cleave.brushY, tmp1);
        aimDot.visible = true;
        aimDot.position.copy(camera.position).addScaledVector(tmp1, LAY);
        aimDot.material.rotation = now * 0.8;
      } else if (cleave.phase === 'draw') {
        ribbonMesh.visible = Math.abs(cleave.theta) > 0.005;
        ribbonMat.uniforms.uFlare.value = 0;
        ribbonMat.uniforms.uSurge.value = -1;
        ribbonMat.uniforms.uFade.value = 1;
        if (ribbonMesh.visible) updateRibbonGeometry(RIBBON_W);
        aimDot.visible = true;
        aimDot.position.copy(camera.position).addScaledVector(cleave.d1, LAY);
        aimDot.material.rotation = now * 2.5;
      } else if (cleave.phase === 'strike') {
        aimDot.visible = false;
        cleave.t += realDt;
        const f = Math.floor(cleave.t / F30);
        const ft = f * F30;
        cp.frame = f;
        const flare = Math.min(1, cleave.t / (2.5 * F30));
        const fb = f - 1;
        ribbonMat.uniforms.uFlare.value = flare;
        ribbonMat.uniforms.uSurge.value = ft < 3 * F30 ? flare : -1;
        ribbonMat.uniforms.uCount.value = Math.max(5, Math.round(Math.abs(cleave.theta) / (RIBBON_W * 2.5)));
        updateRibbonGeometry(RIBBON_W * (1 + 0.35 * flare));
        ribbonMesh.visible = ft < 3 * F30;

        if (ft < 3 * F30) { cp.circle = 1; cp.written = flare; }
        else if (ft < 5 * F30) { cp.mode = 1; cp.k = Math.max(0, fb - 2); cp.circle = 2; }
        else if (ft < 6 * F30) { cp.mode = 2; cp.k = 0.1; cp.circle = 3; }
        else if (ft < 10 * F30) { cp.mode = 3; cp.k = Math.max(0, (fb - 4) / 4); cp.circle = 2; cp.split = 0.3 + 0.7 * cp.k; }
        else if (ft < 11 * F30) { cp.mode = 2; cp.k = 1.1; cp.circle = 3; cp.split = 1.0; }
        else if (ft < 13 * F30) { cp.mode = 4; cp.k = fb === 10 ? 0.35 : 0.72; cp.split = 1.0 - cp.k; }

        if (ft >= 5 * F30 && !cleave.cutDone) {
          executeCleaveCut(now);
        }
        if (ft >= 13 * F30 && cleave.ringAge < 0 && cleave.cutDone && cleave.t < 15 * F30) {
          cleave.ringAge = 0;
          kickCamera(1.4);
        }
        if (cleave.t > 16 * F30) {
          cleave.phase = 'idle';
          ribbonMesh.visible = false;
        }
      } else {
        ribbonMesh.visible = false;
        aimDot.visible = false;
      }

      // Project cleave endpoints to screen UV
      if (cleave.phase !== 'idle') {
        const pa = tmp1.copy(camera.position).addScaledVector(alongCleave(0, tmp2), LAY).project(camera);
        cp.a.set(pa.x * 0.5 + 0.5, pa.y * 0.5 + 0.5);
        const pb = tmp1.copy(camera.position).addScaledVector(alongCleave(1, tmp2), LAY).project(camera);
        cp.b.set(pb.x * 0.5 + 0.5, pb.y * 0.5 + 0.5);
        const nuY = cleave.n.y < 0 ? -1 : 1;
        const pm = tmp1.copy(camera.position).addScaledVector(alongCleave(0.5, tmp2), LAY).project(camera);
        const pn = tmp2.copy(camera.position).addScaledVector(alongCleave(0.5, new THREE.Vector3()), LAY).addScaledVector(cleave.n, 0.05 * nuY).project(camera);
        const lx = (cp.b.x - cp.a.x) * camera.aspect, ly = cp.b.y - cp.a.y;
        cp.up = ((pn.x - pm.x) * camera.aspect * -ly + (pn.y - pm.y) * lx) < 0 ? -1 : 1;
      }

      post.setCleave(cp, camera);

      // --- 3. Update Active Spells ---
      let activeHole = null;
      let targetDoom = 0;

      for (let i = actives.length - 1; i >= 0; i--) {
        const a = actives[i];
        const pal = a.spell.palette;

        if (a.kind === 'ai-cleave') {
          a.age += worldDt;
          // Telegraph golden/crimson slash sparks before executing
          if (Math.random() < 0.8) {
            const u = (Math.random() - 0.5) * 8;
            particles.spawn({
              kind: 3,
              x: a.center.x + a.slashDir.x * u,
              y: a.center.y + a.slashDir.y * u,
              z: a.center.z + a.slashDir.z * u,
              life: 0.25,
              size: [0.22, 0.05],
              colour: pal.rgb,
            });
          }
          if (a.age >= a.windup && !a.done) {
            a.done = true;
            const oppC = a.target.getCenter(new THREE.Vector3());
            if (oppC.distanceTo(a.center) < 5.5) {
              const knock = oppC.clone().sub(a.caster.state.pos).setY(0.4).normalize();
              a.target.damage(a.spell.damage * 0.7, knock, 13);
              sound.hit();
            }
            particles.burst(a.center, pal.rgb, 55, 14, 1);
            pillars.applyBlast(a.center, 7.5, 16);
            sound.cleaveSlash();
            actives.splice(i, 1);
          }
          continue;
        }

        if (a.kind === 'gravity') {
          a.age += worldDt;
          const oppC = a.target.getCenter(new THREE.Vector3());
          const distOpp = Math.hypot(oppC.x - a.center.x, oppC.z - a.center.z);

          if (!a.slammed) {
            targetDoom = Math.max(targetDoom, 0.55);
            post.uniforms.uDoomCol.value.set(pal.palMid);

            if (a.mode === 'blackhole') {
              // Pull pillars, particles, and opponent inward!
              pillars.applyGravityField(a.center, a.radius * 1.4, 'blackhole', worldDt, 28);
              particles.fields.push({ x: a.center.x, y: a.center.y, z: a.center.z, radius: a.radius * 1.5, type: 'pull', strength: 38, swirl: 0.9 });
              if (distOpp < a.radius * 1.15) {
                const toC = a.center.clone().sub(oppC);
                const d = Math.max(1.2, toC.length());
                toC.divideScalar(d);
                a.target.state.vel.addScaledVector(toC, 30 * worldDt);
                a.target.state.grounded = false;
                a.target.state.gravSuspended = 0.2;
              }
              // Spawn inward spiraling motes & runes
              for (let q = 0; q < 3; q++) {
                const ang = Math.random() * Math.PI * 2;
                const rr = a.radius * (0.45 + 0.55 * Math.random());
                particles.spawn({
                  kind: Math.random() < 0.2 ? 6 : 1,
                  x: a.center.x + Math.cos(ang) * rr,
                  y: a.center.y + (Math.random() - 0.5) * 4,
                  z: a.center.z + Math.sin(ang) * rr,
                  vx: -Math.sin(ang) * 4,
                  vy: 0,
                  vz: Math.cos(ang) * 4,
                  life: 0.9,
                  size: [0.16, 0.04],
                  colour: pal.rgb,
                });
              }
              activeHole = { pos: a.center, radius: 1.85 * a.spell.scale, power: 1.0, pullBlur: 0.14, darkCore: 1, color: pal.primary };
            } else if (a.mode === 'lift-slam') {
              // Anti-gravity telekinetic lift!
              pillars.applyGravityField(a.center, a.radius * 1.25, 'lift', worldDt, 26);
              particles.fields.push({ x: a.center.x, y: 4.5, z: a.center.z, radius: a.radius * 1.3, type: 'lift', strength: 22 });
              if (distOpp < a.radius) {
                const targetY = 6.2;
                a.target.state.vel.y += ((targetY - a.target.state.pos.y) * 6.5 - a.target.state.vel.y * 3.0) * worldDt;
                a.target.state.vel.x *= Math.exp(-2.5 * worldDt);
                a.target.state.vel.z *= Math.exp(-2.5 * worldDt);
                a.target.state.grounded = false;
                a.target.state.gravSuspended = 0.25;
              }
              // Rising anti-gravity runes & light streaks
              for (let q = 0; q < 4; q++) {
                const ang = Math.random() * Math.PI * 2;
                const rr = a.radius * Math.sqrt(Math.random());
                particles.spawn({
                  kind: Math.random() < 0.25 ? 6 : 5,
                  x: a.center.x + Math.cos(ang) * rr,
                  y: 0.3 + Math.random() * 2,
                  z: a.center.z + Math.sin(ang) * rr,
                  vx: 0, vy: 7 + Math.random() * 6, vz: 0,
                  life: 0.7,
                  size: [0.05, 0.02],
                  colour: pal.rgb,
                });
              }
              activeHole = { pos: new THREE.Vector3(a.center.x, 4.2, a.center.z), radius: 2.2 * a.spell.scale, power: 0.55, pullBlur: 0.04, darkCore: 0, color: pal.primary };
            } else {
              // Instant heavy crush charge
              particles.fields.push({ x: a.center.x, y: 0, z: a.center.z, radius: a.radius, type: 'crush', strength: 45 });
              activeHole = { pos: new THREE.Vector3(a.center.x, 2.5, a.center.z), radius: 2.5 * a.spell.scale, power: 0.7, pullBlur: 0.08, darkCore: 0, color: pal.primary };
            }

            if (a.age >= a.phaseDur) {
              a.slammed = true;
              if (a.disc) {
                volumetrics.releaseDisc(a.disc);
                a.disc = null;
              }
              if (a.mode === 'blackhole') {
                pillars.applyBlast(a.center, a.radius * 1.3, 28 * a.spell.scale);
                if (distOpp < a.radius * 1.1) {
                  const out = oppC.clone().sub(a.center).setY(0.35).normalize();
                  a.target.damage(a.spell.damage, out, 22 * a.spell.scale);
                  sound.hit();
                }
              } else {
                // MASSIVE GRAVITY SLAM DOWNWARD!
                pillars.applyGravityField(a.center, a.radius * 1.3, 'slam', 0.1, 32 * a.spell.scale);
                if (distOpp < a.radius) {
                  a.target.state.vel.y = -32;
                  a.target.damage(a.spell.damage, new THREE.Vector3(0, -1, 0), 4);
                  sound.hit();
                }
              }
              const slamPt = new THREE.Vector3(a.center.x, 0.35, a.center.z);
              arena.addMark(slamPt.x, slamPt.z, a.radius * 0.85, pal.rgb, 0);
              particles.burst(slamPt, pal.rgb, 80, 16, 1);
              particles.burst(slamPt, [0.42, 0.38, 0.48], 26, 10, 2);
              particles.burst(slamPt, [1, 0.96, 0.9], 24, 12, 3);
              if (a.isPlayer) {
                triggerImpactBeat(a.spell, slamPt, true);
                triggerShockwaveRings(slamPt, new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0), a.spell);
              } else {
                kickCamera(1.4);
              }
              sound.gravitySlam();
              actives.splice(i, 1);
            }
          }
          continue;
        }

        if (a.kind === 'blast') {
          a.age += worldDt;
          targetDoom = Math.max(targetDoom, 0.65 * Math.min(1, a.age / a.windup));
          post.uniforms.uDoomCol.value.set(pal.palMid);

          // Falling meteor core
          const fallY = THREE.MathUtils.lerp(16, 0.4, Math.min(1, a.age / a.windup));
          for (let q = 0; q < 4; q++) {
            particles.spawn({
              kind: 0,
              x: a.center.x + particles.rnd(0.5),
              y: fallY + particles.rnd(0.5),
              z: a.center.z + particles.rnd(0.5),
              vx: particles.rnd(1.5), vy: 2 + Math.random() * 3, vz: particles.rnd(1.5),
              life: 0.35,
              size: [0.85, 0.25],
              colour: pal.rgb,
            });
          }

          if (a.age >= a.windup && !a.detonated) {
            a.detonated = true;
            volumetrics.spawnBlast({
              pos: a.center,
              maxR: 6.2 * a.spell.scale,
              life: 2.6,
              colCore: pal.palLight,
              colMid: pal.primary,
              colSmoke: pal.smoke,
            });
            pillars.applyBlast(a.center, a.radius * 1.45, 24 * a.spell.scale);
            const oppC = a.target.getCenter(new THREE.Vector3());
            if (oppC.distanceTo(a.center) < a.radius) {
              const out = oppC.clone().sub(a.center).setY(0.5).normalize();
              a.target.damage(a.spell.damage, out, 20 * a.spell.scale);
              sound.hit();
            }
            arena.addMark(a.center.x, a.center.z, a.radius * 0.9, pal.rgb, 0);
            particles.burst(a.center.clone().add(new THREE.Vector3(0, 1, 0)), pal.rgb, 85, 18, 1);
            particles.burst(a.center.clone().add(new THREE.Vector3(0, 0.8, 0)), pal.rgb, 36, 12, 0);
            if (a.isPlayer) {
              triggerImpactBeat(a.spell, a.center, true);
              triggerShockwaveRings(a.center, new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 0, 0), a.spell);
            } else {
              kickCamera(1.5);
            }
            sound.blastBoom();
            actives.splice(i, 1);
          }
          continue;
        }

        if (a.kind === 'vortex') {
          a.age += worldDt;
          const t = a.age / a.life;
          if (t >= 1) {
            volumetrics.releaseVortex(a.slot);
            actives.splice(i, 1);
            continue;
          }
          // Steer gently toward opponent
          const toOpp = a.target.state.pos.clone().sub(a.pos).setY(0);
          const dOpp = toOpp.length();
          if (dOpp > 0.5) {
            toOpp.divideScalar(dOpp);
            a.vel.lerp(toOpp.multiplyScalar(7.5), Math.min(1, worldDt * 2.5));
          }
          a.pos.addScaledVector(a.vel, worldDt);
          const fade = Math.min(1, a.age * 3.5) * (1 - THREE.MathUtils.smoothstep(t, 0.78, 1.0));
          a.slot.mat.uniforms.uBase.value.copy(a.pos);
          a.slot.mat.uniforms.uShape.value.w = fade;
          a.slot.mat.uniforms.uLean.value.set(-a.vel.x * 0.45, -a.vel.z * 0.45);

          pillars.applyGravityField(a.pos.clone().add(new THREE.Vector3(0, 4, 0)), 9.5 * a.spell.scale, 'vortex', worldDt, 24);
          particles.fields.push({ x: a.pos.x, y: 5, z: a.pos.z, radius: 11, type: 'vortex', spin: 24, pull: 8, lift: 14 });

          // Swirling sparks & debris
          for (let q = 0; q < 3; q++) {
            const ang = Math.random() * Math.PI * 2;
            const r = 1.5 + Math.random() * 3.5;
            particles.spawn({
              kind: Math.random() < 0.45 ? 5 : 4,
              x: a.pos.x + Math.cos(ang) * r,
              y: 0.4 + Math.random() * 3,
              z: a.pos.z + Math.sin(ang) * r,
              vx: -Math.sin(ang) * 9,
              vy: 6 + Math.random() * 6,
              vz: Math.cos(ang) * 9,
              life: 0.9,
              size: [0.14, 0.06],
              colour: pal.rgb,
            });
          }

          if (dOpp < 4.5 * a.spell.scale) {
            a.target.state.vel.y = Math.max(a.target.state.vel.y, 7.5);
            a.target.state.vel.x += (-toOpp.z * 14) * worldDt;
            a.target.state.vel.z += (toOpp.x * 14) * worldDt;
            a.target.state.grounded = false;
            a.hitTick += worldDt;
            if (a.hitTick >= 0.45) {
              a.hitTick = 0;
              a.target.damage(Math.round(a.spell.damage * 0.25), new THREE.Vector3(0, 1, 0), 4);
              sound.hit();
            }
          }
          continue;
        }

        if (a.kind === 'bolt') {
          if (!a.launched) {
            a.delay -= worldDt;
            if (a.delay <= 0) {
              a.launched = true;
              const tip = a.caster.getStaffTip(new THREE.Vector3());
              const right = new THREE.Vector3().crossVectors(a.dir, new THREE.Vector3(0, 1, 0)).normalize();
              a.pos.copy(tip).addScaledVector(right, a.spreadIdx * 0.65).add(new THREE.Vector3(0, 0.35 + Math.abs(a.spreadIdx) * 0.12, 0));
              const sp = (a.spell.isFast ? 40 : 31);
              a.vel.copy(a.dir).multiplyScalar(sp).addScaledVector(right, a.spreadIdx * 2.5);
              a.vel.y += 1.5;
              sound.bolt();
            }
            continue;
          }
          a.age += worldDt;
          if (a.age >= a.life) {
            actives.splice(i, 1);
            continue;
          }
          // Gentle homing toward opponent
          const oppC = a.target.getCenter(new THREE.Vector3());
          const toOpp = oppC.clone().sub(a.pos);
          const dOpp = toOpp.length();
          if (dOpp < 28) {
            toOpp.divideScalar(Math.max(dOpp, 0.01));
            const speed = a.vel.length();
            a.vel.lerp(toOpp.multiplyScalar(speed), Math.min(1, worldDt * 4.2));
          }
          a.pos.addScaledVector(a.vel, worldDt);

          // Bolt glowing trail
          particles.spawn({
            kind: 1,
            x: a.pos.x, y: a.pos.y, z: a.pos.z,
            vx: -a.vel.x * 0.1 + particles.rnd(1.2),
            vy: -a.vel.y * 0.1 + particles.rnd(1.2),
            vz: -a.vel.z * 0.1 + particles.rnd(1.2),
            life: 0.25,
            size: [0.18 * a.spell.scale, 0.02],
            colour: pal.rgb,
          });
          particles.spawn({
            kind: 7,
            x: a.pos.x, y: a.pos.y, z: a.pos.z,
            life: 0.12,
            size: [0.65 * a.spell.scale, 0.2],
            colour: pal.rgb,
            alpha: 0.55,
          });

          const hitFloor = a.pos.y <= 0.25;
          const hitOpp = dOpp < 1.35 * a.spell.scale;
          if (hitOpp || hitFloor) {
            if (hitOpp) {
              const dmg = Math.max(4, Math.round(a.spell.damage / (a.spell.isMega ? 5 : 4)));
              a.target.damage(dmg, a.vel.clone().normalize(), 7.5);
              sound.hit();
            }
            pillars.applyBlast(a.pos, 3.2 * a.spell.scale, 11);
            particles.burst(a.pos, pal.rgb, 20, 9, 1);
            arena.flashLight(a.pos, pal.primary, 10);
            actives.splice(i, 1);
          }
        }
      }

      // --- 4. Push global post-process channels ---
      if (activeHole) {
        post.setHole(camera, activeHole.pos, activeHole.radius, activeHole.power, activeHole.pullBlur, activeHole.darkCore, activeHole.color);
      } else {
        post.setHole(camera, new THREE.Vector3(), 1, 0);
      }

      if (shockVisual.active) {
        shockVisual.age += realDt;
        const t = shockVisual.age / shockVisual.maxAge;
        if (t >= 1) {
          shockVisual.active = false;
          post.setShock(camera, shockVisual.pos, 1, 0);
        } else {
          post.setShock(camera, shockVisual.pos, shockVisual.maxR * t, (1 - t) * 1.15);
        }
      }

      if (inkTimer > 0) {
        inkTimer -= realDt;
        const frameFlip = Math.floor(inkTimer / F30) % 2 === 0 ? 1 : -1;
        post.uniforms.uInk.value = inkTimer > 0 ? frameFlip * inkSign : 0;
      } else {
        post.uniforms.uInk.value = 0;
      }

      whiteFlash = Math.max(0, whiteFlash - realDt * 3.8);
      post.uniforms.uWhite.value = whiteFlash * whiteFlash;

      doomLevel += (targetDoom - doomLevel) * Math.min(1, realDt * 6);
      post.uniforms.uDoom.value = doomLevel;
    },
  };
}
