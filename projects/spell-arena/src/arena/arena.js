import * as THREE from 'three';

export const ARENA_RADIUS = 27.5;

const CELLS3_GLSL = /* glsl */ `
vec3 cHash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)), dot(p, vec3(269.5, 183.3, 246.1)), dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453);
}
void cells3(vec3 p, out float edge, out vec3 id, out vec3 centre) {
  vec3 n = floor(p), f = fract(p), mg = vec3(0.0), mr = vec3(0.0);
  float md = 8.0;
  for (int k = -1; k <= 1; k++) for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec3 g = vec3(float(i), float(j), float(k)), r = g + cHash3(n + g) - f;
    float d = dot(r, r);
    if (d < md) { md = d; mr = r; mg = g; }
  }
  md = 8.0;
  for (int k = -1; k <= 1; k++) for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec3 g = mg + vec3(float(i), float(j), float(k)), r = g + cHash3(n + g) - f, dr = r - mr;
    if (dot(dr, dr) > 1e-5) md = min(md, dot(0.5 * (mr + r), normalize(dr)));
  }
  edge = md;
  id = cHash3(n + mg + 17.0);
  centre = mr;
}
`;

const AIR_HAZE_GLSL = /* glsl */ `
vec3 applyHaze(vec3 col, vec3 world, vec3 sunDir) {
  vec3 v = world - cameraPosition;
  float d = length(v);
  float f = (1.0 - exp(-d * 0.0052)) * 0.92;
  vec3 hazeBlue = vec3(0.56, 0.72, 0.94);
  vec3 hazeSun = vec3(0.95, 0.86, 0.72);
  vec3 haze = mix(hazeBlue, hazeSun, pow(max(dot(v / max(d, 1e-3), normalize(sunDir)), 0.0), 3.0) * 0.65);
  return mix(col, haze, f);
}
`;

