import * as THREE from 'three';

const NOISE3_GLSL = /* glsl */ `
float vHash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float vNoise3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(vHash3(i), vHash3(i + vec3(1, 0, 0)), f.x), mix(vHash3(i + vec3(0, 1, 0)), vHash3(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(vHash3(i + vec3(0, 0, 1)), vHash3(i + vec3(1, 0, 1)), f.x), mix(vHash3(i + vec3(0, 1, 1)), vHash3(i + vec3(1, 1, 1)), f.x), f.y),
    f.z
  );
}
`;

function makeCardGeo() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-1, 0, 0, 1, 0, 0, 1, 1, 0, -1, 1, 0], 3));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  return g;
}

/**
 * Volumetric Raymarched VFX Pool:
 * 1. Raymarched Mushroom/Plasma Explosion Fireball (32 steps on a camera-facing proxy card)
 * 2. Raymarched Bending Tornado / Gravity Vortex Funnel (48 steps)
 * 3. Keplerian Differential-Rotation Accretion Disc (for Gravity / Singularity)
 * 4. Layered Energy Beam Cylinder
 */
export function createVolumetrics(scene) {
  const cardGeo = makeCardGeo();

  // --- 1. Volumetric Raymarched Fireball / Explosion Pool ---
  const blasts = [];
  for (let i = 0; i < 4; i++) {
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.ZeroFactor,
      blendDstAlpha: THREE.OneFactor,
      uniforms: {
        uTime: { value: 0 },
        uC: { value: new THREE.Vector3() },
        uBall: { value: new THREE.Vector4(2, 2, 0, 0) }, // x:radius, y:height, z:age, w:opacity
        uNear: { value: 1 },
        uColCore: { value: new THREE.Color('#fff5d6') },
        uColMid: { value: new THREE.Color('#ff5518') },
        uColSmoke: { value: new THREE.Color('#221c28') },
      },
      vertexShader: /* glsl */ `
        uniform vec3 uC; uniform vec4 uBall; uniform float uNear;
        varying vec3 vW;
        void main() {
          vec2 f = normalize(cameraPosition.xz - uC.xz + vec2(1e-4, 0.0));
          vec2 r = vec2(-f.y, f.x);
          float top = uBall.y + uBall.x * 1.3;
          float Rb = max(uBall.x * 1.85, top * 0.55 + 0.6);
          vec3 w = uC + vec3(f.x, 0.0, f.y) * uNear
                 + vec3(r.x, 0.0, r.y) * position.x * (Rb * 2.2 + 2.0)
                 + vec3(0.0, -1.2 + position.y * (top * 0.85 + Rb * 2.1 + 3.0), 0.0);
          vW = w;
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
        }
      `,
      fragmentShader: NOISE3_GLSL + /* glsl */ `
        uniform float uTime; uniform vec3 uC; uniform vec4 uBall;
        uniform vec3 uColCore, uColMid, uColSmoke;
        varying vec3 vW;
        void main() {
          float R = uBall.x, H = uBall.y, age = uBall.z, op = uBall.w;
          vec3 ro = cameraPosition, rd = normalize(vW - ro);
          float top = H + R * 1.3, Rb = max(R * 1.85, top * 0.55 + 0.6);
          vec3 oc = ro - (uC + vec3(0.0, top * 0.5, 0.0));
          float b = dot(oc, rd), h = b * b - (dot(oc, oc) - Rb * Rb);
          if (h < 0.0) discard;
          h = sqrt(h);
          float t0 = max(-b - h, 0.0), t1 = -b + h;
          if (t1 <= t0) discard;

          const int N = 30;
          float dt = (t1 - t0) / float(N);
          float j = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          float m = smoothstep(0.3, 2.0, age);
          float hot = exp(-age * 0.45);
          vec3 cc = uC + vec3(0.0, H, 0.0);
          vec3 col = vec3(0.0);
          float A = 0.0;

          for (int i = 0; i < N; i++) {
            vec3 p = ro + rd * (t0 + (float(i) + j) * dt);
            if (p.y < uC.y - 0.2) continue;
            vec3 q = (p - cc) / R;
            float rad = length(q.xz);
            // Mushroom cap flattening + rolling underside + rising stem
            float cap = 1.0 - length(q * vec3(1.0, 1.0 + 0.48 * m, 1.0));
            cap -= m * 0.85 * smoothstep(-0.05, -0.58, q.y) * (1.0 - smoothstep(0.25, 0.85, rad));
            vec3 s = p - uC;
            float sr = R * (0.22 + 0.32 * exp(-s.y / max(R * 0.35, 0.2)));
            float d = max(cap, (1.0 - length(s.xz) / sr) * step(s.y, H) * m * 0.72);
            if (d < -0.42) continue;
            float n = vNoise3(p * 0.52 - vec3(0.0, age * 1.4, 0.0)) * 0.62
                    + vNoise3(p * 1.15 - vec3(0.0, age * 2.5, 0.0)) * 0.38;
            float sphereFade = 1.0 - smoothstep(Rb * 0.65, Rb * 0.98, length(p - (uC + vec3(0.0, top * 0.5, 0.0))));
            float dens = smoothstep(0.0, 0.38, d + (n - 0.44) * (0.48 + 0.38 * m)) * sphereFade;
            if (dens < 0.01) continue;
            float heat = clamp((hot * (0.7 + 0.75 * d) + (n - 0.45) * 0.65) * 1.35, 0.0, 1.0);
            vec3 sc = mix(uColSmoke, uColMid * 2.4, smoothstep(0.22, 0.62, heat));
            sc = mix(sc, uColCore * 3.6, smoothstep(0.62, 0.92, heat));
            // Stylized top sun highlight on cooled smoke crust
            sc += vec3(0.32, 0.34, 0.42) * (0.4 + 0.6 * smoothstep(-0.4, 0.8, q.y)) * (1.0 - heat) * 0.5;
            float stepA = (1.0 - exp(-dens * dt * 1.1)) * op;
            col += (1.0 - A) * sc * stepA;
            A += (1.0 - A) * stepA;
            if (A > 0.96) break;
          }
          if (A < 0.008) discard;
          gl_FragColor = vec4(col, A);
        }
      `,
    });
    const mesh = new THREE.Mesh(cardGeo, mat);
    mesh.visible = false;
    mesh.frustumCulled = false;
    mesh.renderOrder = 13;
    scene.add(mesh);
    blasts.push({ mesh, mat, active: false, age: 0, life: 2.6, maxR: 5.5, pos: new THREE.Vector3() });
  }

  // --- 2. Volumetric Raymarched Vortex / Tornado Pool ---
  const vortices = [];
  for (let i = 0; i < 3; i++) {
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.ZeroFactor,
      blendDstAlpha: THREE.OneFactor,
      uniforms: {
        uTime: { value: 0 },
        uBase: { value: new THREE.Vector3() },
        uShape: { value: new THREE.Vector4(16, 1.4, 5.2, 1) }, // H, R0, R1, on
        uLean: { value: new THREE.Vector2(0, 0) },
        uNear: { value: 1 },
        uColA: { value: new THREE.Color('#66e0ff') },
        uColB: { value: new THREE.Color('#1d2a44') },
      },
      vertexShader: /* glsl */ `
        uniform vec3 uBase; uniform vec4 uShape; uniform vec2 uLean; uniform float uNear;
        varying vec3 vW;
        void main() {
          vec3 mid = uBase + vec3(uLean.x * 0.5, 0.0, uLean.y * 0.5);
          vec2 f = normalize(cameraPosition.xz - mid.xz + vec2(1e-4, 0.0));
          vec2 r = vec2(-f.y, f.x);
          float Rb = uShape.z * 1.45 + length(uLean) * 0.5 + 2.0;
          vec3 w = mid + vec3(f.x, 0.0, f.y) * uNear
                 + vec3(r.x, 0.0, r.y) * position.x * (Rb + 1.0)
                 + vec3(0.0, -0.5 + position.y * (uShape.x + 2.0), 0.0);
          vW = w;
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
        }
      `,
      fragmentShader: NOISE3_GLSL + /* glsl */ `
        uniform float uTime; uniform vec3 uBase; uniform vec4 uShape; uniform vec2 uLean;
        uniform vec3 uColA, uColB;
        varying vec3 vW;
        vec2 axis(float h) {
          return uLean * pow(h, 1.5) + vec2(sin(h * 5.2 + uTime * 2.2), cos(h * 4.5 + uTime * 1.9)) * 0.9 * h;
        }
        void main() {
          float Ht = uShape.x, op = uShape.w;
          vec3 ro = cameraPosition, rd = normalize(vW - ro);
          float Rb = uShape.z * 1.45 + length(uLean) * 0.5 + 2.0;
          vec2 oc = ro.xz - uBase.xz - uLean * 0.5;
          float qa = dot(rd.xz, rd.xz), qb = dot(oc, rd.xz), qd = qb * qb - qa * (dot(oc, oc) - Rb * Rb);
          if (qd < 0.0 || qa < 1e-6) discard;
          qd = sqrt(qd);
          float t0 = max((-qb - qd) / qa, 0.0), t1 = (-qb + qd) / qa;
          if (abs(rd.y) > 1e-4) {
            float ya = (uBase.y - ro.y) / rd.y, yb = (uBase.y + Ht - ro.y) / rd.y;
            t0 = max(t0, min(ya, yb)); t1 = min(t1, max(ya, yb));
          }
          if (t1 <= t0) discard;
          float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
          float t = t0;
          vec3 col = vec3(0.0);
          float A = 0.0;
          const int STEPS = 44;
          float dt = (t1 - t0) / float(STEPS);
          t += dt * ign;
          for (int i = 0; i < STEPS; i++) {
            vec3 p = ro + rd * t;
            float h = clamp((p.y - uBase.y) / Ht, 0.0, 1.0);
            float R = uShape.y + (uShape.z - uShape.y) * pow(h, 1.65) + uShape.y * 1.2 * pow(max(0.0, 1.0 - h / 0.16), 2.0);
            vec2 q = p.xz - uBase.xz - axis(h);
            float rr = length(q), Rout = R * 1.45;
            if (rr < Rout) {
              float ang = atan(q.y, q.x) - uTime * 4.5 + p.y * 0.55 + rr * 0.4;
              vec2 cs = vec2(cos(ang), sin(ang));
              float n1 = vNoise3(vec3(cs * 1.6, p.y * 0.16 - uTime * 1.2));
              float n2 = vNoise3(vec3(cs * 4.0 + 4.0, p.y * 0.55 - uTime * 2.6));
              float n = n1 * 0.6 + n2 * 0.4;
              float edge = R * (0.78 + 0.5 * n);
              float dens = (1.0 - smoothstep(edge * 0.58, edge, rr)) * (0.55 + 0.45 * smoothstep(0.0, R * 0.38, rr));
              dens *= smoothstep(0.0, 0.08, h) * (1.0 - smoothstep(0.84, 1.0, h));
              float glow = smoothstep(0.52, 0.85, n2);
              vec3 sc = mix(uColB, uColA * 2.2, 0.35 + 0.65 * glow);
              float stepA = (1.0 - exp(-dens * dt * 0.85)) * op;
              col += (1.0 - A) * sc * stepA;
              A += (1.0 - A) * stepA;
              if (A > 0.94) break;
            }
            t += dt;
          }
          if (A < 0.008) discard;
          gl_FragColor = vec4(col, A);
        }
      `,
    });
    const mesh = new THREE.Mesh(cardGeo, mat);
    mesh.visible = false;
    mesh.frustumCulled = false;
    mesh.renderOrder = 12;
    scene.add(mesh);
    vortices.push({ mesh, mat, active: false });
  }

  // --- 3. Gravity / Singularity Accretion Disc Pool ---
  const discs = [];
  const ringGeo = new THREE.RingGeometry(0.95, 3.6, 128, 1).rotateX(-Math.PI / 2);
  for (let i = 0; i < 3; i++) {
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uOn: { value: 0 },
        uColA: { value: new THREE.Color('#6a2cff') },
        uColB: { value: new THREE.Color('#ffaa55') },
      },
      vertexShader: /* glsl */ `
        varying vec3 vL; varying vec3 vW;
        void main() {
          vL = position;
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          gl_Position = projectionMatrix * viewMatrix * w;
        }
      `,
      fragmentShader: NOISE3_GLSL + /* glsl */ `
        uniform float uTime, uOn; uniform vec3 uColA, uColB;
        varying vec3 vL; varying vec3 vW;
        void main() {
          float r = length(vL.xz);
          float u = (r - 1.0) / 2.6;
          if (u < 0.0 || u > 1.0) discard;
          float a = atan(vL.z, vL.x) + uTime * 3.8 / pow(max(r, 0.5), 1.45);
          vec2 ring = vec2(cos(a), sin(a));
          float n = vNoise3(vec3(ring * 1.4, r * 2.2)) * 0.55
                  + vNoise3(vec3(ring * 3.6 + 5.0, r * 5.2)) * 0.3
                  + vNoise3(vec3(ring * 7.5 + 9.0, r * 10.0)) * 0.15;
          float toward = 1.0 + 0.38 * dot(normalize(vec3(-vL.z, 0.0, vL.x)), normalize(cameraPosition - vW));
          float t = (1.0 - u) * (0.28 + 1.45 * n) * toward;
          vec3 c = mix(uColA * 0.8, uColA * 1.9, smoothstep(0.18, 0.28, t));
          c = mix(c, uColB * 2.6, smoothstep(0.38, 0.5, t));
          c = mix(c, vec3(4.0, 3.8, 3.4), smoothstep(0.65, 0.8, t));
          float alpha = smoothstep(0.1, 0.2, t) * smoothstep(0.0, 0.05, u) * uOn;
          if (alpha < 0.02) discard;
          gl_FragColor = vec4(c * alpha, alpha);
        }
      `,
    });
    const mesh = new THREE.Mesh(ringGeo, mat);
    mesh.visible = false;
    mesh.frustumCulled = false;
    mesh.renderOrder = 11;
    scene.add(mesh);
    discs.push({ mesh, mat, active: false });
  }

  // --- 4. Energy Beam Pool ---
  const beams = [];
  const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 24, 1, true).translate(0, 0.5, 0);
  for (let i = 0; i < 4; i++) {
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#44ddff') },
        uOpacity: { value: 0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv; varying vec3 vN; varying vec3 vV;
        void main() {
          vUv = uv;
          vec4 w = modelMatrix * vec4(position, 1.0);
          vN = normalize(mat3(modelMatrix) * normal);
          vV = normalize(cameraPosition - w.xyz);
          gl_Position = projectionMatrix * viewMatrix * w;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime, uOpacity; uniform vec3 uColor;
        varying vec2 vUv; varying vec3 vN; varying vec3 vV;
        void main() {
          float core = pow(abs(dot(normalize(vN), normalize(vV))), 1.4);
          float helix = pow(0.5 + 0.5 * sin(vUv.x * 18.85 - vUv.y * 28.0 + uTime * 22.0), 4.0);
          float pulse = 0.82 + 0.18 * sin(vUv.y * 40.0 - uTime * 35.0);
          float ends = smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.95, vUv.y);
          vec3 col = mix(uColor * 2.5, vec3(3.8, 3.6, 3.3), core * core) * pulse + uColor * 2.2 * helix;
          gl_FragColor = vec4(col * (0.35 + 0.65 * core + 0.4 * helix) * ends * uOpacity, 1.0);
        }
      `,
    });
    const mesh = new THREE.Mesh(cylGeo, mat);
    mesh.visible = false;
    mesh.frustumCulled = false;
    mesh.renderOrder = 12;
    scene.add(mesh);
    beams.push({ mesh, mat, active: false, age: 0, life: 0.6, r0: 0.6 });
  }

  return {
    spawnBlast({ pos, maxR = 5.5, life = 2.6, colCore = '#fff6dc', colMid = '#ff541a', colSmoke = '#221c28' }) {
      const slot = blasts.find((b) => !b.active) || blasts[0];
      slot.active = true;
      slot.age = 0;
      slot.life = life;
      slot.maxR = maxR;
      slot.pos.copy(pos);
      slot.mesh.visible = true;
      slot.mat.uniforms.uC.value.copy(pos);
      slot.mat.uniforms.uColCore.value.set(colCore);
      slot.mat.uniforms.uColMid.value.set(colMid);
      slot.mat.uniforms.uColSmoke.value.set(colSmoke);
      return slot;
    },
    acquireVortex() {
      const slot = vortices.find((v) => !v.active) || vortices[0];
      slot.active = true;
      slot.mesh.visible = true;
      return slot;
    },
    releaseVortex(slot) {
      if (!slot) return;
      slot.active = false;
      slot.mesh.visible = false;
    },
    acquireDisc() {
      const slot = discs.find((d) => !d.active) || discs[0];
      slot.active = true;
      slot.mesh.visible = true;
      return slot;
    },
    releaseDisc(slot) {
      if (!slot) return;
      slot.active = false;
      slot.mesh.visible = false;
    },
    spawnBeam({ from, to, radius = 0.65, color = '#44ddff', life = 0.65 }) {
      const slot = beams.find((b) => !b.active) || beams[0];
      slot.active = true;
      slot.age = 0;
      slot.life = life;
      slot.r0 = radius;
      slot.mesh.visible = true;
      const dir = new THREE.Vector3().subVectors(to, from);
      const len = Math.max(0.5, dir.length());
      slot.mesh.position.copy(from);
      slot.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      slot.mesh.scale.set(radius, len, radius);
      slot.mat.uniforms.uColor.value.set(color);
      slot.mat.uniforms.uOpacity.value = 1;
      return slot;
    },
    update(dt, now, camera) {
      for (const b of blasts) {
        if (!b.active) continue;
        b.age += dt;
        const t = b.age / b.life;
        if (t >= 1) {
          b.active = false;
          b.mesh.visible = false;
          continue;
        }
        const grow = 1 - Math.exp(-b.age * 4.5);
        const R = b.maxR * (0.28 + 0.72 * grow);
        const H = R * (0.65 + 1.35 * t);
        const fade = 1 - THREE.MathUtils.smoothstep(t, 0.55, 1.0);
        const dist = camera.position.distanceTo(b.pos);
        b.mat.uniforms.uTime.value = now;
        b.mat.uniforms.uBall.value.set(R, H, b.age, fade);
        b.mat.uniforms.uNear.value = Math.min(R * 1.4, Math.max(0.4, dist - 1.2));
      }
      for (const v of vortices) {
        if (!v.active) continue;
        v.mat.uniforms.uTime.value = now;
        const dist = camera.position.distanceTo(v.mat.uniforms.uBase.value);
        v.mat.uniforms.uNear.value = Math.min(v.mat.uniforms.uShape.value.z * 1.2, Math.max(0.4, dist - 1.5));
      }
      for (const d of discs) {
        if (!d.active) continue;
        d.mat.uniforms.uTime.value = now;
      }
      for (const bm of beams) {
        if (!bm.active) continue;
        bm.age += dt;
        const t = bm.age / bm.life;
        if (t >= 1) {
          bm.active = false;
          bm.mesh.visible = false;
          continue;
        }
        const w = bm.r0 * (0.35 + 0.85 * Math.sin(Math.min(1, t * 4) * Math.PI * 0.5)) * (1 - Math.pow(t, 2.2) * 0.85);
        bm.mesh.scale.x = w;
        bm.mesh.scale.z = w;
        bm.mat.uniforms.uTime.value = now;
        bm.mat.uniforms.uOpacity.value = 1 - THREE.MathUtils.smoothstep(t, 0.5, 1.0);
      }
    },
    clear() {
      for (const b of blasts) { b.active = false; b.mesh.visible = false; }
      for (const v of vortices) { v.active = false; v.mesh.visible = false; }
      for (const d of discs) { d.active = false; d.mesh.visible = false; }
      for (const bm of beams) { bm.active = false; bm.mesh.visible = false; }
    },
  };
}
