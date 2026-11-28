import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { knead, roll } from './shape.js';
import { buildSigilGlsl } from './sigil.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const TAU = Math.PI * 2;

/**
 * First-person carved wooden arcane staff with leather grip, golden ferrules,
 * fern-curled head, levitating spell crystal, and orbiting mini-sigil.
 * Modeled after small-magic/src/staff.js using organic CatmullRom roll/knead tubes.
 */
export function createFirstPersonStaff(runeTex, sunDir) {
  const handScene = new THREE.Scene();
  const handCam = new THREE.PerspectiveCamera(56, window.innerWidth / window.innerHeight, 0.04, 8);

  const parts = [];
  const add = (g, hex, kind) => {
    const n = g.attributes.position.count;
    const c = new THREE.Color(hex);
    const tint = new Float32Array(n * 3);
    const k = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      tint.set([c.r, c.g, c.b], i * 3);
      k[i] = kind;
    }
    g.setAttribute('tint', new THREE.BufferAttribute(tint, 3));
    g.setAttribute('kind', new THREE.BufferAttribute(k, 1));
    if (!g.attributes.normal) g.computeVertexNormals();
    g.deleteAttribute('uv');
    parts.push(g.index ? g.toNonIndexed() : g);
  };

  const WOOD = '#9a683e';
  const GOLD = '#deb24a';

  // Organic gnarled shaft
  const SHAFT = [V(0.012, -1.2, 0), V(-0.008, -0.85, 0.006), V(0.01, -0.5, -0.004), V(-0.006, -0.22, 0.005), V(0, -0.02, 0)];
  add(knead(roll(SHAFT, (t) => 0.02 + 0.003 * Math.sin(t * 22) + 0.003 * Math.sin(t * 9 + 1), { around: 12, every: 0.025 }), 0.0022, 28, 3), WOOD, 0);

  // Leather wrapped grip + golden bands
  const GRIP = [V(0.006, -0.7, 0.002), V(0.01, -0.53, -0.004), V(0.004, -0.38, 0)];
  add(roll(GRIP, 0.0265, { around: 12, every: 0.025 }), '#4b3025', 1);
  for (const y of [-0.71, -0.37]) {
    add(new THREE.TorusGeometry(0.029, 0.0055, 8, 20).rotateX(Math.PI / 2).translate(0.006, y, 0), GOLD, 2);
  }

  // Fern-curled crook head cradling the levitating crystal
  const HEAD = [
    V(0, -0.06, 0), V(0.006, -0.01, 0.002), V(0.032, 0.045, 0.004),
    V(0.068, 0.115, 0.006), V(0.08, 0.19, 0.004), V(0.056, 0.26, 0),
    V(0.008, 0.292, -0.004), V(-0.045, 0.274, -0.006), V(-0.074, 0.224, -0.004),
    V(-0.07, 0.166, 0), V(-0.044, 0.134, 0.004),
  ];
  add(knead(roll(HEAD, (t) => 0.021 - 0.0165 * Math.pow(t, 0.8), { around: 10, every: 0.01 }), 0.0014, 42, 7), WOOD, 0);

  // Lower counter-shoot
  const SHOOT = [V(0.014, 0.01, 0.004), V(-0.01, 0.052, 0.012), V(-0.024, 0.092, 0.01), V(-0.017, 0.124, 0.004)];
  add(roll(SHOOT, (t) => 0.0095 - 0.0068 * t, { around: 8, every: 0.01 }), WOOD, 0);

  // Golden collars under the crook
  for (const [y, r, w] of [[-0.145, 0.0235, 0.0045], [-0.075, 0.024, 0.0045]]) {
    add(new THREE.TorusGeometry(r, w, 8, 20).rotateX(Math.PI / 2).translate(0, y, 0), GOLD, 2);
  }

  const own = {
    uSun: { value: sunDir.clone() },
    uGlow: { value: new THREE.Color('#f4cf7a') },
    uTime: { value: 0 },
    uPower: { value: 1 },
  };

  const woodMat = new THREE.ShaderMaterial({
    uniforms: own,
    vertexShader: /* glsl */ `
      attribute vec3 tint; attribute float kind;
      varying vec3 vP; varying vec3 vN; varying vec3 vTint; varying float vKind; varying vec3 vV;
      void main() {
        vP = position;
        vN = normalize(normalMatrix * normal);
        vTint = tint;
        vKind = kind;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vP; varying vec3 vN; varying vec3 vTint; varying float vKind; varying vec3 vV;
      uniform vec3 uSun, uGlow; uniform float uTime, uPower;
      void main() {
        vec3 N = normalize(vN), V = normalize(vV), alb = vTint;
        float th = atan(vP.z, vP.x) / 6.2832, s = vP.y;
        vec3 emissive = vec3(0.0);
        float spec = 0.0;
        if (vKind < 0.5) {
          float g = sin((th + s * 0.9) * 56.0 + sin(s * 30.0) * 1.4);
          alb *= 0.82 + 0.24 * smoothstep(-0.2, 0.7, g);
          // Glowing carved rune channel spiraling up the wood
          float mask = smoothstep(-0.36, -0.30, s) * (1.0 - smoothstep(-0.06, -0.02, s));
          float ch = abs(fract(th + s * 4.5) - 0.5);
          float core = (1.0 - smoothstep(0.0, 0.035, ch)) * mask;
          emissive = uGlow * core * uPower * (0.65 + 0.65 * pow(0.5 + 0.5 * sin(s * 24.0 - uTime * 3.8), 3.0));
        } else if (vKind < 1.5) {
          float wrap = fract(s * 38.0 + th);
          alb *= 0.76 + 0.28 * smoothstep(0.05, 0.2, wrap);
        } else {
          spec = 1.0;
        }
        float sunL = smoothstep(-0.15, 0.65, dot(N, normalize(uSun)));
        vec3 col = alb * (vec3(1.22, 1.08, 0.9) * sunL + vec3(0.45, 0.56, 0.85) * (0.5 + 0.5 * (N.y * 0.5 + 0.5)));
        if (spec > 0.5) {
          vec3 H = normalize(normalize(uSun) + V);
          col += vec3(1.3, 1.15, 0.85) * pow(max(dot(N, H), 0.0), 28.0) * 0.9;
        }
        // Subtle glow cast from the crystal onto the inner crook
        float dHeart = length(vP - vec3(0.0, 0.195, 0.0));
        col += alb * uGlow * (0.55 / (1.0 + dHeart * dHeart * 38.0)) * uPower;
        col += emissive;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  const rig = new THREE.Group();
  handScene.add(rig);

  const staffMesh = new THREE.Mesh(mergeGeometries(parts), woodMat);
  rig.add(staffMesh);

  // Levitating glowing crystal inside the fern crook
  const crystalMat = new THREE.ShaderMaterial({
    uniforms: own,
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV;
      void main() {
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV;
      uniform vec3 uGlow; uniform float uPower;
      void main() {
        float fres = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.0);
        vec3 col = mix(uGlow * 1.6, vec3(3.2, 3.0, 2.7), 0.4 + 0.6 * fres) * uPower;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.034, 0), crystalMat);
  crystal.scale.set(0.82, 1.55, 0.82);
  crystal.position.set(0.002, 0.195, 0);
  rig.add(crystal);

  // Orbiting mini arcane sigil around crystal
  const sigilMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      tRunes: { value: runeTex },
      uTime: own.uTime,
      uColor: own.uGlow,
      uSides: { value: 6 },
      uPower: own.uPower,
    },
    vertexShader: /* glsl */ `varying vec2 vC; void main() { vC = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      varying vec2 vC; uniform sampler2D tRunes; uniform float uTime, uSides, uPower; uniform vec3 uColor;
      ${buildSigilGlsl(false)}
      void main() {
        float r = length(vC);
        if (r > 1.0) discard;
        float I = sigil(vC, uSides, uTime * 0.9, 1.0, 0.022);
        gl_FragColor = vec4(uColor * 2.2 * min(I, 1.5) * uPower * 0.55, 1.0);
      }
    `,
  });
  const miniSigil = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.24), sigilMat);
  miniSigil.position.set(0.002, 0.195, -0.02);
  rig.add(miniSigil);

  // Base first-person placement (lower right of screen, angled naturally forward)
  let swayX = 0, swayY = 0, walkPhase = 0;

  return {
    scene: handScene,
    camera: handCam,
    resize(aspect) {
      handCam.aspect = aspect;
      handCam.updateProjectionMatrix();
    },
    setSpell(hex, sides = 6) {
      own.uGlow.value.set(hex);
      sigilMat.uniforms.uSides.value = sides;
    },
    update(dt, now, { speed = 0, recoil = 0, charge = 0, turnDx = 0, turnDy = 0 }) {
      own.uTime.value = now;
      own.uPower.value = 1.0 + charge * 0.8 + recoil * 0.7;

      swayX += (THREE.MathUtils.clamp(-turnDx * 1.4, -0.08, 0.08) - swayX) * Math.min(1, dt * 10);
      swayY += (THREE.MathUtils.clamp(-turnDy * 1.1, -0.06, 0.06) - swayY) * Math.min(1, dt * 10);
      walkPhase += dt * (2.2 + Math.min(speed, 12) * 0.75);

      const bobX = Math.cos(walkPhase) * Math.min(speed * 0.002, 0.016);
      const bobY = Math.abs(Math.sin(walkPhase)) * Math.min(speed * 0.0022, 0.018);

      rig.position.set(
        0.34 + swayX + bobX,
        -0.31 + swayY - bobY + charge * 0.03 - recoil * 0.03,
        -0.62 - recoil * 0.09
      );
      rig.rotation.set(
        0.16 - recoil * 0.34 - charge * 0.12 + swayY * 1.2,
        -0.24 + swayX * 1.5,
        0.11 - swayX * 1.2
      );

      crystal.position.y = 0.195 + Math.sin(now * 2.8) * 0.006;
      crystal.rotation.y = now * 1.8;
      crystal.rotation.x = Math.sin(now * 1.2) * 0.2;
      miniSigil.rotation.z = -now * 0.6;
    },
  };
}
