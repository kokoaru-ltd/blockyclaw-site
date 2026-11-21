// Road station s is arc length in metres; positive lateral is the driver's right.
// All render objects and collision tests use this same deterministic centreline.
const STEP=1,MAX_S=12000;
const centreX=new Float64Array(MAX_S+1),centreZ=new Float64Array(MAX_S+1);
export function roadYaw(s){const t=Math.max(0,s-35),r=Math.min(1,t/60),ramp=r*r*(3-2*r);return -.50*Math.sin(t/110)*ramp+.10*Math.sin(t/47)*ramp;}
for(let i=1;i<=MAX_S;i++){const yaw=roadYaw(i-.5);centreX[i]=centreX[i-1]-Math.sin(yaw)*STEP;centreZ[i]=centreZ[i-1]-Math.cos(yaw)*STEP;}
export function roadPoint(s,lateral=0){const station=Math.max(0,Math.min(MAX_S-.001,s)),index=Math.floor(station),f=station-index,yaw=roadYaw(station),back=Math.min(0,s);return {x:centreX[index]+(centreX[index+1]-centreX[index])*f+Math.cos(yaw)*lateral,y:0,z:centreZ[index]+(centreZ[index+1]-centreZ[index])*f-Math.sin(yaw)*lateral-back,yaw};}
export function roadCurvature(s){return (roadYaw(s+.25)-roadYaw(Math.max(0,s-.25)))/Math.min(.5,s+.25);}
// Driveable HALF-width: the continuous guardrails sit at lateral +/- roadWidth(s).
export function roadWidth(s){const phase=((s-240)%650+650)%650;return phase<180?9-2.2*Math.sin(Math.PI*phase/180)**2:9;}
export function roadEdges(s){const width=roadWidth(s);return {left:roadPoint(s,-width),right:roadPoint(s,width),halfWidth:width};}
export function sweptRoadEdge(s0,lateral0,s1,lateral1,vehicleHalfWidth=1.03){const count=Math.max(1,Math.ceil(Math.abs(s1-s0)/.75));for(let i=0;i<=count;i++){const t=i/count,s=s0+(s1-s0)*t,lateral=lateral0+(lateral1-lateral0)*t,width=Math.min(roadWidth(s-2.05),roadWidth(s),roadWidth(s+2.05));if(Math.abs(lateral)+vehicleHalfWidth+.11>=width)return {s,lateral,t,width,side:lateral<0?'left':'right'};}return null;}
// Swept relative AABB: catches longitudinal and lateral crossings between frames.
export function sweptRoadContact(s0,x0,s1,x1,otherS0,otherX0,otherS1,otherX1,halfLength,halfWidth){let enter=0,exit=1;for(const [start,end,extent] of [[s0-otherS0,s1-otherS1,halfLength],[x0-otherX0,x1-otherX1,halfWidth]]){const delta=end-start;if(Math.abs(delta)<1e-9){if(Math.abs(start)>extent)return null;continue;}const a=(-extent-start)/delta,b=(extent-start)/delta;enter=Math.max(enter,Math.min(a,b));exit=Math.min(exit,Math.max(a,b));if(enter>exit)return null;}return enter>=0&&enter<=1?enter:null;}
