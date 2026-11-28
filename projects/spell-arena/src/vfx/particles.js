import * as THREE from 'three';

const NOISE_GLSL = /* glsl */ `
float pHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float pNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(pHash(i), pHash(i + vec2(1.0, 0.0)), f.x),
    mix(pHash(i + vec2(0.0, 1.0)), pHash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}
`;

const VERT = /* glsl */ `
attribute vec4 iA; // xyz pos, w size
attribute vec4 iB; // x life(0..1), y seed, z kind, w rot/stretch
attribute vec4 iC; // rgba color
attribute vec3 iD; // velocity
varying vec2 vC;
flat varying vec4 vB;
flat varying vec4 vCol;
void main() {
  vec4 mv = viewMatrix * vec4(iA.xyz, 1.0);
  vec2 c = position.xy;
  float kind = iB.z;
  if (kind > 4.5 && kind < 5.5) {
    // World-aligned energy/wind streak
    vec3 al = normalize(iD + vec3(0.0, 1e-4, 0.0));
    vec3 sd = normalize(cross(al, cameraPosition - iA.xyz) + vec3(1e-5, 0.0, 0.0));
    mv = viewMatrix * vec4(iA.xyz + (al * c.y * max(8.0, iB.w) + sd * c.x * 6.0) * iA.w, 1.0);
  } else if (kind > 0.5 && kind < 1.5) {
    // Velocity-stretched spark
    vec2 dir = (viewMatrix * vec4(iD, 0.0)).xy;
    float sp = length(dir);
    dir = sp > 1e-4 ? dir / sp : vec2(0.0, 1.0);
    float stretch = 1.0 + min(sp * 0.075, 3.6);
    mv.xy += (dir * c.y * stretch + vec2(-dir.y, dir.x) * c.x) * iA.w;
  } else {
    float a = iB.w;
    vec2 sc = kind < 0.5 ? vec2(0.75, 1.25) : vec2(1.0);
    mv.xy += vec2(cos(a) * c.x - sin(a) * c.y, sin(a) * c.x + cos(a) * c.y) * iA.w * sc;
  }
  vC = c;
  vB = iB;
  vCol = iC;
  gl_Position = projectionMatrix * mv;
}
`;