const FLOOR_VERT = /* glsl */ `
varying vec3 vWorld;
varying vec3 vN;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;

const FLOOR_FRAG = AIR_HAZE_GLSL + /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec4 uMarks[8];
uniform vec4 uMarkCols[8];
uniform vec4 uShock;
varying vec3 vWorld;
varying vec3 vN;

float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise2(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash2(i), hash2(i + vec2(1.0, 0.0)), f.x),
    mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

void main() {
  vec2 xz = vWorld.xz;
  float r = length(xz);
  float ang = atan(xz.y, xz.x);

  // Sunlit carved travertine colosseum flagstones
  float ringIdx = floor(r / 2.8);
  float ringF = fract(r / 2.8);
  float segCount = max(8.0, floor(6.2832 * max(ringIdx, 1.0) * 0.85));
  float segPos = (ang / 6.2832 + 0.5) * segCount + mod(ringIdx, 2.0) * 0.5;
  float segIdx = floor(segPos);
  float segF = fract(segPos);

  float tileId = hash2(vec2(ringIdx * 13.7, segIdx * 7.3));
  float seamR = min(ringF, 1.0 - ringF) * 2.8;
  float seamA = min(segF, 1.0 - segF) * (6.2832 * max(r, 1.5) / segCount);
  float seam = min(seamR, seamA);
  float grout = 1.0 - smoothstep(0.022, 0.085, seam);

  float broad = noise2(xz * 0.14 + 4.0) * 0.65 + noise2(xz * 0.55 + 11.0) * 0.35;
  // Warm limestone palette (never muddy grey)
  vec3 stone = mix(vec3(0.60, 0.56, 0.49), vec3(0.76, 0.71, 0.62), tileId * 0.55 + broad * 0.45);
  // Subtle moss tucked into outer stone seams
  float mossMask = smoothstep(0.55, 0.82, noise2(xz * 0.25 + 2.0)) * smoothstep(11.0, 22.0, r) * grout;
  stone = mix(stone, vec3(0.30, 0.32, 0.38), grout * 0.58);
  stone = mix(stone, vec3(0.26, 0.52, 0.28), mossMask * 0.72);

  // Brass/gold inlaid colosseum geometry
  float centerRing = exp(-pow((r - 3.8) / 0.13, 2.0)) + exp(-pow((r - 13.5) / 0.11, 2.0)) * 0.75;
  float boundary = exp(-pow((r - 26.8) / 0.24, 2.0));
  float radial = step(0.99, abs(cos(ang * 4.0))) * smoothstep(3.8, 5.0, r) * (1.0 - smoothstep(25.8, 27.0, r));
  stone = mix(stone, vec3(0.84, 0.68, 0.36), clamp(centerRing + radial * 0.55, 0.0, 1.0) * 0.75);

  // Painterly warm sunlight + cool cobalt sky bounce
  float sunL = smoothstep(-0.1, 0.7, dot(normalize(vN), normalize(uSunDir)));
  vec3 col = stone * (vec3(1.18, 1.06, 0.88) * sunL + vec3(0.42, 0.52, 0.82) * 0.58);

  // Subtle arcane boundary ring
  float pulse = 0.78 + 0.22 * sin(uTime * 2.6 + ang * 8.0);
  col += vec3(0.95, 0.78, 0.38) * boundary * (0.85 + 0.35 * pulse);

  // Dynamic spell floor marks
  for (int i = 0; i < 8; i++) {
    vec4 mk = uMarks[i];
    if (mk.w <= 0.01) continue;
    float d = length(xz - mk.xy) / max(mk.z, 0.1);
    if (d > 1.3) continue;
    float n = noise2(xz * 1.6 + float(i) * 9.0);
    float mask = (1.0 - smoothstep(0.45, 1.05, d + (n - 0.5) * 0.35)) * mk.w;
    vec4 mc = uMarkCols[i];
    if (mc.w < 0.5) {
      col = mix(col, vec3(0.11, 0.09, 0.12), mask * 0.78);
      col += mc.rgb * 1.9 * exp(-pow((d - 0.82) / 0.16, 2.0)) * mk.w;
    } else {
      col = mix(col, col * 0.55 + mc.rgb * 0.6, mask * 0.45);
      col += mc.rgb * 2.1 * exp(-pow((d - 0.92) / 0.09, 2.0)) * mk.w;
    }
  }

  if (uShock.w > 0.01) {
    float sd = abs(length(xz - uShock.xy) - uShock.z);
    col += vec3(1.4, 1.2, 0.9) * exp(-pow(sd / 0.75, 2.0)) * uShock.w * 0.85;
  }

  col = applyHaze(col, vWorld, uSunDir);
  gl_FragColor = vec4(col, 1.0);
}
`;

const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const SKY_FRAG = /* glsl */ `
precision highp float;
uniform vec3 uSunDir;
uniform float uTime;
varying vec3 vDir;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1, 0)), f.x),
    mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x),
    f.y
  );
}

void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.2, 1.0);

  // Painterly sunlit sky (rich azure zenith, warm golden-cream horizon like small-magic)
  vec3 zenith = vec3(0.18, 0.36, 0.74);
  vec3 mid = vec3(0.46, 0.68, 0.94);
  vec3 horizon = vec3(0.94, 0.86, 0.76);
  vec3 col = mix(horizon, mid, smoothstep(-0.02, 0.25, h));
  col = mix(col, zenith, smoothstep(0.22, 0.82, h));

  // Soft sunlit cumulus clouds
  if (d.y > 0.01) {
    vec2 cuv = d.xz / (d.y + 0.22) * 1.1 + vec2(uTime * 0.012, -uTime * 0.006);
    float cl = noise(cuv) * 0.6 + noise(cuv * 2.3 + 4.1) * 0.4;
    float cmask = smoothstep(0.52, 0.76, cl) * smoothstep(0.01, 0.2, d.y) * (1.0 - smoothstep(0.6, 0.92, d.y));
    vec3 ccol = mix(vec3(0.84, 0.86, 0.94), vec3(1.08, 0.98, 0.86), pow(max(dot(d, normalize(uSunDir)), 0.0), 2.0));
    col = mix(col, ccol, cmask * 0.7);
  }

  float sd = max(dot(d, normalize(uSunDir)), 0.0);
  col += vec3(1.4, 1.08, 0.72) * pow(sd, 12.0) * 0.55;
  col += vec3(3.0, 2.6, 2.0) * smoothstep(0.9965, 0.9994, sd);

  gl_FragColor = vec4(col, 1.0);
}
`;

