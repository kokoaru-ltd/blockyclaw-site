// ============================================================================
// Photo creatures: Fish Kit format species swimming in the world, drawn by the WebGPU renderer itself (W_PHOTO in
// shaders.js), so rock and kelp hide them and they get the scene's light, shadow and fog.
// three.js runs on the CPU only: Fish Kit loads and prepares each mesh, and every creature's FishActor.update()
// works out its swimming; the resulting shader values are copied to the renderer each frame. Nothing is drawn by
// three.js.
//
// Adding a species: put <id>.glb, <id>_lo.glb, <id>_head.webp, <id>_cover.webp in this folder, its tables in
// fish-kit.js (FILES, GILLS, MOUTHS, HEAD_FILES, ALL_SPECIES), and a line in SPECIES below.
// ============================================================================
import * as THREE from 'three';
import { loadFish, createFish } from './fish-kit.js';

const A = await new Promise((r) => { const t = () => (globalThis.abyss ? r(globalThis.abyss) : setTimeout(t, 100)); t(); });

// where a species swims: a band of open water along a line on XZ (a, b), `spread` metres either side, between two depths
const TRENCH = { a: A.TRENCH[0], b: A.TRENCH[1], spread: 14 };
// id: Fish Kit id · n: how many · cm: length range · area, depth: where they swim · speed: cruise range m/s
// deform: how the body wave bends the mesh (W_PHOTO): 0 fish (side to side), 1 whale / dolphin (up and down)
const SPECIES = [
  { id: 'sawara', n: 7, cm: [60, 95], area: TRENCH, depth: [-72, -52], speed: [0.7, 1.2], deform: 0 },
  { id: 'tachiuo', n: 4, cm: [90, 130], area: TRENCH, depth: [-76, -62], speed: [0.35, 0.6], deform: 0 },
  // deep-sea fish made with making/ (Codex photos, no Blender)
  { id: 'kinmedai', n: 9, cm: [28, 45], area: TRENCH, depth: [-74, -58], speed: [0.25, 0.45], deform: 0 },
  { id: 'houraieso', n: 5, cm: [20, 35], area: TRENCH, depth: [-77, -66], speed: [0.15, 0.3], deform: 0 },
  { id: 'chouchinankou', n: 3, cm: [35, 60], area: TRENCH, depth: [-77, -68], speed: [0.08, 0.15], deform: 0 },
  { id: 'ryuuguu', n: 1, cm: [350, 450], area: TRENCH, depth: [-70, -56], speed: [0.25, 0.4], deform: 0 },
];

await loadFish(new URL('./', import.meta.url).href, SPECIES.map((s) => s.id));

// ---------------------------------------------------------------- swimming: targets in open water, steering
const inWater = (x, y, z, m) => A.rockAt(x, y, z) < -m;
function pickTarget(sp, out) {
  const { a, b, spread } = sp.area, [y0, y1] = sp.depth;
  for (let i = 0; i < 40; i++) {
    const t = Math.random(), x = a[0] + (b[0] - a[0]) * t + (Math.random() - 0.5) * spread, z = a[1] + (b[1] - a[1]) * t + (Math.random() - 0.5) * spread;
    const y = y0 + Math.random() * (y1 - y0);
    if (inWater(x, y, z, 0.9) && inWater(x, y - 1.5, z, 0.5) && inWater(x + 1.5, y, z, 0.5) && inWater(x - 1.5, y, z, 0.5)) return out.set(x, y, z);
  }
  return out.set((a[0] + b[0]) / 2, (y0 + y1) / 2, (a[1] + b[1]) / 2);
}
const fwd = new THREE.Vector3(), tmp = new THREE.Vector3();
// towards the target, turning about Y and gliding up or down; a new target when rock is ahead, it arrives, or it gets bored
function steer(c, dt) {
  const f = c.f, o = f.object, look = 1.5 + f.length * 1.5;
  fwd.set(Math.sin(o.rotation.y), 0, Math.cos(o.rotation.y));
  tmp.subVectors(c.target, o.position);
  let err = Math.atan2(tmp.x, tmp.z) - o.rotation.y;
  err = Math.atan2(Math.sin(err), Math.cos(err));
  if (!inWater(o.position.x + fwd.x * look, o.position.y, o.position.z + fwd.z * look, 0.3) || Math.hypot(tmp.x, tmp.z) < 3 || (c.rest -= dt) < 0) {
    pickTarget(c.sp, c.target); c.rest = 8 + Math.random() * 12;
  }
  const turn = Math.max(-0.9, Math.min(0.9, err * 1.4));
  f.drive.speed = c.cruise * (1 - 0.5 * Math.min(Math.abs(err), 1)); f.drive.turnRate = turn;
  f.update(dt);
  o.rotation.y += turn * dt;
  const v = f.currentSpeed;
  o.position.x += Math.sin(o.rotation.y) * v * dt;
  o.position.z += Math.cos(o.rotation.y) * v * dt;
  const wantVy = Math.max(-0.35, Math.min(0.35, tmp.y * 0.15));
  c.vy += (wantVy - c.vy) * Math.min(1, dt * 1.5);
  if (inWater(o.position.x, o.position.y + c.vy * dt, o.position.z, 0.3)) o.position.y += c.vy * dt; else c.vy = 0;
  o.rotation.x = -Math.atan2(c.vy, Math.max(v, 0.2)) * 0.8;
}