const LIGHT_FRAG = NOISE_GLSL + /* glsl */ `
uniform sampler2D tRunes;
varying vec2 vC;
flat varying vec4 vB;
flat varying vec4 vCol;
void main() {
  float life = vB.x, seed = vB.y, kind = vB.z, r = length(vC), a = 0.0;
  vec3 col = vCol.rgb;
  if (kind < 0.5) {
    // 0: Procedural stylized flame tongue (tintable!)
    float n = pNoise(vC * 2.1 + seed * 31.0 + vec2(0.0, -life * 2.2)) * 0.6
            + pNoise(vC * 4.6 - seed * 13.0 + vec2(0.0, -life * 3.6)) * 0.4;
    float d = 1.0 - length(vC * vec2(1.0 + 0.6 * max(vC.y, 0.0), 1.0)) - (n - 0.3) * (0.55 + 0.8 * life) - life * 0.5;
    a = smoothstep(0.0, 0.1, d) * smoothstep(0.0, 0.08, life) * vCol.a;
    float hot = clamp(d * 1.15 * (1.0 - 0.45 * life), 0.0, 1.0);
    col = mix(vCol.rgb * 1.4, vec3(2.8, 2.5, 2.0), hot * hot);
  } else if (kind < 1.5) {
    // 1: Spark
    a = pow(max(1.0 - r, 0.0), 2.0) * (1.0 - life * life) * vCol.a;
    col = vCol.rgb * 3.4;
  } else if (kind < 3.5) {
    // 3: 4-pointed star mote
    float star = pow(max(1.0 - r, 0.0), 3.0)
      + 0.75 * pow(max(max(1.0 - abs(vC.x) * 7.0 - abs(vC.y), 0.0), max(1.0 - abs(vC.y) * 7.0 - abs(vC.x), 0.0)), 2.0);
    a = star * sin(3.1416 * life) * vCol.a;
    col = vCol.rgb * 2.6;
  } else if (kind > 6.5) {
    // 7: Soft radial glow
    a = pow(max(1.0 - r, 0.0), 2.2) * sin(3.1416 * clamp(life, 0.0, 1.0)) * vCol.a;
    col = vCol.rgb * 1.5;
  } else if (kind > 5.5) {
    // 6: Floating rune
    float id = floor(seed * 32.0);
    vec2 ruv = (vec2(mod(id, 8.0), 3.0 - floor(id / 8.0)) + clamp(vC * 0.5 + 0.5, 0.0, 1.0)) / vec2(8.0, 4.0);
    a = texture2D(tRunes, ruv).r * sin(3.1416 * clamp(life, 0.0, 1.0)) * vCol.a;
    col = vCol.rgb * 2.8;
  } else {
    // 5: Wavering energy/wind streak
    float mid = 0.58 * sin(vC.y * 2.8 + seed * 40.0 + life * 6.0) * (1.0 - vC.y * vC.y);
    a = (1.0 - smoothstep(0.05, 0.2, abs(vC.x - mid))) * pow(max(1.0 - abs(vC.y), 0.0), 1.4) * sin(3.1416 * clamp(life, 0.0, 1.0)) * vCol.a;
    col = vCol.rgb * 2.2;
  }
  if (a < 0.004) discard;
  gl_FragColor = vec4(col * a, kind < 0.5 ? min(a * 0.7, 1.0) : 0.0);
}
`;

const SOFT_FRAG = NOISE_GLSL + /* glsl */ `
varying vec2 vC;
flat varying vec4 vB;
flat varying vec4 vCol;
void main() {
  float life = vB.x, seed = vB.y, kind = vB.z, r = length(vC), a = 0.0;
  vec3 col = vCol.rgb;
  if (kind < 3.0) {
    // 2: Stylized smoke / dust / mist puff
    float n = pNoise(vC * 1.7 + seed * 17.0 + vec2(0.0, -life * 0.7)) * 0.6 + pNoise(vC * 4.0 + seed * 5.0) * 0.4;
    a = (1.0 - smoothstep(0.3 - 0.25 * life, 1.0, r + (n - 0.5) * (0.6 + 0.6 * life)))
      * smoothstep(0.0, 0.1, life) * (1.0 - smoothstep(0.4, 1.0, life)) * vCol.a;
    col = vCol.rgb * (vec3(1.15, 1.08, 0.96) * (0.4 + 0.55 * smoothstep(-0.6, 0.8, vC.y + (n - 0.5))) + vec3(0.32, 0.38, 0.55) * 0.65);
  } else {
    // 4: Tumbling shard / crystal / petal
    float flip = 0.25 + 0.75 * abs(sin(life * 9.0 + seed * 20.0));
    a = step(abs(vC.x) / flip, 0.62 * pow(max(1.0 - vC.y * vC.y, 0.0), 0.7)) * (1.0 - smoothstep(0.8, 1.0, life)) * vCol.a;
    col = vCol.rgb * (0.65 + 0.5 * flip);
  }
  if (a < 0.01) discard;
  gl_FragColor = vec4(col * a, a);
}
`;