function createPaintedStoneMat(colorHex, sunDir) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(colorHex) },
      uSunDir: { value: sunDir.clone() },
    },
    vertexShader: /* glsl */ `
      varying vec3 vW; varying vec3 vN; varying vec3 vL;
      void main() {
        vL = position;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }
    `,
    fragmentShader: CELLS3_GLSL + AIR_HAZE_GLSL + /* glsl */ `
      precision highp float;
      uniform vec3 uColor, uSunDir;
      varying vec3 vW, vN, vL;
      void main() {
        vec3 N = normalize(vN);
        float edge; vec3 id, mid;
        cells3(vW * 0.65, edge, id, mid);
        vec3 alb = uColor * (0.86 + 0.24 * id.x);
        float bevel = (1.0 - smoothstep(0.04, 0.28, edge)) * dot(normalize(-mid + 1e-4), normalize(uSunDir));
        alb *= 1.0 + 0.22 * bevel;
        alb = mix(alb, alb * vec3(0.55, 0.54, 0.62), (1.0 - smoothstep(0.01, 0.04, edge)) * 0.65);
        // Subtle moss on sky-facing tops
        float moss = smoothstep(0.55, 0.9, N.y) * smoothstep(0.45, 0.75, id.y);
        alb = mix(alb, vec3(0.28, 0.56, 0.28), moss * 0.45);
        float sunL = smoothstep(-0.08, 0.6, dot(N, normalize(uSunDir)));
        vec3 col = alb * (vec3(1.22, 1.08, 0.9) * sunL + vec3(0.46, 0.56, 0.86) * (0.52 + 0.48 * (N.y * 0.5 + 0.5)));
        gl_FragColor = vec4(applyHaze(col, vW, uSunDir), 1.0);
      }
    `,
  });
}

/**
 * Sunlit Painterly Sky-Colosseum Arena (matching small-magic's rich daylight palette).
 */
