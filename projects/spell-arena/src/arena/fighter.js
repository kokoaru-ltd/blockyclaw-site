import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { roll } from '../vfx/shape.js';

let cachedGltf = null;

/**
 * Loads Three.js's official rigged humanoid GLB (Xbot.glb) once via GLTFLoader.
 */
export async function loadCharacterRig(url = './models/Xbot.glb') {
  if (cachedGltf) return cachedGltf;
  const loader = new GLTFLoader();
  cachedGltf = await loader.loadAsync(url);
  return cachedGltf;
}

/**
 * Rigged 3D Humanoid Arcane Fighter powered by Three.js GLTFLoader + SkeletonUtils + AnimationMixer.
 * Plays blended skeletal idle/walk/run animations and holds an organic gnarled staff in mixamorig:RightHand.
 */
export function createFighter({
  scene,
  gltf,
  isPlayer = true,
  armorHex = '#2c4fa8',
  jointHex = '#68f0ff',
  accentHex = '#f0ca6c',
}) {
  const root = new THREE.Group();
  scene.add(root);

  const body = new THREE.Group();
  root.add(body);

  // Clone skinned hierarchy safely with SkeletonUtils
  const model = cloneSkeleton(gltf.scene);
  model.scale.setScalar(1.08);
  body.add(model);

  // Stylized Arcane Armored Battlemage materials (distinct plates vs glowing energy core joints)
  const armorMat = new THREE.MeshStandardMaterial({
    color: armorHex,
    roughness: 0.34,
    metalness: 0.62,
    emissive: '#000000',
    emissiveIntensity: 0,
  });

  const jointMat = new THREE.MeshStandardMaterial({
    color: '#14172a',
    roughness: 0.4,
    metalness: 0.45,
    emissive: jointHex,
    emissiveIntensity: 0.85,
  });

  const gemMat = new THREE.MeshStandardMaterial({
    color: accentHex,
    emissive: accentHex,
    emissiveIntensity: 2.8,
    roughness: 0.12,
    metalness: 0.2,
  });

  const woodMat = new THREE.MeshStandardMaterial({
    color: '#7c5332',
    roughness: 0.72,
    metalness: 0.1,
  });

  let rightHandBone = null;
  let rightArmBone = null;

  model.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
      const matName = (obj.material?.name || '').toLowerCase();
      if (matName.includes('joint') || obj.name.includes('Joints')) {
        obj.material = jointMat;
      } else {
        obj.material = armorMat;
      }
    }
    if (obj.isBone) {
      if (obj.name === 'mixamorig:RightHand' || /RightHand$/i.test(obj.name)) rightHandBone = obj;
      if (obj.name === 'mixamorig:RightArm' || /RightArm$/i.test(obj.name)) rightArmBone = obj;
    }
  });

  // Build carved wooden arcane staff & attach directly to mixamorig:RightHand bone!
  const staffGroup = new THREE.Group();
  const staffPts = [
    new THREE.Vector3(0, -1.05, 0),
    new THREE.Vector3(-0.02, -0.35, 0.02),
    new THREE.Vector3(0.02, 0.35, -0.02),
    new THREE.Vector3(0.07, 0.85, 0.03),
    new THREE.Vector3(0.12, 1.08, 0.02),
    new THREE.Vector3(0.01, 1.20, -0.01),
    new THREE.Vector3(-0.08, 1.08, 0.01),
  ];
  const staffGeo = roll(staffPts, (t) => 0.032 * (1 - 0.55 * Math.pow(t, 1.5)), { around: 10, every: 0.05 });
  const staffMesh = new THREE.Mesh(staffGeo, woodMat);
  staffMesh.castShadow = true;
  staffGroup.add(staffMesh);

  const staffGem = new THREE.Mesh(new THREE.OctahedronGeometry(0.10, 0), gemMat);
  staffGem.scale.set(0.8, 1.55, 0.8);
  staffGem.position.set(0.01, 1.02, 0.02);
  staffGroup.add(staffGem);

  if (rightHandBone) {
    // Mixamo bones inside Xbot.glb live in cm scale (Armature scale = 0.01), so rescale staff cleanly!
    model.updateMatrixWorld(true);
    const ws = new THREE.Vector3();
    rightHandBone.getWorldScale(ws);
    const invScale = 1 / Math.max(ws.x, 0.001);
    staffGroup.scale.setScalar(invScale);
    staffGroup.position.set(0, 0.08 * invScale, 0.04 * invScale);
    staffGroup.rotation.set(Math.PI * 0.48, 0, Math.PI * 0.08);
    rightHandBone.add(staffGroup);
  } else {
    staffGroup.position.set(-0.4, 1.2, 0.25);
    body.add(staffGroup);
  }

  // Skeletal AnimationMixer (idle / walk / run crossfade)
  const mixer = new THREE.AnimationMixer(model);
  const actions = {};
  for (const clip of gltf.animations) {
    const act = mixer.clipAction(clip);
    actions[clip.name.toLowerCase()] = act;
  }
  const idleAct = actions.idle;
  const walkAct = actions.walk;
  const runAct = actions.run;

  if (idleAct) { idleAct.play(); idleAct.setEffectiveWeight(1); }
  if (walkAct) { walkAct.play(); walkAct.setEffectiveWeight(0); }
  if (runAct) { runAct.play(); runAct.setEffectiveWeight(0); }

  // Translucent Arcane Ward Shield Dome
  const wardMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uColor: { value: new THREE.Color(jointHex) },
    },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main() {
        vL = position;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vN = normalize(mat3(modelMatrix) * normal);
        vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix * viewMatrix * w;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime, uOpacity; uniform vec3 uColor;
      varying vec3 vN, vV, vL;
      void main() {
        float fres = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
        float hex = smoothstep(0.85, 0.96, abs(sin(vL.y * 12.0 + uTime * 3.0)) * abs(cos(atan(vL.z, vL.x) * 6.0)));
        gl_FragColor = vec4(uColor * (1.5 * fres + 0.8 * hex + 0.1) * uOpacity, 1.0);
      }
    `,
  });
  const wardMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 2), wardMat);
  wardMesh.position.y = 1.1;
  wardMesh.visible = false;
  wardMesh.renderOrder = 11;
  root.add(wardMesh);

  const state = {
    root,
    body,
    pos: new THREE.Vector3(),
    vel: new THREE.Vector3(),
    yaw: 0,
    hp: 100,
    maxHp: 100,
    grounded: true,
    jumpsLeft: 2,
    dashCooldown: 0,
    dashTimer: 0,
    wardActive: false,
    wardEnergy: 1.0,
    hitFlash: 0,
    castRecoil: 0,
    chargeGlow: 0,
    gravSuspended: 0,
    radius: 0.68,
    height: 2.1,
  };

  const tipWorld = new THREE.Vector3();

  return {
    state,
    setSpellColor(hex) {
      gemMat.color.set(hex);
      gemMat.emissive.set(hex);
      jointMat.emissive.set(hex);
      wardMat.uniforms.uColor.value.set(hex);
    },
    getStaffTip(out = tipWorld) {
      staffGem.getWorldPosition(out);
      return out;
    },
    getCenter(out = new THREE.Vector3()) {
      return out.set(state.pos.x, state.pos.y + 1.1, state.pos.z);
    },
    damage(amount, knockDir, knockPower = 10) {
      let dmg = amount;
      if (state.wardActive && state.wardEnergy > 0.08) {
        dmg = Math.round(amount * 0.22);
        state.wardEnergy = Math.max(0, state.wardEnergy - 0.35);
        knockPower *= 0.35;
      }
      state.hp = Math.max(0, state.hp - dmg);
      state.hitFlash = 1.0;
      if (knockDir) {
        state.vel.addScaledVector(knockDir, knockPower);
        state.vel.y = Math.max(state.vel.y, Math.min(12, knockPower * 0.48));
        state.grounded = false;
      }
      return dmg;
    },
    reset(x, z, yaw) {
      state.pos.set(x, 0, z);
      state.vel.set(0, 0, 0);
      state.yaw = yaw;
      state.hp = state.maxHp;
      state.grounded = true;
      state.jumpsLeft = 2;
      state.dashCooldown = 0;
      state.dashTimer = 0;
      state.wardActive = false;
      state.wardEnergy = 1.0;
      state.hitFlash = 0;
      state.castRecoil = 0;
      state.chargeGlow = 0;
      state.gravSuspended = 0;
      root.position.copy(state.pos);
      root.rotation.y = state.yaw;
    },
    updateVisuals(dt, now, hiddenForFirstPerson = false) {
      root.position.copy(state.pos);
      root.rotation.y = state.yaw;
      body.visible = !hiddenForFirstPerson;

      // Blend skeletal idle / walk / run weights cleanly by horizontal speed
      const speedXZ = Math.hypot(state.vel.x, state.vel.z);
      const walkW = THREE.MathUtils.clamp(speedXZ / 5.0, 0, 1) * (1 - THREE.MathUtils.clamp((speedXZ - 5.0) / 4.5, 0, 1));
      const runW = THREE.MathUtils.clamp((speedXZ - 4.5) / 5.0, 0, 1);
      const idleW = Math.max(0, 1 - walkW - runW);

      if (idleAct) idleAct.setEffectiveWeight(idleW);
      if (walkAct) {
        walkAct.setEffectiveWeight(walkW);
        walkAct.setEffectiveTimeScale(Math.max(0.7, speedXZ / 3.8));
      }
      if (runAct) {
        runAct.setEffectiveWeight(runW);
        runAct.setEffectiveTimeScale(Math.max(0.85, speedXZ / 7.5));
      }

      mixer.update(dt);

      // Cast arm raise overlay & gravity suspension tilt
      state.castRecoil = Math.max(0, state.castRecoil - dt * 4.2);
      if (rightArmBone && (state.castRecoil > 0.01 || state.chargeGlow > 0.01)) {
        rightArmBone.rotation.x -= (state.castRecoil * 0.95 + state.chargeGlow * 0.6);
      }

      body.rotation.x = state.gravSuspended > 0 ? Math.sin(now * 5.5) * 0.35 : 0;
      staffGem.rotation.y = now * 3.0;

      if (state.hitFlash > 0) {
        state.hitFlash = Math.max(0, state.hitFlash - dt * 4.8);
        armorMat.emissive.set('#ffffff');
        armorMat.emissiveIntensity = state.hitFlash * 2.2;
      } else {
        armorMat.emissive.set('#000000');
        armorMat.emissiveIntensity = 0;
      }

      wardMesh.visible = state.wardActive && state.wardEnergy > 0.02;
      if (wardMesh.visible) {
        wardMat.uniforms.uTime.value = now;
        wardMat.uniforms.uOpacity.value = 0.85 * Math.min(1, state.wardEnergy * 2.5);
        wardMesh.rotation.y = now * 0.8;
      }
    },
  };
}
