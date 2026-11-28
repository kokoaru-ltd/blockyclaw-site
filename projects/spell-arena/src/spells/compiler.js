/**
 * Custom Spell DNA Compiler (English & Japanese Prompt + Drawn Gesture Stroke -> Live 3D VFX Recipe)
 * All UI-facing labels and presets are in crisp English; prompts in either English or Japanese work seamlessly.
 */

export const ELEMENT_PALETTES = {
  gold: {
    label: 'ASTRAL GOLD',
    primary: '#f4cf7a',
    secondary: '#fff5d6',
    rgb: [1.0, 0.84, 0.45],
    palDark: '#0d091c',
    palMid: '#4c3880',
    palHi: '#f5d68f',
    palLight: '#fff8e8',
    smoke: '#1c1828',
  },
  gravity: {
    label: 'VOID GRAVITY',
    primary: '#a864ff',
    secondary: '#e8c4ff',
    rgb: [0.68, 0.38, 1.0],
    palDark: '#0b0518',
    palMid: '#4c1d88',
    palHi: '#cc88ff',
    palLight: '#f6e8ff',
    smoke: '#181028',
  },
  fire: {
    label: 'SOLAR PYRE',
    primary: '#ff5e24',
    secondary: '#ffd26b',
    rgb: [1.0, 0.38, 0.14],
    palDark: '#1b0706',
    palMid: '#7c1e10',
    palHi: '#ff9642',
    palLight: '#fff4dd',
    smoke: '#241b1e',
  },
  frost: {
    label: 'GLACIAL ARC',
    primary: '#64e2ff',
    secondary: '#e2f9ff',
    rgb: [0.38, 0.88, 1.0],
    palDark: '#061526',
    palMid: '#1c5480',
    palHi: '#8ee8ff',
    palLight: '#f0fcff',
    smoke: '#1b2b3a',
  },
  lightning: {
    label: 'STORM VOLT',
    primary: '#ffe858',
    secondary: '#9cf2ff',
    rgb: [1.0, 0.92, 0.34],
    palDark: '#0a0d22',
    palMid: '#2a3c88',
    palHi: '#fff078',
    palLight: '#ffffff',
    smoke: '#1a2033',
  },
  crimson: {
    label: 'CRIMSON EDGE',
    primary: '#ff2b4e',
    secondary: '#ff9eb0',
    rgb: [1.0, 0.18, 0.3],
    palDark: '#18040a',
    palMid: '#7a0e26',
    palHi: '#ff5272',
    palLight: '#ffecef',
    smoke: '#231319',
  },
  emerald: {
    label: 'GALE EMERALD',
    primary: '#52ff9e',
    secondary: '#d2ffe6',
    rgb: [0.32, 1.0, 0.62],
    palDark: '#051a14',
    palMid: '#15634a',
    palHi: '#7effb8',
    palLight: '#edfff5',
    smoke: '#162824',
  },
};

export const ARCHETYPE_LABELS = {
  cleave: 'SPATIAL CLEAVE',
  gravity: 'GRAVITY WELL',
  blast: 'METEOR BLAST',
  vortex: 'STORM VORTEX',
  beam: 'ARCANE BEAM',
  barrage: 'VOLLEY BARRAGE',
};

