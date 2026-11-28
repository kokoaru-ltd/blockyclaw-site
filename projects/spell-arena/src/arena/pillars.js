import * as THREE from 'three';

/**
 * Destructible, Sliceable & Gravity-Interactive Arena Pillars!
 * Uses small-magic's shader-clipping trick (aClip + !gl_FrontFacing cap + hot glowing cut face)
 * paired with fast pure-JS rigid-body physics so it runs at 60fps in WebGL2 without WebGPU!
 */
export function createArenaPillars(scene, sunDir) {
  const MAX_BLOCKS = 72;
  const MAX_HALVES = 96;
  const TOTAL = MAX_BLOCKS + MAX_HALVES;

  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const aTint = new Float32Array(TOTAL * 3);
  const aClip = new Float32Array(TOTAL * 4); // local clip plane (nx, ny, nz, w)
  const aCut = new Float32Array(TOTAL * 4);  // local cut normal + cut timestamp

  boxGeo.setAttribute('aTint', new THREE.InstancedBufferAttribute(aTint, 3));
  boxGeo.setAttribute('aClip', new THREE.InstancedBufferAttribute(aClip, 4));
  boxGeo.setAttribute('aCut', new THREE.InstancedBufferAttribute(aCut, 4));

  const uniforms = {
    uTime: { value: 0 },
    uSunDir: { value: sunDir.clone() },
    uCutColor: { value: new THREE.Color('#ffaa38') },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `
      attribute vec3 aTint;
      attribute vec4 aClip;
      attribute vec4 aCut;
      varying vec3 vLocal;
      varying vec3 vWorld;
      varying vec3 vNw;
      varying vec3 vNl;
      flat varying vec3 vTint;
      flat varying vec4 vClip;
      flat varying vec3 vClipN;
      flat varying vec4 vCut;
      flat varying vec3 vHalf;
      void main() {
        vec3 pScale = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
        vLocal = position * pScale;
        vHalf = pScale * 0.5;
        vNl = normal;
        vTint = aTint;
        vClip = aClip;
        vClipN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * (-aClip.xyz / max(pScale, vec3(0.01))) + vec3(0.0, 1e-4, 0.0));
        vNw = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * (normal / max(pScale, vec3(0.01))));
        vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }
    `,
    fragmentShader: /* glsl */ `
      precision highp float;
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uCutColor;
      varying vec3 vLocal;
      varying vec3 vWorld;
      varying vec3 vNw;
      varying vec3 vNl;
      flat varying vec3 vTint;
      flat varying vec4 vClip;
      flat varying vec3 vClipN;
      flat varying vec4 vCut;
      flat varying vec3 vHalf;

      float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y);
      }

      void main() {
        // Shader-clipped solid slicing (small-magic trick):
        // Discard half of the box; render backfaces seen through the opening as the flat cut cap!
        bool clipped = dot(vClip.xyz, vClip.xyz) > 0.5;
        if (clipped ? (dot(vClip.xyz, vLocal) < vClip.w) : !gl_FrontFacing) discard;
        bool isCap = clipped && !gl_FrontFacing;

        vec3 N = isCap ? normalize(vClipN) : normalize(vNw);
        vec3 pE = vHalf - abs(vLocal);
        float edge = max(min(pE.x, pE.y), min(max(pE.x, pE.y), pE.z));

        // Stylized carved warm limestone shading with painter's sky shadows & haze
        float grain = n2(vWorld.xz * 1.4 + vWorld.y * 0.9);
        vec3 alb = vTint * (0.86 + 0.26 * grain);
        if (!isCap) {
          alb *= 1.0 - 0.34 * (1.0 - smoothstep(0.0, 0.08, edge));
          float moss = smoothstep(0.55, 0.9, N.y) * smoothstep(0.4, 0.72, grain);
          alb = mix(alb, vec3(0.30, 0.56, 0.28), moss * 0.45);
        } else {
          alb = vTint * 1.16 * (0.9 + 0.2 * grain);
        }

        float sunL = smoothstep(-0.1, 0.62, dot(N, normalize(uSunDir)));
        vec3 col = alb * (vec3(1.22, 1.08, 0.9) * sunL + vec3(0.46, 0.56, 0.86) * (0.55 + 0.45 * (N.y * 0.5 + 0.5)));

        // Glowing hot cut face cooling down over ~2 seconds
        if (vCut.w > 0.0) {
          float cool = exp(-max(uTime - vCut.w, 0.0) / 1.8);
          float glowMask = isCap ? 1.0 : smoothstep(0.0, 0.12, 0.12 - abs(dot(vClip.xyz, vLocal) - vClip.w));
          col += mix(uCutColor * 2.6, vec3(3.6, 3.2, 2.4), isCap ? 0.55 : 0.85) * glowMask * cool;
        }

        // Atmospheric blue-gold distance haze
        float dCam = length(vWorld - cameraPosition);
        float fog = (1.0 - exp(-dCam * 0.0052)) * 0.9;
        col = mix(col, vec3(0.62, 0.74, 0.94), fog);

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });

  const mesh = new THREE.InstancedMesh(boxGeo, material, TOTAL);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(mesh);

  const blocks = [];
  const dummyM = new THREE.Matrix4();
  const tmpP = new THREE.Vector3();
  const tmpQ = new THREE.Quaternion();
  const tmpS = new THREE.Vector3();
  const tmpInvQ = new THREE.Quaternion();
  const tmpV = new THREE.Vector3();
  const tmpN = new THREE.Vector3();
  let halfCount = 0;

  function buildLayout() {
    blocks.length = 0;
    halfCount = 0;
    aClip.fill(0);
    aCut.fill(0);

    const addBlock = (x, y, z, sx, sy, sz, tintHex, pillarId) => {
      if (blocks.length >= MAX_BLOCKS) return;
      const idx = blocks.length;
      const c = new THREE.Color(tintHex);
      aTint.set([c.r, c.g, c.b], idx * 3);
      blocks.push({
        idx,
        pillarId,
        pos: new THREE.Vector3(x, y, z),
        vel: new THREE.Vector3(),
        quat: new THREE.Quaternion(),
        angVel: new THREE.Vector3(),
        size: new THREE.Vector3(sx, sy, sz),
        dynamic: false,
        sliced: false,
        hangTimer: 0,
        pendingSlide: new THREE.Vector3(),
        gravControlled: false,
        halfRadius: Math.hypot(sx, sy, sz) * 0.42,
      });
    };

    // Inner ring: 6 tall carved obelisk pillars at r = 13.5
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
      const px = Math.cos(a) * 13.5;
      const pz = Math.sin(a) * 13.5;
      for (let tier = 0; tier < 4; tier++) {
        const w = tier === 0 ? 1.85 : tier === 3 ? 1.7 : 1.48;
        const h = 1.65;
        const shade = tier % 2 === 0 ? '#c4b8a0' : '#d4cab4';
        addBlock(px, h * 0.5 + tier * h, pz, w, h, w, shade, i);
      }
    }

    // Mid-outer cover walls: 6 low ruined stone walls at r = 20.5
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const px = Math.cos(a) * 20.5;
      const pz = Math.sin(a) * 20.5;
      const tx = -Math.sin(a), tz = Math.cos(a);
      for (let side = -1; side <= 1; side += 2) {
        for (let tier = 0; tier < 2; tier++) {
          const bx = px + tx * side * 1.15;
          const bz = pz + tz * side * 1.15;
          addBlock(bx, 0.8 + tier * 1.55, bz, 1.9, 1.52, 1.25, tier === 0 ? '#b7aa92' : '#ccc0a8', 10 + i);
          const b = blocks[blocks.length - 1];
          b.quat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -a + Math.PI / 2);
        }
      }
    }

    // Center accent low plinths? Keep center clear for epic duels!
    boxGeo.attributes.aTint.needsUpdate = true;
    boxGeo.attributes.aClip.needsUpdate = true;
    boxGeo.attributes.aCut.needsUpdate = true;
    syncMatrices();
  }

  function wakePillarAbove(pillarId, minY) {
    for (const b of blocks) {
      if (b.pillarId === pillarId && b.pos.y >= minY - 0.1) {
        b.dynamic = true;
      }
    }
  }

  function syncMatrices() {
    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i];
      dummyM.compose(b.pos, b.quat, b.size);
      mesh.setMatrixAt(i, dummyM);
    }
    mesh.count = blocks.length;
    mesh.instanceMatrix.needsUpdate = true;
  }

  buildLayout();

  return {
    blocks,
    reset: buildLayout,

    /**
     * Slices all blocks intersected by the 3D Cleave plane!
     * Creates a shader-clipped twin block for each sliced piece with glowing molten cut faces.
     */
    slicePlane({ eye, n, e1, e2, theta, reach, slide, now, cutColorHex = '#ffaa38' }) {
      uniforms.uCutColor.value.set(cutColorHex);
      const d0 = n.dot(eye);
      let cutCount = 0;
      const existingLen = blocks.length;

      for (let i = 0; i < existingLen; i++) {
        const b = blocks[i];
        const rel = tmpV.copy(b.pos).sub(eye);
        const far = rel.length();
        if (far > reach) continue;
        const a = Math.atan2(rel.dot(e2), rel.dot(e1));
        if (a < -0.14 || a > theta + 0.14) continue;

        const sd = n.dot(b.pos) - d0;
        // Transform plane normal to block's local frame
        tmpInvQ.copy(b.quat).invert();
        tmpN.copy(n).applyQuaternion(tmpInvQ).normalize();
        const reachLocal = (Math.abs(tmpN.x) * b.size.x + Math.abs(tmpN.y) * b.size.y + Math.abs(tmpN.z) * b.size.z) * 0.5;

        // If plane cleanly intersects this block & it hasn't been sliced yet
        if (!b.sliced && Math.abs(sd) < reachLocal - 0.08 && blocks.length < TOTAL) {
          b.sliced = true;
          b.dynamic = true;
          wakePillarAbove(b.pillarId, b.pos.y);

          // Spawn twin block for the upper half!
          const g = blocks.length;
          const twin = {
            idx: g,
            pillarId: -1,
            pos: b.pos.clone(),
            vel: b.vel.clone(),
            quat: b.quat.clone(),
            angVel: new THREE.Vector3((Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.4),
            size: b.size.clone(),
            dynamic: true,
            sliced: true,
            hangTimer: 0.45,
            pendingSlide: slide.clone().multiplyScalar(5.5 + Math.random() * 2.5).addScaledVector(n, 2.2),
            gravControlled: false,
            halfRadius: b.halfRadius * 0.72,
          };
          blocks.push(twin);
          halfCount++;

          // Original keeps lower side (dot(tmpN, vLocal) < -sd => dot(-tmpN, vLocal) >= sd)
          // Twin keeps upper side (dot(tmpN, vLocal) >= -sd)
          aClip.set([-tmpN.x, -tmpN.y, -tmpN.z, sd], i * 4);
          aCut.set([-tmpN.x, -tmpN.y, -tmpN.z, now], i * 4);

          aClip.set([tmpN.x, tmpN.y, tmpN.z, -sd], g * 4);
          aCut.set([tmpN.x, tmpN.y, tmpN.z, now], g * 4);
          aTint.set([aTint[i * 3], aTint[i * 3 + 1], aTint[i * 3 + 2]], g * 3);

          // Slight lift on twin so the glowing cut gap opens visually right away
          twin.pos.addScaledVector(n, 0.22);
          b.vel.addScaledVector(slide, -1.2);
          cutCount++;
        } else if (sd > 0 && sd < 6.0) {
          // Blocks standing above the slice line slide off together!
          b.dynamic = true;
          b.hangTimer = 0.45;
          b.pendingSlide.copy(slide).multiplyScalar(5.0 + Math.random() * 2.0).addScaledVector(n, 2.0);
          b.angVel.set((Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.0, (Math.random() - 0.5) * 1.5);
          cutCount++;
        }
      }

      if (cutCount > 0) {
        boxGeo.attributes.aTint.needsUpdate = true;
        boxGeo.attributes.aClip.needsUpdate = true;
        boxGeo.attributes.aCut.needsUpdate = true;
      }
      return cutCount;
    },

    applyBlast(center, radius, power = 16) {
      for (const b of blocks) {
        const d = b.pos.distanceTo(center);
        if (d > radius) continue;
        b.dynamic = true;
        wakePillarAbove(b.pillarId, b.pos.y);
        const fall = 1 - d / radius;
        const dir = tmpV.copy(b.pos).sub(center);
        if (dir.lengthSq() < 0.01) dir.set(Math.random() - 0.5, 1, Math.random() - 0.5);
        dir.normalize();
        b.vel.addScaledVector(dir, power * (0.45 + 0.75 * fall));
        b.vel.y += power * 0.42 * fall;
        b.angVel.set((Math.random() - 0.5) * 5 * fall, (Math.random() - 0.5) * 5 * fall, (Math.random() - 0.5) * 5 * fall);
      }
    },

    applyGravityField(center, radius, mode, dt, power = 26) {
      for (const b of blocks) {
        const dx = center.x - b.pos.x;
        const dy = center.y - b.pos.y;
        const dz = center.z - b.pos.z;
        const d = Math.hypot(dx, dy, dz) + 0.001;
        if (d > radius) continue;
        b.dynamic = true;
        b.gravControlled = true;
        wakePillarAbove(b.pillarId, b.pos.y);
        const fall = 1 - d / radius;

        if (mode === 'lift') {
          // Zero-G telekinetic lift + gentle orbit
          const targetY = 3.8 + (b.idx % 5) * 1.15;
          const pullUp = (targetY - b.pos.y) * 5.2;
          b.vel.y += (pullUp - b.vel.y * 2.2) * dt;
          const rx = -dz / d, rz = dx / d;
          b.vel.x += (rx * 4.5 + (dx / d) * 1.4 - b.vel.x * 1.4) * dt * (0.4 + 0.6 * fall);
          b.vel.z += (rz * 4.5 + (dz / d) * 1.4 - b.vel.z * 1.4) * dt * (0.4 + 0.6 * fall);
          b.angVel.set(0.7, 1.1, 0.5);
        } else if (mode === 'blackhole') {
          const rx = -dz / d, rz = dx / d;
          const g = power * (0.4 + 0.8 * fall) * dt;
          b.vel.x += ((dx / d) * g * 1.15 + rx * g * 0.95);
          b.vel.y += ((dy / d) * g * 1.15);
          b.vel.z += ((dz / d) * g * 1.15 + rz * g * 0.95);
          b.vel.multiplyScalar(Math.exp(-1.2 * dt));
          b.angVel.set(2.2, 2.8, 1.7);
        } else if (mode === 'vortex') {
          const rx = -dz / d, rz = dx / d;
          const g = power * (0.45 + 0.75 * fall) * dt;
          b.vel.x += (rx * g * 1.35 + (dx / d) * g * 0.5);
          b.vel.y += (12 * fall - b.vel.y * 1.1) * dt;
          b.vel.z += (rz * g * 1.35 + (dz / d) * g * 0.5);
          b.angVel.set(2.5, 3.8, 2.1);
        } else if (mode === 'slam') {
          // Instant crush downward!
          b.vel.y = Math.min(b.vel.y - power * 1.5, -26);
          b.vel.x *= 0.6;
          b.vel.z *= 0.6;
        }
      }
    },

    /** Resolve character cylinder collision against non-flying standing blocks */
    collideCircle(pos, radius, height = 2.0) {
      for (const b of blocks) {
        if (b.dynamic && b.pos.y > 2.2) continue;
        const halfY = b.size.y * 0.5;
        if (pos.y + height < b.pos.y - halfY || pos.y > b.pos.y + halfY) continue;
        const dx = pos.x - b.pos.x;
        const dz = pos.z - b.pos.z;
        const minR = radius + Math.max(b.size.x, b.size.z) * 0.48;
        const distSq = dx * dx + dz * dz;
        if (distSq < minR * minR && distSq > 1e-6) {
          const dist = Math.sqrt(distSq);
          const push = minR - dist;
          pos.x += (dx / dist) * push;
          pos.z += (dz / dist) * push;
        }
      }
    },

    /** Ray-vs-blocks approximation for beam/projectile hits */
    raycast(origin, dir, maxDist = 70) {
      let best = maxDist;
      let hitBlock = null;
      for (const b of blocks) {
        const oc = tmpV.copy(b.pos).sub(origin);
        const t = oc.dot(dir);
        if (t < 0 || t > best) continue;
        const dSq = oc.lengthSq() - t * t;
        const r = b.halfRadius;
        if (dSq < r * r) {
          best = t;
          hitBlock = b;
        }
      }
      return hitBlock ? { dist: best, block: hitBlock, point: origin.clone().addScaledVector(dir, best) } : null;
    },

    update(dt, now) {
      uniforms.uTime.value = now;
      for (let i = 0; i < blocks.length; i++) {
        const b = blocks[i];
        if (!b.dynamic) {
          b.gravControlled = false;
          continue;
        }
        if (b.hangTimer > 0) {
          b.hangTimer -= dt;
          if (b.hangTimer <= 0) {
            b.vel.add(b.pendingSlide);
            b.pendingSlide.set(0, 0, 0);
          } else {
            // Subtle slow float while hanging right after Cleave
            b.pos.addScaledVector(b.pendingSlide, dt * 0.08);
            continue;
          }
        }

        if (!b.gravControlled) {
          b.vel.y -= 24 * dt;
        }
        b.gravControlled = false;

        b.pos.addScaledVector(b.vel, dt);
        const spinLen = b.angVel.length();
        if (spinLen > 0.001) {
          tmpQ.setFromAxisAngle(tmpV.copy(b.angVel).divideScalar(spinLen), spinLen * dt);
          b.quat.premultiply(tmpQ).normalize();
        }

        // Floor bounce & friction
        const floorY = b.size.y * 0.45;
        if (b.pos.y < floorY) {
          b.pos.y = floorY;
          if (b.vel.y < -2.2) {
            b.vel.y *= -0.28;
          } else {
            b.vel.y = 0;
          }
          b.vel.x *= Math.exp(-5.5 * dt);
          b.vel.z *= Math.exp(-5.5 * dt);
          b.angVel.multiplyScalar(Math.exp(-5.0 * dt));
        }

        // Keep inside outer colosseum rim
        const rXZ = Math.hypot(b.pos.x, b.pos.z);
        if (rXZ > 26.8) {
          const s = 26.8 / rXZ;
          b.pos.x *= s;
          b.pos.z *= s;
          b.vel.x *= -0.4;
          b.vel.z *= -0.4;
        }
      }
      syncMatrices();
    },
  };
}