// ---------------------------------------------------------------- hand each species to the renderer
const meshOf = (f) => f.mesh.root.children[0].levels[0].object; // the detailed LOD level
// the material's shader values: Fish Kit adds them when three.js compiles the shader, so ask it with an empty shader
const valuesOf = (mesh) => { const sh = { uniforms: {}, vertexShader: '', fragmentShader: '' }; mesh.material.onBeforeCompile(sh); return sh.uniforms; };
const ATTRS = [['position', 3], ['normal', 3], ['uv', 2], ['_fin', 3], ['_piv', 3], ['flutter', 3], ['finH', 1], ['jaw', 2]];
function upload(m0, deform) {
  const U = valuesOf(m0), geo = m0.geometry, nv = geo.attributes.position.count, V = A.PFV, verts = new Float32Array(nv * V);
  let off = 0;
  for (const [name, k] of ATTRS) {
    const a = geo.getAttribute(name);
    if (a) for (let i = 0; i < nv; i++) for (let c = 0; c < k; c++) verts[i * V + off + c] = c === 0 ? a.getX(i) : c === 1 ? a.getY(i) : a.getZ(i);
    off += k;
  }
  const index = geo.index ? Uint32Array.from(geo.index.array) : Uint32Array.from({ length: nv }, (_, i) => i);
  // SP in W_PHOTO: 11 vec4, then the gill and mouth polylines
  const v = (n) => U[n].value, st = [], v4 = (x) => st.push(x.x, x.y, x.z, x.w);
  st.push(v('uSnout'), v('uLen'), v('uLam'), v('uSwimAmp'));
  st.push(v('uEnv').x, v('uEnv').y, v('uEnv').z, v('uPectRest'));
  st.push(v('uEyeBulge').x, v('uEyeBulge').y, v('uMouthClose'), v('uMouthOn'));
  v4(v('uMouthShape')); v4(v('uMouthUpper')); v4(v('uMouthUpper2')); v4(v('uEye'));
  st.push(v('uHeadOn'), v('uGillBox').x, v('uGillBox').y, deform);
  v4(v('uHeadMap')); v4(v('uHeadBox')); v4(v('uGillShape2'));
  for (const n of ['uGillEdge', 'uGillHinge', 'uMouthEdge', 'uMouthLip', 'uMouthUpperPoly']) for (const p of v(n)) st.push(p.x, p.y);
  return A.addSpecies({ verts, index, statics: new Float32Array(st), map: m0.material.map.image, head: v('uHeadTex').image, cover: v('uCoverTex').image });
}

const groups = [];
for (const sp of SPECIES) {
  const list = [];
  for (let i = 0; i < Math.min(sp.n, A.PFMAX); i++) {
    let f;
    try { f = createFish(sp.id, sp.cm[0] + Math.random() * (sp.cm[1] - sp.cm[0])); } catch (e) { console.warn(e.message); break; } // not loaded
    f.setMotion('swim');
    f.object.rotation.order = 'YXZ';
    pickTarget(sp, f.object.position);
    f.object.rotation.y = Math.random() * Math.PI * 2;
    f.drive = { speed: 0.8, turnRate: 0 };
    const mesh = meshOf(f);
    list.push({ sp, f, mesh, u: valuesOf(mesh), target: pickTarget(sp, new THREE.Vector3()), cruise: sp.speed[0] + Math.random() * (sp.speed[1] - sp.speed[0]), vy: 0, rest: 6 + Math.random() * 10 });
  }
  if (list.length) groups.push({ sp, list, h: await upload(list[0].mesh, sp.deform) });
}
A.creatures = groups; // for looking at them from the console
A.fish = groups.flatMap((g) => g.list);

// per frame, before drawing: swim, then copy each creature's world matrix and swim values (PF in W_PHOTO)
const PFN = A.PFN;
const put4 = (D, o, x) => { D[o] = x.x; D[o + 1] = x.y; D[o + 2] = x.z; D[o + 3] = x.w; };
A.preFrame = (dt) => {
  for (let gi = 0; gi < groups.length; gi++) {
    const g = groups[gi], D = g.h.data;
    for (let i = 0; i < g.list.length; i++) {
      const c = g.list[i], u = c.u;
      steer(c, dt);
      c.f.object.updateMatrixWorld(true);
      const o = i * PFN, e = c.mesh.matrixWorld.elements;
      for (let k = 0; k < 16; k++) D[o + k] = e[k];
      put4(D, o + 16, u.uSwim.value); put4(D, o + 20, u.uFin.value); put4(D, o + 24, u.uFinMove.value); put4(D, o + 28, u.uFinMove2.value);
      put4(D, o + 32, u.uFlut.value); put4(D, o + 36, u.uNeck.value);
      D[o + 40] = u.uTime.value; D[o + 41] = u.uHead.value; D[o + 42] = u.uPower.value; D[o + 43] = u.uGill.value;
      D[o + 44] = u.uMouth.value; D[o + 45] = u.uLookAt.value; D[o + 46] = u.uFloor.value; D[o + 47] = 0;
    }
    g.h.count = g.list.length;
  }
};
