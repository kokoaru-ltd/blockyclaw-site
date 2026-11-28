import { PRESET_SPELLS } from './compiler.js';

const NS = 'http://www.w3.org/2000/svg';
const TAU = Math.PI * 2;
const P = (r, a) => `${(r * Math.cos(a)).toFixed(2)} ${(r * Math.sin(a)).toFixed(2)}`;

const ARCHETYPE_EMBLEMS = {
  cleave: [
    { d: 'M-10.5 7.5 L10.5 -7.5', cls: 'thin' },
    { d: 'M-8.8 5.2 Q0 0.6 8.8 -5.8 Q0 -0.6 -8.8 5.2 Z', cls: 'fill' },
  ],
  gravity: [
    { d: 'M-9.8 2.2 C-8.6 -1.6 -3.2 -4.6 2.6 -5.2 C7.4 -5.6 10.2 -4 9.8 -2.2', cls: 'thin' },
    { d: 'M0 -4.5 A4.5 4.5 0 1 1 0 4.5 A4.5 4.5 0 1 1 0 -4.5 Z', cls: 'dark' },
    { d: 'M9.8 -2.2 C8.6 1.6 3.2 4.6 -2.6 5.2 C-7.4 5.6 -10.2 4 -9.8 2.2', cls: '' },
  ],
  blast: [
    { d: Array.from({ length: 8 }, (_, k) => { const a = (k / 8) * TAU - Math.PI / 2; return `M${P(4.2, a)}L${P(k % 2 ? 7.2 : 9.8, a)}`; }).join(''), cls: '' },
    { d: 'M0 -2.4 A2.4 2.4 0 1 1 0 2.4 A2.4 2.4 0 1 1 0 -2.4 Z', cls: 'fill' },
  ],
  vortex: [
    { d: 'M-9 -7.8 Q0 -5.2 9 -7.8 M-7 -4 Q0.4 -1.6 7.4 -4.2 M-4.6 -0.2 Q0.8 1.6 5.6 -0.4 M-2.4 3.5 Q1 5 4 3.3 M-0.4 7 Q1.2 8.2 2.6 7', cls: '' },
  ],
  beam: [
    { d: 'M-9.5 0 H9.5', cls: '' },
    { d: 'M-6 -4.5 L9.5 0 L-6 4.5', cls: 'thin' },
    { d: 'M-8.5 -2.2 A2.2 2.2 0 1 1 -8.5 2.2 A2.2 2.2 0 1 1 -8.5 -2.2 Z', cls: 'fill' },
  ],
  barrage: [
    { d: 'M-8 -6 L-2 -6 L-4 0 L2 0 L-5 8 M3 -8 L8 -8 L5 -2 L10 -2 L3 6', cls: '' },
  ],
};

function buildMedallionSvg(spell) {
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '-20 -20 40 40');
  const add = (tag, attrs, parent = svg) => {
    const el = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    parent.appendChild(el);
    return el;
  };
  add('circle', { r: 18.4, class: 'disc' });
  add('circle', { r: 18.4, class: 'rim' });
  add('circle', { r: 15.6, class: 'rim in' });
  const sides = Math.max(2, spell.sides || 6);
  for (let k = 0; k < sides; k++) {
    const a = (k / sides) * TAU - Math.PI / 2;
    add('path', { d: `M${P(15.6, a)}L${P(18.4, a)}`, class: 'tick' });
  }
  const g = add('g', { class: 'emblem' });
  for (const p of ARCHETYPE_EMBLEMS[spell.archetype] || ARCHETYPE_EMBLEMS.blast) {
    add('path', { d: p.d, class: p.cls }, g);
  }
  return svg;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

/**
 * Manages the 3 clean game UI surfaces:
 * 1. Cinematic Home Lobby (#lobby — small-magic menu architecture)
 * 2. Full-Screen 3D Spell Forge HUD (#forge-hud — no 2D mini-canvas, draw directly on 3D Three.js!)
 * 3. In-Arena HUD (3 medallions in Duel, 9 medallions in Sandbox, ornamental life bars, floating dmg)
 */