export function analyzeDrawing(rawPoints) {
  if (!rawPoints || rawPoints.length < 4) return null;

  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  let pathLen = 0;
  for (let i = 0; i < rawPoints.length; i++) {
    const p = rawPoints[i];
    minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
    if (i > 0) pathLen += Math.hypot(p.x - rawPoints[i - 1].x, p.y - rawPoints[i - 1].y);
  }
  const start = rawPoints[0], end = rawPoints[rawPoints.length - 1];
  const straight = Math.hypot(end.x - start.x, end.y - start.y);
  const w = Math.max(0.01, maxX - minX);
  const h = Math.max(0.01, maxY - minY);
  const straightness = straight / Math.max(pathLen, 0.001);
  const closedRatio = straight / Math.max(w, h);

  let turns = 0;
  let totalAngle = 0;
  for (let i = 2; i < rawPoints.length; i++) {
    const a1 = Math.atan2(rawPoints[i - 1].y - rawPoints[i - 2].y, rawPoints[i - 1].x - rawPoints[i - 2].x);
    const a2 = Math.atan2(rawPoints[i].y - rawPoints[i - 1].y, rawPoints[i].x - rawPoints[i - 1].x);
    let da = a2 - a1;
    while (da > Math.PI) da -= Math.PI * 2;
    while (da < -Math.PI) da += Math.PI * 2;
    totalAngle += Math.abs(da);
    if (Math.abs(da) > 0.85) turns++;
  }

  const cx = (minX + maxX) * 0.5, cy = (minY + maxY) * 0.5;
  const sc = Math.max(w, h, 0.05);
  const strokeNorm = [];
  const step = Math.max(1, Math.floor(rawPoints.length / 28));
  for (let i = 0; i < rawPoints.length; i += step) {
    strokeNorm.push({ x: (rawPoints[i].x - cx) / sc, y: (rawPoints[i].y - cy) / sc });
  }

  if (straightness > 0.82) {
    const dx = end.x - start.x, dy = end.y - start.y;
    if (dy > Math.abs(dx) * 1.4) {
      return { gesture: 'DROP LINE', archetype: 'gravity', gravityMode: 'slam', strokeNorm };
    }
    if (-dy > Math.abs(dx) * 1.4) {
      return { gesture: 'ASCENT LINE', archetype: 'gravity', gravityMode: 'lift-slam', strokeNorm };
    }
    return { gesture: 'SLASH LINE', archetype: 'cleave', gravityMode: 'slam', strokeNorm };
  }

  if (totalAngle > Math.PI * 3.1) {
    return { gesture: 'SPIRAL', archetype: 'vortex', gravityMode: 'pull', strokeNorm };
  }

  if (closedRatio < 0.45 && totalAngle > Math.PI * 1.4) {
    return { gesture: 'ORBIT RING', archetype: 'gravity', gravityMode: 'blackhole', strokeNorm };
  }

  if (turns >= 3) {
    return { gesture: 'ZIGZAG', archetype: 'barrage', gravityMode: 'slam', strokeNorm };
  }

  if (w > h * 1.8) {
    return { gesture: 'PIERCE LINE', archetype: 'beam', gravityMode: 'slam', strokeNorm };
  }

  return { gesture: 'NOVA BURST', archetype: 'blast', gravityMode: 'slam', strokeNorm };
}