export function createArena(scene) {
  const sunDir = new THREE.Vector3(-0.52, 0.54, -0.66).normalize();

  const hemi = new THREE.HemisphereLight('#a8c8ff', '#58524a', 0.95);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight('#fff0d2', 1.65);
  sun.position.copy(sunDir).multiplyScalar(70);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 150;
  sun.shadow.camera.left = -36;
  sun.shadow.camera.right = 36;
  sun.shadow.camera.top = 36;
  sun.shadow.camera.bottom = -36;
  sun.shadow.bias = -0.0008;
  scene.add(sun);

  const spellLight = new THREE.PointLight('#ffaa44', 0, 36, 1.4);
  spellLight.position.set(0, 4, 0);
  scene.add(spellLight);

  const skyUniforms = { uSunDir: { value: sunDir.clone() }, uTime: { value: 0 } };
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(220, 32, 20),
    new THREE.ShaderMaterial({
      uniforms: skyUniforms,
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      side: THREE.BackSide,
      depthWrite: false,
    })
  ));

  // Main Sunlit Stone Arena Floor
  const marks = Array.from({ length: 8 }, () => new THREE.Vector4(0, 0, 1, 0));
  const markCols = Array.from({ length: 8 }, () => new THREE.Vector4(1, 0.5, 0.2, 0));
  let markCursor = 0;

  const floorUniforms = {
    uTime: { value: 0 },
    uSunDir: { value: sunDir.clone() },
    uMarks: { value: marks },
    uMarkCols: { value: markCols },
    uShock: { value: new THREE.Vector4(0, 0, 0, 0) },
  };

  const floorGeo = new THREE.CylinderGeometry(ARENA_RADIUS + 1.2, ARENA_RADIUS + 3.2, 3.6, 72);
  floorGeo.translate(0, -1.8, 0);
  const floor = new THREE.Mesh(floorGeo, new THREE.ShaderMaterial({
    uniforms: floorUniforms,
    vertexShader: FLOOR_VERT,
    fragmentShader: FLOOR_FRAG,
  }));
  floor.receiveShadow = true;
  scene.add(floor);

  const stoneMat = createPaintedStoneMat('#c7bca6', sunDir);
  const trimMat = createPaintedStoneMat('#d9b66c', sunDir);

  // Outer stepped balustrade ring
  const wallRing = new THREE.Mesh(new THREE.TorusGeometry(ARENA_RADIUS + 1.0, 0.72, 10, 72), stoneMat);
  wallRing.rotation.x = Math.PI / 2;
  wallRing.position.y = 0.22;
  scene.add(wallRing);

  // 8 Sunlit Ruined Colosseum Arches (Voronoi-faceted limestone, no harsh dark silhouettes!)
  const floaters = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const r = ARENA_RADIUS + 2.8;
    const grp = new THREE.Group();
    grp.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
    grp.rotation.y = -a + Math.PI / 2;

    const plinth = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.3, 2.2), stoneMat);
    plinth.position.y = 0.65;
    grp.add(plinth);

    const colL = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.56, 7.6, 10), stoneMat);
    colL.position.set(-1.35, 4.9, 0);
    grp.add(colL);

    const colR = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.56, i % 3 === 1 ? 5.2 : 7.6, 10), stoneMat);
    colR.position.set(1.35, i % 3 === 1 ? 3.7 : 4.9, 0);
    grp.add(colR);

    if (i % 3 !== 1) {
      const lintel = new THREE.Mesh(new THREE.BoxGeometry(4.5, 1.1, 1.75), stoneMat);
      lintel.position.set(0, 9.1, 0);
      grp.add(lintel);

      const cap = new THREE.Mesh(new THREE.BoxGeometry(4.7, 0.26, 1.9), trimMat);
      cap.position.set(0, 8.5, 0);
      grp.add(cap);
    }

    scene.add(grp);
  }

  // Graceful Distant Ringed Astrolabe Ruins fading softly into sky haze
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + 0.35;
    const dist = 74 + (i % 2) * 18;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(6 + (i % 3) * 2.5, 0.45, 8, 36), trimMat);
    ring.position.set(Math.cos(a) * dist, 16 + (i % 3) * 7, Math.sin(a) * dist);
    ring.rotation.set(0.35, a, 0.2);
    scene.add(ring);
    floaters.push({ mesh: ring, baseY: ring.position.y, phase: i * 1.4, speed: 0.45 });
  }

  let lightPower = 0;
  let shockAge = -1;
  const shockPos = new THREE.Vector2();

  return {
    sunDir,
    radius: ARENA_RADIUS,
    addMark(x, z, radius, rgb, kind = 0) {
      const idx = markCursor++ % 8;
      marks[idx].set(x, z, radius, 1.0);
      markCols[idx].set(rgb[0], rgb[1], rgb[2], kind);
    },
    triggerFloorShock(x, z) {
      shockPos.set(x, z);
      shockAge = 0;
    },
    flashLight(pos, colorHex, power = 14) {
      spellLight.position.copy(pos);
      spellLight.color.set(colorHex);
      lightPower = Math.max(lightPower, power);
    },
    clearMarks() {
      for (let i = 0; i < 8; i++) marks[i].w = 0;
      shockAge = -1;
      floorUniforms.uShock.value.w = 0;
    },
    update(dt, now) {
      skyUniforms.uTime.value = now;
      floorUniforms.uTime.value = now;

      for (let i = 0; i < 8; i++) {
        if (marks[i].w > 0) marks[i].w = Math.max(0, marks[i].w - dt * 0.08);
      }

      if (shockAge >= 0) {
        shockAge += dt;
        const R = shockAge * 36;
        const P = Math.max(0, 1 - shockAge / 0.9);
        floorUniforms.uShock.value.set(shockPos.x, shockPos.y, R, P);
        if (P <= 0) shockAge = -1;
      }

      if (lightPower > 0.01) {
        lightPower *= Math.exp(-dt * 5.2);
        spellLight.intensity = lightPower;
      } else {
        spellLight.intensity = 0;
      }

      for (const f of floaters) {
        f.mesh.position.y = f.baseY + Math.sin(now * f.speed + f.phase) * 0.85;
        f.mesh.rotation.y += dt * 0.09;
      }
    },
  };
}
