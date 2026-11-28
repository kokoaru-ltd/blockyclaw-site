(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="186",dd=0,fc=1,fd=2,Js=1,pd=2,Ys=3,yi=0,Jt=1,Dt=2,ei=0,Qs=1,Mi=2,pc=3,mc=4,la=5,os=100,md=101,gd=102,vd=103,_d=104,ca=200,Ii=201,xd=202,yd=203,Yu=204,sr=205,Md=206,Sd=207,bd=208,Td=209,Ed=210,wd=211,Ad=212,Cd=213,Rd=214,Co=0,Ro=1,Lo=2,rr=3,Io=4,Po=5,Do=6,No=7,Ku=0,Ld=1,Id=2,Bn=0,$u=1,Zu=2,Ju=3,Qu=4,ju=5,eh=6,th=7,gc="attached",Pd="detached",nh=300,Fi=301,_s=302,Fa=303,Oa=304,Ta=306,xs=1e3,Un=1001,ua=1002,Nt=1003,ih=1004,Ks=1005,Ct=1006,ta=1007,Mn=1008,nn=1009,sh=1010,rh=1011,ar=1012,wl=1013,wn=1014,un=1015,An=1016,Al=1017,Cl=1018,or=1020,ah=35902,oh=35899,lh=1021,ch=1022,hn=1023,ii=1026,Pi=1027,Rl=1028,Ll=1029,Oi=1030,Il=1031,Pl=1033,na=33776,ia=33777,sa=33778,ra=33779,Uo=35840,Fo=35841,Oo=35842,Bo=35843,zo=36196,ko=37492,Vo=37496,Ho=37488,Go=37489,ha=37490,Wo=37491,Xo=37808,qo=37809,Yo=37810,Ko=37811,$o=37812,Zo=37813,Jo=37814,Qo=37815,jo=37816,el=37817,tl=37818,nl=37819,il=37820,sl=37821,rl=36492,al=36494,ol=36495,ll=36283,cl=36284,da=36285,ul=36286,Dd=2200,Nd=2201,Ud=2202,lr=2300,cr=2301,Ba=2302,vc=2303,cs=2400,us=2401,fa=2402,Dl=2500,Fd=2501,Od=0,uh=1,hl=2,Bd=3200,dl=0,zd=1,vi="",kt="srgb",rn="srgb-linear",pa="linear",dt="srgb",za=7680,kd=519,Vd=512,Hd=513,Gd=514,Nl=515,Wd=516,Xd=517,Ul=518,qd=519,hh=35044,dh=35048,fl="300 es",Fn=2e3,ur=2001;function Yd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $d(){const s=hr("canvas");return s.style.display="block",s}const _c={};function ma(...s){const e="THREE."+s.shift();console.log(e,...s)}function fh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Be(...s){s=fh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xe(...s){s=fh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fs(...s){const e=s.join(" ");e in _c||(_c[e]=!0,Be(...s))}function Zd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jd={[Co]:Ro,[Lo]:Do,[Io]:No,[rr]:Po,[Ro]:Co,[Do]:Lo,[No]:Io,[Po]:rr};class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const js=Math.PI/180,ys=180/Math.PI;function Tn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function et(s,e,t){return Math.max(e,Math.min(t,s))}function Fl(s,e){return(s%e+e)%e}function Qd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function jd(s,e,t){return s!==e?(t-s)/(e-s):0}function er(s,e,t){return(1-t)*s+t*e}function ef(s,e,t,n){return er(s,e,1-Math.exp(-t*n))}function tf(s,e=1){return e-Math.abs(Fl(s,e*2)-e)}function nf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function af(s,e){return s+Math.random()*(e-s)}function of(s){return s*(.5-Math.random())}function lf(s){s!==void 0&&(xc=s);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cf(s){return s*js}function uf(s){return s*ys}function hf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function df(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ff(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*u,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vt={DEG2RAD:js,RAD2DEG:ys,generateUUID:Tn,clamp:et,euclideanModulo:Fl,mapLinear:Qd,inverseLerp:jd,lerp:er,damp:ef,pingpong:tf,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:af,randFloatSpread:of,seededRandom:lf,degToRad:cf,radToDeg:uf,isPowerOfTwo:hf,ceilPowerOfTwo:df,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:ft,denormalize:xn};class ze{static{ze.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(h!==y||l!==d||c!==f||u!==g){let v=l*d+c*f+u*g+h*y;v<0&&(d=-d,f=-f,g=-g,y=-y,v=-v);let m=1-o;if(v<.9995){const b=Math.acos(v),E=Math.sin(b);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E,l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+y*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+y*o;const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{static{L.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new L,yc=new Ht;class Ye{static{Ye.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],y=i[0],v=i[3],m=i[6],b=i[1],E=i[4],p=i[7],x=i[2],M=i[5],T=i[8];return r[0]=a*y+o*b+l*x,r[3]=a*v+o*E+l*M,r[6]=a*m+o*p+l*T,r[1]=c*y+u*b+h*x,r[4]=c*v+u*E+h*M,r[7]=c*m+u*p+h*T,r[2]=d*y+f*b+g*x,r[5]=d*v+f*E+g*M,r[8]=d*m+f*p+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(i*c-u*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(u*t-i*l)*y,e[5]=(i*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Ye,Mc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){const s={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?pa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[rn]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),s}const it=mf();function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hi;class gf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=hr("canvas")),Hi.width=e.width,Hi.height=e.height;const i=Hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vf=0;class Ol{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ha(i[a].image)):r.push(Ha(i[a]))}else r=Ha(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ha(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let _f=0;const Ga=new L;class Ut extends Si{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Un,i=Un,r=Ct,a=Mn,o=hn,l=nn,c=Ut.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Tn(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=nh;Ut.DEFAULT_ANISOTROPY=1;class Ke{static{Ke.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],y=l[2],v=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+v)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,p=(f+1)/2,x=(m+1)/2,M=(u+d)/4,T=(h+y)/4,_=(g+v)/4;return E>p&&E>x?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=M/n,r=T/n):p>x?p<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(p),n=M/i,r=_/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=T/r,i=_/r),this.set(n,i,r,t),this}let b=Math.sqrt((v-g)*(v-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(v-g)/b,this.y=(h-y)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Ut(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ol(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends xf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ph extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class qe{static{qe.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,u,h,d,f,g,y,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,d,f,g,y,v)}set(e,t,n,i,r,a,o,l,c,u,h,d,f,g,y,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Sf)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ci.crossVectors(n,jt),ci.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ci.crossVectors(n,jt)),ci.normalize(),Mr.crossVectors(jt,ci),i[0]=ci.x,i[4]=Mr.x,i[8]=jt.x,i[1]=ci.y,i[5]=Mr.y,i[9]=jt.y,i[2]=ci.z,i[6]=Mr.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],y=n[6],v=n[10],m=n[14],b=n[3],E=n[7],p=n[11],x=n[15],M=i[0],T=i[4],_=i[8],w=i[12],R=i[1],C=i[5],N=i[9],U=i[13],I=i[2],O=i[6],H=i[10],G=i[14],K=i[3],$=i[7],ne=i[11],te=i[15];return r[0]=a*M+o*R+l*I+c*K,r[4]=a*T+o*C+l*O+c*$,r[8]=a*_+o*N+l*H+c*ne,r[12]=a*w+o*U+l*G+c*te,r[1]=u*M+h*R+d*I+f*K,r[5]=u*T+h*C+d*O+f*$,r[9]=u*_+h*N+d*H+f*ne,r[13]=u*w+h*U+d*G+f*te,r[2]=g*M+y*R+v*I+m*K,r[6]=g*T+y*C+v*O+m*$,r[10]=g*_+y*N+v*H+m*ne,r[14]=g*w+y*U+v*G+m*te,r[3]=b*M+E*R+p*I+x*K,r[7]=b*T+E*C+p*O+x*$,r[11]=b*_+E*N+p*H+x*ne,r[15]=b*w+E*U+p*G+x*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],y=e[7],v=e[11],m=e[15],b=l*f-c*d,E=o*f-c*h,p=o*d-l*h,x=a*f-c*u,M=a*d-l*u,T=a*h-o*u;return t*(y*b-v*E+m*p)-n*(g*b-v*x+m*M)+i*(g*E-y*x+m*T)-r*(g*p-y*M+v*T)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],y=e[13],v=e[14],m=e[15],b=t*o-n*a,E=t*l-i*a,p=t*c-r*a,x=n*l-i*o,M=n*c-r*o,T=i*c-r*l,_=u*y-h*g,w=u*v-d*g,R=u*m-f*g,C=h*v-d*y,N=h*m-f*y,U=d*m-f*v,I=b*U-E*N+p*C+x*R-M*w+T*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=(o*U-l*N+c*C)*O,e[1]=(i*N-n*U-r*C)*O,e[2]=(y*T-v*M+m*x)*O,e[3]=(d*M-h*T-f*x)*O,e[4]=(l*R-a*U-c*w)*O,e[5]=(t*U-i*R+r*w)*O,e[6]=(v*p-g*T-m*E)*O,e[7]=(u*T-d*p+f*E)*O,e[8]=(a*N-o*R+c*_)*O,e[9]=(n*R-t*N-r*_)*O,e[10]=(g*M-y*p+m*b)*O,e[11]=(h*p-u*M-f*b)*O,e[12]=(o*w-a*C-l*_)*O,e[13]=(t*C-n*w+i*_)*O,e[14]=(y*E-g*x-v*b)*O,e[15]=(u*x-h*E+d*b)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,y=a*u,v=a*h,m=o*h,b=l*c,E=l*u,p=l*h,x=n.x,M=n.y,T=n.z;return i[0]=(1-(y+m))*x,i[1]=(f+p)*x,i[2]=(g-E)*x,i[3]=0,i[4]=(f-p)*M,i[5]=(1-(d+m))*M,i[6]=(v+b)*M,i[7]=0,i[8]=(g+E)*T,i[9]=(v-b)*T,i[10]=(1-(d+y))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Gi.set(i[0],i[1],i[2]).length();const o=Gi.set(i[4],i[5],i[6]).length(),l=Gi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),gn.copy(this);const c=1/a,u=1/o,h=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Fn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ur)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Fn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Fn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ur)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new L,gn=new qe,Mf=new L(0,0,0),Sf=new L(1,1,1),ci=new L,Mr=new L,jt=new L,bc=new qe,Tc=new Ht;class Vn{constructor(e=0,t=0,n=0,i=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bf=0;const Ec=new L,Wi=new Ht,Wn=new qe,Sr=new L,Ps=new L,Tf=new L,Ef=new Ht,wc=new L(1,0,0),Ac=new L(0,1,0),Cc=new L(0,0,1),Rc={type:"added"},wf={type:"removed"},Xi={type:"childadded",child:null},Wa={type:"childremoved",child:null};class bt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,t=new Vn,n=new Ht,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ps,Sr,this.up):Wn.lookAt(Sr,Ps,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Af={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const v=t.getJointPose(y,n),m=this._getHandJoint(c,y);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},br={h:0,s:0,l:0};function qa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Fl(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qa(a,r,e+1/3),this.g=qa(a,r,e),this.b=qa(a,r,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return it.workingToColorSpace(Xt.copy(this),e),Math.round(et(Xt.r*255,0,255))*65536+Math.round(et(Xt.g*255,0,255))*256+Math.round(et(Xt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=kt){it.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(br);const n=er(ui.h,br.h,t),i=er(ui.s,br.s,t),r=er(ui.l,br.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new we;we.NAMES=mh;class zl extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vn=new L,Xn=new L,Ya=new L,qn=new L,qi=new L,Yi=new L,Lc=new L,Ka=new L,$a=new L,Za=new L,Ja=new Ke,Qa=new Ke,ja=new Ke;class cn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vn.subVectors(i,t),Xn.subVectors(n,t),Ya.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Xn),l=vn.dot(Ya),c=Xn.dot(Xn),u=Xn.dot(Ya),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ja.setScalar(0),Qa.setScalar(0),ja.setScalar(0),Ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ja,r.x),a.addScaledVector(Qa,r.y),a.addScaledVector(ja,r.z),a}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Xn.subVectors(e,t),vn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),vn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;qi.subVectors(i,n),Yi.subVectors(r,n),Ka.subVectors(e,n);const l=qi.dot(Ka),c=Yi.dot(Ka);if(l<=0&&c<=0)return t.copy(n);$a.subVectors(e,i);const u=qi.dot($a),h=Yi.dot($a);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(qi,a);Za.subVectors(e,r);const f=qi.dot(Za),g=Yi.dot(Za);if(g>=0&&f<=g)return t.copy(r);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Yi,o);const v=u*g-f*h;if(v<=0&&h-u>=0&&f-g>=0)return Lc.subVectors(r,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Lc,o);const m=1/(v+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class si{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Er.subVectors(this.max,Ds),Ki.subVectors(e.a,Ds),$i.subVectors(e.b,Ds),Zi.subVectors(e.c,Ds),hi.subVectors($i,Ki),di.subVectors(Zi,$i),Ti.subVectors(Ki,Zi);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ti.z,Ti.y,hi.z,0,-hi.x,di.z,0,-di.x,Ti.z,0,-Ti.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ti.y,Ti.x,0];return!eo(t,Ki,$i,Zi,Er)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,Ki,$i,Zi,Er))?!1:(wr.crossVectors(hi,di),t=[wr.x,wr.y,wr.z],eo(t,Ki,$i,Zi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new L,new L,new L,new L,new L,new L,new L,new L],_n=new L,Tr=new si,Ki=new L,$i=new L,Zi=new L,hi=new L,di=new L,Ti=new L,Ds=new L,Er=new L,wr=new L,Ei=new L;function eo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ei.fromArray(s,r);const o=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const It=new L,Ar=new ze;let Cf=0;class Ft extends Si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class gh extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vh extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Rf=new si,Ns=new L,to=new L;class Hn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(to)),this.expandByPoint(Ns.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Lf=0;const on=new qe,no=new bt,Ji=new L,en=new si,Us=new si,zt=new L;class Tt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?vh:gh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(en.min,Us.min),en.expandByPoint(zt),zt.addVectors(en.max,Us.max),en.expandByPoint(zt)):(en.expandByPoint(Us.min),en.expandByPoint(Us.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(e,c),zt.add(Ji)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;const c=new L,u=new L,h=new L,d=new ze,f=new ze,g=new ze,y=new L,v=new L;function m(_,w,R){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,R),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),v.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[_].add(y),o[w].add(y),o[R].add(y),l[_].add(v),l[w].add(v),l[R].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,w=b.length;_<w;++_){const R=b[_],C=R.start,N=R.count;for(let U=C,I=C+N;U<I;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const E=new L,p=new L,x=new L,M=new L;function T(_){x.fromBufferAttribute(i,_),M.copy(x);const w=o[_];E.copy(w),E.sub(x.multiplyScalar(x.dot(w))).normalize(),p.crossVectors(M,w);const C=p.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,C)}for(let _=0,w=b.length;_<w;++_){const R=b[_],C=R.start,N=R.count;for(let U=C,I=C+N;U<I;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),y=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,v),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let y=0,v=l.length;y<v;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Ft(d,u,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _h{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const $t=new L;class dr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const io=new L,If=new L,Pf=new Ye;class mi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=io.subVectors(n,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(io),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pf.getNormalMatrix(e),i=this.coplanarPoint(io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Df=0;class En extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Qs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=sr,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xh extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qi;const Fs=new L,ji=new L,es=new L,ts=new ze,Os=new ze,yh=new qe,Cr=new L,Bs=new L,Rr=new L,Ic=new ze,so=new ze,Pc=new ze;class Nf extends bt{constructor(e=new xh){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _h(t,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new dr(n,3,0,!1)),Qi.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=Qi,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-es.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Lr(Cr.set(-.5,-.5,0),es,a,ji,i,r),Lr(Bs.set(.5,-.5,0),es,a,ji,i,r),Lr(Rr.set(.5,.5,0),es,a,ji,i,r),Ic.set(0,0),so.set(1,0),Pc.set(1,1);let o=e.ray.intersectTriangle(Cr,Bs,Rr,!1,Fs);if(o===null&&(Lr(Bs.set(-.5,.5,0),es,a,ji,i,r),so.set(0,1),o=e.ray.intersectTriangle(Cr,Rr,Bs,!1,Fs),o===null))return;const l=e.ray.origin.distanceTo(Fs);l<e.near||l>e.far||t.push({distance:l,point:Fs.clone(),uv:cn.getInterpolation(Fs,Cr,Bs,Rr,Ic,so,Pc,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lr(s,e,t,n,i,r){ts.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Os.x=r*ts.x-i*ts.y,Os.y=i*ts.x+r*ts.y):Os.copy(ts),s.copy(e),s.x+=Os.x,s.y+=Os.y,s.applyMatrix4(yh)}const Kn=new L,ro=new L,Ir=new L,Pr=new L;class _r{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ro.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(ro);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Pr.dot(this.direction),l=-Pr.dot(Ir),c=Pr.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ro).addScaledVector(Ir,d),f}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,v=t.z-a.z,m=n.x-a.x,b=n.y-a.y,E=n.z-a.z,p=Math.abs(l),x=Math.abs(c),M=Math.abs(u);let T,_,w,R,C,N,U,I,O,H,G,K;if(p>=x&&p>=M?(w=l,N=h,O=g,K=m,l>=0?(T=c,_=u,R=d,C=f,U=y,I=v,H=b,G=E):(T=u,_=c,R=f,C=d,U=v,I=y,H=E,G=b)):x>=M?(w=c,N=d,O=y,K=b,c>=0?(T=u,_=l,R=f,C=h,U=v,I=g,H=E,G=m):(T=l,_=u,R=h,C=f,U=g,I=v,H=m,G=E)):(w=u,N=f,O=v,K=E,u>=0?(T=l,_=c,R=h,C=d,U=g,I=y,H=m,G=b):(T=c,_=l,R=d,C=h,U=y,I=g,H=b,G=m)),w===0)return null;const $=T/w,ne=_/w,te=1/w,Re=R-$*N,Le=C-ne*N,ce=U-$*O,fe=I-ne*O,We=H-$*K,Z=G-ne*K,F=We*fe-Z*ce,W=Re*Z-Le*We,se=ce*Le-fe*Re;if(i){if(F<0||W<0||se<0)return null}else if((F<0||W<0||se<0)&&(F>0||W>0||se>0))return null;const re=F+W+se;if(re===0)return null;const Q=te*(F*N+W*O+se*K);return(re>0?Q<0:Q>0)?null:this.at(Q/re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Di extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dc=new qe,wi=new _r,Dr=new Hn,Nc=new L,Nr=new L,Ur=new L,Fr=new L,ao=new L,Or=new L,Uc=new L,Br=new L;class rt extends bt{constructor(e=new Tt,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ao.fromBufferAttribute(h,e),a?Or.addScaledVector(ao,u):Or.addScaledVector(ao.sub(t),u))}t.add(Or)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Dr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Dr,Nc)===null||wi.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Dc.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const v=d[g],m=a[v.materialIndex],b=Math.max(v.start,f.start),E=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let p=b,x=E;p<x;p+=3){const M=o.getX(p),T=o.getX(p+1),_=o.getX(p+2);i=zr(this,m,e,n,c,u,h,M,T,_),i&&(i.faceIndex=Math.floor(p/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let v=g,m=y;v<m;v+=3){const b=o.getX(v),E=o.getX(v+1),p=o.getX(v+2);i=zr(this,a,e,n,c,u,h,b,E,p),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const v=d[g],m=a[v.materialIndex],b=Math.max(v.start,f.start),E=Math.min(l.count,Math.min(v.start+v.count,f.start+f.count));for(let p=b,x=E;p<x;p+=3){const M=p,T=p+1,_=p+2;i=zr(this,m,e,n,c,u,h,M,T,_),i&&(i.faceIndex=Math.floor(p/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let v=g,m=y;v<m;v+=3){const b=v,E=v+1,p=v+2;i=zr(this,a,e,n,c,u,h,b,E,p),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function Uf(s,e,t,n,i,r,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===yi,o),l===null)return null;Br.copy(o),Br.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:s}}function zr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Nr),s.getVertexPosition(l,Ur),s.getVertexPosition(c,Fr);const u=Uf(s,e,t,n,Nr,Ur,Fr,Uc);if(u){const h=new L;cn.getBarycoord(Uc,Nr,Ur,Fr,h),i&&(u.uv=cn.getInterpolatedAttribute(i,o,l,c,h,new ze)),r&&(u.uv1=cn.getInterpolatedAttribute(r,o,l,c,h,new ze)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};cn.getNormal(Nr,Ur,Fr,d.normal),u.face=d,u.barycoord=h}return u}const zs=new Ke,Fc=new Ke,Oc=new Ke,Ff=new Ke,Bc=new qe,kr=new L,oo=new Hn,zc=new qe,lo=new _r;class Of extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingSphere.expandByPoint(kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1&&(zc.copy(i).invert(),lo.copy(e.ray).applyMatrix4(zc),!(this.boundingBox!==null&&lo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Fc.fromBufferAttribute(i.attributes.skinIndex,e),Oc.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(zs.copy(t),t.set(0,0,0,0)):(zs.set(...t,1),t.set(0,0,0)),zs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Oc.getComponent(r);if(a!==0){const o=Fc.getComponent(r);Bc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ff.copy(zs).applyMatrix4(Bc),a)}}return t.isVector4&&(t.w=zs.w),t.applyMatrix4(this.bindMatrixInverse)}}class Mh extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kl extends Ut{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Nt,u=Nt,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=new qe,Bf=new qe;class Vl{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Bf;kc.multiplyMatrices(o,t[r]),kc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new kl(t,e,e,hn,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Be("Skeleton: No bone found with UUID:",r),a=new Mh),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Sn extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new qe,Vc=new qe,Vr=[],Hc=new si,zf=new qe,ks=new rt,Vs=new Hn;class Sh extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Hc.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(Hc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Vs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ns),Vc.multiplyMatrices(n,ns),ks.matrixWorld=Vc,ks.raycast(e,Vr);for(let a=0,o=Vr.length;a<o;a++){const l=Vr[a];l.instanceId=r,l.object=this,t.push(l)}Vr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kl(new Float32Array(i*this.count),i,this.count,Rl,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ai=new Hn,kf=new ze(.5,.5),Hr=new L;class Hl{constructor(e=new mi,t=new mi,n=new mi,i=new mi,r=new mi,a=new mi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],y=r[9],v=r[10],m=r[11],b=r[12],E=r[13],p=r[14],x=r[15];if(i[0].setComponents(c-a,f-u,m-g,x-b).normalize(),i[1].setComponents(c+a,f+u,m+g,x+b).normalize(),i[2].setComponents(c+o,f+h,m+y,x+E).normalize(),i[3].setComponents(c-o,f-h,m-y,x-E).normalize(),n)i[4].setComponents(l,d,v,p).normalize(),i[5].setComponents(c-l,f-d,m-v,x-p).normalize();else if(i[4].setComponents(c-l,f-d,m-v,x-p).normalize(),t===Fn)i[5].setComponents(c+l,f+d,m+v,x+p).normalize();else if(t===ur)i[5].setComponents(l,d,v,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=kf.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hr.x=i.normal.x>0?e.max.x:e.min.x,Hr.y=i.normal.y>0?e.max.y:e.min.y,Hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bh extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ga=new L,va=new L,Gc=new qe,Hs=new _r,Gr=new Hn,co=new L,Wc=new L;class Gl extends bt{constructor(e=new Tt,t=new bh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ga.fromBufferAttribute(t,i-1),va.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ga.distanceTo(va);e.setAttribute("lineDistance",new mt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;Gc.copy(i).invert(),Hs.copy(e.ray).applyMatrix4(Gc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,v=g-1;y<v;y+=c){const m=u.getX(y),b=u.getX(y+1),E=Wr(this,e,Hs,l,m,b,y);E&&t.push(E)}if(this.isLineLoop){const y=u.getX(g-1),v=u.getX(f),m=Wr(this,e,Hs,l,y,v,g-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,v=g-1;y<v;y+=c){const m=Wr(this,e,Hs,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){const y=Wr(this,e,Hs,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(ga.fromBufferAttribute(o,i),va.fromBufferAttribute(o,r),t.distanceSqToSegment(ga,va,co,Wc)>n)return;co.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(co);if(!(c<e.near||c>e.far))return{distance:c,point:Wc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Xc=new L,qc=new L;class Vf extends Gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Xc.fromBufferAttribute(t,i),qc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xc.distanceTo(qc);e.setAttribute("lineDistance",new mt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hf extends Gl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Th extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yc=new qe,pl=new _r,Xr=new Hn,qr=new L;class Gf extends bt{constructor(e=new Tt,t=new Th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;Yc.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){const v=c.getX(g);qr.fromBufferAttribute(h,v),Kc(qr,v,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,y=f;g<y;g++)qr.fromBufferAttribute(h,g),Kc(qr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kc(s,e,t,n,i,r,a){const o=pl.distanceSqToPoint(s);if(o<t){const l=new L;pl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Eh extends Ut{constructor(e=[],t=Fi,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wh extends Ut{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ms extends Ut{constructor(e,t,n=wn,i,r,a,o=Nt,l=Nt,c,u=ii,h=1){if(u!==ii&&u!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Wf extends Ms{constructor(e,t=wn,n=Fi,i,r,a=Nt,o=Nt,l,c=ii){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ah extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ni extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function g(y,v,m,b,E,p,x,M,T,_,w){const R=p/T,C=x/_,N=p/2,U=x/2,I=M/2,O=T+1,H=_+1;let G=0,K=0;const $=new L;for(let ne=0;ne<H;ne++){const te=ne*C-U;for(let Re=0;Re<O;Re++){const Le=Re*R-N;$[y]=Le*b,$[v]=te*E,$[m]=I,c.push($.x,$.y,$.z),$[y]=0,$[v]=0,$[m]=M>0?1:-1,u.push($.x,$.y,$.z),h.push(Re/T),h.push(1-ne/_),G+=1}}for(let ne=0;ne<_;ne++)for(let te=0;te<T;te++){const Re=d+te+O*ne,Le=d+te+O*(ne+1),ce=d+(te+1)+O*(ne+1),fe=d+(te+1)+O*ne;l.push(Re,Le,fe),l.push(Le,ce,fe),K+=6}o.addGroup(f,K,w),f+=K,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ms extends Tt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const y=[],v=n/2;let m=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function b(){const p=new L,x=new L;let M=0;const T=(t-e)/n;for(let _=0;_<=r;_++){const w=[],R=_/r,C=R*(t-e)+e;for(let N=0;N<=i;N++){const U=N/i,I=U*l+o,O=Math.sin(I),H=Math.cos(I);x.x=C*O,x.y=-R*n+v,x.z=C*H,h.push(x.x,x.y,x.z),p.set(O,T,H).normalize(),d.push(p.x,p.y,p.z),f.push(U,1-R),w.push(g++)}y.push(w)}for(let _=0;_<i;_++)for(let w=0;w<r;w++){const R=y[w][_],C=y[w+1][_],N=y[w+1][_+1],U=y[w][_+1];(e>0||w!==0)&&(u.push(R,C,U),M+=3),(t>0||w!==r-1)&&(u.push(C,N,U),M+=3)}c.addGroup(m,M,0),m+=M}function E(p){const x=g,M=new ze,T=new L;let _=0;const w=p===!0?e:t,R=p===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,v*R,0),d.push(0,R,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=i;N++){const I=N/i*l+o,O=Math.cos(I),H=Math.sin(I);T.x=w*H,T.y=v*R,T.z=w*O,h.push(T.x,T.y,T.z),d.push(0,R,0),M.x=O*.5+.5,M.y=H*.5*R+.5,f.push(M.x,M.y),g++}for(let N=0;N<i;N++){const U=x+N,I=C+N;p===!0?u.push(I,I+1,U):u.push(I+1,I,U),_+=3}c.addGroup(m,_,p===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ea extends Tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const E=new L,p=new L,x=new L;for(let M=0;M<t.length;M+=3)f(t[M+0],E),f(t[M+1],p),f(t[M+2],x),l(E,p,x,b)}function l(b,E,p,x){const M=x+1,T=[];for(let _=0;_<=M;_++){T[_]=[];const w=b.clone().lerp(p,_/M),R=E.clone().lerp(p,_/M),C=M-_;for(let N=0;N<=C;N++)N===0&&_===M?T[_][N]=w:T[_][N]=w.clone().lerp(R,N/C)}for(let _=0;_<M;_++)for(let w=0;w<2*(M-_)-1;w++){const R=Math.floor(w/2);w%2===0?(d(T[_][R+1]),d(T[_+1][R]),d(T[_][R])):(d(T[_][R+1]),d(T[_+1][R+1]),d(T[_+1][R]))}}function c(b){const E=new L;for(let p=0;p<r.length;p+=3)E.x=r[p+0],E.y=r[p+1],E.z=r[p+2],E.normalize().multiplyScalar(b),r[p+0]=E.x,r[p+1]=E.y,r[p+2]=E.z}function u(){const b=new L;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];const p=v(b)/2/Math.PI+.5,x=m(b)/Math.PI+.5;a.push(p,1-x)}g(),h()}function h(){for(let b=0;b<a.length;b+=6){const E=a[b+0],p=a[b+2],x=a[b+4],M=Math.max(E,p,x),T=Math.min(E,p,x);M>.9&&T<.1&&(E<.2&&(a[b+0]+=1),p<.2&&(a[b+2]+=1),x<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,E){const p=b*3;E.x=e[p+0],E.y=e[p+1],E.z=e[p+2]}function g(){const b=new L,E=new L,p=new L,x=new L,M=new ze,T=new ze,_=new ze;for(let w=0,R=0;w<r.length;w+=9,R+=6){b.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),p.set(r[w+6],r[w+7],r[w+8]),M.set(a[R+0],a[R+1]),T.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),x.copy(b).add(E).add(p).divideScalar(3);const C=v(x);y(M,R+0,b,C),y(T,R+2,E,C),y(_,R+4,p,C)}}function y(b,E,p,x){x<0&&b.x===1&&(a[E]=b.x-1),p.x===0&&p.z===0&&(a[E]=x/2/Math.PI+.5)}function v(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.vertices,e.indices,e.radius,e.detail)}}class Xf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ze:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,i=[],r=[],a=[],o=new L,l=new qe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(et(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Wl(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const $c=new L,Zc=new L,uo=new Wl,ho=new Wl,fo=new Wl;class qf extends Xf{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Zc.subVectors(i[0],i[1]).add(i[0]),c=Zc);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:($c.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=$c),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),v<1e-4&&(v=y),uo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,y,v),ho.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,y,v),fo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,y,v)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ho.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),fo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(uo.calc(l),ho.calc(l),fo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Xl extends Ea{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xl(e.radius,e.detail)}}class wa extends Ea{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wa(e.radius,e.detail)}}class Bi extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],y=[],v=[];for(let m=0;m<u;m++){const b=m*d-a;for(let E=0;E<c;E++){const p=E*h-r;g.push(p,-b,0),y.push(0,0,1),v.push(E/o),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const E=b+c*m,p=b+c*(m+1),x=b+1+c*(m+1),M=b+1+c*m;f.push(E,p,M),f.push(p,x,M)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(y,3)),this.setAttribute("uv",new mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends Tt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new L,g=new ze;for(let y=0;y<=i;y++){for(let v=0;v<=n;v++){const m=r+v/n*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let y=0;y<i;y++){const v=y*(n+1);for(let m=0;m<n;m++){const b=m+v,E=b,p=b+n+1,x=b+n+2,M=b+1;o.push(E,p,M),o.push(p,x,M)}}this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yl extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],g=[],y=[],v=[];for(let m=0;m<=n;m++){const b=[],E=m/n,p=a+E*o,x=e*Math.cos(p),M=Math.sqrt(e*e-x*x);let T=0;m===0&&a===0?T=.5/t:m===n&&l===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){const w=_/t,R=i+w*r;h.x=-M*Math.cos(R),h.y=x,h.z=M*Math.sin(R),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),v.push(w+T,1-E),b.push(c++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){const E=u[m][b+1],p=u[m][b],x=u[m+1][b],M=u[m+1][b+1];(m!==0||a>0)&&f.push(E,p,M),(m!==n-1||l<Math.PI)&&f.push(p,x,M)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(y,3)),this.setAttribute("uv",new mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ss extends Tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],h=[],d=new L,f=new L,g=new L;for(let y=0;y<=n;y++){const v=a+y/n*o;for(let m=0;m<=i;m++){const b=m/i*r;f.x=(e+t*Math.cos(v))*Math.cos(b),f.y=(e+t*Math.cos(v))*Math.sin(b),f.z=t*Math.sin(v),c.push(f.x,f.y,f.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),h.push(m/i),h.push(y/n)}}for(let y=1;y<=n;y++)for(let v=1;v<=i;v++){const m=(i+1)*y+v-1,b=(i+1)*(y-1)+v-1,E=(i+1)*(y-1)+v,p=(i+1)*y+v;l.push(m,b,p),l.push(b,E,p)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Jc(i))i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Jc(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Zt(s){const e={};for(let t=0;t<s.length;t++){const n=bs(s[t]);for(const i in n)e[i]=n[i]}return e}function Jc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Yf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ch(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Kf={clone:bs,merge:Zt};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mt extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new we().setHex(i.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jf extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ni extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends Ni{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qf extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jf extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function gi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function aa(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function ep(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function tp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ws{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class np extends ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cs,endingEnd:cs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case us:r=e,o=2*t-n;break;case fa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case us:a=e,l=2*n-t;break;case fa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,v=y*g,m=-d*v+2*d*y-d*g,b=(1+d)*v+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-f)*v+(1.5+f)*y+.5*g,p=f*v-f*y;for(let x=0;x!==o;++x)r[x]=m*a[u+x]+b*a[c+x]+E*a[l+x]+p*a[h+x];return r}}class Rh extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class ip extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class sp extends ws{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const g=(n-t)/(i-t),y=1-g;for(let v=0;v!==o;++v)r[v]=a[c+v]*y+a[l+v]*g;return r}const d=o*2,f=e-1;for(let g=0;g!==o;++g){const y=a[c+g],v=a[l+g],m=f*d+g*2,b=h[m],E=h[m+1],p=e*d+g*2,x=u[p],M=u[p+1],T=ap(n,t,b,x,i);r[g]=Lh(T,y,E,M,v)}return r}}function Lh(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function rp(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function ap(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=Lh(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=rp(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gi(t,this.TimeBufferType),this.values=gi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gi(e.times,Array),values:gi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),aa(e.settings)&&(n.settings={inTangents:gi(e.settings.inTangents,Array),outTangents:gi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new sp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break;case vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;aa(this.settings)&&(jc(this.settings.inTangents,e),jc(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Kd(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ba,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const y=t[h+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,aa(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function jc(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=cr;class As extends Cn{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=lr;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ih extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}Ih.prototype.ValueTypeName="color";class fr extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}fr.prototype.ValueTypeName="number";class op extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ht.slerpFlat(r,0,a,c-o,a,c,l);return r}}class pr extends Cn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new op(this.times,this.values,this.getValueSize(),e)}}pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Cn{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=lr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class _a extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}_a.prototype.ValueTypeName="vector";class ml{constructor(e="",t=-1,n=[],i=Dl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Tn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cp(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=ep(l);l=Qc(l,1,u),c=Qc(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function lp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fr;case"vector":case"vector2":case"vector3":case"vector4":return _a;case"color":return Ih;case"quaternion":return pr;case"bool":case"boolean":return As;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function cp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lp(s.type);if(s.times===void 0){const n=[],i=[];tp(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),aa(s.settings)&&(t.settings={inTangents:gi(s.settings.inTangents,Float32Array),outTangents:gi(s.settings.outTangents,Float32Array)}),t}const jn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(eu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!eu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function eu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class up{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const hp=new up;class Rs{constructor(e){this.manager=e!==void 0?e:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class dp extends Error{constructor(e,t){super(e),this.response=t}}class Ph extends Rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$n[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let y=0;const v=new ReadableStream({start(m){b();function b(){h.read().then(({done:E,value:p})=>{if(E)m.close();else{y+=p.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let M=0,T=u.length;M<T;M++){const _=u[M];_.onProgress&&_.onProgress(x)}m.enqueue(p),b()}},E=>{m.error(E)})}}});return new Response(v)}else throw new dp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{jn.add(`file:${e}`,c);const u=$n[e];delete $n[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const is=new WeakMap;class fp extends Rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=jn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=is.get(a);h===void 0&&(h=[],is.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=hr("img");function l(){u(),t&&t(this);const h=is.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}is.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),jn.remove(`image:${e}`);const d=is.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),jn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class pp extends Rs{constructor(e){super(e)}load(e,t,n,i){const r=new Ut,a=new fp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Aa extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mp extends Aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const po=new qe,tu=new L,nu=new L;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(tu),nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(po,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===ur||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yr=new L,Kr=new Ht,In=new L;class $l extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,Kr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Kr,In.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yr,Kr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Kr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,iu=new ze,su=new ze;class qt extends $l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,iu,su),t.subVectors(su,iu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gp extends Kl{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ys*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class vp extends Aa{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class _p extends Kl{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}}class Dh extends Aa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _p}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ca extends $l{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xp extends Kl{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nh extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new xp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class tr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yp extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const mo=new WeakMap;class Mp extends Rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=jn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{mo.has(a)===!0?(i&&i(mo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return jn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),mo.set(l,c),jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ss=-90,rs=1;class Sp extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(ss,rs,e,t);i.layers=this.layers,this.add(i);const r=new qt(ss,rs,e,t);r.layers=this.layers,this.add(r);const a=new qt(ss,rs,e,t);a.layers=this.layers,this.add(a);const o=new qt(ss,rs,e,t);o.layers=this.layers,this.add(o);const l=new qt(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new qt(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bp extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ht.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Ht.multiplyQuaternionsFlat(e,a,e,t,e,n),Ht.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Zl="\\[\\]\\.:\\/",Ep=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",wp="[^"+Zl.replace("\\.","")+"]",Ap=/((?:WC+[\/:])*)/.source.replace("WC",Jl),Cp=/(WCOD+)?/.source.replace("WCOD",wp),Rp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Ip=new RegExp("^"+Ap+Cp+Rp+Lp+"$"),Pp=["material","materials","bones","map"];class Dp{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ep,"")}static parseTrackName(e){const t=Ip.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Pp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=Dp;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Np{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:cs,endingEnd:cs};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Nd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Fd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Dl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Ud;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Dd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=us,i.endingEnd=us):(e?i.endingStart=this.zeroSlopeAtStart?us:cs:i.endingStart=fa,t?i.endingEnd=this.zeroSlopeAtEnd?us:cs:i.endingEnd=fa)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Up=new Float32Array(1);class Fp extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const y=t&&t._propertyBindings[h].binding.parsedPath;g=new Tp(ht.create(n,f,y),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Rh(new Float32Array(2),new Float32Array(2),1,Up),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?ml.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Dl),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Np(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ml.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const ru=new qe;class au{constructor(e,t,n=0,i=1/0){this.ray=new _r(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ru),this}intersectObject(e,t=!0,n=[]){return gl(e,this,n,t),n.sort(ou),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)gl(e[i],this,n,t);return n.sort(ou),n}}function ou(s,e){return s.distance-e.distance}function gl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)gl(r[a],e,t,!0)}}class Op{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Uh{static{Uh.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}function lu(s,e,t,n){const i=Bp(n);switch(t){case lh:return s*e;case Rl:return s*e/i.components*i.byteLength;case Ll:return s*e/i.components*i.byteLength;case Oi:return s*e*2/i.components*i.byteLength;case Il:return s*e*2/i.components*i.byteLength;case ch:return s*e*3/i.components*i.byteLength;case hn:return s*e*4/i.components*i.byteLength;case Pl:return s*e*4/i.components*i.byteLength;case na:case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fo:case Bo:return Math.max(s,16)*Math.max(e,8)/4;case Uo:case Oo:return Math.max(s,8)*Math.max(e,8)/2;case zo:case ko:case Ho:case Go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vo:case ha:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rl:case al:case ol:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ll:case cl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case da:case ul:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bp(s){switch(s){case nn:case sh:return{byteLength:1,components:1};case ar:case rh:case An:return{byteLength:2,components:1};case Al:case Cl:return{byteLength:2,components:4};case wn:case wl:case un:return{byteLength:4,components:1};case ah:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fh(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zp(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const y=h[f];s.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:kp,alphahash_pars_fragment:Vp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Kp,batching_vertex:$p,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:jp,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:am,color_pars_vertex:om,color_vertex:lm,common:cm,cube_uv_reflection_fragment:um,defaultnormal_vertex:hm,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:vm,envmap_fragment:_m,envmap_common_pars_fragment:xm,envmap_pars_fragment:ym,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Pm,envmap_vertex:Sm,fog_vertex:bm,fog_pars_vertex:Tm,fog_fragment:Em,fog_pars_fragment:wm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Cm,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Im,lights_toon_fragment:Dm,lights_toon_pars_fragment:Nm,lights_phong_fragment:Um,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:Bm,lights_fragment_begin:zm,lights_fragment_maps:km,lights_fragment_end:Vm,lightprobes_pars_fragment:Hm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Km,map_particle_fragment:$m,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphinstance_vertex:jm,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:v0,dithering_fragment:_0,dithering_pars_fragment:x0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:b0,shadowmap_vertex:T0,shadowmask_pars_fragment:E0,skinbase_vertex:w0,skinning_pars_vertex:A0,skinning_vertex:C0,skinnormal_vertex:R0,specularmap_fragment:L0,specularmap_pars_fragment:I0,tonemapping_fragment:P0,tonemapping_pars_fragment:D0,transmission_fragment:N0,transmission_pars_fragment:U0,uv_pars_fragment:F0,uv_pars_vertex:O0,uv_vertex:B0,worldpos_vertex:z0,background_vert:k0,background_frag:V0,backgroundCube_vert:H0,backgroundCube_frag:G0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:Y0,distance_vert:K0,distance_frag:$0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:j0,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:ug,meshphysical_frag:hg,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:vg,sprite_vert:_g,sprite_frag:xg},Me={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Nn={basic:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new we(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Zt([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Zt([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Zt([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Zt([Me.common,Me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Zt([Me.lights,Me.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Nn.physical={uniforms:Zt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const $r={r:0,b:0,g:0},yg=new qe,Oh=new Ye;Oh.set(-1,0,0,0,1,0,0,0,1);function Mg(s,e,t,n,i,r){const a=new we(0);let o=i===!0?0:1,l,c,u=null,h=0,d=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){const p=b.backgroundBlurriness>0;E=e.get(E,p)}return E}function g(b){let E=!1;const p=f(b);p===null?v(a,o):p&&p.isColor&&(v(p,1),E=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,E){const p=f(E);p&&(p.isCubeTexture||p.mapping===Ta)?(c===void 0&&(c=new rt(new ni(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:bs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(E.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Oh),c.material.toneMapped=it.getTransfer(p.colorSpace)!==dt,(u!==p||h!==p.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=p,h=p.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(l===void 0&&(l=new rt(new Bi(2,2),new Mt({name:"BackgroundMaterial",uniforms:bs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=p,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=it.getTransfer(p.colorSpace)!==dt,p.matrixAutoUpdate===!0&&p.updateMatrix(),l.material.uniforms.uvTransform.value.copy(p.matrix),(u!==p||h!==p.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=p,h=p.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function v(b,E){b.getRGB($r,Ch(s)),t.buffers.color.setClear($r.r,$r.g,$r.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,v(a,o)},render:g,addToRenderList:y,dispose:m}}function Sg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(C,N,U,I,O){let H=!1;const G=h(C,I,U,N);r!==G&&(r=G,c(r.object)),H=f(C,I,U,O),H&&g(C,I,U,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,p(C,N,U,I),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function u(C){return s.deleteVertexArray(C)}function h(C,N,U,I){const O=I.wireframe===!0;let H=n[N.id];H===void 0&&(H={},n[N.id]=H);const G=C.isInstancedMesh===!0?C.id:0;let K=H[G];K===void 0&&(K={},H[G]=K);let $=K[U.id];$===void 0&&($={},K[U.id]=$);let ne=$[O];return ne===void 0&&(ne=d(l()),$[O]=ne),ne}function d(C){const N=[],U=[],I=[];for(let O=0;O<t;O++)N[O]=0,U[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:I,object:C,attributes:{},index:null}}function f(C,N,U,I){const O=r.attributes,H=N.attributes;let G=0;const K=U.getAttributes();for(const $ in K)if(K[$].location>=0){const te=O[$];let Re=H[$];if(Re===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Re=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Re=C.instanceColor)),te===void 0||te.attribute!==Re||Re&&te.data!==Re.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function g(C,N,U,I){const O={},H=N.attributes;let G=0;const K=U.getAttributes();for(const $ in K)if(K[$].location>=0){let te=H[$];te===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const Re={};Re.attribute=te,te&&te.data&&(Re.data=te.data),O[$]=Re,G++}r.attributes=O,r.attributesNum=G,r.index=I}function y(){const C=r.newAttributes;for(let N=0,U=C.length;N<U;N++)C[N]=0}function v(C){m(C,0)}function m(C,N){const U=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;U[C]=1,I[C]===0&&(s.enableVertexAttribArray(C),I[C]=1),O[C]!==N&&(s.vertexAttribDivisor(C,N),O[C]=N)}function b(){const C=r.newAttributes,N=r.enabledAttributes;for(let U=0,I=N.length;U<I;U++)N[U]!==C[U]&&(s.disableVertexAttribArray(U),N[U]=0)}function E(C,N,U,I,O,H,G){G===!0?s.vertexAttribIPointer(C,N,U,O,H):s.vertexAttribPointer(C,N,U,I,O,H)}function p(C,N,U,I){y();const O=I.attributes,H=U.getAttributes(),G=N.defaultAttributeValues;for(const K in H){const $=H[K];if($.location>=0){let ne=O[K];if(ne===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor)),ne!==void 0){const te=ne.normalized,Re=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const ce=Le.buffer,fe=Le.type,We=Le.bytesPerElement,Z=fe===s.INT||fe===s.UNSIGNED_INT||ne.gpuType===wl;if(ne.isInterleavedBufferAttribute){const F=ne.data,W=F.stride,se=ne.offset;if(F.isInstancedInterleavedBuffer){for(let re=0;re<$.locationSize;re++)m($.location+re,F.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let re=0;re<$.locationSize;re++)v($.location+re);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let re=0;re<$.locationSize;re++)E($.location+re,Re/$.locationSize,fe,te,W*We,(se+Re/$.locationSize*re)*We,Z)}else{if(ne.isInstancedBufferAttribute){for(let F=0;F<$.locationSize;F++)m($.location+F,ne.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let F=0;F<$.locationSize;F++)v($.location+F);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let F=0;F<$.locationSize;F++)E($.location+F,Re/$.locationSize,fe,te,Re*We,Re/$.locationSize*F*We,Z)}}else if(G!==void 0){const te=G[K];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv($.location,te);break;case 3:s.vertexAttrib3fv($.location,te);break;case 4:s.vertexAttrib4fv($.location,te);break;default:s.vertexAttrib1fv($.location,te)}}}}b()}function x(){w();for(const C in n){const N=n[C];for(const U in N){const I=N[U];for(const O in I){const H=I[O];for(const G in H)u(H[G].object),delete H[G];delete I[O]}}delete n[C]}}function M(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const U in N){const I=N[U];for(const O in I){const H=I[O];for(const G in H)u(H[G].object),delete H[G];delete I[O]}}delete n[C.id]}function T(C){for(const N in n){const U=n[N];for(const I in U){const O=U[I];if(O[C.id]===void 0)continue;const H=O[C.id];for(const G in H)u(H[G].object),delete H[G];delete O[C.id]}}}function _(C){for(const N in n){const U=n[N],I=C.isInstancedMesh===!0?C.id:0,O=U[I];if(O!==void 0){for(const H in O){const G=O[H];for(const K in G)u(G[K].object),delete G[K];delete O[H]}delete U[I],Object.keys(U).length===0&&delete n[N]}}}function w(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:v,disableUnusedAttributes:b}}function bg(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==hn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const _=T===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==nn&&T!==un&&!_&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),p=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:p,maxSamples:x,samples:M}}function Eg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new mi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!v)r?u(null):c();else{const b=r?0:n,E=b*4;let p=m.clippingState||null;l.value=p,p=u(g,d,E,f);for(let x=0;x!==E;++x)p[x]=t[x];m.clippingState=p,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const m=f+y*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(v===null||v.length<m)&&(v=new Float32Array(m));for(let E=0,p=f;E!==y;++E,p+=4)a.copy(h[E]).applyMatrix4(b,o),a.normal.toArray(v,p),v[p+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}const hs=4,wg=6,Ag=20,Cg=256,Gs=new Ca,cu=new we;let go=null,vo=0,_o=0,xo=!1;const Rg=new L,Ci=new L;class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Rg}=r;go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(go,vo,_o),this._renderer.xr.enabled=xo,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:An,format:hn,colorSpace:rn,depthBuffer:!1},i=hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lg(r)),this._blurMaterial=Pg(r,e,t),this._ggxMaterial=Ig(r,e,t)}return i}_compileMaterial(e){const t=new rt(new Tt,e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,n,i,r){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(cu),h.toneMapping=Bn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new ni,new Di({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,v=y.material;let m=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,m=!0):(v.color.copy(cu),m=!0);for(let E=0;E<6;E++){const p=E%3;p===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):p===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const x=this._cubeSize;as(i,p*x,E>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(y,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fi||e.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:g}=this,y=this._sizeLods[n],v=3*y*(n>g-hs?n-g+hs:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,as(r,v,m,3*y,2*y),i.setRenderTarget(r),i.render(o,Gs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,as(e,v,m,3*y,2*y),i.setRenderTarget(e),i.render(o,Gs)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],h=3*u*(i>this._lodMax-hs?i-this._lodMax+hs:0),d=4*(this._cubeSize-u);as(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Gs)}}function Lg(s){const e=[],t=[];let n=s;const i=s-hs+1+wg;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,g=new Float32Array(f*d*h),y=new Float32Array(f*d*h);for(let m=0;m<h;m++){const b=m%3*2/3-1,E=m>2?0:-1,p=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];g.set(p,f*d*m);for(let x=0;x<d;x++){const M=u[x*2]*2-1,T=u[x*2+1]*2-1;m===0?Ci.set(1,T,M):m===1?Ci.set(-M,1,-T):m===2?Ci.set(-M,T,1):m===3?Ci.set(-1,T,-M):m===4?Ci.set(-M,-1,T):Ci.set(M,T,-1),Ci.toArray(y,(m*d+x)*f)}}const v=new Tt;v.setAttribute("position",new Ft(g,f)),v.setAttribute("outputDirection",new Ft(y,f)),t.push(new rt(v,null)),n>hs&&n--}return{lodMeshes:t,sizeLods:e}}function hu(s,e,t){const n=new dn(s,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ig(s,e,t){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Pg(s,e,t){return new Mt({name:"SphericalGaussianBlur",defines:{SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function du(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function fu(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bh extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ni(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ei});r.uniforms.tEquirect.value=t;const a=new rt(i,r),o=t.minFilter;return t.minFilter===Mn&&(t.minFilter=Ct),new Sp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function Dg(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Fa||f===Oa)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const y=new Bh(g.height);return y.fromEquirectangularTexture(s,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===Fa||f===Oa,y=f===Fi||f===_s;if(g||y){let v=t.get(d);const m=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new uu(s)),v=g?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const b=d.image;return g&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new uu(s)),v=g?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function o(d,f){return f===Fa?d.mapping=Fi:f===Oa&&(d.mapping=_s),d}function l(d){let f=0;const g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Ng(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fs("WebGLRenderer: "+n+" extension not supported."),i}}}function Ug(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const b=f.array;y=f.version;for(let E=0,p=b.length;E<p;E+=3){const x=b[E+0],M=b[E+1],T=b[E+2];d.push(x,M,M,T,T,x)}}else{const b=g.array;y=g.version;for(let E=0,p=b.length/3-1;E<p;E+=3){const x=E+0,M=E+1,T=E+2;d.push(x,M,M,T,T,x)}}const v=new(g.count>=65535?vh:gh)(d,1);v.version=y;const m=r.get(h);m&&e.remove(m),r.set(h,v)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fg(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){s.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let y=0;for(let v=0;v<f;v++)y+=d[v];t.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Og(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bg(s,e,t){const n=new WeakMap,i=new Ke;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let p=o.attributes.position.count*E,x=1;p>e.maxTextureSize&&(x=Math.ceil(p/e.maxTextureSize),p=e.maxTextureSize);const M=new Float32Array(p*x*4*h),T=new ph(M,p,x,h);T.type=un,T.needsUpdate=!0;const _=E*4;for(let R=0;R<h;R++){const C=v[R],N=m[R],U=b[R],I=p*x*4*R;for(let O=0;O<C.count;O++){const H=O*_;f===!0&&(i.fromBufferAttribute(C,O),M[I+H+0]=i.x,M[I+H+1]=i.y,M[I+H+2]=i.z,M[I+H+3]=0),g===!0&&(i.fromBufferAttribute(N,O),M[I+H+4]=i.x,M[I+H+5]=i.y,M[I+H+6]=i.z,M[I+H+7]=0),y===!0&&(i.fromBufferAttribute(U,O),M[I+H+8]=i.x,M[I+H+9]=i.y,M[I+H+10]=i.z,M[I+H+11]=U.itemSize===4?i.w:1)}}d={count:h,texture:T,size:new ze(p,x)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function zg(s,e,t,n,i){let r=new WeakMap;function a(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const kg={[$u]:"LINEAR_TONE_MAPPING",[Zu]:"REINHARD_TONE_MAPPING",[Ju]:"CINEON_TONE_MAPPING",[Qu]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[ju]:"CUSTOM_TONE_MAPPING"};function Vg(s,e,t,n,i,r){const a=new dn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Tt;c.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mt([0,2,0,0,2,0],2));const u=new Jf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new rt(c,u),d=new Ca(-1,1,1,-1,0,1);let f=null,g=null,y=!1,v,m=null,b=[],E=!1;this.setSize=function(p,x){a.setSize(p,x),o!==null&&o.setSize(p,x),l!==null&&l.setSize(p,x);for(let M=0;M<b.length;M++){const T=b[M];T.setSize&&T.setSize(p,x)}},this.setEffects=function(p){b=p,E=b.length>0&&b[0].isRenderPass===!0;const x=a.width,M=a.height;b.length>0&&o===null&&(o=new dn(x,M,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new dn(x,M,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){const _=b[T];_.setSize&&_.setSize(x,M)}},this.begin=function(p,x){if(y||p.toneMapping===Bn&&b.length===0)return!1;if(m=x,x!==null){const M=x.width,T=x.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return E===!1&&p.setRenderTarget(a),v=p.toneMapping,p.toneMapping=Bn,!0},this.hasRenderPass=function(){return E},this.end=function(p,x){p.toneMapping=v,y=!0;let M=a,T=o;for(let _=0;_<b.length;_++){const w=b[_];w.enabled!==!1&&(w.render(p,T,M,x),w.needsSwap!==!1&&(M=T,T=T===o?l:o))}if(f!==p.outputColorSpace||g!==p.toneMapping){f=p.outputColorSpace,g=p.toneMapping,u.defines={},it.getTransfer(f)===dt&&(u.defines.SRGB_TRANSFER="");const _=kg[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(m),p.render(h,d),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const zh=new Ut,vl=new Ms(1,1),kh=new ph,Vh=new yf,Hh=new Eh,pu=[],mu=[],gu=new Float32Array(16),vu=new Float32Array(9),_u=new Float32Array(4);function Ls(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=pu[i];if(r===void 0&&(r=new Float32Array(i),pu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function La(s,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Hg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function Wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;_u.set(n),s.uniformMatrix2fv(this.addr,!1,_u),Bt(t,n)}}function Yg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;vu.set(n),s.uniformMatrix3fv(this.addr,!1,vu),Bt(t,n)}}function Kg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;gu.set(n),s.uniformMatrix4fv(this.addr,!1,gu),Bt(t,n)}}function $g(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function jg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function tv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function nv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function iv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vl.compareFunction=t.isReversedDepthBuffer()?Ul:Nl,r=vl):r=zh,t.setTexture2D(e||r,i)}function sv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vh,i)}function rv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hh,i)}function av(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kh,i)}function ov(s){switch(s){case 5126:return Hg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Kg;case 5124:case 35670:return $g;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return av}}function lv(s,e){s.uniform1fv(this.addr,e)}function cv(s,e){const t=Ls(e,this.size,2);s.uniform2fv(this.addr,t)}function uv(s,e){const t=Ls(e,this.size,3);s.uniform3fv(this.addr,t)}function hv(s,e){const t=Ls(e,this.size,4);s.uniform4fv(this.addr,t)}function dv(s,e){const t=Ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fv(s,e){const t=Ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pv(s,e){const t=Ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mv(s,e){s.uniform1iv(this.addr,e)}function gv(s,e){s.uniform2iv(this.addr,e)}function vv(s,e){s.uniform3iv(this.addr,e)}function _v(s,e){s.uniform4iv(this.addr,e)}function xv(s,e){s.uniform1uiv(this.addr,e)}function yv(s,e){s.uniform2uiv(this.addr,e)}function Mv(s,e){s.uniform3uiv(this.addr,e)}function Sv(s,e){s.uniform4uiv(this.addr,e)}function bv(s,e,t){const n=this.cache,i=e.length,r=La(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=vl:a=zh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Tv(s,e,t){const n=this.cache,i=e.length,r=La(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Vh,r[a])}function Ev(s,e,t){const n=this.cache,i=e.length,r=La(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Hh,r[a])}function wv(s,e,t){const n=this.cache,i=e.length,r=La(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||kh,r[a])}function Av(s){switch(s){case 5126:return lv;case 35664:return cv;case 35665:return uv;case 35666:return hv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return _v;case 5125:return xv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return wv}}class Cv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ov(t.type)}}class Rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Av(t.type)}}class Lv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function xu(s,e){s.seq.push(e),s.map[e.id]=e}function Iv(s,e,t){const n=s.name,i=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),a=yo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){xu(t,c===void 0?new Cv(o,s,e):new Rv(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Lv(o),xu(t,h)),t=h}}}class oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Iv(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function yu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Pv=37297;let Dv=0;function Nv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Mu=new Ye;function Uv(s){it._getMatrix(Mu,it.workingColorSpace,s);const e=`mat3( ${Mu.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case pa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Su(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Nv(s.getShaderSource(e),o)}else return r}function Fv(s,e){const t=Uv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ov={[$u]:"Linear",[Zu]:"Reinhard",[Ju]:"Cineon",[Qu]:"ACESFilmic",[eh]:"AgX",[th]:"Neutral",[ju]:"Custom"};function Bv(s,e){const t=Ov[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new L;function zv(){it.getLuminanceCoefficients(Zr);const s=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Vv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function $s(s){return s!==""}function bu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(s){return s.replace(Gv,Xv)}const Wv=new Map;function Xv(s,e){let t=Qe[e];if(t===void 0){const n=Wv.get(e);if(n!==void 0)t=Qe[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _l(t)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(s){return s.replace(qv,Yv)}function Yv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kv={[Js]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function $v(s){return Kv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zv={[Fi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function Jv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Zv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qv={[_s]:"ENVMAP_MODE_REFRACTION"};function jv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Qv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e_={[Ku]:"ENVMAP_BLENDING_MULTIPLY",[Ld]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function t_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":e_[s.combine]||"ENVMAP_BLENDING_NONE"}function n_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function i_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$v(t),c=Jv(t),u=jv(t),h=t_(t),d=n_(t),f=kv(t),g=Vv(r),y=i.createProgram();let v,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`)):(v=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),m=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Fv("linearToOutputTexel",t.outputColorSpace),zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=_l(a),a=bu(a,t),a=Tu(a,t),o=_l(o),o=bu(o,t),o=Tu(o,t),a=Eu(a),o=Eu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=b+v+a,p=b+m+o,x=yu(i,i.VERTEX_SHADER,E),M=yu(i,i.FRAGMENT_SHADER,p);i.attachShader(y,x),i.attachShader(y,M),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function T(C){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(y)||"",U=i.getShaderInfoLog(x)||"",I=i.getShaderInfoLog(M)||"",O=N.trim(),H=U.trim(),G=I.trim();let K=!0,$=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,x,M);else{const ne=Su(i,x,"vertex"),te=Su(i,M,"fragment");Xe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+ne+`
`+te)}else O!==""?Be("WebGLProgram: Program Info Log:",O):(H===""||G==="")&&($=!1);$&&(C.diagnostics={runnable:K,programLog:O,vertexShader:{log:H,prefix:v},fragmentShader:{log:G,prefix:m}})}i.deleteShader(x),i.deleteShader(M),_=new oa(i,y),w=Hv(i,y)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(y,Pv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=x,this.fragmentShader=M,this}let s_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new a_(e),t.set(e,n)),n}}class a_{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}}function o_(s){return s===Oi||s===ha||s===da}function l_(s,e,t,n,i,r){const a=new Bl,o=new r_,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,w,R,C,N,U){const I=C.fog,O=N.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=e.get(_.envMap||H,G),$=K&&K.mapping===Ta?K.image.height:null,ne=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const te=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Re=te!==void 0?te.length:0;let Le=0;O.morphAttributes.position!==void 0&&(Le=1),O.morphAttributes.normal!==void 0&&(Le=2),O.morphAttributes.color!==void 0&&(Le=3);let ce,fe,We,Z;if(ne){const xt=Nn[ne];ce=xt.vertexShader,fe=xt.fragmentShader}else{ce=_.vertexShader,fe=_.fragmentShader;const xt=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,xt,ct),We=xt.id,Z=ct.id}const F=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),se=N.isInstancedMesh===!0,re=N.isBatchedMesh===!0,Q=!!_.map,Ie=!!_.matcap,pe=!!K,ue=!!_.aoMap,P=!!_.lightMap,de=!!_.bumpMap&&_.wireframe===!1,le=!!_.normalMap,be=!!_.displacementMap,Pe=!!_.emissiveMap,Ue=!!_.metalnessMap,je=!!_.roughnessMap,B=_.anisotropy>0,_t=_.clearcoat>0,ot=_.dispersion>0,D=_.retroreflectivity>0,S=_.iridescence>0,V=_.sheen>0,Y=_.transmission>0,j=B&&!!_.anisotropyMap,he=_t&&!!_.clearcoatMap,me=_t&&!!_.clearcoatNormalMap,ee=_t&&!!_.clearcoatRoughnessMap,ae=S&&!!_.iridescenceMap,ge=S&&!!_.iridescenceThicknessMap,ke=V&&!!_.sheenColorMap,ye=V&&!!_.sheenRoughnessMap,ve=!!_.specularMap,Ve=!!_.specularColorMap,Ge=!!_.specularIntensityMap,Ze=Y&&!!_.transmissionMap,k=Y&&!!_.thicknessMap,_e=!!_.gradientMap,ie=!!_.alphaMap,xe=_.alphaTest>0,Ee=!!_.alphaHash,oe=!!_.extensions;let He=Bn;_.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(He=s.toneMapping);const Fe={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:ce,fragmentShader:fe,defines:_.defines,customVertexShaderID:We,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:re,batchingColor:re&&N._colorsTexture!==null,instancing:se,instancingColor:se&&N.instanceColor!==null,instancingMorph:se&&N.morphTexture!==null,outputColorSpace:F===null?s.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Q,matcap:Ie,envMap:pe,envMapMode:pe&&K.mapping,envMapCubeUVHeight:$,aoMap:ue,lightMap:P,bumpMap:de,normalMap:le,displacementMap:be,emissiveMap:Pe,normalMapObjectSpace:le&&_.normalMapType===zd,normalMapTangentSpace:le&&_.normalMapType===dl,packedNormalMap:le&&_.normalMapType===dl&&o_(_.normalMap.format),metalnessMap:Ue,roughnessMap:je,anisotropy:B,anisotropyMap:j,clearcoat:_t,clearcoatMap:he,clearcoatNormalMap:me,clearcoatRoughnessMap:ee,dispersion:ot,retroreflection:D,iridescence:S,iridescenceMap:ae,iridescenceThicknessMap:ge,sheen:V,sheenColorMap:ke,sheenRoughnessMap:ye,specularMap:ve,specularColorMap:Ve,specularIntensityMap:Ge,transmission:Y,transmissionMap:Ze,thicknessMap:k,gradientMap:_e,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:xe,alphaHash:Ee,combine:_.combine,mapUv:Q&&g(_.map.channel),aoMapUv:ue&&g(_.aoMap.channel),lightMapUv:P&&g(_.lightMap.channel),bumpMapUv:de&&g(_.bumpMap.channel),normalMapUv:le&&g(_.normalMap.channel),displacementMapUv:be&&g(_.displacementMap.channel),emissiveMapUv:Pe&&g(_.emissiveMap.channel),metalnessMapUv:Ue&&g(_.metalnessMap.channel),roughnessMapUv:je&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:he&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(_.sheenRoughnessMap.channel),specularMapUv:ve&&g(_.specularMap.channel),specularColorMapUv:Ve&&g(_.specularColorMap.channel),specularIntensityMapUv:Ge&&g(_.specularIntensityMap.channel),transmissionMapUv:Ze&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:ie&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(le||B),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Q||ie),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:W,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Le,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:Q&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Pe&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dt,flipSided:_.side===Jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function v(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(w,_),b(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function b(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){const w=f[_.type];let R;if(w){const C=Nn[w];R=Kf.clone(C.uniforms)}else R=_.uniforms;return R}function p(_,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new i_(s,w,_,i),c.push(R),u.set(w,R)),R}function x(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:E,acquireProgram:p,releaseProgram:x,releaseShaderCache:M,programs:c,dispose:T}}function c_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function u_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Au(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,v,m){let b=s[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:v,group:m},s[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=g,b.materialVariant=a(d),b.groupOrder=y,b.renderOrder=d.renderOrder,b.z=v,b.group=m),e++,b}function l(d,f,g,y,v,m,b){b.reversedDepth===!0&&(v=-v);const E=o(d,f,g,y,v,m);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):t.push(E)}function c(d,f,g,y,v,m){const b=o(d,f,g,y,v,m);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):t.unshift(b)}function u(d,f){t.length>1&&t.sort(d||u_),n.length>1&&n.sort(f||Au),i.length>1&&i.sort(f||Au)}function h(){for(let d=e,f=s.length;d<f;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function h_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Cu,s.set(n,[a])):i>=r.length?(a=new Cu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function d_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function f_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let p_=0;function m_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function g_(s){const e=new d_,t=f_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new qe,a=new qe;function o(c){let u=0,h=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,y=0,v=0,m=0,b=0,E=0,p=0,x=0,M=0,T=0,_=0,w=0,R=0;c.sort(m_);for(let N=0,U=c.length;N<U;N++){const I=c[N],O=I.color,H=I.intensity,G=I.distance;let K=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Oi?K=I.shadow.map.texture:K=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=O.r*H,h+=O.g*H,d+=O.b*H;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],H);R++}else if(I.isSunLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,te=t.get(I);te.shadowIntensity=ne.intensity,te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=K;const Re=ne.getViewportCount();for(let Le=0;Le<Re;Le++)n.sunShadowMatrix[y+Le]=ne.getMatrix(Le),n.sunShadowCascade[y+Le]=ne._cascadeData[Le];y+=Re,g++}n.sun[f]=$,f++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,te=t.get(I);te.shadowIntensity=ne.intensity,te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,n.directionalShadow[v]=te,n.directionalShadowMap[v]=K,n.directionalShadowMatrix[v]=I.shadow.matrix,x++}n.directional[v]=$,v++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(O).multiplyScalar(H),$.distance=G,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[b]=$;const ne=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,ne.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[b]=ne.matrix,I.castShadow){const te=t.get(I);te.shadowIntensity=ne.intensity,te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=K,T++}b++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(O).multiplyScalar(H),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=$,E++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const ne=I.shadow,te=t.get(I);te.shadowIntensity=ne.intensity,te.shadowBias=ne.bias,te.shadowNormalBias=ne.normalBias,te.shadowRadius=ne.radius,te.shadowMapSize=ne.mapSize,te.shadowCameraNear=ne.camera.near,te.shadowCameraFar=ne.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=$,m++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(H),$.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=$,p++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.sunLength!==f||C.directionalLength!==v||C.pointLength!==m||C.spotLength!==b||C.rectAreaLength!==E||C.hemiLength!==p||C.numSunShadows!==g||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==T||C.numSpotMaps!==_||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=v,n.spot.length=b,n.rectArea.length=E,n.point.length=m,n.hemi.length=p,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.sunLength=f,C.directionalLength=v,C.pointLength=m,C.spotLength=b,C.rectAreaLength=E,C.hemiLength=p,C.numSunShadows=g,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=T,C.numSpotMaps=_,C.numLightProbes=R,n.version=p_++)}function l(c,u){let h=0,d=0,f=0,g=0,y=0,v=0;const m=u.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){const p=c[b];if(p.isSunLight){const x=n.sun[h];x.direction.setFromMatrixPosition(p.matrixWorld),x.direction.transformDirection(m),h++}else if(p.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(p.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),g++}else if(p.isRectAreaLight){const x=n.rectArea[y];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(p.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(p.width*.5,0,0),x.halfHeight.set(0,p.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),y++}else if(p.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(m),f++}else if(p.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(p.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Ru(s){const e=new g_(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function v_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Ru(s),e.set(i,[o])):r>=a.length?(o=new Ru(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,y_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],M_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Lu=new qe,Ws=new L,Mo=new L;function S_(s,e,t){let n=new Hl;const i=new ze,r=new ze,a=new Ke,o=new Qf,l=new jf,c={},u=t.maxTextureSize,h={[yi]:Jt,[Jt]:yi,[Dt]:Dt},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:__,fragmentShader:x_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new rt(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let m=this.type;this.render=function(M,T,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;this.type===pd&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);const w=s.getRenderTarget(),R=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(ei),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=m!==this.type;U&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=M.length;I<O;I++){const H=M[I],G=H.shadow;if(G===void 0){Be("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const K=G.getFrameExtents();i.multiply(K),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/K.x),i.x=r.x*K.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/K.y),i.y=r.y*K.y,G.mapSize.y=r.y));const $=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=$,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ys){if(H.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new dn(i.x,i.y,{format:Oi,type:An,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new Ms(i.x,i.y,un),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nt,G.map.depthTexture.magFilter=Nt}else H.isPointLight?(G.map=new Bh(i.x),G.map.depthTexture=new Wf(i.x,wn)):(G.map=new dn(i.x,i.y),G.map.depthTexture=new Ms(i.x,i.y,wn)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=ii,this.type===Js?(G.map.depthTexture.compareFunction=$?Ul:Nl,G.map.depthTexture.minFilter=Ct,G.map.depthTexture.magFilter=Ct):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nt,G.map.depthTexture.magFilter=Nt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);const ne=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();H.isPointLight!==!0&&G.updateMatrices(H,_);for(let te=0;te<ne;te++){const Re=G.getCamera(te);if(H.isPointLight){const Le=G.camera,ce=G.matrix,fe=H.distance||Le.far;fe!==Le.far&&(Le.far=fe,Le.updateProjectionMatrix()),Ws.setFromMatrixPosition(H.matrixWorld),Le.position.copy(Ws),Mo.copy(Le.position),Mo.add(y_[te]),Le.up.copy(M_[te]),Le.lookAt(Mo),Le.updateMatrixWorld(),ce.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Lu.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Lu,Le.coordinateSystem,Le.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,te),s.clear();else{te===0&&(s.setRenderTarget(G.map),s.clear());const Le=G.getViewport(te);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),N.viewport(a)}n=G.getFrustum(te),p(T,_,Re,H,this.type)}G.isPointLightShadow!==!0&&this.type===Ys&&b(G,_),G.needsUpdate=!1}m=this.type,v.needsUpdate=!1,s.setRenderTarget(w,R,C)};function b(M,T){const _=e.update(y);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new dn(i.x,i.y,{format:Oi,type:An}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,_,d,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,_,f,y,null)}function E(M,T,_,w){let R=null;const C=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)R=C;else if(R=_.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=R.uuid,U=T.uuid;let I=c[N];I===void 0&&(I={},c[N]=I);let O=I[U];O===void 0&&(O=R.clone(),I[U]=O,T.addEventListener("dispose",x)),R=O}if(R.visible=T.visible,R.wireframe=T.wireframe,w===Ys?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:h[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=s.properties.get(R);N.light=_}return R}function p(M,T,_,w,R){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Ys)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const U=e.update(M),I=M.material;if(Array.isArray(I)){const O=U.groups;for(let H=0,G=O.length;H<G;H++){const K=O[H],$=I[K.materialIndex];if($&&$.visible){const ne=E(M,$,w,R);M.onBeforeShadow(s,M,T,_,U,ne,K),s.renderBufferDirect(_,null,U,ne,M,K),M.onAfterShadow(s,M,T,_,U,ne,K)}}}else if(I.visible){const O=E(M,I,w,R);M.onBeforeShadow(s,M,T,_,U,O,null),s.renderBufferDirect(_,null,U,O,M,null),M.onAfterShadow(s,M,T,_,U,O,null)}}const N=M.children;for(let U=0,I=N.length;U<I;U++)p(N[U],T,_,w,R)}function x(M){M.target.removeEventListener("dispose",x);for(const _ in c){const w=c[_],R=M.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function b_(s,e){function t(){let k=!1;const _e=new Ke;let ie=null;const xe=new Ke(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!k&&(s.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,oe,He,Fe,xt){xt===!0&&(Ee*=Fe,oe*=Fe,He*=Fe),_e.set(Ee,oe,He,Fe),xe.equals(_e)===!1&&(s.clearColor(Ee,oe,He,Fe),xe.copy(_e))},reset:function(){k=!1,ie=null,xe.set(-1,0,0,0)}}}function n(){let k=!1,_e=!1,ie=null,xe=null,Ee=null;return{setReversed:function(oe){if(_e!==oe){const He=e.get("EXT_clip_control");oe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),_e=oe;const Fe=Ee;Ee=null,this.setClear(Fe)}},getReversed:function(){return _e},setTest:function(oe){oe?F(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(oe){ie!==oe&&!k&&(s.depthMask(oe),ie=oe)},setFunc:function(oe){if(_e&&(oe=Jd[oe]),xe!==oe){switch(oe){case Co:s.depthFunc(s.NEVER);break;case Ro:s.depthFunc(s.ALWAYS);break;case Lo:s.depthFunc(s.LESS);break;case rr:s.depthFunc(s.LEQUAL);break;case Io:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Do:s.depthFunc(s.GREATER);break;case No:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=oe}},setLocked:function(oe){k=oe},setClear:function(oe){Ee!==oe&&(Ee=oe,_e&&(oe=1-oe),s.clearDepth(oe))},reset:function(){k=!1,ie=null,xe=null,Ee=null,_e=!1}}}function i(){let k=!1,_e=null,ie=null,xe=null,Ee=null,oe=null,He=null,Fe=null,xt=null;return{setTest:function(ct){k||(ct?F(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(ct){_e!==ct&&!k&&(s.stencilMask(ct),_e=ct)},setFunc:function(ct,mn,Rn){(ie!==ct||xe!==mn||Ee!==Rn)&&(s.stencilFunc(ct,mn,Rn),ie=ct,xe=mn,Ee=Rn)},setOp:function(ct,mn,Rn){(oe!==ct||He!==mn||Fe!==Rn)&&(s.stencilOp(ct,mn,Rn),oe=ct,He=mn,Fe=Rn)},setLocked:function(ct){k=ct},setClear:function(ct){xt!==ct&&(s.clearStencil(ct),xt=ct)},reset:function(){k=!1,_e=null,ie=null,xe=null,Ee=null,oe=null,He=null,Fe=null,xt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],y=null,v=!1,m=null,b=null,E=null,p=null,x=null,M=null,T=null,_=new we(0,0,0),w=0,R=!1,C=null,N=null,U=null,I=null,O=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),G=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=K>=2);let ne=null,te={};const Re=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),ce=new Ke().fromArray(Re),fe=new Ke().fromArray(Le);function We(k,_e,ie,xe){const Ee=new Uint8Array(4),oe=s.createTexture();s.bindTexture(k,oe),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<ie;He++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(_e+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return oe}const Z={};Z[s.TEXTURE_2D]=We(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=We(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=We(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=We(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),F(s.DEPTH_TEST),a.setFunc(rr),de(!1),le(fc),F(s.CULL_FACE),ue(ei);function F(k){u[k]!==!0&&(s.enable(k),u[k]=!0)}function W(k){u[k]!==!1&&(s.disable(k),u[k]=!1)}function se(k,_e){return d[k]!==_e?(s.bindFramebuffer(k,_e),d[k]=_e,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_e),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function re(k,_e){let ie=g,xe=!1;if(k){ie=f.get(_e),ie===void 0&&(ie=[],f.set(_e,ie));const Ee=k.textures;if(ie.length!==Ee.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,He=Ee.length;oe<He;oe++)ie[oe]=s.COLOR_ATTACHMENT0+oe;ie.length=Ee.length,xe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,xe=!0);xe&&s.drawBuffers(ie)}function Q(k){return y!==k?(s.useProgram(k),y=k,!0):!1}const Ie={[os]:s.FUNC_ADD,[md]:s.FUNC_SUBTRACT,[gd]:s.FUNC_REVERSE_SUBTRACT};Ie[vd]=s.MIN,Ie[_d]=s.MAX;const pe={[ca]:s.ZERO,[Ii]:s.ONE,[xd]:s.SRC_COLOR,[Yu]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[bd]:s.DST_COLOR,[Md]:s.DST_ALPHA,[yd]:s.ONE_MINUS_SRC_COLOR,[sr]:s.ONE_MINUS_SRC_ALPHA,[Td]:s.ONE_MINUS_DST_COLOR,[Sd]:s.ONE_MINUS_DST_ALPHA,[wd]:s.CONSTANT_COLOR,[Ad]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[Rd]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(k,_e,ie,xe,Ee,oe,He,Fe,xt,ct){if(k===ei){v===!0&&(W(s.BLEND),v=!1);return}if(v===!1&&(F(s.BLEND),v=!0),k!==la){if(k!==m||ct!==R){if((b!==os||x!==os)&&(s.blendEquation(s.FUNC_ADD),b=os,x=os),ct)switch(k){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mi:s.blendFunc(s.ONE,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xe("WebGLState: Invalid blending: ",k);break}else switch(k){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pc:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",k);break}E=null,p=null,M=null,T=null,_.set(0,0,0),w=0,m=k,R=ct}return}Ee=Ee||_e,oe=oe||ie,He=He||xe,(_e!==b||Ee!==x)&&(s.blendEquationSeparate(Ie[_e],Ie[Ee]),b=_e,x=Ee),(ie!==E||xe!==p||oe!==M||He!==T)&&(s.blendFuncSeparate(pe[ie],pe[xe],pe[oe],pe[He]),E=ie,p=xe,M=oe,T=He),(Fe.equals(_)===!1||xt!==w)&&(s.blendColor(Fe.r,Fe.g,Fe.b,xt),_.copy(Fe),w=xt),m=k,R=!1}function P(k,_e){k.side===Dt?W(s.CULL_FACE):F(s.CULL_FACE);let ie=k.side===Jt;_e&&(ie=!ie),de(ie),k.blending===Qs&&k.transparent===!1?ue(ei):ue(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const xe=k.stencilWrite;o.setTest(xe),xe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?F(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function le(k){k!==dd?(F(s.CULL_FACE),k!==N&&(k===fc?s.cullFace(s.BACK):k===fd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),N=k}function be(k){k!==U&&(G&&s.lineWidth(k),U=k)}function Pe(k,_e,ie){k?(F(s.POLYGON_OFFSET_FILL),(I!==_e||O!==ie)&&(I=_e,O=ie,a.getReversed()&&(_e=-_e),s.polygonOffset(_e,ie))):W(s.POLYGON_OFFSET_FILL)}function Ue(k){k?F(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function je(k){k===void 0&&(k=s.TEXTURE0+H-1),ne!==k&&(s.activeTexture(k),ne=k)}function B(k,_e,ie){ie===void 0&&(ne===null?ie=s.TEXTURE0+H-1:ie=ne);let xe=te[ie];xe===void 0&&(xe={type:void 0,texture:void 0},te[ie]=xe),(xe.type!==k||xe.texture!==_e)&&(ne!==ie&&(s.activeTexture(ie),ne=ie),s.bindTexture(k,_e||Z[k]),xe.type=k,xe.texture=_e)}function _t(){const k=te[ne];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ot(){try{s.compressedTexImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function S(){try{s.texSubImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function V(){try{s.texSubImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function he(){try{s.texStorage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function me(){try{s.texStorage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function ee(){try{s.texImage2D(...arguments)}catch(k){Xe("WebGLState:",k)}}function ae(){try{s.texImage3D(...arguments)}catch(k){Xe("WebGLState:",k)}}function ge(k){return h[k]!==void 0?h[k]:s.getParameter(k)}function ke(k,_e){h[k]!==_e&&(s.pixelStorei(k,_e),h[k]=_e)}function ye(k){ce.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ce.copy(k))}function ve(k){fe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),fe.copy(k))}function Ve(k,_e){let ie=c.get(_e);ie===void 0&&(ie=new WeakMap,c.set(_e,ie));let xe=ie.get(k);xe===void 0&&(xe=s.getUniformBlockIndex(_e,k.name),ie.set(k,xe))}function Ge(k,_e){const xe=c.get(_e).get(k);l.get(_e)!==xe&&(s.uniformBlockBinding(_e,xe,k.__bindingPointIndex),l.set(_e,xe))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},ne=null,te={},d={},f=new WeakMap,g=[],y=null,v=!1,m=null,b=null,E=null,p=null,x=null,M=null,T=null,_=new we(0,0,0),w=0,R=!1,C=null,N=null,U=null,I=null,O=null,ce.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:F,disable:W,bindFramebuffer:se,drawBuffers:re,useProgram:Q,setBlending:ue,setMaterial:P,setFlipSided:de,setCullFace:le,setLineWidth:be,setPolygonOffset:Pe,setScissorTest:Ue,activeTexture:je,bindTexture:B,unbindTexture:_t,compressedTexImage2D:ot,compressedTexImage3D:D,texImage2D:ee,texImage3D:ae,pixelStorei:ke,getParameter:ge,updateUBOMapping:Ve,uniformBlockBinding:Ge,texStorage2D:he,texStorage3D:me,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:ye,viewport:ve,reset:Ze}}function T_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,S){return g?new OffscreenCanvas(D,S):hr("canvas")}function v(D,S,V){let Y=1;const j=ot(D);if((j.width>V||j.height>V)&&(Y=V/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(Y*j.width),me=Math.floor(Y*j.height);d===void 0&&(d=y(he,me));const ee=S?y(he,me):d;return ee.width=he,ee.height=me,ee.getContext("2d").drawImage(D,0,0,he,me),Be("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+he+"x"+me+")."),ee}else return"data"in D&&Be("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function m(D){return D.generateMipmaps}function b(D){s.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function p(D,S,V,Y,j,he=!1){if(D!==null){if(s[D]!==void 0)return s[D];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let me;Y&&(me=e.get("EXT_texture_norm16"),me||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===s.RED&&(V===s.FLOAT&&(ee=s.R32F),V===s.HALF_FLOAT&&(ee=s.R16F),V===s.UNSIGNED_BYTE&&(ee=s.R8),V===s.UNSIGNED_SHORT&&me&&(ee=me.R16_EXT),V===s.SHORT&&me&&(ee=me.R16_SNORM_EXT)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.R8UI),V===s.UNSIGNED_SHORT&&(ee=s.R16UI),V===s.UNSIGNED_INT&&(ee=s.R32UI),V===s.BYTE&&(ee=s.R8I),V===s.SHORT&&(ee=s.R16I),V===s.INT&&(ee=s.R32I)),S===s.RG&&(V===s.FLOAT&&(ee=s.RG32F),V===s.HALF_FLOAT&&(ee=s.RG16F),V===s.UNSIGNED_BYTE&&(ee=s.RG8),V===s.UNSIGNED_SHORT&&me&&(ee=me.RG16_EXT),V===s.SHORT&&me&&(ee=me.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RG8UI),V===s.UNSIGNED_SHORT&&(ee=s.RG16UI),V===s.UNSIGNED_INT&&(ee=s.RG32UI),V===s.BYTE&&(ee=s.RG8I),V===s.SHORT&&(ee=s.RG16I),V===s.INT&&(ee=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),V===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),V===s.UNSIGNED_INT&&(ee=s.RGB32UI),V===s.BYTE&&(ee=s.RGB8I),V===s.SHORT&&(ee=s.RGB16I),V===s.INT&&(ee=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),V===s.UNSIGNED_INT&&(ee=s.RGBA32UI),V===s.BYTE&&(ee=s.RGBA8I),V===s.SHORT&&(ee=s.RGBA16I),V===s.INT&&(ee=s.RGBA32I)),S===s.RGB&&(V===s.UNSIGNED_SHORT&&me&&(ee=me.RGB16_EXT),V===s.SHORT&&me&&(ee=me.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),S===s.RGBA){const ae=he?pa:it.getTransfer(j);V===s.FLOAT&&(ee=s.RGBA32F),V===s.HALF_FLOAT&&(ee=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ee=ae===dt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&me&&(ee=me.RGBA16_EXT),V===s.SHORT&&me&&(ee=me.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(D,S){let V;return D?S===null||S===wn||S===or?V=s.DEPTH24_STENCIL8:S===un?V=s.DEPTH32F_STENCIL8:S===ar&&(V=s.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wn||S===or?V=s.DEPTH_COMPONENT24:S===un?V=s.DEPTH_COMPONENT32F:S===ar&&(V=s.DEPTH_COMPONENT16),V}function M(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nt&&D.minFilter!==Ct?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function T(D){const S=D.target;S.removeEventListener("dispose",T),w(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function _(D){const S=D.target;S.removeEventListener("dispose",_),C(S)}function w(D){const S=n.get(D);if(S.__webglInit===void 0)return;const V=D.source,Y=f.get(V);if(Y){const j=Y[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(D),Object.keys(Y).length===0&&f.delete(V)}n.remove(D)}function R(D){const S=n.get(D);s.deleteTexture(S.__webglTexture);const V=D.source,Y=f.get(V);delete Y[S.__cacheKey],a.memory.textures--}function C(D){const S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let j=0;j<S.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=D.textures;for(let Y=0,j=V.length;Y<j;Y++){const he=n.get(V[Y]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(D)}let N=0;function U(){N=0}function I(){return N}function O(D){N=D}function H(){const D=N;return D>=i.maxTextures&&Be("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,D}function G(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function K(D,S){const V=n.get(D);if(D.isVideoTexture&&B(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){const Y=D.image;if(Y===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,D,S);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function $(D,S){const V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){W(V,D,S);return}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function ne(D,S){const V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){W(V,D,S);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function te(D,S){const V=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&V.__version!==D.version){se(V,D,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const Re={[xs]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[ua]:s.MIRRORED_REPEAT},Le={[Nt]:s.NEAREST,[ih]:s.NEAREST_MIPMAP_NEAREST,[Ks]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[ta]:s.LINEAR_MIPMAP_NEAREST,[Mn]:s.LINEAR_MIPMAP_LINEAR},ce={[Vd]:s.NEVER,[qd]:s.ALWAYS,[Hd]:s.LESS,[Nl]:s.LEQUAL,[Gd]:s.EQUAL,[Ul]:s.GEQUAL,[Wd]:s.GREATER,[Xd]:s.NOTEQUAL};function fe(D,S){if(S.type===un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ct||S.magFilter===ta||S.magFilter===Ks||S.magFilter===Mn||S.minFilter===Ct||S.minFilter===ta||S.minFilter===Ks||S.minFilter===Mn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Re[S.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Re[S.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Re[S.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Le[S.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Le[S.minFilter]),S.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Nt||S.minFilter!==Ks&&S.minFilter!==Mn||S.type===un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function We(D,S){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",T));const Y=S.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const he=G(S);if(he!==D.__cacheKey){j[he]===void 0&&(j[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[he].usedTimes++;const me=j[D.__cacheKey];me!==void 0&&(j[D.__cacheKey].usedTimes--,me.usedTimes===0&&R(S)),D.__cacheKey=he,D.__webglTexture=j[he].texture}return V}function Z(D,S,V){return Math.floor(Math.floor(D/V)/S)}function F(D,S,V,Y){const he=D.updateRanges;if(he.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,V,Y,S.data);else{he.sort((ke,ye)=>ke.start-ye.start);let me=0;for(let ke=1;ke<he.length;ke++){const ye=he[me],ve=he[ke],Ve=ye.start+ye.count,Ge=Z(ve.start,S.width,4),Ze=Z(ye.start,S.width,4);ve.start<=Ve+1&&Ge===Ze&&Z(ve.start+ve.count-1,S.width,4)===Ge?ye.count=Math.max(ye.count,ve.start+ve.count-ye.start):(++me,he[me]=ve)}he.length=me+1;const ee=t.getParameter(s.UNPACK_ROW_LENGTH),ae=t.getParameter(s.UNPACK_SKIP_PIXELS),ge=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let ke=0,ye=he.length;ke<ye;ke++){const ve=he[ke],Ve=Math.floor(ve.start/4),Ge=Math.ceil(ve.count/4),Ze=Ve%S.width,k=Math.floor(Ve/S.width),_e=Ge,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,Ze,k,_e,ie,V,Y,S.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ee),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,ge)}}function W(D,S,V){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const j=We(D,S),he=S.source;t.bindTexture(Y,D.__webglTexture,s.TEXTURE0+V);const me=n.get(he);if(he.version!==me.__version||j===!0){if(t.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ie=it.getPrimaries(it.workingColorSpace),xe=S.colorSpace===vi?null:it.getPrimaries(S.colorSpace),Ee=S.colorSpace===vi||ie===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ae=v(S.image,!1,i.maxTextureSize);ae=_t(S,ae);const ge=r.convert(S.format,S.colorSpace),ke=r.convert(S.type);let ye=p(S.internalFormat,ge,ke,S.normalized,S.colorSpace,S.isVideoTexture);fe(Y,S);let ve;const Ve=S.mipmaps,Ge=S.isVideoTexture!==!0,Ze=me.__version===void 0||j===!0,k=he.dataReady,_e=M(S,ae);if(S.isDepthTexture)ye=x(S.format===Pi,S.type),Ze&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,ye,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,ye,ae.width,ae.height,0,ge,ke,null));else if(S.isDataTexture)if(Ve.length>0){Ge&&Ze&&t.texStorage2D(s.TEXTURE_2D,_e,ye,Ve[0].width,Ve[0].height);for(let ie=0,xe=Ve.length;ie<xe;ie++)ve=Ve[ie],Ge?k&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,ke,ve.data):t.texImage2D(s.TEXTURE_2D,ie,ye,ve.width,ve.height,0,ge,ke,ve.data);S.generateMipmaps=!1}else Ge?(Ze&&t.texStorage2D(s.TEXTURE_2D,_e,ye,ae.width,ae.height),k&&F(S,ae,ge,ke)):t.texImage2D(s.TEXTURE_2D,0,ye,ae.width,ae.height,0,ge,ke,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,ye,Ve[0].width,Ve[0].height,ae.depth);for(let ie=0,xe=Ve.length;ie<xe;ie++)if(ve=Ve[ie],S.format!==hn)if(ge!==null)if(Ge){if(k)if(S.layerUpdates.size>0){const Ee=lu(ve.width,ve.height,S.format,S.type);for(const oe of S.layerUpdates){const He=ve.data.subarray(oe*Ee/ve.data.BYTES_PER_ELEMENT,(oe+1)*Ee/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,oe,ve.width,ve.height,1,ge,He)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,ae.depth,ge,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,ye,ve.width,ve.height,ae.depth,0,ve.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,ae.depth,ge,ke,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,ye,ve.width,ve.height,ae.depth,0,ge,ke,ve.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ge&&Ze&&t.texStorage2D(s.TEXTURE_2D,_e,ye,Ve[0].width,Ve[0].height);for(let ie=0,xe=Ve.length;ie<xe;ie++)ve=Ve[ie],S.format!==hn?ge!==null?Ge?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,ye,ve.width,ve.height,0,ve.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,ke,ve.data):t.texImage2D(s.TEXTURE_2D,ie,ye,ve.width,ve.height,0,ge,ke,ve.data)}else if(S.isDataArrayTexture)if(Ge){if(Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,ye,ae.width,ae.height,ae.depth),k)if(S.layerUpdates.size>0){const ie=lu(ae.width,ae.height,S.format,S.type);for(const xe of S.layerUpdates){const Ee=ae.data.subarray(xe*ie/ae.data.BYTES_PER_ELEMENT,(xe+1)*ie/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,ae.width,ae.height,1,ge,ke,Ee)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,ke,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,ae.width,ae.height,ae.depth,0,ge,ke,ae.data);else if(S.isData3DTexture)Ge?(Ze&&t.texStorage3D(s.TEXTURE_3D,_e,ye,ae.width,ae.height,ae.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,ke,ae.data)):t.texImage3D(s.TEXTURE_3D,0,ye,ae.width,ae.height,ae.depth,0,ge,ke,ae.data);else if(S.isFramebufferTexture){if(Ze)if(Ge)t.texStorage2D(s.TEXTURE_2D,_e,ye,ae.width,ae.height);else{let ie=ae.width,xe=ae.height;for(let Ee=0;Ee<_e;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,ye,ie,xe,0,ge,ke,null),ie>>=1,xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ae.parentNode!==ie){ie.appendChild(ae),h.add(S),ie.onpaint=xe=>{const Ee=xe.changedElements;for(const oe of h)Ee.includes(oe.image)&&(oe.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ae);else{const Ee=s.RGBA,oe=s.RGBA,He=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ee,oe,He,ae)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ge&&Ze){const ie=ot(Ve[0]);t.texStorage2D(s.TEXTURE_2D,_e,ye,ie.width,ie.height)}for(let ie=0,xe=Ve.length;ie<xe;ie++)ve=Ve[ie],Ge?k&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ge,ke,ve):t.texImage2D(s.TEXTURE_2D,ie,ye,ge,ke,ve);S.generateMipmaps=!1}else if(Ge){if(Ze){const ie=ot(ae);t.texStorage2D(s.TEXTURE_2D,_e,ye,ie.width,ie.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,ke,ae)}else t.texImage2D(s.TEXTURE_2D,0,ye,ge,ke,ae);m(S)&&b(Y),me.__version=he.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function se(D,S,V){if(S.image.length!==6)return;const Y=We(D,S),j=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+V);const he=n.get(j);if(j.version!==he.__version||Y===!0){t.activeTexture(s.TEXTURE0+V);const me=it.getPrimaries(it.workingColorSpace),ee=S.colorSpace===vi?null:it.getPrimaries(S.colorSpace),ae=S.colorSpace===vi||me===ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!ge&&!ke?ye[oe]=v(S.image[oe],!0,i.maxCubemapSize):ye[oe]=ke?S.image[oe].image:S.image[oe],ye[oe]=_t(S,ye[oe]);const ve=ye[0],Ve=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type),Ze=p(S.internalFormat,Ve,Ge,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,_e=he.__version===void 0||Y===!0,ie=j.dataReady;let xe=M(S,ve);fe(s.TEXTURE_CUBE_MAP,S);let Ee;if(ge){k&&_e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Ze,ve.width,ve.height);for(let oe=0;oe<6;oe++){Ee=ye[oe].mipmaps;for(let He=0;He<Ee.length;He++){const Fe=Ee[He];S.format!==hn?Ve!==null?k?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,0,0,Fe.width,Fe.height,Ve,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,Ze,Fe.width,Fe.height,0,Fe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,0,0,Fe.width,Fe.height,Ve,Ge,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He,Ze,Fe.width,Fe.height,0,Ve,Ge,Fe.data)}}}else{if(Ee=S.mipmaps,k&&_e){Ee.length>0&&xe++;const oe=ot(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Ze,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ke){k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,Ve,Ge,ye[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ze,ye[oe].width,ye[oe].height,0,Ve,Ge,ye[oe].data);for(let He=0;He<Ee.length;He++){const xt=Ee[He].image[oe].image;k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,0,0,xt.width,xt.height,Ve,Ge,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,Ze,xt.width,xt.height,0,Ve,Ge,xt.data)}}else{k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ve,Ge,ye[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ze,Ve,Ge,ye[oe]);for(let He=0;He<Ee.length;He++){const Fe=Ee[He];k?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,0,0,Ve,Ge,Fe.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,He+1,Ze,Ve,Ge,Fe.image[oe])}}}m(S)&&b(s.TEXTURE_CUBE_MAP),he.__version=j.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function re(D,S,V,Y,j,he){const me=r.convert(V.format,V.colorSpace),ee=r.convert(V.type),ae=p(V.internalFormat,me,ee,V.normalized,V.colorSpace),ge=n.get(S),ke=n.get(V);if(ke.__renderTarget=S,!ge.__hasExternalTextures){const ye=Math.max(1,S.width>>he),ve=Math.max(1,S.height>>he);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,he,ae,ye,ve,S.depth,0,me,ee,null):t.texImage2D(j,he,ae,ye,ve,0,me,ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,ke.__webglTexture,0,Ue(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,ke.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(D,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,D),S.depthBuffer){const Y=S.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,he=x(S.stencilBuffer,j),me=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;je(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue(S),he,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue(S),he,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,he,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,D)}else{const Y=S.textures;for(let j=0;j<Y.length;j++){const he=Y[j],me=r.convert(he.format,he.colorSpace),ee=r.convert(he.type),ae=p(he.internalFormat,me,ee,he.normalized,he.colorSpace);je(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue(S),ae,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue(S),ae,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ae,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(D,S,V){const Y=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(S.depthTexture);if(j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),fe(s.TEXTURE_CUBE_MAP,S.depthTexture);const ge=r.convert(S.depthTexture.format),ke=r.convert(S.depthTexture.type);let ye;S.depthTexture.format===ii?ye=s.DEPTH_COMPONENT24:S.depthTexture.format===Pi&&(ye=s.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ye,S.width,S.height,0,ge,ke,null)}}else K(S.depthTexture,0);const he=j.__webglTexture,me=Ue(S),ee=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ae=S.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ii)je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,ee,he,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,ae,ee,he,0);else if(S.depthTexture.format===Pi)je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,ee,he,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,ae,ee,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(D){const S=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Y}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)Ie(S.__webglFramebuffer[Y],D,Y);else{const Y=D.texture.mipmaps;Y&&Y.length>0?Ie(S.__webglFramebuffer[0],D,0):Ie(S.__webglFramebuffer,D,0)}else if(V){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),Q(S.__webglDepthbuffer[Y],D,!1);else{const j=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,he)}}else{const Y=D.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Q(S.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,he)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(D,S,V){const Y=n.get(D);S!==void 0&&re(Y.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&pe(D)}function P(D){const S=D.texture,V=n.get(D),Y=n.get(S);D.addEventListener("dispose",_);const j=D.textures,he=D.isWebGLCubeRenderTarget===!0,me=j.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,a.memory.textures++),he){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let ae=0;ae<S.mipmaps.length;ae++)V.__webglFramebuffer[ee][ae]=s.createFramebuffer()}else V.__webglFramebuffer[ee]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)V.__webglFramebuffer[ee]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(me)for(let ee=0,ae=j.length;ee<ae;ee++){const ge=n.get(j[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&je(D)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<j.length;ee++){const ae=j[ee];V.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const ge=r.convert(ae.format,ae.colorSpace),ke=r.convert(ae.type),ye=p(ae.internalFormat,ge,ke,ae.normalized,ae.colorSpace,D.isXRRenderTarget===!0),ve=Ue(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,ye,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(s.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)re(V.__webglFramebuffer[ee][ae],D,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae);else re(V.__webglFramebuffer[ee],D,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(S)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ee=0,ae=j.length;ee<ae;ee++){const ge=j[ee],ke=n.get(ge);let ye=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,ke.__webglTexture),fe(ye,ge),re(V.__webglFramebuffer,D,ge,s.COLOR_ATTACHMENT0+ee,ye,0),m(ge)&&b(ye)}t.unbindTexture()}else{let ee=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ee=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,Y.__webglTexture),fe(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)re(V.__webglFramebuffer[ae],D,S,s.COLOR_ATTACHMENT0,ee,ae);else re(V.__webglFramebuffer,D,S,s.COLOR_ATTACHMENT0,ee,0);m(S)&&b(ee),t.unbindTexture()}D.depthBuffer&&pe(D)}function de(D){const S=D.textures;for(let V=0,Y=S.length;V<Y;V++){const j=S[V];if(m(j)){const he=E(D),me=n.get(j).__webglTexture;t.bindTexture(he,me),b(he),t.unbindTexture()}}}const le=[],be=[];function Pe(D){if(D.samples>0){if(je(D)===!1){const S=D.textures,V=D.width,Y=D.height;let j=s.COLOR_BUFFER_BIT;const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(D),ee=S.length>1;if(ee)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ae=D.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const ke=n.get(S[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,V,Y,0,0,V,Y,j,s.NEAREST),l===!0&&(le.length=0,be.length=0,le.push(s.COLOR_ATTACHMENT0+ge),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(le.push(he),be.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const ke=n.get(S[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const S=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ue(D){return Math.min(i.maxSamples,D.samples)}function je(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(D){const S=a.render.frame;u.get(D)!==S&&(u.set(D,S),D.update())}function _t(D,S){const V=D.colorSpace,Y=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==rn&&V!==vi&&(it.getTransfer(V)===dt?(Y!==hn||j!==nn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",V)),S}function ot(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=te,this.rebindTextures=ue,this.setupRenderTarget=P,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E_(s,e){function t(n,i=vi){let r;const a=it.getTransfer(i);if(n===nn)return s.UNSIGNED_BYTE;if(n===Al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===sh)return s.BYTE;if(n===rh)return s.SHORT;if(n===ar)return s.UNSIGNED_SHORT;if(n===wl)return s.INT;if(n===wn)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===lh)return s.ALPHA;if(n===ch)return s.RGB;if(n===hn)return s.RGBA;if(n===ii)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===Rl)return s.RED;if(n===Ll)return s.RED_INTEGER;if(n===Oi)return s.RG;if(n===Il)return s.RG_INTEGER;if(n===Pl)return s.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===Fo||n===Oo||n===Bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===ko||n===Vo||n===Ho||n===Go||n===ha||n===Wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===ko)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ho)return r.COMPRESSED_R11_EAC;if(n===Go)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return r.COMPRESSED_RG11_EAC;if(n===Wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xo||n===qo||n===Yo||n===Ko||n===$o||n===Zo||n===Jo||n===Qo||n===jo||n===el||n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===el)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===al||n===ol)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rl)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===da||n===ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ah(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mt({vertexShader:w_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R_ extends Si{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",v=new C_,m={},b=t.getContextAttributes();let E=null,p=null;const x=[],M=[],T=new ze;let _=null,w=null;const R=new qt;R.viewport=new Ke;const C=new qt;C.viewport=new Ke;const N=[R,C],U=new bp;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let F=x[Z];return F===void 0&&(F=new Xa,x[Z]=F),F.getTargetRaySpace()},this.getControllerGrip=function(Z){let F=x[Z];return F===void 0&&(F=new Xa,x[Z]=F),F.getGripSpace()},this.getHand=function(Z){let F=x[Z];return F===void 0&&(F=new Xa,x[Z]=F),F.getHandSpace()};function H(Z){const F=M.indexOf(Z.inputSource);if(F===-1)return;const W=x[F];W!==void 0&&(W.update(Z.inputSource,Z.frame,c||a),W.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let Z=0;Z<x.length;Z++){const F=M[Z];F!==null&&(M[Z]=null,x[Z].disconnect(F))}I=null,O=null,v.reset();for(const Z in m)delete m[Z];if(e.setRenderTarget(E),f=null,d=null,h=null,i=null,p=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),w!==null){const Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,se=null,re=null;b.depth&&(re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=b.stencil?Pi:ii,se=b.stencil?or:wn);const Q={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Q),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new dn(d.textureWidth,d.textureHeight,{format:hn,type:nn,depthTexture:new Ms(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const W={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new dn(f.framebufferWidth,f.framebufferHeight,{format:hn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Z){for(let F=0;F<Z.removed.length;F++){const W=Z.removed[F],se=M.indexOf(W);se>=0&&(M[se]=null,x[se].disconnect(W))}for(let F=0;F<Z.added.length;F++){const W=Z.added[F];let se=M.indexOf(W);if(se===-1){for(let Q=0;Q<x.length;Q++)if(Q>=M.length){M.push(W),se=Q;break}else if(M[Q]===null){M[Q]=W,se=Q;break}if(se===-1)break}const re=x[se];re&&re.connect(W)}}const $=new L,ne=new L;function te(Z,F,W){$.setFromMatrixPosition(F.matrixWorld),ne.setFromMatrixPosition(W.matrixWorld);const se=$.distanceTo(ne),re=F.projectionMatrix.elements,Q=W.projectionMatrix.elements,Ie=re[14]/(re[10]-1),pe=re[14]/(re[10]+1),ue=(re[9]+1)/re[5],P=(re[9]-1)/re[5],de=(re[8]-1)/re[0],le=(Q[8]+1)/Q[0],be=Ie*de,Pe=Ie*le,Ue=se/(-de+le),je=Ue*-de;if(F.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(je),Z.translateZ(Ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),re[10]===-1)Z.projectionMatrix.copy(F.projectionMatrix),Z.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const B=Ie+Ue,_t=pe+Ue,ot=be-je,D=Pe+(se-je),S=ue*pe/_t*B,V=P*pe/_t*B;Z.projectionMatrix.makePerspective(ot,D,S,V,B,_t),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Re(Z,F){F===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(F.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let F=Z.near,W=Z.far;v.texture!==null&&(v.depthNear>0&&(F=v.depthNear),v.depthFar>0&&(W=v.depthFar)),U.near=C.near=R.near=F,U.far=C.far=R.far=W,(I!==U.near||O!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,O=U.far),U.layers.mask=Z.layers.mask|6,R.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const se=Z.parent,re=U.cameras;Re(U,se);for(let Q=0;Q<re.length;Q++)Re(re[Q],se);re.length===2?te(U,R,C):U.projectionMatrix.copy(R.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),Le(Z,U,se)};function Le(Z,F,W){W===null?Z.matrix.copy(F.matrixWorld):(Z.matrix.copy(W.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(F.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(F.projectionMatrix),Z.projectionMatrixInverse.copy(F.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ys*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(U)},this.getCameraTexture=function(Z){return m[Z]};let ce=null;function fe(Z,F){if(u=F.getViewerPose(c||a),g=F,u!==null){const W=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let se=!1;W.length!==U.cameras.length&&(U.cameras.length=0,se=!0);for(let pe=0;pe<W.length;pe++){const ue=W[pe];let P=null;if(f!==null)P=f.getViewport(ue);else{const le=h.getViewSubImage(d,ue);P=le.viewport,pe===0&&(e.setRenderTargetTextures(p,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(p))}let de=N[pe];de===void 0&&(de=new qt,de.layers.enable(pe),de.viewport=new Ke,N[pe]=de),de.matrix.fromArray(ue.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ue.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(P.x,P.y,P.width,P.height),pe===0&&(U.matrix.copy(de.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),se===!0&&U.cameras.push(de)}const re=i.enabledFeatures;if(re&&re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){h=n.getBinding();const pe=h.getDepthInformation(W[0]);pe&&pe.isValid&&pe.texture&&v.init(pe,i.renderState)}if(re&&re.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let pe=0;pe<W.length;pe++){const ue=W[pe].camera;if(ue){let P=m[ue];P||(P=new Ah,m[ue]=P);const de=h.getCameraImage(ue);P.sourceTexture=de}}}}for(let W=0;W<x.length;W++){const se=M[W],re=x[W];se!==null&&re!==void 0&&re.update(se,F,c||a)}ce&&ce(Z,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),g=null}const We=new Fh;We.setAnimationLoop(fe),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}}const L_=new qe,Gh=new Ye;Gh.set(-1,0,0,0,1,0,0,0,1);function I_(s,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,Ch(s)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function i(v,m,b,E,p){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(v,m):m.isMeshLambertMaterial?(r(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(v,m),h(v,m)):m.isMeshPhongMaterial?(r(v,m),u(v,m),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(v,m),d(v,m),m.isMeshPhysicalMaterial&&f(v,m,p)):m.isMeshMatcapMaterial?(r(v,m),g(v,m)):m.isMeshDepthMaterial?r(v,m):m.isMeshDistanceMaterial?(r(v,m),y(v,m)):m.isMeshNormalMaterial?r(v,m):m.isLineBasicMaterial?(a(v,m),m.isLineDashedMaterial&&o(v,m)):m.isPointsMaterial?l(v,m,b,E):m.isSpriteMaterial?c(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Jt&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Jt&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const b=e.get(m),E=b.envMap,p=b.envMapRotation;E&&(v.envMap.value=E,v.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(p)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Gh),v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function a(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function o(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function l(v,m,b,E){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*b,v.scale.value=E*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function h(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function d(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function f(v,m,b){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.retroreflectivity>0&&(v.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function y(v,m){const b=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function P_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,x){const M=x.program;n.uniformBlockBinding(p,M)}function c(p,x){let M=i[p.id];M===void 0&&(v(p),M=u(p),i[p.id]=M,p.addEventListener("dispose",b));const T=x.program;n.updateUBOMapping(p,T);const _=e.render.frame;r[p.id]!==_&&(d(p),r[p.id]=_)}function u(p){const x=h();p.__bindingPointIndex=x;const M=s.createBuffer(),T=p.__size,_=p.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,T,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function h(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const x=i[p.id],M=p.uniforms,T=p.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let _=0,w=M.length;_<w;_++){const R=M[_];if(Array.isArray(R))for(let C=0,N=R.length;C<N;C++)f(R[C],_,C,T);else f(R,_,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(p,x,M,T){if(y(p,x,M,T)===!0){const _=p.__offset,w=p.value;if(Array.isArray(w)){let R=0;for(let C=0;C<w.length;C++){const N=w[C],U=m(N);g(N,p.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,p.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,p.__data)}}function g(p,x,M){typeof p=="number"||typeof p=="boolean"?x[0]=p:p.isMatrix3?(x[0]=p.elements[0],x[1]=p.elements[1],x[2]=p.elements[2],x[3]=0,x[4]=p.elements[3],x[5]=p.elements[4],x[6]=p.elements[5],x[7]=0,x[8]=p.elements[6],x[9]=p.elements[7],x[10]=p.elements[8],x[11]=0):ArrayBuffer.isView(p)?x.set(new p.constructor(p.buffer,p.byteOffset,x.length)):p.toArray(x,M)}function y(p,x,M,T){const _=p.value,w=x+"_"+M;if(T[w]===void 0)return typeof _=="number"||typeof _=="boolean"?T[w]=_:ArrayBuffer.isView(_)?T[w]=_.slice():T[w]=_.clone(),!0;{const R=T[w];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function v(p){const x=p.uniforms;let M=0;const T=16;for(let w=0,R=x.length;w<R;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let N=0,U=C.length;N<U;N++){const I=C[N],O=Array.isArray(I.value)?I.value:[I.value];for(let H=0,G=O.length;H<G;H++){const K=O[H],$=m(K),ne=M%T,te=ne%$.boundary,Re=ne+te;M+=te,Re!==0&&T-Re<$.storage&&(M+=T-Re),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=$.storage}}}const _=M%T;return _>0&&(M+=T-_),p.__size=M,p.__cache={},this}function m(p){const x={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(x.boundary=4,x.storage=4):p.isVector2?(x.boundary=8,x.storage=8):p.isVector3||p.isColor?(x.boundary=16,x.storage=12):p.isVector4?(x.boundary=16,x.storage=16):p.isMatrix3?(x.boundary=48,x.storage=48):p.isMatrix4?(x.boundary=64,x.storage=64):p.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(x.boundary=16,x.storage=p.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",p),x}function b(p){const x=p.target;x.removeEventListener("dispose",b);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function E(){for(const p in i)s.deleteBuffer(i[p]);a=[],i={},r={}}return{bind:l,update:c,dispose:E}}const D_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function N_(){return Pn===null&&(Pn=new kl(D_,16,16,Oi,An),Pn.name="DFG_LUT",Pn.minFilter=Ct,Pn.magFilter=Ct,Pn.wrapS=Un,Pn.wrapT=Un,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class U_{constructor(e={}){const{canvas:t=$d(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const y=f,v=new Set([Pl,Il,Ll]),m=new Set([nn,wn,ar,or,Al,Cl]),b=new Uint32Array(4),E=new Int32Array(4),p=new L;let x=null,M=null;const T=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,N=null,U=null,I=null,O=null;this._outputColorSpace=kt;let H=0,G=0,K=null,$=-1,ne=null;const te=new Ke,Re=new Ke;let Le=null;const ce=new we(0);let fe=0,We=t.width,Z=t.height,F=1,W=null,se=null;const re=new Ke(0,0,We,Z),Q=new Ke(0,0,We,Z);let Ie=!1;const pe=new Hl;let ue=!1,P=!1;const de=new qe,le=new L,be=new Ke,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function je(){return K===null?F:1}let B=n;function _t(A,z){return t.getContext(A,z)}let ot,D,S,V,Y,j,he,me,ee,ae,ge,ke,ye,ve,Ve,Ge,Ze,k,_e,ie,xe,Ee,oe;try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",mn,!1),B===null){const z="webgl2";if(B=_t(z,A),B===null)throw _t(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(A){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),Xe("WebGLRenderer: "+A.message),A}function He(){ot=new Ng(B),ot.init(),xe=new E_(B,ot),D=new Tg(B,ot,e,xe),S=new b_(B,ot),D.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),U=B.createFramebuffer(),I=B.createFramebuffer(),O=B.createFramebuffer(),V=new Og(B),Y=new c_,j=new T_(B,ot,S,Y,D,xe,V),he=new Dg(R),me=new zp(B),Ee=new Sg(B,me),ee=new Ug(B,me,V,Ee),ae=new zg(B,ee,me,Ee,V),k=new Bg(B,D,j),Ve=new Eg(Y),ge=new l_(R,he,ot,D,Ee,Ve),ke=new I_(R,Y),ye=new h_,ve=new v_(ot),Ze=new Mg(R,he,S,ae,g,l),Ge=new S_(R,ae,D),oe=new P_(B,V,D,S),_e=new bg(B,ot,V),ie=new Fg(B,ot,V),V.programs=ge.programs,R.capabilities=D,R.extensions=ot,R.properties=Y,R.renderLists=ye,R.shadowMap=Ge,R.state=S,R.info=V}y!==nn&&(w=new Vg(y,t.width,t.height,o,i,r));const Fe=new R_(R,B);this.xr=Fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(We,Z,!1))},this.getSize=function(A){return A.set(We,Z)},this.setSize=function(A,z,J=!0){if(Fe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}We=A,Z=z,t.width=Math.floor(A*F),t.height=Math.floor(z*F),J===!0&&(t.style.width=A+"px",t.style.height=z+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(We*F,Z*F).floor()},this.setDrawingBufferSize=function(A,z,J){We=A,Z=z,F=J,t.width=Math.floor(A*J),t.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(y===nn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,z,J,X){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,z,J,X),S.viewport(te.copy(re).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,z,J,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,z,J,X),S.scissor(Re.copy(Q).multiplyScalar(F).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){S.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let X=0;if(A){let q=!1;if(K!==null){const Te=K.texture.format;q=v.has(Te)}if(q){const Te=K.texture.type,Ce=m.has(Te),Se=Ze.getClearColor(),De=Ze.getClearAlpha(),Oe=Se.r,Je=Se.g,nt=Se.b;Ce?(b[0]=Oe,b[1]=Je,b[2]=nt,b[3]=De,B.clearBufferuiv(B.COLOR,0,b)):(E[0]=Oe,E[1]=Je,E[2]=nt,E[3]=De,B.clearBufferiv(B.COLOR,0,E))}else X|=B.COLOR_BUFFER_BIT}z&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),Ze.dispose(),ye.dispose(),ve.dispose(),Y.dispose(),he.dispose(),ae.dispose(),Ee.dispose(),oe.dispose(),ge.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",sc),Fe.removeEventListener("sessionend",rc),bi.stop()};function xt(A){A.preventDefault(),ma("WebGLRenderer: Context Lost."),C=!0}function ct(){ma("WebGLRenderer: Context Restored."),C=!1;const A=V.autoReset,z=Ge.enabled,J=Ge.autoUpdate,X=Ge.needsUpdate,q=Ge.type;He(),V.autoReset=A,Ge.enabled=z,Ge.autoUpdate=J,Ge.needsUpdate=X,Ge.type=q}function mn(A){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Rn(A){const z=A.target;z.removeEventListener("dispose",Rn),rd(z)}function rd(A){ad(A),Y.remove(A)}function ad(A){const z=Y.get(A).programs;z!==void 0&&(z.forEach(function(J){ge.releaseProgram(J)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,X,q,Te){z===null&&(z=Pe);const Ce=q.isMesh&&q.matrixWorld.determinantAffine()<0,Se=cd(A,z,J,X,q);S.setMaterial(X,Ce);let De=J.index,Oe=1;if(X.wireframe===!0){if(De=ee.getWireframeAttribute(J),De===void 0)return;Oe=2}const Je=J.drawRange,nt=J.attributes.position;let Ne=Je.start*Oe,ut=(Je.start+Je.count)*Oe;Te!==null&&(Ne=Math.max(Ne,Te.start*Oe),ut=Math.min(ut,(Te.start+Te.count)*Oe)),De!==null?(Ne=Math.max(Ne,0),ut=Math.min(ut,De.count)):nt!=null&&(Ne=Math.max(Ne,0),ut=Math.min(ut,nt.count));const Lt=ut-Ne;if(Lt<0||Lt===1/0)return;Ee.setup(q,X,Se,J,De);let St,vt=_e;if(De!==null&&(St=me.get(De),vt=ie,vt.setIndex(St)),q.isMesh)X.wireframe===!0?(S.setLineWidth(X.wireframeLinewidth*je()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(q.isLine){let Gt=X.linewidth;Gt===void 0&&(Gt=1),S.setLineWidth(Gt*je()),q.isLineSegments?vt.setMode(B.LINES):q.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else q.isPoints?vt.setMode(B.POINTS):q.isSprite&&vt.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))vt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Gt=q._multiDrawStarts,Ae=q._multiDrawCounts,Kt=q._multiDrawCount,lt=De?me.get(De).bytesPerElement:1,an=Y.get(X).currentProgram.getUniforms();for(let Ln=0;Ln<Kt;Ln++)an.setValue(B,"_gl_DrawID",Ln),vt.render(Gt[Ln]/lt,Ae[Ln])}else if(q.isInstancedMesh)vt.renderInstances(Ne,Lt,q.count);else if(J.isInstancedBufferGeometry){const Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ae=Math.min(J.instanceCount,Gt);vt.renderInstances(Ne,Lt,Ae)}else vt.render(Ne,Lt)};function ic(A,z,J,X){N!==null&&A.isNodeMaterial&&N.setObject(X,A),ue===!0&&Ve.setState(A,J,!1),A.transparent===!0&&A.side===Dt&&A.forceSinglePass===!1?(A.side=Jt,A.needsUpdate=!0,yr(A,z,X),A.side=yi,A.needsUpdate=!0,yr(A,z,X),A.side=Dt):yr(A,z,X)}this.compile=function(A,z,J=null){J===null&&(J=A),N!==null&&N.renderStart(A,z,J),M=ve.get(J),M.init(z),_.push(M),J.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),A!==J&&A.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),N!==null&&N.updateLights(M.state.lightsArray),P=this.localClippingEnabled,ue=Ve.init(this.clippingPlanes,P),ue===!0&&Ve.setGlobalState(this.clippingPlanes,z),N!==null&&Ge.render(M.state.shadowsArray,J,z);const X=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const Se=Te[Ce];ic(Se,J,z,q),X.add(Se)}else ic(Te,J,z,q),X.add(Te)}),M=_.pop(),N!==null&&N.renderEnd(),X},this.compileAsync=function(A,z,J=null){const X=this.compile(A,z,J);return new Promise(q=>{function Te(){if(X.forEach(function(Ce){const De=Y.get(Ce).currentProgram;(De===void 0||De.isReady())&&X.delete(Ce)}),X.size===0){q(A);return}setTimeout(Te,10)}ot.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Na=null;function od(A){Na&&Na(A)}function sc(){bi.stop()}function rc(){bi.start()}const bi=new Fh;bi.setAnimationLoop(od),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){Na=A,Fe.setAnimationLoop(A),A===null?bi.stop():bi.start()},Fe.addEventListener("sessionstart",sc),Fe.addEventListener("sessionend",rc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(A,z);const J=Fe.enabled===!0&&Fe.isPresenting===!0,X=w!==null&&(K===null||J)&&w.begin(R,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(z),z=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,z,K),M=ve.get(A,_.length),M.init(z),M.state.textureUnits=j.getTextureUnits(),_.push(M),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),pe.setFromProjectionMatrix(de,Fn,z.reversedDepth),P=this.localClippingEnabled,ue=Ve.init(this.clippingPlanes,P),x=ye.get(A,T.length),x.init(),T.push(x),Fe.enabled===!0&&Fe.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&Ua(Ce,z,-1/0,R.sortObjects)}Ua(A,z,0,R.sortObjects),x.finish(),N!==null&&N.updateLights(M.state.lightsArray),R.sortObjects===!0&&x.sort(W,se),Ue=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ue&&Ze.addToRenderList(x,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Ve.beginShadows();const q=M.state.shadowsArray;if(Ge.render(q,A,z),ue===!0&&Ve.endShadows(),(X&&w.hasRenderPass())===!1){const Ce=x.opaque,Se=x.transmissive;if(M.setupLights(),z.isArrayCamera){const De=z.cameras;if(Se.length>0)for(let Oe=0,Je=De.length;Oe<Je;Oe++){const nt=De[Oe];oc(Ce,Se,A,nt)}Ue&&Ze.render(A);for(let Oe=0,Je=De.length;Oe<Je;Oe++){const nt=De[Oe];ac(x,A,nt,nt.viewport)}}else Se.length>0&&oc(Ce,Se,A,z),Ue&&Ze.render(A),ac(x,A,z)}K!==null&&G===0&&(j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K)),X&&w.end(R),A.isScene===!0&&A.onAfterRender(R,A,z),Ee.resetDefaultState(),$=-1,ne=null,_.pop(),_.length>0?(M=_[_.length-1],j.setTextureUnits(M.state.textureUnits),ue===!0&&Ve.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?x=T[T.length-1]:x=null,N!==null&&N.renderEnd()};function Ua(A,z,J,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(pe)){X&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const Ce=ae.update(A),Se=A.material;Se.visible&&x.push(A,Ce,Se,J,be.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(pe))){const Ce=ae.update(A),Se=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),be.copy(Ce.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Se)){const De=Ce.groups;for(let Oe=0,Je=De.length;Oe<Je;Oe++){const nt=De[Oe],Ne=Se[nt.materialIndex];Ne&&Ne.visible&&x.push(A,Ce,Ne,J,be.z,nt,z)}}else Se.visible&&x.push(A,Ce,Se,J,be.z,null,z)}}const Te=A.children;for(let Ce=0,Se=Te.length;Ce<Se;Ce++)Ua(Te[Ce],z,J,X)}function ac(A,z,J,X){const{opaque:q,transmissive:Te,transparent:Ce}=A;M.setupLightsView(J),ue===!0&&Ve.setGlobalState(R.clippingPlanes,J),X&&S.viewport(te.copy(X)),q.length>0&&xr(q,z,J),Te.length>0&&xr(Te,z,J),Ce.length>0&&xr(Ce,z,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function oc(A,z,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){const Ne=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new dn(1,1,{generateMipmaps:!0,type:Ne?An:nn,minFilter:Mn,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Te=M.state.transmissionRenderTarget[X.id],Ce=X.viewport||te;Te.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const Se=R.getRenderTarget(),De=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(Te),R.getClearColor(ce),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),Ue&&Ze.render(J);const Je=R.toneMapping;R.toneMapping=Bn;const nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),ue===!0&&Ve.setGlobalState(R.clippingPlanes,X),xr(A,J,X),j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ut=0,Lt=z.length;ut<Lt;ut++){const St=z[ut],{object:vt,geometry:Gt,material:Ae,group:Kt}=St;if(Ae.side===Dt&&vt.layers.test(X.layers)){const lt=Ae.side;Ae.side=Jt,Ae.needsUpdate=!0,lc(vt,J,X,Gt,Ae,Kt),Ae.side=lt,Ae.needsUpdate=!0,Ne=!0}}Ne===!0&&(j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te))}R.setRenderTarget(Se,De,Oe),R.setClearColor(ce,fe),nt!==void 0&&(X.viewport=nt),R.toneMapping=Je}function xr(A,z,J){const X=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Te=A.length;q<Te;q++){const Ce=A[q],{object:Se,geometry:De,group:Oe}=Ce;let Je=Ce.material;Je.allowOverride===!0&&X!==null&&(Je=X),Se.layers.test(J.layers)&&lc(Se,z,J,De,Je,Oe)}}function lc(A,z,J,X,q,Te){N!==null&&q.isNodeMaterial&&N.setObject(A,q),A.onBeforeRender(R,z,J,X,q,Te),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,z,J,X,A,Te),q.transparent===!0&&q.side===Dt&&q.forceSinglePass===!1?(q.side=Jt,q.needsUpdate=!0,R.renderBufferDirect(J,z,X,q,A,Te),q.side=yi,q.needsUpdate=!0,R.renderBufferDirect(J,z,X,q,A,Te),q.side=Dt):R.renderBufferDirect(J,z,X,q,A,Te),A.onAfterRender(R,z,J,X,q,Te)}function yr(A,z,J){z.isScene!==!0&&(z=Pe);const X=Y.get(A),q=M.state.lights,Te=M.state.shadowsArray,Ce=q.state.version,Se=ge.getParameters(A,q.state,Te,z,J,M.state.lightProbeGridArray),De=ge.getProgramCacheKey(Se);let Oe=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;const Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=he.get(A.envMap||X.environment,Je),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Rn),Oe=new Map,X.programs=Oe);let nt=Oe.get(De);if(nt!==void 0){if(X.currentProgram===nt&&X.lightsStateVersion===Ce)return uc(A,Se),nt}else Se.uniforms=ge.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,J,Se),A.onBeforeCompile(Se,R),nt=ge.acquireProgram(Se,De),Oe.set(De,nt),X.uniforms=Se.uniforms;const Ne=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=Ve.uniform),uc(A,Se),X.needsLights=hd(A),X.lightsStateVersion=Ce,X.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.sunLights.value=q.state.sun,Ne.sunLightShadows.value=q.state.sunShadow,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.sunShadowMatrix.value=q.state.sunShadowMatrix,Ne.sunShadowCascade.value=q.state.sunShadowCascade,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=nt,X.uniformsList=null,nt}function cc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=oa.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function uc(A,z){const J=Y.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function ld(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;p.setFromMatrixPosition(z.matrixWorld);for(let J=0,X=A.length;J<X;J++){const q=A[J];if(q.texture!==null&&q.boundingBox.containsPoint(p))return q}return null}function cd(A,z,J,X,q){z.isScene!==!0&&(z=Pe),j.resetTextureUnits();const Te=z.fog,Ce=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,Se=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:it.workingColorSpace,De=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Oe=he.get(X.envMap||Ce,De),Je=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!J.morphAttributes.position,ut=!!J.morphAttributes.normal,Lt=!!J.morphAttributes.color;let St=Bn;X.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(St=R.toneMapping);const vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Gt=vt!==void 0?vt.length:0,Ae=Y.get(X),Kt=M.state.lights;if(ue===!0&&(P===!0||A!==ne)){const yt=A===ne&&X.id===$;Ve.setState(X,A,yt)}let lt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Kt.state.version||Ae.outputColorSpace!==Se||q.isBatchedMesh&&Ae.batching===!1||!q.isBatchedMesh&&Ae.batching===!0||q.isBatchedMesh&&Ae.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ae.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ae.instancing===!1||!q.isInstancedMesh&&Ae.instancing===!0||q.isSkinnedMesh&&Ae.skinning===!1||!q.isSkinnedMesh&&Ae.skinning===!0||q.isInstancedMesh&&Ae.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ae.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ae.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ae.instancingMorph===!1&&q.morphTexture!==null||Ae.envMap!==Oe||X.fog===!0&&Ae.fog!==Te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ve.numPlanes||Ae.numIntersection!==Ve.numIntersection)||Ae.vertexAlphas!==Je||Ae.vertexTangents!==nt||Ae.morphTargets!==Ne||Ae.morphNormals!==ut||Ae.morphColors!==Lt||Ae.toneMapping!==St||Ae.morphTargetsCount!==Gt||!!Ae.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Ae.__version=X.version);let an=Ae.currentProgram;lt===!0&&(an=yr(X,z,q),N&&X.isNodeMaterial&&N.onUpdateProgram(X,an,Ae));let Ln=!1,ai=!1,ki=!1;const gt=an.getUniforms(),wt=Ae.uniforms;if(S.useProgram(an.program)&&(Ln=!0,ai=!0,ki=!0),X.id!==$&&($=X.id,ai=!0),Ae.needsLights){const yt=ld(M.state.lightProbeGridArray,q);Ae.lightProbeGrid!==yt&&(Ae.lightProbeGrid=yt,ai=!0)}if(Ln||ne!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),gt.setValue(B,"projectionMatrix",A.projectionMatrix),gt.setValue(B,"viewMatrix",A.matrixWorldInverse);const li=gt.map.cameraPosition;li!==void 0&&li.setValue(B,le.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&gt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),ne!==A&&(ne=A,ai=!0,ki=!0)}if(Ae.needsLights&&(Kt.state.sunShadowMap.length>0&&gt.setValue(B,"sunShadowMap",Kt.state.sunShadowMap,j),Kt.state.directionalShadowMap.length>0&&gt.setValue(B,"directionalShadowMap",Kt.state.directionalShadowMap,j),Kt.state.spotShadowMap.length>0&&gt.setValue(B,"spotShadowMap",Kt.state.spotShadowMap,j),Kt.state.pointShadowMap.length>0&&gt.setValue(B,"pointShadowMap",Kt.state.pointShadowMap,j)),q.isSkinnedMesh){gt.setOptional(B,q,"bindMatrix"),gt.setOptional(B,q,"bindMatrixInverse");const yt=q.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),gt.setValue(B,"boneTexture",yt.boneTexture,j))}q.isBatchedMesh&&(gt.setOptional(B,q,"batchingTexture"),gt.setValue(B,"batchingTexture",q._matricesTexture,j),gt.setOptional(B,q,"batchingIdTexture"),gt.setValue(B,"batchingIdTexture",q._indirectTexture,j),gt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&gt.setValue(B,"batchingColorTexture",q._colorsTexture,j));const oi=J.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&k.update(q,J,an),(ai||Ae.receiveShadow!==q.receiveShadow)&&(Ae.receiveShadow=q.receiveShadow,gt.setValue(B,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(wt.envMapIntensity.value=z.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=N_()),ai){if(gt.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&ud(wt,ki),Te&&X.fog===!0&&ke.refreshFogUniforms(wt,Te),ke.refreshMaterialUniforms(wt,X,F,Z,M.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){const yt=Ae.lightProbeGrid;wt.probesSH.value=yt.texture,wt.probesMin.value.copy(yt.boundingBox.min),wt.probesMax.value.copy(yt.boundingBox.max),wt.probesResolution.value.copy(yt.resolution)}oa.upload(B,cc(Ae),wt,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(oa.upload(B,cc(Ae),wt,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(B,"center",q.center),gt.setValue(B,"modelViewMatrix",q.modelViewMatrix),gt.setValue(B,"normalMatrix",q.normalMatrix),gt.setValue(B,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const yt=X.uniformsGroups;for(let li=0,Vi=yt.length;li<Vi;li++){const dc=yt[li];oe.update(dc,an),oe.bind(dc,an)}}return an}function ud(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function hd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,z,J){const X=Y.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(A.texture).__webglTexture=z,Y.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const J=Y.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,J=0){K=A,H=z,G=J;let X=null,q=!1,Te=!1;if(A){const Se=Y.get(A);if(Se.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,Se.__webglFramebuffer),te.copy(A.viewport),Re.copy(A.scissor),Le=A.scissorTest,S.viewport(te),S.scissor(Re),S.setScissorTest(Le),$=-1;return}else if(Se.__webglFramebuffer===void 0)j.setupRenderTarget(A);else if(Se.__hasExternalTextures)j.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Se.__boundDepthTexture!==Je){if(Je!==null&&Y.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);const Oe=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?X=Oe[z][J]:X=Oe[z],q=!0):A.samples>0&&j.useMultisampledRTT(A)===!1?X=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[J]:X=Oe,te.copy(A.viewport),Re.copy(A.scissor),Le=A.scissorTest}else te.copy(re).multiplyScalar(F).floor(),Re.copy(Q).multiplyScalar(F).floor(),Le=Ie;if(J!==0&&(X=U),S.bindFramebuffer(B.FRAMEBUFFER,X)&&S.drawBuffers(A,X),S.viewport(te),S.scissor(Re),S.setScissorTest(Le),q){const Se=Y.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,J)}else if(Te){const Se=z;for(let De=0;De<A.textures.length;De++){const Oe=Y.get(A.textures[De]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+De,Oe.__webglTexture,J,Se)}}else if(A!==null&&J!==0){const Se=Y.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Se.__webglTexture,J)}$=-1};function hc(A){const z=Y.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=D.textureFormatReadable(A.format),z.__typeReadable=D.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,J,X,q,Te,Ce,Se=0){if(!(A&&A.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){S.bindFramebuffer(B.FRAMEBUFFER,De);try{const Oe=A.textures[Se],Je=Oe.format,nt=Oe.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se);const Ne=hc(Oe);if(Ne.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&J>=0&&J<=A.height-q&&B.readPixels(z,J,X,q,xe.convert(Je),xe.convert(nt),Te)}finally{const Oe=K!==null?Y.get(K).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,X,q,Te,Ce,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(z>=0&&z<=A.width-X&&J>=0&&J<=A.height-q){S.bindFramebuffer(B.FRAMEBUFFER,De);const Oe=A.textures[Se],Je=Oe.format,nt=Oe.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Se);const Ne=hc(Oe);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ut),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(z,J,X,q,xe.convert(Je),xe.convert(nt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Lt=K!==null?Y.get(K).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Lt);const St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Zd(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ut),B.deleteSync(St),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){const X=Math.pow(2,-J),q=Math.floor(A.image.width*X),Te=Math.floor(A.image.height*X),Ce=z!==null?z.x:0,Se=z!==null?z.y:0;j.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Ce,Se,q,Te),S.unbindTexture()},this.copyTextureToTexture=function(A,z,J=null,X=null,q=0,Te=0){let Ce,Se,De,Oe,Je,nt,Ne,ut,Lt;const St=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(J!==null)Ce=J.max.x-J.min.x,Se=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Oe=J.min.x,Je=J.min.y,nt=J.isBox3?J.min.z:0;else{const wt=Math.pow(2,-q);Ce=Math.floor(St.width*wt),Se=Math.floor(St.height*wt),A.isDataArrayTexture?De=St.depth:A.isData3DTexture?De=Math.floor(St.depth*wt):De=1,Oe=0,Je=0,nt=0}X!==null?(Ne=X.x,ut=X.y,Lt=X.z):(Ne=0,ut=0,Lt=0);const vt=xe.convert(z.format),Gt=xe.convert(z.type);let Ae;z.isData3DTexture?(j.setTexture3D(z,0),Ae=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),Ae=B.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),Ae=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const Kt=S.getParameter(B.UNPACK_ROW_LENGTH),lt=S.getParameter(B.UNPACK_IMAGE_HEIGHT),an=S.getParameter(B.UNPACK_SKIP_PIXELS),Ln=S.getParameter(B.UNPACK_SKIP_ROWS),ai=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),S.pixelStorei(B.UNPACK_SKIP_ROWS,Je),S.pixelStorei(B.UNPACK_SKIP_IMAGES,nt);const ki=A.isDataArrayTexture||A.isData3DTexture,gt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const wt=Y.get(A),oi=Y.get(z),yt=Y.get(wt.__renderTarget),li=Y.get(oi.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,yt.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Vi=0;Vi<De;Vi++)ki&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(A).__webglTexture,q,nt+Vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,Te,Lt+Vi)),B.blitFramebuffer(Oe,Je,Ce,Se,Ne,ut,Ce,Se,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Y.has(A)){const wt=Y.get(A),oi=Y.get(z);S.bindFramebuffer(B.READ_FRAMEBUFFER,I),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,O);for(let yt=0;yt<De;yt++)ki?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,wt.__webglTexture,q,nt+yt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,wt.__webglTexture,q),gt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oi.__webglTexture,Te,Lt+yt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,oi.__webglTexture,Te),q!==0?B.blitFramebuffer(Oe,Je,Ce,Se,Ne,ut,Ce,Se,B.COLOR_BUFFER_BIT,B.NEAREST):gt?B.copyTexSubImage3D(Ae,Te,Ne,ut,Lt+yt,Oe,Je,Ce,Se):B.copyTexSubImage2D(Ae,Te,Ne,ut,Oe,Je,Ce,Se);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else gt?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ae,Te,Ne,ut,Lt,Ce,Se,De,vt,Gt,St.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Ae,Te,Ne,ut,Lt,Ce,Se,De,vt,St.data):B.texSubImage3D(Ae,Te,Ne,ut,Lt,Ce,Se,De,vt,Gt,St):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Te,Ne,ut,Ce,Se,vt,Gt,St.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Te,Ne,ut,St.width,St.height,vt,St.data):B.texSubImage2D(B.TEXTURE_2D,Te,Ne,ut,Ce,Se,vt,Gt,St);S.pixelStorei(B.UNPACK_ROW_LENGTH,Kt),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt),S.pixelStorei(B.UNPACK_SKIP_PIXELS,an),S.pixelStorei(B.UNPACK_SKIP_ROWS,Ln),S.pixelStorei(B.UNPACK_SKIP_IMAGES,ai),Te===0&&z.generateMipmaps&&B.generateMipmap(Ae),S.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&j.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?j.setTextureCube(A,0):A.isData3DTexture?j.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?j.setTexture2DArray(A,0):j.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){H=0,G=0,K=null,S.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function F_(){const n=document.createElement("canvas");n.width=512,n.height=256;const i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,n.width,n.height),i.strokeStyle="#fff",i.fillStyle="#fff",i.lineCap="round",i.lineJoin="round";const r=o=>{let l=o>>>0;return()=>(l=l*1664525+1013904223>>>0,l/4294967296)};for(let o=0;o<32;o++){const l=o%8*64+32,c=Math.floor(o/8)*64+64*.5,u=64*.34,h=r(1337+o*97);i.save(),i.translate(l,c),i.lineWidth=4.2;const d=o%4;i.beginPath(),d===0?(i.moveTo(0,-u),i.lineTo(0,u)):d===1?(i.moveTo(-u*.45,-u),i.lineTo(-u*.45,u),i.moveTo(u*.45,-u*.7),i.lineTo(u*.45,u*.7)):d===2?(i.moveTo(0,-u),i.lineTo(u*.6,0),i.lineTo(0,u),i.lineTo(-u*.6,0),i.closePath()):(i.moveTo(-u*.55,-u*.85),i.lineTo(u*.55,u*.85),i.moveTo(u*.55,-u*.85),i.lineTo(-u*.55,u*.85));const f=2+Math.floor(h()*3);for(let g=0;g<f;g++){const y=(h()-.5)*u*1.4,m=(h()<.5?-1:1)*(.35+.55*h())*u,b=y+(h()-.5)*u*1.1;i.moveTo(0,y),i.lineTo(m,b),h()>.55&&i.lineTo(m*.5,b+(h()-.5)*u*.6)}i.stroke(),h()>.45&&(i.beginPath(),i.arc((h()-.5)*u*.9,(h()-.5)*u*.9,3.2,0,Math.PI*2),i.fill()),i.restore()}const a=new wh(n);return a.minFilter=Mn,a.magFilter=Ct,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Ql(s=!1){return`
float sgGlyph(float id, vec2 uv) {
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  float g = mod(floor(id), 32.0);
  return ${s?"texture":"texture2D"}(tRunes, (vec2(mod(g, 8.0), 3.0 - floor(g / 8.0)) + uv) / vec2(8.0, 4.0)).r;
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
`}function O_(s,e,t=24){const n=new Bi(2,2).rotateX(-Math.PI/2),i=Ql(!1),r=[];for(let a=0;a<t;a++){const o=new Mt({transparent:!0,depthWrite:!1,side:Dt,blending:Mi,uniforms:{tRunes:{value:e},uTime:{value:0},uColor:{value:new we("#ffaa33")},uOpacity:{value:0},uSides:{value:6},uTurn:{value:.6},uWritten:{value:0},uWhite:{value:0},uInnerCut:{value:0}},vertexShader:`
        varying vec2 vC;
        void main() {
          vC = uv * 2.0 - 1.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vC;
        uniform sampler2D tRunes;
        uniform float uTime, uOpacity, uSides, uTurn, uWritten, uWhite, uInnerCut;
        uniform vec3 uColor;
        ${i}
        void main() {
          float r = length(vC);
          if (r > 1.0 || r < uInnerCut) discard;
          float I = sigil(vC, uSides, uTime * uTurn, uWritten, max(length(fwidth(vC)), 0.005));
          vec3 hue = mix(uColor * 2.4, vec3(3.4, 3.1, 2.7), uWhite);
          vec3 col = hue * min(I, 1.6) + vec3(1.5, 1.35, 1.1) * max(I - 0.85, 0.0);
          col += hue * (0.14 * exp(-(r - 0.95) * (r - 0.95) * 320.0) + 0.04 * (1.0 - r)) * smoothstep(0.0, 0.35, uWritten);
          gl_FragColor = vec4(col * uOpacity, 1.0);
        }
      `}),l=new rt(n,o);l.visible=!1,l.frustumCulled=!1,l.renderOrder=10,s.add(l),r.push({mesh:l,mat:o,active:!1,age:0,life:1,fadeIn:.25,fadeOut:.35,scale0:1,scale1:1,rise:0})}return{spawn({pos:a,color:o="#ffaa33",sides:l=6,radius:c=3,endRadius:u=c,life:h=1.6,turn:d=.7,normal:f=null,innerCut:g=0,rise:y=0,white:v=0}){const m=r.find(b=>!b.active)||r[0];if(m.active=!0,m.age=0,m.life=h,m.scale0=c,m.scale1=u,m.rise=y,m.mesh.visible=!0,m.mesh.position.copy(a),f){const b=new L(0,1,0),E=new Ht().setFromUnitVectors(b,f.clone().normalize());m.mesh.quaternion.copy(E)}else m.mesh.quaternion.identity();return m.mesh.scale.setScalar(c),m.mat.uniforms.uColor.value.set(o),m.mat.uniforms.uSides.value=l,m.mat.uniforms.uTurn.value=d,m.mat.uniforms.uInnerCut.value=g,m.mat.uniforms.uWhite.value=v,m.mat.uniforms.uWritten.value=0,m.mat.uniforms.uOpacity.value=1,m},update(a,o){for(const l of r){if(!l.active)continue;l.age+=a;const c=l.age/l.life;if(c>=1){l.active=!1,l.mesh.visible=!1;continue}const u=Math.min(1,l.age/Math.min(.45,l.life*.35)),h=1-Vt.smoothstep(c,.65,1),d=Vt.lerp(l.scale0,l.scale1,Vt.smoothstep(c,0,1));l.mesh.scale.setScalar(d),l.rise!==0&&(l.mesh.position.y+=l.rise*a),l.mat.uniforms.uTime.value=o,l.mat.uniforms.uWritten.value=u,l.mat.uniforms.uOpacity.value=h}},clear(){for(const a of r)a.active=!1,a.mesh.visible=!1}}}const Wh=`
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
`,B_=`
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
`,z_=Wh+`
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
`,k_=Wh+`
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
`;class Iu{constructor(e,t,n){this.cap=e,this.n=0;const i=a=>new Float32Array(e*a);Object.assign(this,{p:i(3),v:i(3),life:i(1),max:i(1),size:i(2),col:i(4),kind:i(1),seed:i(1),rot:i(2),drag:i(1),grav:i(1)});const r=new yp;r.setAttribute("position",new mt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),r.setIndex([0,1,2,0,2,3]),this.iA=new Sn(i(4),4),this.iB=new Sn(i(4),4),this.iC=new Sn(i(4),4),this.iD=new Sn(i(3),3);for(const a of[this.iA,this.iB,this.iC,this.iD])a.setUsage(dh);r.setAttribute("iA",this.iA),r.setAttribute("iB",this.iB),r.setAttribute("iC",this.iC),r.setAttribute("iD",this.iD),r.instanceCount=0,this.geometry=r,this.mesh=new rt(r,new Mt({uniforms:{tRunes:{value:n}},vertexShader:B_,fragmentShader:t?z_:k_,transparent:!0,depthWrite:!1,side:Dt,blending:la,blendSrc:Ii,blendDst:sr,blendSrcAlpha:ca,blendDstAlpha:Ii})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t?12:11}add(e){if(this.n>=this.cap)return;const t=this.n++;this.p.set([e.x,e.y,e.z],t*3),this.v.set([e.vx??0,e.vy??0,e.vz??0],t*3),this.life[t]=0,this.max[t]=e.life??.8;const n=e.size??.3;this.size.set(Array.isArray(n)?n:[n,n],t*2);const i=e.colour??[1,1,1];this.col.set([i[0],i[1],i[2],e.alpha??1],t*4),this.kind[t]=e.kind??0,this.seed[t]=Math.random(),this.rot.set([e.rot??(Math.random()-.5)*.8,e.spin??0],t*2),this.drag[t]=e.drag??.3,this.grav[t]=e.grav??0}update(e,t){const{p:n,v:i,life:r,max:a,size:o,col:l,kind:c,seed:u,rot:h,drag:d,grav:f}=this,g=this.iA.array,y=this.iB.array,v=this.iC.array,m=this.iD.array;for(let b=0;b<this.n;){if(r[b]+=e,r[b]>=a[b]){const M=--this.n;b!==M&&(n.copyWithin(b*3,M*3,M*3+3),i.copyWithin(b*3,M*3,M*3+3),o.copyWithin(b*2,M*2,M*2+2),l.copyWithin(b*4,M*4,M*4+4),h.copyWithin(b*2,M*2,M*2+2),r[b]=r[M],a[b]=a[M],c[b]=c[M],u[b]=u[M],d[b]=d[M],f[b]=f[M]);continue}const E=b*3,p=Math.exp(-d[b]*e);i[E]*=p,i[E+1]=i[E+1]*p+f[b]*e,i[E+2]*=p;for(let M=0;M<t.length;M++){const T=t[M],_=T.x-n[E],w=T.y-n[E+1],R=T.z-n[E+2],C=Math.hypot(_,w,R)+.001;if(C>T.radius)continue;const N=1-C/T.radius;if(T.type==="vortex"){const U=-R/C,I=_/C;i[E]+=(U*T.spin+_/C*T.pull)*N*e,i[E+1]+=T.lift*N*e,i[E+2]+=(I*T.spin+R/C*T.pull)*N*e}else if(T.type==="lift")i[E+1]+=T.strength*N*e,i[E]+=-R/C*2.5*N*e,i[E+2]+=_/C*2.5*N*e;else if(T.type==="pull"){const U=T.strength*N*e/(.6+C*.2);i[E]+=(_+R*(T.swirl??.6))*U,i[E+1]+=w*U,i[E+2]+=(R-_*(T.swirl??.6))*U}else T.type==="crush"&&(i[E+1]-=T.strength*N*e)}n[E]+=i[E]*e,n[E+1]+=i[E+1]*e,n[E+2]+=i[E+2]*e,n[E+1]<.05&&i[E+1]<0&&(n[E+1]=.05,i[E+1]*=-.35,i[E]*=.7,i[E+2]*=.7),h[b*2]+=h[b*2+1]*e;const x=r[b]/a[b];g[b*4]=n[E],g[b*4+1]=n[E+1],g[b*4+2]=n[E+2],g[b*4+3]=o[b*2]+(o[b*2+1]-o[b*2])*x,y[b*4]=x,y[b*4+1]=u[b],y[b*4+2]=c[b],y[b*4+3]=h[b*2],v[b*4]=l[b*4],v[b*4+1]=l[b*4+1],v[b*4+2]=l[b*4+2],v[b*4+3]=l[b*4+3],m[E]=i[E],m[E+1]=i[E+1],m[E+2]=i[E+2],b++}this.geometry.instanceCount=this.n;for(const b of[this.iA,this.iB,this.iC,this.iD])b.needsUpdate=!0}clear(){this.n=0,this.geometry.instanceCount=0}}function V_(s,e){const t=new Iu(6e3,!0,e),n=new Iu(3500,!1,e),i=new sn;i.add(n.mesh,t.mesh),s.add(i);const r=[],a=(o=1)=>(Math.random()-.5)*2*o;return{group:i,rnd:a,fields:r,spawn(o){const l=o.kind??0;(l===2||l===4?n:t).add(o)},burst(o,l,c=40,u=8,h=1){for(let d=0;d<c;d++){const f=Math.random()*Math.PI*2,g=Math.acos(2*Math.random()-1),y=u*(.35+.65*Math.random());this.spawn({kind:h,x:o.x+a(.25),y:o.y+a(.25),z:o.z+a(.25),vx:Math.sin(g)*Math.cos(f)*y,vy:Math.cos(g)*y+1.5,vz:Math.sin(g)*Math.sin(f)*y,life:.4+.65*Math.random(),size:h===2?[.6,2.4]:h===0?[.4,1.1]:[.06,.015],colour:l,grav:h===1?-11:h===2?1.5:-2,drag:h===2?1.1:.7})}},update(o){t.update(o,r),n.update(o,r),r.length=0},clear(){t.clear(),n.clear(),r.length=0}}}const H_=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;function G_(s,e){const t=s.getDrawingBufferSize(new ze),n=new dn(Math.max(1,t.x),Math.max(1,t.y),{samples:4,type:An,depthBuffer:!0,generateMipmaps:!0,minFilter:Mn,magFilter:Ct});n.depthTexture=new Ms(Math.max(1,t.x),Math.max(1,t.y),wn);const i=Ql(!0),r={tDrawn:{value:n.texture},tDepth:{value:n.depthTexture},tRunes:{value:e},uSize:{value:t.clone()},uNearFar:{value:new ze(.15,320)},uCutLine:{value:new Ke(.15,.5,.85,.5)},uCutFx:{value:new Ke(0,0,0,0)},uCutDraw:{value:new Ke(0,0,1,320)},uCutStep:{value:new Ke(0,0,20,0)},uCutWorld:{value:new Ke(0,0,0,0)},uCutWorldN:{value:new Ke(0,1,0,0)},uCutMid:{value:new L(0,0,1)},uCutDome:{value:new ze(.5,.5)},uCutInvVP:{value:new qe},uCutCam:{value:new L},uPalDark:{value:new we("#0e0a1f")},uPalMid:{value:new we("#4d3880")},uPalHi:{value:new we("#f5d68f")},uPalLight:{value:new we("#fff7e0")},uShock:{value:new Ke(.5,.5,0,0)},uHole:{value:new Ke(.5,.5,0,0)},uHoleB:{value:new Ke(0,0,0,0)},uHoleC:{value:new Ke(.15,320,2,15)},uHoleCol:{value:new we("#9955ff")},uDoom:{value:0},uDoomCol:{value:new we("#301440")},uInk:{value:0},uWhite:{value:0},uTintFlash:{value:new Ke(1,.45,.15,0)},uDamage:{value:0}},a=new Mt({glslVersion:fl,depthTest:!1,depthWrite:!1,uniforms:r,vertexShader:H_,fragmentShader:`
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

      ${i}

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
    `}),o=new rt(new Bi(2,2),a);o.frustumCulled=!1;const l=new zl;l.add(o);const c=new $l,u=new L;return{uniforms:r,setPalette(h,d,f,g="#fff8e8"){r.uPalDark.value.set(h),r.uPalMid.value.set(d),r.uPalHi.value.set(f),r.uPalLight.value.set(g)},setShock(h,d,f,g){if(g<=.001){r.uShock.value.w=0;return}const y=Math.max(h.position.distanceTo(d),1);if(u.copy(d).project(h),u.z>1||u.z<-1){r.uShock.value.w=0;return}const v=1/(2*Math.tan(h.fov*Math.PI/360)*y);r.uShock.value.set(u.x*.5+.5,u.y*.5+.5,f*v,g)},setHole(h,d,f,g,y=0,v=1,m="#9955ff"){if(g<=.001){r.uHole.value.w=0,r.uHoleB.value.z=0;return}if(u.copy(d).project(h),u.z>1||u.z<-1){r.uHole.value.w=0,r.uHoleB.value.z=0;return}const b=Math.max(h.position.distanceTo(d),1),E=1/(2*Math.tan(h.fov*Math.PI/360)*b);r.uHole.value.set(u.x*.5+.5,u.y*.5+.5,f*1.55*E,g),r.uHoleB.value.set(f*E,u.z*.5+.5,y,v);const p=-u.copy(d).applyMatrix4(h.matrixWorldInverse).z;r.uHoleC.value.set(h.near,h.far,f,p),r.uHoleCol.value.set(m)},setCleave(h,d){r.uCutLine.value.set(h.a.x,h.a.y,h.b.x,h.b.y),r.uCutFx.value.set(h.mode,h.k,h.written,h.fringe),r.uCutDraw.value.set(h.focus,h.pulse??0,h.up??1,d.far),r.uCutWorld.value.set(h.C.x,h.C.y,h.C.z,h.age),r.uCutWorldN.value.set(h.N.x,h.N.y,h.N.z,h.haze),r.uCutMid.value.copy(h.M),r.uCutStep.value.set(h.frame,h.circle,h.D??18,h.split),h.age>0&&(u.copy(h.C).project(d),r.uCutDome.value.set(u.x*.5+.5,u.y*.5+.5),r.uCutInvVP.value.multiplyMatrices(d.matrixWorld,d.projectionMatrixInverse),r.uCutCam.value.copy(d.position))},resize(){s.getDrawingBufferSize(t),n.setSize(Math.max(1,t.x),Math.max(1,t.y)),r.uSize.value.copy(t)},render(h,d,f=null){r.uNearFar.value.set(d.near,d.far),s.setRenderTarget(n),s.setClearColor(790816,1),s.clear(),s.render(h,d),f&&(s.clearDepth(),s.render(f.scene,f.camera)),s.setRenderTarget(null),s.render(l,c)}}}const So=`
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
`;function W_(){const s=new Tt;return s.setAttribute("position",new mt([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),s.setIndex([0,1,2,0,2,3]),s}function X_(s){const e=W_(),t=[];for(let l=0;l<4;l++){const c=new Mt({transparent:!0,depthWrite:!1,side:Dt,blending:la,blendSrc:Ii,blendDst:sr,blendSrcAlpha:ca,blendDstAlpha:Ii,uniforms:{uTime:{value:0},uC:{value:new L},uBall:{value:new Ke(2,2,0,0)},uNear:{value:1},uColCore:{value:new we("#fff5d6")},uColMid:{value:new we("#ff5518")},uColSmoke:{value:new we("#221c28")}},vertexShader:`
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
      `,fragmentShader:So+`
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
      `}),u=new rt(e,c);u.visible=!1,u.frustumCulled=!1,u.renderOrder=13,s.add(u),t.push({mesh:u,mat:c,active:!1,age:0,life:2.6,maxR:5.5,pos:new L})}const n=[];for(let l=0;l<3;l++){const c=new Mt({transparent:!0,depthWrite:!1,side:Dt,blending:la,blendSrc:Ii,blendDst:sr,blendSrcAlpha:ca,blendDstAlpha:Ii,uniforms:{uTime:{value:0},uBase:{value:new L},uShape:{value:new Ke(16,1.4,5.2,1)},uLean:{value:new ze(0,0)},uNear:{value:1},uColA:{value:new we("#66e0ff")},uColB:{value:new we("#1d2a44")}},vertexShader:`
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
      `,fragmentShader:So+`
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
      `}),u=new rt(e,c);u.visible=!1,u.frustumCulled=!1,u.renderOrder=12,s.add(u),n.push({mesh:u,mat:c,active:!1})}const i=[],r=new ql(.95,3.6,128,1).rotateX(-Math.PI/2);for(let l=0;l<3;l++){const c=new Mt({transparent:!0,depthWrite:!1,side:Dt,blending:Mi,uniforms:{uTime:{value:0},uOn:{value:0},uColA:{value:new we("#6a2cff")},uColB:{value:new we("#ffaa55")}},vertexShader:`
        varying vec3 vL; varying vec3 vW;
        void main() {
          vL = position;
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          gl_Position = projectionMatrix * viewMatrix * w;
        }
      `,fragmentShader:So+`
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
      `}),u=new rt(r,c);u.visible=!1,u.frustumCulled=!1,u.renderOrder=11,s.add(u),i.push({mesh:u,mat:c,active:!1})}const a=[],o=new ms(1,1,1,24,1,!0).translate(0,.5,0);for(let l=0;l<4;l++){const c=new Mt({transparent:!0,depthWrite:!1,side:Dt,blending:Mi,uniforms:{uTime:{value:0},uColor:{value:new we("#44ddff")},uOpacity:{value:0}},vertexShader:`
        varying vec2 vUv; varying vec3 vN; varying vec3 vV;
        void main() {
          vUv = uv;
          vec4 w = modelMatrix * vec4(position, 1.0);
          vN = normalize(mat3(modelMatrix) * normal);
          vV = normalize(cameraPosition - w.xyz);
          gl_Position = projectionMatrix * viewMatrix * w;
        }
      `,fragmentShader:`
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
      `}),u=new rt(o,c);u.visible=!1,u.frustumCulled=!1,u.renderOrder=12,s.add(u),a.push({mesh:u,mat:c,active:!1,age:0,life:.6,r0:.6})}return{spawnBlast({pos:l,maxR:c=5.5,life:u=2.6,colCore:h="#fff6dc",colMid:d="#ff541a",colSmoke:f="#221c28"}){const g=t.find(y=>!y.active)||t[0];return g.active=!0,g.age=0,g.life=u,g.maxR=c,g.pos.copy(l),g.mesh.visible=!0,g.mat.uniforms.uC.value.copy(l),g.mat.uniforms.uColCore.value.set(h),g.mat.uniforms.uColMid.value.set(d),g.mat.uniforms.uColSmoke.value.set(f),g},acquireVortex(){const l=n.find(c=>!c.active)||n[0];return l.active=!0,l.mesh.visible=!0,l},releaseVortex(l){l&&(l.active=!1,l.mesh.visible=!1)},acquireDisc(){const l=i.find(c=>!c.active)||i[0];return l.active=!0,l.mesh.visible=!0,l},releaseDisc(l){l&&(l.active=!1,l.mesh.visible=!1)},spawnBeam({from:l,to:c,radius:u=.65,color:h="#44ddff",life:d=.65}){const f=a.find(v=>!v.active)||a[0];f.active=!0,f.age=0,f.life=d,f.r0=u,f.mesh.visible=!0;const g=new L().subVectors(c,l),y=Math.max(.5,g.length());return f.mesh.position.copy(l),f.mesh.quaternion.setFromUnitVectors(new L(0,1,0),g.normalize()),f.mesh.scale.set(u,y,u),f.mat.uniforms.uColor.value.set(h),f.mat.uniforms.uOpacity.value=1,f},update(l,c,u){for(const h of t){if(!h.active)continue;h.age+=l;const d=h.age/h.life;if(d>=1){h.active=!1,h.mesh.visible=!1;continue}const f=1-Math.exp(-h.age*4.5),g=h.maxR*(.28+.72*f),y=g*(.65+1.35*d),v=1-Vt.smoothstep(d,.55,1),m=u.position.distanceTo(h.pos);h.mat.uniforms.uTime.value=c,h.mat.uniforms.uBall.value.set(g,y,h.age,v),h.mat.uniforms.uNear.value=Math.min(g*1.4,Math.max(.4,m-1.2))}for(const h of n){if(!h.active)continue;h.mat.uniforms.uTime.value=c;const d=u.position.distanceTo(h.mat.uniforms.uBase.value);h.mat.uniforms.uNear.value=Math.min(h.mat.uniforms.uShape.value.z*1.2,Math.max(.4,d-1.5))}for(const h of i)h.active&&(h.mat.uniforms.uTime.value=c);for(const h of a){if(!h.active)continue;h.age+=l;const d=h.age/h.life;if(d>=1){h.active=!1,h.mesh.visible=!1;continue}const f=h.r0*(.35+.85*Math.sin(Math.min(1,d*4)*Math.PI*.5))*(1-Math.pow(d,2.2)*.85);h.mesh.scale.x=f,h.mesh.scale.z=f,h.mat.uniforms.uTime.value=c,h.mat.uniforms.uOpacity.value=1-Vt.smoothstep(d,.5,1)}},clear(){for(const l of t)l.active=!1,l.mesh.visible=!1;for(const l of n)l.active=!1,l.mesh.visible=!1;for(const l of i)l.active=!1,l.mesh.visible=!1;for(const l of a)l.active=!1,l.mesh.visible=!1}}}function q_(){let s=null,e=!1,t=null;const n=()=>{if(e)return null;if(!s){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;s=new i({latencyHint:"interactive"});const r=s.sampleRate,a=Math.random,o=(C=1)=>{const N=s.createGain();return N.gain.value=C,N},l=(C,N,U=.7)=>{const I=s.createBiquadFilter();return I.type=C,I.frequency.value=N,I.Q.value=U,I},c=(...C)=>{for(let N=0;N<C.length-1;N++)C[N].connect(C[N+1]);return C[C.length-1]},u=o(1),h=o(1),d=l("lowpass",2e4,.5),f=o(.65),g=s.createDynamicsCompressor();g.threshold.value=-6,g.knee.value=6,g.ratio.value=8,g.attack.value=.003,g.release.value=.28;const y=s.createWaveShaper();y.curve=Float32Array.from({length:2049},(C,N)=>Math.tanh((N-1024)/1024*1.6)/Math.tanh(1.6)),y.oversample="2x";const v=o(.88);c(u,h,d,f,g,y,v,s.destination);const m=s.createConvolver(),b=o(1);{const C=Math.floor(r*2.6),N=s.createBuffer(2,C,r);for(let U=0;U<2;U++){const I=N.getChannelData(U);let O=0;for(let H=0;H<C;H++){const G=H/r;O+=(.04+.5*Math.exp(-G*1.8))*(a()*2-1-O),I[H]=O*Math.exp(-G*2.2)*Math.min(1,G/.01)}for(let H=0;H<8;H++){const G=Math.floor(r*(.016+.14*a()));I[G]+=(a()<.5?-1:1)*(.85-.07*H)}}m.buffer=N}c(b,m,o(.68),u);const E=o(1),p=s.createDelay(1.5),x=l("lowpass",1200,.5);p.delayTime.value=.44,c(E,p,x,o(.55),u),c(x,o(.32),p);const M={};for(const C of["white","pink","brown"]){const N=Math.floor(r*3),U=s.createBuffer(2,N,r);for(let I=0;I<2;I++){const O=U.getChannelData(I);let H=0,G=0,K=0,$=0;for(let ne=0;ne<N;ne++){const te=a()*2-1;C==="white"?O[ne]=te:C==="pink"?(H=.99765*H+te*.099046,G=.963*G+te*.2965164,K=.57*K+te*1.0526913,O[ne]=(H+G+K+te*.1848)*.24):($=($+.02*te)/1.02,O[ne]=$*3.2)}}M[C]=U}t={mix:u,hush:h,ears:d,G:o,F:l,chain:c,shaper:(C=2.4)=>{const N=s.createWaveShaper();return N.curve=Float32Array.from({length:1025},(U,I)=>Math.tanh((I-512)/512*C)),N},env:(C,N,U,I=!1)=>{C.cancelScheduledValues(N),C.setValueAtTime(U[0][1],N+U[0][0]);for(let O=1;O<U.length;O++)I&&U[O][1]>0&&U[O-1][1]>0?C.exponentialRampToValueAtTime(U[O][1],N+U[O][0]):C.linearRampToValueAtTime(U[O][1],N+U[O][0])},noise:(C,N,U)=>{const I=s.createBufferSource();return I.buffer=M[C],I.loop=!0,I.start(N,a()*2.2),I.stop(U),I},send:(C,{air:N=.25,echo:U=0}={})=>{C.connect(u),N&&c(C,o(N),b),U&&c(C,o(U),E)}}}return s.state==="suspended"&&s.resume().catch(()=>{}),t};return{unlock:n,get muted(){return e},set muted(i){e=!!i},cleaveAim(){const i=n();if(!i)return;const r=s.currentTime,a=s.createOscillator();a.type="sine",i.env(a.frequency,r,[[0,320],[.35,68]],!0);const o=i.G(1e-4);i.env(o.gain,r,[[0,1e-4],[.04,.35],[.42,1e-4]],!0),i.send(i.chain(a,o),{air:.6}),a.start(r),a.stop(r+.45);const l=i.F("bandpass",2400,3.2),c=i.G(1e-4);i.env(l.frequency,r,[[0,2400],[.35,280]],!0),i.env(c.gain,r,[[0,1e-4],[.05,.26],[.4,1e-4]],!0),i.send(i.chain(i.noise("pink",r,r+.42),l,c),{air:.45})},cleaveSlash(){const i=n();if(!i)return;const r=s.currentTime;i.env(i.hush.gain,r,[[0,1],[.01,.15],[.08,.15],[.1,1]]);const a=r+.085,o=i.F("highpass",1400),l=i.G(1e-4);i.env(l.gain,r,[[0,1e-4],[.006,.65],[.16,1e-4]],!0),i.send(i.chain(i.noise("white",r,r+.18),o,l),{air:.4,echo:.45});const c=s.createOscillator();c.type="sine",i.env(c.frequency,a,[[0,92],[.45,28]],!0);const u=i.G(1e-4);i.env(u.gain,a,[[0,1e-4],[.01,.95],[1.4,1e-4]],!0),i.send(i.chain(c,u,i.shaper(2.4),i.G(.7)),{air:.25,echo:.3}),c.start(a),c.stop(a+1.45);for(const[f,g]of[[880,.12],[1318,.09],[2637,.05]]){const y=s.createOscillator();y.type="triangle",y.frequency.setValueAtTime(f,a),y.frequency.exponentialRampToValueAtTime(f*.985,a+1.1);const v=i.G(1e-4);i.env(v.gain,a,[[0,1e-4],[.008,g],[1.1,1e-4]],!0),i.send(i.chain(y,v),{air:.75,echo:.4}),y.start(a),y.stop(a+1.15)}const h=i.F("bandpass",900,.9),d=i.G(1e-4);i.env(h.frequency,a+.05,[[0,1400],[.8,160]],!0),i.env(d.gain,a+.05,[[0,1e-4],[.05,.52],[.95,1e-4]],!0),i.send(i.chain(i.noise("pink",a+.05,a+1.05),h,d),{air:.45,echo:.35})},gravityLift(){const i=n();if(!i)return;const r=s.currentTime;for(const[l,c,u]of[[58,118,.32],[59.3,121,.26],[174,348,.12]]){const h=s.createOscillator();h.type=l>100?"triangle":"sine",i.env(h.frequency,r,[[0,l],[1.05,c]],!0);const d=i.G(1e-4);i.env(d.gain,r,[[0,1e-4],[.15,u],[1.1,1e-4]],!0),i.send(i.chain(h,d),{air:.55}),h.start(r),h.stop(r+1.15)}const a=i.F("bandpass",220,2.2),o=i.G(1e-4);i.env(a.frequency,r,[[0,180],[1,960]],!0),i.env(o.gain,r,[[0,1e-4],[.2,.28],[1.1,1e-4]],!0),i.send(i.chain(i.noise("brown",r,r+1.15),a,o),{air:.4})},gravitySlam(){const i=n();if(!i)return;const r=s.currentTime;i.env(i.ears.frequency,r,[[0,2e4],[.12,2600],[1.1,2e4]],!0);const a=s.createOscillator();a.type="sine",i.env(a.frequency,r,[[0,115],[.55,26]],!0);const o=i.G(1e-4);i.env(o.gain,r,[[0,1e-4],[.008,1.1],[1.9,1e-4]],!0),i.send(i.chain(a,o,i.shaper(2.8),i.G(.75)),{air:.3,echo:.5}),a.start(r),a.stop(r+1.95);const l=i.F("lowpass",1800,.7),c=i.G(1e-4);i.env(l.frequency,r,[[0,2200],[1.2,120]],!0),i.env(c.gain,r,[[0,1e-4],[.012,.75],[1.6,1e-4]],!0),i.send(i.chain(i.noise("brown",r,r+1.65),l,c),{air:.45,echo:.5})},blastCharge(){const i=n();if(!i)return;const r=s.currentTime;[220,329.6,440].forEach((a,o)=>{const l=r+o*.14,c=s.createOscillator();c.type="triangle",c.frequency.setValueAtTime(a,l);const u=i.G(1e-4);i.env(u.gain,l,[[0,1e-4],[.015,.14],[.35,1e-4]],!0),i.send(i.chain(c,u),{air:.65}),c.start(l),c.stop(l+.38)})},blastBoom(){const i=n();if(!i)return;const r=s.currentTime;i.env(i.ears.frequency,r,[[0,2e4],[.14,2400],[1.4,2e4]],!0);for(const[u,h,d]of[[0,1200,.65],[.045,700,.42]]){const f=i.G(1e-4);i.env(f.gain,r+u,[[0,1e-4],[.005,d],[.16,1e-4]],!0),i.send(i.chain(i.noise("white",r+u,r+u+.18),i.F("highpass",h),f),{air:.35,echo:.55})}const a=i.F("lowpass",3800,.6),o=i.G(1e-4);i.env(a.frequency,r,[[0,3800],[1.4,150]],!0),i.env(o.gain,r,[[0,1e-4],[.02,.85],[2.2,1e-4]],!0),i.send(i.chain(i.noise("pink",r,r+2.25),a,o),{air:.4,echo:.55});const l=s.createOscillator();l.type="sine",i.env(l.frequency,r,[[0,88],[.5,28]],!0);const c=i.G(1e-4);i.env(c.gain,r,[[0,1e-4],[.01,1],[2,1e-4]],!0),i.send(i.chain(l,c,i.shaper(2.6),i.G(.75)),{air:.25,echo:.4}),l.start(r),l.stop(r+2.05)},vortex(){const i=n();if(!i)return;const r=s.currentTime,a=i.F("bandpass",260,1.8),o=i.G(1e-4);i.env(a.frequency,r,[[0,260],[.4,1100],[1.3,420]],!0),i.env(o.gain,r,[[0,1e-4],[.15,.48],[1.4,1e-4]],!0),i.send(i.chain(i.noise("pink",r,r+1.45),a,o),{air:.55,echo:.3})},beam(){const i=n();if(!i)return;const r=s.currentTime;for(const[a,o,l,c]of[[420,165,"sawtooth",.22],[840,330,"triangle",.16],[110,52,"sine",.45]]){const u=s.createOscillator();u.type=l,i.env(u.frequency,r,[[0,a],[.65,o]],!0);const h=i.G(1e-4);i.env(h.gain,r,[[0,1e-4],[.015,c],[.68,1e-4]],!0),i.send(i.chain(u,i.F("lowpass",2600),h),{air:.45,echo:.35}),u.start(r),u.stop(r+.72)}},bolt(){const i=n();if(!i)return;const r=s.currentTime,a=s.createOscillator();a.type="triangle",i.env(a.frequency,r,[[0,880],[.14,210]],!0);const o=i.G(1e-4);i.env(o.gain,r,[[0,1e-4],[.005,.24],[.16,1e-4]],!0),i.send(i.chain(a,o),{air:.35}),a.start(r),a.stop(r+.18)},ward(){const i=n();if(!i)return;const r=s.currentTime;for(const a of[523.25,783.99]){const o=s.createOscillator();o.type="sine",o.frequency.setValueAtTime(a,r);const l=i.G(1e-4);i.env(l.gain,r,[[0,1e-4],[.02,.12],[.28,1e-4]],!0),i.send(i.chain(o,l),{air:.6}),o.start(r),o.stop(r+.3)}},hit(){const i=n();if(!i)return;const r=s.currentTime,a=s.createOscillator();a.type="triangle",i.env(a.frequency,r,[[0,175],[.15,48]],!0);const o=i.G(1e-4);i.env(o.gain,r,[[0,1e-4],[.004,.45],[.2,1e-4]],!0),i.send(i.chain(a,o),{air:.25}),a.start(r),a.stop(r+.22)},dash(){const i=n();if(!i)return;const r=s.currentTime,a=i.F("bandpass",1800,1.6),o=i.G(1e-4);i.env(a.frequency,r,[[0,2200],[.18,420]],!0),i.env(o.gain,r,[[0,1e-4],[.015,.26],[.2,1e-4]],!0),i.send(i.chain(i.noise("pink",r,r+.22),a,o),{air:.25})},forge(){const i=n();if(!i)return;const r=s.currentTime;for(const[a,o]of[[440,0],[659.25,.04]]){const l=s.createOscillator();l.type="sine",l.frequency.setValueAtTime(a,r+o);const c=i.G(1e-4);i.env(c.gain,r+o,[[0,1e-4],[.01,.09],[.26,1e-4]],!0),i.send(i.chain(l,c),{air:.65}),l.start(r+o),l.stop(r+o+.28)}},victory(){const i=n();if(!i)return;const r=s.currentTime;[[440,0],[554.37,.14],[659.25,.28],[880,.44]].forEach(([a,o])=>{const l=s.createOscillator();l.type="triangle",l.frequency.setValueAtTime(a,r+o);const c=i.G(1e-4);i.env(c.gain,r+o,[[0,1e-4],[.02,.16],[.65,1e-4]],!0),i.send(i.chain(l,c),{air:.75,echo:.35}),l.start(r+o),l.stop(r+o+.7)})}}}const Xs=[{id:"achaidh",name:"Achaidh Cheide",file:"achaidh-cheide.ogg",level:.42},{id:"valley",name:"Enchanted Valley",file:"enchanted-valley.ogg",level:.48},{id:"evening",name:"Evening Fall",file:"evening-fall.ogg",level:.58}];function Y_({base:s="./music/"}={}){const e=new Audio;e.loop=!0,e.preload="auto",e.volume=0;let t=0,n=!1,i=1,r=!1,a=performance.now();const o=()=>{e.src=s+Xs[t].file,e.currentTime=0};o();const l=()=>!n&&!document.hidden,c=()=>{r=!1,e.play().catch(()=>{r=!0})};return setInterval(()=>{const u=performance.now(),h=Math.min(.2,(u-a)/1e3);a=u;const d=l()?Xs[t].level*i:0,f=e.volume;d>f?(e.paused&&!r&&c(),e.volume=Math.min(d,f+h*.35)):d<f?e.volume=Math.max(d,f-h*.55):d===0&&!e.paused&&e.pause()},40),{get trackName(){return Xs[t].name},get muted(){return n},set muted(u){n=!!u},set duck(u){i=Math.max(.15,Math.min(1,u))},wake(){l()&&(e.paused||r)&&c()},nextTrack(){return t=(t+1)%Xs.length,e.pause(),e.volume=0,o(),l()&&c(),Xs[t].name}}}function K_(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Tt;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Pu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][d]);const g=Pu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Pu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new Ft(a,t,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const y=u.getComponent(d,g);o.setComponent(d+h,g,y)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function $_(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let a=0;const o=Object.keys(s.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let b=0,E=o.length;b<E;b++){const p=o[b],x=s.attributes[p];l[p]=new x.constructor(new x.array.constructor(x.count*x.itemSize),x.itemSize,x.normalized);const M=s.morphAttributes[p];M&&(c[p]||(c[p]=[]),M.forEach((T,_)=>{const w=new T.array.constructor(T.count*T.itemSize);c[p][_]=new T.constructor(w,T.itemSize,T.normalized)}))}const f=e*.5,g=Math.log10(1/e),y=Math.pow(10,g),v=f*y;for(let b=0;b<r;b++){const E=n?n.getX(b):b;let p="";for(let x=0,M=o.length;x<M;x++){const T=o[x],_=s.getAttribute(T),w=_.itemSize;for(let R=0;R<w;R++)p+=`${Math.trunc(_[h[R]](E)*y+v)},`}if(p in t)u.push(t[p]);else{for(let x=0,M=o.length;x<M;x++){const T=o[x],_=s.getAttribute(T),w=s.morphAttributes[T],R=_.itemSize,C=l[T],N=c[T];for(let U=0;U<R;U++){const I=h[U],O=d[U];if(C[O](a,_[I](E)),w)for(let H=0,G=w.length;H<G;H++)N[H][O](a,w[H][I](E))}}t[p]=a,u.push(a),a++}}const m=s.clone();for(const b in s.attributes){const E=l[b];if(m.setAttribute(b,new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)),b in c)for(let p=0;p<c[b].length;p++){const x=c[b][p];m.morphAttributes[b][p]=new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)}}return m.setIndex(u),m}function Du(s,e){if(e===Od)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===hl||e===uh){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===hl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const Li=new Uint8Array(512);{let s=20261110;const e=Array.from({length:256},(t,n)=>n);for(let t=255;t>0;t--){s=Math.imul(s,1664525)+1013904223>>>0;const n=s%(t+1);[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)Li[t]=e[t&255]}const Nu=s=>s*s*s*(s*(s*6-15)+10),Jr=(s,e,t)=>(s&1?-e:e)+(s&2?-t:t);function Uu(s,e){const t=Math.floor(s)&255,n=Math.floor(e)&255;s-=Math.floor(s),e-=Math.floor(e);const i=Nu(s),r=Nu(e),a=Li[t]+n,o=Li[t+1]+n,l=(c,u,h)=>c+(u-c)*h;return l(l(Jr(Li[a],s,e),Jr(Li[o],s-1,e),i),l(Jr(Li[a+1],s,e-1),Jr(Li[o+1],s-1,e-1),i),r)*1.4}function Z_(s){let e=s>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}const J_=Math.PI*2;function Q_(s){return s.deleteAttribute("uv"),s.deleteAttribute("normal"),s=$_(s,1e-4),s.computeVertexNormals(),s}const j_=(s,e,t,n)=>.6*Uu(s+n,e+t*.71)+.6*Uu(t-n*1.3,s*.83-e*.57+5);function Fu(s,e=.02,t=1.6,n=1,i=0,r=.3){const a=s.attributes.position,o=s.attributes.normal,l=new L,c=new L,u=new L;for(let d=0;d<a.count;d++){l.fromBufferAttribute(a,d);const f=e*j_(l.x*t,l.y*t,l.z*t,n);a.setXYZ(d,l.x+o.getX(d)*f,l.y+o.getY(d)*f,l.z+o.getZ(d)*f)}const h=Z_(n*7+3);for(let d=0;d<i;d++){const f=Math.floor(h()*a.count),g=r*(.6+.8*h());c.fromBufferAttribute(a,f),u.fromBufferAttribute(o,f);for(let y=0;y<a.count;y++){const v=l.fromBufferAttribute(a,y).distanceTo(c);if(v<g){const m=g*.2*(1-(v/g)**2)**2;a.setXYZ(y,l.x-u.x*m,l.y-u.y*m,l.z-u.z*m)}}}return s.computeVertexNormals(),s}function Zs(s,e,{around:t=8,every:n=.14,closed:i=!1,flat:r=1}={}){const a=new qf(s,i,"centripetal"),o=a.getLength(),l=typeof e=="function"?e:()=>e,c=Math.max(3,Math.round(o/n)),u=Math.min(l(0),o*.35),h=Math.min(l(1),o*.35),d=[];if(i)for(let x=0;x<c;x++)d.push(x/c);else{for(const x of[0,.1,.32,.66])d.push(x*u/o);for(let x=0;x<=c;x++)d.push((u+(o-u-h)*(x/c))/o);for(const x of[.66,.32,.1,0])d.push(1-x*h/o)}const f=[],g=[],y=new L,v=new L,m=new L(0,1,0),b=new L,E=d.length;a.getTangentAt(0,v),Math.abs(v.y)>.9&&m.set(1,0,0),d.forEach(x=>{a.getPointAt(x,y),a.getTangentAt(x,v),m.addScaledVector(v,-m.dot(v)).normalize(),b.crossVectors(v,m);const M=x*o;let T=l(x);i||(M<u?T*=Math.sqrt(Math.max(0,1-(1-M/u)**2)):o-M<h&&(T*=Math.sqrt(Math.max(0,1-(1-(o-M)/h)**2))));for(let _=0;_<t;_++){const w=_/t*J_,R=m.x*Math.cos(w)*T+b.x*Math.sin(w)*T,C=m.y*Math.cos(w)*T+b.y*Math.sin(w)*T,N=m.z*Math.cos(w)*T+b.z*Math.sin(w)*T;f.push(y.x+R,y.y+C*r,y.z+N)}});for(let x=0;x<(i?E:E-1);x++)for(let M=0;M<t;M++){const T=(x+1)%E,_=(M+1)%t,w=x*t+M,R=x*t+_,C=T*t+M,N=T*t+_;g.push(w,R,C,R,N,C)}const p=new Tt;return p.setAttribute("position",new mt(f,3)),p.setIndex(g),Q_(p)}const Et=(s,e,t)=>new L(s,e,t);function ex(s,e){const t=new zl,n=new qt(56,window.innerWidth/window.innerHeight,.04,8),i=[],r=(T,_,w)=>{const R=T.attributes.position.count,C=new we(_),N=new Float32Array(R*3),U=new Float32Array(R);for(let I=0;I<R;I++)N.set([C.r,C.g,C.b],I*3),U[I]=w;T.setAttribute("tint",new Ft(N,3)),T.setAttribute("kind",new Ft(U,1)),T.attributes.normal||T.computeVertexNormals(),T.deleteAttribute("uv"),i.push(T.index?T.toNonIndexed():T)},a="#9a683e",o="#deb24a",l=[Et(.012,-1.2,0),Et(-.008,-.85,.006),Et(.01,-.5,-.004),Et(-.006,-.22,.005),Et(0,-.02,0)];r(Fu(Zs(l,T=>.02+.003*Math.sin(T*22)+.003*Math.sin(T*9+1),{around:12,every:.025}),.0022,28,3),a,0);const c=[Et(.006,-.7,.002),Et(.01,-.53,-.004),Et(.004,-.38,0)];r(Zs(c,.0265,{around:12,every:.025}),"#4b3025",1);for(const T of[-.71,-.37])r(new Ss(.029,.0055,8,20).rotateX(Math.PI/2).translate(.006,T,0),o,2);const u=[Et(0,-.06,0),Et(.006,-.01,.002),Et(.032,.045,.004),Et(.068,.115,.006),Et(.08,.19,.004),Et(.056,.26,0),Et(.008,.292,-.004),Et(-.045,.274,-.006),Et(-.074,.224,-.004),Et(-.07,.166,0),Et(-.044,.134,.004)];r(Fu(Zs(u,T=>.021-.0165*Math.pow(T,.8),{around:10,every:.01}),.0014,42,7),a,0);const h=[Et(.014,.01,.004),Et(-.01,.052,.012),Et(-.024,.092,.01),Et(-.017,.124,.004)];r(Zs(h,T=>.0095-.0068*T,{around:8,every:.01}),a,0);for(const[T,_,w]of[[-.145,.0235,.0045],[-.075,.024,.0045]])r(new Ss(_,w,8,20).rotateX(Math.PI/2).translate(0,T,0),o,2);const d={uSun:{value:e.clone()},uGlow:{value:new we("#f4cf7a")},uTime:{value:0},uPower:{value:1}},f=new Mt({uniforms:d,vertexShader:`
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
    `,fragmentShader:`
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
    `}),g=new sn;t.add(g);const y=new rt(K_(i),f);g.add(y);const v=new Mt({uniforms:d,vertexShader:`
      varying vec3 vN; varying vec3 vV;
      void main() {
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vN; varying vec3 vV;
      uniform vec3 uGlow; uniform float uPower;
      void main() {
        float fres = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.0);
        vec3 col = mix(uGlow * 1.6, vec3(3.2, 3.0, 2.7), 0.4 + 0.6 * fres) * uPower;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),m=new rt(new wa(.034,0),v);m.scale.set(.82,1.55,.82),m.position.set(.002,.195,0),g.add(m);const b=new Mt({transparent:!0,depthWrite:!1,side:Dt,blending:Mi,uniforms:{tRunes:{value:s},uTime:d.uTime,uColor:d.uGlow,uSides:{value:6},uPower:d.uPower},vertexShader:"varying vec2 vC; void main() { vC = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      varying vec2 vC; uniform sampler2D tRunes; uniform float uTime, uSides, uPower; uniform vec3 uColor;
      ${Ql(!1)}
      void main() {
        float r = length(vC);
        if (r > 1.0) discard;
        float I = sigil(vC, uSides, uTime * 0.9, 1.0, 0.022);
        gl_FragColor = vec4(uColor * 2.2 * min(I, 1.5) * uPower * 0.55, 1.0);
      }
    `}),E=new rt(new Bi(.24,.24),b);E.position.set(.002,.195,-.02),g.add(E);let p=0,x=0,M=0;return{scene:t,camera:n,resize(T){n.aspect=T,n.updateProjectionMatrix()},setSpell(T,_=6){d.uGlow.value.set(T),b.uniforms.uSides.value=_},update(T,_,{speed:w=0,recoil:R=0,charge:C=0,turnDx:N=0,turnDy:U=0}){d.uTime.value=_,d.uPower.value=1+C*.8+R*.7,p+=(Vt.clamp(-N*1.4,-.08,.08)-p)*Math.min(1,T*10),x+=(Vt.clamp(-U*1.1,-.06,.06)-x)*Math.min(1,T*10),M+=T*(2.2+Math.min(w,12)*.75);const I=Math.cos(M)*Math.min(w*.002,.016),O=Math.abs(Math.sin(M))*Math.min(w*.0022,.018);g.position.set(.34+p+I,-.31+x-O+C*.03-R*.03,-.62-R*.09),g.rotation.set(.16-R*.34-C*.12+x*1.2,-.24+p*1.5,.11-p*1.2),m.position.y=.195+Math.sin(_*2.8)*.006,m.rotation.y=_*1.8,m.rotation.x=Math.sin(_*1.2)*.2,E.rotation.z=-_*.6}}}const ls=27.5,tx=`
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
`,Xh=`
vec3 applyHaze(vec3 col, vec3 world, vec3 sunDir) {
  vec3 v = world - cameraPosition;
  float d = length(v);
  float f = (1.0 - exp(-d * 0.0052)) * 0.92;
  vec3 hazeBlue = vec3(0.56, 0.72, 0.94);
  vec3 hazeSun = vec3(0.95, 0.86, 0.72);
  vec3 haze = mix(hazeBlue, hazeSun, pow(max(dot(v / max(d, 1e-3), normalize(sunDir)), 0.0), 3.0) * 0.65);
  return mix(col, haze, f);
}
`,nx=`
varying vec3 vWorld;
varying vec3 vN;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,ix=Xh+`
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
`,sx=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,rx=`
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
`;function Ou(s,e){return new Mt({uniforms:{uColor:{value:new we(s)},uSunDir:{value:e.clone()}},vertexShader:`
      varying vec3 vW; varying vec3 vN; varying vec3 vL;
      void main() {
        vL = position;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }
    `,fragmentShader:tx+Xh+`
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
    `})}function ax(s){const e=new L(-.52,.54,-.66).normalize(),t=new mp("#a8c8ff","#58524a",.95);s.add(t);const n=new Nh("#fff0d2",1.65);n.position.copy(e).multiplyScalar(70),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.near=10,n.shadow.camera.far=150,n.shadow.camera.left=-36,n.shadow.camera.right=36,n.shadow.camera.top=36,n.shadow.camera.bottom=-36,n.shadow.bias=-8e-4,s.add(n);const i=new Dh("#ffaa44",0,36,1.4);i.position.set(0,4,0),s.add(i);const r={uSunDir:{value:e.clone()},uTime:{value:0}};s.add(new rt(new Yl(220,32,20),new Mt({uniforms:r,vertexShader:sx,fragmentShader:rx,side:Jt,depthWrite:!1})));const a=Array.from({length:8},()=>new Ke(0,0,1,0)),o=Array.from({length:8},()=>new Ke(1,.5,.2,0));let l=0;const c={uTime:{value:0},uSunDir:{value:e.clone()},uMarks:{value:a},uMarkCols:{value:o},uShock:{value:new Ke(0,0,0,0)}},u=new ms(ls+1.2,ls+3.2,3.6,72);u.translate(0,-1.8,0);const h=new rt(u,new Mt({uniforms:c,vertexShader:nx,fragmentShader:ix}));h.receiveShadow=!0,s.add(h);const d=Ou("#c7bca6",e),f=Ou("#d9b66c",e),g=new rt(new Ss(ls+1,.72,10,72),d);g.rotation.x=Math.PI/2,g.position.y=.22,s.add(g);const y=[];for(let E=0;E<8;E++){const p=E/8*Math.PI*2,x=ls+2.8,M=new sn;M.position.set(Math.cos(p)*x,0,Math.sin(p)*x),M.rotation.y=-p+Math.PI/2;const T=new rt(new ni(4.4,1.3,2.2),d);T.position.y=.65,M.add(T);const _=new rt(new ms(.46,.56,7.6,10),d);_.position.set(-1.35,4.9,0),M.add(_);const w=new rt(new ms(.46,.56,E%3===1?5.2:7.6,10),d);if(w.position.set(1.35,E%3===1?3.7:4.9,0),M.add(w),E%3!==1){const R=new rt(new ni(4.5,1.1,1.75),d);R.position.set(0,9.1,0),M.add(R);const C=new rt(new ni(4.7,.26,1.9),f);C.position.set(0,8.5,0),M.add(C)}s.add(M)}for(let E=0;E<5;E++){const p=E/5*Math.PI*2+.35,x=74+E%2*18,M=new rt(new Ss(6+E%3*2.5,.45,8,36),f);M.position.set(Math.cos(p)*x,16+E%3*7,Math.sin(p)*x),M.rotation.set(.35,p,.2),s.add(M),y.push({mesh:M,baseY:M.position.y,phase:E*1.4,speed:.45})}let v=0,m=-1;const b=new ze;return{sunDir:e,radius:ls,addMark(E,p,x,M,T=0){const _=l++%8;a[_].set(E,p,x,1),o[_].set(M[0],M[1],M[2],T)},triggerFloorShock(E,p){b.set(E,p),m=0},flashLight(E,p,x=14){i.position.copy(E),i.color.set(p),v=Math.max(v,x)},clearMarks(){for(let E=0;E<8;E++)a[E].w=0;m=-1,c.uShock.value.w=0},update(E,p){r.uTime.value=p,c.uTime.value=p;for(let x=0;x<8;x++)a[x].w>0&&(a[x].w=Math.max(0,a[x].w-E*.08));if(m>=0){m+=E;const x=m*36,M=Math.max(0,1-m/.9);c.uShock.value.set(b.x,b.y,x,M),M<=0&&(m=-1)}v>.01?(v*=Math.exp(-E*5.2),i.intensity=v):i.intensity=0;for(const x of y)x.mesh.position.y=x.baseY+Math.sin(p*x.speed+x.phase)*.85,x.mesh.rotation.y+=E*.09}}}function ox(s,e){const r=new ni(1,1,1),a=new Float32Array(504),o=new Float32Array(672),l=new Float32Array(672);r.setAttribute("aTint",new Sn(a,3)),r.setAttribute("aClip",new Sn(o,4)),r.setAttribute("aCut",new Sn(l,4));const c={uTime:{value:0},uSunDir:{value:e.clone()},uCutColor:{value:new we("#ffaa38")}},u=new Mt({uniforms:c,side:Dt,vertexShader:`
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
    `,fragmentShader:`
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
    `}),h=new Sh(r,u,168);h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1,h.instanceMatrix.setUsage(dh),s.add(h);const d=[],f=new qe,g=new Ht,y=new Ht,v=new L,m=new L;function b(){d.length=0,o.fill(0),l.fill(0);const x=(M,T,_,w,R,C,N,U)=>{if(d.length>=72)return;const I=d.length,O=new we(N);a.set([O.r,O.g,O.b],I*3),d.push({idx:I,pillarId:U,pos:new L(M,T,_),vel:new L,quat:new Ht,angVel:new L,size:new L(w,R,C),dynamic:!1,sliced:!1,hangTimer:0,pendingSlide:new L,gravControlled:!1,halfRadius:Math.hypot(w,R,C)*.42})};for(let M=0;M<6;M++){const T=M/6*Math.PI*2+Math.PI/6,_=Math.cos(T)*13.5,w=Math.sin(T)*13.5;for(let R=0;R<4;R++){const C=R===0?1.85:R===3?1.7:1.48,N=1.65,U=R%2===0?"#c4b8a0":"#d4cab4";x(_,N*.5+R*N,w,C,N,C,U,M)}}for(let M=0;M<6;M++){const T=M/6*Math.PI*2,_=Math.cos(T)*20.5,w=Math.sin(T)*20.5,R=-Math.sin(T),C=Math.cos(T);for(let N=-1;N<=1;N+=2)for(let U=0;U<2;U++){const I=_+R*N*1.15,O=w+C*N*1.15;x(I,.8+U*1.55,O,1.9,1.52,1.25,U===0?"#b7aa92":"#ccc0a8",10+M),d[d.length-1].quat.setFromAxisAngle(new L(0,1,0),-T+Math.PI/2)}}r.attributes.aTint.needsUpdate=!0,r.attributes.aClip.needsUpdate=!0,r.attributes.aCut.needsUpdate=!0,p()}function E(x,M){for(const T of d)T.pillarId===x&&T.pos.y>=M-.1&&(T.dynamic=!0)}function p(){for(let x=0;x<d.length;x++){const M=d[x];f.compose(M.pos,M.quat,M.size),h.setMatrixAt(x,f)}h.count=d.length,h.instanceMatrix.needsUpdate=!0}return b(),{blocks:d,reset:b,slicePlane({eye:x,n:M,e1:T,e2:_,theta:w,reach:R,slide:C,now:N,cutColorHex:U="#ffaa38"}){c.uCutColor.value.set(U);const I=M.dot(x);let O=0;const H=d.length;for(let G=0;G<H;G++){const K=d[G],$=v.copy(K.pos).sub(x);if($.length()>R)continue;const te=Math.atan2($.dot(_),$.dot(T));if(te<-.14||te>w+.14)continue;const Re=M.dot(K.pos)-I;y.copy(K.quat).invert(),m.copy(M).applyQuaternion(y).normalize();const Le=(Math.abs(m.x)*K.size.x+Math.abs(m.y)*K.size.y+Math.abs(m.z)*K.size.z)*.5;if(!K.sliced&&Math.abs(Re)<Le-.08&&d.length<168){K.sliced=!0,K.dynamic=!0,E(K.pillarId,K.pos.y);const ce=d.length,fe={idx:ce,pillarId:-1,pos:K.pos.clone(),vel:K.vel.clone(),quat:K.quat.clone(),angVel:new L((Math.random()-.5)*1.4,(Math.random()-.5)*1.2,(Math.random()-.5)*1.4),size:K.size.clone(),dynamic:!0,sliced:!0,hangTimer:.45,pendingSlide:C.clone().multiplyScalar(5.5+Math.random()*2.5).addScaledVector(M,2.2),gravControlled:!1,halfRadius:K.halfRadius*.72};d.push(fe),o.set([-m.x,-m.y,-m.z,Re],G*4),l.set([-m.x,-m.y,-m.z,N],G*4),o.set([m.x,m.y,m.z,-Re],ce*4),l.set([m.x,m.y,m.z,N],ce*4),a.set([a[G*3],a[G*3+1],a[G*3+2]],ce*3),fe.pos.addScaledVector(M,.22),K.vel.addScaledVector(C,-1.2),O++}else Re>0&&Re<6&&(K.dynamic=!0,K.hangTimer=.45,K.pendingSlide.copy(C).multiplyScalar(5+Math.random()*2).addScaledVector(M,2),K.angVel.set((Math.random()-.5)*1.5,(Math.random()-.5)*1,(Math.random()-.5)*1.5),O++)}return O>0&&(r.attributes.aTint.needsUpdate=!0,r.attributes.aClip.needsUpdate=!0,r.attributes.aCut.needsUpdate=!0),O},applyBlast(x,M,T=16){for(const _ of d){const w=_.pos.distanceTo(x);if(w>M)continue;_.dynamic=!0,E(_.pillarId,_.pos.y);const R=1-w/M,C=v.copy(_.pos).sub(x);C.lengthSq()<.01&&C.set(Math.random()-.5,1,Math.random()-.5),C.normalize(),_.vel.addScaledVector(C,T*(.45+.75*R)),_.vel.y+=T*.42*R,_.angVel.set((Math.random()-.5)*5*R,(Math.random()-.5)*5*R,(Math.random()-.5)*5*R)}},applyGravityField(x,M,T,_,w=26){for(const R of d){const C=x.x-R.pos.x,N=x.y-R.pos.y,U=x.z-R.pos.z,I=Math.hypot(C,N,U)+.001;if(I>M)continue;R.dynamic=!0,R.gravControlled=!0,E(R.pillarId,R.pos.y);const O=1-I/M;if(T==="lift"){const G=(3.8+R.idx%5*1.15-R.pos.y)*5.2;R.vel.y+=(G-R.vel.y*2.2)*_;const K=-U/I,$=C/I;R.vel.x+=(K*4.5+C/I*1.4-R.vel.x*1.4)*_*(.4+.6*O),R.vel.z+=($*4.5+U/I*1.4-R.vel.z*1.4)*_*(.4+.6*O),R.angVel.set(.7,1.1,.5)}else if(T==="blackhole"){const H=-U/I,G=C/I,K=w*(.4+.8*O)*_;R.vel.x+=C/I*K*1.15+H*K*.95,R.vel.y+=N/I*K*1.15,R.vel.z+=U/I*K*1.15+G*K*.95,R.vel.multiplyScalar(Math.exp(-1.2*_)),R.angVel.set(2.2,2.8,1.7)}else if(T==="vortex"){const H=-U/I,G=C/I,K=w*(.45+.75*O)*_;R.vel.x+=H*K*1.35+C/I*K*.5,R.vel.y+=(12*O-R.vel.y*1.1)*_,R.vel.z+=G*K*1.35+U/I*K*.5,R.angVel.set(2.5,3.8,2.1)}else T==="slam"&&(R.vel.y=Math.min(R.vel.y-w*1.5,-26),R.vel.x*=.6,R.vel.z*=.6)}},collideCircle(x,M,T=2){for(const _ of d){if(_.dynamic&&_.pos.y>2.2)continue;const w=_.size.y*.5;if(x.y+T<_.pos.y-w||x.y>_.pos.y+w)continue;const R=x.x-_.pos.x,C=x.z-_.pos.z,N=M+Math.max(_.size.x,_.size.z)*.48,U=R*R+C*C;if(U<N*N&&U>1e-6){const I=Math.sqrt(U),O=N-I;x.x+=R/I*O,x.z+=C/I*O}}},raycast(x,M,T=70){let _=T,w=null;for(const R of d){const C=v.copy(R.pos).sub(x),N=C.dot(M);if(N<0||N>_)continue;const U=C.lengthSq()-N*N,I=R.halfRadius;U<I*I&&(_=N,w=R)}return w?{dist:_,block:w,point:x.clone().addScaledVector(M,_)}:null},update(x,M){c.uTime.value=M;for(let T=0;T<d.length;T++){const _=d[T];if(!_.dynamic){_.gravControlled=!1;continue}if(_.hangTimer>0)if(_.hangTimer-=x,_.hangTimer<=0)_.vel.add(_.pendingSlide),_.pendingSlide.set(0,0,0);else{_.pos.addScaledVector(_.pendingSlide,x*.08);continue}_.gravControlled||(_.vel.y-=24*x),_.gravControlled=!1,_.pos.addScaledVector(_.vel,x);const w=_.angVel.length();w>.001&&(g.setFromAxisAngle(v.copy(_.angVel).divideScalar(w),w*x),_.quat.premultiply(g).normalize());const R=_.size.y*.45;_.pos.y<R&&(_.pos.y=R,_.vel.y<-2.2?_.vel.y*=-.28:_.vel.y=0,_.vel.x*=Math.exp(-5.5*x),_.vel.z*=Math.exp(-5.5*x),_.angVel.multiplyScalar(Math.exp(-5*x)));const C=Math.hypot(_.pos.x,_.pos.z);if(C>26.8){const N=26.8/C;_.pos.x*=N,_.pos.z*=N,_.vel.x*=-.4,_.vel.z*=-.4}}p()}}}function qh(s){const e=new Map,t=new Map,n=s.clone();return Yh(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yh(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Yh(s.children[n],e.children[n],t)}class lx extends Rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new Bu(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bu(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new wx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=tr.extractUrlBase(e);a=tr.resolveURL(c,this.path)}else a=tr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ph(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kh){try{a[tt.KHR_BINARY_GLTF]=new Ax(e)}catch(h){i&&i(h);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:a[h]=new hx;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Cx(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[h]=new Rx;break;case tt.KHR_MESH_QUANTIZATION:a[h]=new Lx;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function cx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Rt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ux{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new we(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],rn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Nh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Dh(u),c.distance=h;break;case"spot":c=new vp(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Dn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class hx{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Di}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(i)}}class dx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class fx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(r,r)}return Promise.all(i)}}class px{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class mx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class gx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],rn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,kt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class vx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class _x{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(r[0],r[1],r[2],rn),Promise.all(i)}}class xx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class yx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,kt)),Promise.all(i)}}class Mx{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Sx{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){const n=Rt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class bx{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Tx{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Ex{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Bu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class wx{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const y=new qe,v=new L,m=new Ht,b=new L(1,1,1),E=new Sh(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),E.setMatrixAt(x,y.compose(v,m,b));let p=null;for(const x in l)if(x==="_COLOR_0"){const M=l[x];E.instanceColor=new Sn(M.array,M.itemSize,M.normalized)}else if(x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"){if(p===null){const T=E.geometry;p=new Tt,p.name=T.name;for(const _ in T.attributes)p.setAttribute(_,T.attributes[_]);for(const _ in T.morphAttributes)p.morphAttributes[_]=T.morphAttributes[_];T.index!==null&&p.setIndex(T.index),p.morphTargetsRelative=T.morphTargetsRelative;for(const _ of T.groups)p.addGroup(_.start,_.count,_.materialIndex);T.boundingBox!==null&&(p.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(p.boundingSphere=T.boundingSphere.clone()),p.drawRange.start=T.drawRange.start,p.drawRange.count=T.drawRange.count,p.userData=Object.assign({},T.userData),E.geometry=p}const M=l[x];p.setAttribute(x,new Sn(M.array,M.itemSize,M.normalized))}bt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Kh="glTF",qs=12,zu={JSON:1313821514,BIN:5130562};class Ax{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-qs,r=new DataView(e,qs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===zu.JSON){const c=new Uint8Array(e,qs+a,o);this.content=n.decode(c)}else if(l===zu.BIN){const c=qs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=xl[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=xl[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=gs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const y=f.attributes[g],v=l[g];v!==void 0&&(y.normalized=v)}h(f)},o,c,rn,d)})})}}class Rx{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Lx{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class $h extends ws{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,y=g-c,v=-2*f+3*d,m=f-d,b=1-v,E=m-d+h;for(let p=0;p!==o;p++){const x=a[y+p+o],M=a[y+p+l]*u,T=a[g+p+o],_=a[g+p]*u;r[p]=b*x+E*M+v*T+m*_}return r}}const Ix=new Ht;class Px extends $h{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ix.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ku={9728:Nt,9729:Ct,9984:ih,9985:ta,9986:Ks,9987:Mn},Vu={33071:Un,33648:ua,10497:xs},bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dx={CUBICSPLINE:void 0,LINEAR:cr,STEP:lr},To={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ni({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),s.DefaultMaterial}function Ri(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Dn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ux(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Fx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ox(s){let e;const t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eo(t.attributes):e=s.indices+":"+Eo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Eo(s.targets[n]);return e}function Eo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function yl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Bx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const zx=new qe;class kx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new pp(this.options.manager):this.textureLoader=new Mp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ph(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ri(r,o,i),Dn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(tr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=bo[i.type],o=gs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ft(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=bo[i.type],c=gs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,v;if(f&&f!==h){const m=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let E=t.cache.get(b);E||(y=new c(o,m*f,i.count*f/u),E=new _h(y,f/u),t.cache.add(b,E)),v=new dr(E,l,d%f/u,g)}else o===null?y=new c(i.count*l):y=new c(o,d,i.count*l),v=new Ft(y,l,g);if(i.sparse!==void 0){const m=bo.SCALAR,b=gs[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,p=i.sparse.values.byteOffset||0,x=new b(a[1],E,i.sparse.count*m),M=new c(a[2],p,i.sparse.count*l);o!==null&&(v=new Ft(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let T=0,_=x.length;T<_;T++){const w=x[T];if(v.setX(w,M[T*l]),l>=2&&v.setY(w,M[T*l+1]),l>=3&&v.setZ(w,M[T*l+2]),l>=4&&v.setW(w,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=g}return v})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=ku[d.magFilter]||Ct,u.minFilter=ku[d.minFilter]||Mn,u.wrapS=Vu[d.wrapS]||xs,u.wrapT=Vu[d.wrapT]||xs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Nt&&u.minFilter!==Ct,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){const v=new Ut(y);v.needsUpdate=!0,d(v)}),t.load(tr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Dn(h,a),h.userData.mimeType=a.mimeType||Bx(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Th,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bh,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ni}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const h=i[tt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],rn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,kt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Dt);const u=r.alphaMode||To.OPAQUE;if(u===To.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===To.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Di&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Di&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Di){const h=r.emissiveFactor;o.emissive=new we().setRGB(h[0],h[1],h[2],rn)}return r.emissiveTexture!==void 0&&a!==Di&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,kt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Dn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ri(i,h,r),h})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Hu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Ox(c),h=i[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Hu(new Tt,c,t),c.mode===ln.TRIANGLE_STRIP?d=d.then(f=>Du(f,uh)):c.mode===ln.TRIANGLE_FAN&&(d=d.then(f=>Du(f,hl))),i[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Nx(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const y=u[f],v=a[f];let m;const b=c[f];if(v.mode===ln.TRIANGLES||v.mode===ln.TRIANGLE_STRIP||v.mode===ln.TRIANGLE_FAN||v.mode===void 0){const E=r.isSkinnedMesh===!0,p=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");E&&p===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&p?new Of(y,b):new rt(y,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(v.mode===ln.LINES)m=new Vf(y,b);else if(v.mode===ln.LINE_STRIP)m=new Gl(y,b);else if(v.mode===ln.LINE_LOOP)m=new Hf(y,b);else if(v.mode===ln.POINTS)m=new Gf(y,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(m.geometry.morphAttributes).length>0&&Fx(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Dn(m,r),v.extensions&&Ri(i,m,v),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ri(i,h[0],r),h[0];const d=new sn;r.extensions&&Ri(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Vt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Dn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new qe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],y=f.target,v=y.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],y=h[3],v=h[4],m=[];for(let E=0,p=d.length;E<p;E++){const x=d[E],M=f[E],T=g[E],_=y[E],w=v[E];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const R=n._createAnimationTracks(x,M,T,_,w);if(R)for(let C=0;C<R.length;C++)m.push(R[C])}const b=new ml(r,void 0,m);return Dn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,zx)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,g=h[0];u.pivot=new L().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Mh:c.length>1?u=new sn:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Dn(u,r),r.extensions&&Ri(n,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new sn;n.name&&(r.name=i.createUniqueName(n.name)),Dn(r,n),n.extensions&&Ri(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?r.add(qh(d)):r.add(d)}const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof En||d instanceof Ut)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}pi[r.path]===pi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(pi[r.path]){case pi.weights:u=fr;break;case pi.rotation:u=pr;break;case pi.translation:case pi.scale:u=_a;break;default:switch(n.itemSize){case 1:u=fr;break;case 2:case 3:default:u=_a;break}break}const h=i.interpolation!==void 0?Dx[i.interpolation]:cr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const y=new u(l[f]+"."+pi[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof pr?Px:$h;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Vx(s,e,t){const n=e.attributes,i=new si;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const u=yl(gs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const y=yl(gs[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Hn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Hu(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=xl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return it.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Dn(s,e),Vx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ux(s,e.targets,t):s})}let Qr=null;async function Hx(s="./models/Xbot.glb"){return Qr||(Qr=await new lx().loadAsync(s),Qr)}function Zh({scene:s,gltf:e,isPlayer:t=!0,armorHex:n="#2c4fa8",jointHex:i="#68f0ff",accentHex:r="#f0ca6c"}){const a=new sn;s.add(a);const o=new sn;a.add(o);const l=qh(e.scene);l.scale.setScalar(1.08),o.add(l);const c=new Ni({color:n,roughness:.34,metalness:.62,emissive:"#000000",emissiveIntensity:0}),u=new Ni({color:"#14172a",roughness:.4,metalness:.45,emissive:i,emissiveIntensity:.85}),h=new Ni({color:r,emissive:r,emissiveIntensity:2.8,roughness:.12,metalness:.2}),d=new Ni({color:"#7c5332",roughness:.72,metalness:.1});let f=null,g=null;l.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0,(U.material?.name||"").toLowerCase().includes("joint")||U.name.includes("Joints")?U.material=u:U.material=c),U.isBone&&((U.name==="mixamorig:RightHand"||/RightHand$/i.test(U.name))&&(f=U),(U.name==="mixamorig:RightArm"||/RightArm$/i.test(U.name))&&(g=U))});const y=new sn,v=[new L(0,-1.05,0),new L(-.02,-.35,.02),new L(.02,.35,-.02),new L(.07,.85,.03),new L(.12,1.08,.02),new L(.01,1.2,-.01),new L(-.08,1.08,.01)],m=Zs(v,U=>.032*(1-.55*Math.pow(U,1.5)),{around:10,every:.05}),b=new rt(m,d);b.castShadow=!0,y.add(b);const E=new rt(new wa(.1,0),h);if(E.scale.set(.8,1.55,.8),E.position.set(.01,1.02,.02),y.add(E),f){l.updateMatrixWorld(!0);const U=new L;f.getWorldScale(U);const I=1/Math.max(U.x,.001);y.scale.setScalar(I),y.position.set(0,.08*I,.04*I),y.rotation.set(Math.PI*.48,0,Math.PI*.08),f.add(y)}else y.position.set(-.4,1.2,.25),o.add(y);const p=new Fp(l),x={};for(const U of e.animations){const I=p.clipAction(U);x[U.name.toLowerCase()]=I}const M=x.idle,T=x.walk,_=x.run;M&&(M.play(),M.setEffectiveWeight(1)),T&&(T.play(),T.setEffectiveWeight(0)),_&&(_.play(),_.setEffectiveWeight(0));const w=new Mt({transparent:!0,depthWrite:!1,side:Dt,blending:Mi,uniforms:{uTime:{value:0},uOpacity:{value:0},uColor:{value:new we(i)}},vertexShader:`
      varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main() {
        vL = position;
        vec4 w = modelMatrix * vec4(position, 1.0);
        vN = normalize(mat3(modelMatrix) * normal);
        vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix * viewMatrix * w;
      }
    `,fragmentShader:`
      uniform float uTime, uOpacity; uniform vec3 uColor;
      varying vec3 vN, vV, vL;
      void main() {
        float fres = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
        float hex = smoothstep(0.85, 0.96, abs(sin(vL.y * 12.0 + uTime * 3.0)) * abs(cos(atan(vL.z, vL.x) * 6.0)));
        gl_FragColor = vec4(uColor * (1.5 * fres + 0.8 * hex + 0.1) * uOpacity, 1.0);
      }
    `}),R=new rt(new Xl(1.45,2),w);R.position.y=1.1,R.visible=!1,R.renderOrder=11,a.add(R);const C={root:a,body:o,pos:new L,vel:new L,yaw:0,hp:100,maxHp:100,grounded:!0,jumpsLeft:2,dashCooldown:0,dashTimer:0,wardActive:!1,wardEnergy:1,hitFlash:0,castRecoil:0,chargeGlow:0,gravSuspended:0,radius:.68,height:2.1},N=new L;return{state:C,setSpellColor(U){h.color.set(U),h.emissive.set(U),u.emissive.set(U),w.uniforms.uColor.value.set(U)},getStaffTip(U=N){return E.getWorldPosition(U),U},getCenter(U=new L){return U.set(C.pos.x,C.pos.y+1.1,C.pos.z)},damage(U,I,O=10){let H=U;return C.wardActive&&C.wardEnergy>.08&&(H=Math.round(U*.22),C.wardEnergy=Math.max(0,C.wardEnergy-.35),O*=.35),C.hp=Math.max(0,C.hp-H),C.hitFlash=1,I&&(C.vel.addScaledVector(I,O),C.vel.y=Math.max(C.vel.y,Math.min(12,O*.48)),C.grounded=!1),H},reset(U,I,O){C.pos.set(U,0,I),C.vel.set(0,0,0),C.yaw=O,C.hp=C.maxHp,C.grounded=!0,C.jumpsLeft=2,C.dashCooldown=0,C.dashTimer=0,C.wardActive=!1,C.wardEnergy=1,C.hitFlash=0,C.castRecoil=0,C.chargeGlow=0,C.gravSuspended=0,a.position.copy(C.pos),a.rotation.y=C.yaw},updateVisuals(U,I,O=!1){a.position.copy(C.pos),a.rotation.y=C.yaw,o.visible=!O;const H=Math.hypot(C.vel.x,C.vel.z),G=Vt.clamp(H/5,0,1)*(1-Vt.clamp((H-5)/4.5,0,1)),K=Vt.clamp((H-4.5)/5,0,1),$=Math.max(0,1-G-K);M&&M.setEffectiveWeight($),T&&(T.setEffectiveWeight(G),T.setEffectiveTimeScale(Math.max(.7,H/3.8))),_&&(_.setEffectiveWeight(K),_.setEffectiveTimeScale(Math.max(.85,H/7.5))),p.update(U),C.castRecoil=Math.max(0,C.castRecoil-U*4.2),g&&(C.castRecoil>.01||C.chargeGlow>.01)&&(g.rotation.x-=C.castRecoil*.95+C.chargeGlow*.6),o.rotation.x=C.gravSuspended>0?Math.sin(I*5.5)*.35:0,E.rotation.y=I*3,C.hitFlash>0?(C.hitFlash=Math.max(0,C.hitFlash-U*4.8),c.emissive.set("#ffffff"),c.emissiveIntensity=C.hitFlash*2.2):(c.emissive.set("#000000"),c.emissiveIntensity=0),R.visible=C.wardActive&&C.wardEnergy>.02,R.visible&&(w.uniforms.uTime.value=I,w.uniforms.uOpacity.value=.85*Math.min(1,C.wardEnergy*2.5),R.rotation.y=I*.8)}}}const Gx={gold:{label:"ASTRAL GOLD",primary:"#f4cf7a",secondary:"#fff5d6",rgb:[1,.84,.45],palDark:"#0d091c",palMid:"#4c3880",palHi:"#f5d68f",palLight:"#fff8e8",smoke:"#1c1828"},gravity:{label:"VOID GRAVITY",primary:"#a864ff",secondary:"#e8c4ff",rgb:[.68,.38,1],palDark:"#0b0518",palMid:"#4c1d88",palHi:"#cc88ff",palLight:"#f6e8ff",smoke:"#181028"},fire:{label:"SOLAR PYRE",primary:"#ff5e24",secondary:"#ffd26b",rgb:[1,.38,.14],palDark:"#1b0706",palMid:"#7c1e10",palHi:"#ff9642",palLight:"#fff4dd",smoke:"#241b1e"},frost:{label:"GLACIAL ARC",primary:"#64e2ff",secondary:"#e2f9ff",rgb:[.38,.88,1],palDark:"#061526",palMid:"#1c5480",palHi:"#8ee8ff",palLight:"#f0fcff",smoke:"#1b2b3a"},lightning:{label:"STORM VOLT",primary:"#ffe858",secondary:"#9cf2ff",rgb:[1,.92,.34],palDark:"#0a0d22",palMid:"#2a3c88",palHi:"#fff078",palLight:"#ffffff",smoke:"#1a2033"},crimson:{label:"CRIMSON EDGE",primary:"#ff2b4e",secondary:"#ff9eb0",rgb:[1,.18,.3],palDark:"#18040a",palMid:"#7a0e26",palHi:"#ff5272",palLight:"#ffecef",smoke:"#231319"},emerald:{label:"GALE EMERALD",primary:"#52ff9e",secondary:"#d2ffe6",rgb:[.32,1,.62],palDark:"#051a14",palMid:"#15634a",palHi:"#7effb8",palLight:"#edfff5",smoke:"#162824"}},Wx={cleave:"SPATIAL CLEAVE",gravity:"GRAVITY WELL",blast:"METEOR BLAST",vortex:"STORM VORTEX",beam:"ARCANE BEAM",barrage:"VOLLEY BARRAGE"};function Xx(s){if(!s||s.length<4)return null;let e=1e9,t=-1e9,n=1e9,i=-1e9,r=0;for(let p=0;p<s.length;p++){const x=s[p];e=Math.min(e,x.x),t=Math.max(t,x.x),n=Math.min(n,x.y),i=Math.max(i,x.y),p>0&&(r+=Math.hypot(x.x-s[p-1].x,x.y-s[p-1].y))}const a=s[0],o=s[s.length-1],l=Math.hypot(o.x-a.x,o.y-a.y),c=Math.max(.01,t-e),u=Math.max(.01,i-n),h=l/Math.max(r,.001),d=l/Math.max(c,u);let f=0,g=0;for(let p=2;p<s.length;p++){const x=Math.atan2(s[p-1].y-s[p-2].y,s[p-1].x-s[p-2].x);let T=Math.atan2(s[p].y-s[p-1].y,s[p].x-s[p-1].x)-x;for(;T>Math.PI;)T-=Math.PI*2;for(;T<-Math.PI;)T+=Math.PI*2;g+=Math.abs(T),Math.abs(T)>.85&&f++}const y=(e+t)*.5,v=(n+i)*.5,m=Math.max(c,u,.05),b=[],E=Math.max(1,Math.floor(s.length/28));for(let p=0;p<s.length;p+=E)b.push({x:(s[p].x-y)/m,y:(s[p].y-v)/m});if(h>.82){const p=o.x-a.x,x=o.y-a.y;return x>Math.abs(p)*1.4?{gesture:"DROP LINE",archetype:"gravity",gravityMode:"slam",strokeNorm:b}:-x>Math.abs(p)*1.4?{gesture:"ASCENT LINE",archetype:"gravity",gravityMode:"lift-slam",strokeNorm:b}:{gesture:"SLASH LINE",archetype:"cleave",gravityMode:"slam",strokeNorm:b}}return g>Math.PI*3.1?{gesture:"SPIRAL",archetype:"vortex",gravityMode:"pull",strokeNorm:b}:d<.45&&g>Math.PI*1.4?{gesture:"ORBIT RING",archetype:"gravity",gravityMode:"blackhole",strokeNorm:b}:f>=3?{gesture:"ZIGZAG",archetype:"barrage",gravityMode:"slam",strokeNorm:b}:c>u*1.8?{gesture:"PIERCE LINE",archetype:"beam",gravityMode:"slam",strokeNorm:b}:{gesture:"NOVA BURST",archetype:"blast",gravityMode:"slam",strokeNorm:b}}function zn({text:s="",drawing:e=null,slotIndex:t=0}){const n=(s||"").trim(),i=n.toLowerCase(),r=T=>T.test(n)||T.test(i);let a=e?.archetype||null,o=e?.gravityMode||"lift-slam";if(r(/斬|切|裂|一閃|刀|剣|スラッシュ|クリーヴ|cleave|slash|cut|slice|blade|sever|rend/)?a="cleave":r(/重力|無重力|引力|ブラックホール|特異点|圧壊|叩きつけ|浮遊|浮か|グラビティ|gravity|black\s*hole|singularity|crush|slam|zero.?g|lift|void/)?(a="gravity",r(/ブラックホール|特異点|吸い|吸引|black\s*hole|singularity|pull|suck/)?o="blackhole":r(/叩き|圧壊|潰|落下|crush|slam|press|heavy/)&&!r(/浮|lift|zero/)?o="slam":o="lift-slam"):r(/爆発|爆炎|メテオ|隕石|核|エクスプロージョン|ノヴァ|boom|blast|explos|meteor|nova|nuke|flare/)?a="blast":r(/竜巻|トルネード|嵐|渦|台風|サイクロン|tornado|vortex|twister|storm|cyclone|whirl|tempest/)?a="vortex":r(/ビーム|レーザー|光線|波動|砲|貫通|beam|laser|ray|cannon|lance/)?a="beam":r(/連射|弾|槍|矢|ミサイル|雷|稲妻|サンダー|ボルト|ライトニング|barrage|bolt|lightning|thunder|spear|arrow|volley|dart/)&&(a="barrage"),!a){const T=["cleave","gravity","blast"];a=T[t%T.length]}let l=null;r(/炎|火|紅蓮|爆炎|メテオ|太陽|マグマ|オレンジ|fire|flame|blaze|solar|meteor|orange|pyre|ember/)?l="fire":r(/氷|雪|凍|蒼|青|水|アイス|フロスト|frost|ice|cold|blue|aqua|cryo|glacial|azure/)?l="frost":r(/重力|虚無|闇|紫|ブラックホール|空間歪|void|gravity|purple|dark|violet|black|abyss/)?l="gravity":r(/雷|電|稲妻|黄|サンダー|lightning|thunder|volt|spark|electric/)?l="lightning":r(/紅|血|赤|クリムゾン|crimson|blood|red|scarlet|ruby/)?l="crimson":r(/風|嵐|緑|翠|自然|毒|エメラルド|wind|storm|green|emerald|aero|gale|jade/)?l="emerald":r(/金|光|聖|時|ゴールド|gold|light|holy|time|divine|astral/)&&(l="gold"),l||(l={cleave:"gold",gravity:"gravity",blast:"fire",vortex:"emerald",beam:"frost",barrage:"lightning"}[a]||"gold");const c=Gx[l],u=r(/超|極|大|特大|最強|絶対|破壊|神|mega|ultra|hyper|super|giant|massive|ultimate|cataclysm|grand/),h=r(/高速|速|瞬|連|rapid|fast|quick|instant|swift/),d=!r(/no.?impact/)&&(u||a==="cleave"||a==="blast"||a==="gravity"||r(/impact|flash|ink|comic/)),f=r(/白黒|モノクロ|インク|ink|bw|monochrome/)?"ink":"comic",y={cleave:2,gravity:7,blast:8,vortex:9,beam:6,barrage:4}[a]||6,v=u?1.32:1,m={cleave:34,gravity:30,blast:38,vortex:26,beam:32,barrage:24}[a],b={cleave:3.4,gravity:3.2,blast:3.8,vortex:3.5,beam:2.6,barrage:1.5}[a],E=Math.round(m*(u?1.18:1)),p=Number((b*(h?.78:u?1.18:1)).toFixed(1));let M={cleave:l==="crimson"?"Crimson Sever":"Astral Cleave",gravity:o==="blackhole"?"Void Singularity":o==="slam"?"Gravity Crush":"Zero-G Slam",blast:"Solar Meteor",vortex:"Emerald Tempest",beam:"Glacial Lance",barrage:"Storm Volley"}[a];if(n){const T=n.split(/\s+/).filter(Boolean);n.length<=22?M=n:T.length>=2?M=T.slice(0,3).join(" "):M=n.slice(0,18)+"…"}else e&&(M=`${c.label.split(" ")[0]} ${e.gesture}`);return{id:`spell_${Date.now()}_${Math.floor(Math.random()*999)}`,name:M,prompt:n,archetype:a,archetypeLabel:Wx[a],gravityMode:o,element:l,elementLabel:c.label,palette:c,sides:y,scale:v,damage:E,cooldown:p,hasImpact:d,impactStyle:f,isMega:u,isFast:h,gesture:e?.gesture||null,strokeNorm:e?.strokeNorm||null}}const nr=[{label:"Fire Volley",text:"Rapid solar fire barrage bolts"},{label:"Glacial Beam",text:"Frost arcane laser beam piercing strike"},{label:"Storm Lightning",text:"Fast lightning storm volley bolts"},{label:"Zero-G Slam",text:"Void gravity lift enemy and pillars then crush slam"},{label:"Solar Meteor",text:"Massive solar fire meteor blast with ink impact"},{label:"Singularity",text:"Purple black hole singularity pull and burst"},{label:"Emerald Vortex",text:"Giant emerald storm tornado vortex"},{label:"Gravity Crush",text:"Ultra void gravity heavy crush press down"},{label:"Astral Cleave",text:"Golden spatial cleave that slices reality in two"}];function qx(){return nr.map((s,e)=>zn({text:s.text,slotIndex:e}))}function Yx(){return[zn({text:nr[8].text,slotIndex:0}),zn({text:nr[3].text,slotIndex:1}),zn({text:nr[4].text,slotIndex:2})]}const At=1/30;function Kx({scene:s,camera:e,arena:t,pillars:n,particles:i,sigils:r,volumetrics:a,post:o,sound:l}){const d=new Tt,f=new Float32Array(390),g=new Float32Array(260),y=[];for(let F=0;F<=64;F++)if(g.set([F/64,-1,F/64,1],F*4),F<64){const W=F*2;y.push(W,W+1,W+2,W+1,W+3,W+2)}d.setAttribute("position",new Ft(f,3)),d.setAttribute("uv",new Ft(g,2)),d.setIndex(y);const v=new Mt({transparent:!0,depthTest:!1,depthWrite:!1,side:Dt,uniforms:{uFade:{value:1},uT:{value:0},uFlare:{value:0},uSurge:{value:-1},uCount:{value:12},uColor:{value:new we("#ffd56b")},uDark:{value:new we("#0e0a1f")},tRunes:{value:o.uniforms.tRunes.value}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uFade, uT, uFlare, uSurge, uCount;
      uniform vec3 uColor, uDark;
      uniform sampler2D tRunes;
      void main() {
        float u = vUv.x, a = abs(vUv.y);
        float body = mix(0.1, 1.0, smoothstep(0.0, 0.3, u)) * (1.0 - 0.3 * smoothstep(0.94, 1.0, u));
        float aa = a / max(body, 1e-3);
        float ends = smoothstep(0.0, 0.02, u) * smoothstep(1.0, 0.99, u);
        float heart = 1.0 - smoothstep(0.1, 0.2, aa);
        float shimmer = 0.78 + 0.22 * sin(u * 75.0 - uT * 26.0) * sin(u * 25.0 + uT * 9.0);
        float bead = pow(0.5 + 0.5 * sin(u * 28.0 - uT * 34.0), 10.0);
        float glow = exp(-aa * aa * 5.2) * shimmer;
        vec3 col = mix(uColor * 1.15, vec3(1.0, 0.98, 0.92), heart) * (1.1 + 1.6 * heart + 1.6 * bead * heart);
        float light = max(heart, glow * 0.65);
        float shade = (1.0 - smoothstep(0.5, 1.0, aa)) * 0.62;
        if (uSurge >= 0.0) {
          float behind = step(u, uSurge);
          float head = exp(-pow((u - uSurge) / 0.06, 2.0));
          float wire = 1.0 - smoothstep(0.07, 0.14, aa);
          light = mix(light, max(wire, glow * 0.3), behind);
          col = mix(col, vec3(1.0, 0.98, 0.94) * 3.2, behind * wire);
          float lobe = head * exp(-aa * aa * 1.6);
          col += uColor * 3.0 * lobe;
          light = max(light, lobe);
        }
        col = mix(uDark, col, clamp(light * 1.5, 0.0, 1.0));
        float alpha = max(light, shade) * ends;
        if (uFlare > 0.0) {
          float k = u * uCount;
          float g = mod(floor(k) * 5.0 + 3.0, 32.0);
          vec2 gv = vec2(fract(k) * 1.2 - 0.1, vUv.y * 0.62 + 0.5);
          float rune = (gv.x < 0.0 || gv.x > 1.0 || gv.y < 0.0 || gv.y > 1.0)
            ? 0.0
            : texture2D(tRunes, (vec2(mod(g, 8.0), 3.0 - floor(g / 8.0)) + gv) / vec2(8.0, 4.0)).r;
          rune *= step(u, uFlare * 1.05) * ends;
          col = mix(col, vec3(1.0, 0.96, 0.85) * 2.8, rune);
          alpha = max(alpha * (1.0 + uFlare), rune);
          col *= 1.0 + 0.75 * uFlare;
        }
        gl_FragColor = vec4(col, min(alpha, 1.0) * uFade);
      }
    `}),m=new rt(d,v);m.frustumCulled=!1,m.renderOrder=25,m.visible=!1,s.add(m);const b=(()=>{const F=document.createElement("canvas");F.width=F.height=128;const W=F.getContext("2d"),se=W.createRadialGradient(64,64,0,64,64,60);se.addColorStop(0,"rgba(255,248,220,0.95)"),se.addColorStop(.22,"rgba(255,214,130,0.45)"),se.addColorStop(1,"rgba(255,190,100,0)"),W.fillStyle=se,W.fillRect(0,0,128,128),W.fillStyle="#fffef2";for(const[Q,Ie]of[[58,5],[5,58]])W.beginPath(),W.moveTo(64-Q,64),W.quadraticCurveTo(64,64-Ie*.1-2,64+Q,64),W.quadraticCurveTo(64,64+Ie*.1+2,64-Q,64),W.fill(),W.beginPath(),W.moveTo(64,64-Q),W.quadraticCurveTo(64-Ie*.1-2,64,64,64+Q),W.quadraticCurveTo(64+Ie*.1+2,64,64,64-Q),W.fill();const re=new wh(F);return re.colorSpace=kt,re})(),E=new Nf(new xh({map:b,depthTest:!1,depthWrite:!1,transparent:!0,blending:Mi}));E.renderOrder=26,E.visible=!1,E.scale.setScalar(5.5*.22),s.add(E);const p={phase:"idle",spell:null,caster:null,target:null,t:0,aimT:0,focusK:0,punch:0,ringAge:-1,haze:0,cutDone:!1,brushX:0,brushY:0,baseYaw:0,basePitch:0,eye:new L,d0:new L,d1:new L,n:new L(0,1,0),e1:new L(1,0,0),e2:new L(0,0,1),theta:0,path:[],post:{a:new ze(.15,.5),b:new ze(.85,.5),mode:0,k:0,written:0,fringe:0,focus:0,up:1,C:new L,N:new L(0,1,0),M:new L(0,0,1),age:0,haze:0,frame:0,circle:0,D:18,split:0}},x=[],M=[],T=new L;let _=0,w=0,R=0,C=0,N=0,U={active:!1,pos:new L,age:0,maxAge:.7,maxR:20};const I=new Vn(0,0,0,"YXZ"),O=new L,H=new L,G=new L,K=F=>M.push({t:0,power:F}),$=(F,W,se)=>se.set(0,0,-1).applyEuler(I.set(W,F,0,"YXZ")).normalize();function ne(){p.n.crossVectors(p.d0,p.d1);const F=p.n.length();return F<1e-4?(p.theta=0,!1):(p.n.multiplyScalar(1/F),p.e1.copy(p.d0).normalize(),p.e2.crossVectors(p.n,p.e1).normalize(),p.theta=Math.atan2(p.d1.dot(p.e2),p.d1.dot(p.e1)),!0)}function te(F,W){return W.copy(p.e1).applyAxisAngle(p.n,p.theta*F)}function Re(F){const W=e.position,se=p.path.length-1;for(let re=0;re<=64;re++){if(se>=2){const pe=re/64*se,ue=Math.min(se-1,Math.floor(pe));O.copy(p.path[ue]).lerp(p.path[ue+1],pe-ue).normalize(),G.copy(p.path[Math.min(se,ue+2)]).sub(p.path[Math.max(0,ue-1)]),G.crossVectors(O,G),G.lengthSq()<1e-10?G.copy(p.n):G.normalize()}else te(re/64,O),G.copy(p.n);const Q=H.copy(W).addScaledVector(O,5.5),Ie=5.5*F;f.set([Q.x-G.x*Ie,Q.y-G.y*Ie,Q.z-G.z*Ie,Q.x+G.x*Ie,Q.y+G.y*Ie,Q.z+G.z*Ie],re*6)}d.attributes.position.needsUpdate=!0,d.computeBoundingSphere()}function Le(F,W,se){if(!F.strokeNorm||F.strokeNorm.length<3)return;const re=new L().crossVectors(se,new L(0,1,0)).normalize(),Q=new L().crossVectors(re,se).normalize(),Ie=W.clone().addScaledVector(se,2.2);for(const pe of F.strokeNorm){const ue=Ie.clone().addScaledVector(re,pe.x*2.2).addScaledVector(Q,-pe.y*2.2);i.spawn({kind:3,x:ue.x,y:ue.y,z:ue.z,vx:se.x*2.2+i.rnd(.6),vy:se.y*2.2+i.rnd(.6),vz:se.z*2.2+i.rnd(.6),life:.55+Math.random()*.25,size:[.22,.04],colour:F.palette.rgb})}}function ce(F,W,se=!0){const re=F.palette;o.setPalette(re.palDark,re.palMid,re.palHi,re.palLight),F.hasImpact&&(w=se?.14:.08,R=1),C=se?.55:.25,U={active:!0,pos:W.clone(),age:0,maxAge:.72,maxR:22*F.scale},t.triggerFloorShock(W.x,W.z),t.flashLight(W.clone().add(new L(0,2,0)),re.primary,22),K(se?2.8:1.4)}function fe(F,W,se,re){const Q=re.palette;o.setPalette(Q.palDark,Q.palMid,Q.palHi,Q.palLight),p.post.C.copy(F),p.post.N.copy(W).normalize(),p.post.M.copy(se).normalize(),p.post.D=Math.min(35,Math.max(9,e.position.distanceTo(F))),p.ringAge=0,p.haze=.85}function We(F){p.cutDone=!0;const W=p.spell,se=W.palette,re=p.n.y<0?-1:1,Q=p.n.clone().multiplyScalar(re),Ie=te(.5,new L);let pe=18;const ue=p.target.getCenter(new L),P=ue.clone().sub(p.eye),de=P.length();de<55&&P.clone().normalize().dot(Ie)>.78?pe=de:Ie.y<-.05&&(pe=Math.min(36,Math.max(8,-p.eye.y/Ie.y)));const le=p.eye.clone().addScaledVector(Ie,pe);p.post.C.copy(le),p.post.N.copy(Q),p.post.M.copy(Ie),p.post.D=Math.max(8,Math.min(34,pe)),p.haze=1;const be=new L(0,-1,0).addScaledVector(Q,Q.y),Pe=be.length()>.3?be.normalize():te(1,new L).sub(te(0,new L)).normalize();n.slicePlane({eye:p.eye,n:Q,e1:p.e1,e2:p.e2,theta:p.theta,reach:65,slide:Pe,now:F,cutColorHex:se.primary});const Ue=Q.dot(p.eye),je=ue.clone().sub(p.eye),B=je.length(),_t=Math.atan2(je.dot(p.e2),je.dot(p.e1)),ot=Math.abs(Q.dot(ue)-Ue);if(B<60&&_t>=-.22&&_t<=p.theta+.22&&ot<2.6*W.scale){const D=Pe.clone().multiplyScalar(.75).addScaledVector(Q,.65).normalize();p.target.damage(W.damage,D,16*W.scale),i.burst(ue,se.rgb,55,13,1),i.burst(ue,[1,.96,.85],16,8,3),l.hit()}for(let D=0;D<=18;D++)if(te(D/18,O),O.y<-.02){const S=-p.eye.y/O.y;if(S>2&&S<48){const V=p.eye.x+O.x*S,Y=p.eye.z+O.z*S;D%5===0&&t.addMark(V,Y,1.8*W.scale,se.rgb,0),i.spawn({kind:5,x:V,y:.4,z:Y,vx:Pe.x*10+i.rnd(3),vy:3+Math.random()*6,vz:Pe.z*10+i.rnd(3),life:.45+Math.random()*.3,size:[.04,.02],colour:se.rgb})}}t.triggerFloorShock(le.x,le.z),t.flashLight(le,se.primary,26),l.cleaveSlash(),K(2.6)}function Z(F,W,se){const re=se.getCenter(new L),Q=re.clone().sub(F);if(Q.length()<48&&Q.clone().normalize().dot(W)>.94)return re.clone();const pe=n.raycast(F,W,48);if(pe)return pe.point;if(W.y<-.02){const P=Math.min(44,Math.max(4,-F.y/W.y)),de=F.clone().addScaledVector(W,P);de.y=.05;const le=Math.hypot(de.x,de.z);return le>t.radius-1&&(de.x*=(t.radius-1)/le,de.z*=(t.radius-1)/le),de}const ue=F.clone().addScaledVector(W,22);return ue.y=Math.max(.05,ue.y),ue}return{get cleavePhase(){return p.phase},get cleaveLocked(){return p.phase==="aim"||p.phase==="draw"},get worldPace(){return p.phase==="aim"||p.phase==="draw"?1-.95*Math.min(1,p.aimT/.2):p.phase==="strike"&&p.t<5*At?0:p.phase==="strike"&&p.t<13*At?.22:w>0?.08:1},get fovOffset(){return 13*p.focusK-14*p.punch},get jolt(){return T},steerCleave(F,W){if(p.phase!=="aim"&&p.phase!=="draw")return!1;const se=e.fov*Math.PI/360,re=Math.atan(Math.tan(se)*e.aspect);return p.brushX=Vt.clamp(p.brushX+F,-re*.9,re*.9),p.brushY=Vt.clamp(p.brushY+W,-se*.85,se*.85),!0},cancelCleave(){(p.phase==="aim"||p.phase==="draw")&&(p.phase="idle",m.visible=!1,E.visible=!1)},beginForgeStroke(F,W,se="#f4cf7a"){const re=new au;re.setFromCamera(new ze(F,W),e),p.eye.copy(e.position),p.d0.copy(re.ray.direction).normalize(),p.d1.copy(p.d0),p.path.length=0,p.path.push(p.d0.clone()),v.uniforms.uColor.value.set(se),v.uniforms.uDark.value.set("#0d091c"),v.uniforms.uFlare.value=0,v.uniforms.uSurge.value=-1,v.uniforms.uFade.value=1,m.visible=!0,E.visible=!0,E.position.copy(e.position).addScaledVector(p.d0,5.5)},moveForgeStroke(F,W,se=[1,.85,.45]){const re=new au;re.setFromCamera(new ze(F,W),e),p.d1.copy(re.ray.direction).normalize(),(p.path.length===0||p.path[p.path.length-1].angleTo(p.d1)>.006)&&p.path.length<320&&p.path.push(p.d1.clone()),ne(),p.path.length>=2&&(m.visible=!0,Re(.075*1.1)),E.visible=!0,E.position.copy(e.position).addScaledVector(p.d1,5.5);const Q=e.position.clone().addScaledVector(p.d1,5.5);i.spawn({kind:3,x:Q.x+i.rnd(.08),y:Q.y+i.rnd(.08),z:Q.z+i.rnd(.08),vx:i.rnd(.4),vy:.3+Math.random()*.4,vz:i.rnd(.4),life:.4,size:[.16,.02],colour:se})},finishForgeStroke(F,W,se){if(E.visible=!1,F.archetype==="cleave"&&ne()&&Math.abs(p.theta)>=.08){p.spell=F,p.caster=W,p.target=se,v.uniforms.uColor.value.set(F.palette.primary),v.uniforms.uDark.value.set(F.palette.palDark),o.setPalette(F.palette.palDark,F.palette.palMid,F.palette.palHi,F.palette.palLight),p.phase="strike",p.t=0,p.cutDone=!1;return}m.visible=!1;const re=se.getCenter(new L).sub(e.position).normalize();this.castSpell({spell:F,caster:W,target:se,origin:e.position.clone(),dir:re,isPlayer:!0})},handlePlayerCleaveInput(F,W,se,re,Q){if(p.phase==="strike")return!1;const Ie=F&&!W;return Ie&&p.phase==="idle"?(p.phase="aim",p.spell=se,p.caster=re,p.target=Q,p.aimT=0,p.theta=0,p.path.length=0,I.setFromQuaternion(e.quaternion,"YXZ"),p.baseYaw=I.y,p.basePitch=I.x,p.brushX=0,p.brushY=0,v.uniforms.uColor.value.set(se.palette.primary),v.uniforms.uDark.value.set(se.palette.palDark),o.setPalette(se.palette.palDark,se.palette.palMid,se.palette.palHi,se.palette.palLight),l.cleaveAim(),!1):Ie&&p.phase==="aim"?(p.phase="draw",p.eye.copy(e.position),$(p.baseYaw-p.brushX,p.basePitch+p.brushY,p.d0),p.d1.copy(p.d0),p.path.length=0,p.path.push(p.d0.clone()),!1):p.phase==="draw"?(p.eye.copy(e.position),F?($(p.baseYaw-p.brushX,p.basePitch+p.brushY,p.d1),ne(),p.path[p.path.length-1].angleTo(p.d1)>.008&&p.path.length<300&&p.path.push(p.d1.clone()),!1):ne()&&Math.abs(p.theta)>=.08?(p.path.push(p.d1.clone()),p.phase="strike",p.t=0,p.cutDone=!1,re.state.castRecoil=1,!0):(p.phase="aim",p.theta=0,p.path.length=0,m.visible=!1,!1)):!1},castSpell({spell:F,caster:W,target:se,origin:re,dir:Q,isPlayer:Ie}){const pe=F.palette,ue=W.getStaffTip(new L),P=Z(re,Q,se);if(W.state.castRecoil=.9,Le(F,ue,Q),r.spawn({pos:ue.clone().addScaledVector(Q,.8),color:pe.primary,sides:F.sides,radius:1.3*F.scale,endRadius:1.8*F.scale,life:.75,normal:Q}),F.archetype==="cleave"){const le=se.getCenter(new L),be=new L(Math.random()-.5,(Math.random()-.5)*.5,Math.random()-.5).normalize();r.spawn({pos:new L(le.x,.12,le.z),color:pe.primary,sides:2,radius:4.5,life:.9}),x.push({kind:"ai-cleave",spell:F,caster:W,target:se,center:le.clone(),slashDir:be,age:0,windup:.65,done:!1}),l.cleaveAim();return}if(F.archetype==="gravity"){const le=F.gravityMode||"lift-slam",be=new L(P.x,.14,P.z),Pe=(le==="blackhole"?11.5:10.5)*F.scale;t.addMark(be.x,be.z,Pe*.8,pe.rgb,1),r.spawn({pos:be.clone(),color:pe.primary,sides:F.sides,radius:Pe*.75,endRadius:Pe*.95,life:le==="slam"?1.1:2.3,turn:.9});let Ue=null;le==="blackhole"?(Ue=a.acquireDisc(),Ue.mesh.position.set(be.x,4.6,be.z),Ue.mesh.rotation.set(.32,0,.18),Ue.mesh.scale.setScalar(1.35*F.scale),Ue.mat.uniforms.uColA.value.set(pe.primary),Ue.mat.uniforms.uColB.value.set(pe.secondary),Ue.mat.uniforms.uOn.value=1):r.spawn({pos:new L(be.x,le==="slam"?9.5:11,be.z),color:pe.secondary,sides:F.sides,radius:Pe*.65,endRadius:Pe*.8,life:le==="slam"?.9:2.1,turn:-1.1,rise:le==="slam"?-6.5:0}),x.push({kind:"gravity",mode:le,spell:F,caster:W,target:se,isPlayer:Ie,center:new L(be.x,le==="blackhole"?4.6:.2,be.z),radius:Pe,age:0,phaseDur:le==="slam"?.45:le==="blackhole"?2.1:1.15,slammed:!1,disc:Ue}),l.gravityLift();return}if(F.archetype==="blast"){const le=new L(P.x,.14,P.z),be=8.5*F.scale;[1.5,5.2,9.2].forEach((Pe,Ue)=>{r.spawn({pos:new L(le.x,Pe,le.z),color:Ue===2?pe.secondary:pe.primary,sides:[3,6,8][Ue],radius:(5.8-Ue*1.1)*F.scale,life:1,turn:(Ue%2?-1:1)*(.7+Ue*.2)})}),x.push({kind:"blast",spell:F,caster:W,target:se,isPlayer:Ie,center:le,radius:be,age:0,windup:.62,detonated:!1}),l.blastCharge();return}if(F.archetype==="vortex"){const le=new L(P.x,.08,P.z),be=a.acquireVortex();be.mat.uniforms.uBase.value.copy(le),be.mat.uniforms.uShape.value.set(16*F.scale,1.3*F.scale,5*F.scale,1),be.mat.uniforms.uColA.value.set(pe.primary),be.mat.uniforms.uColB.value.set(pe.palDark),r.spawn({pos:le.clone().add(new L(0,.1,0)),color:pe.primary,sides:F.sides,radius:4.5*F.scale,life:1.4,turn:1.8}),x.push({kind:"vortex",spell:F,caster:W,target:se,pos:le,vel:new L,age:0,life:3.6,slot:be,hitTick:0}),l.vortex();return}if(F.archetype==="beam"){const le=re.clone().addScaledVector(Q,46),be=n.raycast(re,Q,46);let Pe=46;be&&(le.copy(be.point),Pe=be.dist);const Ue=se.getCenter(new L),je=Ue.clone().sub(ue),B=je.dot(Q);B>0&&B<Pe+2&&je.clone().addScaledVector(Q,-B).length()<1.65*F.scale&&(se.damage(F.damage,Q,15*F.scale),i.burst(Ue,pe.rgb,45,11,1),l.hit()),a.spawnBeam({from:ue,to:le,radius:.72*F.scale,color:pe.primary,life:.65}),n.applyBlast(le,6.5*F.scale,18),i.burst(le,pe.rgb,55,13,0),i.burst(le,[1,.96,.85],35,16,1),t.addMark(le.x,le.z,3.6*F.scale,pe.rgb,0),Ie&&(fe(le,new L(0,1,0),Q.clone(),F),K(1.9)),t.flashLight(le,pe.primary,20),l.beam();return}const de=F.isMega?7:5;for(let le=0;le<de;le++)x.push({kind:"bolt",spell:F,caster:W,target:se,delay:le*.085,launched:!1,pos:new L,vel:new L,age:0,life:2.2,spreadIdx:le-(de-1)*.5,dir:Q.clone()});l.bolt()},clear(){x.forEach(F=>{F.disc&&a.releaseDisc(F.disc),F.slot&&a.releaseVortex(F.slot)}),x.length=0,M.length=0,p.phase="idle",p.ringAge=-1,p.haze=0,p.focusK=0,p.punch=0,w=0,C=0,N=0,m.visible=!1,E.visible=!1,o.setHole(e,new L,1,0),o.setShock(e,new L,1,0)},update(F,W,se){for(const ue of M)ue.t+=F;for(;M.length&&M[0].t>1;)M.shift();const re=.55*M.reduce((ue,P)=>ue+P.power*Math.exp(-P.t*5.8)*Math.min(1,P.t*50),0);_+=F,Math.floor(_*30)!==Math.floor((_-F)*30)&&T.set((Math.random()-.5)*.065*re,(Math.random()-.5)*.055*re,(Math.random()-.5)*.085*re),re<.004&&T.set(0,0,0);const Q=p.post;if(Q.mode=0,Q.k=0,Q.circle=0,Q.split=0,Q.written=0,v.uniforms.uT.value=se,p.ringAge>=0?(p.ringAge+=F,Q.age=p.ringAge,p.ringAge>.92&&(p.ringAge=-1,Q.age=0)):Q.age=0,p.haze=Math.max(0,p.haze-F*.75),Q.haze=p.haze*p.haze,p.phase==="aim"||p.phase==="draw"||p.phase==="strike"&&p.t<5*At?(p.aimT+=F,p.focusK+=(1-p.focusK)*Math.min(1,F*11)):p.phase==="strike"&&p.t<14*At?(p.focusK=0,p.punch=1):(p.focusK+=(0-p.focusK)*Math.min(1,F*14),p.punch*=Math.exp(-F*2.6),p.punch<.003&&(p.punch=0)),Q.focus=p.phase==="aim"?.65*Math.min(1,p.aimT/.18):p.phase==="draw"?.65+.35*Math.min(1,Math.abs(p.theta)/.45):p.phase==="strike"&&p.t<5*At?1:p.phase==="strike"?0:Math.max(0,Q.focus-F*6),Q.fringe=p.ringAge>=0?Math.max(0,1-p.ringAge/.7)*.72:0,p.phase==="aim")m.visible=!1,$(p.baseYaw-p.brushX,p.basePitch+p.brushY,O),E.visible=!0,E.position.copy(e.position).addScaledVector(O,5.5),E.material.rotation=se*.8;else if(p.phase==="draw")m.visible=Math.abs(p.theta)>.005,v.uniforms.uFlare.value=0,v.uniforms.uSurge.value=-1,v.uniforms.uFade.value=1,m.visible&&Re(.075),E.visible=!0,E.position.copy(e.position).addScaledVector(p.d1,5.5),E.material.rotation=se*2.5;else if(p.phase==="strike"){E.visible=!1,p.t+=F;const ue=Math.floor(p.t/At),P=ue*At;Q.frame=ue;const de=Math.min(1,p.t/(2.5*At)),le=ue-1;v.uniforms.uFlare.value=de,v.uniforms.uSurge.value=P<3*At?de:-1,v.uniforms.uCount.value=Math.max(5,Math.round(Math.abs(p.theta)/(.075*2.5))),Re(.075*(1+.35*de)),m.visible=P<3*At,P<3*At?(Q.circle=1,Q.written=de):P<5*At?(Q.mode=1,Q.k=Math.max(0,le-2),Q.circle=2):P<6*At?(Q.mode=2,Q.k=.1,Q.circle=3):P<10*At?(Q.mode=3,Q.k=Math.max(0,(le-4)/4),Q.circle=2,Q.split=.3+.7*Q.k):P<11*At?(Q.mode=2,Q.k=1.1,Q.circle=3,Q.split=1):P<13*At&&(Q.mode=4,Q.k=le===10?.35:.72,Q.split=1-Q.k),P>=5*At&&!p.cutDone&&We(se),P>=13*At&&p.ringAge<0&&p.cutDone&&p.t<15*At&&(p.ringAge=0,K(1.4)),p.t>16*At&&(p.phase="idle",m.visible=!1)}else m.visible=!1,E.visible=!1;if(p.phase!=="idle"){const ue=O.copy(e.position).addScaledVector(te(0,H),5.5).project(e);Q.a.set(ue.x*.5+.5,ue.y*.5+.5);const P=O.copy(e.position).addScaledVector(te(1,H),5.5).project(e);Q.b.set(P.x*.5+.5,P.y*.5+.5);const de=p.n.y<0?-1:1,le=O.copy(e.position).addScaledVector(te(.5,H),5.5).project(e),be=H.copy(e.position).addScaledVector(te(.5,new L),5.5).addScaledVector(p.n,.05*de).project(e),Pe=(Q.b.x-Q.a.x)*e.aspect,Ue=Q.b.y-Q.a.y;Q.up=(be.x-le.x)*e.aspect*-Ue+(be.y-le.y)*Pe<0?-1:1}o.setCleave(Q,e);let Ie=null,pe=0;for(let ue=x.length-1;ue>=0;ue--){const P=x[ue],de=P.spell.palette;if(P.kind==="ai-cleave"){if(P.age+=W,Math.random()<.8){const le=(Math.random()-.5)*8;i.spawn({kind:3,x:P.center.x+P.slashDir.x*le,y:P.center.y+P.slashDir.y*le,z:P.center.z+P.slashDir.z*le,life:.25,size:[.22,.05],colour:de.rgb})}if(P.age>=P.windup&&!P.done){P.done=!0;const le=P.target.getCenter(new L);if(le.distanceTo(P.center)<5.5){const be=le.clone().sub(P.caster.state.pos).setY(.4).normalize();P.target.damage(P.spell.damage*.7,be,13),l.hit()}i.burst(P.center,de.rgb,55,14,1),n.applyBlast(P.center,7.5,16),l.cleaveSlash(),x.splice(ue,1)}continue}if(P.kind==="gravity"){P.age+=W;const le=P.target.getCenter(new L),be=Math.hypot(le.x-P.center.x,le.z-P.center.z);if(!P.slammed){if(pe=Math.max(pe,.55),o.uniforms.uDoomCol.value.set(de.palMid),P.mode==="blackhole"){if(n.applyGravityField(P.center,P.radius*1.4,"blackhole",W,28),i.fields.push({x:P.center.x,y:P.center.y,z:P.center.z,radius:P.radius*1.5,type:"pull",strength:38,swirl:.9}),be<P.radius*1.15){const Pe=P.center.clone().sub(le),Ue=Math.max(1.2,Pe.length());Pe.divideScalar(Ue),P.target.state.vel.addScaledVector(Pe,30*W),P.target.state.grounded=!1,P.target.state.gravSuspended=.2}for(let Pe=0;Pe<3;Pe++){const Ue=Math.random()*Math.PI*2,je=P.radius*(.45+.55*Math.random());i.spawn({kind:Math.random()<.2?6:1,x:P.center.x+Math.cos(Ue)*je,y:P.center.y+(Math.random()-.5)*4,z:P.center.z+Math.sin(Ue)*je,vx:-Math.sin(Ue)*4,vy:0,vz:Math.cos(Ue)*4,life:.9,size:[.16,.04],colour:de.rgb})}Ie={pos:P.center,radius:1.85*P.spell.scale,power:1,pullBlur:.14,darkCore:1,color:de.primary}}else if(P.mode==="lift-slam"){n.applyGravityField(P.center,P.radius*1.25,"lift",W,26),i.fields.push({x:P.center.x,y:4.5,z:P.center.z,radius:P.radius*1.3,type:"lift",strength:22}),be<P.radius&&(P.target.state.vel.y+=((6.2-P.target.state.pos.y)*6.5-P.target.state.vel.y*3)*W,P.target.state.vel.x*=Math.exp(-2.5*W),P.target.state.vel.z*=Math.exp(-2.5*W),P.target.state.grounded=!1,P.target.state.gravSuspended=.25);for(let Pe=0;Pe<4;Pe++){const Ue=Math.random()*Math.PI*2,je=P.radius*Math.sqrt(Math.random());i.spawn({kind:Math.random()<.25?6:5,x:P.center.x+Math.cos(Ue)*je,y:.3+Math.random()*2,z:P.center.z+Math.sin(Ue)*je,vx:0,vy:7+Math.random()*6,vz:0,life:.7,size:[.05,.02],colour:de.rgb})}Ie={pos:new L(P.center.x,4.2,P.center.z),radius:2.2*P.spell.scale,power:.55,pullBlur:.04,darkCore:0,color:de.primary}}else i.fields.push({x:P.center.x,y:0,z:P.center.z,radius:P.radius,type:"crush",strength:45}),Ie={pos:new L(P.center.x,2.5,P.center.z),radius:2.5*P.spell.scale,power:.7,pullBlur:.08,darkCore:0,color:de.primary};if(P.age>=P.phaseDur){if(P.slammed=!0,P.disc&&(a.releaseDisc(P.disc),P.disc=null),P.mode==="blackhole"){if(n.applyBlast(P.center,P.radius*1.3,28*P.spell.scale),be<P.radius*1.1){const Ue=le.clone().sub(P.center).setY(.35).normalize();P.target.damage(P.spell.damage,Ue,22*P.spell.scale),l.hit()}}else n.applyGravityField(P.center,P.radius*1.3,"slam",.1,32*P.spell.scale),be<P.radius&&(P.target.state.vel.y=-32,P.target.damage(P.spell.damage,new L(0,-1,0),4),l.hit());const Pe=new L(P.center.x,.35,P.center.z);t.addMark(Pe.x,Pe.z,P.radius*.85,de.rgb,0),i.burst(Pe,de.rgb,80,16,1),i.burst(Pe,[.42,.38,.48],26,10,2),i.burst(Pe,[1,.96,.9],24,12,3),P.isPlayer?(ce(P.spell,Pe,!0),fe(Pe,new L(0,1,0),new L(1,0,0),P.spell)):K(1.4),l.gravitySlam(),x.splice(ue,1)}}continue}if(P.kind==="blast"){P.age+=W,pe=Math.max(pe,.65*Math.min(1,P.age/P.windup)),o.uniforms.uDoomCol.value.set(de.palMid);const le=Vt.lerp(16,.4,Math.min(1,P.age/P.windup));for(let be=0;be<4;be++)i.spawn({kind:0,x:P.center.x+i.rnd(.5),y:le+i.rnd(.5),z:P.center.z+i.rnd(.5),vx:i.rnd(1.5),vy:2+Math.random()*3,vz:i.rnd(1.5),life:.35,size:[.85,.25],colour:de.rgb});if(P.age>=P.windup&&!P.detonated){P.detonated=!0,a.spawnBlast({pos:P.center,maxR:6.2*P.spell.scale,life:2.6,colCore:de.palLight,colMid:de.primary,colSmoke:de.smoke}),n.applyBlast(P.center,P.radius*1.45,24*P.spell.scale);const be=P.target.getCenter(new L);if(be.distanceTo(P.center)<P.radius){const Pe=be.clone().sub(P.center).setY(.5).normalize();P.target.damage(P.spell.damage,Pe,20*P.spell.scale),l.hit()}t.addMark(P.center.x,P.center.z,P.radius*.9,de.rgb,0),i.burst(P.center.clone().add(new L(0,1,0)),de.rgb,85,18,1),i.burst(P.center.clone().add(new L(0,.8,0)),de.rgb,36,12,0),P.isPlayer?(ce(P.spell,P.center,!0),fe(P.center,new L(0,1,0),new L(1,0,0),P.spell)):K(1.5),l.blastBoom(),x.splice(ue,1)}continue}if(P.kind==="vortex"){P.age+=W;const le=P.age/P.life;if(le>=1){a.releaseVortex(P.slot),x.splice(ue,1);continue}const be=P.target.state.pos.clone().sub(P.pos).setY(0),Pe=be.length();Pe>.5&&(be.divideScalar(Pe),P.vel.lerp(be.multiplyScalar(7.5),Math.min(1,W*2.5))),P.pos.addScaledVector(P.vel,W);const Ue=Math.min(1,P.age*3.5)*(1-Vt.smoothstep(le,.78,1));P.slot.mat.uniforms.uBase.value.copy(P.pos),P.slot.mat.uniforms.uShape.value.w=Ue,P.slot.mat.uniforms.uLean.value.set(-P.vel.x*.45,-P.vel.z*.45),n.applyGravityField(P.pos.clone().add(new L(0,4,0)),9.5*P.spell.scale,"vortex",W,24),i.fields.push({x:P.pos.x,y:5,z:P.pos.z,radius:11,type:"vortex",spin:24,pull:8,lift:14});for(let je=0;je<3;je++){const B=Math.random()*Math.PI*2,_t=1.5+Math.random()*3.5;i.spawn({kind:Math.random()<.45?5:4,x:P.pos.x+Math.cos(B)*_t,y:.4+Math.random()*3,z:P.pos.z+Math.sin(B)*_t,vx:-Math.sin(B)*9,vy:6+Math.random()*6,vz:Math.cos(B)*9,life:.9,size:[.14,.06],colour:de.rgb})}Pe<4.5*P.spell.scale&&(P.target.state.vel.y=Math.max(P.target.state.vel.y,7.5),P.target.state.vel.x+=-be.z*14*W,P.target.state.vel.z+=be.x*14*W,P.target.state.grounded=!1,P.hitTick+=W,P.hitTick>=.45&&(P.hitTick=0,P.target.damage(Math.round(P.spell.damage*.25),new L(0,1,0),4),l.hit()));continue}if(P.kind==="bolt"){if(!P.launched){if(P.delay-=W,P.delay<=0){P.launched=!0;const B=P.caster.getStaffTip(new L),_t=new L().crossVectors(P.dir,new L(0,1,0)).normalize();P.pos.copy(B).addScaledVector(_t,P.spreadIdx*.65).add(new L(0,.35+Math.abs(P.spreadIdx)*.12,0));const ot=P.spell.isFast?40:31;P.vel.copy(P.dir).multiplyScalar(ot).addScaledVector(_t,P.spreadIdx*2.5),P.vel.y+=1.5,l.bolt()}continue}if(P.age+=W,P.age>=P.life){x.splice(ue,1);continue}const be=P.target.getCenter(new L).clone().sub(P.pos),Pe=be.length();if(Pe<28){be.divideScalar(Math.max(Pe,.01));const B=P.vel.length();P.vel.lerp(be.multiplyScalar(B),Math.min(1,W*4.2))}P.pos.addScaledVector(P.vel,W),i.spawn({kind:1,x:P.pos.x,y:P.pos.y,z:P.pos.z,vx:-P.vel.x*.1+i.rnd(1.2),vy:-P.vel.y*.1+i.rnd(1.2),vz:-P.vel.z*.1+i.rnd(1.2),life:.25,size:[.18*P.spell.scale,.02],colour:de.rgb}),i.spawn({kind:7,x:P.pos.x,y:P.pos.y,z:P.pos.z,life:.12,size:[.65*P.spell.scale,.2],colour:de.rgb,alpha:.55});const Ue=P.pos.y<=.25,je=Pe<1.35*P.spell.scale;if(je||Ue){if(je){const B=Math.max(4,Math.round(P.spell.damage/(P.spell.isMega?5:4)));P.target.damage(B,P.vel.clone().normalize(),7.5),l.hit()}n.applyBlast(P.pos,3.2*P.spell.scale,11),i.burst(P.pos,de.rgb,20,9,1),t.flashLight(P.pos,de.primary,10),x.splice(ue,1)}}}if(Ie?o.setHole(e,Ie.pos,Ie.radius,Ie.power,Ie.pullBlur,Ie.darkCore,Ie.color):o.setHole(e,new L,1,0),U.active){U.age+=F;const ue=U.age/U.maxAge;ue>=1?(U.active=!1,o.setShock(e,U.pos,1,0)):o.setShock(e,U.pos,U.maxR*ue,(1-ue)*1.15)}if(w>0){w-=F;const ue=Math.floor(w/At)%2===0?1:-1;o.uniforms.uInk.value=w>0?ue*R:0}else o.uniforms.uInk.value=0;C=Math.max(0,C-F*3.8),o.uniforms.uWhite.value=C*C,N+=(pe-N)*Math.min(1,F*6),o.uniforms.uDoom.value=N}}}const Gu="http://www.w3.org/2000/svg",Jh=Math.PI*2,xa=(s,e)=>`${(s*Math.cos(e)).toFixed(2)} ${(s*Math.sin(e)).toFixed(2)}`,Wu={cleave:[{d:"M-10.5 7.5 L10.5 -7.5",cls:"thin"},{d:"M-8.8 5.2 Q0 0.6 8.8 -5.8 Q0 -0.6 -8.8 5.2 Z",cls:"fill"}],gravity:[{d:"M-9.8 2.2 C-8.6 -1.6 -3.2 -4.6 2.6 -5.2 C7.4 -5.6 10.2 -4 9.8 -2.2",cls:"thin"},{d:"M0 -4.5 A4.5 4.5 0 1 1 0 4.5 A4.5 4.5 0 1 1 0 -4.5 Z",cls:"dark"},{d:"M9.8 -2.2 C8.6 1.6 3.2 4.6 -2.6 5.2 C-7.4 5.6 -10.2 4 -9.8 2.2",cls:""}],blast:[{d:Array.from({length:8},(s,e)=>{const t=e/8*Jh-Math.PI/2;return`M${xa(4.2,t)}L${xa(e%2?7.2:9.8,t)}`}).join(""),cls:""},{d:"M0 -2.4 A2.4 2.4 0 1 1 0 2.4 A2.4 2.4 0 1 1 0 -2.4 Z",cls:"fill"}],vortex:[{d:"M-9 -7.8 Q0 -5.2 9 -7.8 M-7 -4 Q0.4 -1.6 7.4 -4.2 M-4.6 -0.2 Q0.8 1.6 5.6 -0.4 M-2.4 3.5 Q1 5 4 3.3 M-0.4 7 Q1.2 8.2 2.6 7",cls:""}],beam:[{d:"M-9.5 0 H9.5",cls:""},{d:"M-6 -4.5 L9.5 0 L-6 4.5",cls:"thin"},{d:"M-8.5 -2.2 A2.2 2.2 0 1 1 -8.5 2.2 A2.2 2.2 0 1 1 -8.5 -2.2 Z",cls:"fill"}],barrage:[{d:"M-8 -6 L-2 -6 L-4 0 L2 0 L-5 8 M3 -8 L8 -8 L5 -2 L10 -2 L3 6",cls:""}]};function $x(s){const e=document.createElementNS(Gu,"svg");e.setAttribute("viewBox","-20 -20 40 40");const t=(r,a,o=e)=>{const l=document.createElementNS(Gu,r);for(const[c,u]of Object.entries(a))l.setAttribute(c,u);return o.appendChild(l),l};t("circle",{r:18.4,class:"disc"}),t("circle",{r:18.4,class:"rim"}),t("circle",{r:15.6,class:"rim in"});const n=Math.max(2,s.sides||6);for(let r=0;r<n;r++){const a=r/n*Jh-Math.PI/2;t("path",{d:`M${xa(15.6,a)}L${xa(18.4,a)}`,class:"tick"})}const i=t("g",{class:"emblem"});for(const r of Wu[s.archetype]||Wu.blast)t("path",{d:r.d,class:r.cls},i);return e}function jr(s){return String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Zx({duelLoadout:s,music:e,sound:t,onStartDuel:n,onStartSandbox:i,onOpenForge:r,onOpenHome:a,onForgeTextCast:o,onForgePreset:l,onForgeBindSlot:c,onForgeResetPillars:u,onRematch:h}){const d=document.getElementById("lobby"),f=document.getElementById("lobby-page-title"),g=document.getElementById("lobby-body"),y=document.getElementById("forge-hud"),v=document.getElementById("forge-text"),m=document.getElementById("forge-presets"),b=document.getElementById("forge-live-spec"),E=[...document.querySelectorAll(".bind-slot-btn")],p=document.getElementById("medallion-row"),x=document.getElementById("active-spell-name"),M=document.getElementById("dmg-layer"),T=document.getElementById("lobby-motes");let _=13;const w=()=>(_=_*16807%2147483647,_/2147483647);for(let ce=0;ce<22;ce++){const fe=document.createElement("i");fe.style.cssText=`left:${(36+56*w()).toFixed(1)}%;top:${(28+64*w()).toFixed(1)}%;--d:${(8+9*w()).toFixed(1)}s;--w:${(-16*w()).toFixed(1)}s;--x:${(-26+52*w()).toFixed(0)}px;--o:${(.38+.5*w()).toFixed(2)}`,T.appendChild(fe)}let R="main",C=0,N=[];const U={main:()=>({title:"",lines:[{do:"duel",text:"Enter Duel",value:"1v1 · 3 Equipped Spells"},{do:"forge",text:"3D Spell Forge",value:"Draw Full-Screen & Cast Live"},{do:"sandbox",text:"Sandbox",value:"All 9 Spells · Free Practice"},{do:"controls",text:"Controls",value:""},{do:"music",text:"Music",value:e.muted?"Off":e.trackName}]}),controls:()=>({title:"CONTROLS",text:`<div class="lobby-keys">
        <i>WASD / Space</i><span>Move, jump &amp; double jump</span>
        <i>Shift</i><span>Arcane dash</span>
        <i>Left Click</i><span>Cast spell (Cleave: click, drag line, release)</span>
        <i>Right Click</i><span>Arcane Ward shield / cancel Cleave</span>
        <i>1 – 9 / Wheel</i><span>Switch spells</span>
        <i>V</i><span>First-person staff / Third-person view</span>
        <i>Tab / Esc</i><span>3D Spell Forge / Home menu</span>
        <i>M / N / R</i><span>Mute audio / Next track / Reset arena</span>
      </div>`,lines:[{do:"back",text:"Back",value:""}]})};function I(){const ce=U[R]();N=ce.lines,C=Math.min(C,N.length-1),f.textContent=ce.title,g.innerHTML=`${ce.text||""}<div class="lobby-list">${N.map((fe,We)=>`<button class="lobby-btn${We===C?" at":""}" data-i="${We}" type="button">${fe.text}${fe.value?`<small>${fe.value}</small>`:""}</button>`).join("")}</div>`}function O(ce){const fe=N[ce];fe&&(t.unlock(),e.wake(),t.forge(),fe.do==="duel"?n():fe.do==="forge"?r():fe.do==="sandbox"?i():fe.do==="controls"?(R="controls",C=0,I()):fe.do==="music"?(e.nextTrack(),I()):fe.do==="back"&&(R="main",C=0,I()))}g.addEventListener("mousemove",ce=>{const fe=ce.target.closest?.(".lobby-btn");if(!fe)return;const We=Number(fe.dataset.i);We!==C&&(C=We,g.querySelectorAll(".lobby-btn").forEach((Z,F)=>Z.classList.toggle("at",F===C)))}),g.addEventListener("click",ce=>{const fe=ce.target.closest?.(".lobby-btn");fe&&O(Number(fe.dataset.i))}),m.innerHTML="",nr.forEach(ce=>{const fe=document.createElement("button");fe.type="button",fe.className="preset-chip",fe.textContent=ce.label,fe.addEventListener("click",()=>{v.value=ce.text,l(ce.text)}),m.appendChild(fe)}),document.getElementById("forge-test-btn").addEventListener("click",()=>{o(v.value)}),v.addEventListener("keydown",ce=>{ce.code==="Enter"&&(ce.preventDefault(),o(v.value))}),E.forEach(ce=>{ce.addEventListener("click",()=>{const fe=Number(ce.dataset.slot);c(fe),ce.classList.add("flash"),setTimeout(()=>ce.classList.remove("flash"),350)})}),document.getElementById("forge-reset-pillars").addEventListener("click",()=>u()),document.getElementById("forge-back-home").addEventListener("click",()=>a()),document.getElementById("forge-start-duel").addEventListener("click",()=>n()),document.getElementById("hud-forge-btn").addEventListener("click",()=>r()),document.getElementById("hud-home-btn").addEventListener("click",()=>a()),document.getElementById("rematch-btn").addEventListener("click",()=>h()),document.getElementById("open-forge-end").addEventListener("click",()=>{Le(),r()}),document.getElementById("open-home-end").addEventListener("click",()=>{Le(),a()});function H(){E.forEach((ce,fe)=>{ce.querySelector(".bind-name").textContent=s[fe]?.name||""})}function G(ce){b.style.setProperty("--spell-col",ce.palette.primary),b.innerHTML=`
      <div class="spec-name">${jr(ce.name)}</div>
      <div class="spec-meta">${jr(ce.archetypeLabel)} &middot; ${jr(ce.elementLabel)} &middot; DMG ${ce.damage}${ce.gesture?` &middot; ${jr(ce.gesture)}`:""}</div>
    `}let K=[],$=-1;function ne(ce){K=ce,p.innerHTML="",ce.forEach((fe,We)=>{const Z=document.createElement("div");Z.className="medal",Z.style.setProperty("--c",fe.palette.primary),Z.appendChild($x(fe));const F=document.createElement("div");F.className="medal-cd-veil",Z.appendChild(F);const W=document.createElement("div");W.className="medal-cd-num",Z.appendChild(W);const se=document.createElement("i");se.className="medal-key",se.textContent=String(We+1),Z.appendChild(se),p.appendChild(Z)}),$=-1}function te(ce){document.body.className=`mode-${ce}`,d.classList.toggle("gone",ce!=="home"),d.classList.toggle("hidden",ce!=="home"),y.classList.toggle("hidden",ce!=="forge"),ce==="home"&&(R="main",C=0,I()),ce==="forge"&&H(),document.getElementById("mode-crest-label").textContent=ce==="sandbox"?"SANDBOX":"DUEL",document.getElementById("rival-label").textContent=ce==="sandbox"?"Sparring Dummy":"Crimson Warlock"}function Re(ce,fe){const We=document.getElementById("match-banner");document.getElementById("match-title").textContent=ce,document.getElementById("match-sub").textContent=fe,We.classList.remove("hidden")}function Le(){document.getElementById("match-banner").classList.add("hidden")}return I(),H(),{setMode:te,setDockSpells:ne,showForgeSpec:G,refreshBindButtons:H,showResult:Re,hideResult:Le,getForgeText(){return v.value},handleLobbyKey(ce){return ce.code==="ArrowUp"||ce.code==="KeyW"?(C=(C-1+N.length)%N.length,I(),!0):ce.code==="ArrowDown"||ce.code==="KeyS"?(C=(C+1)%N.length,I(),!0):ce.code==="Enter"||ce.code==="Space"?(O(C),!0):ce.code==="Escape"&&R!=="main"?(R="main",C=0,I(),!0):!1},spawnDamageNumber(ce,fe,We,Z="#ffd56b"){const F=document.createElement("div");F.className="dmg-pop",F.style.left=`${ce}px`,F.style.top=`${fe}px`,F.style.setProperty("--c",Z),F.textContent=String(Math.round(We)),M.appendChild(F),setTimeout(()=>F.remove(),860)},refreshHUD(ce,fe,We,Z,F,W){const se=`${We.hp/We.maxHp*100}%`,re=`${Z.hp/Z.maxHp*100}%`;document.getElementById("player-hp-fill").style.width=se,document.getElementById("player-hp-lost").style.width=se,document.getElementById("player-hp-num").textContent=`${Math.ceil(We.hp)}`,document.getElementById("rival-hp-fill").style.width=re,document.getElementById("rival-hp-lost").style.width=re,document.getElementById("rival-hp-num").textContent=`${Math.ceil(Z.hp)}`,document.getElementById("ward-fill").style.width=`${We.wardEnergy*100}%`,document.getElementById("score-text").textContent=`${W.player} · ${W.rival}`,document.querySelectorAll("#player-gems i").forEach((ue,P)=>ue.classList.toggle("won",P<W.player)),document.querySelectorAll("#rival-gems i").forEach((ue,P)=>ue.classList.toggle("won",P<W.rival)),p.querySelectorAll(".medal").forEach((ue,P)=>{const de=K[P];if(!de)return;const le=fe[P]||0,be=Math.min(1,le/Math.max(de.cooldown,.1));ue.classList.toggle("on",P===ce),ue.querySelector(".medal-cd-veil").style.setProperty("--cd",be.toFixed(3)),ue.querySelector(".medal-cd-num").textContent=le>.05?`${le.toFixed(1)}`:""});const Ie=K[ce];Ie&&($!==ce||x.textContent!==Ie.name)&&($=ce,x.textContent=Ie.name,x.style.setProperty("--c",Ie.palette.primary));const pe=document.getElementById("cleave-hint");F==="aim"?(pe.textContent="DRAG TO CUT  ·  RMB CANCEL",pe.classList.remove("hidden")):F==="draw"?(pe.textContent="RELEASE TO SEVER",pe.classList.remove("hidden")):pe.classList.add("hidden")}}}const pn=new U_({antialias:!1,powerPreference:"high-performance"});pn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));pn.setSize(window.innerWidth,window.innerHeight);pn.shadowMap.enabled=!0;pn.shadowMap.type=Js;pn.autoClear=!1;document.getElementById("app").appendChild(pn.domElement);const ri=new zl,Pt=new qt(62,window.innerWidth/window.innerHeight,.15,320),fn=q_(),mr=Y_({base:"./music/"}),Ia=F_(),ya=G_(pn,Ia),gr=O_(ri,Ia,28),On=V_(ri,Ia),Pa=X_(ri),zi=ax(ri),Is=ox(ri,zi.sunDir),Ma=ex(Ia,zi.sunDir),Qh=await Hx("./models/Xbot.glb"),at=Zh({scene:ri,gltf:Qh,isPlayer:!0,armorHex:"#2c4fa8",jointHex:"#68f0ff",accentHex:"#f4cf7a"}),pt=Zh({scene:ri,gltf:Qh,isPlayer:!1,armorHex:"#9c2038",jointHex:"#ff5c44",accentHex:"#ff9648"}),st=Kx({scene:ri,camera:Pt,arena:zi,pillars:Is,particles:On,sigils:gr,volumetrics:Pa,post:ya,sound:fn}),Ts=Yx(),Jx=qx(),jh=[zn({text:"Crimson lightning storm barrage bolts",slotIndex:0}),zn({text:"Void purple gravity crush slam",slotIndex:1}),zn({text:"Solar fire meteor blast",slotIndex:2})];let $e="home",bn=Ts,tn=0,Qn=new Array(9).fill(0);const Ui=[1.5,2.8,4.2],wo={player:0,rival:0};let kn=!1,ir=!1,Qt=Ts[0],Es=!1,jl=[],yn=0,Sa=-.06,Ml=0,Sl=0,ea=0,bl=100,xi=100;const ds=new Set;let vs=!1,Ao=!1,ec=!1,Da=!1;function vr(){if(!($e!=="duel"&&$e!=="sandbox")&&!kn)try{const s=pn.domElement.requestPointerLock?.();s&&typeof s.catch=="function"&&s.catch(()=>{})}catch{}}function tc(){const s=bn[tn]||bn[0];s&&(at.setSpellColor(s.palette.primary),Ma.setSpell(s.palette.primary,s.sides))}function _i(s){$e=s,kn=!1,Es=!1,st.clear(),On.clear(),gr.clear(),Pa.clear(),zi.clearMarks(),Is.reset(),Yt.hideResult(),$e==="home"?(document.pointerLockElement&&document.exitPointerLock?.(),at.reset(-4.5,4.5,Math.PI*.25),pt.reset(4.5,-4.5,-Math.PI*.75)):$e==="forge"?(document.pointerLockElement&&document.exitPointerLock?.(),at.reset(0,14,Math.PI),pt.reset(0,-1,0),pt.state.hp=100,xi=100,Yt.showForgeSpec(Qt),gr.spawn({pos:new L(0,.14,-1),color:"#f4cf7a",sides:6,radius:5.5,life:60,turn:.35})):$e==="duel"?(bn=Ts,tn=0,Yt.setDockSpells(bn),ba(),vr()):$e==="sandbox"&&(bn=Jx,tn=8,Yt.setDockSpells(bn),ba(),vr()),Yt.setMode($e),tc()}function ba(){kn=!1,Yt.hideResult(),st.clear(),On.clear(),gr.clear(),Pa.clear(),zi.clearMarks(),Is.reset(),at.reset(0,11,Math.PI),pt.reset(0,-11,0),bl=100,xi=100,yn=0,Sa=-.05,Qn.fill(0),Ui[0]=1.4,Ui[1]=2.6,Ui[2]=4,tc(),pt.setSpellColor(jh[0].palette.primary)}const Yt=Zx({duelLoadout:Ts,music:mr,sound:fn,onStartDuel:()=>_i("duel"),onStartSandbox:()=>_i("sandbox"),onOpenForge:()=>_i("forge"),onOpenHome:()=>_i("home"),onRematch:()=>{ba(),vr()},onForgeResetPillars:()=>{Is.reset(),zi.clearMarks(),pt.reset(0,-1,0),xi=100,fn.forge()},onForgePreset:s=>{Qt=zn({text:s,slotIndex:0}),Yt.showForgeSpec(Qt),Xu(Qt)},onForgeTextCast:s=>{Qt=zn({text:s,slotIndex:0}),Yt.showForgeSpec(Qt),Xu(Qt)},onForgeBindSlot:s=>{Ts[s]={...Qt},Yt.refreshBindButtons(),fn.forge()}});function Xu(s){pt.state.hp=100,xi=100;const e=at.getStaffTip(new L),t=pt.getCenter(new L).sub(e).normalize();s.archetype==="cleave"?(st.beginForgeStroke(-.48,.22,s.palette.primary),st.moveForgeStroke(.48,-.18,s.palette.rgb),st.finishForgeStroke(s,at,pt)):st.castSpell({spell:s,caster:at,target:pt,origin:e,dir:t,isPlayer:!0})}_i("home");window.addEventListener("resize",()=>{const s=window.innerWidth/window.innerHeight;Pt.aspect=s,Pt.updateProjectionMatrix(),Ma.resize(s),pn.setSize(window.innerWidth,window.innerHeight),ya.resize()});document.addEventListener("pointerlockchange",()=>{Da=document.pointerLockElement===pn.domElement,document.getElementById("aim-dot").classList.toggle("hidden",$e!=="duel"&&$e!=="sandbox"||st.cleaveLocked)});const nc=()=>{fn.unlock(),mr.wake()};window.addEventListener("pointerdown",nc,{passive:!0});window.addEventListener("keydown",nc,{passive:!0});const ed=s=>({ndcX:s.clientX/window.innerWidth*2-1,ndcY:-(s.clientY/window.innerHeight)*2+1,nx:s.clientX/window.innerWidth,ny:s.clientY/window.innerHeight});pn.domElement.addEventListener("mousedown",s=>{if(nc(),$e==="forge"&&s.button===0){Es=!0;const{ndcX:e,ndcY:t,nx:n,ny:i}=ed(s);jl=[{x:n,y:i}],st.beginForgeStroke(e,t,Qt.palette.primary),fn.cleaveAim();return}$e!=="duel"&&$e!=="sandbox"||(Da||vr(),s.button===0&&(vs=!0),s.button===2&&(ec=!0,st.cleaveLocked?st.cancelCleave():kn||fn.ward()))});window.addEventListener("mousemove",s=>{if($e==="forge"){if(!Es)return;const{ndcX:i,ndcY:r,nx:a,ny:o}=ed(s);jl.push({x:a,y:o}),st.moveForgeStroke(i,r,Qt.palette.rgb);return}if($e!=="duel"&&$e!=="sandbox"||kn||!Da&&!vs&&!st.cleaveLocked)return;const e=.0023,t=s.movementX*e,n=-s.movementY*e;Ml=t,Sl=n,!st.steerCleave(t,n)&&(yn-=t,Sa=Vt.clamp(Sa+n,-.95,.72))});window.addEventListener("mouseup",s=>{if($e==="forge"&&Es&&s.button===0){Es=!1;const e=Xx(jl);Qt=zn({text:Yt.getForgeText(),drawing:e,slotIndex:0}),Yt.showForgeSpec(Qt),pt.state.hp=100,xi=100,st.finishForgeStroke(Qt,at,pt);return}s.button===0&&(vs=!1),s.button===2&&(ec=!1)});pn.domElement.addEventListener("contextmenu",s=>s.preventDefault());window.addEventListener("wheel",s=>{if($e!=="duel"&&$e!=="sandbox")return;const e=bn.length;td((tn+(s.deltaY>0?1:e-1))%e)});window.addEventListener("keydown",s=>{if($e==="home"){Yt.handleLobbyKey(s)&&s.preventDefault();return}if($e==="forge"&&document.activeElement?.id==="forge-text"){s.code==="Escape"&&document.activeElement.blur();return}if(s.code==="Tab"){s.preventDefault(),_i($e==="forge"?"duel":"forge");return}if(s.code==="Escape"){$e==="forge"?_i("home"):Da||_i("home");return}if($e!=="duel"&&$e!=="sandbox")return;ds.add(s.code);const e=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9"].indexOf(s.code);if(e>=0&&e<bn.length&&td(e),s.code==="KeyV"&&(ir=!ir),s.code==="KeyM"){const t=!fn.muted;fn.muted=t,mr.muted=t}s.code==="KeyN"&&mr.nextTrack(),s.code==="KeyR"&&(ba(),vr()),s.code==="Space"&&!kn&&at.state.jumpsLeft>0&&(at.state.vel.y=at.state.jumpsLeft===2?12.2:11.2,at.state.grounded=!1,at.state.jumpsLeft--,On.burst(at.state.pos.clone().add(new L(0,.2,0)),[.65,.9,1],14,5,3)),(s.code==="ShiftLeft"||s.code==="ShiftRight")&&!kn&&at.state.dashCooldown<=0&&(id(at,nd()),fn.dash())});window.addEventListener("keyup",s=>ds.delete(s.code));function td(s){tn!==s&&s>=0&&s<bn.length&&(st.cancelCleave(),tn=s,tc(),fn.forge())}function nd(){const s=new L(-Math.sin(yn),0,-Math.cos(yn)),e=new L(Math.cos(yn),0,-Math.sin(yn)),t=new L;return ds.has("KeyW")&&t.add(s),ds.has("KeyS")&&t.sub(s),ds.has("KeyD")&&t.add(e),ds.has("KeyA")&&t.sub(e),t.lengthSq()>.001&&t.normalize(),t}function id(s,e){const t=e.lengthSq()>.01?e.clone():new L(Math.sin(s.state.yaw),0,Math.cos(s.state.yaw));s.state.vel.x=t.x*23,s.state.vel.z=t.z*23,s.state.vel.y=Math.max(s.state.vel.y,2.5),s.state.dashCooldown=1.15,s.state.dashTimer=.22;for(let n=0;n<16;n++)On.spawn({kind:5,x:s.state.pos.x+On.rnd(.4),y:s.state.pos.y+.5+Math.random()*1.2,z:s.state.pos.z+On.rnd(.4),vx:-t.x*12,vy:On.rnd(1.5),vz:-t.z*12,life:.3,size:[.04,.015],colour:[.65,.92,1]})}function Tl(s,e,t){const n=s.state;n.dashCooldown=Math.max(0,n.dashCooldown-t),n.dashTimer=Math.max(0,n.dashTimer-t),n.gravSuspended=Math.max(0,n.gravSuspended-t),n.wardActive?(n.wardEnergy=Math.max(0,n.wardEnergy-t*.42),n.wardEnergy<=.01&&(n.wardActive=!1)):n.wardEnergy=Math.min(1,n.wardEnergy+t*.26);const i=n.wardActive?5.2:10.6;if(n.dashTimer<=0&&n.gravSuspended<=0){const o=n.grounded?42:18;n.vel.x+=(e.x*i-n.vel.x)*Math.min(1,o*t),n.vel.z+=(e.z*i-n.vel.z)*Math.min(1,o*t)}n.gravSuspended<=0&&(n.vel.y-=28*t),n.pos.addScaledVector(n.vel,t),n.pos.y<=0&&(n.vel.y<-18&&On.burst(new L(n.pos.x,.2,n.pos.z),[.85,.8,.72],24,9,2),n.pos.y=0,n.vel.y=0,n.grounded=!0,n.jumpsLeft=2);const r=Math.hypot(n.pos.x,n.pos.z),a=ls-.9;if(r>a){const o=a/r;n.pos.x*=o,n.pos.z*=o,n.vel.x*=.4,n.vel.z*=.4}Is.collideCircle(n.pos,n.radius,n.height)}const Zn={strafeSign:1,strafeTimer:1.5,thinkTimer:.5};function qu(s){const e=pt.state,t=at.state,n=t.pos.clone().sub(e.pos),i=Math.hypot(n.x,n.z),r=i>.01?new L(n.x/i,0,n.z/i):new L(0,0,1);if(e.yaw=Math.atan2(r.x,r.z),$e!=="duel"){Tl(pt,new L,s),e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+s*12));return}Zn.strafeTimer-=s,Zn.strafeTimer<=0&&(Zn.strafeTimer=1.2+Math.random()*1.6,Zn.strafeSign*=-1);const a=new L(-r.z*Zn.strafeSign,0,r.x*Zn.strafeSign),o=a.clone().multiplyScalar(.85);i>19?o.addScaledVector(r,.75):i<10&&o.addScaledVector(r,-.75),o.lengthSq()>.001&&o.normalize(),e.dashCooldown<=0&&i<11&&Math.random()<s*.9&&id(pt,a),e.wardActive=e.wardEnergy>.4&&st.cleavePhase==="draw",Tl(pt,o,s);for(let l=0;l<3;l++)Ui[l]=Math.max(0,Ui[l]-s);if(Zn.thinkTimer-=s,Zn.thinkTimer<=0&&e.gravSuspended<=0){const l=[0,1,2].filter(c=>Ui[c]<=0);if(l.length>0&&i<34){const c=l[Math.floor(Math.random()*l.length)],u=jh[c];pt.setSpellColor(u.palette.primary);const h=pt.getStaffTip(new L),f=at.getCenter(new L).addScaledVector(t.vel,.25).sub(h).normalize();st.castSpell({spell:u,caster:pt,target:at,origin:h,dir:f,isPlayer:!1}),Ui[c]=u.cooldown*1.4+1.1,Zn.thinkTimer=1.2}}}const Qx=new Op;let Jn=0;function sd(){requestAnimationFrame(sd);const s=Math.min(Qx.getDelta(),.05),e=$e==="home"?.55:st.worldPace,t=s*e;if(Jn+=t,mr.duck=st.cleaveLocked||Es?.35:1,($e==="duel"||$e==="sandbox")&&!kn){for(let c=0;c<Qn.length;c++){const u=$e==="sandbox"?2.2:1;Qn[c]=Math.max(0,Qn[c]-t*u)}at.state.wardActive=ec&&!st.cleaveLocked&&at.state.wardEnergy>.05;const o=st.cleaveLocked?new L:nd();at.state.yaw=yn+Math.PI,Tl(at,o,t);const l=bn[tn];if(l){if(l.archetype==="cleave")(Qn[tn]<=0||st.cleavePhase!=="idle")&&st.handlePlayerCleaveInput(vs,Ao,l,at,pt)&&(Qn[tn]=l.cooldown);else if(vs&&!Ao&&Qn[tn]<=0&&!st.cleaveLocked){const c=new L;Pt.getWorldDirection(c),st.castSpell({spell:l,caster:at,target:pt,origin:Pt.position.clone(),dir:c,isPlayer:!0}),Qn[tn]=l.cooldown}}qu(t),$e==="duel"&&(pt.state.hp<=0||at.state.hp<=0)&&(kn=!0,st.cancelCleave(),pt.state.hp<=0?(wo.player++,Yt.showResult("VICTORY","The Crimson Warlock falls. Rematch or forge new spells."),fn.victory()):(wo.rival++,Yt.showResult("DEFEAT","Enter the 3D Spell Forge to craft a stronger loadout.")),document.pointerLockElement&&document.exitPointerLock?.())}else $e==="forge"?qu(t):$e==="home"&&(yn+=s*.14);if(Ao=vs,pt.state.hp<xi){const o=xi-pt.state.hp,l=pt.getCenter(new L).add(new L(0,1,0)).project(Pt);if(l.z<1){const c=$e==="forge"?Qt:bn[tn]||Ts[0];Yt.spawnDamageNumber((l.x*.5+.5)*window.innerWidth,(-l.y*.5+.5)*window.innerHeight,o,c.palette.primary)}}xi=pt.state.hp,at.state.hp<bl&&(ea=1),bl=at.state.hp,ea=Math.max(0,ea-s*2.8),ya.uniforms.uDamage.value=ea,Pt.fov=Vt.clamp(62+st.fovOffset,38,86),Pt.updateProjectionMatrix();const n=new Ht().setFromEuler(new Vn(Sa+st.jolt.x,yn+st.jolt.y,st.jolt.z,"YXZ"));if($e==="home")Pt.position.set(Math.sin(yn)*18.5-4,6.2,Math.cos(yn)*18.5),Pt.lookAt(2.5,2,-1);else if($e==="forge")Pt.position.set(st.jolt.y*2,4.2+st.jolt.x*2,16.5),Pt.lookAt(0,2,-2);else if(ir){const o=new L(0,0,1).applyQuaternion(n),l=new L(1,0,0).applyQuaternion(n),c=at.state.pos.clone().add(new L(0,2.15,0));Pt.position.copy(c).addScaledVector(o,5.4).addScaledVector(l,.85),Pt.position.y<.7&&(Pt.position.y=.7),Pt.quaternion.copy(n)}else Pt.position.copy(at.state.pos).add(new L(0,1.88,0)),Pt.quaternion.copy(n);st.update(s,t,Jn),zi.update(t,Jn),Is.update(t,Jn),On.update(t),gr.update(t,Jn),Pa.update(t,Jn,Pt);const i=Math.hypot(at.state.vel.x,at.state.vel.z);Ma.update(s,Jn,{speed:i,recoil:at.state.castRecoil,charge:st.cleaveLocked?1:0,turnDx:Ml,turnDy:Sl}),Ml*=.8,Sl*=.8;const r=($e==="duel"||$e==="sandbox")&&!ir;at.updateVisuals(t,Jn,r||$e==="forge"),pt.updateVisuals(t,Jn,!1);const a=($e==="duel"||$e==="sandbox")&&!ir;ya.render(ri,Pt,a?Ma:null),($e==="duel"||$e==="sandbox")&&(Yt.refreshHUD(tn,Qn,at.state,pt.state,st.cleavePhase,wo),document.getElementById("aim-dot").classList.toggle("hidden",st.cleaveLocked||kn))}sd();