export function createArenaUI({
  duelLoadout,
  music,
  sound,
  onStartDuel,
  onStartSandbox,
  onOpenForge,
  onOpenHome,
  onForgeTextCast,
  onForgePreset,
  onForgeBindSlot,
  onForgeResetPillars,
  onRematch,
}) {
  const lobby = document.getElementById('lobby');
  const lobbyPageTitle = document.getElementById('lobby-page-title');
  const lobbyBody = document.getElementById('lobby-body');
  const forgeHud = document.getElementById('forge-hud');
  const forgeText = document.getElementById('forge-text');
  const forgePresets = document.getElementById('forge-presets');
  const forgeLiveSpec = document.getElementById('forge-live-spec');
  const bindButtons = [...document.querySelectorAll('.bind-slot-btn')];
  const medallionRow = document.getElementById('medallion-row');
  const activeSpellName = document.getElementById('active-spell-name');
  const dmgLayer = document.getElementById('dmg-layer');

  // Ambient rising golden motes on Home Lobby
  const motesWrap = document.getElementById('lobby-motes');
  let seed = 13;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < 22; i++) {
    const m = document.createElement('i');
    m.style.cssText = `left:${(36 + 56 * rnd()).toFixed(1)}%;top:${(28 + 64 * rnd()).toFixed(1)}%;--d:${(8 + 9 * rnd()).toFixed(1)}s;--w:${(-16 * rnd()).toFixed(1)}s;--x:${(-26 + 52 * rnd()).toFixed(0)}px;--o:${(0.38 + 0.5 * rnd()).toFixed(2)}`;
    motesWrap.appendChild(m);
  }

  // --- Home Lobby Menu Pages (small-magic menu.js style) ---
  let lobbyPage = 'main';
  let lobbyAt = 0;
  let lobbyLines = [];

  const pages = {
    main: () => ({
      title: '',
      lines: [
        { do: 'duel', text: 'Enter Duel', value: '1v1 · 3 Equipped Spells' },
        { do: 'forge', text: '3D Spell Forge', value: 'Draw Full-Screen & Cast Live' },
        { do: 'sandbox', text: 'Sandbox', value: 'All 9 Spells · Free Practice' },
        { do: 'controls', text: 'Controls', value: '' },
        { do: 'music', text: 'Music', value: music.muted ? 'Off' : music.trackName },
      ],
    }),
    controls: () => ({
      title: 'CONTROLS',
      text: `<div class="lobby-keys">
        <i>WASD / Space</i><span>Move, jump &amp; double jump</span>
        <i>Shift</i><span>Arcane dash</span>
        <i>Left Click</i><span>Cast spell (Cleave: click, drag line, release)</span>
        <i>Right Click</i><span>Arcane Ward shield / cancel Cleave</span>
        <i>1 – 9 / Wheel</i><span>Switch spells</span>
        <i>V</i><span>First-person staff / Third-person view</span>
        <i>Tab / Esc</i><span>3D Spell Forge / Home menu</span>
        <i>M / N / R</i><span>Mute audio / Next track / Reset arena</span>
      </div>`,
      lines: [{ do: 'back', text: 'Back', value: '' }],
    }),
  };

  function drawLobby() {
    const p = pages[lobbyPage]();
    lobbyLines = p.lines;
    lobbyAt = Math.min(lobbyAt, lobbyLines.length - 1);
    lobbyPageTitle.textContent = p.title;
    lobbyBody.innerHTML = `${p.text || ''}<div class="lobby-list">${lobbyLines.map((l, i) =>
      `<button class="lobby-btn${i === lobbyAt ? ' at' : ''}" data-i="${i}" type="button">${l.text}${l.value ? `<small>${l.value}</small>` : ''}</button>`
    ).join('')}</div>`;
  }

  function actLobby(i) {
    const item = lobbyLines[i];
    if (!item) return;
    sound.unlock();
    music.wake();
    sound.forge();
    if (item.do === 'duel') onStartDuel();
    else if (item.do === 'forge') onOpenForge();
    else if (item.do === 'sandbox') onStartSandbox();
    else if (item.do === 'controls') { lobbyPage = 'controls'; lobbyAt = 0; drawLobby(); }
    else if (item.do === 'music') { music.nextTrack(); drawLobby(); }
    else if (item.do === 'back') { lobbyPage = 'main'; lobbyAt = 0; drawLobby(); }
  }

  lobbyBody.addEventListener('mousemove', (e) => {
    const b = e.target.closest?.('.lobby-btn');
    if (!b) return;
    const idx = Number(b.dataset.i);
    if (idx !== lobbyAt) {
      lobbyAt = idx;
      lobbyBody.querySelectorAll('.lobby-btn').forEach((el, k) => el.classList.toggle('at', k === lobbyAt));
    }
  });
  lobbyBody.addEventListener('click', (e) => {
    const b = e.target.closest?.('.lobby-btn');
    if (b) actLobby(Number(b.dataset.i));
  });

  // --- Full-Screen 3D Forge Controls ---
  forgePresets.innerHTML = '';
  PRESET_SPELLS.forEach((p) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'preset-chip';
    btn.textContent = p.label;
    btn.addEventListener('click', () => {
      forgeText.value = p.text;
      onForgePreset(p.text);
    });
    forgePresets.appendChild(btn);
  });

  document.getElementById('forge-test-btn').addEventListener('click', () => {
    onForgeTextCast(forgeText.value);
  });
  forgeText.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      onForgeTextCast(forgeText.value);
    }
  });

  bindButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const slot = Number(btn.dataset.slot);
      onForgeBindSlot(slot);
      btn.classList.add('flash');
      setTimeout(() => btn.classList.remove('flash'), 350);
    });
  });

  document.getElementById('forge-reset-pillars').addEventListener('click', () => onForgeResetPillars());
  document.getElementById('forge-back-home').addEventListener('click', () => onOpenHome());
  document.getElementById('forge-start-duel').addEventListener('click', () => onStartDuel());

  // Arena corner buttons & end screen buttons
  document.getElementById('hud-forge-btn').addEventListener('click', () => onOpenForge());
  document.getElementById('hud-home-btn').addEventListener('click', () => onOpenHome());
  document.getElementById('rematch-btn').addEventListener('click', () => onRematch());
  document.getElementById('open-forge-end').addEventListener('click', () => {
    hideResult();
    onOpenForge();
  });
  document.getElementById('open-home-end').addEventListener('click', () => {
    hideResult();
    onOpenHome();
  });

  function refreshBindButtons() {
    bindButtons.forEach((btn, idx) => {
      btn.querySelector('.bind-name').textContent = duelLoadout[idx]?.name || '';
    });
  }

  function showForgeSpec(spell) {
    forgeLiveSpec.style.setProperty('--spell-col', spell.palette.primary);
    forgeLiveSpec.innerHTML = `
      <div class="spec-name">${escapeHtml(spell.name)}</div>
      <div class="spec-meta">${escapeHtml(spell.archetypeLabel)} &middot; ${escapeHtml(spell.elementLabel)} &middot; DMG ${spell.damage}${spell.gesture ? ` &middot; ${escapeHtml(spell.gesture)}` : ''}</div>
    `;
  }

  let currentDockSpells = [];
  let lastSelectedHud = -1;

  function setDockSpells(spells) {
    currentDockSpells = spells;
    medallionRow.innerHTML = '';
    spells.forEach((sp, idx) => {
      const wrap = document.createElement('div');
      wrap.className = 'medal';
      wrap.style.setProperty('--c', sp.palette.primary);
      wrap.appendChild(buildMedallionSvg(sp));

      const veil = document.createElement('div');
      veil.className = 'medal-cd-veil';
      wrap.appendChild(veil);

      const num = document.createElement('div');
      num.className = 'medal-cd-num';
      wrap.appendChild(num);

      const key = document.createElement('i');
      key.className = 'medal-key';
      key.textContent = String(idx + 1);
      wrap.appendChild(key);

      medallionRow.appendChild(wrap);
    });
    lastSelectedHud = -1;
  }

  function setMode(mode) {
    document.body.className = `mode-${mode}`;
    lobby.classList.toggle('gone', mode !== 'home');
    lobby.classList.toggle('hidden', mode !== 'home');
    forgeHud.classList.toggle('hidden', mode !== 'forge');
    if (mode === 'home') {
      lobbyPage = 'main';
      lobbyAt = 0;
      drawLobby();
    }
    if (mode === 'forge') {
      refreshBindButtons();
    }
    document.getElementById('mode-crest-label').textContent = mode === 'sandbox' ? 'SANDBOX' : 'DUEL';
    document.getElementById('rival-label').textContent = mode === 'sandbox' ? 'Sparring Dummy' : 'Crimson Warlock';
  }

  function showResult(text, subtext) {
    const box = document.getElementById('match-banner');
    document.getElementById('match-title').textContent = text;
    document.getElementById('match-sub').textContent = subtext;
    box.classList.remove('hidden');
  }

  function hideResult() {
    document.getElementById('match-banner').classList.add('hidden');
  }

  drawLobby();
  refreshBindButtons();

  return {
    setMode,
    setDockSpells,
    showForgeSpec,
    refreshBindButtons,
    showResult,
    hideResult,
    getForgeText() { return forgeText.value; },
    handleLobbyKey(e) {
      if (e.code === 'ArrowUp' || e.code === 'KeyW') {
        lobbyAt = (lobbyAt - 1 + lobbyLines.length) % lobbyLines.length;
        drawLobby();
        return true;
      }
      if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        lobbyAt = (lobbyAt + 1) % lobbyLines.length;
        drawLobby();
        return true;
      }
      if (e.code === 'Enter' || e.code === 'Space') {
        actLobby(lobbyAt);
        return true;
      }
      if (e.code === 'Escape' && lobbyPage !== 'main') {
        lobbyPage = 'main';
        lobbyAt = 0;
        drawLobby();
        return true;
      }
      return false;
    },
    spawnDamageNumber(screenX, screenY, amount, colorHex = '#ffd56b') {
      const el = document.createElement('div');
      el.className = 'dmg-pop';
      el.style.left = `${screenX}px`;
      el.style.top = `${screenY}px`;
      el.style.setProperty('--c', colorHex);
      el.textContent = String(Math.round(amount));
      dmgLayer.appendChild(el);
      setTimeout(() => el.remove(), 860);
    },
    refreshHUD(selectedSlot, cooldowns, playerState, rivalState, cleavePhase, roundScore) {
      const pPct = `${(playerState.hp / playerState.maxHp) * 100}%`;
      const rPct = `${(rivalState.hp / rivalState.maxHp) * 100}%`;
      document.getElementById('player-hp-fill').style.width = pPct;
      document.getElementById('player-hp-lost').style.width = pPct;
      document.getElementById('player-hp-num').textContent = `${Math.ceil(playerState.hp)}`;
      document.getElementById('rival-hp-fill').style.width = rPct;
      document.getElementById('rival-hp-lost').style.width = rPct;
      document.getElementById('rival-hp-num').textContent = `${Math.ceil(rivalState.hp)}`;
      document.getElementById('ward-fill').style.width = `${playerState.wardEnergy * 100}%`;
      document.getElementById('score-text').textContent = `${roundScore.player} · ${roundScore.rival}`;

      document.querySelectorAll('#player-gems i').forEach((g, idx) => g.classList.toggle('won', idx < roundScore.player));
      document.querySelectorAll('#rival-gems i').forEach((g, idx) => g.classList.toggle('won', idx < roundScore.rival));

      const medals = medallionRow.querySelectorAll('.medal');
      medals.forEach((el, idx) => {
        const sp = currentDockSpells[idx];
        if (!sp) return;
        const cd = cooldowns[idx] || 0;
        const frac = Math.min(1, cd / Math.max(sp.cooldown, 0.1));
        el.classList.toggle('on', idx === selectedSlot);
        el.querySelector('.medal-cd-veil').style.setProperty('--cd', frac.toFixed(3));
        el.querySelector('.medal-cd-num').textContent = cd > 0.05 ? `${cd.toFixed(1)}` : '';
      });

      const cur = currentDockSpells[selectedSlot];
      if (cur && (lastSelectedHud !== selectedSlot || activeSpellName.textContent !== cur.name)) {
        lastSelectedHud = selectedSlot;
        activeSpellName.textContent = cur.name;
        activeSpellName.style.setProperty('--c', cur.palette.primary);
      }

      const hint = document.getElementById('cleave-hint');
      if (cleavePhase === 'aim') {
        hint.textContent = 'DRAG TO CUT  ·  RMB CANCEL';
        hint.classList.remove('hidden');
      } else if (cleavePhase === 'draw') {
        hint.textContent = 'RELEASE TO SEVER';
        hint.classList.remove('hidden');
      } else {
        hint.classList.add('hidden');
      }
    },
  };
}
