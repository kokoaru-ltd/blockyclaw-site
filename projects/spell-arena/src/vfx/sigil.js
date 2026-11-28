import * as THREE from 'three';

/**
 * Generates an 8x4 procedural rune glyph atlas on an offscreen canvas.
 * Sharp angular strokes inspired by arcane sigils — zero external images needed.
 */
export function createRuneAtlas() {
  const cols = 8, rows = 4, cell = 64;
  const canvas = document.createElement('canvas');
  canvas.width = cols * cell;
  canvas.height = rows * cell;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#fff';
  ctx.fillStyle = '#fff';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const rng = (seed) => {
    let s = seed >>> 0;
    return () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  };

  for (let id = 0; id < 32; id++) {
    const cx = (id % cols) * cell + cell * 0.5;
    const cy = Math.floor(id / cols) * cell + cell * 0.5;
    const r = cell * 0.34;
    const rand = rng(1337 + id * 97);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.lineWidth = 4.2;

    // Vertical spine or diamond frame
    const style = id % 4;
    ctx.beginPath();
    if (style === 0) {
      ctx.moveTo(0, -r);
      ctx.lineTo(0, r);
    } else if (style === 1) {
      ctx.moveTo(-r * 0.45, -r);
      ctx.lineTo(-r * 0.45, r);
      ctx.moveTo(r * 0.45, -r * 0.7);
      ctx.lineTo(r * 0.45, r * 0.7);
    } else if (style === 2) {
      ctx.moveTo(0, -r);
      ctx.lineTo(r * 0.6, 0);
      ctx.lineTo(0, r);
      ctx.lineTo(-r * 0.6, 0);
      ctx.closePath();
    } else {
      ctx.moveTo(-r * 0.55, -r * 0.85);
      ctx.lineTo(r * 0.55, r * 0.85);
      ctx.moveTo(r * 0.55, -r * 0.85);
      ctx.lineTo(-r * 0.55, r * 0.85);
    }

    // Add 2-4 crisp runic branches
    const branches = 2 + Math.floor(rand() * 3);
    for (let b = 0; b < branches; b++) {
      const y0 = (rand() - 0.5) * r * 1.4;
      const side = rand() < 0.5 ? -1 : 1;
      const x1 = side * (0.35 + 0.55 * rand()) * r;
      const y1 = y0 + (rand() - 0.5) * r * 1.1;
      ctx.moveTo(0, y0);
      ctx.lineTo(x1, y1);
      if (rand() > 0.55) {
        ctx.lineTo(x1 * 0.5, y1 + (rand() - 0.5) * r * 0.6);
      }
    }
    ctx.stroke();

    // Accent dot or small ring
    if (rand() > 0.45) {
      ctx.beginPath();
      ctx.arc((rand() - 0.5) * r * 0.9, (rand() - 0.5) * r * 0.9, 3.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

/**
 * Polar-coordinate SDF Magic Circle shader chunk.
 * Works in both GLSL1 (texture2D) and GLSL3 (texture) via SAMPLE_RUNE macro.
 */
export function buildSigilGlsl(glsl3 = false) {
  const sampleFn = glsl3 ? 'texture' : 'texture2D';
  return /* glsl */ `
float sgGlyph(float id, vec2 uv) {
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  float g = mod(floor(id), 32.0);
  return ${sampleFn}(tRunes, (vec2(mod(g, 8.0), 3.0 - floor(g / 8.0)) + uv) / vec2(8.0, 4.0)).r;
}
float sgLine(float d, float w, float px) {
  float ww = max(w, px * 0.75);
  return (1.0 - smoothstep(ww - px * 0.75, ww + px * 0.75, d)) * min(1.0, w / ww);
}
float sgBand(vec2 c, float r, float turn, float px, float rim) {
  float a = atan(c.y, c.x);
  float I = sgLine(abs(r - 0.972), rim, px) + sgLine(abs(r - 0.90), 0.006, px);
  float ta = (a + turn * 0.3) / 6.2832 * 96.0;
  I += sgLine(abs(fract(ta) - 0.5) / 96.0 * 6.2832 * r, 0.004, px)
     * step(0.908, r) * step(r, 0.927 + 0.022 * step(mod(floor(ta), 8.0), 0.5));
  float k1 = (a + turn) / 6.2832 * 22.0;
  I += sgGlyph(floor(k1) * 5.0 + 3.0, vec2(fract(k1) * 1.16 - 0.08, (r - 0.757) / 0.13));
  I += sgLine(abs(r - 0.742), 0.006, px);
  I += sgLine(abs(r - 0.705), 0.005, px) * step(0.36, fract((a - turn * 0.6) / 6.2832 * 30.0));
  return I;
}
float sigil(vec2 c, float sides, float turn, float written, float px) {
  float r = length(c);
  if (r > 1.0 || written <= 0.0) return 0.0;
  float a = atan(c.y, c.x), seg = 6.2832 / max(sides, 2.0), I = 0.0;
  I += sgLine(abs(r - 0.972), 0.02, px) + sgLine(abs(r - 0.90), 0.006, px);
  float ta = (a + turn * 0.3) / 6.2832 * 96.0;
  I += sgLine(abs(fract(ta) - 0.5) / 96.0 * 6.2832 * r, 0.004, px)
     * step(0.908, r) * step(r, 0.927 + 0.022 * step(mod(floor(ta), 8.0), 0.5));
  float k1 = (a + turn) / 6.2832 * 22.0;
  I += sgGlyph(floor(k1) * 5.0 + 3.0, vec2(fract(k1) * 1.16 - 0.08, (r - 0.757) / 0.13));
  I += sgLine(abs(r - 0.742), 0.006, px);
  I += sgLine(abs(r - 0.705), 0.005, px) * step(0.36, fract((a - turn * 0.6) / 6.2832 * 30.0));
  float a2 = a - turn * 0.7;
  float f = floor(a2 / seg + 0.5), al = a2 - f * seg;
  float am = a2 + seg * 0.5; am -= floor(am / seg + 0.5) * seg;
  float dR = length(r * vec2(cos(al), sin(al)) - vec2(0.66, 0.0));
  float clear = smoothstep(0.088, 0.1, dR) * step(r, 0.672);
  I += sgLine(abs(r * cos(am) - 0.66 * cos(seg * 0.5)), 0.006, px) * clear;
  float star = 9.0, rose = 9.0;
  for (int j = -1; j <= 1; j++) {
    float aj = al + float(j) * seg;
    vec2 p = r * vec2(cos(aj), sin(aj));
    if (sides > 3.5) star = min(star, abs(p.x - 0.66 * cos(seg)) + step(seg, abs(aj)) * 9.0);
    rose = min(rose, abs(length(p - vec2(0.33, 0.0)) - 0.33));
  }
  if (sides < 3.5) star = abs(r * cos(al) - 0.66 * cos(seg * 0.5));
  I += sgLine(star, 0.005, px) * clear * 0.9 + sgLine(rose, 0.004, px) * clear * step(0.37, r) * 0.55;
  vec2 q = r * vec2(cos(al), sin(al)) - vec2(0.66, 0.0);
  I += sgLine(abs(dR - 0.088), 0.006, px) + sgGlyph(f * 7.0 + 11.0, vec2(q.y, q.x) / 0.125 + 0.5) * step(dR, 0.08);
  I += sgLine(abs(r - 0.36), 0.007, px) + sgLine(abs(r - 0.335), 0.004, px) + sgLine(abs(r - 0.225), 0.005, px);
  float k2 = (a - turn * 1.3) / 6.2832 * 12.0;
  I += sgGlyph(floor(k2) * 3.0 + 17.0, vec2(fract(k2) * 1.2 - 0.1, (r - 0.238) / 0.088));
  float a3 = a + turn * 1.1 + seg * 0.5; a3 -= floor(a3 / seg + 0.5) * seg;
  I += sgLine(abs(r * cos(a3) - 0.2 * cos(seg * 0.5)), 0.005, px) * step(r, 0.205);
  I += (1.0 - smoothstep(0.035, 0.05, r)) * 1.5 + sgLine(abs(r - 0.085), 0.004, px);
  float zone = r > 0.89 ? 0.0 : r > 0.69 ? 1.0 : r > 0.345 ? 2.0 : 3.0;
  float pz = clamp(written * 4.6 - zone, 0.0, 1.0);
  float af = fract(a / 6.2832 + 0.27 * zone + 0.5);
  return I * (step(af, pz) + (1.0 - step(1.0, pz)) * step(0.001, pz) * exp(-(af - pz) * (af - pz) * 1600.0) * 2.5);
}
`;
}

/**
 * Pool of 3D additive procedural magic circles (for ground seals, sky rings, spellcasting).
 */
export function createSigilPool(scene, runeTex, count = 24) {
  const flat = new THREE.PlaneGeometry(2, 2).rotateX(-Math.PI / 2);
  const glsl = buildSigilGlsl(false);
  const items = [];

  for (let i = 0; i < count; i++) {
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      uniforms: {
        tRunes: { value: runeTex },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#ffaa33') },
        uOpacity: { value: 0 },
        uSides: { value: 6 },
        uTurn: { value: 0.6 },
        uWritten: { value: 0 },
        uWhite: { value: 0 },
        uInnerCut: { value: 0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vC;
        void main() {
          vC = uv * 2.0 - 1.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vC;
        uniform sampler2D tRunes;
        uniform float uTime, uOpacity, uSides, uTurn, uWritten, uWhite, uInnerCut;
        uniform vec3 uColor;
        ${glsl}
        void main() {
          float r = length(vC);
          if (r > 1.0 || r < uInnerCut) discard;
          float I = sigil(vC, uSides, uTime * uTurn, uWritten, max(length(fwidth(vC)), 0.005));
          vec3 hue = mix(uColor * 2.4, vec3(3.4, 3.1, 2.7), uWhite);
          vec3 col = hue * min(I, 1.6) + vec3(1.5, 1.35, 1.1) * max(I - 0.85, 0.0);
          col += hue * (0.14 * exp(-(r - 0.95) * (r - 0.95) * 320.0) + 0.04 * (1.0 - r)) * smoothstep(0.0, 0.35, uWritten);
          gl_FragColor = vec4(col * uOpacity, 1.0);
        }
      `,
    });
    const mesh = new THREE.Mesh(flat, mat);
    mesh.visible = false;
    mesh.frustumCulled = false;
    mesh.renderOrder = 10;
    scene.add(mesh);
    items.push({ mesh, mat, active: false, age: 0, life: 1, fadeIn: 0.25, fadeOut: 0.35, scale0: 1, scale1: 1, rise: 0 });
  }

  return {
    spawn({
      pos,
      color = '#ffaa33',
      sides = 6,
      radius = 3,
      endRadius = radius,
      life = 1.6,
      turn = 0.7,
      normal = null,
      innerCut = 0,
      rise = 0,
      white = 0,
    }) {
      const slot = items.find((x) => !x.active) || items[0];
      slot.active = true;
      slot.age = 0;
      slot.life = life;
      slot.scale0 = radius;
      slot.scale1 = endRadius;
      slot.rise = rise;
      slot.mesh.visible = true;
      slot.mesh.position.copy(pos);
      if (normal) {
        const up = new THREE.Vector3(0, 1, 0);
        const q = new THREE.Quaternion().setFromUnitVectors(up, normal.clone().normalize());
        slot.mesh.quaternion.copy(q);
      } else {
        slot.mesh.quaternion.identity();
      }
      slot.mesh.scale.setScalar(radius);
      slot.mat.uniforms.uColor.value.set(color);
      slot.mat.uniforms.uSides.value = sides;
      slot.mat.uniforms.uTurn.value = turn;
      slot.mat.uniforms.uInnerCut.value = innerCut;
      slot.mat.uniforms.uWhite.value = white;
      slot.mat.uniforms.uWritten.value = 0;
      slot.mat.uniforms.uOpacity.value = 1;
      return slot;
    },
    update(dt, now) {
      for (const s of items) {
        if (!s.active) continue;
        s.age += dt;
        const t = s.age / s.life;
        if (t >= 1) {
          s.active = false;
          s.mesh.visible = false;
          continue;
        }
        const written = Math.min(1, s.age / Math.min(0.45, s.life * 0.35));
        const fadeOut = 1 - THREE.MathUtils.smoothstep(t, 0.65, 1.0);
        const rad = THREE.MathUtils.lerp(s.scale0, s.scale1, THREE.MathUtils.smoothstep(t, 0, 1));
        s.mesh.scale.setScalar(rad);
        if (s.rise !== 0) s.mesh.position.y += s.rise * dt;
        s.mat.uniforms.uTime.value = now;
        s.mat.uniforms.uWritten.value = written;
        s.mat.uniforms.uOpacity.value = fadeOut;
      }
    },
    clear() {
      for (const s of items) {
        s.active = false;
        s.mesh.visible = false;
      }
    },
  };
}
