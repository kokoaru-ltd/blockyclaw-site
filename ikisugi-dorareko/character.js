import * as THREE from './vendor/three.module.js';
import { mergeGeometries } from './vendor/BufferGeometryUtils.js';
import { GLTFLoader } from './assets/characters/GLTFLoader.js';

let loading, metadata, canonicalParts;
const variants = new Map();
const palette = [
  { skin:0xffffff, shorts:0x19536b, shade:'#99765c', pants:'#19536b' },
  { skin:0xe3c5a6, shorts:0x843b2f, shade:'#836048', pants:'#843b2f' },
  { skin:0xf4dfce, shorts:0x263b60, shade:'#95745f', pants:'#263b60' },
];
const assetURL = name => new URL('./assets/characters/'+name, import.meta.url).href;
function variantIndex(value=0) {
  const n = typeof value === 'number' ? value : value?.variant ?? value?.userData?.variant ?? 0;
  return ((Math.floor(n)%palette.length)+palette.length)%palette.length;
}
function shared(mesh) {
  mesh.userData.sharedGeometry = true;
  mesh.userData.characterAsset = true;
  return mesh;
}
export function loadCharacterAssets() {
  if (loading) return loading;
  loading = Promise.all([
    new GLTFLoader().loadAsync(assetURL('adult-swimmer.glb')),
    fetch(assetURL('adult-swimmer.json')).then(r=>{if(!r.ok)throw new Error('Character metadata HTTP '+r.status);return r.json();}),
  ]).then(([gltf,meta])=>{
    metadata=meta;gltf.scene.updateMatrixWorld(true);
    canonicalParts = meta.parts.map(spec=>{
      const node=gltf.scene.getObjectByName(spec.name);
      if (!node) throw new Error('Character segment missing: '+spec.name);
      const meshes=[];
      node.traverse(child=>{
        if(!child.isMesh) return;
        const geometry=child.geometry.clone().applyMatrix4(child.matrixWorld);
        geometry.translate(-spec.center[0],-spec.center[1],-spec.center[2]);
        geometry.computeBoundingBox();geometry.computeBoundingSphere();
        meshes.push({geometry,material:child.material});
      });
      if(!meshes.length)throw new Error('Character segment has no surface: '+spec.name);
      return {...spec,meshes};
    });
    return getCharacterAssetInfo();
  });
  return loading;
}
function prepareVariant(index) {
  if(!canonicalParts)throw new Error('Await loadCharacterAssets() before creating people.');
  if(variants.has(index))return variants.get(index);
  const colors=palette[index],materials=new Map(),skinColor=new THREE.Color(colors.skin);
  function material(original) {
    if(materials.has(original.uuid))return materials.get(original.uuid);
    const m=original.clone();m.metalness=0;
    if(m.name==='skin'){m.color.copy(skinColor);m.roughness=.82;}
    if(m.name==='swim_trunks'){m.color.setHex(colors.shorts);m.roughness=.96;}
    if(m.map){m.map.colorSpace=THREE.SRGBColorSpace;m.map.anisotropy=4;}
    materials.set(original.uuid,m);return m;
  }
  const parts=canonicalParts.map(spec=>({...spec,meshes:spec.meshes.map(m=>({geometry:m.geometry,material:material(m.material)}))}));
  // Baked pose: one surface per material rather than 11 body segments per pedestrian.
  const batches=new Map();
  for(const part of parts)for(const mesh of part.meshes){
    const key=mesh.material.uuid;
    if(!batches.has(key))batches.set(key,{material:mesh.material,geometries:[]});
    const g=mesh.geometry.clone().translate(...part.center);batches.get(key).geometries.push(g);
  }
  const whole=[];
  for(const batch of batches.values()){
    const g=mergeGeometries(batch.geometries,false);
    if(!g)throw new Error('Unable to batch character surface');
    g.computeBoundingBox();g.computeBoundingSphere();whole.push({geometry:g,material:batch.material});
    for(const old of batch.geometries)old.dispose();
  }
  const data={parts,whole};variants.set(index,data);return data;
}
export function createCharacter(value=0) {
  const index=variantIndex(value),data=prepareVariant(index),group=new THREE.Group();
  for(const part of data.whole)group.add(shared(new THREE.Mesh(part.geometry,part.material)));
  group.userData={variant:index,skin:'#e0baa3',shade:palette[index].shade,pants:palette[index].pants,swimwear:true,sharedGeometry:true,characterStyle:'cc0-makehuman-textured',points:{}};
  group.userData.points.head=new THREE.Vector3(...metadata.parts.find(p=>p.name==='head').center);
  group.userData.points.pelvis=new THREE.Vector3(...metadata.parts.find(p=>p.name==='pelvis').center);
  return group;
}
export function createRagdollParts(value=0) {
  const index=variantIndex(value),data=prepareVariant(index);
  return {
    sharedGeometry:true,
    parts:data.parts.map(spec=>{
      const mesh=new THREE.Group();mesh.name=spec.name;mesh.userData.sharedGeometry=true;mesh.userData.variant=index;
      for(const surface of spec.meshes)mesh.add(shared(new THREE.Mesh(surface.geometry,surface.material)));
      return {name:spec.name,mesh,center:[...spec.center],half:[...spec.half],sharedGeometry:true};
    }),
    joints:metadata.joints.map(j=>({a:j.a,b:j.b,point:[...j.point]})),
  };
}
export function getCharacterAssetInfo() {
  if(!canonicalParts)return {loaded:false};
  let triangles=0;
  for(const part of canonicalParts)for(const mesh of part.meshes)triangles+=(mesh.geometry.index?.count??mesh.geometry.attributes.position.count)/3;
  return {loaded:true,style:'cc0-makehuman-textured',adult:true,swimwear:true,parts:canonicalParts.length,triangles,materials:new Set(canonicalParts.flatMap(p=>p.meshes.map(m=>m.material.uuid))).size,height:metadata.height};
}