class ParticlePool {
  constructor(cap, isLight, runeTex) {
    this.cap = cap;
    this.n = 0;
    const f = (k) => new Float32Array(cap * k);
    Object.assign(this, {
      p: f(3), v: f(3), life: f(1), max: f(1),
      size: f(2), col: f(4), kind: f(1), seed: f(1),
      rot: f(2), drag: f(1), grav: f(1),
    });

    const g = new THREE.InstancedBufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3));
    g.setIndex([0, 1, 2, 0, 2, 3]);
    this.iA = new THREE.InstancedBufferAttribute(f(4), 4);
    this.iB = new THREE.InstancedBufferAttribute(f(4), 4);
    this.iC = new THREE.InstancedBufferAttribute(f(4), 4);
    this.iD = new THREE.InstancedBufferAttribute(f(3), 3);
    for (const a of [this.iA, this.iB, this.iC, this.iD]) a.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('iA', this.iA);
    g.setAttribute('iB', this.iB);
    g.setAttribute('iC', this.iC);
    g.setAttribute('iD', this.iD);
    g.instanceCount = 0;
    this.geometry = g;

    this.mesh = new THREE.Mesh(g, new THREE.ShaderMaterial({
      uniforms: { tRunes: { value: runeTex } },
      vertexShader: VERT,
      fragmentShader: isLight ? LIGHT_FRAG : SOFT_FRAG,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.ZeroFactor,
      blendDstAlpha: THREE.OneFactor,
    }));
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = isLight ? 12 : 11;
  }

  add(o) {
    if (this.n >= this.cap) return;
    const i = this.n++;
    this.p.set([o.x, o.y, o.z], i * 3);
    this.v.set([o.vx ?? 0, o.vy ?? 0, o.vz ?? 0], i * 3);
    this.life[i] = 0;
    this.max[i] = o.life ?? 0.8;
    const s = o.size ?? 0.3;
    this.size.set(Array.isArray(s) ? s : [s, s], i * 2);
    const c = o.colour ?? [1, 1, 1];
    this.col.set([c[0], c[1], c[2], o.alpha ?? 1], i * 4);
    this.kind[i] = o.kind ?? 0;
    this.seed[i] = Math.random();
    this.rot.set([o.rot ?? (Math.random() - 0.5) * 0.8, o.spin ?? 0], i * 2);
    this.drag[i] = o.drag ?? 0.3;
    this.grav[i] = o.grav ?? 0;
  }

  update(dt, fields) {
    const { p, v, life, max, size, col, kind, seed, rot, drag, grav } = this;
    const A = this.iA.array, B = this.iB.array, C = this.iC.array, D = this.iD.array;

    for (let i = 0; i < this.n;) {
      life[i] += dt;
      if (life[i] >= max[i]) {
        const j = --this.n;
        if (i !== j) {
          p.copyWithin(i * 3, j * 3, j * 3 + 3);
          v.copyWithin(i * 3, j * 3, j * 3 + 3);
          size.copyWithin(i * 2, j * 2, j * 2 + 2);
          col.copyWithin(i * 4, j * 4, j * 4 + 4);
          rot.copyWithin(i * 2, j * 2, j * 2 + 2);
          life[i] = life[j]; max[i] = max[j]; kind[i] = kind[j];
          seed[i] = seed[j]; drag[i] = drag[j]; grav[i] = grav[j];
        }
        continue;
      }

      const a = i * 3;
      const k = Math.exp(-drag[i] * dt);
      v[a] *= k;
      v[a + 1] = v[a + 1] * k + grav[i] * dt;
      v[a + 2] *= k;

      // Apply active gravity / vortex fields
      for (let f = 0; f < fields.length; f++) {
        const fld = fields[f];
        const dx = fld.x - p[a], dy = fld.y - p[a + 1], dz = fld.z - p[a + 2];
        const dist = Math.hypot(dx, dy, dz) + 0.001;
        if (dist > fld.radius) continue;
        const fall = 1 - dist / fld.radius;
        if (fld.type === 'vortex') {
          const rx = -dz / dist, rz = dx / dist;
          v[a] += (rx * fld.spin + (dx / dist) * fld.pull) * fall * dt;
          v[a + 1] += fld.lift * fall * dt;
          v[a + 2] += (rz * fld.spin + (dz / dist) * fld.pull) * fall * dt;
        } else if (fld.type === 'lift') {
          v[a + 1] += fld.strength * fall * dt;
          v[a] += (-dz / dist) * 2.5 * fall * dt;
          v[a + 2] += (dx / dist) * 2.5 * fall * dt;
        } else if (fld.type === 'pull') {
          const g = (fld.strength * fall * dt) / (0.6 + dist * 0.2);
          v[a] += (dx + dz * (fld.swirl ?? 0.6)) * g;
          v[a + 1] += dy * g;
          v[a + 2] += (dz - dx * (fld.swirl ?? 0.6)) * g;
        } else if (fld.type === 'crush') {
          v[a + 1] -= fld.strength * fall * dt;
        }
      }

      p[a] += v[a] * dt;
      p[a + 1] += v[a + 1] * dt;
      p[a + 2] += v[a + 2] * dt;
      if (p[a + 1] < 0.05 && v[a + 1] < 0) {
        p[a + 1] = 0.05;
        v[a + 1] *= -0.35;
        v[a] *= 0.7;
        v[a + 2] *= 0.7;
      }
      rot[i * 2] += rot[i * 2 + 1] * dt;

      const t = life[i] / max[i];
      A[i * 4] = p[a]; A[i * 4 + 1] = p[a + 1]; A[i * 4 + 2] = p[a + 2];
      A[i * 4 + 3] = size[i * 2] + (size[i * 2 + 1] - size[i * 2]) * t;
      B[i * 4] = t; B[i * 4 + 1] = seed[i]; B[i * 4 + 2] = kind[i]; B[i * 4 + 3] = rot[i * 2];
      C[i * 4] = col[i * 4]; C[i * 4 + 1] = col[i * 4 + 1]; C[i * 4 + 2] = col[i * 4 + 2]; C[i * 4 + 3] = col[i * 4 + 3];
      D[a] = v[a]; D[a + 1] = v[a + 1]; D[a + 2] = v[a + 2];
      i++;
    }

    this.geometry.instanceCount = this.n;
    for (const at of [this.iA, this.iB, this.iC, this.iD]) {
      at.needsUpdate = true;
    }
  }

  clear() {
    this.n = 0;
    this.geometry.instanceCount = 0;
  }
}

