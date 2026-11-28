import * as THREE from 'three';
import { buildSigilGlsl } from './sigil.js';

const QUAD_VERT = /* glsl */ `
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

/**
 * Generalized single-pass HDR post-processing pipeline inspired by small-magic's page.js.
 * Supports:
 * - 30fps quantized impact frames (customizable dark/mid/highlight palettes, hatching, edge lines, burst rays, slivers)
 * - Screen-space slash split (depth-masked UV lift along drawn cleave line)
 * - 3D ray-plane intersected rune shockwave rings & dashed rings (depth-tested!)
 * - Expanding refractive glass shockwave dome with chromatic split & post-pass ripple
 * - Gravitational lensing (1/r^2 space bend + optional black event horizon + radial pull)
 * - Aim focus barrel distortion + edge mipmap blur + vignette
 * - Mipmap HDR bloom + stylized filmic tone mapping
 */
export function createPostProcess(renderer, runeTex) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const target = new THREE.WebGLRenderTarget(Math.max(1, size.x), Math.max(1, size.y), {
    samples: 4,
    type: THREE.HalfFloatType,
    depthBuffer: true,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    magFilter: THREE.LinearFilter,
  });
  target.depthTexture = new THREE.DepthTexture(Math.max(1, size.x), Math.max(1, size.y), THREE.UnsignedIntType);

  const sigilGlsl = buildSigilGlsl(true);

  const uniforms = {
    tDrawn: { value: target.texture },
    tDepth: { value: target.depthTexture },
    tRunes: { value: runeTex },
    uSize: { value: size.clone() },
    uNearFar: { value: new THREE.Vector2(0.15, 320) },

    // Screen-space slash & impact frames
    uCutLine: { value: new THREE.Vector4(0.15, 0.5, 0.85, 0.5) }, // a.xy, b.xy
    uCutFx: { value: new THREE.Vector4(0, 0, 0, 0) },             // x:mode(0..4), y:k, z:written, w:fringe
    uCutDraw: { value: new THREE.Vector4(0, 0, 1, 320) },         // x:focus, y:pulse, z:upSign, w:camFar
    uCutStep: { value: new THREE.Vector4(0, 0, 20, 0) },          // x:frame, y:circleMode(0..3), z:D, w:splitAmount
    uCutWorld: { value: new THREE.Vector4(0, 0, 0, 0) },          // xyz:worldCenter, w:ringAge(>0 active)
    uCutWorldN: { value: new THREE.Vector4(0, 1, 0, 0) },         // xyz:planeNormal, w:haze
    uCutMid: { value: new THREE.Vector3(0, 0, 1) },
    uCutDome: { value: new THREE.Vector2(0.5, 0.5) },
    uCutInvVP: { value: new THREE.Matrix4() },
    uCutCam: { value: new THREE.Vector3() },

    // Impact frame palette (customizable per spell!)
    uPalDark: { value: new THREE.Color('#0e0a1f') },
    uPalMid: { value: new THREE.Color('#4d3880') },
    uPalHi: { value: new THREE.Color('#f5d68f') },
    uPalLight: { value: new THREE.Color('#fff7e0') },

    // Shockwave ring distortion (screen-space)
    uShock: { value: new THREE.Vector4(0.5, 0.5, 0, 0) }, // xy:uv, z:radius, w:power

    // Gravity / Black Hole gravitational lens
    uHole: { value: new THREE.Vector4(0.5, 0.5, 0, 0) },  // xy:uv, z:lensRad, w:power
    uHoleB: { value: new THREE.Vector4(0, 0, 0, 0) },     // x:coreRad, y:ndcDepth, z:pullBlur, w:darkCore(0 or 1)
    uHoleC: { value: new THREE.Vector4(0.15, 320, 2, 15) }, // near, far, worldRad, viewDist
    uHoleCol: { value: new THREE.Color('#9955ff') },

    // Atmosphere & flashes
    uDoom: { value: 0 },
    uDoomCol: { value: new THREE.Color('#301440') },
    uInk: { value: 0 },      // 1 or -1 for B&W comic blast impact frame
    uWhite: { value: 0 },
    uTintFlash: { value: new THREE.Vector4(1, 0.45, 0.15, 0) }, // rgb, amount
    uDamage: { value: 0 },   // red vignette on player hit
  };

  const material = new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    depthTest: false,
    depthWrite: false,
    uniforms,
    vertexShader: QUAD_VERT,
    fragmentShader: /* glsl */ `
      precision highp float;
      uniform sampler2D tDrawn;
      uniform sampler2D tDepth;
      uniform sampler2D tRunes;
      uniform vec2 uSize;
      uniform vec2 uNearFar;

      uniform vec4 uCutLine;
      uniform vec4 uCutFx;
      uniform vec4 uCutDraw;
      uniform vec4 uCutStep;
      uniform vec4 uCutWorld;
      uniform vec4 uCutWorldN;
      uniform vec3 uCutMid;
      uniform vec2 uCutDome;
      uniform mat4 uCutInvVP;
      uniform vec3 uCutCam;

      uniform vec3 uPalDark;
      uniform vec3 uPalMid;
      uniform vec3 uPalHi;
      uniform vec3 uPalLight;

      uniform vec4 uShock;
      uniform vec4 uHole;
      uniform vec4 uHoleB;
      uniform vec4 uHoleC;
      uniform vec3 uHoleCol;

      uniform float uDoom;
      uniform vec3 uDoomCol;
      uniform float uInk;
      uniform float uWhite;
      uniform vec4 uTintFlash;
      uniform float uDamage;

      in vec2 vUv;
      layout(location = 0) out vec4 outC;

      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float vnoise(float x) {
        float i = floor(x), f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        return mix(hash(vec2(i, 1.7)), hash(vec2(i + 1.0, 1.7)), f);
      }

      ${sigilGlsl}

      float linearDepth(float d) {
        float n = uNearFar.x, f = uNearFar.y;
        return (n * f) / max(f - d * (f - n), 1e-4);
      }

      float cutR(vec2 uv, vec3 N, out vec3 P) {
        vec4 q = uCutInvVP * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
        vec3 dir = normalize(q.xyz / q.w - uCutCam);
        float dn = dot(dir, N);
        P = vec3(0.0);
        if (abs(dn) < 1e-5) return 1e4;
        float t = dot(uCutWorld.xyz - uCutCam, N) / dn;
        if (t <= 0.0) return 1e4;
        P = uCutCam + dir * t;
        return length(P - uCutWorld.xyz);
      }

      void main() {
        vec2 at = vUv;
        vec2 asp0 = vec2(uSize.x / max(uSize.y, 1.0), 1.0);

        // 1. Screen-space shockwave ring distortion
        vec2 sd = (vUv - uShock.xy) * asp0;
        float sl = length(sd), bend = 0.0;
        if (uShock.w > 0.0) {
          float so = (sl - uShock.z) / (0.024 + uShock.z * 0.085);
          bend = exp(-so * so) * uShock.w;
          at -= (sd / max(sl, 1e-4)) / asp0 * bend * 0.04;
        }

        // 2. Gravity Well / Black Hole gravitational lens (depth-tested)
        vec2 hd = (vUv - uHole.xy) * asp0;
        float hl = length(hd);
        float hdep = textureLod(tDepth, vUv, 0.0).r;
        float hback = uHole.w > 0.0 ? step(uHoleB.y, hdep) : 0.0;
        if (uHole.w > 0.0 && hl > max(uHoleB.x, 0.008)) {
          float fall = 1.0 - smoothstep(uHole.z * 1.4, uHole.z * 5.8, hl);
          float hz = linearDepth(hdep);
          float hw = smoothstep(uHoleC.w - 2.4 * uHoleC.z, uHoleC.w + 0.4 * uHoleC.z, hz);
          at = clamp(uHole.xy + hd * (1.0 - (uHole.z * uHole.z) / (hl * hl) * fall * uHole.w * hw) / asp0, vec2(0.002), vec2(0.998));
        }

        // 3. Slash line metrics on screen
        vec2 cA = uCutLine.xy;
        vec2 cAB = (uCutLine.zw - uCutLine.xy) * asp0;
        vec2 cP = (vUv - cA) * asp0;

        // 4. 3D Ray-Plane Rune Shockwave Rings & Expanding Refractive Glass Dome
        float cutGold = 0.0, cutBand = 0.0, cutWave = 0.0, cGap = 0.0, domeRim = 0.0, domeIn = 0.0, cutSplitK = 0.16;
        vec2 cutDisp = vec2(0.0);
        if (uCutWorld.w > 0.0) {
          float age = uCutWorld.w, ce = 0.003, Dd = max(uCutStep.z, 6.0);
          float cHold = 0.1, bu = max(age - cHold, 0.0), pop = 1.0 + 0.07 * min(age / cHold, 1.0);
          vec3 kN = normalize(uCutWorldN.xyz), kM = normalize(uCutMid);
          vec3 kA = normalize(cross(kN, kM) + vec3(0.0, 0.0001, 0.0));
          vec4 qf = uCutInvVP * vec4(0.0, 0.0, 1.0, 1.0);
          vec3 fwd = normalize(qf.xyz / qf.w - uCutCam);
          float sz = linearDepth(textureLod(tDepth, vUv, 0.0).r);

          // Expanding glass dome lens
          if (bu > 0.0001) {
            vec3 toC = uCutWorld.xyz - uCutCam;
            float dist = max(length(toC), 0.5);
            vec3 dC = toC / dist;
            vec4 q0 = uCutInvVP * vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
            vec3 dir = normalize(q0.xyz / q0.w - uCutCam);
            float Rs = Dd * (0.3 + 7.2 * bu);
            vec2 dv = (vUv - uCutDome) * asp0;
            float dl = max(length(dv), 1e-4);
            vec2 dn = dv / dl / asp0;
            if (Rs < dist) {
              float sa = Rs / dist;
              float ct = dot(dir, dC);
              float rho = ct > 0.0 ? sqrt(max(1.0 - ct * ct, 0.0)) / sa : 9.0;
              if (rho < 1.0) {
                float m0 = mix(0.6, 0.86, smoothstep(0.45, 1.0, sa));
                float m = m0 + (1.0 - m0) * rho * rho;
                float facet = (vnoise(atan(dv.y, dv.x) * 9.0 + 3.0) - 0.5) * 0.34 * rho * (1.0 - rho);
                float rim = smoothstep(0.76, 0.96, rho) * (1.0 - smoothstep(0.96, 1.0, rho));
                cutDisp = (vUv - uCutDome) * (1.0 - m) + dn * (facet * 0.11 - rim * 0.05);
                cutWave = 0.3 + 0.7 * rim;
                cutSplitK = 0.05 + 0.3 * rim;
                domeRim = smoothstep(0.93, 0.985, rho) * (1.0 - smoothstep(0.985, 1.0, rho)) * 0.55;
                domeIn = 1.0 - rho * rho;
              } else {
                cutDisp = -dn * 0.012 * exp(-(rho - 1.0) * 9.0);
              }
            } else {
              float tw = bu - max((dist / Dd - 0.3) / 7.2, 0.0);
              float k = exp(-tw * 14.0);
              if (k > 0.01) {
                cutDisp = dn * 0.022 * k * sin(dl * 24.0 - tw * 88.0);
                cutWave = k * (0.35 + 1.3 * smoothstep(0.15, 0.9, dl));
                cutSplitK = 0.1 + 0.5 * smoothstep(0.25, 0.9, dl);
              }
            }
            at -= cutDisp;
            at = 1.0 - abs(1.0 - abs(at));
          }

          // 3 rotating rune bands tilted around the cut plane
          for (int i = 0; i < 3; i++) {
            float fi = float(i);
            float tip = i == 0 ? 0.2 : i == 1 ? -0.13 : 0.06;
            vec3 Ni = normalize(kN * cos(tip) - kM * sin(tip));
            vec3 P0, P1, P2;
            float r0 = cutR(vUv, Ni, P0);
            float r1 = cutR(vUv + vec2(ce, 0.0), Ni, P1);
            float r2 = cutR(vUv + vec2(0.0, ce), Ni, P2);
            if (r0 > 1e3 || r1 > 1e3 || r2 > 1e3) continue;
            float Ri = Dd * ((0.52 - 0.12 * fi) * pop + (7.2 - 2.1 * fi) * bu);
            float rn = r0 / Ri;
            if (rn < 0.6 || rn > 1.03) continue;
            float gl = max(length(vec2(r1 - r0, r2 - r0)) / ce, 1e-4);
            float rz = dot(P0 - uCutCam, fwd);
            float seen = smoothstep(rz - 0.9, rz - 0.15, sz);
            vec3 rel = P0 - uCutWorld.xyz;
            vec2 cc = vec2(dot(rel, kA), dot(rel, cross(Ni, kA)));
            float fadeI = smoothstep(0.0, 0.012, age) * (1.0 - smoothstep(0.85, 2.3, Ri / Dd)) * (1.0 - smoothstep(0.2, 0.42, bu)) * seen;
            cutGold = max(cutGold, sgBand(cc / Ri, rn, (age * 5.0 + fi * 2.1) * (i == 1 ? -1.0 : 1.0), gl / (max(uSize.y, 1.0) * Ri), 0.009) * fadeI * 0.95);
            cutBand = max(cutBand, smoothstep(0.6, 0.7, rn) * (1.0 - smoothstep(0.99, 1.03, rn)) * fadeI * (i == 0 ? 0.92 : 0.68));
          }

          // 5 thin broken light rings trailing the shock
          for (int i = 0; i < 5; i++) {
            float fi = float(i);
            float h1 = hash(vec2(fi, 9.0)), h2 = hash(vec2(fi, 4.0));
            float tip = i == 0 ? 0.035 : i == 1 ? -0.06 : i == 2 ? 0.095 : i == 3 ? -0.028 : 0.15;
            vec3 Ni = normalize(kN * cos(tip) - kM * sin(tip));
            vec3 P0, P1, P2;
            float r0 = cutR(vUv, Ni, P0);
            float r1 = cutR(vUv + vec2(ce, 0.0), Ni, P1);
            float r2 = cutR(vUv + vec2(0.0, ce), Ni, P2);
            if (r0 > 1e3 || r1 > 1e3 || r2 > 1e3) continue;
            float gl = max(length(vec2(r1 - r0, r2 - r0)) / ce, 1e-4);
            float rz = dot(P0 - uCutCam, fwd);
            float seen = smoothstep(rz - 0.9, rz - 0.15, sz);
            vec3 rel = P0 - uCutWorld.xyz;
            float ang = atan(dot(rel, cross(Ni, kA)), dot(rel, kA));
            float Ri = Dd * ((0.2 + 0.085 * fi) * pop + (8.4 - 1.4 * fi) * (0.85 + 0.3 * h1) * bu);
            float px = abs(r0 - Ri) / gl;
            float wpx = (0.001 + 0.0018 * h2) * (0.5 + 1.0 * vnoise(ang * (3.0 + fi) + fi * 13.0));
            float gate = smoothstep(0.3, 0.5, vnoise(ang * (1.3 + 0.45 * fi) + fi * 7.3 + age * 2.0));
            float fadeI = smoothstep(0.0, 0.012, age) * (1.0 - smoothstep(1.5, 3.4, Ri / Dd)) * (1.0 - smoothstep(0.2, 0.44, bu)) * seen;
            cutGold = max(cutGold, exp(-(px * px) / (wpx * wpx)) * gate * fadeI * 0.82);
          }
        }

        // 5. Aim focus barrel distortion
        float cFocus = uCutDraw.x;
        float cR = length((vUv - 0.5) * asp0);
        float cEdge = smoothstep(0.25, 0.92, cR);
        float cLens = cFocus * 0.28;
        if (abs(cLens) > 0.001) {
          vec2 lq = (at - 0.5) * asp0;
          float lr = dot(lq, lq);
          at = 0.5 + lq * (1.0 - cLens * lr) / (1.0 + cLens * 0.25) / asp0;
        }

        // 6. Screen-space cleave split (depth-masked!)
        if (uCutStep.w > 0.0) {
          vec2 ld = normalize(cAB + vec2(1e-5));
          vec2 ln = vec2(-ld.y, ld.x) * uCutDraw.z;
          float sdLine = dot(cP, ln);
          float hh = dot(cP, ld) / max(length(cAB), 1e-4);
          float win = 1.0 - smoothstep(0.0, 0.12, max(-hh, hh - 1.0));
          float zz = linearDepth(textureLod(tDepth, vUv, 0.0).r);
          float lift = 0.026 * uCutStep.w * win * smoothstep(2.0, 4.5, zz) * (1.0 - smoothstep(95.0, 120.0, zz));
          if (sdLine > 0.0 && lift > 0.0002) {
            at -= (ln * lift + ld * lift * 0.16) / asp0;
            cGap = 1.0 - smoothstep(lift * 0.65, lift, sdLine);
          }
        }

        // Beat-quantized jitter during dark impact frames
        if (uCutFx.x > 2.5 && uCutFx.x < 3.5) {
          float jf = floor(uCutStep.x);
          at += (vec2(hash(vec2(jf, 1.0)), hash(vec2(jf, 2.0))) - 0.5) * vec2(0.016, 0.012);
          at = 0.5 + (at - 0.5) * (1.0 - 0.03 * hash(vec2(jf, 3.0)));
        }

        at = clamp(at, vec2(0.002), vec2(0.998));
        float cLod = cEdge * cFocus * 2.2;
        vec3 c = textureLod(tDrawn, at, cLod).rgb;

        // Edge chromatic aberration during focus or fringe
        float cSplit = uCutFx.w + cFocus * cEdge * 2.5;
        if (cSplit > 0.0) {
          vec2 fo = (vUv - 0.5) * min(cSplit, 2.6) * 0.009;
          c.r = textureLod(tDrawn, clamp(at + fo, vec2(0.002), vec2(0.998)), cLod).r;
          c.b = textureLod(tDrawn, clamp(at - fo, vec2(0.002), vec2(0.998)), cLod).b;
        }
        if (cFocus > 0.0) {
          float cl = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = mix(c, vec3(cl), cEdge * cFocus * 0.35) * (1.0 - cFocus * 0.82 * pow(cEdge, 1.25));
          c *= 1.0 + 0.1 * cFocus * (1.0 - cEdge);
        }

        // Glass dome chromatic split & prismatic rainbow
        if (abs(cutWave) > 0.002) {
          c.r = textureLod(tDrawn, clamp(1.0 - abs(1.0 - abs(at - cutDisp * cutSplitK)), vec2(0.002), vec2(0.998)), 0.0).r;
          c.b = textureLod(tDrawn, clamp(1.0 - abs(1.0 - abs(at + cutDisp * cutSplitK)), vec2(0.002), vec2(0.998)), 0.0).b;
          c += (0.5 + 0.5 * cos(6.2832 * (cutWave * 1.6 + vec3(0.0, 0.33, 0.67)))) * abs(cutWave) * 0.08;
        }
        if (domeIn + domeRim > 0.0) {
          c = c * (1.0 + 0.1 * domeIn) + uPalLight * domeRim;
        }
        if (uCutWorldN.w > 0.0) {
          float hlum = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = mix(c, vec3(hlum) * 1.1 + uPalHi * 0.22, uCutWorldN.w * 0.28);
        }

        // Radial pull blur toward gravity hole
        if (uHoleB.z > 0.0) {
          vec2 to = (uHole.xy - at) * uHoleB.z;
          vec3 acc = c;
          float hj = hash(gl_FragCoord.xy + 3.0);
          for (int i = 0; i < 8; i++) {
            vec2 q = clamp(at + to * (float(i) + hj) * 0.12, vec2(0.002), vec2(0.998));
            acc += textureLod(tDrawn, q, 0.0).rgb;
          }
          c = acc / 9.0;
        }
        if (bend > 0.01) {
          c.r = textureLod(tDrawn, clamp(at - (sd / max(sl, 1e-4)) / asp0 * bend * 0.014, vec2(0.002), vec2(0.998)), 0.0).r;
        }

        // Mipmap HDR Bloom (fast, 1-pass!)
        vec3 glow = vec3(0.0);
        for (int i = 2; i <= 5; i++) {
          glow += max(textureLod(tDrawn, vUv, float(i)).rgb - 0.92, 0.0) * (i < 4 ? 0.16 : 0.24);
        }
        c += glow * 0.65;

        // Black hole event horizon + photon ring
        if (hback > 0.5 && uHoleB.w > 0.5) {
          float hpx = 1.6 / max(uSize.y, 1.0);
          float ho = (hl - uHoleB.x * 1.08) / (uHoleB.x * 0.045 + hpx);
          c *= smoothstep(uHoleB.x - hpx, uHoleB.x + hpx, hl);
          c += (vec3(3.2, 2.8, 2.4) * exp(-ho * ho) + uHoleCol * exp(-max(hl - uHoleB.x, 0.0) / max(uHoleB.x * 0.75, 0.01)) * 0.45 * step(uHoleB.x, hl)) * uHole.w;
        }

        // Doom / atmosphere tint during heavy spell charging
        if (uDoom > 0.001) {
          float dl = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = mix(c, dl * uDoomCol * 1.5 + c * 0.08, uDoom * (1.0 - smoothstep(1.4, 3.0, dl)));
        }

        // Colored blast flash
        if (uTintFlash.w > 0.001) {
          c = mix(c, c * uTintFlash.rgb * 0.7 + uTintFlash.rgb * 0.65, min(uTintFlash.w, 1.0) * 0.55);
        }

        // Filmic tone mapping + gamma
        c *= 1.04;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c *= (1.0 + l / 8.5) / (1.0 + l * 0.6);
        l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, 1.14);
        c = pow(clamp(c, 0.0, 1.0), vec3(1.0 / 2.2));
        c = mix(c, c * c * (3.0 - 2.0 * c), 0.18);

        // Blast / Gravity Slam B&W Ink Impact Frame
        if (uInk != 0.0) {
          float k = smoothstep(0.3, 0.36, dot(c, vec3(0.299, 0.587, 0.114)));
          float cell = floor(atan(sd.y, sd.x) * 44.0);
          float ray = step(0.73, hash(vec2(cell, 3.0))) * smoothstep(0.26, 0.4, sl - 0.28 * hash(vec2(cell, 9.0)));
          k = max(k, 1.0 - smoothstep(0.0, 0.006, sl - (uInk > 0.0 ? 0.08 : 0.14)));
          k = mix(k, 1.0 - k, ray);
          c = uInk > 0.0 ? mix(uPalDark, uPalLight, k) : mix(uPalLight, uPalDark, k);
        } else {
          c = mix(c, uPalLight, uWhite);
        }

        // Vignette
        c *= 1.0 - (0.28 + 0.25 * uDoom) * pow(length(vUv - 0.5) * 1.22, 3.0);

        // 3D Shockwave Rune Rings overlay (with dark backing band so they pop on bright scenes)
        if (cutBand > 0.0) c = mix(c, c * 0.42 + uPalDark * 0.5, min(cutBand * 0.72, 0.8));
        if (cutGold > 0.0) {
          c = mix(c, uPalHi, min(cutGold, 1.0));
          c += uPalLight * max(cutGold - 1.0, 0.0) * 0.55;
        }

        // 7. 30fps Cleave / Ultimate Impact Frame Modes (1: duo-tone, 2: inverted flash, 3: dark edges/hatch, 4: return)
        if (uCutFx.x > 0.5) {
          float mode = uCutFx.x, lum = dot(c, vec3(0.299, 0.587, 0.114)), ky = uCutFx.y, fs = uCutStep.x, fo = floor(uCutStep.x);
          vec2 px = 1.6 / max(uSize, vec2(1.0));
          float l1 = dot(textureLod(tDrawn, clamp(at + vec2(px.x, 0.0), vec2(0.002), vec2(0.998)), 0.0).rgb, vec3(0.3, 0.59, 0.11));
          float l2 = dot(textureLod(tDrawn, clamp(at - vec2(px.x, 0.0), vec2(0.002), vec2(0.998)), 0.0).rgb, vec3(0.3, 0.59, 0.11));
          float l3 = dot(textureLod(tDrawn, clamp(at + vec2(0.0, px.y), vec2(0.002), vec2(0.998)), 0.0).rgb, vec3(0.3, 0.59, 0.11));
          float l4 = dot(textureLod(tDrawn, clamp(at - vec2(0.0, px.y), vec2(0.002), vec2(0.998)), 0.0).rgb, vec3(0.3, 0.59, 0.11));
          float lines = smoothstep(0.28, 0.58, abs(l1 - l2) + abs(l3 - l4));

          vec2 ld = normalize(cAB + vec2(1e-5)), ln = vec2(-ld.y, ld.x);
          float sdLine = dot(cP, ln), hh = dot(cP, ld) / max(length(cAB), 1e-4);
          float win = 1.0 - smoothstep(0.0, 0.45, max(-hh, hh - 1.0));
          float core = (1.0 - smoothstep(0.0024, 0.0065, abs(sdLine))) * win;

          // Flying slivers of light off the slash line
          float sliver = 0.0;
          for (int i = 0; i < 20; i++) {
            float fi = float(i), re = mod(fi, 2.0) > 0.5 ? fo * 1.7 : 0.0;
            float h1 = hash(vec2(fi, 3.3 + re)), h2 = hash(vec2(fi, 8.1 + re)), sgn = h2 < 0.5 ? -1.0 : 1.0;
            vec2 pc = cAB * (0.04 + 0.92 * h1)
                    + ln * sgn * (0.006 + (0.02 + 0.2 * fract(h2 * 7.0) * fract(h2 * 7.0)) * ky)
                    + ld * (hash(vec2(fi, 12.7)) - 0.5) * 0.05 * ky;
            float tilt = (hash(vec2(fi, 5.5)) - 0.5) * 1.1 + sgn * 0.3 * ky + (hash(vec2(fi, fs)) - 0.5) * 0.25;
            vec2 dr = ld * cos(tilt) + ln * sin(tilt), q = cP - pc;
            float x = dot(q, dr), y = dot(q, vec2(-dr.y, dr.x));
            float len = 0.02 + 0.075 * hash(vec2(fi, 6.6)), wid = 0.002 + 0.0042 * hash(vec2(fi, 7.7));
            if (mod(fi, 5.0) > 3.5) {
              sliver = max(sliver, max(step(abs(x) / (len * 0.55) + abs(y) / (wid * 0.7), 1.0), step(abs(y) / (len * 0.55) + abs(x) / (wid * 0.7), 1.0)));
            } else {
              sliver = max(sliver, step(abs(x) / len + abs(y) / wid, 1.0));
            }
          }

          // Radial burst rays from slash midpoint
          vec2 bq = cP - cAB * 0.5;
          float br = length(bq), ba = atan(dot(bq, ln), dot(bq, ld));
          float bt = ba / 6.2832 * 120.0 + hash(vec2(fo, 7.0));
          float rid = floor(bt), rh = hash(vec2(rid, fo + 9.0));
          float rr = (0.04 + 0.62 * rh * rh) * (0.22 + 0.78 * abs(cos(ba))) * (0.75 + 0.45 * ky);
          float burst = step(0.004, br) * step(br, rr) * step(0.3, rh)
                      * step(abs(fract(bt) - 0.5) * 2.0, (0.25 + 0.6 * hash(vec2(rid, 3.0))) * (1.0 - br / rr));
          burst = max(burst, exp(-br / 0.016));

          if (mode < 1.5) {
            float tone = smoothstep(0.2, 0.26, lum) + smoothstep(0.55, 0.62, lum);
            c = tone < 1.0 ? mix(uPalDark, uPalMid, tone) : mix(uPalMid, uPalHi, tone - 1.0);
            c = mix(c, uPalDark * 0.7, lines * 0.45);
            float ray = 0.75 + 0.25 * step(0.5, hash(vec2(floor(hh * 70.0), 2.0 + fs)));
            c = mix(c, uPalLight, exp(-abs(sdLine) / ((0.012 + 0.07 * ky) * ray)) * win * 0.9);
            c = mix(c, vec3(1.0), core);
          } else if (mode < 2.5) {
            float after = step(0.6, ky), d0 = after > 0.5 ? 0.23 : 0.31, d1 = after > 0.5 ? 0.36 : 0.47;
            float fha = 0.9 + 1.4 * hash(vec2(fo, 6.0));
            float fhatch = step(0.5, fract((gl_FragCoord.x * cos(fha) + gl_FragCoord.y * sin(fha)) * (1080.0 / max(uSize.y, 1.0)) / 6.0));
            float shade = 1.0 - smoothstep(d0, d0 + 0.03, lum);
            float half_ = (1.0 - smoothstep(d1, d1 + 0.03, lum)) * fhatch;
            c = mix(uPalLight, uPalDark, max(shade, half_ * 0.85));
            c = mix(c, mix(uPalDark, uPalMid, 0.35), lines * (after > 0.5 ? 0.35 : 0.6) * (1.0 - shade));
            c = mix(c, uPalDark, max(max(sliver, core), after * burst * 0.9));
          } else if (mode < 3.5) {
            float odd = mod(fo, 2.0);
            float edges = smoothstep(0.14, 0.38, abs(l1 - l2) + abs(l3 - l4));
            c = mix(uPalDark * 0.45, uPalMid * (0.48 + 0.26 * hash(vec2(fo, 4.0))), smoothstep(0.1, 0.8, lum));
            if (odd < 0.5) {
              c = mix(c, uPalHi * 0.92, edges * 0.85);
            } else {
              float th = 0.35 + 0.2 * hash(vec2(fo, 5.0)), ha = 0.5 + 2.2 * hash(vec2(fo, 6.0));
              float hatch = step(0.4, fract((gl_FragCoord.x * cos(ha) + gl_FragCoord.y * sin(ha)) * (1080.0 / max(uSize.y, 1.0)) / 5.5));
              vec2 hu = vUv * asp0;
              vec2 hv = vec2(dot(hu, vec2(cos(ha), sin(ha))), dot(hu, vec2(-sin(ha), cos(ha))));
              float srow = floor(hv.y * 30.0 + fo * 2.7);
              float scol = floor(hv.x * 2.4 + hash(vec2(srow, fo)) * 7.0);
              float sx = fract(hv.x * 2.4 + hash(vec2(srow, fo)) * 7.0);
              float strip = step(0.68, hash(vec2(scol, srow) + fo)) * step(abs(fract(hv.y * 30.0 + fo * 2.7) - 0.5) * 2.0, 4.0 * sx * (1.0 - sx));
              c = mix(c, uPalHi * 0.9, smoothstep(th, th + 0.03, lum) * hatch * strip * 0.88);
              c = mix(c, uPalHi * 0.9, edges * 0.32);
            }
            c += uPalHi * exp(-abs(sdLine) / (0.018 + 0.03 * hash(vec2(fo, 8.0)))) * win * 0.38;
            c = mix(c, uPalLight, max(max(max(sliver, core), cGap), burst));
          } else {
            c = mix(uPalLight, mix(c, uPalHi, 0.35 * (1.0 - ky)), smoothstep(0.0, 1.0, ky));
            c = mix(c, uPalLight, cGap);
          }
        }

        // Screen-edge ritual circle during impact release
        if (uCutStep.y > 0.5) {
          vec2 qc = (vUv - 0.5) * asp0 / 0.47;
          float rn = length(qc);
          if (rn > 0.66 && rn < 1.03) {
            float written = uCutStep.y < 1.5 ? uCutFx.z : 1.0;
            float aa = fract(atan(qc.x, qc.y) / 6.2832);
            float I = sgBand(qc, rn, floor(uCutStep.x) * 0.26, (1.0 / max(uSize.y, 1.0)) / 0.47, 0.013) * step(aa, written);
            c = mix(c, uCutStep.y > 2.5 ? uPalDark : mix(uPalHi, uPalLight, 0.4), min(I, 1.0));
          }
        }

        // Player damage red edge pulse
        if (uDamage > 0.001) {
          float edge = smoothstep(0.35, 0.9, length((vUv - 0.5) * 1.4));
          c = mix(c, vec3(0.95, 0.12, 0.16), edge * uDamage * 0.65);
        }

        outC = vec4(c, 1.0);
      }
    `,
  });

  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  quad.frustumCulled = false;
  const stage = new THREE.Scene();
  stage.add(quad);
  const flatCam = new THREE.Camera();
  const tmpV = new THREE.Vector3();

  return {
    uniforms,
    setPalette(darkHex, midHex, hiHex, lightHex = '#fff8e8') {
      uniforms.uPalDark.value.set(darkHex);
      uniforms.uPalMid.value.set(midHex);
      uniforms.uPalHi.value.set(hiHex);
      uniforms.uPalLight.value.set(lightHex);
    },
    setShock(camera, worldPos, radius, power) {
      if (power <= 0.001) {
        uniforms.uShock.value.w = 0;
        return;
      }
      const d = Math.max(camera.position.distanceTo(worldPos), 1);
      tmpV.copy(worldPos).project(camera);
      if (tmpV.z > 1 || tmpV.z < -1) {
        uniforms.uShock.value.w = 0;
        return;
      }
      const k = 1 / (2 * Math.tan((camera.fov * Math.PI) / 360) * d);
      uniforms.uShock.value.set(tmpV.x * 0.5 + 0.5, tmpV.y * 0.5 + 0.5, radius * k, power);
    },
    setHole(camera, worldPos, radius, power, pullBlur = 0, darkCore = 1, colorHex = '#9955ff') {
      if (power <= 0.001) {
        uniforms.uHole.value.w = 0;
        uniforms.uHoleB.value.z = 0;
        return;
      }
      tmpV.copy(worldPos).project(camera);
      if (tmpV.z > 1 || tmpV.z < -1) {
        uniforms.uHole.value.w = 0;
        uniforms.uHoleB.value.z = 0;
        return;
      }
      const dist = Math.max(camera.position.distanceTo(worldPos), 1);
      const k = 1 / (2 * Math.tan((camera.fov * Math.PI) / 360) * dist);
      uniforms.uHole.value.set(tmpV.x * 0.5 + 0.5, tmpV.y * 0.5 + 0.5, radius * 1.55 * k, power);
      uniforms.uHoleB.value.set(radius * k, tmpV.z * 0.5 + 0.5, pullBlur, darkCore);
      const viewZ = -tmpV.copy(worldPos).applyMatrix4(camera.matrixWorldInverse).z;
      uniforms.uHoleC.value.set(camera.near, camera.far, radius, viewZ);
      uniforms.uHoleCol.value.set(colorHex);
    },
    setCleave(o, camera) {
      uniforms.uCutLine.value.set(o.a.x, o.a.y, o.b.x, o.b.y);
      uniforms.uCutFx.value.set(o.mode, o.k, o.written, o.fringe);
      uniforms.uCutDraw.value.set(o.focus, o.pulse ?? 0, o.up ?? 1, camera.far);
      uniforms.uCutWorld.value.set(o.C.x, o.C.y, o.C.z, o.age);
      uniforms.uCutWorldN.value.set(o.N.x, o.N.y, o.N.z, o.haze);
      uniforms.uCutMid.value.copy(o.M);
      uniforms.uCutStep.value.set(o.frame, o.circle, o.D ?? 18, o.split);
      if (o.age > 0) {
        tmpV.copy(o.C).project(camera);
        uniforms.uCutDome.value.set(tmpV.x * 0.5 + 0.5, tmpV.y * 0.5 + 0.5);
        uniforms.uCutInvVP.value.multiplyMatrices(camera.matrixWorld, camera.projectionMatrixInverse);
        uniforms.uCutCam.value.copy(camera.position);
      }
    },
    resize() {
      renderer.getDrawingBufferSize(size);
      target.setSize(Math.max(1, size.x), Math.max(1, size.y));
      uniforms.uSize.value.copy(size);
    },
    render(scene, camera, hand = null) {
      uniforms.uNearFar.value.set(camera.near, camera.far);
      renderer.setRenderTarget(target);
      renderer.setClearColor(0x0c1120, 1);
      renderer.clear();
      renderer.render(scene, camera);
      if (hand) {
        renderer.clearDepth();
        renderer.render(hand.scene, hand.camera);
      }
      renderer.setRenderTarget(null);
      renderer.render(stage, flatCam);
    },
  };
}