export function compileSpell({ text = '', drawing = null, slotIndex = 0 }) {
  const raw = (text || '').trim();
  const low = raw.toLowerCase();
  const has = (re) => re.test(raw) || re.test(low);

  let archetype = drawing?.archetype || null;
  let gravityMode = drawing?.gravityMode || 'lift-slam';

  if (has(/斬|切|裂|一閃|刀|剣|スラッシュ|クリーヴ|cleave|slash|cut|slice|blade|sever|rend/)) {
    archetype = 'cleave';
  } else if (has(/重力|無重力|引力|ブラックホール|特異点|圧壊|叩きつけ|浮遊|浮か|グラビティ|gravity|black\s*hole|singularity|crush|slam|zero.?g|lift|void/)) {
    archetype = 'gravity';
    if (has(/ブラックホール|特異点|吸い|吸引|black\s*hole|singularity|pull|suck/)) gravityMode = 'blackhole';
    else if (has(/叩き|圧壊|潰|落下|crush|slam|press|heavy/) && !has(/浮|lift|zero/)) gravityMode = 'slam';
    else gravityMode = 'lift-slam';
  } else if (has(/爆発|爆炎|メテオ|隕石|核|エクスプロージョン|ノヴァ|boom|blast|explos|meteor|nova|nuke|flare/)) {
    archetype = 'blast';
  } else if (has(/竜巻|トルネード|嵐|渦|台風|サイクロン|tornado|vortex|twister|storm|cyclone|whirl|tempest/)) {
    archetype = 'vortex';
  } else if (has(/ビーム|レーザー|光線|波動|砲|貫通|beam|laser|ray|cannon|lance/)) {
    archetype = 'beam';
  } else if (has(/連射|弾|槍|矢|ミサイル|雷|稲妻|サンダー|ボルト|ライトニング|barrage|bolt|lightning|thunder|spear|arrow|volley|dart/)) {
    archetype = 'barrage';
  }

  if (!archetype) {
    const fallback = ['cleave', 'gravity', 'blast'];
    archetype = fallback[slotIndex % fallback.length];
  }

  let element = null;
  if (has(/炎|火|紅蓮|爆炎|メテオ|太陽|マグマ|オレンジ|fire|flame|blaze|solar|meteor|orange|pyre|ember/)) element = 'fire';
  else if (has(/氷|雪|凍|蒼|青|水|アイス|フロスト|frost|ice|cold|blue|aqua|cryo|glacial|azure/)) element = 'frost';
  else if (has(/重力|虚無|闇|紫|ブラックホール|空間歪|void|gravity|purple|dark|violet|black|abyss/)) element = 'gravity';
  else if (has(/雷|電|稲妻|黄|サンダー|lightning|thunder|volt|spark|electric/)) element = 'lightning';
  else if (has(/紅|血|赤|クリムゾン|crimson|blood|red|scarlet|ruby/)) element = 'crimson';
  else if (has(/風|嵐|緑|翠|自然|毒|エメラルド|wind|storm|green|emerald|aero|gale|jade/)) element = 'emerald';
  else if (has(/金|光|聖|時|ゴールド|gold|light|holy|time|divine|astral/)) element = 'gold';

  if (!element) {
    const defElem = {
      cleave: 'gold',
      gravity: 'gravity',
      blast: 'fire',
      vortex: 'emerald',
      beam: 'frost',
      barrage: 'lightning',
    };
    element = defElem[archetype] || 'gold';
  }

  const pal = ELEMENT_PALETTES[element];

  const isMega = has(/超|極|大|特大|最強|絶対|破壊|神|mega|ultra|hyper|super|giant|massive|ultimate|cataclysm|grand/);
  const isFast = has(/高速|速|瞬|連|rapid|fast|quick|instant|swift/);
  const hasImpact = !has(/no.?impact/) && (isMega || archetype === 'cleave' || archetype === 'blast' || archetype === 'gravity' || has(/impact|flash|ink|comic/));
  const impactStyle = has(/白黒|モノクロ|インク|ink|bw|monochrome/) ? 'ink' : 'comic';

  const sidesMap = { cleave: 2, gravity: 7, blast: 8, vortex: 9, beam: 6, barrage: 4 };
  const sides = sidesMap[archetype] || 6;

  const scale = isMega ? 1.32 : 1.0;
  const baseDamage = {
    cleave: 34,
    gravity: 30,
    blast: 38,
    vortex: 26,
    beam: 32,
    barrage: 24,
  }[archetype];
  const baseCooldown = {
    cleave: 3.4,
    gravity: 3.2,
    blast: 3.8,
    vortex: 3.5,
    beam: 2.6,
    barrage: 1.5,
  }[archetype];

  const damage = Math.round(baseDamage * (isMega ? 1.18 : 1.0));
  const cooldown = Number((baseCooldown * (isFast ? 0.78 : isMega ? 1.18 : 1.0)).toFixed(1));

  // Crisp English title generation
  const defaultTitles = {
    cleave: element === 'crimson' ? 'Crimson Sever' : 'Astral Cleave',
    gravity: gravityMode === 'blackhole' ? 'Void Singularity' : gravityMode === 'slam' ? 'Gravity Crush' : 'Zero-G Slam',
    blast: 'Solar Meteor',
    vortex: 'Emerald Tempest',
    beam: 'Glacial Lance',
    barrage: 'Storm Volley',
  };

  let name = defaultTitles[archetype];
  if (raw) {
    // Use concise title from user prompt if short, else clean 2-3 word title
    const words = raw.split(/\s+/).filter(Boolean);
    if (raw.length <= 22) name = raw;
    else if (words.length >= 2) name = words.slice(0, 3).join(' ');
    else name = raw.slice(0, 18) + '…';
  } else if (drawing) {
    name = `${pal.label.split(' ')[0]} ${drawing.gesture}`;
  }

  return {
    id: `spell_${Date.now()}_${Math.floor(Math.random() * 999)}`,
    name,
    prompt: raw,
    archetype,
    archetypeLabel: ARCHETYPE_LABELS[archetype],
    gravityMode,
    element,
    elementLabel: pal.label,
    palette: pal,
    sides,
    scale,
    damage,
    cooldown,
    hasImpact,
    impactStyle,
    isMega,
    isFast,
    gesture: drawing?.gesture || null,
    strokeNorm: drawing?.strokeNorm || null,
  };
}

export const PRESET_SPELLS = [
  { label: 'Fire Volley', text: 'Rapid solar fire barrage bolts' },
  { label: 'Glacial Beam', text: 'Frost arcane laser beam piercing strike' },
  { label: 'Storm Lightning', text: 'Fast lightning storm volley bolts' },
  { label: 'Zero-G Slam', text: 'Void gravity lift enemy and pillars then crush slam' },
  { label: 'Solar Meteor', text: 'Massive solar fire meteor blast with ink impact' },
  { label: 'Singularity', text: 'Purple black hole singularity pull and burst' },
  { label: 'Emerald Vortex', text: 'Giant emerald storm tornado vortex' },
  { label: 'Gravity Crush', text: 'Ultra void gravity heavy crush press down' },
  { label: 'Astral Cleave', text: 'Golden spatial cleave that slices reality in two' },
];

export function getFullSpellbook() {
  return PRESET_SPELLS.map((p, idx) => compileSpell({ text: p.text, slotIndex: idx }));
}

export function getDefaultLoadout() {
  return [
    compileSpell({ text: PRESET_SPELLS[8].text, slotIndex: 0 }), // Astral Cleave (#9)
    compileSpell({ text: PRESET_SPELLS[3].text, slotIndex: 1 }), // Zero-G Slam
    compileSpell({ text: PRESET_SPELLS[4].text, slotIndex: 2 }), // Solar Meteor
  ];
}