export function createParticleEngine(scene, runeTex) {
  const light = new ParticlePool(6000, true, runeTex);
  const soft = new ParticlePool(3500, false, runeTex);
  const group = new THREE.Group();
  group.add(soft.mesh, light.mesh);
  scene.add(group);
  const fields = [];
  const rnd = (a = 1) => (Math.random() - 0.5) * 2 * a;

  return {
    group,
    rnd,
    fields,
    spawn(o) {
      const k = o.kind ?? 0;
      (k === 2 || k === 4 ? soft : light).add(o);
    },
    burst(pos, rgb, count = 40, speed = 8, kind = 1) {
      for (let i = 0; i < count; i++) {
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        const sp = speed * (0.35 + 0.65 * Math.random());
        this.spawn({
          kind,
          x: pos.x + rnd(0.25),
          y: pos.y + rnd(0.25),
          z: pos.z + rnd(0.25),
          vx: Math.sin(ph) * Math.cos(th) * sp,
          vy: Math.cos(ph) * sp + 1.5,
          vz: Math.sin(ph) * Math.sin(th) * sp,
          life: 0.4 + 0.65 * Math.random(),
          size: kind === 2 ? [0.6, 2.4] : kind === 0 ? [0.4, 1.1] : [0.06, 0.015],
          colour: rgb,
          grav: kind === 1 ? -11 : kind === 2 ? 1.5 : -2,
          drag: kind === 2 ? 1.1 : 0.7,
        });
      }
    },
    update(dt) {
      light.update(dt, fields);
      soft.update(dt, fields);
      fields.length = 0;
    },
    clear() {
      light.clear();
      soft.clear();
      fields.length = 0;
    },
  };
}
