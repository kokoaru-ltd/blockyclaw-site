import * as THREE from './vendor/three.module.js';
import RAPIER from './vendor/rapier.js';
import { mergeGeometries } from './vendor/BufferGeometryUtils.js';

const $ = id => document.getElementById(id);
const RUN_SECONDS = 60, ROAD_HALF = 10;
const keys = new Set(), touchPointers = new Map();
const state = { mode:'loading', elapsed:0, speed:0, limit:60, distance:0, x:-3, score:0, pedHits:0, crashes:0, maxFlight:0, horn:0, crashTime:0, captionTime:0, eventTime:0, shake:0, best:0 };
let seed = Number(new URLSearchParams(location.search).get('seed')) || 71823;
const random = () => { seed = (Math.imul(seed,1664525)+1013904223)>>>0; return seed / 4294967296; };
const pick = a => a[Math.floor(random()*a.length)];
const clamp = THREE.MathUtils.clamp;
let renderer, scene, camera, world, ready=false, lastTime=0, accumulator=0, sound=true, audio, engineOsc, engineGain, cinematic=null;
const voiceLines={yarimasune:'やりますねぇ！',ikisugi:'イキすぎィ！',fa:'ファッ！？',matei:'あっ、おい待てい！',arigatonasu:'ありがとナス！',aitenjan:'おっ、開いてんじゃーん！',iissune:'あぁ、いいっすねぇ！',koiyo:'いいよ！ 来いよ！'};
const clipFiles=Object.fromEntries(Object.keys(voiceLines).map(name=>[name,`./audio/${name}.mp3?v=20261121b`]));
const clipBuffers=new Map(),clipLoads=new Map(),clipErrors=new Map();
let currentClip=null,playingClip=null,lastClip=null,clipPlays=0;
let queuedVoice=null,runSerial=0,previewSerial=0;
const recentVoices=[];
let hood;
const TILE_COUNT=7;
const tiles=[], pedestrians=[], traffic=[], dolls=[];
const pedestrianBatches=[];
const up = new THREE.Vector3(0,1,0);
const geometry = { box:new THREE.BoxGeometry(1,1,1), sphere:new THREE.SphereGeometry(1,16,12), cylinder:new THREE.CylinderGeometry(1,1,1,12), wheel:new THREE.CylinderGeometry(1,1,1,12) };
const materials = new Map();
function mat(color, emissive=false) { const key=color+':'+emissive; if(!materials.has(key)) materials.set(key,new THREE.MeshStandardMaterial({color,roughness:.8,metalness:.08,...(emissive?{emissive:color,emissiveIntensity:.8}:{})}));return materials.get(key); }
function box(parent,x,y,z,w,h,d,color,emissive=false){const m=new THREE.Mesh(geometry.box,mat(color,emissive));m.position.set(x,y,z);m.scale.set(w,h,d);parent.add(m);return m;}
function sphere(parent,x,y,z,r,color){const m=new THREE.Mesh(geometry.sphere,mat(color));m.position.set(x,y,z);m.scale.setScalar(r);parent.add(m);return m;}
function ellipsoid(parent,x,y,z,w,h,d,color){const mesh=sphere(parent,x,y,z,1,color);mesh.scale.set(w,h,d);return mesh;}
function humanHead(parent,y,skin,shade){
  const firstChild=parent.children.length;
  ellipsoid(parent,0,y,0,.145,.18,.135,skin);ellipsoid(parent,0,y-.092,.035,.115,.09,.106,skin);
  ellipsoid(parent,0,y+.13,-.025,.146,.068,.137,'#342c2c');ellipsoid(parent,0,y+.095,-.09,.145,.085,.075,'#342c2c');
  for(const s of [-1,1]){ellipsoid(parent,s*.145,y-.006,0,.026,.045,.02,skin);ellipsoid(parent,s*.062,y+.026,.127,.027,.009,.009,'#ded6c9');ellipsoid(parent,s*.063,y+.026,.135,.009,.009,.006,'#35332f');box(parent,s*.063,y+.052,.126,.047,.007,.008,'#493b33');ellipsoid(parent,s*.074,y-.029,.121,.03,.014,.009,skin);}
  ellipsoid(parent,0,y-.009,.142,.023,.04,.024,skin);ellipsoid(parent,0,y-.037,.16,.024,.014,.019,skin);box(parent,0,y-.085,.132,.052,.005,.006,'#8e6558');
  for(const mesh of parent.children.slice(firstChild)){mesh.position.y=y+(mesh.position.y-y)*.72;mesh.scale.y*=.72;}
}
function humanTorso(parent,y,skin,shade){
  ellipsoid(parent,0,y-.06,0,.215,.31,.135,skin);ellipsoid(parent,0,y+.115,-.025,.285,.16,.14,skin);
  for(const s of [-1,1]){ellipsoid(parent,s*.127,y+.13,.081,.137,.095,.05,skin);ellipsoid(parent,s*.11,y+.035,.125,.092,.006,.004,shade);ellipsoid(parent,s*.255,y+.2,-.005,.105,.12,.10,skin);for(let row=0;row<3;row++)ellipsoid(parent,s*.054,y-.045-row*.067,.124,.055,.036,.008,skin);}
  ellipsoid(parent,0,y+.35,0,.058,.075,.061,skin);ellipsoid(parent,0,y-.218,.131,.008,.009,.003,shade);
}
function textTexture(text,bg='#1a3442',fg='#f8f3dd',width=512,height=160){const c=document.createElement('canvas');c.width=width;c.height=height;const ctx=c.getContext('2d');ctx.fillStyle=bg;ctx.fillRect(0,0,width,height);ctx.fillStyle=fg;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`900 ${Math.min(height*.6,width/(text.length*.7))}px sans-serif`;ctx.fillText(text,width/2,height/2,width*.92);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
function sign(parent,text,x,y,z,w=5,h=1.3,bg,fg){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:textTexture(text,bg,fg),side:THREE.DoubleSide}));m.position.set(x,y,z);parent.add(m);return m;}
function bone(parent,a,b,r,color){const delta=new THREE.Vector3().subVectors(b,a),m=new THREE.Mesh(geometry.cylinder,mat(color));m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(up,delta.clone().normalize());m.scale.set(r,delta.length(),r);parent.add(m);return m;}
function batch(group){
  const batches=new Map();
  for(const mesh of [...group.children]){
    if(!mesh.isMesh||mesh.material.map)continue;
    const key=mesh.material.uuid;if(!batches.has(key))batches.set(key,{material:mesh.material,geometries:[]});
    mesh.updateMatrix();
    if(mesh.isInstancedMesh){const matrix=new THREE.Matrix4();for(let i=0;i<mesh.count;i++){mesh.getMatrixAt(i,matrix);batches.get(key).geometries.push(mesh.geometry.clone().applyMatrix4(matrix));}}
    else batches.get(key).geometries.push(mesh.geometry.clone().applyMatrix4(mesh.matrix));
    group.remove(mesh);
  }
  for(const {material,geometries} of batches.values()){const merged=mergeGeometries(geometries,false);if(merged)group.add(new THREE.Mesh(merged,material));for(const g of geometries)g.dispose();}
  return group;
}
function carModel(color, player=false){const g=new THREE.Group();box(g,0,.6,0,2.05,.65,4.1,color);box(g,0,1.12,-.12,1.8,.6,2.05,color);box(g,0,1.26,-.94,1.64,.45,.06,'#243e50');box(g,0,1.26,.94,1.64,.45,.06,'#243e50');for(const s of [-1,1]){box(g,s*.92,1.2,0,.04,.43,1.7,'#243e50');for(const z of [-1.22,1.22]){const w=new THREE.Mesh(geometry.wheel,mat('#17212b'));w.rotation.z=Math.PI/2;w.scale.set(.43,.22,.43);w.position.set(s*1.02,.4,z);g.add(w);box(g,s*.66,.64,-2.08,.5,.2,.04,'#fff3c6',true);box(g,s*.66,.64,2.08,.5,.2,.04,'#ff5c42',true);}}box(g,0,.41,2.1,1.8,.1,.1,'#909da0');box(g,0,.5,2.12,.5,.15,.04,'#eadfc8');if(player)box(g,0,.99,-1.5,1.8,.09,.85,color);return batch(g);}
function personModel(){const g=new THREE.Group(),tone=pick([['#d2a080','#ba856b'],['#dfb08f','#c18f75'],['#ac775c','#925e4a']]),skin=tone[0],shade=tone[1],pants=pick(['#247f95','#d55d48','#354c85']);
  const points={hipL:new THREE.Vector3(-.13,.88,0),hipR:new THREE.Vector3(.13,.88,0),kneeL:new THREE.Vector3(-.15,.48,.015),kneeR:new THREE.Vector3(.15,.48,-.015),footL:new THREE.Vector3(-.15,.105,.01),footR:new THREE.Vector3(.15,.105,-.01),shoulderL:new THREE.Vector3(-.29,1.53,0),shoulderR:new THREE.Vector3(.29,1.53,0),elbowL:new THREE.Vector3(-.60,1.73,.005),elbowR:new THREE.Vector3(.60,1.73,.005),handL:new THREE.Vector3(-.12,1.85,-.16),handR:new THREE.Vector3(.12,1.85,-.16)};
  humanTorso(g,1.32,skin,shade);humanHead(g,1.83,skin,shade);
  // Swim trunks cover the pelvis and upper thighs; the upper body and feet are bare.
  box(g,0,.94,0,.425,.23,.30,pants);box(g,0,1.056,.005,.43,.045,.305,'#e6ddca');
  for(const s of [-1,1]){box(g,s*.12,.80,.005,.21,.21,.29,pants);box(g,s*.215,.9,.035,.016,.23,.1,'#e6ddca');ellipsoid(g,s*.15,.06,.105,.075,.06,.168,skin);ellipsoid(g,s*.15,.48,.015,.078,.083,.076,skin);ellipsoid(g,s*.60,1.73,.005,.077,.077,.072,skin);const palm=ellipsoid(g,s*.12,1.85,-.16,.067,.085,.027,skin);palm.rotation.z=s*.4;ellipsoid(g,s*.17,1.81,-.145,.025,.04,.027,skin);}
  for(const [a,b,r] of [['hipL','kneeL',.096],['kneeL','footL',.067],['hipR','kneeR',.096],['kneeR','footR',.067],['shoulderL','elbowL',.075],['elbowL','handL',.061],['shoulderR','elbowR',.075],['elbowR','handR',.061]])bone(g,points[a],points[b],r,skin);
  // Rounded biceps and calves make the silhouette anatomical even at road distance.
  for(const s of [-1,1]){ellipsoid(g,s*.145,.60,-.012,.102,.18,.103,skin);ellipsoid(g,s*.15,.32,-.018,.075,.135,.08,skin);const bicep=ellipsoid(g,s*.43,1.625,.005,.145,.083,.09,skin);bicep.rotation.z=s*.55;}
  g.userData={skin,shade,pants,points,swimwear:true};return batch(g);
}
function makeTile(index){const g=new THREE.Group();g.position.z=-index*100;scene.add(g);tiles.push(g);
  box(g,0,-.2,-50,20,.35,100,'#333944');for(const side of [-1,1]){box(g,side*12,-.03,-50,4,.3,100,'#7c7d85');box(g,side*10.15,.07,-50,.24,.24,100,'#bbb3a7');box(g,side*15,-.12,-50,2,.2,100,'#4c615d');}
  for(let z=-4;z>-100;z-=12){box(g,0,.012,z,.11,.018,6,'#e4c17b');for(const x of [-5,5])box(g,x,.014,z,.11,.018,5,'#b5b6b1');}
  for(let j=0;j<5;j++)for(const side of [-1,1]){const z=-j*20-10,h=8+random()*23,w=9+random()*6;const col=pick(['#5d627c','#777686','#657b84','#9d827e','#6b6f89']);box(g,side*(17+w/2),h/2,z,w,h,17,col);box(g,side*(17+w/2),h+.25,z,w+.3,.5,17.3,'#b3a69f');
    // Instanced windows keep the street dense without hundreds of draw calls.
    const rows=Math.floor((h-2)/2.7),windows=new THREE.InstancedMesh(geometry.box,mat(pick(['#d6a96f','#a4c3c8','#efc58e']),true),rows*5),dummy=new THREE.Object3D();let k=0;for(let row=0;row<rows;row++)for(let c=0;c<5;c++){dummy.position.set(side*(17-.02),3+row*2.7,z-6+c*3);dummy.scale.set(.04,1.35,1.1);dummy.updateMatrix();windows.setMatrixAt(k++,dummy.matrix);}g.add(windows);
    if(j%2===0){sign(g,pick(['喫茶 ナス','サウナ 24','やります商店','MOTEL','PARKING']),side*17,3.4,z+8.58,Math.min(7,w-1),1.2,pick(['#b9483f','#285a60','#313e65']));}
    const lampz=z+7;box(g,side*11.5,3.5,lampz,.13,7,.13,'#3e4a56');box(g,side*10.9,6.9,lampz,1.3,.12,.15,'#53606b');box(g,side*10.4,6.8,lampz,.55,.1,.45,'#ffe4a3',true);
    if(j%2===0){box(g,side*14,1.1,z-6,.18,2.2,.18,'#695148');const tree=sphere(g,side*14,3,z-6,1.65,'#536d69');tree.scale.y=1.25;}
  }
  // Crosswalk and overhead signals: crossing a red signal carries no penalty.
  for(let x=-9;x<10;x+=2)box(g,x,.022,-70,1.1,.025,4,'#bfc2bb');box(g,11.8,4.5,-70,.2,9,.2,'#586572');box(g,4,8.9,-70,15.5,.18,.18,'#586572');box(g,-3,8.6,-70,2.2,.65,.5,'#222d37');sphere(g,-3.65,8.6,-69.71,.18,'#f3685b');sphere(g,-3,8.6,-69.71,.18,'#795c40');sphere(g,-2.35,8.6,-69.71,.18,'#3c5b4e');
  sign(g,'この先 さらに加速',0,10.3,-70,7,1,'#244650');batch(g);return g;
}
function setupScene(){scene=new THREE.Scene();scene.background=new THREE.Color('#cb9ba1');scene.fog=new THREE.FogExp2('#c598a0',.0038);scene.add(new THREE.HemisphereLight('#dbd9f5','#645352',2.1));const sun=new THREE.DirectionalLight('#ffcf9b',3.3);sun.position.set(-50,80,-170);scene.add(sun);const disc=sphere(scene,-75,54,-500,28,'#ffe3ad');disc.material=new THREE.MeshBasicMaterial({color:'#ffe3ad'});
  camera=new THREE.PerspectiveCamera(73,innerWidth/innerHeight,.08,900);camera.position.set(-3,1.68,1);camera.lookAt(-3,1.65,-50);
  scene.add(camera);hood=new THREE.Group();camera.add(hood);box(hood,0,-1.02,-1.85,2.8,.16,2.6,'#566772');box(hood,-.85,-.91,-1.7,.04,.015,1.7,'#a7a8a6');box(hood,.85,-.91,-1.7,.04,.015,1.7,'#a7a8a6');batch(hood);
  for(let i=0;i<TILE_COUNT;i++)makeTile(i);
  const ground=world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0,-.45,-5000));world.createCollider(RAPIER.ColliderDesc.cuboid(200,.3,6000).setFriction(.7).setRestitution(.22),ground);
  for(let i=0;i<24;i++){const mesh=personModel();scene.add(mesh);pedestrians.push({mesh,x:0,z:0,startX:0,walk:0,hit:false,side:i%2?1:-1});}
  for(let i=0;i<12;i++){const mesh=carModel(pick(['#de8a52','#90a5b9','#d8c7b1','#4d6c7c','#9a5e65','#d5bd6a']));scene.add(mesh);traffic.push({mesh,x:0,z:0,v:0,hit:false});}
  window.addEventListener('resize',resize);resize();resetObjects();
}
function resize(){if(!renderer)return;renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}
function resetPed(p,i,initial=false){p.hit=false;p.mesh.visible=true;p.side=i%2?1:-1;p.z=initial?-(32+i*23):-(state.distance+260+random()*360);p.startX=p.side*(i%3===0?6:12);p.x=p.startX;p.walk=(i%3===0?1.8:.55)*-p.side;p.mesh.position.set(p.x,0,p.z);p.mesh.rotation.y=0;}
function instancePedestrians(){
  const groups=new Map();
  for(const p of pedestrians){scene.remove(p.mesh);p.mesh.children.forEach((part,index)=>{const key=index+':'+part.material.uuid;if(!groups.has(key))groups.set(key,{geometry:part.geometry,material:part.material,people:[]});groups.get(key).people.push(p);});}
  for(const group of groups.values()){const mesh=new THREE.InstancedMesh(group.geometry,group.material,group.people.length);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;scene.add(mesh);pedestrianBatches.push({mesh,people:group.people});}
}
function resetTraffic(c,i,initial=false){c.hit=false;c.mesh.visible=true;c.x=pick([-7.5,-2.5,2.5,7.5]);c.z=initial?-(75+i*46):-(state.distance+380+random()*380);c.v=c.x>0?-10:10;c.mesh.position.set(c.x,0,c.z);c.mesh.rotation.y=c.v>0?Math.PI:0;}
function resetObjects(){pedestrians.forEach((p,i)=>resetPed(p,i,true));traffic.forEach((c,i)=>resetTraffic(c,i,true));}
function clearDoll(d){for(const p of d.parts){scene.remove(p.mesh);p.mesh.traverse(child=>{if(child.isMesh)child.geometry.dispose();});world.removeRigidBody(p.body);}const i=dolls.indexOf(d);if(i>=0)dolls.splice(i,1);}
function launchDoll(x,z,velocity,isDriver=false,source=null){if(dolls.length>=7)clearDoll(dolls[0]);const model=source?.userData||pedestrians[0].mesh.userData;const skin=model.skin,shade=model.shade,pants=model.pants;const d={parts:[],age:0,origin:new THREE.Vector3(x,1,z),max:0,isDriver};
  // Separate rigid segments linked at neck, shoulders, elbows, hips and knees.
  const specs=[['torso',[0,1.32,0],[.25,.28,.14],skin],['pelvis',[0,.94,0],[.22,.17,.16],pants],['head',[0,1.83,0],[.145,.14,.135],skin],['upperL',[-.43,1.625,0],[.19,.078,.08],skin],['foreL',[-.36,1.79,-.08],[.24,.062,.065],skin],['upperR',[.43,1.625,0],[.19,.078,.08],skin],['foreR',[.36,1.79,-.08],[.24,.062,.065],skin],['thighL',[-.15,.66,0],[.10,.23,.11],skin],['shinL',[-.15,.26,0],[.074,.20,.08],skin],['thighR',[.15,.66,0],[.10,.23,.11],skin],['shinR',[.15,.26,0],[.074,.20,.08],skin]];
  for(const [name,pos,half,color] of specs){const body=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(x+pos[0],pos[1]+.5,z+pos[2]).setLinearDamping(.14).setAngularDamping(.2).setCcdEnabled(true));world.createCollider(RAPIER.ColliderDesc.cuboid(...half).setDensity(name==='torso'?3:1).setRestitution(.3).setFriction(.6).setCollisionGroups(0x00020001),body);body.setLinvel({x:(random()-.5)*5+velocity.x,y:velocity.y+(random()-.5)*2,z:velocity.z},true);body.setAngvel({x:(random()-.5)*10,y:(random()-.5)*7,z:(random()-.5)*9},true);const mesh=new THREE.Group();
    if(name==='torso')humanTorso(mesh,0,skin,shade);
    else if(name==='head')humanHead(mesh,0,skin,shade);
    else if(name==='pelvis'){box(mesh,0,0,0,.425,.23,.30,pants);box(mesh,0,.116,.005,.43,.045,.305,'#e6ddca');for(const s of [-1,1])box(mesh,s*.12,-.14,.005,.21,.20,.29,pants);}
    else{ellipsoid(mesh,0,0,0,...half,color);if(name.startsWith('shin'))ellipsoid(mesh,0,-.195,.09,.075,.06,.168,skin);if(name.startsWith('fore')){const side=name.endsWith('L')?1:-1;ellipsoid(mesh,side*.23,.055,-.075,.067,.085,.027,skin);}}
    batch(mesh);scene.add(mesh);d.parts.push({name,body,mesh,half});}
  const joint=(a,b,point)=>{const A=d.parts.find(p=>p.name===a),B=d.parts.find(p=>p.name===b),tA=A.body.translation(),tB=B.body.translation();const anchor=new THREE.Vector3(x+point[0],point[1]+.5,z+point[2]);const params=RAPIER.JointData.spherical({x:anchor.x-tA.x,y:anchor.y-tA.y,z:anchor.z-tA.z},{x:anchor.x-tB.x,y:anchor.y-tB.y,z:anchor.z-tB.z});const j=world.createImpulseJoint(params,A.body,B.body,true);j.setContactsEnabled(false);};
  joint('torso','pelvis',[0,1.08,0]);joint('torso','head',[0,1.69,0]);joint('torso','upperL',[-.29,1.53,0]);joint('upperL','foreL',[-.60,1.73,0]);joint('torso','upperR',[.29,1.53,0]);joint('upperR','foreR',[.60,1.73,0]);joint('pelvis','thighL',[-.15,.87,0]);joint('thighL','shinL',[-.15,.46,0]);joint('pelvis','thighR',[.15,.87,0]);joint('thighR','shinR',[.15,.46,0]);
  dolls.push(d);return d;
}
function stopClip(){previewSerial++;queuedVoice=null;const source=currentClip;currentClip=null;playingClip=null;if(source){try{source.stop();}catch{}source.disconnect();}}
function loadClips(){if(!audio)return Promise.resolve();for(const [name,url] of Object.entries(clipFiles)){if(clipBuffers.has(name)||clipLoads.has(name))continue;const load=fetch(url).then(response=>{if(!response.ok)throw new Error('HTTP '+response.status);return response.arrayBuffer();}).then(bytes=>audio.decodeAudioData(bytes)).then(buffer=>{clipBuffers.set(name,buffer);clipErrors.delete(name);}).catch(err=>{clipErrors.set(name,String(err));}).finally(()=>clipLoads.delete(name));clipLoads.set(name,load);}return Promise.allSettled([...clipLoads.values()]);}
function playClip(name){if(!sound||!audio||!['menu','playing','result'].includes(state.mode)||!clipBuffers.has(name))return false;const source=audio.createBufferSource();source.buffer=clipBuffers.get(name);const gain=audio.createGain();gain.gain.value=.85;source.connect(gain).connect(audio.destination);source.onended=()=>{source.disconnect();gain.disconnect();if(currentClip!==source)return;currentClip=null;playingClip=null;if(queuedVoice&&state.mode!=='menu'){const names=queuedVoice;queuedVoice=null;sayVoice(names);}else if(state.mode==='result'||state.mode==='menu'){if(state.mode==='menu'){$('voicePreviewStatus').textContent='再生完了: '+voiceLines[name];$('caption').textContent='';}audio.suspend();}};currentClip=source;playingClip=name;lastClip=name;clipPlays++;recentVoices.push(name);if(recentVoices.length>2)recentVoices.shift();if(state.mode==='menu')$('voicePreviewStatus').textContent='再生中: '+voiceLines[name];else $('caption').textContent=voiceLines[name];state.captionTime=source.buffer.duration+.35;source.start();return true;}
async function previewVoice(name){if(state.mode!=='menu')return;stopClip();const serial=previewSerial;sound=true;$('sound').textContent='音 ON';$('voicePreviewStatus').textContent='音声を準備中…';initAudio();await audio?.resume();await loadClips();if(previewSerial!==serial||state.mode!=='menu')return;if(!playClip(name))$('voicePreviewStatus').textContent='音声を読み込めませんでした。再度お試しください。';}
function sayVoice(names){if(currentClip){queuedVoice=names;return;}let choices=names.filter(name=>!recentVoices.includes(name));if(!choices.length)choices=Object.keys(voiceLines).filter(name=>!recentVoices.includes(name));const name=pick(choices);if(!playClip(name)){$('caption').textContent=voiceLines[name];state.captionTime=2.1;if(state.mode==='result')audio?.suspend();}}
function event(text,secs=2){$('event').textContent=text;state.eventTime=secs;}
function initAudio(){if(audio){loadClips();return;}try{audio=new (window.AudioContext||window.webkitAudioContext)();engineOsc=audio.createOscillator();engineGain=audio.createGain();engineOsc.type='sawtooth';engineGain.gain.value=0;engineOsc.connect(engineGain).connect(audio.destination);engineOsc.start();loadClips();}catch{audio=null;}}
function tone(freq,duration=.15,type='square',volume=.05){if(!sound||!audio)return;const osc=audio.createOscillator(),gain=audio.createGain();osc.type=type;osc.frequency.value=freq;gain.gain.setValueAtTime(volume,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+duration);osc.connect(gain).connect(audio.destination);osc.start();osc.stop(audio.currentTime+duration);}
function horn(){if(state.mode!=='playing'||state.horn>0)return;state.horn=1.1;tone(220,.35,'sawtooth',.07);tone(277,.35,'sawtooth',.04);sayVoice(['aitenjan','koiyo','matei','yarimasune']);}
function impact(amount=.5){state.shake=Math.max(state.shake,amount);$('impact').style.opacity=String(amount*.6);setTimeout(()=>$('impact').style.opacity='0',160);tone(55,.4,'sawtooth',.12);}
function hitPed(p){p.hit=true;p.mesh.visible=false;state.pedHits++;state.score+=250+Math.floor(state.speed*3);const speed=state.speed/3.6;launchDoll(p.x,p.z,{x:(p.x-state.x)*2,y:10+speed*.23,z:-Math.max(12,speed*.75)},false,p.mesh);impact(.18);sayVoice(['ikisugi','fa','yarimasune','matei']);event('ぐにゃぐにゃフライト +'+(250+Math.floor(state.speed*3)));}
function crash(c){if(state.crashTime>0)return;c.hit=true;c.mesh.visible=false;state.crashes++;state.score+=500;state.crashTime=2.65;const speed=state.speed/3.6;const d=launchDoll(state.x,-state.distance-2,{x:(random()-.5)*9,y:12+speed*.14,z:-Math.max(15,speed*.8)},true);cinematic=d;state.speed*=.28;impact(.9);sayVoice(state.crashes===1&&!recentVoices.includes('ikisugi')?['ikisugi']:['ikisugi','matei','fa']);event('ドライバー射出！ スローモーション',2.6);}
function start(){if(!ready)return;stopClip();const serial=++runSerial;for(const d of [...dolls])clearDoll(d);Object.assign(state,{mode:'playing',elapsed:0,speed:0,limit:60,distance:0,x:-3,score:0,pedHits:0,crashes:0,maxFlight:0,horn:0,crashTime:0,captionTime:0,eventTime:0,shake:0});cinematic=null;accumulator=0;keys.clear();touchPointers.clear();document.querySelectorAll('.held').forEach(e=>e.classList.remove('held'));tiles.forEach((g,i)=>g.position.z=-i*100);resetObjects();for(const id of ['panel','pausePanel','result'])$(id).hidden=true;$('game').classList.remove('inactive');$('caption').textContent='';$('event').textContent='';$('sound').textContent=sound?'音 ON':'音 OFF';initAudio();audio?.resume();loadClips().then(()=>{if(runSerial===serial&&state.mode==='playing'&&state.elapsed<2)sayVoice(['aitenjan','koiyo','iissune']);});event('アクセルを踏め！ ↑ / W',3);}
function pause(force){if(state.mode!=='playing'&&state.mode!=='paused')return;state.mode=force??(state.mode==='playing'?'paused':'playing');$('pausePanel').hidden=state.mode!=='paused';keys.clear();stopClip();if(engineGain)engineGain.gain.value=0;if(state.mode==='paused')audio?.suspend();else audio?.resume();}
function finish(){state.mode='result';keys.clear();queuedVoice=null;if(engineGain)engineGain.gain.value=0;sayVoice(['arigatonasu','yarimasune','iissune']);const old=state.best;state.best=Math.max(old,Math.floor(state.score));try{localStorage.setItem('dashcam-panic-best',String(state.best));}catch{}$('resultScore').textContent=Math.floor(state.score).toLocaleString();$('resultStats').innerHTML=`走行 ${Math.floor(state.distance).toLocaleString()} m · 人形フライト ${state.pedHits} 回<br>ドライバー射出 ${state.crashes} 回 · 最長 ${Math.floor(state.maxFlight)} m`;$('resultBest').textContent=(state.best>old?'NEW BEST! ':'BEST ')+state.best.toLocaleString();$('verdict').textContent=state.score>15000?'やりますねぇ！':'おつかれナス！';$('result').hidden=false;}
function update(dt){state.elapsed+=dt;if(state.elapsed>=RUN_SECONDS){finish();return;}const level=Math.floor(state.elapsed/10),limit=60+level*40;if(limit!==state.limit){state.limit=limit;event(`制限速度 ${limit} km/h に上昇！`,2.7);tone(660,.2);sayVoice(['iissune','yarimasune','koiyo']);}
  state.horn=Math.max(0,state.horn-dt);state.captionTime-=dt;state.eventTime-=dt;if(state.captionTime<=0&&!currentClip)$('caption').textContent='';if(state.eventTime<=0)$('event').textContent='';state.shake=Math.max(0,state.shake-dt*1.5);
  const gas=keys.has('ArrowUp')||keys.has('KeyW'),brake=keys.has('ArrowDown')||keys.has('KeyS');const steering=(keys.has('ArrowRight')||keys.has('KeyD')?1:0)-(keys.has('ArrowLeft')||keys.has('KeyA')?1:0);
  const wasDistance=state.distance,oldX=state.x;
  if(state.crashTime<=0){state.speed=clamp(state.speed+(gas?50:brake?-100:-13)*dt,0,state.limit+90);state.x=clamp(state.x+steering*(2+state.speed*.026)*dt,-12.7,12.7);state.distance+=state.speed/3.6*dt;state.score+=state.speed/3.6*dt*.5;}
  else{state.crashTime-=dt;if(state.crashTime<=0){cinematic=null;event('録画続行。まだ走れる！',1.8);}}
  if(Math.abs(state.x)>10.2&&state.speed>25){state.speed=Math.max(20,state.speed-dt*24);state.shake=Math.max(state.shake,.08);}
  for(const g of tiles){if(g.position.z> -state.distance+110)g.position.z-=TILE_COUNT*100;}
  for(let i=0;i<pedestrians.length;i++){const p=pedestrians[i];if(p.z> -state.distance+40){resetPed(p,i);continue;}if(p.hit)continue;const oldZ=p.z,px=p.x;p.x+=p.walk*dt;if(Math.abs(p.x)>13){p.walk*=-1;p.x=clamp(p.x,-13,13);}p.mesh.position.set(p.x,Math.sin(state.elapsed*6+i)*.035,p.z);p.mesh.rotation.z=Math.sin(state.elapsed*3+i)*.035;
    const zNow=-state.distance,zBefore=-wasDistance;if(p.z<=zBefore+2.7&&p.z>=zNow-2.7&&Math.min(Math.abs(px-oldX),Math.abs(p.x-state.x))<1.35&&state.speed>8&&state.crashTime<=0)hitPed(p);
    if(Math.abs(p.z+state.distance)<22&&Math.abs(p.x-state.x)<4&&state.horn>.8)p.mesh.rotation.z=Math.sin(state.elapsed*25)*.15;
  }
  for(let i=0;i<traffic.length;i++){const c=traffic[i];if(c.z> -state.distance+40){resetTraffic(c,i);continue;}if(c.hit)continue;const beforeZ=c.z;c.z+=c.v*dt;c.mesh.position.set(c.x,0,c.z);const relBefore=beforeZ+wasDistance,relNow=c.z+state.distance;if(relBefore<=4.4&&relNow>=-4.4&&Math.min(Math.abs(c.x-oldX),Math.abs(c.x-state.x))<1.9&&state.speed>18&&state.crashTime<=0)crash(c);}
  // Fixed-step solver and a slow-motion cinematic use the same physics world.
  accumulator+=dt*(state.crashTime>0?.43:1);let steps=0;while(accumulator>=1/60&&steps++<5){world.timestep=1/60;world.step();accumulator-=1/60;}
  for(const d of [...dolls]){d.age+=dt;for(const part of d.parts){part.mesh.position.copy(part.body.translation());part.mesh.quaternion.copy(part.body.rotation());}const p=d.parts[0].body.translation();d.max=Math.max(d.max,Math.hypot(p.x-d.origin.x,p.z-d.origin.z));state.maxFlight=Math.max(state.maxFlight,d.max);if(d.age>11||p.z> -state.distance+70)clearDoll(d);}
  if(engineGain&&audio){engineOsc.frequency.setTargetAtTime(28+state.speed*.65,audio.currentTime,.1);engineGain.gain.setTargetAtTime(sound?.012+state.speed*.00003:0,audio.currentTime,.1);}
}
function draw(){const shake=state.shake;const t=state.elapsed;for(const {mesh,people} of pedestrianBatches){people.forEach((p,i)=>{p.mesh.scale.setScalar(p.hit?0:1);p.mesh.updateMatrix();mesh.setMatrixAt(i,p.mesh.matrix);});mesh.instanceMatrix.needsUpdate=true;}camera.fov=73+Math.min(12,state.speed*.035);camera.updateProjectionMatrix();hood.visible=!(cinematic&&state.crashTime>0);if(cinematic&&state.crashTime>0&&dolls.includes(cinematic)){const p=cinematic.parts[0].body.translation();camera.position.lerp(new THREE.Vector3(p.x+5,p.y+3.5,p.z+9),.09);camera.lookAt(p.x,p.y,p.z);}
  else{camera.position.set(state.x+Math.sin(t*139)*shake*.5,1.68+Math.sin(t*18)*state.speed*.00015+Math.cos(t*173)*shake*.5,-state.distance+1.1);camera.lookAt(state.x+(keys.has('ArrowLeft')?-.65:keys.has('ArrowRight')?.65:0),1.54,-state.distance-45);camera.rotation.z=Math.sin(t*4)*state.speed*.000025;}
  renderer.render(scene,camera);$('speed').textContent=Math.round(state.speed);$('limit').textContent=state.limit;$('score').textContent=String(Math.floor(state.score)).padStart(5,'0');$('timer').innerHTML=Math.max(0,RUN_SECONDS-state.elapsed).toFixed(1)+' <small>SEC</small>';$('distance').textContent=Math.floor(state.distance)+' m';$('flight').textContent=Math.floor(state.maxFlight)+' m';$('speedbar').style.width=Math.min(100,state.speed/350*100)+'%';$('phase').textContent=state.crashTime>0?'事故映像 / SLOW MOTION':['夕焼け暴走区','速度とは哲学','制限とは一体','街がついてこない','イキすぎ注意報','限界の向こう側'][Math.min(5,Math.floor(t/10))];const seconds=Math.floor(t);$('stamp').textContent=`BLOCKY CAM / 00:${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
}
function frame(now){const dt=Math.min((now-lastTime)/1000||0,1/20);lastTime=now;if(state.mode==='playing')update(dt);draw();requestAnimationFrame(frame);}
function controls(){window.addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();if(e.repeat)return;if(e.code==='KeyP'||e.code==='Escape'){pause();return;}if(e.code==='KeyR'&&ready&&state.mode!=='loading'){start();return;}if(e.code==='Space')horn();keys.add(e.code);});window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',()=>{keys.clear();if(state.mode==='playing')pause('paused');});document.addEventListener('visibilitychange',()=>{if(document.hidden&&state.mode==='playing')pause('paused');});
  for(const button of document.querySelectorAll('[data-voice]'))button.onclick=()=>previewVoice(button.dataset.voice);
  for(const b of document.querySelectorAll('[data-key]')){b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);touchPointers.set(e.pointerId,b.dataset.key);keys.add(b.dataset.key);b.classList.add('held');if(b.dataset.key==='Space')horn();});const release=e=>{const key=touchPointers.get(e.pointerId);touchPointers.delete(e.pointerId);if(![...touchPointers.values()].includes(key))keys.delete(key);b.classList.remove('held');};b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release);}
  $('start').onclick=start;$('again').onclick=start;$('restartPause').onclick=start;$('pause').onclick=()=>pause();$('resume').onclick=()=>pause('playing');$('sound').onclick=()=>{sound=!sound;initAudio();if(state.mode==='playing')audio?.resume();$('sound').textContent=sound?'音 ON':'音 OFF';if(!sound){stopClip();if(engineGain)engineGain.gain.value=0;}};
}
window.__dashcamDiagnostics=()=>Object.freeze({mode:state.mode,elapsed:+state.elapsed.toFixed(3),speed:+state.speed.toFixed(2),limit:state.limit,distance:+state.distance.toFixed(2),x:+state.x.toFixed(2),score:Math.floor(state.score),crashes:state.crashes,pedHits:state.pedHits,maxFlight:+state.maxFlight.toFixed(2),ragdollBodies:dolls.reduce((n,d)=>n+d.parts.length,0),ragdolls:dolls.length,pedestrians:pedestrians.length,traffic:traffic.length,sceneObjects:scene?.children.length||0,drawCalls:renderer?.info.render.calls||0,physicsFinite:dolls.every(d=>d.parts.every(p=>{const t=p.body.translation();return Number.isFinite(t.x+t.y+t.z);})),audio:Object.freeze({enabled:sound,context:audio?.state||'uninitialized',plays:clipPlays,lastClip,playingClip,decoded:Object.freeze(Object.fromEntries(Object.keys(clipFiles).map(name=>[name,clipBuffers.has(name)]))),durations:Object.freeze(Object.fromEntries([...clipBuffers].map(([name,buffer])=>[name,+buffer.duration.toFixed(3)]))),errors:Object.freeze(Object.fromEntries(clipErrors)),recent:Object.freeze([...recentVoices]),queued:queuedVoice!==null}),characterStyle:'adult-male-swim-trunks',version:'1.3.1'});
async function boot(){try{
  renderer=new THREE.WebGLRenderer({canvas:$('view'),antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;await RAPIER.init();world=new RAPIER.World({x:0,y:-15,z:0});setupScene();instancePedestrians();try{state.best=Number(localStorage.getItem('dashcam-panic-best'))||0;}catch{}$('best').textContent=state.best?'BEST '+state.best.toLocaleString():'';controls();ready=true;state.mode='menu';$('game').classList.add('inactive');$('start').disabled=false;$('start').textContent='録画開始 / START';lastTime=performance.now();requestAnimationFrame(frame);
  $('view').addEventListener('webglcontextlost',e=>{e.preventDefault();if(state.mode==='playing')pause('paused');$('error').textContent='描画が中断されました。ページを再読み込みしてください。';$('panel').hidden=false;ready=false;$('start').disabled=true;});
}catch(err){console.error(err);$('error').textContent='ゲームを起動できませんでした。WebGL対応のChrome / Edgeで再読み込みしてください。';$('start').textContent='起動できませんでした';}}
boot();
