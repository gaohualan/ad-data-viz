(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="180",_r={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ff=0,jc=1,Nf=2,Nh=1,Bf=2,Vn=3,Fn=0,Ge=1,dn=2,ui=0,vr=1,qc=2,Kc=3,Zc=4,Of=5,Ai=100,kf=101,zf=102,Gf=103,Vf=104,Hf=200,Wf=201,Xf=202,Yf=203,el=204,nl=205,jf=206,qf=207,Kf=208,Zf=209,Jf=210,$f=211,Qf=212,td=213,ed=214,il=0,rl=1,sl=2,Sr=3,ol=4,al=5,ll=6,cl=7,Bh=0,nd=1,id=2,hi=0,rd=1,sd=2,od=3,ad=4,ld=5,cd=6,ud=7,Oh=300,Mr=301,br=302,ul=303,hl=304,Oo=306,fl=1e3,Ci=1001,dl=1002,rn=1003,hd=1004,Ts=1005,pn=1006,ra=1007,Ri=1008,jn=1009,kh=1010,zh=1011,fs=1012,lc=1013,fi=1014,mn=1015,_s=1016,cc=1017,uc=1018,ds=1020,Gh=35902,Vh=35899,Hh=1021,Wh=1022,Ze=1023,ps=1026,ms=1027,hc=1028,ko=1029,Xh=1030,fc=1031,dc=1033,Mo=33776,bo=33777,Eo=33778,To=33779,pl=35840,ml=35841,gl=35842,_l=35843,vl=36196,xl=37492,yl=37496,Sl=37808,Ml=37809,bl=37810,El=37811,Tl=37812,Al=37813,wl=37814,Cl=37815,Rl=37816,Pl=37817,Dl=37818,Ul=37819,Ll=37820,Il=37821,Fl=36492,Nl=36494,Bl=36495,Ol=36283,kl=36284,zl=36285,Gl=36286,fd=3200,Yh=3201,dd=0,pd=1,li="",en="srgb",Er="srgb-linear",Uo="linear",oe="srgb",ki=7680,Jc=519,md=512,gd=513,_d=514,jh=515,vd=516,xd=517,yd=518,Sd=519,$c=35044,Qc="300 es",wn=2e3,Lo=2001;class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],os=Math.PI/180,Vl=180/Math.PI;function vs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function Md(s,t){return(s%t+t)%t}function sa(s,t,e){return(1-e)*s+e*t}function Gr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bd={DEG2RAD:os};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],f=i[n+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,p*y);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const v=a*y;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),f=a(r/2),h=l(i/2),d=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+n*c-r*l,this._y=n*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),u=2*(a*e-r*n),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=n+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new N,tu=new Di;class qt{constructor(t,e,i,n,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=n,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=n[0],m=n[3],p=n[6],y=n[1],x=n[4],v=n[7],b=n[2],T=n[5],E=n[8];return r[0]=o*_+a*y+l*b,r[3]=o*m+a*x+l*T,r[6]=o*p+a*v+l*E,r[1]=c*_+u*y+f*b,r[4]=c*m+u*x+f*T,r[7]=c*p+u*v+f*E,r[2]=h*_+d*y+g*b,r[5]=h*m+d*x+g*T,r[8]=h*p+d*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+i*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(n*c-u*i)*_,t[2]=(a*i-n*o)*_,t[3]=h*_,t[4]=(u*e-n*l)*_,t[5]=(n*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new qt;function qh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ed(){const s=Io("canvas");return s.style.display="block",s}const eu={};function gs(s){s in eu||(eu[s]=!0,console.warn(s))}function Td(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const nu=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){const s={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(n.r=Xn(n.r),n.g=Xn(n.g),n.b=Xn(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(n.r=xr(n.r),n.g=xr(n.g),n.b=xr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===li?Uo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Er]:{primaries:t,whitePoint:i,transfer:Uo,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),s}const ee=Ad();function Xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zi;class wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{zi===void 0&&(zi=Io("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=zi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Io("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cd=0;class pc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(la(n[o].image)):r.push(la(n[o]))}else r=la(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function la(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;const ca=new N;class ke extends Fi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=Ci,n=Ci,r=pn,o=Ri,a=Ze,l=jn,c=ke.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=vs(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fl:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fl:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Oh;ke.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,n=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,b=(p+1)/2,T=(u+h)/4,E=(f+_)/4,C=(g+m)/4;return x>v&&x>b?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=T/i,r=E/i):v>b?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=T/n,r=C/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=E/r,n=C/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pd extends Fi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const n={width:t,height:e,depth:i.depth},r=new ke(n);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new pc(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Pd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Kh extends ke{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends ke{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fe{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),ws.subVectors(this.max,Vr),Gi.subVectors(t.a,Vr),Vi.subVectors(t.b,Vr),Hi.subVectors(t.c,Vr),ti.subVectors(Vi,Gi),ei.subVectors(Hi,Vi),gi.subVectors(Gi,Hi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-gi.z,gi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,gi.z,0,-gi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-gi.y,gi.x,0];return!ua(e,Gi,Vi,Hi,ws)||(e=[1,0,0,0,1,0,0,0,1],!ua(e,Gi,Vi,Hi,ws))?!1:(Cs.crossVectors(ti,ei),e=[Cs.x,Cs.y,Cs.z],ua(e,Gi,Vi,Hi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new N,new N,new N,new N,new N,new N,new N,new N],bn=new N,As=new fe,Gi=new N,Vi=new N,Hi=new N,ti=new N,ei=new N,gi=new N,Vr=new N,ws=new N,Cs=new N,_i=new N;function ua(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){_i.fromArray(s,r);const a=n.x*Math.abs(_i.x)+n.y*Math.abs(_i.y)+n.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),u=i.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ud=new fe,Hr=new N,ha=new N;class sn{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ud.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hr.subVectors(t,this.center);const e=Hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Hr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hr.copy(t.center).add(ha)),this.expandByPoint(Hr.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const On=new N,fa=new N,Rs=new N,ni=new N,da=new N,Ps=new N,pa=new N;class xs{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){fa.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(fa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Rs),a=ni.dot(this.direction),l=-ni.dot(Rs),c=ni.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(fa).addScaledVector(Rs,h),d}intersectSphere(t,e){On.subVectors(t.center,this.origin);const i=On.dot(this.direction),n=On.dot(On)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,n=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,n=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,i,n,r){da.subVectors(e,t),Ps.subVectors(i,t),pa.crossVectors(da,Ps);let o=this.direction.dot(pa),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const l=a*this.direction.dot(Ps.crossVectors(ni,Ps));if(l<0)return null;const c=a*this.direction.dot(da.cross(ni));if(c<0||l+c>o)return null;const u=-a*ni.dot(pa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,i,n,r,o,a,l,c,u,f,h,d,g,_,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,i,n,r,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Id)}lookAt(t,e,i){const n=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ii.crossVectors(i,Qe),ii.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ii.crossVectors(i,Qe)),ii.normalize(),Ds.crossVectors(Qe,ii),n[0]=ii.x,n[4]=Ds.x,n[8]=Qe.x,n[1]=ii.y,n[5]=Ds.y,n[9]=Qe.y,n[2]=ii.z,n[6]=Ds.z,n[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],x=i[7],v=i[11],b=i[15],T=n[0],E=n[4],C=n[8],M=n[12],S=n[1],D=n[5],w=n[9],U=n[13],L=n[2],z=n[6],B=n[10],$=n[14],W=n[3],Y=n[7],K=n[11],F=n[15];return r[0]=o*T+a*S+l*L+c*W,r[4]=o*E+a*D+l*z+c*Y,r[8]=o*C+a*w+l*B+c*K,r[12]=o*M+a*U+l*$+c*F,r[1]=u*T+f*S+h*L+d*W,r[5]=u*E+f*D+h*z+d*Y,r[9]=u*C+f*w+h*B+d*K,r[13]=u*M+f*U+h*$+d*F,r[2]=g*T+_*S+m*L+p*W,r[6]=g*E+_*D+m*z+p*Y,r[10]=g*C+_*w+m*B+p*K,r[14]=g*M+_*U+m*$+p*F,r[3]=y*T+x*S+v*L+b*W,r[7]=y*E+x*D+v*z+b*Y,r[11]=y*C+x*w+v*B+b*K,r[15]=y*M+x*U+v*$+b*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-n*c*f-r*a*h+i*c*h+n*a*d-i*l*d)+_*(+e*l*d-e*c*h+r*o*h-n*o*d+n*c*u-r*l*u)+m*(+e*c*f-e*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-n*a*u-e*l*f+e*a*h+n*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,x=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,b=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,T=e*y+i*x+n*v+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(_*h*r-f*m*r-_*n*d+i*m*d+f*n*p-i*h*p)*E,t[2]=(a*m*r-_*l*r+_*n*c-i*m*c-a*n*p+i*l*p)*E,t[3]=(f*l*r-a*h*r-f*n*c+i*h*c+a*n*d-i*l*d)*E,t[4]=x*E,t[5]=(u*m*r-g*h*r+g*n*d-e*m*d-u*n*p+e*h*p)*E,t[6]=(g*l*r-o*m*r-g*n*c+e*m*c+o*n*p-e*l*p)*E,t[7]=(o*h*r-u*l*r+u*n*c-e*h*c-o*n*d+e*l*d)*E,t[8]=v*E,t[9]=(g*f*r-u*_*r-g*i*d+e*_*d+u*i*p-e*f*p)*E,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*E,t[11]=(u*a*r-o*f*r-u*i*c+e*f*c+o*i*d-e*a*d)*E,t[12]=b*E,t[13]=(u*_*n-g*f*n+g*i*h-e*_*h-u*i*m+e*f*m)*E,t[14]=(g*a*n-o*_*n-g*i*l+e*_*l+o*i*m-e*a*m)*E,t[15]=(o*f*n-u*a*n+u*i*l-e*f*l-o*i*h+e*a*h)*E,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,_=o*u,m=o*f,p=a*f,y=l*c,x=l*u,v=l*f,b=i.x,T=i.y,E=i.z;return n[0]=(1-(_+p))*b,n[1]=(d+v)*b,n[2]=(g-x)*b,n[3]=0,n[4]=(d-v)*T,n[5]=(1-(h+p))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(g+x)*E,n[9]=(m-y)*E,n[10]=(1-(h+_))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Wi.set(n[0],n[1],n[2]).length();const o=Wi.set(n[4],n[5],n[6]).length(),a=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],En.copy(this);const c=1/r,u=1/o,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,e.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=wn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(i-n),h=(e+t)/(e-t),d=(i+n)/(i-n);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===wn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=wn,l=!1){const c=this.elements,u=2/(e-t),f=2/(i-n),h=-(e+t)/(e-t),d=-(i+n)/(i-n);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===wn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new N,En=new Qt,Ld=new N(0,0,0),Id=new N(1,1,1),ii=new N,Ds=new N,Qe=new N,ru=new Qt,su=new Di;class qn{constructor(t=0,e=0,i=0,n=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fd=0;const ou=new N,Xi=new Di,kn=new Qt,Us=new N,Wr=new N,Nd=new N,Bd=new Di,au=new N(1,0,0),lu=new N(0,1,0),cu=new N(0,0,1),uu={type:"added"},Od={type:"removed"},Yi={type:"childadded",child:null},ma={type:"childremoved",child:null};class Fe extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new N,e=new qn,i=new Di,n=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Qt},normalMatrix:{value:new qt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(cu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Us.copy(t):Us.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Wr,Us,this.up):kn.lookAt(Us,Wr,this.up),this.quaternion.setFromRotationMatrix(kn),n&&(kn.extractRotation(n.matrixWorld),Xi.setFromRotationMatrix(kn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Fe.DEFAULT_UP=new N(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new N,zn=new N,ga=new N,Gn=new N,ji=new N,qi=new N,hu=new N,_a=new N,va=new N,xa=new N,ya=new pe,Sa=new pe,Ma=new pe;class Ie{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Tn.subVectors(t,e),n.cross(Tn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Tn.subVectors(n,e),zn.subVectors(i,e),ga.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(zn),l=Tn.dot(ga),c=zn.dot(zn),u=zn.dot(ga),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return ya.setScalar(0),Sa.setScalar(0),Ma.setScalar(0),ya.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,i),Ma.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,i,n){return Tn.subVectors(i,e),zn.subVectors(t,e),Tn.cross(zn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Tn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return Ie.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;ji.subVectors(n,i),qi.subVectors(r,i),_a.subVectors(t,i);const l=ji.dot(_a),c=qi.dot(_a);if(l<=0&&c<=0)return e.copy(i);va.subVectors(t,n);const u=ji.dot(va),f=qi.dot(va);if(u>=0&&f<=u)return e.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ji,o);xa.subVectors(t,r);const d=ji.dot(xa),g=qi.dot(xa);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(qi,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return hu.subVectors(r,n),a=(f-u)/(f-u+(d-g)),e.copy(n).addScaledVector(hu,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(ji,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function ba(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ee.workingColorSpace){if(t=Md(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ba(o,r,t+1/3),this.g=ba(o,r,t),this.b=ba(o,r,t-1/3)}return ee.colorSpaceToWorking(this,n),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=Zh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ee.workingToColorSpace(Be.copy(this),t),Math.round(jt(Be.r*255,0,255))*65536+Math.round(jt(Be.g*255,0,255))*256+Math.round(jt(Be.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Be.copy(this),e);const i=Be.r,n=Be.g,r=Be.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=en){ee.workingToColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,n=Be.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Ls);const i=sa(ri.h,Ls.h,e),n=sa(ri.s,Ls.s,e),r=sa(ri.l,Ls.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Kt;Kt.NAMES=Zh;let kd=0;class Ar extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=vr,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=nl,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==el&&(i.blendSrc=this.blendSrc),this.blendDst!==nl&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wr extends Ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new N,Is=new Yt;let zd=0;class xe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$c,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}}class Jh extends xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $h extends xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class me extends xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Gd=0;const hn=new Qt,Ea=new Fe,Ki=new N,tn=new fe,Xr=new fe,Re=new N;class ue extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?$h:Jh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(tn.min,Xr.min),tn.expandByPoint(Re),Re.addVectors(tn.max,Xr.max),tn.expandByPoint(Re)):(tn.expandByPoint(Xr.min),tn.expandByPoint(Xr.max))}tn.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Re.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),Re.add(Ki)),n=Math.max(n,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new N,l[C]=new N;const c=new N,u=new N,f=new N,h=new Yt,d=new Yt,g=new Yt,_=new N,m=new N;function p(C,M,S){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[C].add(_),a[M].add(_),a[S].add(_),l[C].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){const S=y[C],D=S.start,w=S.count;for(let U=D,L=D+w;U<L;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new N,v=new N,b=new N,T=new N;function E(C){b.fromBufferAttribute(n,C),T.copy(b);const M=a[C];x.copy(M),x.sub(b.multiplyScalar(b.dot(M))).normalize(),v.crossVectors(T,M);const D=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,D)}for(let C=0,M=y.length;C<M;++C){const S=y[C],D=S.start,w=S.count;for(let U=D,L=D+w;U<L;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const n=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(n,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)n.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(n,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new xe(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(n[l]=u,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new Qt,vi=new xs,Fs=new sn,du=new N,Ns=new N,Bs=new N,Os=new N,Ta=new N,ks=new N,pu=new N,zs=new N;class ye extends Fe{constructor(t=new ue,e=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Ta.fromBufferAttribute(f,t),o?ks.addScaledVector(Ta,u):ks.addScaledVector(Ta.sub(e),u))}e.add(ks)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(Fs.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Fs,du)===null||vi.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(fu.copy(r).invert(),vi.copy(t.ray).applyMatrix4(fu),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=x;v<b;v+=3){const T=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);n=Gs(this,p,t,i,c,u,f,T,E,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);n=Gs(this,o,t,i,c,u,f,y,x,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=x;v<b;v+=3){const T=v,E=v+1,C=v+2;n=Gs(this,p,t,i,c,u,f,T,E,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;n=Gs(this,o,t,i,c,u,f,y,x,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Vd(s,t,e,i,n,r,o,a){let l;if(t.side===Ge?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Fn,a),l===null)return null;zs.copy(a),zs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(zs);return c<e.near||c>e.far?null:{distance:c,point:zs.clone(),object:s}}function Gs(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Ns),s.getVertexPosition(l,Bs),s.getVertexPosition(c,Os);const u=Vd(s,t,e,i,Ns,Bs,Os,pu);if(u){const f=new N;Ie.getBarycoord(pu,Ns,Bs,Os,f),n&&(u.uv=Ie.getInterpolatedAttribute(n,a,l,c,f,new Yt)),r&&(u.uv1=Ie.getInterpolatedAttribute(r,a,l,c,f,new Yt)),o&&(u.normal=Ie.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Ie.getNormal(Ns,Bs,Os,h.normal),u.face=h,u.barycoord=f}return u}class Li extends ue{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function g(_,m,p,y,x,v,b,T,E,C,M){const S=v/E,D=b/C,w=v/2,U=b/2,L=T/2,z=E+1,B=C+1;let $=0,W=0;const Y=new N;for(let K=0;K<B;K++){const F=K*D-U;for(let X=0;X<z;X++){const tt=X*S-w;Y[_]=tt*y,Y[m]=F*x,Y[p]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(X/E),f.push(1-K/C),$+=1}}for(let K=0;K<C;K++)for(let F=0;F<E;F++){const X=h+F+z*K,tt=h+F+z*(K+1),nt=h+(F+1)+z*(K+1),Z=h+(F+1)+z*K;l.push(X,tt,Z),l.push(tt,nt,Z),W+=6}a.addGroup(d,W,M),d+=W,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Tr(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const i=Tr(s[e]);for(const n in i)t[n]=i[n]}return t}function Hd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const tf={clone:Tr,merge:ze};var Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ef extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new N,mu=new Yt,gu=new Yt;class fn extends ef{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,mu,gu),e.subVectors(gu,mu)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ji=1;class Yd extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new fn(Zi,Ji,t,e);n.layers=this.layers,this.add(n);const r=new fn(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const o=new fn(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const a=new fn(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const l=new fn(Zi,Ji,t,e);l.layers=this.layers,this.add(l);const c=new fn(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nf extends ke{constructor(t=[],e=Mr,i,n,r,o,a,l,c,u){super(t,e,i,n,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new nf(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Li(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:ui});r.uniforms.tEquirect.value=e;const o=new ye(n,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=pn),new Yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}class Wn extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qd={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qd)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class gc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=i}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kd extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class as extends ke{constructor(t=null,e=1,i=1,n,r,o,a,l,c=rn,u=rn,f,h){super(null,o,a,l,c,u,n,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hl extends xe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new Qt,_u=new Qt,Vs=[],vu=new fe,Zd=new Qt,Yr=new ye,jr=new sn;class xu extends ye{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Zd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$i),vu.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(vu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$i),jr.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),t.ray.intersectsSphere(jr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,$i),_u.multiplyMatrices(i,$i),Yr.matrixWorld=_u,Yr.raycast(t,Vs);for(let o=0,a=Vs.length;o<a;o++){const l=Vs[o];l.instanceId=r,l.object=this,e.push(l)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new as(new Float32Array(n*this.count),n,this.count,hc,mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wa=new N,Jd=new N,$d=new qt;class Ln{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=wa.subVectors(i,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||$d.getNormalMatrix(t),n=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new sn,Qd=new Yt(.5,.5),Hs=new N;class zo{constructor(t=new Ln,e=new Ln,i=new Ln,n=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn,i=!1){const n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],x=r[13],v=r[14],b=r[15];if(n[0].setComponents(c-o,d-u,p-g,b-y).normalize(),n[1].setComponents(c+o,d+u,p+g,b+y).normalize(),n[2].setComponents(c+a,d+f,p+_,b+x).normalize(),n[3].setComponents(c-a,d-f,p-_,b-x).normalize(),i)n[4].setComponents(l,h,m,v).normalize(),n[5].setComponents(c-l,d-h,p-m,b-v).normalize();else if(n[4].setComponents(c-l,d-h,p-m,b-v).normalize(),e===wn)n[5].setComponents(c+l,d+h,p+m,b+v).normalize();else if(e===Lo)n[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);const e=Qd.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Hs.x=n.normal.x>0?t.max.x:t.min.x,Hs.y=n.normal.y>0?t.max.y:t.min.y,Hs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Dn=new Qt,Un=new zo;class _c{constructor(){this.coordinateSystem=wn}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let i=0;i<e.cameras.length;i++){const n=e.cameras[i];if(Dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,n.coordinateSystem,n.reversedDepth),Un.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let i=0;i<e.cameras.length;i++){const n=e.cameras[i];if(Dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,n.coordinateSystem,n.reversedDepth),Un.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let i=0;i<e.cameras.length;i++){const n=e.cameras[i];if(Dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,n.coordinateSystem,n.reversedDepth),Un.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let i=0;i<e.cameras.length;i++){const n=e.cameras[i];if(Dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,n.coordinateSystem,n.reversedDepth),Un.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let i=0;i<e.cameras.length;i++){const n=e.cameras[i];if(Dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,n.coordinateSystem,n.reversedDepth),Un.containsPoint(t))return!0}return!1}clone(){return new _c}}function Ca(s,t){return s-t}function tp(s,t){return s.z-t.z}function ep(s,t){return t.z-s.z}class np{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,i,n){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=i,a.index=n}reset(){this.list.length=0,this.index=0}}const je=new Qt,ip=new Kt(1,1,1),yu=new zo,rp=new _c,Ws=new fe,yi=new sn,qr=new N,Su=new N,sp=new N,Ra=new np,Oe=new ye,Xs=[];function op(s,t,e=0){const i=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const n=s.count;for(let r=0;r<n;r++)for(let o=0;o<i;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*i);t.needsUpdate=!0}function Si(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let i=0;i<e;i++)t[i]=s[i]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}let ap=class extends ye{constructor(t,e,i=e*2,n){super(new ue,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),i=new as(e,t,t,Ze,mn);this._matricesTexture=i}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),i=new as(e,t,t,ko,fi);this._indirectTexture=i}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),i=new as(e,t,t,Ze,mn);i.colorSpace=ee.workingColorSpace,this._colorsTexture=i}_initializeGeometry(t){const e=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(i*l),f=new xe(u,l,c);e.setAttribute(r,f)}if(t.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);e.setIndex(new xe(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in e.attributes){if(!t.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=t.getAttribute(i),r=e.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fe);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let i=0,n=e.length;i<n;i++){if(e[i].active===!1)continue;const r=e[i].geometryIndex;this.getMatrixAt(i,je),this.getBoundingBoxAt(r,Ws).applyMatrix4(je),t.union(Ws)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let i=0,n=e.length;i<n;i++){if(e[i].active===!1)continue;const r=e[i].geometryIndex;this.getMatrixAt(i,je),this.getBoundingSphereAt(r,yi).applyMatrix4(je),t.union(yi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:t};let n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ca),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));const r=this._matricesTexture;je.identity().toArray(r.image.data,n*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(ip.toArray(o.image.data,n*4),o.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(t,e=-1,i=-1){this._initializeGeometry(t),this._validateGeometry(t);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?o.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ca),l=this._availableGeometryIds.shift(),r[l]=n):(l=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(l,t),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(n&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const u in i.attributes){const f=e.getAttribute(u),h=i.getAttribute(u);op(f,h,l);const d=f.itemSize;for(let g=f.count,_=c;g<_;g++){const m=l+g;for(let p=0;p<d;p++)h.setComponent(m,p,0)}h.needsUpdate=!0,h.addUpdateRange(l*d,c*d)}if(n){const u=a.indexStart,f=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let h=0;h<o.count;h++)r.setX(u+h,l+o.getX(h));for(let h=o.count,d=f;h<d;h++)r.setX(u+h,l);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=n?a.indexStart:a.vertexStart,a.count=n?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===t&&this.deleteInstance(n);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const i=this._geometryInfo,n=i.map((o,a)=>a).sort((o,a)=>i[o].vertexStart-i[a].vertexStart),r=this.geometry;for(let o=0,a=i.length;o<a;o++){const l=n[o],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:u,vertexStart:f,reservedIndexCount:h}=c,d=r.index,g=d.array,_=t-f;for(let m=u;m<u+h;m++)g[m]=g[m]+_;d.array.copyWithin(e,u,u+h),d.addUpdateRange(e,h),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:u,reservedVertexCount:f}=c,h=r.attributes;for(const d in h){const g=h[d],{array:_,itemSize:m}=g;_.copyWithin(t*m,u*m,(u+f)*m),g.addUpdateRange(t*m,f*m)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[t];if(n.boundingBox===null){const r=new fe,o=i.index,a=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let u=l;o&&(u=o.getX(u)),r.expandByPoint(qr.fromBufferAttribute(a,u))}n.boundingBox=r}return e.copy(n.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[t];if(n.boundingSphere===null){const r=new sn;this.getBoundingBoxAt(t,Ws),Ws.getCenter(r.center);const o=i.index,a=i.attributes.position;let l=0;for(let c=n.start,u=n.start+n.count;c<u;c++){let f=c;o&&(f=o.getX(f)),qr.fromBufferAttribute(a,f),l=Math.max(l,r.center.distanceToSquared(qr))}r.radius=Math.sqrt(l),n.boundingSphere=r}return e.copy(n.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const i=this._matricesTexture,n=this._matricesTexture.image.data;return e.toArray(n,t*16),i.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const i=this._geometryInfo[t];return e.vertexStart=i.vertexStart,e.vertexCount=i.vertexCount,e.reservedVertexCount=i.reservedVertexCount,e.indexStart=i.indexStart,e.indexCount=i.indexCount,e.reservedIndexCount=i.reservedIndexCount,e.start=i.start,e.count=i.count,e}setInstanceCount(t){const e=this._availableInstanceIds,i=this._instanceInfo;for(e.sort(Ca);e[e.length-1]===i.length-1;)i.pop(),e.pop();if(t<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const n=new Int32Array(t),r=new Int32Array(t);Si(this._multiDrawCounts,n),Si(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Si(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Si(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Si(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const i=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...i.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ue,this._initializeGeometry(r));const o=this.geometry;r.index&&Si(r.index.array,o.index.array);for(const a in r.attributes)Si(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Oe.material=this.material,Oe.geometry.index=o.index,Oe.geometry.attributes=o.attributes,Oe.geometry.boundingBox===null&&(Oe.geometry.boundingBox=new fe),Oe.geometry.boundingSphere===null&&(Oe.geometry.boundingSphere=new sn);for(let a=0,l=i.length;a<l;a++){if(!i[a].visible||!i[a].active)continue;const c=i[a].geometryIndex,u=n[c];Oe.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Oe.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Oe.geometry.boundingBox),this.getBoundingSphereAt(c,Oe.geometry.boundingSphere),Oe.raycast(t,Xs);for(let f=0,h=Xs.length;f<h;f++){const d=Xs[f];d.object=this,d.batchId=a,e.push(d)}Xs.length=0}Oe.material=null,Oe.geometry.index=null,Oe.geometry.attributes={},Oe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=n.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,f=this._geometryInfo,h=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data,_=i.isArrayCamera?rp:yu;h&&!i.isArrayCamera&&(je.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),yu.setFromProjectionMatrix(je,i.coordinateSystem,i.reversedDepth));let m=0;if(this.sortObjects){je.copy(this.matrixWorld).invert(),qr.setFromMatrixPosition(i.matrixWorld).applyMatrix4(je),Su.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(je);for(let x=0,v=l.length;x<v;x++)if(l[x].visible&&l[x].active){const b=l[x].geometryIndex;this.getMatrixAt(x,je),this.getBoundingSphereAt(b,yi).applyMatrix4(je);let T=!1;if(h&&(T=!_.intersectsSphere(yi,i)),!T){const E=f[b],C=sp.subVectors(yi.center,qr).dot(Su);Ra.push(E.start,E.count,C,x)}}const p=Ra.list,y=this.customSort;y===null?p.sort(r.transparent?ep:tp):y.call(this,p,i);for(let x=0,v=p.length;x<v;x++){const b=p[x];c[m]=b.start*a,u[m]=b.count,g[m]=b.index,m++}Ra.reset()}else for(let p=0,y=l.length;p<y;p++)if(l[p].visible&&l[p].active){const x=l[p].geometryIndex;let v=!1;if(h&&(this.getMatrixAt(p,je),this.getBoundingSphereAt(x,yi).applyMatrix4(je),v=!_.intersectsSphere(yi,i)),!v){const b=f[x];c[m]=b.start*a,u[m]=b.count,g[m]=p,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,i,n,r,o){this.onBeforeRender(t,null,n,r,o)}};class di extends Ar{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fo=new N,No=new N,Mu=new Qt,Kr=new xs,Ys=new sn,Pa=new N,bu=new N;class vc extends Fe{constructor(t=new ue,e=new di){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Fo.fromBufferAttribute(e,n-1),No.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Fo.distanceTo(No);t.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(n),Ys.radius+=r,t.ray.intersectsSphere(Ys)===!1)return;Mu.copy(n).invert(),Kr.copy(t.ray).applyMatrix4(Mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),x=js(this,t,Kr,l,p,y,_);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=js(this,t,Kr,l,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=js(this,t,Kr,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=js(this,t,Kr,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function js(s,t,e,i,n,r,o){const a=s.geometry.attributes.position;if(Fo.fromBufferAttribute(a,n),No.fromBufferAttribute(a,r),e.distanceSqToSegment(Fo,No,Pa,bu)>i)return;Pa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Pa);if(!(c<t.near||c>t.far))return{distance:c,point:bu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Eu=new N,Tu=new N;class xc extends vc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Eu.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Eu.distanceTo(Tu);t.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yc extends Ar{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Au=new Qt,Wl=new xs,qs=new sn,Ks=new N;class Sc extends Fe{constructor(t=new ue,e=new yc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(n),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;Au.copy(n).invert(),Wl.copy(t.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);Ks.fromBufferAttribute(f,m),wu(Ks,m,l,n,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Ks.fromBufferAttribute(f,g),wu(Ks,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wu(s,t,e,i,n,r,o){const a=Wl.distanceSqToPoint(s);if(a<e){const l=new N;Wl.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class rf extends ke{constructor(t,e,i=fi,n,r,o,a=rn,l=rn,c,u=ps,f=1){if(u!==ps&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,n,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class sf extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mc extends ue{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function y(){const v=new N,b=new N;let T=0;const E=(e-t)/i;for(let C=0;C<=r;C++){const M=[],S=C/r,D=S*(e-t)+t;for(let w=0;w<=n;w++){const U=w/n,L=U*l+a,z=Math.sin(L),B=Math.cos(L);b.x=D*z,b.y=-S*i+m,b.z=D*B,f.push(b.x,b.y,b.z),v.set(z,E,B).normalize(),h.push(v.x,v.y,v.z),d.push(U,1-S),M.push(g++)}_.push(M)}for(let C=0;C<n;C++)for(let M=0;M<r;M++){const S=_[M][C],D=_[M+1][C],w=_[M+1][C+1],U=_[M][C+1];(t>0||M!==0)&&(u.push(S,D,U),T+=3),(e>0||M!==r-1)&&(u.push(D,w,U),T+=3)}c.addGroup(p,T,0),p+=T}function x(v){const b=g,T=new Yt,E=new N;let C=0;const M=v===!0?t:e,S=v===!0?1:-1;for(let w=1;w<=n;w++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),g++;const D=g;for(let w=0;w<=n;w++){const L=w/n*l+a,z=Math.cos(L),B=Math.sin(L);E.x=M*B,E.y=m*S,E.z=M*z,f.push(E.x,E.y,E.z),h.push(0,S,0),T.x=z*.5+.5,T.y=B*.5*S+.5,d.push(T.x,T.y),g++}for(let w=0;w<n;w++){const U=b+w,L=D+w;v===!0?u.push(L,L+1,U):u.push(L+1,L,U),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bc extends Mc{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new bc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Zs=new N,Js=new N,Da=new N,$s=new Ie;class Cu extends ue{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),r=Math.cos(os*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=$s;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),$s.getNormal(Da),f[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,f[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,f[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=f[y],b=f[x],T=$s[u[y]],E=$s[u[x]],C=`${v}_${b}`,M=`${b}_${v}`;M in h&&h[M]?(Da.dot(h[M].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(E.x,E.y,E.z)),h[M]=null):C in h||(h[C]={index0:c[y],index1:c[x],normal:Da.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];Zs.fromBufferAttribute(a,_),Js.fromBufferAttribute(a,m),d.push(Zs.x,Zs.y,Zs.z),d.push(Js.x,Js.y,Js.z)}this.setAttribute("position",new me(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class mi extends ue{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let x=0;x<c;x++){const v=x*f-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,v=y+c*(p+1),b=y+1+c*(p+1),T=y+1+c*p;d.push(x,v,T),d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ec extends ue{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new N,h=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const T=b/e;f.x=-t*Math.cos(n+T*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(n+T*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(T+v,1-x),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const x=u[p][y+1],v=u[p][y],b=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&d.push(x,v,T),(p!==i-1||l<Math.PI)&&d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class of extends Ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class af extends Ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lp extends ef{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class cp extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class up extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class hp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Ru=new Qt;class Pu{constructor(t,e,i=0,n=1/0){this.ray=new xs(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ru.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(t,e=!0,i=[]){return Xl(t,this,i,e),i.sort(Du),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)Xl(t[n],this,i,e);return i.sort(Du),i}}function Du(s,t){return s.distance-t.distance}function Xl(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Xl(r[o],t,e,!0)}}class Uu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lu=new N,Qs=new N,Qi=new N,tr=new N,Ua=new N,fp=new N,dp=new N;class Yn{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Lu.subVectors(t,this.start),Qs.subVectors(this.end,this.start);const i=Qs.dot(Qs);let r=Qs.dot(Lu)/i;return e&&(r=jt(r,0,1)),r}closestPointToPoint(t,e,i){const n=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(t,e=fp,i=dp){const n=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,u=t.end;Qi.subVectors(c,a),tr.subVectors(u,l),Ua.subVectors(a,l);const f=Qi.dot(Qi),h=tr.dot(tr),d=tr.dot(Ua);if(f<=n&&h<=n)return e.copy(a),i.copy(l),e.sub(i),e.dot(e);if(f<=n)r=0,o=d/h,o=jt(o,0,1);else{const g=Qi.dot(Ua);if(h<=n)o=0,r=jt(-g/f,0,1);else{const _=Qi.dot(tr),m=f*h-_*_;m!==0?r=jt((_*d-g*h)/m,0,1):r=0,o=(_*r+d)/h,o<0?(o=0,r=jt(-g/f,0,1)):o>1&&(o=1,r=jt((_-g)/f,0,1))}}return e.copy(a).add(Qi.multiplyScalar(r)),i.copy(l).add(tr.multiplyScalar(o)),e.sub(i),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class lf extends xc{constructor(t=10,e=10,i=4473924,n=8947848){i=new Kt(i),n=new Kt(n);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let h=0,d=0,g=-a;h<=e;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=h===r?i:n;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new ue;u.setAttribute("position",new me(l,3)),u.setAttribute("color",new me(c,3));const f=new di({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Iu=new N;let to,La;class pp extends Fe{constructor(t=new N(0,0,1),e=new N(0,0,0),i=1,n=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",to===void 0&&(to=new ue,to.setAttribute("position",new me([0,0,0,0,1,0],3)),La=new bc(.5,1,5,1),La.translate(0,-.5,0)),this.position.copy(e),this.line=new vc(to,new di({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ye(La,new wr({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Iu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Iu,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class mp extends xc{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new ue;n.setAttribute("position",new me(e,3)),n.setAttribute("color",new me(i,3));const r=new di({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(t,e,i){const n=new Kt,r=this.geometry.attributes.color.array;return n.set(t),n.toArray(r,0),n.toArray(r,3),n.set(e),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class gp extends Fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Fu(s,t,e,i){const n=_p(i);switch(e){case Hh:return s*t;case hc:return s*t/n.components*n.byteLength;case ko:return s*t/n.components*n.byteLength;case Xh:return s*t*2/n.components*n.byteLength;case fc:return s*t*2/n.components*n.byteLength;case Wh:return s*t*3/n.components*n.byteLength;case Ze:return s*t*4/n.components*n.byteLength;case dc:return s*t*4/n.components*n.byteLength;case Mo:case bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Eo:case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:case _l:return Math.max(s,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(s,8)*Math.max(t,8)/2;case vl:case xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fl:case Nl:case Bl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ol:case kl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case zl:case Gl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _p(s){switch(s){case jn:case kh:return{byteLength:1,components:1};case fs:case zh:case _s:return{byteLength:2,components:1};case cc:case uc:return{byteLength:2,components:4};case fi:case lc:case mn:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cf(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function vp(s){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
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
#endif`,Sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,_m=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,ig=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Ag=`#define DISTANCE
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
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ng=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,Og=`#define NORMAL
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
}`,kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zg=`#define PHONG
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
}`,Gg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Vg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Yg=`uniform float size;
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
}`,jg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Zg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:xp,alphahash_pars_fragment:yp,alphamap_fragment:Sp,alphamap_pars_fragment:Mp,alphatest_fragment:bp,alphatest_pars_fragment:Ep,aomap_fragment:Tp,aomap_pars_fragment:Ap,batching_pars_vertex:wp,batching_vertex:Cp,begin_vertex:Rp,beginnormal_vertex:Pp,bsdfs:Dp,iridescence_fragment:Up,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Bp,color_fragment:Op,color_pars_fragment:kp,color_pars_vertex:zp,color_vertex:Gp,common:Vp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Xp,displacementmap_vertex:Yp,emissivemap_fragment:jp,emissivemap_pars_fragment:qp,colorspace_fragment:Kp,colorspace_pars_fragment:Zp,envmap_fragment:Jp,envmap_common_pars_fragment:$p,envmap_pars_fragment:Qp,envmap_pars_vertex:tm,envmap_physical_pars_fragment:hm,envmap_vertex:em,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:rm,fog_pars_fragment:sm,gradientmap_pars_fragment:om,lightmap_pars_fragment:am,lights_lambert_fragment:lm,lights_lambert_pars_fragment:cm,lights_pars_begin:um,lights_toon_fragment:fm,lights_toon_pars_fragment:dm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:_m,lights_fragment_begin:vm,lights_fragment_maps:xm,lights_fragment_end:ym,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Em,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:wm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Dm,morphcolor_vertex:Um,morphnormal_vertex:Lm,morphtarget_pars_vertex:Im,morphtarget_vertex:Fm,normal_fragment_begin:Nm,normal_fragment_maps:Bm,normal_pars_fragment:Om,normal_pars_vertex:km,normal_vertex:zm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:Ym,packing:jm,premultiplied_alpha_fragment:qm,project_vertex:Km,dithering_fragment:Zm,dithering_pars_fragment:Jm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:rg,skinning_pars_vertex:sg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:ug,tonemapping_pars_fragment:hg,transmission_fragment:fg,transmission_pars_fragment:dg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:_g,background_vert:vg,background_frag:xg,backgroundCube_vert:yg,backgroundCube_frag:Sg,cube_vert:Mg,cube_frag:bg,depth_vert:Eg,depth_frag:Tg,distanceRGBA_vert:Ag,distanceRGBA_frag:wg,equirect_vert:Cg,equirect_frag:Rg,linedashed_vert:Pg,linedashed_frag:Dg,meshbasic_vert:Ug,meshbasic_frag:Lg,meshlambert_vert:Ig,meshlambert_frag:Fg,meshmatcap_vert:Ng,meshmatcap_frag:Bg,meshnormal_vert:Og,meshnormal_frag:kg,meshphong_vert:zg,meshphong_frag:Gg,meshphysical_vert:Vg,meshphysical_frag:Hg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:Yg,points_frag:jg,shadow_vert:qg,shadow_frag:Kg,sprite_vert:Zg,sprite_frag:Jg},Dt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},In={basic:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:ze([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:ze([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:ze([Dt.points,Dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:ze([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:ze([Dt.common,Dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:ze([Dt.sprite,Dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:ze([Dt.common,Dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:ze([Dt.lights,Dt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};In.physical={uniforms:ze([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const eo={r:0,b:0,g:0},Mi=new qn,$g=new Qt;function Qg(s,t,e,i,n,r,o){const a=new Kt(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const b=g(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===Oo)?(u===void 0&&(u=new ye(new Li(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Tr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Mi.copy(v.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(Mi)),u.material.toneMapped=ee.getTransfer(b.colorSpace)!==oe,(f!==b||h!==b.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ye(new mi(2,2),new Kn({name:"BackgroundMaterial",uniforms:Tr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ee.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(eo,Qh(s)),i.buffers.color.setClear(eo.r,eo.g,eo.b,v,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:y}}function t_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null);let r=n,o=!1;function a(S,D,w,U,L){let z=!1;const B=f(U,w,D);r!==B&&(r=B,c(r.object)),z=d(S,U,w,L),z&&g(S,U,w,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(S,D,w,U),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function f(S,D,w){const U=w.wireframe===!0;let L=i[S.id];L===void 0&&(L={},i[S.id]=L);let z=L[D.id];z===void 0&&(z={},L[D.id]=z);let B=z[U];return B===void 0&&(B=h(l()),z[U]=B),B}function h(S){const D=[],w=[],U=[];for(let L=0;L<e;L++)D[L]=0,w[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:w,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,D,w,U){const L=r.attributes,z=D.attributes;let B=0;const $=w.getAttributes();for(const W in $)if($[W].location>=0){const K=L[W];let F=z[W];if(F===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),K===void 0||K.attribute!==F||F&&K.data!==F.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function g(S,D,w,U){const L={},z=D.attributes;let B=0;const $=w.getAttributes();for(const W in $)if($[W].location>=0){let K=z[W];K===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const F={};F.attribute=K,K&&K.data&&(F.data=K.data),L[W]=F,B++}r.attributes=L,r.attributesNum=B,r.index=U}function _(){const S=r.newAttributes;for(let D=0,w=S.length;D<w;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const w=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;w[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),L[S]!==D&&(s.vertexAttribDivisor(S,D),L[S]=D)}function y(){const S=r.newAttributes,D=r.enabledAttributes;for(let w=0,U=D.length;w<U;w++)D[w]!==S[w]&&(s.disableVertexAttribArray(w),D[w]=0)}function x(S,D,w,U,L,z,B){B===!0?s.vertexAttribIPointer(S,D,w,L,z):s.vertexAttribPointer(S,D,w,U,L,z)}function v(S,D,w,U){_();const L=U.attributes,z=w.getAttributes(),B=D.defaultAttributeValues;for(const $ in z){const W=z[$];if(W.location>=0){let Y=L[$];if(Y===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const K=Y.normalized,F=Y.itemSize,X=t.get(Y);if(X===void 0)continue;const tt=X.buffer,nt=X.type,Z=X.bytesPerElement,H=nt===s.INT||nt===s.UNSIGNED_INT||Y.gpuType===lc;if(Y.isInterleavedBufferAttribute){const V=Y.data,J=V.stride,dt=Y.offset;if(V.isInstancedInterleavedBuffer){for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt,V.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let pt=0;pt<W.locationSize;pt++)x(W.location+pt,F/W.locationSize,nt,K,J*Z,(dt+F/W.locationSize*pt)*Z,H)}else{if(Y.isInstancedBufferAttribute){for(let V=0;V<W.locationSize;V++)p(W.location+V,Y.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let V=0;V<W.locationSize;V++)m(W.location+V);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let V=0;V<W.locationSize;V++)x(W.location+V,F/W.locationSize,nt,K,F*Z,F/W.locationSize*V*Z,H)}}else if(B!==void 0){const K=B[$];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(W.location,K);break;case 3:s.vertexAttrib3fv(W.location,K);break;case 4:s.vertexAttrib4fv(W.location,K);break;default:s.vertexAttrib1fv(W.location,K)}}}}y()}function b(){C();for(const S in i){const D=i[S];for(const w in D){const U=D[w];for(const L in U)u(U[L].object),delete U[L];delete D[w]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const w in D){const U=D[w];for(const L in U)u(U[L].object),delete U[L];delete D[w]}delete i[S.id]}function E(S){for(const D in i){const w=i[D];if(w[S.id]===void 0)continue;const U=w[S.id];for(const L in U)u(U[L].object),delete U[L];delete w[S.id]}}function C(){M(),o=!0,r!==n&&(r=n,c(r.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function e_(s,t,e){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(s.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function n_(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(E){return!(E!==Ze&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===_s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==jn&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==mn&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:T}}function i_(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new Ln,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||n;return n=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!n||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,x=y*4;let v=p.clippingState||null;l.value=v,v=u(g,h,x,d);for(let b=0;b!==x;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function r_(s){let t=new WeakMap;function e(o,a){return a===ul?o.mapping=Mr:a===hl&&(o.mapping=br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ul||a===hl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jd(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const mr=4,Nu=[.125,.215,.35,.446,.526,.582],wi=20,Ia=new lp,Bu=new Kt;let Fa=null,Na=0,Ba=0,Oa=!1;const Ti=(1+Math.sqrt(5))/2,er=1/Ti,Ou=[new N(-Ti,er,0),new N(Ti,er,0),new N(-er,0,Ti),new N(er,0,Ti),new N(0,Ti,-er),new N(0,Ti,er),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],s_=new N;class ku{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,r={}){const{size:o=256,position:a=s_}=r;Fa=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Na,Ba),this._renderer.xr.enabled=Oa,t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:_s,format:Ze,colorSpace:Er,depthBuffer:!1},n=zu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o_(r)),this._blurMaterial=a_(r,t,e)}return n}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,i,n,r){const l=new fn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Bu),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null));const _=new wr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new ye(new Li,_);let p=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(Bu),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const b=this._cubeSize;no(n,v*b,x>2?b:0,b,b),f.setRenderTarget(n),p&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Mr||t.mapping===br;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;no(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ia)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ou[(n-r-1)%Ou.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ye(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*wi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let y=0;for(let E=0;E<wi;++E){const C=E/_,M=Math.exp(-C*C/2);p.push(M),E===0?y+=M:E<m&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const v=this._sizeLods[n],b=3*v*(n>x-mr?n-x+mr:0),T=4*(this._cubeSize-v);no(e,b,T,3*v,2*v),l.setRenderTarget(e),l.render(f,Ia)}}function o_(s){const t=[],e=[],i=[];let n=s;const r=s-mr+1+Nu.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>s-mr?l=Nu[o-s+mr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,C=T>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(M,_*g*T),x.set(h,m*g*T);const S=[T,T,T,T,T,T];v.set(S,p*g*T)}const b=new ue;b.setAttribute("position",new xe(y,_)),b.setAttribute("uv",new xe(x,m)),b.setAttribute("faceIndex",new xe(v,p)),t.push(b),n>mr&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function zu(s,t,e){const i=new Ui(s,t,e);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function a_(s,t,e){const i=new Float32Array(wi),n=new N(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Gu(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Vu(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l_(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ul||l===hl,u=l===Mr||l===br;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ku(s)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&n(d)?(e===null&&(e=new ku(s)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function n(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function c_(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&gs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function u_(s,t,e,i){const n={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete n[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],s.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const b=y[x+0],T=y[x+1],E=y[x+2];h.push(b,T,T,E,E,b)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const b=x+0,T=x+1,E=x+2;h.push(b,T,T,E,E,b)}}else return;const m=new(qh(h)?$h:Jh)(h,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function h_(s,t,e){let i;function n(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){s.drawElements(i,d,r,h*o),e.update(d,i,1)}function c(h,d,g){g!==0&&(s.drawElementsInstanced(i,d,r,h*o,g),e.update(d,i,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function f_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function d_(s,t,e){const i=new WeakMap,n=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*b*4*f),E=new Kh(T,v,b,f);E.type=mn,E.needsUpdate=!0;const C=x*4;for(let S=0;S<f;S++){const D=m[S],w=p[S],U=y[S],L=v*b*4*S;for(let z=0;z<D.count;z++){const B=z*C;d===!0&&(n.fromBufferAttribute(D,z),T[L+B+0]=n.x,T[L+B+1]=n.y,T[L+B+2]=n.z,T[L+B+3]=0),g===!0&&(n.fromBufferAttribute(w,z),T[L+B+4]=n.x,T[L+B+5]=n.y,T[L+B+6]=n.z,T[L+B+7]=0),_===!0&&(n.fromBufferAttribute(U,z),T[L+B+8]=n.x,T[L+B+9]=n.y,T[L+B+10]=n.z,T[L+B+11]=U.itemSize===4?n.w:1)}}h={count:f,texture:E,size:new Yt(v,b)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function p_(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(n.get(f)!==c&&(t.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const uf=new ke,Hu=new rf(1,1),hf=new Kh,ff=new Dd,df=new nf,Wu=[],Xu=[],Yu=new Float32Array(16),ju=new Float32Array(9),qu=new Float32Array(4);function Cr(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Wu[n];if(r===void 0&&(r=new Float32Array(n),Wu[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Go(s,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function m_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function g_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function __(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function v_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function x_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(we(e,i))return;qu.set(i),s.uniformMatrix2fv(this.addr,!1,qu),Ce(e,i)}}function y_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(we(e,i))return;ju.set(i),s.uniformMatrix3fv(this.addr,!1,ju),Ce(e,i)}}function S_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(we(e,i))return;Yu.set(i),s.uniformMatrix4fv(this.addr,!1,Yu),Ce(e,i)}}function M_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function b_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function E_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function T_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function A_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function w_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function C_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function R_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function P_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Hu.compareFunction=jh,r=Hu):r=uf,e.setTexture2D(t||r,n)}function D_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ff,n)}function U_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||df,n)}function L_(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||hf,n)}function I_(s){switch(s){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return v_;case 35674:return x_;case 35675:return y_;case 35676:return S_;case 5124:case 35670:return M_;case 35667:case 35671:return b_;case 35668:case 35672:return E_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return w_;case 36295:return C_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return L_}}function F_(s,t){s.uniform1fv(this.addr,t)}function N_(s,t){const e=Cr(t,this.size,2);s.uniform2fv(this.addr,e)}function B_(s,t){const e=Cr(t,this.size,3);s.uniform3fv(this.addr,e)}function O_(s,t){const e=Cr(t,this.size,4);s.uniform4fv(this.addr,e)}function k_(s,t){const e=Cr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function z_(s,t){const e=Cr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function G_(s,t){const e=Cr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function V_(s,t){s.uniform1iv(this.addr,t)}function H_(s,t){s.uniform2iv(this.addr,t)}function W_(s,t){s.uniform3iv(this.addr,t)}function X_(s,t){s.uniform4iv(this.addr,t)}function Y_(s,t){s.uniform1uiv(this.addr,t)}function j_(s,t){s.uniform2uiv(this.addr,t)}function q_(s,t){s.uniform3uiv(this.addr,t)}function K_(s,t){s.uniform4uiv(this.addr,t)}function Z_(s,t,e){const i=this.cache,n=t.length,r=Go(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||uf,r[o])}function J_(s,t,e){const i=this.cache,n=t.length,r=Go(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||ff,r[o])}function $_(s,t,e){const i=this.cache,n=t.length,r=Go(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||df,r[o])}function Q_(s,t,e){const i=this.cache,n=t.length,r=Go(e,n);we(i,r)||(s.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||hf,r[o])}function tv(s){switch(s){case 5126:return F_;case 35664:return N_;case 35665:return B_;case 35666:return O_;case 35674:return k_;case 35675:return z_;case 35676:return G_;case 5124:case 35670:return V_;case 35667:case 35671:return H_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return Y_;case 36294:return j_;case 36295:return q_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Q_}}class ev{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=I_(e.type)}}class nv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tv(e.type)}}class iv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Ku(s,t){s.seq.push(t),s.map[t.id]=t}function rv(s,t,e){const i=s.name,n=i.length;for(ka.lastIndex=0;;){const r=ka.exec(i),o=ka.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Ku(e,c===void 0?new ev(a,s,t):new nv(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new iv(a),Ku(e,f)),e=f}}}class Ao{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);rv(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Zu(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const sv=37297;let ov=0;function av(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ju=new qt;function lv(s){ee._getMatrix(Ju,ee.workingColorSpace,s);const t=`mat3( ${Ju.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case Uo:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $u(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+av(s.getShaderSource(t),a)}else return r}function cv(s,t){const e=lv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function uv(s,t){let e;switch(t){case rd:e="Linear";break;case sd:e="Reinhard";break;case od:e="Cineon";break;case ad:e="ACESFilmic";break;case cd:e="AgX";break;case ud:e="Neutral";break;case ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const io=new N;function hv(){ee.getLuminanceCoefficients(io);const s=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function dv(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pv(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function is(s){return s!==""}function Qu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(s){return s.replace(mv,_v)}const gv=new Map;function _v(s,t){let e=Jt[t];if(e===void 0){const i=gv.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yl(e)}const vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(s){return s.replace(vv,xv)}function xv(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function nh(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mr:case br:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function bv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case nd:t="ENVMAP_BLENDING_MIX";break;case id:t="ENVMAP_BLENDING_ADD";break}return t}function Ev(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Tv(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=yv(e),c=Sv(e),u=Mv(e),f=bv(e),h=Ev(e),d=fv(e),g=dv(r),_=n.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(is).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(is).join(`
`),p.length>0&&(p+=`
`)):(m=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),p=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==hi?uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,cv("linearToOutputTexel",e.outputColorSpace),hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),o=Yl(o),o=Qu(o,e),o=th(o,e),a=Yl(a),a=Qu(a,e),a=th(a,e),o=eh(o),a=eh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,v=y+p+a,b=Zu(n,n.VERTEX_SHADER,x),T=Zu(n,n.FRAGMENT_SHADER,v);n.attachShader(_,b),n.attachShader(_,T),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function E(D){if(s.debug.checkShaderErrors){const w=n.getProgramInfoLog(_)||"",U=n.getShaderInfoLog(b)||"",L=n.getShaderInfoLog(T)||"",z=w.trim(),B=U.trim(),$=L.trim();let W=!0,Y=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,b,T);else{const K=$u(n,b,"vertex"),F=$u(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+K+`
`+F)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||$==="")&&(Y=!1);Y&&(D.diagnostics={runnable:W,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:p}})}n.deleteShader(b),n.deleteShader(T),C=new Ao(n,_),M=pv(n,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,sv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ov++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let Av=0;class wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Cv(t),e.set(t,i)),i}}class Cv{constructor(t){this.id=Av++,this.code=t,this.usedTimes=0}}function Rv(s,t,e,i,n,r,o){const a=new mc,l=new wv,c=new Set,u=[],f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,w,U){const L=w.fog,z=U.geometry,B=M.isMeshStandardMaterial?w.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),W=$&&$.mapping===Oo?$.image.height:null,Y=g[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,F=K!==void 0?K.length:0;let X=0;z.morphAttributes.position!==void 0&&(X=1),z.morphAttributes.normal!==void 0&&(X=2),z.morphAttributes.color!==void 0&&(X=3);let tt,nt,Z,H;if(Y){const Vt=In[Y];tt=Vt.vertexShader,nt=Vt.fragmentShader}else tt=M.vertexShader,nt=M.fragmentShader,l.update(M),Z=l.getVertexShaderID(M),H=l.getFragmentShaderID(M);const V=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),dt=U.isInstancedMesh===!0,pt=U.isBatchedMesh===!0,ft=!!M.map,gt=!!M.matcap,I=!!$,Lt=!!M.aoMap,St=!!M.lightMap,Mt=!!M.bumpMap,mt=!!M.normalMap,xt=!!M.displacementMap,ht=!!M.emissiveMap,Et=!!M.metalnessMap,ct=!!M.roughnessMap,kt=M.anisotropy>0,P=M.clearcoat>0,A=M.dispersion>0,k=M.iridescence>0,et=M.sheen>0,Q=M.transmission>0,j=kt&&!!M.anisotropyMap,yt=P&&!!M.clearcoatMap,lt=P&&!!M.clearcoatNormalMap,wt=P&&!!M.clearcoatRoughnessMap,Ct=k&&!!M.iridescenceMap,at=k&&!!M.iridescenceThicknessMap,_t=et&&!!M.sheenColorMap,bt=et&&!!M.sheenRoughnessMap,Pt=!!M.specularMap,Tt=!!M.specularColorMap,Gt=!!M.specularIntensityMap,G=Q&&!!M.transmissionMap,ot=Q&&!!M.thicknessMap,vt=!!M.gradientMap,It=!!M.alphaMap,ut=M.alphaTest>0,it=!!M.alphaHash,Rt=!!M.extensions;let Nt=hi;M.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Bt={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:tt,fragmentShader:nt,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:H,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:pt,batchingColor:pt&&U._colorsTexture!==null,instancing:dt,instancingColor:dt&&U.instanceColor!==null,instancingMorph:dt&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?s.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Er,alphaToCoverage:!!M.alphaToCoverage,map:ft,matcap:gt,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:W,aoMap:Lt,lightMap:St,bumpMap:Mt,normalMap:mt,displacementMap:h&&xt,emissiveMap:ht,normalMapObjectSpace:mt&&M.normalMapType===pd,normalMapTangentSpace:mt&&M.normalMapType===dd,metalnessMap:Et,roughnessMap:ct,anisotropy:kt,anisotropyMap:j,clearcoat:P,clearcoatMap:yt,clearcoatNormalMap:lt,clearcoatRoughnessMap:wt,dispersion:A,iridescence:k,iridescenceMap:Ct,iridescenceThicknessMap:at,sheen:et,sheenColorMap:_t,sheenRoughnessMap:bt,specularMap:Pt,specularColorMap:Tt,specularIntensityMap:Gt,transmission:Q,transmissionMap:G,thicknessMap:ot,gradientMap:vt,opaque:M.transparent===!1&&M.blending===vr&&M.alphaToCoverage===!1,alphaMap:It,alphaTest:ut,alphaHash:it,combine:M.combine,mapUv:ft&&_(M.map.channel),aoMapUv:Lt&&_(M.aoMap.channel),lightMapUv:St&&_(M.lightMap.channel),bumpMapUv:Mt&&_(M.bumpMap.channel),normalMapUv:mt&&_(M.normalMap.channel),displacementMapUv:xt&&_(M.displacementMap.channel),emissiveMapUv:ht&&_(M.emissiveMap.channel),metalnessMapUv:Et&&_(M.metalnessMap.channel),roughnessMapUv:ct&&_(M.roughnessMap.channel),anisotropyMapUv:j&&_(M.anisotropyMap.channel),clearcoatMapUv:yt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(M.sheenRoughnessMap.channel),specularMapUv:Pt&&_(M.specularMap.channel),specularColorMapUv:Tt&&_(M.specularColorMap.channel),specularIntensityMapUv:Gt&&_(M.specularIntensityMap.channel),transmissionMapUv:G&&_(M.transmissionMap.channel),thicknessMapUv:ot&&_(M.thicknessMap.channel),alphaMapUv:It&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(mt||kt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(ft||It),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:J,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:ft&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===oe,decodeVideoTextureEmissive:ht&&M.emissiveMap.isVideoTexture===!0&&ee.getTransfer(M.emissiveMap.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Rt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&M.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=g[M.type];let D;if(S){const w=In[S];D=tf.clone(w.uniforms)}else D=M.uniforms;return D}function b(M,S){let D;for(let w=0,U=u.length;w<U;w++){const L=u[w];if(L.cacheKey===S){D=L,++D.usedTimes;break}}return D===void 0&&(D=new Tv(s,S,M,r),u.push(D)),D}function T(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function Pv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Dv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ih(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function rh(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(f,h,d,g,_,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||Dv),i.length>1&&i.sort(h||ih),n.length>1&&n.sort(h||ih)}function u(){for(let f=t,h=s.length;f<h;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:u,sort:c}}function Uv(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new rh,s.set(i,[o])):n>=r.length?(o=new rh,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Iv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Fv=0;function Nv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Bv(s){const t=new Lv,e=Iv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const n=new N,r=new Qt,o=new Qt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,b=0,T=0,E=0;c.sort(Nv);for(let M=0,S=c.length;M<S;M++){const D=c[M],w=D.color,U=D.intensity,L=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=w.r*U,f+=w.g*U,h+=w.b*U;else if(D.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],U);E++}else if(D.isDirectionalLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,W=e.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=D.shadow.matrix,y++}i.directional[d]=B,d++}else if(D.isSpotLight){const B=t.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(w).multiplyScalar(U),B.distance=L,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[_]=B;const $=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,$.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[_]=$.matrix,D.castShadow){const W=e.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=z,v++}_++}else if(D.isRectAreaLight){const B=t.get(D);B.color.copy(w).multiplyScalar(U),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=B,m++}else if(D.isPointLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const $=D.shadow,W=e.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=B,g++}else if(D.isHemisphereLight){const B=t.get(D);B.skyColor.copy(D.color).multiplyScalar(U),B.groundColor.copy(D.groundColor).multiplyScalar(U),i.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=E,i.version=Fv++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),f++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function sh(s){const t=new Bv(s),e=[],i=[];function n(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ov(s){let t=new WeakMap;function e(n,r=0){const o=t.get(n);let a;return o===void 0?(a=new sh(s),t.set(n,[a])):r>=o.length?(a=new sh(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gv(s,t,e){let i=new zo;const n=new Yt,r=new Yt,o=new pe,a=new of({depthPacking:Yh}),l=new af,c={},u=e.maxTextureSize,f={[Fn]:Ge,[Ge]:Fn,[dn]:dn},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:kv,fragmentShader:zv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ue;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ye(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let p=this.type;this.render=function(T,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),w=s.state;w.setBlending(ui),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const U=p!==Vn&&this.type===Vn,L=p===Vn&&this.type!==Vn;for(let z=0,B=T.length;z<B;z++){const $=T[z],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const Y=W.getFrameExtents();if(n.multiply(Y),r.copy(W.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/Y.x),n.x=r.x*Y.x,W.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/Y.y),n.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||U===!0||L===!0){const F=this.type!==Vn?{minFilter:rn,magFilter:rn}:{};W.map!==null&&W.map.dispose(),W.map=new Ui(n.x,n.y,F),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const K=W.getViewportCount();for(let F=0;F<K;F++){const X=W.getViewport(F);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),w.viewport(o),W.updateMatrices($,F),i=W.getFrustum(),v(E,C,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Vn&&y(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,D)};function y(T,E){const C=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ui(n.x,n.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,C,h,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,C,d,_,null)}function x(T,E,C,M){let S=null;const D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const w=S.uuid,U=E.uuid;let L=c[w];L===void 0&&(L={},c[w]=L);let z=L[U];z===void 0&&(z=S.clone(),L[U]=z,E.addEventListener("dispose",b)),S=z}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Vn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const w=s.properties.get(S);w.light=C}return S}function v(T,E,C,M,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Vn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const U=t.update(T),L=T.material;if(Array.isArray(L)){const z=U.groups;for(let B=0,$=z.length;B<$;B++){const W=z[B],Y=L[W.materialIndex];if(Y&&Y.visible){const K=x(T,Y,M,S);T.onBeforeShadow(s,T,E,C,U,K,W),s.renderBufferDirect(C,null,U,K,T,W),T.onAfterShadow(s,T,E,C,U,K,W)}}}else if(L.visible){const z=x(T,L,M,S);T.onBeforeShadow(s,T,E,C,U,z,null),s.renderBufferDirect(C,null,U,z,T,null),T.onAfterShadow(s,T,E,C,U,z,null)}}const w=T.children;for(let U=0,L=w.length;U<L;U++)v(w[U],E,C,M,S)}function b(T){T.target.removeEventListener("dispose",b);for(const C in c){const M=c[C],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Vv={[il]:rl,[sl]:ll,[ol]:cl,[Sr]:al,[rl]:il,[ll]:sl,[cl]:ol,[al]:Sr};function Hv(s,t){function e(){let G=!1;const ot=new pe;let vt=null;const It=new pe(0,0,0,0);return{setMask:function(ut){vt!==ut&&!G&&(s.colorMask(ut,ut,ut,ut),vt=ut)},setLocked:function(ut){G=ut},setClear:function(ut,it,Rt,Nt,Bt){Bt===!0&&(ut*=Nt,it*=Nt,Rt*=Nt),ot.set(ut,it,Rt,Nt),It.equals(ot)===!1&&(s.clearColor(ut,it,Rt,Nt),It.copy(ot))},reset:function(){G=!1,vt=null,It.set(-1,0,0,0)}}}function i(){let G=!1,ot=!1,vt=null,It=null,ut=null;return{setReversed:function(it){if(ot!==it){const Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ot=it;const Nt=ut;ut=null,this.setClear(Nt)}},getReversed:function(){return ot},setTest:function(it){it?V(s.DEPTH_TEST):J(s.DEPTH_TEST)},setMask:function(it){vt!==it&&!G&&(s.depthMask(it),vt=it)},setFunc:function(it){if(ot&&(it=Vv[it]),It!==it){switch(it){case il:s.depthFunc(s.NEVER);break;case rl:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case Sr:s.depthFunc(s.LEQUAL);break;case ol:s.depthFunc(s.EQUAL);break;case al:s.depthFunc(s.GEQUAL);break;case ll:s.depthFunc(s.GREATER);break;case cl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=it}},setLocked:function(it){G=it},setClear:function(it){ut!==it&&(ot&&(it=1-it),s.clearDepth(it),ut=it)},reset:function(){G=!1,vt=null,It=null,ut=null,ot=!1}}}function n(){let G=!1,ot=null,vt=null,It=null,ut=null,it=null,Rt=null,Nt=null,Bt=null;return{setTest:function(Vt){G||(Vt?V(s.STENCIL_TEST):J(s.STENCIL_TEST))},setMask:function(Vt){ot!==Vt&&!G&&(s.stencilMask(Vt),ot=Vt)},setFunc:function(Vt,he,le){(vt!==Vt||It!==he||ut!==le)&&(s.stencilFunc(Vt,he,le),vt=Vt,It=he,ut=le)},setOp:function(Vt,he,le){(it!==Vt||Rt!==he||Nt!==le)&&(s.stencilOp(Vt,he,le),it=Vt,Rt=he,Nt=le)},setLocked:function(Vt){G=Vt},setClear:function(Vt){Bt!==Vt&&(s.clearStencil(Vt),Bt=Vt)},reset:function(){G=!1,ot=null,vt=null,It=null,ut=null,it=null,Rt=null,Nt=null,Bt=null}}}const r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,b=null,T=null,E=new Kt(0,0,0),C=0,M=!1,S=null,D=null,w=null,U=null,L=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=$>=2);let Y=null,K={};const F=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),tt=new pe().fromArray(F),nt=new pe().fromArray(X);function Z(G,ot,vt,It){const ut=new Uint8Array(4),it=s.createTexture();s.bindTexture(G,it),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<vt;Rt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(ot+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return it}const H={};H[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),H[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),H[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(s.DEPTH_TEST),o.setFunc(Sr),Mt(!1),mt(jc),V(s.CULL_FACE),Lt(ui);function V(G){u[G]!==!0&&(s.enable(G),u[G]=!0)}function J(G){u[G]!==!1&&(s.disable(G),u[G]=!1)}function dt(G,ot){return f[G]!==ot?(s.bindFramebuffer(G,ot),f[G]=ot,G===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ot),G===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function pt(G,ot){let vt=d,It=!1;if(G){vt=h.get(ot),vt===void 0&&(vt=[],h.set(ot,vt));const ut=G.textures;if(vt.length!==ut.length||vt[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Rt=ut.length;it<Rt;it++)vt[it]=s.COLOR_ATTACHMENT0+it;vt.length=ut.length,It=!0}}else vt[0]!==s.BACK&&(vt[0]=s.BACK,It=!0);It&&s.drawBuffers(vt)}function ft(G){return g!==G?(s.useProgram(G),g=G,!0):!1}const gt={[Ai]:s.FUNC_ADD,[kf]:s.FUNC_SUBTRACT,[zf]:s.FUNC_REVERSE_SUBTRACT};gt[Gf]=s.MIN,gt[Vf]=s.MAX;const I={[Hf]:s.ZERO,[Wf]:s.ONE,[Xf]:s.SRC_COLOR,[el]:s.SRC_ALPHA,[Jf]:s.SRC_ALPHA_SATURATE,[Kf]:s.DST_COLOR,[jf]:s.DST_ALPHA,[Yf]:s.ONE_MINUS_SRC_COLOR,[nl]:s.ONE_MINUS_SRC_ALPHA,[Zf]:s.ONE_MINUS_DST_COLOR,[qf]:s.ONE_MINUS_DST_ALPHA,[$f]:s.CONSTANT_COLOR,[Qf]:s.ONE_MINUS_CONSTANT_COLOR,[td]:s.CONSTANT_ALPHA,[ed]:s.ONE_MINUS_CONSTANT_ALPHA};function Lt(G,ot,vt,It,ut,it,Rt,Nt,Bt,Vt){if(G===ui){_===!0&&(J(s.BLEND),_=!1);return}if(_===!1&&(V(s.BLEND),_=!0),G!==Of){if(G!==m||Vt!==M){if((p!==Ai||v!==Ai)&&(s.blendEquation(s.FUNC_ADD),p=Ai,v=Ai),Vt)switch(G){case vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFunc(s.ONE,s.ONE);break;case Kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,x=null,b=null,T=null,E.set(0,0,0),C=0,m=G,M=Vt}return}ut=ut||ot,it=it||vt,Rt=Rt||It,(ot!==p||ut!==v)&&(s.blendEquationSeparate(gt[ot],gt[ut]),p=ot,v=ut),(vt!==y||It!==x||it!==b||Rt!==T)&&(s.blendFuncSeparate(I[vt],I[It],I[it],I[Rt]),y=vt,x=It,b=it,T=Rt),(Nt.equals(E)===!1||Bt!==C)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Bt),E.copy(Nt),C=Bt),m=G,M=!1}function St(G,ot){G.side===dn?J(s.CULL_FACE):V(s.CULL_FACE);let vt=G.side===Ge;ot&&(vt=!vt),Mt(vt),G.blending===vr&&G.transparent===!1?Lt(ui):Lt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const It=G.stencilWrite;a.setTest(It),It&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ht(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?V(s.SAMPLE_ALPHA_TO_COVERAGE):J(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(G){S!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),S=G)}function mt(G){G!==Ff?(V(s.CULL_FACE),G!==D&&(G===jc?s.cullFace(s.BACK):G===Nf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):J(s.CULL_FACE),D=G}function xt(G){G!==w&&(B&&s.lineWidth(G),w=G)}function ht(G,ot,vt){G?(V(s.POLYGON_OFFSET_FILL),(U!==ot||L!==vt)&&(s.polygonOffset(ot,vt),U=ot,L=vt)):J(s.POLYGON_OFFSET_FILL)}function Et(G){G?V(s.SCISSOR_TEST):J(s.SCISSOR_TEST)}function ct(G){G===void 0&&(G=s.TEXTURE0+z-1),Y!==G&&(s.activeTexture(G),Y=G)}function kt(G,ot,vt){vt===void 0&&(Y===null?vt=s.TEXTURE0+z-1:vt=Y);let It=K[vt];It===void 0&&(It={type:void 0,texture:void 0},K[vt]=It),(It.type!==G||It.texture!==ot)&&(Y!==vt&&(s.activeTexture(vt),Y=vt),s.bindTexture(G,ot||H[G]),It.type=G,It.texture=ot)}function P(){const G=K[Y];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(G){tt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),tt.copy(G))}function bt(G){nt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),nt.copy(G))}function Pt(G,ot){let vt=c.get(ot);vt===void 0&&(vt=new WeakMap,c.set(ot,vt));let It=vt.get(G);It===void 0&&(It=s.getUniformBlockIndex(ot,G.name),vt.set(G,It))}function Tt(G,ot){const It=c.get(ot).get(G);l.get(ot)!==It&&(s.uniformBlockBinding(ot,It,G.__bindingPointIndex),l.set(ot,It))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Y=null,K={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,b=null,T=null,E=new Kt(0,0,0),C=0,M=!1,S=null,D=null,w=null,U=null,L=null,tt.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:J,bindFramebuffer:dt,drawBuffers:pt,useProgram:ft,setBlending:Lt,setMaterial:St,setFlipSided:Mt,setCullFace:mt,setLineWidth:xt,setPolygonOffset:ht,setScissorTest:Et,activeTexture:ct,bindTexture:kt,unbindTexture:P,compressedTexImage2D:A,compressedTexImage3D:k,texImage2D:Ct,texImage3D:at,updateUBOMapping:Pt,uniformBlockBinding:Tt,texStorage2D:lt,texStorage3D:wt,texSubImage2D:et,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:yt,scissor:_t,viewport:bt,reset:Gt}}function Wv(s,t,e,i,n,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return d?new OffscreenCanvas(P,A):Io("canvas")}function _(P,A,k){let et=1;const Q=kt(P);if((Q.width>k||Q.height>k)&&(et=k/Math.max(Q.width,Q.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(et*Q.width),yt=Math.floor(et*Q.height);f===void 0&&(f=g(j,yt));const lt=A?g(j,yt):f;return lt.width=j,lt.height=yt,lt.getContext("2d").drawImage(P,0,0,j,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+yt+")."),lt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,A,k,et,Q=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=A;if(A===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),A===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),A===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),A===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),A===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),A===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),A===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),A===s.RGBA){const yt=Q?Uo:ee.getTransfer(et);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=yt===oe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(P,A){let k;return P?A===null||A===fi||A===ds?k=s.DEPTH24_STENCIL8:A===mn?k=s.DEPTH32F_STENCIL8:A===fs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===fi||A===ds?k=s.DEPTH_COMPONENT24:A===mn?k=s.DEPTH_COMPONENT32F:A===fs&&(k=s.DEPTH_COMPONENT16),k}function b(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==rn&&P.minFilter!==pn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function T(P){const A=P.target;A.removeEventListener("dispose",T),C(A),A.isVideoTexture&&u.delete(A)}function E(P){const A=P.target;A.removeEventListener("dispose",E),S(A)}function C(P){const A=i.get(P);if(A.__webglInit===void 0)return;const k=P.source,et=h.get(k);if(et){const Q=et[A.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(P),Object.keys(et).length===0&&h.delete(k)}i.remove(P)}function M(P){const A=i.get(P);s.deleteTexture(A.__webglTexture);const k=P.source,et=h.get(k);delete et[A.__cacheKey],o.memory.textures--}function S(P){const A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(A.__webglFramebuffer[et]))for(let Q=0;Q<A.__webglFramebuffer[et].length;Q++)s.deleteFramebuffer(A.__webglFramebuffer[et][Q]);else s.deleteFramebuffer(A.__webglFramebuffer[et]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[et])}else{if(Array.isArray(A.__webglFramebuffer))for(let et=0;et<A.__webglFramebuffer.length;et++)s.deleteFramebuffer(A.__webglFramebuffer[et]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let et=0;et<A.__webglColorRenderbuffer.length;et++)A.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[et]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const k=P.textures;for(let et=0,Q=k.length;et<Q;et++){const j=i.get(k[et]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(k[et])}i.remove(P)}let D=0;function w(){D=0}function U(){const P=D;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),D+=1,P}function L(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function z(P,A){const k=i.get(P);if(P.isVideoTexture&&Et(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(k,P,A);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+A)}function B(P,A){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){H(k,P,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+A)}function $(P,A){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){H(k,P,A);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+A)}function W(P,A){const k=i.get(P);if(P.version>0&&k.__version!==P.version){V(k,P,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+A)}const Y={[fl]:s.REPEAT,[Ci]:s.CLAMP_TO_EDGE,[dl]:s.MIRRORED_REPEAT},K={[rn]:s.NEAREST,[hd]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[ra]:s.LINEAR_MIPMAP_NEAREST,[Ri]:s.LINEAR_MIPMAP_LINEAR},F={[md]:s.NEVER,[Sd]:s.ALWAYS,[gd]:s.LESS,[jh]:s.LEQUAL,[_d]:s.EQUAL,[yd]:s.GEQUAL,[vd]:s.GREATER,[xd]:s.NOTEQUAL};function X(P,A){if(A.type===mn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===pn||A.magFilter===ra||A.magFilter===Ts||A.magFilter===Ri||A.minFilter===pn||A.minFilter===ra||A.minFilter===Ts||A.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Y[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Y[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Y[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,K[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,K[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===rn||A.minFilter!==Ts&&A.minFilter!==Ri||A.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function tt(P,A){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",T));const et=A.source;let Q=h.get(et);Q===void 0&&(Q={},h.set(et,Q));const j=L(A);if(j!==P.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[j].usedTimes++;const yt=Q[P.__cacheKey];yt!==void 0&&(Q[P.__cacheKey].usedTimes--,yt.usedTimes===0&&M(A)),P.__cacheKey=j,P.__webglTexture=Q[j].texture}return k}function nt(P,A,k){return Math.floor(Math.floor(P/k)/A)}function Z(P,A,k,et){const j=P.updateRanges;if(j.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,k,et,A.data);else{j.sort((at,_t)=>at.start-_t.start);let yt=0;for(let at=1;at<j.length;at++){const _t=j[yt],bt=j[at],Pt=_t.start+_t.count,Tt=nt(bt.start,A.width,4),Gt=nt(_t.start,A.width,4);bt.start<=Pt+1&&Tt===Gt&&nt(bt.start+bt.count-1,A.width,4)===Tt?_t.count=Math.max(_t.count,bt.start+bt.count-_t.start):(++yt,j[yt]=bt)}j.length=yt+1;const lt=s.getParameter(s.UNPACK_ROW_LENGTH),wt=s.getParameter(s.UNPACK_SKIP_PIXELS),Ct=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let at=0,_t=j.length;at<_t;at++){const bt=j[at],Pt=Math.floor(bt.start/4),Tt=Math.ceil(bt.count/4),Gt=Pt%A.width,G=Math.floor(Pt/A.width),ot=Tt,vt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),e.texSubImage2D(s.TEXTURE_2D,0,Gt,G,ot,vt,k,et,A.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ct)}}function H(P,A,k){let et=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(et=s.TEXTURE_3D);const Q=tt(P,A),j=A.source;e.bindTexture(et,P.__webglTexture,s.TEXTURE0+k);const yt=i.get(j);if(j.version!==yt.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);const lt=ee.getPrimaries(ee.workingColorSpace),wt=A.colorSpace===li?null:ee.getPrimaries(A.colorSpace),Ct=A.colorSpace===li||lt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let at=_(A.image,!1,n.maxTextureSize);at=ct(A,at);const _t=r.convert(A.format,A.colorSpace),bt=r.convert(A.type);let Pt=x(A.internalFormat,_t,bt,A.colorSpace,A.isVideoTexture);X(et,A);let Tt;const Gt=A.mipmaps,G=A.isVideoTexture!==!0,ot=yt.__version===void 0||Q===!0,vt=j.dataReady,It=b(A,at);if(A.isDepthTexture)Pt=v(A.format===ms,A.type),ot&&(G?e.texStorage2D(s.TEXTURE_2D,1,Pt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Pt,at.width,at.height,0,_t,bt,null));else if(A.isDataTexture)if(Gt.length>0){G&&ot&&e.texStorage2D(s.TEXTURE_2D,It,Pt,Gt[0].width,Gt[0].height);for(let ut=0,it=Gt.length;ut<it;ut++)Tt=Gt[ut],G?vt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Tt.width,Tt.height,_t,bt,Tt.data):e.texImage2D(s.TEXTURE_2D,ut,Pt,Tt.width,Tt.height,0,_t,bt,Tt.data);A.generateMipmaps=!1}else G?(ot&&e.texStorage2D(s.TEXTURE_2D,It,Pt,at.width,at.height),vt&&Z(A,at,_t,bt)):e.texImage2D(s.TEXTURE_2D,0,Pt,at.width,at.height,0,_t,bt,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){G&&ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,Pt,Gt[0].width,Gt[0].height,at.depth);for(let ut=0,it=Gt.length;ut<it;ut++)if(Tt=Gt[ut],A.format!==Ze)if(_t!==null)if(G){if(vt)if(A.layerUpdates.size>0){const Rt=Fu(Tt.width,Tt.height,A.format,A.type);for(const Nt of A.layerUpdates){const Bt=Tt.data.subarray(Nt*Rt/Tt.data.BYTES_PER_ELEMENT,(Nt+1)*Rt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Nt,Tt.width,Tt.height,1,_t,Bt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Tt.width,Tt.height,at.depth,_t,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Pt,Tt.width,Tt.height,at.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?vt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Tt.width,Tt.height,at.depth,_t,bt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,Pt,Tt.width,Tt.height,at.depth,0,_t,bt,Tt.data)}else{G&&ot&&e.texStorage2D(s.TEXTURE_2D,It,Pt,Gt[0].width,Gt[0].height);for(let ut=0,it=Gt.length;ut<it;ut++)Tt=Gt[ut],A.format!==Ze?_t!==null?G?vt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Tt.width,Tt.height,_t,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,Pt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?vt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Tt.width,Tt.height,_t,bt,Tt.data):e.texImage2D(s.TEXTURE_2D,ut,Pt,Tt.width,Tt.height,0,_t,bt,Tt.data)}else if(A.isDataArrayTexture)if(G){if(ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,Pt,at.width,at.height,at.depth),vt)if(A.layerUpdates.size>0){const ut=Fu(at.width,at.height,A.format,A.type);for(const it of A.layerUpdates){const Rt=at.data.subarray(it*ut/at.data.BYTES_PER_ELEMENT,(it+1)*ut/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,at.width,at.height,1,_t,bt,Rt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,bt,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,at.width,at.height,at.depth,0,_t,bt,at.data);else if(A.isData3DTexture)G?(ot&&e.texStorage3D(s.TEXTURE_3D,It,Pt,at.width,at.height,at.depth),vt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,bt,at.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,at.width,at.height,at.depth,0,_t,bt,at.data);else if(A.isFramebufferTexture){if(ot)if(G)e.texStorage2D(s.TEXTURE_2D,It,Pt,at.width,at.height);else{let ut=at.width,it=at.height;for(let Rt=0;Rt<It;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,Pt,ut,it,0,_t,bt,null),ut>>=1,it>>=1}}else if(Gt.length>0){if(G&&ot){const ut=kt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,It,Pt,ut.width,ut.height)}for(let ut=0,it=Gt.length;ut<it;ut++)Tt=Gt[ut],G?vt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,_t,bt,Tt):e.texImage2D(s.TEXTURE_2D,ut,Pt,_t,bt,Tt);A.generateMipmaps=!1}else if(G){if(ot){const ut=kt(at);e.texStorage2D(s.TEXTURE_2D,It,Pt,ut.width,ut.height)}vt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,bt,at)}else e.texImage2D(s.TEXTURE_2D,0,Pt,_t,bt,at);m(A)&&p(et),yt.__version=j.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function V(P,A,k){if(A.image.length!==6)return;const et=tt(P,A),Q=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);const j=i.get(Q);if(Q.version!==j.__version||et===!0){e.activeTexture(s.TEXTURE0+k);const yt=ee.getPrimaries(ee.workingColorSpace),lt=A.colorSpace===li?null:ee.getPrimaries(A.colorSpace),wt=A.colorSpace===li||yt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ct=A.isCompressedTexture||A.image[0].isCompressedTexture,at=A.image[0]&&A.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!Ct&&!at?_t[it]=_(A.image[it],!0,n.maxCubemapSize):_t[it]=at?A.image[it].image:A.image[it],_t[it]=ct(A,_t[it]);const bt=_t[0],Pt=r.convert(A.format,A.colorSpace),Tt=r.convert(A.type),Gt=x(A.internalFormat,Pt,Tt,A.colorSpace),G=A.isVideoTexture!==!0,ot=j.__version===void 0||et===!0,vt=Q.dataReady;let It=b(A,bt);X(s.TEXTURE_CUBE_MAP,A);let ut;if(Ct){G&&ot&&e.texStorage2D(s.TEXTURE_CUBE_MAP,It,Gt,bt.width,bt.height);for(let it=0;it<6;it++){ut=_t[it].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){const Nt=ut[Rt];A.format!==Ze?Pt!==null?G?vt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,Nt.width,Nt.height,Pt,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,Gt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,0,0,Nt.width,Nt.height,Pt,Tt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt,Gt,Nt.width,Nt.height,0,Pt,Tt,Nt.data)}}}else{if(ut=A.mipmaps,G&&ot){ut.length>0&&It++;const it=kt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,It,Gt,it.width,it.height)}for(let it=0;it<6;it++)if(at){G?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Pt,Tt,_t[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,_t[it].width,_t[it].height,0,Pt,Tt,_t[it].data);for(let Rt=0;Rt<ut.length;Rt++){const Bt=ut[Rt].image[it].image;G?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,Bt.width,Bt.height,Pt,Tt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,Gt,Bt.width,Bt.height,0,Pt,Tt,Bt.data)}}else{G?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Pt,Tt,_t[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Gt,Pt,Tt,_t[it]);for(let Rt=0;Rt<ut.length;Rt++){const Nt=ut[Rt];G?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,0,0,Pt,Tt,Nt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt+1,Gt,Pt,Tt,Nt.image[it])}}}m(A)&&p(s.TEXTURE_CUBE_MAP),j.__version=Q.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function J(P,A,k,et,Q,j){const yt=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),wt=x(k.internalFormat,yt,lt,k.colorSpace),Ct=i.get(A),at=i.get(k);if(at.__renderTarget=A,!Ct.__hasExternalTextures){const _t=Math.max(1,A.width>>j),bt=Math.max(1,A.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,wt,_t,bt,A.depth,0,yt,lt,null):e.texImage2D(Q,j,wt,_t,bt,0,yt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ht(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Q,at.__webglTexture,0,xt(A)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,Q,at.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(P,A,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const et=A.depthTexture,Q=et&&et.isDepthTexture?et.type:null,j=v(A.stencilBuffer,Q),yt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=xt(A);ht(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,j,A.width,A.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,j,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,j,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,P)}else{const et=A.textures;for(let Q=0;Q<et.length;Q++){const j=et[Q],yt=r.convert(j.format,j.colorSpace),lt=r.convert(j.type),wt=x(j.internalFormat,yt,lt,j.colorSpace),Ct=xt(A);k&&ht(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,wt,A.width,A.height):ht(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,wt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,wt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(A.depthTexture);et.__renderTarget=A,(!et.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const Q=et.__webglTexture,j=xt(A);if(A.depthTexture.format===ps)ht(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(A.depthTexture.format===ms)ht(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ft(P){const A=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const et=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),et){const Q=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,et.removeEventListener("dispose",Q)};et.addEventListener("dispose",Q),A.__depthDisposeCallback=Q}A.__boundDepthTexture=et}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const et=P.texture.mipmaps;et&&et.length>0?pt(A.__webglFramebuffer[0],P):pt(A.__webglFramebuffer,P)}else if(k){A.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[et]),A.__webglDepthbuffer[et]===void 0)A.__webglDepthbuffer[et]=s.createRenderbuffer(),dt(A.__webglDepthbuffer[et],P,!1);else{const Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else{const et=P.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),dt(A.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(P,A,k){const et=i.get(P);A!==void 0&&J(et.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ft(P)}function I(P){const A=P.texture,k=i.get(P),et=i.get(A);P.addEventListener("dispose",E);const Q=P.textures,j=P.isWebGLCubeRenderTarget===!0,yt=Q.length>1;if(yt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=A.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let wt=0;wt<A.mipmaps.length;wt++)k.__webglFramebuffer[lt][wt]=s.createFramebuffer()}else k.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<A.mipmaps.length;lt++)k.__webglFramebuffer[lt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(yt)for(let lt=0,wt=Q.length;lt<wt;lt++){const Ct=i.get(Q[lt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ht(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const wt=Q[lt];k.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const Ct=r.convert(wt.format,wt.colorSpace),at=r.convert(wt.type),_t=x(wt.internalFormat,Ct,at,wt.colorSpace,P.isXRRenderTarget===!0),bt=xt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,_t,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),X(s.TEXTURE_CUBE_MAP,A);for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)J(k.__webglFramebuffer[lt][wt],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt);else J(k.__webglFramebuffer[lt],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(A)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let lt=0,wt=Q.length;lt<wt;lt++){const Ct=Q[lt],at=i.get(Ct);let _t=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,at.__webglTexture),X(_t,Ct),J(k.__webglFramebuffer,P,Ct,s.COLOR_ATTACHMENT0+lt,_t,0),m(Ct)&&p(_t)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,et.__webglTexture),X(lt,A),A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)J(k.__webglFramebuffer[wt],P,A,s.COLOR_ATTACHMENT0,lt,wt);else J(k.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,lt,0);m(A)&&p(lt),e.unbindTexture()}P.depthBuffer&&ft(P)}function Lt(P){const A=P.textures;for(let k=0,et=A.length;k<et;k++){const Q=A[k];if(m(Q)){const j=y(P),yt=i.get(Q).__webglTexture;e.bindTexture(j,yt),p(j),e.unbindTexture()}}}const St=[],Mt=[];function mt(P){if(P.samples>0){if(ht(P)===!1){const A=P.textures,k=P.width,et=P.height;let Q=s.COLOR_BUFFER_BIT;const j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=i.get(P),lt=A.length>1;if(lt)for(let Ct=0;Ct<A.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const wt=P.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ct=0;Ct<A.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[Ct]);const at=i.get(A[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,k,et,0,0,k,et,Q,s.NEAREST),l===!0&&(St.length=0,Mt.length=0,St.push(s.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(St.push(j),Mt.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let Ct=0;Ct<A.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,yt.__webglColorRenderbuffer[Ct]);const at=i.get(A[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,at,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function xt(P){return Math.min(n.maxSamples,P.samples)}function ht(P){const A=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Et(P){const A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function ct(P,A){const k=P.colorSpace,et=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Er&&k!==li&&(ee.getTransfer(k)===oe?(et!==Ze||Q!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}function kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=w,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=gt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ht}function Xv(s,t){function e(i,n=li){let r;const o=ee.getTransfer(n);if(i===jn)return s.UNSIGNED_BYTE;if(i===cc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Vh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return s.BYTE;if(i===zh)return s.SHORT;if(i===fs)return s.UNSIGNED_SHORT;if(i===lc)return s.INT;if(i===fi)return s.UNSIGNED_INT;if(i===mn)return s.FLOAT;if(i===_s)return s.HALF_FLOAT;if(i===Hh)return s.ALPHA;if(i===Wh)return s.RGB;if(i===Ze)return s.RGBA;if(i===ps)return s.DEPTH_COMPONENT;if(i===ms)return s.DEPTH_STENCIL;if(i===hc)return s.RED;if(i===ko)return s.RED_INTEGER;if(i===Xh)return s.RG;if(i===fc)return s.RG_INTEGER;if(i===dc)return s.RGBA_INTEGER;if(i===Mo||i===bo||i===Eo||i===To)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pl||i===ml||i===gl||i===_l)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===xl||i===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vl||i===xl)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sl||i===Ml||i===bl||i===El||i===Tl||i===Al||i===wl||i===Cl||i===Rl||i===Pl||i===Dl||i===Ul||i===Ll||i===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===Nl||i===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Fl)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===kl||i===zl||i===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
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

}`;class qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new sf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Kn({vertexShader:Yv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kv extends Fi{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new qv,p={},y=e.getContextAttributes();let x=null,v=null;const b=[],T=[],E=new Yt;let C=null;const M=new fn;M.viewport=new pe;const S=new fn;S.viewport=new pe;const D=[M,S],w=new up;let U=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let V=b[H];return V===void 0&&(V=new Aa,b[H]=V),V.getTargetRaySpace()},this.getControllerGrip=function(H){let V=b[H];return V===void 0&&(V=new Aa,b[H]=V),V.getGripSpace()},this.getHand=function(H){let V=b[H];return V===void 0&&(V=new Aa,b[H]=V),V.getHandSpace()};function z(H){const V=T.indexOf(H.inputSource);if(V===-1)return;const J=b[V];J!==void 0&&(J.update(H.inputSource,H.frame,c||o),J.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",$);for(let H=0;H<b.length;H++){const V=T[H];V!==null&&(T[H]=null,b[H].disconnect(V))}U=null,L=null,m.reset();for(const H in p)delete p[H];t.setRenderTarget(x),d=null,h=null,f=null,n=null,v=null,Z.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(x=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",B),n.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,dt=null,pt=null;y.depth&&(pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=y.stencil?ms:ps,dt=y.stencil?ds:fi);const ft={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ft),n.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Ui(h.textureWidth,h.textureHeight,{format:Ze,type:jn,depthTexture:new rf(h.textureWidth,h.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const J={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,J),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ui(d.framebufferWidth,d.framebufferHeight,{format:Ze,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Z.setContext(n),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(H){for(let V=0;V<H.removed.length;V++){const J=H.removed[V],dt=T.indexOf(J);dt>=0&&(T[dt]=null,b[dt].disconnect(J))}for(let V=0;V<H.added.length;V++){const J=H.added[V];let dt=T.indexOf(J);if(dt===-1){for(let ft=0;ft<b.length;ft++)if(ft>=T.length){T.push(J),dt=ft;break}else if(T[ft]===null){T[ft]=J,dt=ft;break}if(dt===-1)break}const pt=b[dt];pt&&pt.connect(J)}}const W=new N,Y=new N;function K(H,V,J){W.setFromMatrixPosition(V.matrixWorld),Y.setFromMatrixPosition(J.matrixWorld);const dt=W.distanceTo(Y),pt=V.projectionMatrix.elements,ft=J.projectionMatrix.elements,gt=pt[14]/(pt[10]-1),I=pt[14]/(pt[10]+1),Lt=(pt[9]+1)/pt[5],St=(pt[9]-1)/pt[5],Mt=(pt[8]-1)/pt[0],mt=(ft[8]+1)/ft[0],xt=gt*Mt,ht=gt*mt,Et=dt/(-Mt+mt),ct=Et*-Mt;if(V.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ct),H.translateZ(Et),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),pt[10]===-1)H.projectionMatrix.copy(V.projectionMatrix),H.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const kt=gt+Et,P=I+Et,A=xt-ct,k=ht+(dt-ct),et=Lt*I/P*kt,Q=St*I/P*kt;H.projectionMatrix.makePerspective(A,k,et,Q,kt,P),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function F(H,V){V===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(V.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;let V=H.near,J=H.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&(J=m.depthFar)),w.near=S.near=M.near=V,w.far=S.far=M.far=J,(U!==w.near||L!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,L=w.far),w.layers.mask=H.layers.mask|6,M.layers.mask=w.layers.mask&3,S.layers.mask=w.layers.mask&5;const dt=H.parent,pt=w.cameras;F(w,dt);for(let ft=0;ft<pt.length;ft++)F(pt[ft],dt);pt.length===2?K(w,M,S):w.projectionMatrix.copy(M.projectionMatrix),X(H,w,dt)};function X(H,V,J){J===null?H.matrix.copy(V.matrixWorld):(H.matrix.copy(J.matrixWorld),H.matrix.invert(),H.matrix.multiply(V.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(V.projectionMatrix),H.projectionMatrixInverse.copy(V.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Vl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)},this.getCameraTexture=function(H){return p[H]};let tt=null;function nt(H,V){if(u=V.getViewerPose(c||o),g=V,u!==null){const J=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let dt=!1;J.length!==w.cameras.length&&(w.cameras.length=0,dt=!0);for(let I=0;I<J.length;I++){const Lt=J[I];let St=null;if(d!==null)St=d.getViewport(Lt);else{const mt=f.getViewSubImage(h,Lt);St=mt.viewport,I===0&&(t.setRenderTargetTextures(v,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(v))}let Mt=D[I];Mt===void 0&&(Mt=new fn,Mt.layers.enable(I),Mt.viewport=new pe,D[I]=Mt),Mt.matrix.fromArray(Lt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Lt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(St.x,St.y,St.width,St.height),I===0&&(w.matrix.copy(Mt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),dt===!0&&w.cameras.push(Mt)}const pt=n.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const I=f.getDepthInformation(J[0]);I&&I.isValid&&I.texture&&m.init(I,n.renderState)}if(pt&&pt.includes("camera-access")&&_){t.state.unbindTexture(),f=i.getBinding();for(let I=0;I<J.length;I++){const Lt=J[I].camera;if(Lt){let St=p[Lt];St||(St=new sf,p[Lt]=St);const Mt=f.getCameraImage(Lt);St.sourceTexture=Mt}}}}for(let J=0;J<b.length;J++){const dt=T[J],pt=b[J];dt!==null&&pt!==void 0&&pt.update(dt,V,c||o)}tt&&tt(H,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const Z=new cf;Z.setAnimationLoop(nt),this.setAnimationLoop=function(H){tt=H},this.dispose=function(){}}}const bi=new qn,Zv=new Qt;function Jv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,bi.copy(v),bi.x*=-1,bi.y*=-1,bi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(bi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function $v(s,t,e,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function c(y,x){let v=n[y.id];v===void 0&&(g(y),v=u(y),n[y.id]=v,y.addEventListener("dispose",m));const b=x.program;i.updateUBOMapping(y,b);const T=t.render.frame;r[y.id]!==T&&(h(y),r[y.id]=T)}function u(y){const x=f();y.__bindingPointIndex=x;const v=s.createBuffer(),b=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=n[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,E=v.length;T<E;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,S=C.length;M<S;M++){const D=C[M];if(d(D,T,M,b)===!0){const w=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let L=0;for(let z=0;z<U.length;z++){const B=U[z],$=_(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,w+L,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,w,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,v,b){const T=y.value,E=x+"_"+v;if(b[E]===void 0)return typeof T=="number"||typeof T=="boolean"?b[E]=T:b[E]=T.clone(),!0;{const C=b[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){const x=y.uniforms;let v=0;const b=16;for(let E=0,C=x.length;E<C;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,D=M.length;S<D;S++){const w=M[S],U=Array.isArray(w.value)?w.value:[w.value];for(let L=0,z=U.length;L<z;L++){const B=U[L],$=_(B),W=v%b,Y=W%$.boundary,K=W+Y;v+=Y,K!==0&&b-K<$.storage&&(v+=b-K),w.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,v+=$.storage}}}const T=v%b;return T>0&&(v+=b-T),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function p(){for(const y in n)s.deleteBuffer(n[y]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}class Qv{constructor(t={}){const{canvas:e=Ed(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=en;let T=0,E=0,C=null,M=-1,S=null;const D=new pe,w=new pe;let U=null;const L=new Kt(0);let z=0,B=e.width,$=e.height,W=1,Y=null,K=null;const F=new pe(0,0,B,$),X=new pe(0,0,B,$);let tt=!1;const nt=new zo;let Z=!1,H=!1;const V=new Qt,J=new N,dt=new pe,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function gt(){return C===null?W:1}let I=i;function Lt(R,q){return e.getContext(R,q)}try{const R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){const q="webgl2";if(I=Lt(q,R),I===null)throw Lt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let St,Mt,mt,xt,ht,Et,ct,kt,P,A,k,et,Q,j,yt,lt,wt,Ct,at,_t,bt,Pt,Tt,Gt;function G(){St=new c_(I),St.init(),Pt=new Xv(I,St),Mt=new n_(I,St,t,Pt),mt=new Hv(I,St),Mt.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),xt=new f_(I),ht=new Pv,Et=new Wv(I,St,mt,ht,Mt,Pt,xt),ct=new r_(v),kt=new l_(v),P=new vp(I),Tt=new t_(I,P),A=new u_(I,P,xt,Tt),k=new p_(I,A,P,xt),at=new d_(I,Mt,Et),lt=new i_(ht),et=new Rv(v,ct,kt,St,Mt,Tt,lt),Q=new Jv(v,ht),j=new Uv,yt=new Ov(St),Ct=new Qg(v,ct,kt,mt,k,d,l),wt=new Gv(v,k,Mt),Gt=new $v(I,xt,Mt,mt),_t=new e_(I,St,xt),bt=new h_(I,St,xt),xt.programs=et.programs,v.capabilities=Mt,v.extensions=St,v.properties=ht,v.renderLists=j,v.shadowMap=wt,v.state=mt,v.info=xt}G();const ot=new Kv(v,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=St.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=St.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(B,$,!1))},this.getSize=function(R){return R.set(B,$)},this.setSize=function(R,q,rt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,$=q,e.width=Math.floor(R*W),e.height=Math.floor(q*W),rt===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*W,$*W).floor()},this.setDrawingBufferSize=function(R,q,rt){B=R,$=q,W=rt,e.width=Math.floor(R*rt),e.height=Math.floor(q*rt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(F)},this.setViewport=function(R,q,rt,st){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,q,rt,st),mt.viewport(D.copy(F).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,q,rt,st){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,q,rt,st),mt.scissor(w.copy(X).multiplyScalar(W).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(R){mt.setScissorTest(tt=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,rt=!0){let st=0;if(R){let O=!1;if(C!==null){const At=C.texture.format;O=At===dc||At===fc||At===ko}if(O){const At=C.texture.type,Ut=At===jn||At===fi||At===fs||At===ds||At===cc||At===uc,Ot=Ct.getClearColor(),Ft=Ct.getClearAlpha(),Wt=Ot.r,Xt=Ot.g,zt=Ot.b;Ut?(g[0]=Wt,g[1]=Xt,g[2]=zt,g[3]=Ft,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Wt,_[1]=Xt,_[2]=zt,_[3]=Ft,I.clearBufferiv(I.COLOR,0,_))}else st|=I.COLOR_BUFFER_BIT}q&&(st|=I.DEPTH_BUFFER_BIT),rt&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Ct.dispose(),j.dispose(),yt.dispose(),ht.dispose(),ct.dispose(),kt.dispose(),k.dispose(),Tt.dispose(),Gt.dispose(),et.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",le),ot.removeEventListener("sessionend",ge),Te.stop()};function vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=xt.autoReset,q=wt.enabled,rt=wt.autoUpdate,st=wt.needsUpdate,O=wt.type;G(),xt.autoReset=R,wt.enabled=q,wt.autoUpdate=rt,wt.needsUpdate=st,wt.type=O}function ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const q=R.target;q.removeEventListener("dispose",it),Rt(q)}function Rt(R){Nt(R),ht.remove(R)}function Nt(R){const q=ht.get(R).programs;q!==void 0&&(q.forEach(function(rt){et.releaseProgram(rt)}),R.isShaderMaterial&&et.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,rt,st,O,At){q===null&&(q=pt);const Ut=O.isMesh&&O.matrixWorld.determinant()<0,Ot=Ur(R,q,rt,st,O);mt.setMaterial(st,Ut);let Ft=rt.index,Wt=1;if(st.wireframe===!0){if(Ft=A.getWireframeAttribute(rt),Ft===void 0)return;Wt=2}const Xt=rt.drawRange,zt=rt.attributes.position;let Zt=Xt.start*Wt,ne=(Xt.start+Xt.count)*Wt;At!==null&&(Zt=Math.max(Zt,At.start*Wt),ne=Math.min(ne,(At.start+At.count)*Wt)),Ft!==null?(Zt=Math.max(Zt,0),ne=Math.min(ne,Ft.count)):zt!=null&&(Zt=Math.max(Zt,0),ne=Math.min(ne,zt.count));const ce=ne-Zt;if(ce<0||ce===1/0)return;Tt.setup(O,st,Ot,rt,Ft);let se,ie=_t;if(Ft!==null&&(se=P.get(Ft),ie=bt,ie.setIndex(se)),O.isMesh)st.wireframe===!0?(mt.setLineWidth(st.wireframeLinewidth*gt()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(O.isLine){let Ht=st.linewidth;Ht===void 0&&(Ht=1),mt.setLineWidth(Ht*gt()),O.isLineSegments?ie.setMode(I.LINES):O.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else O.isPoints?ie.setMode(I.POINTS):O.isSprite&&ie.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))ie.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ht=O._multiDrawStarts,re=O._multiDrawCounts,$t=O._multiDrawCount,Me=Ft?P.get(Ft).bytesPerElement:1,Pn=ht.get(st).currentProgram.getUniforms();for(let Pe=0;Pe<$t;Pe++)Pn.setValue(I,"_gl_DrawID",Pe),ie.render(Ht[Pe]/Me,re[Pe])}else if(O.isInstancedMesh)ie.renderInstances(Zt,ce,O.count);else if(rt.isInstancedBufferGeometry){const Ht=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,re=Math.min(rt.instanceCount,Ht);ie.renderInstances(Zt,ce,re)}else ie.render(Zt,ce)};function Bt(R,q,rt){R.transparent===!0&&R.side===dn&&R.forceSinglePass===!1?(R.side=Ge,R.needsUpdate=!0,Se(R,q,rt),R.side=Fn,R.needsUpdate=!0,Se(R,q,rt),R.side=dn):Se(R,q,rt)}this.compile=function(R,q,rt=null){rt===null&&(rt=R),p=yt.get(rt),p.init(q),x.push(p),rt.traverseVisible(function(O){O.isLight&&O.layers.test(q.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),R!==rt&&R.traverseVisible(function(O){O.isLight&&O.layers.test(q.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const st=new Set;return R.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const At=O.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Ot=At[Ut];Bt(Ot,rt,O),st.add(Ot)}else Bt(At,rt,O),st.add(At)}),p=x.pop(),st},this.compileAsync=function(R,q,rt=null){const st=this.compile(R,q,rt);return new Promise(O=>{function At(){if(st.forEach(function(Ut){ht.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){O(R);return}setTimeout(At,10)}St.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Vt=null;function he(R){Vt&&Vt(R)}function le(){Te.stop()}function ge(){Te.start()}const Te=new cf;Te.setAnimationLoop(he),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(R){Vt=R,ot.setAnimationLoop(R),R===null?Te.stop():Te.start()},ot.addEventListener("sessionstart",le),ot.addEventListener("sessionend",ge),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,q,C),p=yt.get(R,x.length),p.init(q),x.push(p),V.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),nt.setFromProjectionMatrix(V,wn,q.reversedDepth),H=this.localClippingEnabled,Z=lt.init(this.clippingPlanes,H),m=j.get(R,y.length),m.init(),y.push(m),ot.enabled===!0&&ot.isPresenting===!0){const At=v.xr.getDepthSensingMesh();At!==null&&on(At,q,-1/0,v.sortObjects)}on(R,q,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Y,K),ft=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,ft&&Ct.addToRenderList(m,R),this.info.render.frame++,Z===!0&&lt.beginShadows();const rt=p.state.shadowsArray;wt.render(rt,R,q),Z===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=m.opaque,O=m.transmissive;if(p.setupLights(),q.isArrayCamera){const At=q.cameras;if(O.length>0)for(let Ut=0,Ot=At.length;Ut<Ot;Ut++){const Ft=At[Ut];yn(st,O,R,Ft)}ft&&Ct.render(R);for(let Ut=0,Ot=At.length;Ut<Ot;Ut++){const Ft=At[Ut];an(m,R,Ft,Ft.viewport)}}else O.length>0&&yn(st,O,R,q),ft&&Ct.render(R),an(m,R,q);C!==null&&E===0&&(Et.updateMultisampleRenderTarget(C),Et.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,q),Tt.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],Z===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function on(R,q,rt,st){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||nt.intersectsSprite(R)){st&&dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(V);const Ut=k.update(R),Ot=R.material;Ot.visible&&m.push(R,Ut,Ot,rt,dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||nt.intersectsObject(R))){const Ut=k.update(R),Ot=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),dt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),dt.copy(Ut.boundingSphere.center)),dt.applyMatrix4(R.matrixWorld).applyMatrix4(V)),Array.isArray(Ot)){const Ft=Ut.groups;for(let Wt=0,Xt=Ft.length;Wt<Xt;Wt++){const zt=Ft[Wt],Zt=Ot[zt.materialIndex];Zt&&Zt.visible&&m.push(R,Ut,Zt,rt,dt.z,zt)}}else Ot.visible&&m.push(R,Ut,Ot,rt,dt.z,null)}}const At=R.children;for(let Ut=0,Ot=At.length;Ut<Ot;Ut++)on(At[Ut],q,rt,st)}function an(R,q,rt,st){const O=R.opaque,At=R.transmissive,Ut=R.transparent;p.setupLightsView(rt),Z===!0&&lt.setGlobalState(v.clippingPlanes,rt),st&&mt.viewport(D.copy(st)),O.length>0&&ln(O,q,rt),At.length>0&&ln(At,q,rt),Ut.length>0&&ln(Ut,q,rt),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function yn(R,q,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[st.id]===void 0&&(p.state.transmissionRenderTarget[st.id]=new Ui(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?_s:jn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const At=p.state.transmissionRenderTarget[st.id],Ut=st.viewport||D;At.setSize(Ut.z*v.transmissionResolutionScale,Ut.w*v.transmissionResolutionScale);const Ot=v.getRenderTarget(),Ft=v.getActiveCubeFace(),Wt=v.getActiveMipmapLevel();v.setRenderTarget(At),v.getClearColor(L),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),ft&&Ct.render(rt);const Xt=v.toneMapping;v.toneMapping=hi;const zt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),p.setupLightsView(st),Z===!0&&lt.setGlobalState(v.clippingPlanes,st),ln(R,rt,st),Et.updateMultisampleRenderTarget(At),Et.updateRenderTargetMipmap(At),St.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ne=0,ce=q.length;ne<ce;ne++){const se=q[ne],ie=se.object,Ht=se.geometry,re=se.material,$t=se.group;if(re.side===dn&&ie.layers.test(st.layers)){const Me=re.side;re.side=Ge,re.needsUpdate=!0,cn(ie,rt,st,Ht,re,$t),re.side=Me,re.needsUpdate=!0,Zt=!0}}Zt===!0&&(Et.updateMultisampleRenderTarget(At),Et.updateRenderTargetMipmap(At))}v.setRenderTarget(Ot,Ft,Wt),v.setClearColor(L,z),zt!==void 0&&(st.viewport=zt),v.toneMapping=Xt}function ln(R,q,rt){const st=q.isScene===!0?q.overrideMaterial:null;for(let O=0,At=R.length;O<At;O++){const Ut=R[O],Ot=Ut.object,Ft=Ut.geometry,Wt=Ut.group;let Xt=Ut.material;Xt.allowOverride===!0&&st!==null&&(Xt=st),Ot.layers.test(rt.layers)&&cn(Ot,q,rt,Ft,Xt,Wt)}}function cn(R,q,rt,st,O,At){R.onBeforeRender(v,q,rt,st,O,At),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.onBeforeRender(v,q,rt,st,R,At),O.transparent===!0&&O.side===dn&&O.forceSinglePass===!1?(O.side=Ge,O.needsUpdate=!0,v.renderBufferDirect(rt,q,st,O,R,At),O.side=Fn,O.needsUpdate=!0,v.renderBufferDirect(rt,q,st,O,R,At),O.side=dn):v.renderBufferDirect(rt,q,st,O,R,At),R.onAfterRender(v,q,rt,st,O,At)}function Se(R,q,rt){q.isScene!==!0&&(q=pt);const st=ht.get(R),O=p.state.lights,At=p.state.shadowsArray,Ut=O.state.version,Ot=et.getParameters(R,O.state,At,q,rt),Ft=et.getProgramCacheKey(Ot);let Wt=st.programs;st.environment=R.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(R.isMeshStandardMaterial?kt:ct).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",it),Wt=new Map,st.programs=Wt);let Xt=Wt.get(Ft);if(Xt!==void 0){if(st.currentProgram===Xt&&st.lightsStateVersion===Ut)return Dr(R,Ot),Xt}else Ot.uniforms=et.getUniforms(R),R.onBeforeCompile(Ot,v),Xt=et.acquireProgram(Ot,Ft),Wt.set(Ft,Xt),st.uniforms=Ot.uniforms;const zt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=lt.uniform),Dr(R,Ot),st.needsLights=ys(R),st.lightsStateVersion=Ut,st.needsLights&&(zt.ambientLightColor.value=O.state.ambient,zt.lightProbe.value=O.state.probe,zt.directionalLights.value=O.state.directional,zt.directionalLightShadows.value=O.state.directionalShadow,zt.spotLights.value=O.state.spot,zt.spotLightShadows.value=O.state.spotShadow,zt.rectAreaLights.value=O.state.rectArea,zt.ltc_1.value=O.state.rectAreaLTC1,zt.ltc_2.value=O.state.rectAreaLTC2,zt.pointLights.value=O.state.point,zt.pointLightShadows.value=O.state.pointShadow,zt.hemisphereLights.value=O.state.hemi,zt.directionalShadowMap.value=O.state.directionalShadowMap,zt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,zt.spotShadowMap.value=O.state.spotShadowMap,zt.spotLightMatrix.value=O.state.spotLightMatrix,zt.spotLightMap.value=O.state.spotLightMap,zt.pointShadowMap.value=O.state.pointShadowMap,zt.pointShadowMatrix.value=O.state.pointShadowMatrix),st.currentProgram=Xt,st.uniformsList=null,Xt}function Rn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ao.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Dr(R,q){const rt=ht.get(R);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function Ur(R,q,rt,st,O){q.isScene!==!0&&(q=pt),Et.resetTextureUnits();const At=q.fog,Ut=st.isMeshStandardMaterial?q.environment:null,Ot=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Er,Ft=(st.isMeshStandardMaterial?kt:ct).get(st.envMap||Ut),Wt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Xt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),zt=!!rt.morphAttributes.position,Zt=!!rt.morphAttributes.normal,ne=!!rt.morphAttributes.color;let ce=hi;st.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ce=v.toneMapping);const se=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ie=se!==void 0?se.length:0,Ht=ht.get(st),re=p.state.lights;if(Z===!0&&(H===!0||R!==S)){const ve=R===S&&st.id===M;lt.setState(st,R,ve)}let $t=!1;st.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==re.state.version||Ht.outputColorSpace!==Ot||O.isBatchedMesh&&Ht.batching===!1||!O.isBatchedMesh&&Ht.batching===!0||O.isBatchedMesh&&Ht.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ht.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ht.instancing===!1||!O.isInstancedMesh&&Ht.instancing===!0||O.isSkinnedMesh&&Ht.skinning===!1||!O.isSkinnedMesh&&Ht.skinning===!0||O.isInstancedMesh&&Ht.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ht.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ht.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ht.instancingMorph===!1&&O.morphTexture!==null||Ht.envMap!==Ft||st.fog===!0&&Ht.fog!==At||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==lt.numPlanes||Ht.numIntersection!==lt.numIntersection)||Ht.vertexAlphas!==Wt||Ht.vertexTangents!==Xt||Ht.morphTargets!==zt||Ht.morphNormals!==Zt||Ht.morphColors!==ne||Ht.toneMapping!==ce||Ht.morphTargetsCount!==ie)&&($t=!0):($t=!0,Ht.__version=st.version);let Me=Ht.currentProgram;$t===!0&&(Me=Se(st,q,O));let Pn=!1,Pe=!1,Nn=!1;const te=Me.getUniforms(),He=Ht.uniforms;if(mt.useProgram(Me.program)&&(Pn=!0,Pe=!0,Nn=!0),st.id!==M&&(M=st.id,Pe=!0),Pn||S!==R){mt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),te.setValue(I,"projectionMatrix",R.projectionMatrix),te.setValue(I,"viewMatrix",R.matrixWorldInverse);const Ue=te.map.cameraPosition;Ue!==void 0&&Ue.setValue(I,J.setFromMatrixPosition(R.matrixWorld)),Mt.logarithmicDepthBuffer&&te.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&te.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Pe=!0,Nn=!0)}if(O.isSkinnedMesh){te.setOptional(I,O,"bindMatrix"),te.setOptional(I,O,"bindMatrixInverse");const ve=O.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),te.setValue(I,"boneTexture",ve.boneTexture,Et))}O.isBatchedMesh&&(te.setOptional(I,O,"batchingTexture"),te.setValue(I,"batchingTexture",O._matricesTexture,Et),te.setOptional(I,O,"batchingIdTexture"),te.setValue(I,"batchingIdTexture",O._indirectTexture,Et),te.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&te.setValue(I,"batchingColorTexture",O._colorsTexture,Et));const De=rt.morphAttributes;if((De.position!==void 0||De.normal!==void 0||De.color!==void 0)&&at.update(O,rt,Me),(Pe||Ht.receiveShadow!==O.receiveShadow)&&(Ht.receiveShadow=O.receiveShadow,te.setValue(I,"receiveShadow",O.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(He.envMap.value=Ft,He.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(He.envMapIntensity.value=q.environmentIntensity),Pe&&(te.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Yo(He,Nn),At&&st.fog===!0&&Q.refreshFogUniforms(He,At),Q.refreshMaterialUniforms(He,st,W,$,p.state.transmissionRenderTarget[R.id]),Ao.upload(I,Rn(Ht),He,Et)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Ao.upload(I,Rn(Ht),He,Et),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&te.setValue(I,"center",O.center),te.setValue(I,"modelViewMatrix",O.modelViewMatrix),te.setValue(I,"normalMatrix",O.normalMatrix),te.setValue(I,"modelMatrix",O.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const ve=st.uniformsGroups;for(let Ue=0,Jn=ve.length;Ue<Jn;Ue++){const un=ve[Ue];Gt.update(un,Me),Gt.bind(un,Me)}}return Me}function Yo(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ys(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,rt){const st=ht.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),ht.get(R.texture).__webglTexture=q,ht.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const rt=ht.get(R);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Ni=I.createFramebuffer();this.setRenderTarget=function(R,q=0,rt=0){C=R,T=q,E=rt;let st=!0,O=null,At=!1,Ut=!1;if(R){const Ft=ht.get(R);if(Ft.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Ft.__webglFramebuffer===void 0)Et.setupRenderTarget(R);else if(Ft.__hasExternalTextures)Et.rebindTextures(R,ht.get(R.texture).__webglTexture,ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const zt=R.depthTexture;if(Ft.__boundDepthTexture!==zt){if(zt!==null&&ht.has(zt)&&(R.width!==zt.image.width||R.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ut=!0);const Xt=ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[q])?O=Xt[q][rt]:O=Xt[q],At=!0):R.samples>0&&Et.useMultisampledRTT(R)===!1?O=ht.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?O=Xt[rt]:O=Xt,D.copy(R.viewport),w.copy(R.scissor),U=R.scissorTest}else D.copy(F).multiplyScalar(W).floor(),w.copy(X).multiplyScalar(W).floor(),U=tt;if(rt!==0&&(O=Ni),mt.bindFramebuffer(I.FRAMEBUFFER,O)&&st&&mt.drawBuffers(R,O),mt.viewport(D),mt.scissor(w),mt.setScissorTest(U),At){const Ft=ht.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,rt)}else if(Ut){const Ft=q;for(let Wt=0;Wt<R.textures.length;Wt++){const Xt=ht.get(R.textures[Wt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Wt,Xt.__webglTexture,rt,Ft)}}else if(R!==null&&rt!==0){const Ft=ht.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,rt)}M=-1},this.readRenderTargetPixels=function(R,q,rt,st,O,At,Ut,Ot=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){mt.bindFramebuffer(I.FRAMEBUFFER,Ft);try{const Wt=R.textures[Ot],Xt=Wt.format,zt=Wt.type;if(!Mt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-st&&rt>=0&&rt<=R.height-O&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ot),I.readPixels(q,rt,st,O,Pt.convert(Xt),Pt.convert(zt),At))}finally{const Wt=C!==null?ht.get(C).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,q,rt,st,O,At,Ut,Ot=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(q>=0&&q<=R.width-st&&rt>=0&&rt<=R.height-O){mt.bindFramebuffer(I.FRAMEBUFFER,Ft);const Wt=R.textures[Ot],Xt=Wt.format,zt=Wt.type;if(!Mt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,At.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ot),I.readPixels(q,rt,st,O,Pt.convert(Xt),Pt.convert(zt),0);const ne=C!==null?ht.get(C).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,ne);const ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Td(I,ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,At),I.deleteBuffer(Zt),I.deleteSync(ce),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,rt=0){const st=Math.pow(2,-rt),O=Math.floor(R.image.width*st),At=Math.floor(R.image.height*st),Ut=q!==null?q.x:0,Ot=q!==null?q.y:0;Et.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,Ut,Ot,O,At),mt.unbindTexture()};const Lr=I.createFramebuffer(),jo=I.createFramebuffer();this.copyTextureToTexture=function(R,q,rt=null,st=null,O=0,At=null){At===null&&(O!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=O,O=0):At=0);let Ut,Ot,Ft,Wt,Xt,zt,Zt,ne,ce;const se=R.isCompressedTexture?R.mipmaps[At]:R.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,Ft=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,Xt=rt.min.y,zt=rt.isBox3?rt.min.z:0;else{const De=Math.pow(2,-O);Ut=Math.floor(se.width*De),Ot=Math.floor(se.height*De),R.isDataArrayTexture?Ft=se.depth:R.isData3DTexture?Ft=Math.floor(se.depth*De):Ft=1,Wt=0,Xt=0,zt=0}st!==null?(Zt=st.x,ne=st.y,ce=st.z):(Zt=0,ne=0,ce=0);const ie=Pt.convert(q.format),Ht=Pt.convert(q.type);let re;q.isData3DTexture?(Et.setTexture3D(q,0),re=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Et.setTexture2DArray(q,0),re=I.TEXTURE_2D_ARRAY):(Et.setTexture2D(q,0),re=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const $t=I.getParameter(I.UNPACK_ROW_LENGTH),Me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Pn=I.getParameter(I.UNPACK_SKIP_PIXELS),Pe=I.getParameter(I.UNPACK_SKIP_ROWS),Nn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zt);const te=R.isDataArrayTexture||R.isData3DTexture,He=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const De=ht.get(R),ve=ht.get(q),Ue=ht.get(De.__renderTarget),Jn=ht.get(ve.__renderTarget);mt.bindFramebuffer(I.READ_FRAMEBUFFER,Ue.__webglFramebuffer),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let un=0;un<Ft;un++)te&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ht.get(R).__webglTexture,O,zt+un),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ht.get(q).__webglTexture,At,ce+un)),I.blitFramebuffer(Wt,Xt,Ut,Ot,Zt,ne,Ut,Ot,I.DEPTH_BUFFER_BIT,I.NEAREST);mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||R.isRenderTargetTexture||ht.has(R)){const De=ht.get(R),ve=ht.get(q);mt.bindFramebuffer(I.READ_FRAMEBUFFER,Lr),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,jo);for(let Ue=0;Ue<Ft;Ue++)te?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.__webglTexture,O,zt+Ue):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,De.__webglTexture,O),He?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.__webglTexture,At,ce+Ue):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,At),O!==0?I.blitFramebuffer(Wt,Xt,Ut,Ot,Zt,ne,Ut,Ot,I.COLOR_BUFFER_BIT,I.NEAREST):He?I.copyTexSubImage3D(re,At,Zt,ne,ce+Ue,Wt,Xt,Ut,Ot):I.copyTexSubImage2D(re,At,Zt,ne,Wt,Xt,Ut,Ot);mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else He?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(re,At,Zt,ne,ce,Ut,Ot,Ft,ie,Ht,se.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(re,At,Zt,ne,ce,Ut,Ot,Ft,ie,se.data):I.texSubImage3D(re,At,Zt,ne,ce,Ut,Ot,Ft,ie,Ht,se):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,At,Zt,ne,Ut,Ot,ie,Ht,se.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,At,Zt,ne,se.width,se.height,ie,se.data):I.texSubImage2D(I.TEXTURE_2D,At,Zt,ne,Ut,Ot,ie,Ht,se);I.pixelStorei(I.UNPACK_ROW_LENGTH,$t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nn),At===0&&q.generateMipmaps&&I.generateMipmap(re),mt.unbindTexture()},this.initRenderTarget=function(R){ht.get(R).__webglFramebuffer===void 0&&Et.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Et.setTextureCube(R,0):R.isData3DTexture?Et.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Et.setTexture2DArray(R,0):Et.setTexture2D(R,0),mt.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,mt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class t0{scene;camera;renderer;container;animationId=null;callbacks=[];clock=new hp;constructor(t){this.container=t;const e=t.clientWidth,i=t.clientHeight;this.scene=new Kd,this.scene.background=new Kt(1710638),this.scene.fog=new gc(1710638,50,200),this.camera=new fn(60,e/i,.1,1e3),this.camera.position.set(30,20,30),this.camera.lookAt(0,0,0),this.renderer=new Qv({antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setSize(e,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=en,t.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onResize)}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}onUpdate(t){this.callbacks.push(t)}start(){this.animationId===null&&this.animate()}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}animate=()=>{this.animationId=requestAnimationFrame(this.animate);const t=this.clock.getDelta();for(const e of this.callbacks)e(t);this.renderer.render(this.scene,this.camera)};onResize=()=>{const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)};dispose(){this.stop(),window.removeEventListener("resize",this.onResize),this.scene.traverse(t=>{t instanceof ye&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose())}),this.renderer.dispose(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement)}}const oh={type:"change"},Ac={type:"start"},pf={type:"end"},ro=new xs,ah=new Ln,e0=Math.cos(70*bd.DEG2RAD),Ae=new N,qe=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},za=1e-6;class n0 extends gp{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Di,this._lastTargetPosition=new N,this._quat=new Di().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uu,this._sphericalDelta=new Uu,this._scale=1,this._panOffset=new N,this._rotateStart=new Yt,this._rotateEnd=new Yt,this._rotateDelta=new Yt,this._panStart=new Yt,this._panEnd=new Yt,this._panDelta=new Yt,this._dollyStart=new Yt,this._dollyEnd=new Yt,this._dollyDelta=new Yt,this._dollyDirection=new N,this._mouse=new Yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r0.bind(this),this._onPointerDown=i0.bind(this),this._onPointerUp=s0.bind(this),this._onContextMenu=f0.bind(this),this._onMouseWheel=l0.bind(this),this._onKeyDown=c0.bind(this),this._onTouchStart=u0.bind(this),this._onTouchMove=h0.bind(this),this._onMouseDown=o0.bind(this),this._onMouseMove=a0.bind(this),this._interceptControlDown=d0.bind(this),this._interceptControlUp=p0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(oh),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ae.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ro.origin.copy(this.object.position),ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ro.direction))<e0?this.object.lookAt(this.target):(ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),ro.intersectPlane(ah,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>za||this._lastTargetPosition.distanceToSquared(this.target)>za?(this.dispatchEvent(oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Ae.copy(n).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function i0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function r0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function s0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pf),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function o0(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ae.DOLLY;break;case _r.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ae.ROTATE}break;case _r.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Ac)}function a0(s){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function l0(s){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(s.preventDefault(),this.dispatchEvent(Ac),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(pf))}function c0(s){this.enabled!==!1&&this._handleKeyDown(s)}function u0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ae.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ae.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Ac)}function h0(s){switch(this._trackPointer(s),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ae.NONE}}function f0(s){this.enabled!==!1&&s.preventDefault()}function d0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class m0{controls;camera;mode="3d";followTarget=null;followOffset=new N(-15,12,-15);constructor(t,e){this.camera=t,this.controls=new n0(t,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=500,this.controls.maxPolarAngle=Math.PI*.95}setMode(t){switch(this.mode=t,t){case"3d":this.controls.enabled=!0,this.camera.position.set(30,20,30),this.camera.fov=60,this.camera.updateProjectionMatrix();break;case"bev":this.controls.enabled=!0,this.camera.position.set(0,100,.01),this.camera.fov=45,this.camera.updateProjectionMatrix(),this.controls.maxPolarAngle=.01;break;case"follow":this.controls.enabled=!1,this.camera.fov=70,this.camera.updateProjectionMatrix();break}}setFollowTarget(t){this.followTarget=t}update(t){if(this.mode==="follow"&&this.followTarget){const e=this.followTarget.clone().add(this.followOffset);this.camera.position.lerp(e,Math.min(t*5,1)),this.camera.lookAt(this.followTarget)}else this.mode==="bev"?this.controls.maxPolarAngle=.01:this.controls.maxPolarAngle=Math.PI*.95,this.controls.update()}setFollowOffset(t){this.followOffset.copy(t)}reset(){this.setMode("3d"),this.controls.target.set(0,0,0)}dispose(){this.controls.dispose()}}class g0{root=null;maxLevel;maxPointsPerNode;lodBaseDistance;constructor(t={}){this.maxLevel=t.maxLevel??6,this.maxPointsPerNode=t.maxPointsPerNode??8192,this.lodBaseDistance=t.lodBaseDistance??10}build(t){const e=this.computeBounds(t);this.root=this.subdivide(t,e,0)}getVisiblePoints(t,e){if(!this.root)return new Float32Array(0);const i=[];return this.traverse(this.root,t,e,i),new Float32Array(i)}getStats(){if(!this.root)return{totalNodes:0,leafNodes:0,totalPoints:0};const t={totalNodes:0,leafNodes:0,totalPoints:0};return this.collectStats(this.root,t),t}traverse(t,e,i,n){if(!i.intersectsBox(t.bounds))return;const r=new N;t.bounds.getCenter(r);const o=e.position.distanceTo(r),a=this.lodBaseDistance*Math.pow(2,t.level);if(t.isLeaf||o>a||t.level>=this.maxLevel){if(t.points)for(let l=0;l<t.points.length;l++)n.push(t.points[l]);return}for(const l of t.children)l&&this.traverse(l,e,i,n)}subdivide(t,e,i){if(t.length/3<=this.maxPointsPerNode||i>=this.maxLevel)return{bounds:e,children:[null,null,null,null,null,null,null,null],points:this.downsample(t,i),level:i,isLeaf:!0};const r=new N;e.getCenter(r);const o=[];for(let a=0;a<8;a++){const l=this.getChildBounds(e,r,a),c=this.extractPoints(t,l);c.length>0?o[a]=this.subdivide(c,l,i+1):o[a]=null}return{bounds:e,children:o,points:this.downsample(t,i),level:i,isLeaf:!1}}getChildBounds(t,e,i){const n=t.min,r=t.max;return new fe(new N(i&1?e.x:n.x,i&2?e.y:n.y,i&4?e.z:n.z),new N(i&1?r.x:e.x,i&2?r.y:e.y,i&4?r.z:e.z))}extractPoints(t,e){const i=[];for(let n=0;n<t.length;n+=3){const r=t[n],o=t[n+1],a=t[n+2];r>=e.min.x&&r<=e.max.x&&o>=e.min.y&&o<=e.max.y&&a>=e.min.z&&a<=e.max.z&&i.push(r,o,a)}return new Float32Array(i)}downsample(t,e){const i=t.length/3,n=Math.max(1,Math.pow(2,e)),r=Math.floor(i/n),o=new Float32Array(r*3);for(let a=0;a<r;a++){const l=Math.floor(a*n)*3;o[a*3]=t[l],o[a*3+1]=t[l+1],o[a*3+2]=t[l+2]}return o}computeBounds(t){const e=new fe,i=new N;for(let n=0;n<t.length;n+=3)i.set(t[n],t[n+1],t[n+2]),e.expandByPoint(i);return e.expandByScalar(.01),e}collectStats(t,e){if(e.totalNodes++,t.isLeaf)e.leafNodes++,t.points&&(e.totalPoints+=t.points.length/3);else for(const i of t.children)i&&this.collectStats(i,e)}dispose(){this.root=null}}const mf=0,_0=1,v0=2,lh=2,Ga=1.25,ch=1,ls=32,Vo=65535,x0=Math.pow(2,-24),Va=Symbol("SKIP_GENERATION");function y0(s){return s.index?s.index.count:s.attributes.position.count}function Rr(s){return y0(s)/3}function S0(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function M0(s,t){if(!s.index){const e=s.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=S0(e,i);s.setIndex(new xe(n,1));for(let r=0;r<e;r++)n[r]=r}}function gf(s,t){const e=Rr(s),i=t||s.drawRange,n=i.start/3,r=(i.start+i.count)/3,o=Math.max(0,n),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function _f(s,t){if(!s.groups||!s.groups.length)return gf(s,t);const e=[],i=new Set,n=t||s.drawRange,r=n.start/3,o=(n.start+n.count)/3;for(const l of s.groups){const c=l.start/3,u=(l.start+l.count)/3;i.add(Math.max(r,c)),i.add(Math.min(o,u))}const a=Array.from(i.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],u=a[l+1];e.push({offset:Math.floor(c),count:Math.floor(u-c)})}return e}function b0(s,t){const e=Rr(s),i=_f(s,t).sort((o,a)=>o.offset-a.offset),n=i[i.length-1];n.count=Math.min(e-n.offset,n.count);let r=0;return i.forEach(({count:o})=>r+=o),e!==r}function Ha(s,t,e,i,n){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,f=1/0,h=1/0,d=1/0,g=-1/0,_=-1/0,m=-1/0;for(let p=t*6,y=(t+e)*6;p<y;p+=6){const x=s[p+0],v=s[p+1],b=x-v,T=x+v;b<r&&(r=b),T>l&&(l=T),x<f&&(f=x),x>g&&(g=x);const E=s[p+2],C=s[p+3],M=E-C,S=E+C;M<o&&(o=M),S>c&&(c=S),E<h&&(h=E),E>_&&(_=E);const D=s[p+4],w=s[p+5],U=D-w,L=D+w;U<a&&(a=U),L>u&&(u=L),D<d&&(d=D),D>m&&(m=D)}i[0]=r,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=u,n[0]=f,n[1]=h,n[2]=d,n[3]=g,n[4]=_,n[5]=m}function E0(s,t=null,e=null,i=null){const n=s.attributes.position,r=s.index?s.index.array:null,o=Rr(s),a=n.normalized;let l;t===null?(l=new Float32Array(o*6*4),e=0,i=o):(l=t,e=e||0,i=i||o);const c=n.array,u=n.offset||0;let f=3;n.isInterleavedBufferAttribute&&(f=n.data.stride);const h=["getX","getY","getZ"];for(let d=e;d<e+i;d++){const g=d*3,_=d*6;let m=g+0,p=g+1,y=g+2;r&&(m=r[m],p=r[p],y=r[y]),a||(m=m*f+u,p=p*f+u,y=y*f+u);for(let x=0;x<3;x++){let v,b,T;a?(v=n[h[x]](m),b=n[h[x]](p),T=n[h[x]](y)):(v=c[m+x],b=c[p+x],T=c[y+x]);let E=v;b<E&&(E=b),T<E&&(E=T);let C=v;b>C&&(C=b),T>C&&(C=T);const M=(C-E)/2,S=x*2;l[_+S+0]=E+M,l[_+S+1]=M+(Math.abs(E)+M)*x0}}return l}function _e(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function uh(s){let t=-1,e=-1/0;for(let i=0;i<3;i++){const n=s[i+3]-s[i];n>e&&(e=n,t=i)}return t}function hh(s,t){t.set(s)}function fh(s,t,e){let i,n;for(let r=0;r<3;r++){const o=r+3;i=s[r],n=t[r],e[r]=i<n?i:n,i=s[o],n=t[o],e[o]=i>n?i:n}}function so(s,t,e){for(let i=0;i<3;i++){const n=t[s+2*i],r=t[s+2*i+1],o=n-r,a=n+r;o<e[i]&&(e[i]=o),a>e[i+3]&&(e[i+3]=a)}}function Zr(s){const t=s[3]-s[0],e=s[4]-s[1],i=s[5]-s[2];return 2*(t*e+e*i+i*t)}const Hn=32,T0=(s,t)=>s.candidate-t.candidate,oi=new Array(Hn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),oo=new Float32Array(6);function A0(s,t,e,i,n,r){let o=-1,a=0;if(r===mf)o=uh(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===_0)o=uh(s),o!==-1&&(a=w0(e,i,n,o));else if(r===v0){const l=Zr(s);let c=Ga*n;const u=i*6,f=(i+n)*6;for(let h=0;h<3;h++){const d=t[h],m=(t[h+3]-d)/Hn;if(n<Hn/4){const p=[...oi];p.length=n;let y=0;for(let v=u;v<f;v+=6,y++){const b=p[y];b.candidate=e[v+2*h],b.count=0;const{bounds:T,leftCacheBounds:E,rightCacheBounds:C}=b;for(let M=0;M<3;M++)C[M]=1/0,C[M+3]=-1/0,E[M]=1/0,E[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0;so(v,e,T)}p.sort(T0);let x=n;for(let v=0;v<x;v++){const b=p[v];for(;v+1<x&&p[v+1].candidate===b.candidate;)p.splice(v+1,1),x--}for(let v=u;v<f;v+=6){const b=e[v+2*h];for(let T=0;T<x;T++){const E=p[T];b>=E.candidate?so(v,e,E.rightCacheBounds):(so(v,e,E.leftCacheBounds),E.count++)}}for(let v=0;v<x;v++){const b=p[v],T=b.count,E=n-b.count,C=b.leftCacheBounds,M=b.rightCacheBounds;let S=0;T!==0&&(S=Zr(C)/l);let D=0;E!==0&&(D=Zr(M)/l);const w=ch+Ga*(S*T+D*E);w<c&&(o=h,c=w,a=b.candidate)}}else{for(let x=0;x<Hn;x++){const v=oi[x];v.count=0,v.candidate=d+m+x*m;const b=v.bounds;for(let T=0;T<3;T++)b[T]=1/0,b[T+3]=-1/0}for(let x=u;x<f;x+=6){let T=~~((e[x+2*h]-d)/m);T>=Hn&&(T=Hn-1);const E=oi[T];E.count++,so(x,e,E.bounds)}const p=oi[Hn-1];hh(p.bounds,p.rightCacheBounds);for(let x=Hn-2;x>=0;x--){const v=oi[x],b=oi[x+1];fh(v.bounds,b.rightCacheBounds,v.rightCacheBounds)}let y=0;for(let x=0;x<Hn-1;x++){const v=oi[x],b=v.count,T=v.bounds,C=oi[x+1].rightCacheBounds;b!==0&&(y===0?hh(T,oo):fh(T,oo,oo)),y+=b;let M=0,S=0;y!==0&&(M=Zr(oo)/l);const D=n-y;D!==0&&(S=Zr(C)/l);const w=ch+Ga*(M*y+S*D);w<c&&(o=h,c=w,a=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function w0(s,t,e,i){let n=0;for(let r=t,o=t+e;r<o;r++)n+=s[r*6+i*2];return n/e}class Wa{constructor(){this.boundingData=new Float32Array(6)}}function C0(s,t,e,i,n,r){let o=i,a=i+n-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let f=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=f}for(let u=0;u<6;u++){let f=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=f}o++,a--}else return o}}function R0(s,t,e,i,n,r){let o=i,a=i+n-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){let u=s[o];s[o]=s[a],s[a]=u;for(let f=0;f<6;f++){let h=e[o*6+f];e[o*6+f]=e[a*6+f],e[a*6+f]=h}o++,a--}else return o}}function Ke(s,t){return t[s+15]===65535}function nn(s,t){return t[s+6]}function gn(s,t){return t[s+14]}function _n(s){return s+8}function vn(s,t){return t[s+6]}function vf(s,t){return t[s+7]}let xf,rs,wo,yf;const P0=Math.pow(2,32);function jl(s){return"count"in s?1:1+jl(s.left)+jl(s.right)}function D0(s,t,e){return xf=new Float32Array(e),rs=new Uint32Array(e),wo=new Uint16Array(e),yf=new Uint8Array(e),ql(s,t)}function ql(s,t){const e=s/4,i=s/2,n="count"in t,r=t.boundingData;for(let o=0;o<6;o++)xf[e+o]=r[o];if(n)if(t.buffer){const o=t.buffer;yf.set(new Uint8Array(o),s);for(let a=s,l=s+o.byteLength;a<l;a+=ls){const c=a/2;Ke(c,wo)||(rs[a/4+6]+=e)}return s+o.byteLength}else{const o=t.offset,a=t.count;return rs[e+6]=o,wo[i+14]=a,wo[i+15]=Vo,s+ls}else{const o=t.left,a=t.right,l=t.splitAxis;let c;if(c=ql(s+ls,o),c/4>P0)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return rs[e+6]=c/4,c=ql(c,a),rs[e+7]=l,c}}function U0(s,t){const e=(s.index?s.index.count:s.attributes.position.count)/3,i=e>2**16,n=i?4:2,r=t?new SharedArrayBuffer(e*n):new ArrayBuffer(e*n),o=i?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function L0(s,t,e,i,n){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:u}=n,f=s._indirectBuffer,h=s.geometry,d=h.index?h.index.array:null,g=u?R0:C0,_=Rr(h),m=new Float32Array(6);let p=!1;const y=new Wa;return Ha(t,e,i,y.boundingData,m),v(y,e,i,m),y;function x(b){c&&c(b/_)}function v(b,T,E,C=null,M=0){if(!p&&M>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),E<=a||M>=r)return x(T+E),b.offset=T,b.count=E,b;const S=A0(b.boundingData,C,t,T,E,l);if(S.axis===-1)return x(T+E),b.offset=T,b.count=E,b;const D=g(f,d,t,T,E,S);if(D===T||D===T+E)x(T+E),b.offset=T,b.count=E;else{b.splitAxis=S.axis;const w=new Wa,U=T,L=D-T;b.left=w,Ha(t,U,L,w.boundingData,m),v(w,U,L,m,M+1);const z=new Wa,B=D,$=E-L;b.right=z,Ha(t,B,$,z.boundingData,m),v(z,B,$,m,M+1)}return b}}function I0(s,t){const e=s.geometry;t.indirect&&(s._indirectBuffer=U0(e,t.useSharedArrayBuffer),b0(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||M0(e,t);const i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=E0(e),r=t.indirect?gf(e,t.range):_f(e,t.range);s._roots=r.map(o=>{const a=L0(s,n,o.offset,o.count,t),l=jl(a),c=new i(ls*l);return D0(0,a,c),c})}class Zn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,n=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(t,e){let i=1/0,n=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(t){return this.min>t.max||t.min>this.max}}Zn.prototype.setFromBox=(function(){const s=new N;return function(e,i){const n=i.min,r=i.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){s.x=n.x*l+r.x*(1-l),s.y=n.y*c+r.y*(1-c),s.z=n.z*u+r.z*(1-u);const f=e.dot(s);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}})();const F0=(function(){const s=new N,t=new N,e=new N;return function(n,r,o){const a=n.start,l=s,c=r.start,u=t;e.subVectors(a,c),s.subVectors(n.end,n.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(l),d=u.dot(u),g=e.dot(l),m=l.dot(l)*d-h*h;let p,y;m!==0?p=(f*h-g*d)/m:p=0,y=(f+p*h)/d,o.x=p,o.y=y}})(),wc=(function(){const s=new Yt,t=new N,e=new N;return function(n,r,o,a){F0(n,r,s);let l=s.x,c=s.y;if(l>=0&&l<=1&&c>=0&&c<=1){n.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),n.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?n.at(0,o):n.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=n.start:u=n.end;let f;c<0?f=r.start:f=r.end;const h=t,d=e;if(n.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=d.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(d);return}}}})(),N0=(function(){const s=new N,t=new N,e=new Ln,i=new Yn;return function(r,o){const{radius:a,center:l}=r,{a:c,b:u,c:f}=o;if(i.start=c,i.end=u,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a||(i.start=c,i.end=f,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a)||(i.start=u,i.end=f,i.closestPointToPoint(l,!0,s).distanceTo(l)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=a){const p=_.projectPoint(l,t);if(o.containsPoint(p))return!0}return!1}})(),B0=1e-15;function Xa(s){return Math.abs(s)<B0}class Cn extends Ie{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new N),this.satBounds=new Array(4).fill().map(()=>new Zn),this.points=[this.a,this.b,this.c],this.sphere=new sn,this.plane=new Ln,this.needsUpdate=!0}intersectsSphere(t){return N0(t,this)}update(){const t=this.a,e=this.b,i=this.c,n=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,n);const c=r[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,n);const f=r[2],h=o[2];f.subVectors(e,i),h.setFromPoints(f,n);const d=r[3],g=o[3];d.subVectors(i,t),g.setFromPoints(d,n),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Cn.prototype.closestPointToSegment=(function(){const s=new N,t=new N,e=new Yn;return function(n,r=null,o=null){const{start:a,end:l}=n,c=this.points;let u,f=1/0;for(let h=0;h<3;h++){const d=(h+1)%3;e.start.copy(c[h]),e.end.copy(c[d]),wc(e,n,s,t),u=s.distanceToSquared(t),u<f&&(f=u,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<f&&(f=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(l,s),u=l.distanceToSquared(s),u<f&&(f=u,r&&r.copy(s),o&&o.copy(l)),Math.sqrt(f)}})();Cn.prototype.intersectsTriangle=(function(){const s=new Cn,t=new Array(3),e=new Array(3),i=new Zn,n=new Zn,r=new N,o=new N,a=new N,l=new N,c=new N,u=new Yn,f=new Yn,h=new Yn,d=new N;function g(_,m,p){const y=_.points;let x=0,v=-1;for(let b=0;b<3;b++){const{start:T,end:E}=u;T.copy(y[b]),E.copy(y[(b+1)%3]),u.delta(o);const C=Xa(m.distanceToPoint(T));if(Xa(m.normal.dot(o))&&C){p.copy(u),x=2;break}const M=m.intersectLine(u,d);if(!M&&C&&d.copy(T),(M||C)&&!Xa(d.distanceTo(E))){if(x<=1)(x===1?p.start:p.end).copy(d),C&&(v=x);else if(x>=2){(v===1?p.start:p.end).copy(d),x=2;break}if(x++,x===2&&v===-1)break}}return x}return function(m,p=null,y=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(s.copy(m),s.update(),m=s);const x=this.plane,v=m.plane;if(Math.abs(x.normal.dot(v.normal))>1-1e-10){const b=this.satBounds,T=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let M=0;M<4;M++){const S=b[M],D=T[M];if(i.setFromPoints(D,e),S.isSeparated(i))return!1}const E=m.satBounds,C=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){const S=E[M],D=C[M];if(i.setFromPoints(D,t),S.isSeparated(i))return!1}for(let M=0;M<4;M++){const S=T[M];for(let D=0;D<4;D++){const w=C[D];if(r.crossVectors(S,w),i.setFromPoints(r,t),n.setFromPoints(r,e),i.isSeparated(n))return!1}}return p&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const b=g(this,v,f);if(b===1&&m.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(b!==2)return!1;const T=g(m,x,h);if(T===1&&this.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(T!==2)return!1;if(f.delta(a),h.delta(l),a.dot(l)<0){let U=h.start;h.start=h.end,h.end=U}const E=f.start.dot(a),C=f.end.dot(a),M=h.start.dot(a),S=h.end.dot(a),D=C<M,w=E<S;return E!==S&&M!==C&&D===w?!1:(p&&(c.subVectors(f.start,h.start),c.dot(a)>0?p.start.copy(f.start):p.start.copy(h.start),c.subVectors(f.end,h.end),c.dot(a)<0?p.end.copy(f.end):p.end.copy(h.end)),!0)}}})();Cn.prototype.distanceToPoint=(function(){const s=new N;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Cn.prototype.distanceToTriangle=(function(){const s=new N,t=new N,e=["a","b","c"],i=new Yn,n=new Yn;return function(o,a=null,l=null){const c=a||l?i:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let f=0;f<3;f++){let h;const d=e[f],g=o[d];this.closestPointToPoint(g,s),h=g.distanceToSquared(s),h<u&&(u=h,a&&a.copy(s),l&&l.copy(g));const _=this[d];o.closestPointToPoint(_,s),h=_.distanceToSquared(s),h<u&&(u=h,a&&a.copy(_),l&&l.copy(s))}for(let f=0;f<3;f++){const h=e[f],d=e[(f+1)%3];i.set(this[h],this[d]);for(let g=0;g<3;g++){const _=e[g],m=e[(g+1)%3];n.set(o[_],o[m]),wc(i,n,s,t);const p=s.distanceToSquared(t);p<u&&(u=p,a&&a.copy(s),l&&l.copy(t))}}return Math.sqrt(u)}})();class Ve{constructor(t,e,i){this.isOrientedBox=!0,this.min=new N,this.max=new N,this.matrix=new Qt,this.invMatrix=new Qt,this.points=new Array(8).fill().map(()=>new N),this.satAxes=new Array(3).fill().map(()=>new N),this.satBounds=new Array(3).fill().map(()=>new Zn),this.alignedSatBounds=new Array(3).fill().map(()=>new Zn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ve.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,i=this.max,n=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*c|2*u|4*f,d=n[h];d.x=c?i.x:e.x,d.y=u?i.y:e.y,d.z=f?i.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=n[0];for(let c=0;c<3;c++){const u=o[c],f=r[c],h=1<<c,d=n[h];u.subVectors(a,d),f.setFromPoints(u,n)}const l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ve.prototype.intersectsBox=(function(){const s=new Zn;return function(e){this.needsUpdate&&this.update();const i=e.min,n=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=i.x,s.max=n.x,a[0].isSeparated(s)||(s.min=i.y,s.max=n.y,a[1].isSeparated(s))||(s.min=i.z,s.max=n.z,a[2].isSeparated(s)))return!1;for(let l=0;l<3;l++){const c=o[l],u=r[l];if(s.setFromBox(c,e),u.isSeparated(s))return!1}return!0}})();Ve.prototype.intersectsTriangle=(function(){const s=new Cn,t=new Array(3),e=new Zn,i=new Zn,n=new N;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){const d=a[h],g=l[h];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const c=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){const d=c[h],g=u[h];if(e.setFromPoints(g,f),d.isSeparated(e))return!1}for(let h=0;h<3;h++){const d=l[h];for(let g=0;g<4;g++){const _=u[g];if(n.crossVectors(d,_),e.setFromPoints(n,t),i.setFromPoints(n,f),e.isSeparated(i))return!1}}return!0}})();Ve.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ve.prototype.distanceToPoint=(function(){const s=new N;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Ve.prototype.distanceToBox=(function(){const s=["x","y","z"],t=new Array(12).fill().map(()=>new Yn),e=new Array(12).fill().map(()=>new Yn),i=new N,n=new N;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(n),this.closestPointToPoint(n,i),o.closestPointToPoint(i,n),l&&l.copy(i),c&&c.copy(n)),0;const u=a*a,f=o.min,h=o.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];n.copy(p).clamp(f,h);const y=p.distanceToSquared(n);if(y<g&&(g=y,l&&l.copy(p),c&&c.copy(n),y<u))return Math.sqrt(y)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const x=(m+1)%3,v=(m+2)%3,b=p<<x|y<<v,T=1<<m|p<<x|y<<v,E=d[b],C=d[T];t[_].set(E,C);const S=s[m],D=s[x],w=s[v],U=e[_],L=U.start,z=U.end;L[S]=f[S],L[D]=p?f[D]:h[D],L[w]=y?f[w]:h[D],z[S]=h[S],z[D]=p?f[D]:h[D],z[w]=y?f[w]:h[D],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){n.x=m?h.x:f.x,n.y=p?h.y:f.y,n.z=y?h.z:f.z,this.closestPointToPoint(n,i);const x=n.distanceToSquared(i);if(x<g&&(g=x,l&&l.copy(i),c&&c.copy(n),x<u))return Math.sqrt(x)}for(let m=0;m<12;m++){const p=t[m];for(let y=0;y<12;y++){const x=e[y];wc(p,x,i,n);const v=i.distanceToSquared(n);if(v<g&&(g=v,l&&l.copy(i),c&&c.copy(n),v<u))return Math.sqrt(v)}}return Math.sqrt(g)}})();class Cc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class O0 extends Cc{constructor(){super(()=>new Cn)}}const xn=new O0;class k0{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const de=new k0;let ci,gr;const nr=[],ao=new Cc(()=>new fe);function z0(s,t,e,i,n,r){ci=ao.getPrimitive(),gr=ao.getPrimitive(),nr.push(ci,gr),de.setBuffer(s._roots[t]);const o=Kl(0,s.geometry,e,i,n,r);de.clearBuffer(),ao.releasePrimitive(ci),ao.releasePrimitive(gr),nr.pop(),nr.pop();const a=nr.length;return a>0&&(gr=nr[a-1],ci=nr[a-2]),o}function Kl(s,t,e,i,n=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=de;let u=s*2;if(Ke(u,l)){const h=nn(s,c),d=gn(u,l);return _e(s,a,ci),i(h,d,!1,o,r+s,ci)}else{let S=function(w){const{uint16Array:U,uint32Array:L}=de;let z=w*2;for(;!Ke(z,U);)w=_n(w),z=w*2;return nn(w,L)},D=function(w){const{uint16Array:U,uint32Array:L}=de;let z=w*2;for(;!Ke(z,U);)w=vn(w,L),z=w*2;return nn(w,L)+gn(z,U)};const h=_n(s),d=vn(s,c);let g=h,_=d,m,p,y,x;if(n&&(y=ci,x=gr,_e(g,a,y),_e(_,a,x),m=n(y),p=n(x),p<m)){g=d,_=h;const w=m;m=p,p=w,y=x}y||(y=ci,_e(g,a,y));const v=Ke(g*2,l),b=e(y,v,m,o+1,r+g);let T;if(b===lh){const w=S(g),L=D(g)-w;T=i(w,L,!0,o+1,r+g,y)}else T=b&&Kl(g,t,e,i,n,r,o+1);if(T)return!0;x=gr,_e(_,a,x);const E=Ke(_*2,l),C=e(x,E,p,o+1,r+_);let M;if(C===lh){const w=S(_),L=D(_)-w;M=i(w,L,!0,o+1,r+_,x)}else M=C&&Kl(_,t,e,i,n,r,o+1);return!!M}}const Jr=new N,Ya=new N;function G0(s,t,e={},i=0,n=1/0){const r=i*i,o=n*n;let a=1/0,l=null;if(s.shapecast({boundsTraverseOrder:u=>(Jr.copy(t).clamp(u.min,u.max),Jr.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Jr);const h=t.distanceToSquared(Jr);return h<a&&(Ya.copy(Jr),a=h,l=f),h<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(Ya):e.point=Ya.clone(),e.distance=c,e.faceIndex=l,e}const ir=new N,rr=new N,sr=new N,lo=new Yt,co=new Yt,uo=new Yt,dh=new N,ph=new N,mh=new N,ho=new N;function V0(s,t,e,i,n,r,o,a){let l;if(r===Ge?l=s.intersectTriangle(i,e,t,!0,n):l=s.intersectTriangle(t,e,i,r!==dn,n),l===null)return null;const c=s.origin.distanceTo(n);return c<o||c>a?null:{distance:c,point:n.clone()}}function H0(s,t,e,i,n,r,o,a,l,c,u){ir.fromBufferAttribute(t,r),rr.fromBufferAttribute(t,o),sr.fromBufferAttribute(t,a);const f=V0(s,ir,rr,sr,ho,l,c,u);if(f){i&&(lo.fromBufferAttribute(i,r),co.fromBufferAttribute(i,o),uo.fromBufferAttribute(i,a),f.uv=Ie.getInterpolation(ho,ir,rr,sr,lo,co,uo,new Yt)),n&&(lo.fromBufferAttribute(n,r),co.fromBufferAttribute(n,o),uo.fromBufferAttribute(n,a),f.uv1=Ie.getInterpolation(ho,ir,rr,sr,lo,co,uo,new Yt)),e&&(dh.fromBufferAttribute(e,r),ph.fromBufferAttribute(e,o),mh.fromBufferAttribute(e,a),f.normal=Ie.getInterpolation(ho,ir,rr,sr,dh,ph,mh,new N),f.normal.dot(s.direction)>0&&f.normal.multiplyScalar(-1));const h={a:r,b:o,c:a,normal:new N,materialIndex:0};Ie.getNormal(ir,rr,sr,h.normal),f.face=h,f.faceIndex=r}return f}function Ho(s,t,e,i,n,r,o){const a=i*3;let l=a+0,c=a+1,u=a+2;const f=s.index;s.index&&(l=f.getX(l),c=f.getX(c),u=f.getX(u));const{position:h,normal:d,uv:g,uv1:_}=s.attributes,m=H0(e,h,d,g,_,l,c,u,t,r,o);return m?(m.faceIndex=i,n&&n.push(m),m):null}function Ee(s,t,e,i){const n=s.a,r=s.b,o=s.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),r.x=i.getX(l),r.y=i.getY(l),r.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function W0(s,t,e,i,n,r,o,a){const{geometry:l,_indirectBuffer:c}=s;for(let u=i,f=i+n;u<f;u++)Ho(l,t,e,u,r,o,a)}function X0(s,t,e,i,n,r,o){const{geometry:a,_indirectBuffer:l}=s;let c=1/0,u=null;for(let f=i,h=i+n;f<h;f++){let d;d=Ho(a,t,e,f,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function Y0(s,t,e,i,n,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=s,f=t+s;u<f;u++){let h;if(h=u,Ee(o,h*3,l,c),o.needsUpdate=!0,i(o,h,n,r))return!0}return!1}function j0(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,i=e.index?e.index.array:null,n=e.attributes.position;let r,o,a,l,c=0;const u=s._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,c),c+=r.byteLength;function f(h,d,g=!1){const _=h*2;if(a[_+15]===Vo){const p=o[h+6],y=a[_+14];let x=1/0,v=1/0,b=1/0,T=-1/0,E=-1/0,C=-1/0;for(let M=3*p,S=3*(p+y);M<S;M++){let D=i[M];const w=n.getX(D),U=n.getY(D),L=n.getZ(D);w<x&&(x=w),w>T&&(T=w),U<v&&(v=U),U>E&&(E=U),L<b&&(b=L),L>C&&(C=L)}return l[h+0]!==x||l[h+1]!==v||l[h+2]!==b||l[h+3]!==T||l[h+4]!==E||l[h+5]!==C?(l[h+0]=x,l[h+1]=v,l[h+2]=b,l[h+3]=T,l[h+4]=E,l[h+5]=C,!0):!1}else{const p=h+8,y=o[h+6],x=p+d,v=y+d;let b=g,T=!1,E=!1;t?b||(T=t.has(x),E=t.has(v),b=!T&&!E):(T=!0,E=!0);const C=b||T,M=b||E;let S=!1;C&&(S=f(p,d,b));let D=!1;M&&(D=f(y,d,b));const w=S||D;if(w)for(let U=0;U<3;U++){const L=p+U,z=y+U,B=l[L],$=l[L+3],W=l[z],Y=l[z+3];l[h+U]=B<W?B:W,l[h+U+3]=$>Y?$:Y}return w}}}function pi(s,t,e,i,n){let r,o,a,l,c,u;const f=1/e.direction.x,h=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,_=e.origin.y,m=e.origin.z;let p=t[s],y=t[s+3],x=t[s+1],v=t[s+3+1],b=t[s+2],T=t[s+3+2];return f>=0?(r=(p-g)*f,o=(y-g)*f):(r=(y-g)*f,o=(p-g)*f),h>=0?(a=(x-_)*h,l=(v-_)*h):(a=(v-_)*h,l=(x-_)*h),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(b-m)*d,u=(T-m)*d):(c=(T-m)*d,u=(b-m)*d),r>u||c>o)?!1:((c>r||r!==r)&&(r=c),(u<o||o!==o)&&(o=u),r<=n&&o>=i)}function q0(s,t,e,i,n,r,o,a){const{geometry:l,_indirectBuffer:c}=s;for(let u=i,f=i+n;u<f;u++){let h=c?c[u]:u;Ho(l,t,e,h,r,o,a)}}function K0(s,t,e,i,n,r,o){const{geometry:a,_indirectBuffer:l}=s;let c=1/0,u=null;for(let f=i,h=i+n;f<h;f++){let d;d=Ho(a,t,e,l?l[f]:f,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function Z0(s,t,e,i,n,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=s,f=t+s;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),Ee(o,h*3,l,c),o.needsUpdate=!0,i(o,h,n,r))return!0}return!1}function J0(s,t,e,i,n,r,o){de.setBuffer(s._roots[t]),Zl(0,s,e,i,n,r,o),de.clearBuffer()}function Zl(s,t,e,i,n,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=de,u=s*2;if(Ke(u,l)){const h=nn(s,c),d=gn(u,l);W0(t,e,i,h,d,n,r,o)}else{const h=_n(s);pi(h,a,i,r,o)&&Zl(h,t,e,i,n,r,o);const d=vn(s,c);pi(d,a,i,r,o)&&Zl(d,t,e,i,n,r,o)}}const $0=["x","y","z"];function Q0(s,t,e,i,n,r){de.setBuffer(s._roots[t]);const o=Jl(0,s,e,i,n,r);return de.clearBuffer(),o}function Jl(s,t,e,i,n,r){const{float32Array:o,uint16Array:a,uint32Array:l}=de;let c=s*2;if(Ke(c,a)){const f=nn(s,l),h=gn(c,a);return X0(t,e,i,f,h,n,r)}else{const f=vf(s,l),h=$0[f],g=i.direction[h]>=0;let _,m;g?(_=_n(s),m=vn(s,l)):(_=vn(s,l),m=_n(s));const y=pi(_,o,i,n,r)?Jl(_,t,e,i,n,r):null;if(y){const b=y.point[h];if(g?b<=o[m+f]:b>=o[m+f+3])return y}const v=pi(m,o,i,n,r)?Jl(m,t,e,i,n,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}const fo=new fe,or=new Cn,ar=new Cn,$r=new Qt,gh=new Ve,po=new Ve;function tx(s,t,e,i){de.setBuffer(s._roots[t]);const n=$l(0,s,e,i);return de.clearBuffer(),n}function $l(s,t,e,i,n=null){const{float32Array:r,uint16Array:o,uint32Array:a}=de;let l=s*2;if(n===null&&(e.boundingBox||e.computeBoundingBox(),gh.set(e.boundingBox.min,e.boundingBox.max,i),n=gh),Ke(l,o)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,_=nn(s,a),m=gn(l,o);if($r.copy(i).invert(),e.boundsTree)return _e(s,r,po),po.matrix.copy($r),po.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>po.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(i),y.b.applyMatrix4(i),y.c.applyMatrix4(i),y.needsUpdate=!0;for(let x=_*3,v=(m+_)*3;x<v;x+=3)if(Ee(ar,x,f,h),ar.needsUpdate=!0,y.intersectsTriangle(ar))return!0;return!1}});for(let p=_*3,y=(m+_)*3;p<y;p+=3){Ee(or,p,f,h),or.a.applyMatrix4($r),or.b.applyMatrix4($r),or.c.applyMatrix4($r),or.needsUpdate=!0;for(let x=0,v=d.count;x<v;x+=3)if(Ee(ar,x,d,g),ar.needsUpdate=!0,or.intersectsTriangle(ar))return!0}}else{const u=s+8,f=a[s+6];return _e(u,r,fo),!!(n.intersectsBox(fo)&&$l(u,t,e,i,n)||(_e(f,r,fo),n.intersectsBox(fo)&&$l(f,t,e,i,n)))}}const mo=new Qt,ja=new Ve,Qr=new Ve,ex=new N,nx=new N,ix=new N,rx=new N;function sx(s,t,e,i={},n={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ja.set(t.boundingBox.min,t.boundingBox.max,e),ja.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,f=t.index,h=xn.getPrimitive(),d=xn.getPrimitive();let g=ex,_=nx,m=null,p=null;n&&(m=ix,p=rx);let y=1/0,x=null,v=null;return mo.copy(e).invert(),Qr.matrix.copy(mo),s.shapecast({boundsTraverseOrder:b=>ja.distanceToBox(b),intersectsBounds:(b,T,E)=>E<y&&E<o?(T&&(Qr.min.copy(b.min),Qr.max.copy(b.max),Qr.needsUpdate=!0),!0):!1,intersectsRange:(b,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>Qr.distanceToBox(C),intersectsBounds:(C,M,S)=>S<y&&S<o,intersectsRange:(C,M)=>{for(let S=C,D=C+M;S<D;S++){Ee(d,3*S,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let w=b,U=b+T;w<U;w++){Ee(h,3*w,c,l),h.needsUpdate=!0;const L=h.distanceToTriangle(d,g,m);if(L<y&&(_.copy(g),p&&p.copy(m),y=L,x=w,v=S),L<r)return!0}}}});{const E=Rr(t);for(let C=0,M=E;C<M;C++){Ee(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=b,D=b+T;S<D;S++){Ee(h,3*S,c,l),h.needsUpdate=!0;const w=h.distanceToTriangle(d,g,m);if(w<y&&(_.copy(g),p&&p.copy(m),y=w,x=S,v=C),w<r)return!0}}}}}),xn.releasePrimitive(h),xn.releasePrimitive(d),y===1/0?null:(i.point?i.point.copy(_):i.point=_.clone(),i.distance=y,i.faceIndex=x,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(mo),_.applyMatrix4(mo),n.distance=_.sub(n.point).length(),n.faceIndex=v),i)}function ox(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,i=e.index?e.index.array:null,n=e.attributes.position;let r,o,a,l,c=0;const u=s._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),f(0,c),c+=r.byteLength;function f(h,d,g=!1){const _=h*2;if(a[_+15]===Vo){const p=o[h+6],y=a[_+14];let x=1/0,v=1/0,b=1/0,T=-1/0,E=-1/0,C=-1/0;for(let M=p,S=p+y;M<S;M++){const D=3*s.resolveTriangleIndex(M);for(let w=0;w<3;w++){let U=D+w;U=i?i[U]:U;const L=n.getX(U),z=n.getY(U),B=n.getZ(U);L<x&&(x=L),L>T&&(T=L),z<v&&(v=z),z>E&&(E=z),B<b&&(b=B),B>C&&(C=B)}}return l[h+0]!==x||l[h+1]!==v||l[h+2]!==b||l[h+3]!==T||l[h+4]!==E||l[h+5]!==C?(l[h+0]=x,l[h+1]=v,l[h+2]=b,l[h+3]=T,l[h+4]=E,l[h+5]=C,!0):!1}else{const p=h+8,y=o[h+6],x=p+d,v=y+d;let b=g,T=!1,E=!1;t?b||(T=t.has(x),E=t.has(v),b=!T&&!E):(T=!0,E=!0);const C=b||T,M=b||E;let S=!1;C&&(S=f(p,d,b));let D=!1;M&&(D=f(y,d,b));const w=S||D;if(w)for(let U=0;U<3;U++){const L=p+U,z=y+U,B=l[L],$=l[L+3],W=l[z],Y=l[z+3];l[h+U]=B<W?B:W,l[h+U+3]=$>Y?$:Y}return w}}}function ax(s,t,e,i,n,r,o){de.setBuffer(s._roots[t]),Ql(0,s,e,i,n,r,o),de.clearBuffer()}function Ql(s,t,e,i,n,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=de,u=s*2;if(Ke(u,l)){const h=nn(s,c),d=gn(u,l);q0(t,e,i,h,d,n,r,o)}else{const h=_n(s);pi(h,a,i,r,o)&&Ql(h,t,e,i,n,r,o);const d=vn(s,c);pi(d,a,i,r,o)&&Ql(d,t,e,i,n,r,o)}}const lx=["x","y","z"];function cx(s,t,e,i,n,r){de.setBuffer(s._roots[t]);const o=tc(0,s,e,i,n,r);return de.clearBuffer(),o}function tc(s,t,e,i,n,r){const{float32Array:o,uint16Array:a,uint32Array:l}=de;let c=s*2;if(Ke(c,a)){const f=nn(s,l),h=gn(c,a);return K0(t,e,i,f,h,n,r)}else{const f=vf(s,l),h=lx[f],g=i.direction[h]>=0;let _,m;g?(_=_n(s),m=vn(s,l)):(_=vn(s,l),m=_n(s));const y=pi(_,o,i,n,r)?tc(_,t,e,i,n,r):null;if(y){const b=y.point[h];if(g?b<=o[m+f]:b>=o[m+f+3])return y}const v=pi(m,o,i,n,r)?tc(m,t,e,i,n,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}const go=new fe,lr=new Cn,cr=new Cn,ts=new Qt,_h=new Ve,_o=new Ve;function ux(s,t,e,i){de.setBuffer(s._roots[t]);const n=ec(0,s,e,i);return de.clearBuffer(),n}function ec(s,t,e,i,n=null){const{float32Array:r,uint16Array:o,uint32Array:a}=de;let l=s*2;if(n===null&&(e.boundingBox||e.computeBoundingBox(),_h.set(e.boundingBox.min,e.boundingBox.max,i),n=_h),Ke(l,o)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,_=nn(s,a),m=gn(l,o);if(ts.copy(i).invert(),e.boundsTree)return _e(s,r,_o),_o.matrix.copy(ts),_o.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>_o.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(i),y.b.applyMatrix4(i),y.c.applyMatrix4(i),y.needsUpdate=!0;for(let x=_,v=m+_;x<v;x++)if(Ee(cr,3*t.resolveTriangleIndex(x),f,h),cr.needsUpdate=!0,y.intersectsTriangle(cr))return!0;return!1}});for(let p=_,y=m+_;p<y;p++){const x=t.resolveTriangleIndex(p);Ee(lr,3*x,f,h),lr.a.applyMatrix4(ts),lr.b.applyMatrix4(ts),lr.c.applyMatrix4(ts),lr.needsUpdate=!0;for(let v=0,b=d.count;v<b;v+=3)if(Ee(cr,v,d,g),cr.needsUpdate=!0,lr.intersectsTriangle(cr))return!0}}else{const u=s+8,f=a[s+6];return _e(u,r,go),!!(n.intersectsBox(go)&&ec(u,t,e,i,n)||(_e(f,r,go),n.intersectsBox(go)&&ec(f,t,e,i,n)))}}const vo=new Qt,qa=new Ve,es=new Ve,hx=new N,fx=new N,dx=new N,px=new N;function mx(s,t,e,i={},n={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),qa.set(t.boundingBox.min,t.boundingBox.max,e),qa.needsUpdate=!0;const a=s.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,f=t.index,h=xn.getPrimitive(),d=xn.getPrimitive();let g=hx,_=fx,m=null,p=null;n&&(m=dx,p=px);let y=1/0,x=null,v=null;return vo.copy(e).invert(),es.matrix.copy(vo),s.shapecast({boundsTraverseOrder:b=>qa.distanceToBox(b),intersectsBounds:(b,T,E)=>E<y&&E<o?(T&&(es.min.copy(b.min),es.max.copy(b.max),es.needsUpdate=!0),!0):!1,intersectsRange:(b,T)=>{if(t.boundsTree){const E=t.boundsTree;return E.shapecast({boundsTraverseOrder:C=>es.distanceToBox(C),intersectsBounds:(C,M,S)=>S<y&&S<o,intersectsRange:(C,M)=>{for(let S=C,D=C+M;S<D;S++){const w=E.resolveTriangleIndex(S);Ee(d,3*w,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let U=b,L=b+T;U<L;U++){const z=s.resolveTriangleIndex(U);Ee(h,3*z,c,l),h.needsUpdate=!0;const B=h.distanceToTriangle(d,g,m);if(B<y&&(_.copy(g),p&&p.copy(m),y=B,x=U,v=S),B<r)return!0}}}})}else{const E=Rr(t);for(let C=0,M=E;C<M;C++){Ee(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=b,D=b+T;S<D;S++){const w=s.resolveTriangleIndex(S);Ee(h,3*w,c,l),h.needsUpdate=!0;const U=h.distanceToTriangle(d,g,m);if(U<y&&(_.copy(g),p&&p.copy(m),y=U,x=S,v=C),U<r)return!0}}}}}),xn.releasePrimitive(h),xn.releasePrimitive(d),y===1/0?null:(i.point?i.point.copy(_):i.point=_.clone(),i.distance=y,i.faceIndex=x,n&&(n.point?n.point.copy(p):n.point=p.clone(),n.point.applyMatrix4(vo),_.applyMatrix4(vo),n.distance=_.sub(n.point).length(),n.faceIndex=v),i)}function gx(){return typeof SharedArrayBuffer<"u"}const cs=new de.constructor,Bo=new de.constructor,ai=new Cc(()=>new fe),ur=new fe,hr=new fe,Ka=new fe,Za=new fe;let Ja=!1;function _x(s,t,e,i){if(Ja)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ja=!0;const n=s._roots,r=t._roots;let o,a=0,l=0;const c=new Qt().copy(e).invert();for(let u=0,f=n.length;u<f;u++){cs.setBuffer(n[u]),l=0;const h=ai.getPrimitive();_e(0,cs.float32Array,h),h.applyMatrix4(c);for(let d=0,g=r.length;d<g&&(Bo.setBuffer(r[d]),o=An(0,0,e,c,i,a,l,0,0,h),Bo.clearBuffer(),l+=r[d].length,!o);d++);if(ai.releasePrimitive(h),cs.clearBuffer(),a+=n[u].length,o)break}return Ja=!1,o}function An(s,t,e,i,n,r=0,o=0,a=0,l=0,c=null,u=!1){let f,h;u?(f=Bo,h=cs):(f=cs,h=Bo);const d=f.float32Array,g=f.uint32Array,_=f.uint16Array,m=h.float32Array,p=h.uint32Array,y=h.uint16Array,x=s*2,v=t*2,b=Ke(x,_),T=Ke(v,y);let E=!1;if(T&&b)u?E=n(nn(t,p),gn(t*2,y),nn(s,g),gn(s*2,_),l,o+t,a,r+s):E=n(nn(s,g),gn(s*2,_),nn(t,p),gn(t*2,y),a,r+s,l,o+t);else if(T){const C=ai.getPrimitive();_e(t,m,C),C.applyMatrix4(e);const M=_n(s),S=vn(s,g);_e(M,d,ur),_e(S,d,hr);const D=C.intersectsBox(ur),w=C.intersectsBox(hr);E=D&&An(t,M,i,e,n,o,r,l,a+1,C,!u)||w&&An(t,S,i,e,n,o,r,l,a+1,C,!u),ai.releasePrimitive(C)}else{const C=_n(t),M=vn(t,p);_e(C,m,Ka),_e(M,m,Za);const S=c.intersectsBox(Ka),D=c.intersectsBox(Za);if(S&&D)E=An(s,C,e,i,n,r,o,a,l+1,c,u)||An(s,M,e,i,n,r,o,a,l+1,c,u);else if(S)if(b)E=An(s,C,e,i,n,r,o,a,l+1,c,u);else{const w=ai.getPrimitive();w.copy(Ka).applyMatrix4(e);const U=_n(s),L=vn(s,g);_e(U,d,ur),_e(L,d,hr);const z=w.intersectsBox(ur),B=w.intersectsBox(hr);E=z&&An(C,U,i,e,n,o,r,l,a+1,w,!u)||B&&An(C,L,i,e,n,o,r,l,a+1,w,!u),ai.releasePrimitive(w)}else if(D)if(b)E=An(s,M,e,i,n,r,o,a,l+1,c,u);else{const w=ai.getPrimitive();w.copy(Za).applyMatrix4(e);const U=_n(s),L=vn(s,g);_e(U,d,ur),_e(L,d,hr);const z=w.intersectsBox(ur),B=w.intersectsBox(hr);E=z&&An(M,U,i,e,n,o,r,l,a+1,w,!u)||B&&An(M,L,i,e,n,o,r,l,a+1,w,!u),ai.releasePrimitive(w)}}return E}const xo=new Ve,vh=new fe,vx={strategy:mf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Rc{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,n=t._roots,r=t._indirectBuffer,o=i.getIndex();let a;return e.cloneBuffers?a={roots:n.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:n,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:n,roots:r,indirectBuffer:o}=t,a=new Rc(e,{...i,[Va]:!0});if(a._roots=r,a._indirectBuffer=o||null,i.setIndex){const l=e.getIndex();if(l===null){const c=new xe(t.index,1,!1);e.setIndex(c)}else l.array!==n&&(l.array.set(n),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...vx,[Va]:!1},e),e.useSharedArrayBuffer&&!gx())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Va]||(I0(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new fe))),this.resolveTriangleIndex=e.indirect?i=>this._indirectBuffer[i]:i=>i}refit(t=null){return(this.indirect?ox:j0)(this,t)}traverse(t,e=0){const i=this._roots[e],n=new Uint32Array(i),r=new Uint16Array(i);o(0);function o(a,l=0){const c=a*2,u=r[c+15]===Vo;if(u){const f=n[a+6],h=r[c+14];t(l,u,new Float32Array(i,a*4,6),f,h)}else{const f=a+ls/4,h=n[a+6],d=n[a+7];t(l,u,new Float32Array(i,a*4,6),d)||(o(f,l+1),o(h,l+1))}}}raycast(t,e=Fn,i=0,n=1/0){const r=this._roots,o=this.geometry,a=[],l=e.isMaterial,c=Array.isArray(e),u=o.groups,f=l?e.side:e,h=this.indirect?ax:J0;for(let d=0,g=r.length;d<g;d++){const _=c?e[u[d].materialIndex].side:f,m=a.length;if(h(this,d,_,t,a,i,n),c){const p=u[d].materialIndex;for(let y=m,x=a.length;y<x;y++)a[y].face.materialIndex=p}}return a}raycastFirst(t,e=Fn,i=0,n=1/0){const r=this._roots,o=this.geometry,a=e.isMaterial,l=Array.isArray(e);let c=null;const u=o.groups,f=a?e.side:e,h=this.indirect?cx:Q0;for(let d=0,g=r.length;d<g;d++){const _=l?e[u[d].materialIndex].side:f,m=h(this,d,_,t,i,n);m!=null&&(c==null||m.distance<c.distance)&&(c=m,l&&(m.face.materialIndex=u[d].materialIndex))}return c}intersectsGeometry(t,e){let i=!1;const n=this._roots,r=this.indirect?ux:tx;for(let o=0,a=n.length;o<a&&(i=r(this,o,t,e),!i);o++);return i}shapecast(t){const e=xn.getPrimitive(),i=this.indirect?Z0:Y0;let{boundsTraverseOrder:n,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const f=o;o=(h,d,g,_,m)=>f(h,d,g,_,m)?!0:i(h,d,this,a,g,_,e)}else o||(a?o=(f,h,d,g)=>i(f,h,this,a,d,g,e):o=(f,h,d)=>d);let l=!1,c=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const d=u[f];if(l=z0(this,f,r,o,n,c),l)break;c+=d.byteLength}return xn.releasePrimitive(e),l}bvhcast(t,e,i){let{intersectsRanges:n,intersectsTriangles:r}=i;const o=xn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Ee(o,_*3,a,l)}:g=>{Ee(o,g*3,a,l)},u=xn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,d=t.indirect?g=>{const _=t.resolveTriangleIndex(g);Ee(u,_*3,f,h)}:g=>{Ee(u,g*3,f,h)};if(r){const g=(_,m,p,y,x,v,b,T)=>{for(let E=p,C=p+y;E<C;E++){d(E),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=_,S=_+m;M<S;M++)if(c(M),o.needsUpdate=!0,r(o,u,M,E,x,v,b,T))return!0}return!1};if(n){const _=n;n=function(m,p,y,x,v,b,T,E){return _(m,p,y,x,v,b,T,E)?!0:g(m,p,y,x,v,b,T,E)}}else n=g}return _x(this,t,e,n)}intersectsBox(t,e){return xo.set(t.min,t.max,e),xo.needsUpdate=!0,this.shapecast({intersectsBounds:i=>xo.intersectsBox(i),intersectsTriangle:i=>xo.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},n={},r=0,o=1/0){return(this.indirect?mx:sx)(this,t,e,i,n,r,o)}closestPointToPoint(t,e={},i=0,n=1/0){return G0(this,t,e,i,n)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{_e(0,new Float32Array(i),vh),t.union(vh)}),t}}const xh=ap||null;ye.prototype.raycast;xh!==null&&xh.prototype.raycast;function xx(s={}){return this.boundsTree=new Rc(this,s),this.boundsTree}function yx(){this.boundsTree=null}ue.prototype.computeBoundsTree=xx;ue.prototype.disposeBoundsTree=yx;class Sx{raycaster=new Pu;pointer=new Yt;pickPoint(t,e,i,n=2){this.updatePointer(t,e),this.raycaster.setFromCamera(this.pointer,e),this.raycaster.params.Points={threshold:n};const r=this.raycaster.intersectObject(new Sc(i,new yc),!1);if(r.length===0)return null;const o=r[0];return{point:o.point.clone(),index:o.index??0,distance:o.distance}}pickMesh(t,e,i){this.updatePointer(t,e),this.raycaster.setFromCamera(this.pointer,e);const n=this.raycaster.intersectObjects(i,!0);return n.length>0?n[0]:null}boxSelect(t,e,i,n){const r=[],o=n.attributes.position,a=Math.min(t.x,e.x),l=Math.max(t.x,e.x),c=Math.min(t.y,e.y),u=Math.max(t.y,e.y),f=new N;for(let h=0;h<o.count;h++){f.fromBufferAttribute(o,h),f.project(i);const d=(f.x+1)/2,g=(1-f.y)/2;d>=a&&d<=l&&g>=c&&g<=u&&r.push(h)}return r}measureDistance(t,e){return t.distanceTo(e)}updatePointer(t,e){const i=e.userData.canvas;let n;i?n=i.getBoundingClientRect():n={left:0,top:0,width:window.innerWidth,height:window.innerHeight},t instanceof PointerEvent?(this.pointer.x=(t.clientX-n.left)/n.width*2-1,this.pointer.y=-((t.clientY-n.top)/n.height)*2+1):(this.pointer.x=t.x/n.width*2-1,this.pointer.y=-(t.y/n.height)*2+1)}static accelerateGeometry(t){t.boundsTree||t.computeBoundsTree()}dispose(){this.raycaster=new Pu}}class Mx{view;offset=0;littleEndian;constructor(t,e=0,i){this.view=new DataView(t,e,i),this.littleEndian=!0}get position(){return this.offset}get remaining(){return this.view.byteLength-this.offset}seek(t){this.offset=t}skip(t){this.offset+=t}readFloat32(){const t=this.view.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}readInt32(){const t=this.view.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}readUint8(){const t=this.view.getUint8(this.offset);return this.offset+=1,t}readFloat32Array(t){const e=new Float32Array(t);for(let i=0;i<t;i++)e[i]=this.view.getFloat32(this.offset,this.littleEndian),this.offset+=4;return e}readFloat32ArrayZeroCopy(t){const e=new Float32Array(this.view.buffer,this.view.byteOffset+this.offset,t);return this.offset+=t*4,e}isEOF(){return this.offset>=this.view.byteLength}static detectEndianness(){const t=new ArrayBuffer(4);return new Uint32Array(t)[0]=305419896,new Uint8Array(t)[0]===120}}const bx=4,Ex=bx*4;class Tx{worker=null;baseUrl;constructor(t={}){this.baseUrl=t.baseUrl??"",t.enableWorker&&typeof Worker<"u"&&(this.worker=new Worker(new URL(""+new URL("point-cloud-worker-DeU9JHg6.js",import.meta.url).href,import.meta.url),{type:"module"}))}async load(t,e){const i=this.resolveUrl(t),n=e?this.resolveUrl(e):void 0,[r,o]=await Promise.all([fetch(i),n?fetch(n):Promise.resolve(null)]);if(!r.ok)throw new Error(`Failed to load point cloud: ${i} (${r.status})`);const a=await r.arrayBuffer(),l=o?await o.text():void 0;return this.worker?this.parseInWorker(a,l):this.parseSync(a,l)}async loadSequence(t,e){const i=[];for(let n=0;n<t.length;n++){const r=await this.load(t[n].bin,t[n].label);i.push(r),e?.(n+1,t.length)}return i}parseSync(t,e){const i=new Mx(t),n=t.byteLength,r=Math.floor(n/Ex),o=new Float32Array(r*3),a=new Float32Array(r);for(let c=0;c<r;c++)o[c*3]=i.readFloat32(),o[c*3+1]=i.readFloat32(),o[c*3+2]=i.readFloat32(),a[c]=i.readFloat32();const l=e?this.parseLabels(e):[];return{points:{positions:o,intensities:a,count:r},boxes:l}}parseInWorker(t,e){return new Promise((i,n)=>{if(!this.worker){n(new Error("Worker not initialized"));return}this.worker.onmessage=r=>{r.data.error?n(new Error(r.data.error)):i(r.data.frame)},this.worker.postMessage({binBuffer:t,labels:e},[t])})}parseLabels(t){const e=t.trim().split(`
`),i=[];for(const n of e){const r=n.trim().split(/\s+/);r.length<15||i.push({type:r[0],center:{x:parseFloat(r[11]),y:parseFloat(r[12]),z:parseFloat(r[13])},dimensions:{x:parseFloat(r[9]),y:parseFloat(r[8]),z:parseFloat(r[10])},rotationY:parseFloat(r[14]),score:r.length>15?parseFloat(r[15]):void 0})}return i}resolveUrl(t){return t.startsWith("http")||t.startsWith("blob:")||t.startsWith("data:")?t:`${this.baseUrl}/${t}`.replace(/\/+/g,"/")}dispose(){this.worker?.terminate(),this.worker=null}}const Ax=`uniform float uPointSize;\r
uniform int uColorMode; // 0=intensity, 1=height, 2=semantic\r
uniform vec3 uMinBound;\r
uniform vec3 uMaxBound;\r
uniform sampler2D uColorRamp;\r
\r
attribute float aIntensity;\r
attribute float aLabel;\r
\r
varying vec3 vColor;\r
varying float vDepth;\r
\r
vec3 semanticColor(float label) {\r
  if (label < 0.5) return vec3(0.5);\r
  if (label < 1.5) return vec3(0.2, 0.8, 0.2);\r
  if (label < 2.5) return vec3(0.8, 0.8, 0.2);\r
  if (label < 3.5) return vec3(0.8, 0.5, 0.2);\r
  if (label < 4.5) return vec3(0.9, 0.1, 0.1);\r
  if (label < 5.5) return vec3(0.1, 0.5, 0.9);\r
  if (label < 6.5) return vec3(0.9, 0.3, 0.7);\r
  return vec3(0.3, 0.3, 0.3);\r
}\r
\r
void main() {\r
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\r
  gl_Position = projectionMatrix * mvPosition;\r
\r
  float size = uPointSize * (300.0 / -mvPosition.z);\r
  gl_PointSize = clamp(size, 1.0, 8.0);\r
\r
  if (uColorMode == 0) {\r
    float t = clamp(aIntensity / 255.0, 0.0, 1.0);\r
    vColor = texture2D(uColorRamp, vec2(t, 0.5)).rgb;\r
  } else if (uColorMode == 1) {\r
    float t = (position.y - uMinBound.y) / (uMaxBound.y - uMinBound.y + 0.001);\r
    vColor = texture2D(uColorRamp, vec2(clamp(t, 0.0, 1.0), 0.5)).rgb;\r
  } else {\r
    vColor = semanticColor(aLabel);\r
  }\r
\r
  vDepth = -mvPosition.z;\r
}\r
`,wx=`varying vec3 vColor;\r
varying float vDepth;\r
\r
void main() {\r
  vec2 coord = gl_PointCoord - vec2(0.5);\r
  if (dot(coord, coord) > 0.25) discard;\r
\r
  float fog = 1.0 - clamp(vDepth / 120.0, 0.0, 1.0);\r
  vec3 finalColor = mix(vec3(0.1, 0.1, 0.12), vColor, fog);\r
\r
  gl_FragColor = vec4(finalColor, fog);\r
}\r
`;class Cx{static createPointCloudMaterial(){const t=this.createColorRampTexture();return new Kn({vertexShader:Ax,fragmentShader:wx,uniforms:{uPointSize:{value:2},uColorMode:{value:0},uMinBound:{value:new N(-100,-10,-100)},uMaxBound:{value:new N(100,10,100)},uColorRamp:{value:t}},transparent:!0,depthWrite:!1})}static createColorRampTexture(){const e=new Uint8Array(1024);for(let n=0;n<256;n++){const r=n/255,o=this.turboColormap(r);e[n*4]=o[0],e[n*4+1]=o[1],e[n*4+2]=o[2],e[n*4+3]=255}const i=new as(e,256,1,Ze);return i.needsUpdate=!0,i}static turboColormap(t){const e=Math.round(255*Math.min(1,Math.max(0,1.5-Math.abs(4*t-3)))),i=Math.round(255*Math.min(1,Math.max(0,1.5-Math.abs(4*t-2)))),n=Math.round(255*Math.min(1,Math.max(0,1.5-Math.abs(4*t-1))));return[e,i,n]}}class Rx{object3D;geometry;material;colorMode="intensity";constructor(){this.geometry=new ue,this.material=Cx.createPointCloudMaterial(),this.object3D=new Sc(this.geometry,this.material),this.object3D.frustumCulled=!1}setData(t){const{positions:e,intensities:i,labels:n,count:r}=t;this.geometry.setAttribute("position",new xe(e,3)),this.geometry.setAttribute("aIntensity",new xe(i,1)),n?this.geometry.setAttribute("aLabel",new xe(n,1)):this.geometry.setAttribute("aLabel",new xe(new Float32Array(r),1)),this.geometry.computeBoundingSphere(),this.geometry.computeBoundingBox(),this.updateBounds()}setColorMode(t){this.colorMode=t,this.material.uniforms.uColorMode.value=t==="intensity"?0:t==="height"?1:2}setPointSize(t){this.material.uniforms.uPointSize.value=t}updateBounds(){const t=this.geometry.boundingBox;t&&(this.material.uniforms.uMinBound.value.copy(t.min),this.material.uniforms.uMaxBound.value.copy(t.max))}getGeometry(){return this.geometry}getColorMode(){return this.colorMode}setVisible(t){this.object3D.visible=t}dispose(){this.geometry.dispose(),this.material.dispose()}}function Px(){var s=Object.create(null);function t(n,r){var o=n.id,a=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[o])try{l=l.map(function(h){return h&&h.isWorkerModule&&(t(h,function(d){if(d instanceof Error)throw d}),h=s[h.id].value),h}),c=i("<"+a+">.init",c),u&&(u=i("<"+a+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function e(n,r){var o,a=n.id,l=n.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=s[a].getTransferables&&s[a].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(d){console.error(d),r(d)}}}function i(n,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(n){var r=n.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&t(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&e(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Dx(s){var t=function(){for(var e=[],i=arguments.length;i--;)e[i]=arguments[i];return t._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,e);throw new Error("Worker module function was called but `init` did not return a callable function")})};return t._getInitResult=function(){var e=s.dependencies,i=s.init;e=Array.isArray(e)?e.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(e).then(function(r){return i.apply(null,r)});return t._getInitResult=function(){return n},n},t}var Sf=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var t=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));t.terminate(),s=!0}catch(e){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+e.message+"]")}return Sf=function(){return s},s},Ux=0,Lx=0,$a=!1,us=Object.create(null),hs=Object.create(null),nc=Object.create(null);function Pr(s){if((!s||typeof s.init!="function")&&!$a)throw new Error("requires `options.init` function");var t=s.dependencies,e=s.init,i=s.getTransferables,n=s.workerId,r=Dx(s);n==null&&(n="#default");var o="workerModule"+ ++Ux,a=s.name||o,l=null;t=t&&t.map(function(u){return typeof u=="function"&&!u.workerModuleData&&($a=!0,u=Pr({workerId:n,name:"<"+a+"> function dependency: "+u.name,init:`function(){return (
`+Co(u)+`
)}`}),$a=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!Sf())return r.apply(void 0,u);if(!l){l=yh(n,"registerModule",c.workerModuleData);var h=function(){l=null,hs[n].delete(h)};(hs[n]||(hs[n]=new Set)).add(h)}return l.then(function(d){var g=d.isCallable;if(g)return yh(n,"callModule",{id:o,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:o,name:a,dependencies:t,init:Co(e),getTransferables:i&&Co(i)},c.onMainThread=r,c}function Ix(s){hs[s]&&hs[s].forEach(function(t){t()}),us[s]&&(us[s].terminate(),delete us[s])}function Co(s){var t=s.toString();return!/^function/.test(t)&&/^\w+\s*\(/.test(t)&&(t="function "+t),t}function Fx(s){var t=us[s];if(!t){var e=Co(Px);t=us[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+e+")()"],{type:"application/javascript"}))),t.onmessage=function(i){var n=i.data,r=n.messageId,o=nc[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete nc[r],o(n)}}return t}function yh(s,t,e){return new Promise(function(i,n){var r=++Lx;nc[r]=function(o){o.success?i(o.result):n(new Error("Error in worker "+t+" call: "+o.error))},Fx(s).postMessage({messageId:r,action:t,data:e})})}function Mf(){var s=(function(t){function e(Y,K,F,X,tt,nt,Z,H){var V=1-Z;H.x=V*V*Y+2*V*Z*F+Z*Z*tt,H.y=V*V*K+2*V*Z*X+Z*Z*nt}function i(Y,K,F,X,tt,nt,Z,H,V,J){var dt=1-V;J.x=dt*dt*dt*Y+3*dt*dt*V*F+3*dt*V*V*tt+V*V*V*Z,J.y=dt*dt*dt*K+3*dt*dt*V*X+3*dt*V*V*nt+V*V*V*H}function n(Y,K){for(var F=/([MLQCZ])([^MLQCZ]*)/g,X,tt,nt,Z,H;X=F.exec(Y);){var V=X[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(J){return parseFloat(J)});switch(X[1]){case"M":Z=tt=V[0],H=nt=V[1];break;case"L":(V[0]!==Z||V[1]!==H)&&K("L",Z,H,Z=V[0],H=V[1]);break;case"Q":{K("Q",Z,H,Z=V[2],H=V[3],V[0],V[1]);break}case"C":{K("C",Z,H,Z=V[4],H=V[5],V[0],V[1],V[2],V[3]);break}case"Z":(Z!==tt||H!==nt)&&K("L",Z,H,tt,nt);break}}}function r(Y,K,F){F===void 0&&(F=16);var X={x:0,y:0};n(Y,function(tt,nt,Z,H,V,J,dt,pt,ft){switch(tt){case"L":K(nt,Z,H,V);break;case"Q":{for(var gt=nt,I=Z,Lt=1;Lt<F;Lt++)e(nt,Z,J,dt,H,V,Lt/(F-1),X),K(gt,I,X.x,X.y),gt=X.x,I=X.y;break}case"C":{for(var St=nt,Mt=Z,mt=1;mt<F;mt++)i(nt,Z,J,dt,pt,ft,H,V,mt/(F-1),X),K(St,Mt,X.x,X.y),St=X.x,Mt=X.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Y,K){var F=Y.getContext?Y.getContext("webgl",c):Y,X=l.get(F);if(!X){let dt=function(St){var Mt=nt[St];if(!Mt&&(Mt=nt[St]=F.getExtension(St),!Mt))throw new Error(St+" not supported");return Mt},pt=function(St,Mt){var mt=F.createShader(Mt);return F.shaderSource(mt,St),F.compileShader(mt),mt},ft=function(St,Mt,mt,xt){if(!Z[St]){var ht={},Et={},ct=F.createProgram();F.attachShader(ct,pt(Mt,F.VERTEX_SHADER)),F.attachShader(ct,pt(mt,F.FRAGMENT_SHADER)),F.linkProgram(ct),Z[St]={program:ct,transaction:function(P){F.useProgram(ct),P({setUniform:function(k,et){for(var Q=[],j=arguments.length-2;j-- >0;)Q[j]=arguments[j+2];var yt=Et[et]||(Et[et]=F.getUniformLocation(ct,et));F["uniform"+k].apply(F,[yt].concat(Q))},setAttribute:function(k,et,Q,j,yt){var lt=ht[k];lt||(lt=ht[k]={buf:F.createBuffer(),loc:F.getAttribLocation(ct,k),data:null}),F.bindBuffer(F.ARRAY_BUFFER,lt.buf),F.vertexAttribPointer(lt.loc,et,F.FLOAT,!1,0,0),F.enableVertexAttribArray(lt.loc),tt?F.vertexAttribDivisor(lt.loc,j):dt("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(lt.loc,j),yt!==lt.data&&(F.bufferData(F.ARRAY_BUFFER,yt,Q),lt.data=yt)}})}}}Z[St].transaction(xt)},gt=function(St,Mt){V++;try{F.activeTexture(F.TEXTURE0+V);var mt=H[St];mt||(mt=H[St]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,mt),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,mt),Mt(mt,V)}finally{V--}},I=function(St,Mt,mt){var xt=F.createFramebuffer();J.push(xt),F.bindFramebuffer(F.FRAMEBUFFER,xt),F.activeTexture(F.TEXTURE0+Mt),F.bindTexture(F.TEXTURE_2D,St),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St,0);try{mt(xt)}finally{F.deleteFramebuffer(xt),F.bindFramebuffer(F.FRAMEBUFFER,J[--J.length-1]||null)}},Lt=function(){nt={},Z={},H={},V=-1,J.length=0};var tt=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,nt={},Z={},H={},V=-1,J=[];F.canvas.addEventListener("webglcontextlost",function(St){Lt(),St.preventDefault()},!1),l.set(F,X={gl:F,isWebGL2:tt,getExtension:dt,withProgram:ft,withTexture:gt,withTextureFramebuffer:I,handleContextLoss:Lt})}K(X)}function f(Y,K,F,X,tt,nt,Z,H){Z===void 0&&(Z=15),H===void 0&&(H=null),u(Y,function(V){var J=V.gl,dt=V.withProgram,pt=V.withTexture;pt("copy",function(ft,gt){J.texImage2D(J.TEXTURE_2D,0,J.RGBA,tt,nt,0,J.RGBA,J.UNSIGNED_BYTE,K),dt("copy",o,a,function(I){var Lt=I.setUniform,St=I.setAttribute;St("aUV",2,J.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Lt("1i","image",gt),J.bindFramebuffer(J.FRAMEBUFFER,H||null),J.disable(J.BLEND),J.colorMask(Z&8,Z&4,Z&2,Z&1),J.viewport(F,X,tt,nt),J.scissor(F,X,tt,nt),J.drawArrays(J.TRIANGLES,0,3)})})})}function h(Y,K,F){var X=Y.width,tt=Y.height;u(Y,function(nt){var Z=nt.gl,H=new Uint8Array(X*tt*4);Z.readPixels(0,0,X,tt,Z.RGBA,Z.UNSIGNED_BYTE,H),Y.width=K,Y.height=F,f(Z,H,0,0,X,tt)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(Y,K,F,X,tt,nt){nt===void 0&&(nt=1);var Z=new Uint8Array(Y*K),H=X[2]-X[0],V=X[3]-X[1],J=[];r(F,function(St,Mt,mt,xt){J.push({x1:St,y1:Mt,x2:mt,y2:xt,minX:Math.min(St,mt),minY:Math.min(Mt,xt),maxX:Math.max(St,mt),maxY:Math.max(Mt,xt)})}),J.sort(function(St,Mt){return St.maxX-Mt.maxX});for(var dt=0;dt<Y;dt++)for(var pt=0;pt<K;pt++){var ft=I(X[0]+H*(dt+.5)/Y,X[1]+V*(pt+.5)/K),gt=Math.pow(1-Math.abs(ft)/tt,nt)/2;ft<0&&(gt=1-gt),gt=Math.max(0,Math.min(255,Math.round(gt*255))),Z[pt*Y+dt]=gt}return Z;function I(St,Mt){for(var mt=1/0,xt=1/0,ht=J.length;ht--;){var Et=J[ht];if(Et.maxX+xt<=St)break;if(St+xt>Et.minX&&Mt-xt<Et.maxY&&Mt+xt>Et.minY){var ct=p(St,Mt,Et.x1,Et.y1,Et.x2,Et.y2);ct<mt&&(mt=ct,xt=Math.sqrt(mt))}}return Lt(St,Mt)&&(xt=-xt),xt}function Lt(St,Mt){for(var mt=0,xt=J.length;xt--;){var ht=J[xt];if(ht.maxX<=St)break;var Et=ht.y1>Mt!=ht.y2>Mt&&St<(ht.x2-ht.x1)*(Mt-ht.y1)/(ht.y2-ht.y1)+ht.x1;Et&&(mt+=ht.y1<ht.y2?1:-1)}return mt!==0}}function _(Y,K,F,X,tt,nt,Z,H,V,J){nt===void 0&&(nt=1),H===void 0&&(H=0),V===void 0&&(V=0),J===void 0&&(J=0),m(Y,K,F,X,tt,nt,Z,null,H,V,J)}function m(Y,K,F,X,tt,nt,Z,H,V,J,dt){nt===void 0&&(nt=1),V===void 0&&(V=0),J===void 0&&(J=0),dt===void 0&&(dt=0);for(var pt=g(Y,K,F,X,tt,nt),ft=new Uint8Array(pt.length*4),gt=0;gt<pt.length;gt++)ft[gt*4+dt]=pt[gt];f(Z,ft,V,J,Y,K,1<<3-dt,H)}function p(Y,K,F,X,tt,nt){var Z=tt-F,H=nt-X,V=Z*Z+H*H,J=V?Math.max(0,Math.min(1,((Y-F)*Z+(K-X)*H)/V)):0,dt=Y-(F+J*Z),pt=K-(X+J*H);return dt*dt+pt*pt}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:m}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",b="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",T=new Float32Array([0,0,2,0,0,2]),E=null,C=!1,M={},S=new WeakMap;function D(Y){if(!C&&!z(Y))throw new Error("WebGL generation not supported")}function w(Y,K,F,X,tt,nt,Z){if(nt===void 0&&(nt=1),Z===void 0&&(Z=null),!Z&&(Z=E,!Z)){var H=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!H)throw new Error("OffscreenCanvas or DOM canvas not supported");Z=E=H.getContext("webgl",{depth:!1})}D(Z);var V=new Uint8Array(Y*K*4);u(Z,function(ft){var gt=ft.gl,I=ft.withTexture,Lt=ft.withTextureFramebuffer;I("readable",function(St,Mt){gt.texImage2D(gt.TEXTURE_2D,0,gt.RGBA,Y,K,0,gt.RGBA,gt.UNSIGNED_BYTE,null),Lt(St,Mt,function(mt){L(Y,K,F,X,tt,nt,gt,mt,0,0,0),gt.readPixels(0,0,Y,K,gt.RGBA,gt.UNSIGNED_BYTE,V)})})});for(var J=new Uint8Array(Y*K),dt=0,pt=0;dt<V.length;dt+=4)J[pt++]=V[dt];return J}function U(Y,K,F,X,tt,nt,Z,H,V,J){nt===void 0&&(nt=1),H===void 0&&(H=0),V===void 0&&(V=0),J===void 0&&(J=0),L(Y,K,F,X,tt,nt,Z,null,H,V,J)}function L(Y,K,F,X,tt,nt,Z,H,V,J,dt){nt===void 0&&(nt=1),V===void 0&&(V=0),J===void 0&&(J=0),dt===void 0&&(dt=0),D(Z);var pt=[];r(F,function(ft,gt,I,Lt){pt.push(ft,gt,I,Lt)}),pt=new Float32Array(pt),u(Z,function(ft){var gt=ft.gl,I=ft.isWebGL2,Lt=ft.getExtension,St=ft.withProgram,Mt=ft.withTexture,mt=ft.withTextureFramebuffer,xt=ft.handleContextLoss;if(Mt("rawDistances",function(ht,Et){(Y!==ht._lastWidth||K!==ht._lastHeight)&&gt.texImage2D(gt.TEXTURE_2D,0,gt.RGBA,ht._lastWidth=Y,ht._lastHeight=K,0,gt.RGBA,gt.UNSIGNED_BYTE,null),St("main",x,v,function(ct){var kt=ct.setAttribute,P=ct.setUniform,A=!I&&Lt("ANGLE_instanced_arrays"),k=!I&&Lt("EXT_blend_minmax");kt("aUV",2,gt.STATIC_DRAW,0,T),kt("aLineSegment",4,gt.DYNAMIC_DRAW,1,pt),P.apply(void 0,["4f","uGlyphBounds"].concat(X)),P("1f","uMaxDistance",tt),P("1f","uExponent",nt),mt(ht,Et,function(et){gt.enable(gt.BLEND),gt.colorMask(!0,!0,!0,!0),gt.viewport(0,0,Y,K),gt.scissor(0,0,Y,K),gt.blendFunc(gt.ONE,gt.ONE),gt.blendEquationSeparate(gt.FUNC_ADD,I?gt.MAX:k.MAX_EXT),gt.clear(gt.COLOR_BUFFER_BIT),I?gt.drawArraysInstanced(gt.TRIANGLES,0,3,pt.length/4):A.drawArraysInstancedANGLE(gt.TRIANGLES,0,3,pt.length/4)})}),St("post",o,b,function(ct){ct.setAttribute("aUV",2,gt.STATIC_DRAW,0,T),ct.setUniform("1i","tex",Et),gt.bindFramebuffer(gt.FRAMEBUFFER,H),gt.disable(gt.BLEND),gt.colorMask(dt===0,dt===1,dt===2,dt===3),gt.viewport(V,J,Y,K),gt.scissor(V,J,Y,K),gt.drawArrays(gt.TRIANGLES,0,3)})}),gt.isContextLost())throw xt(),new Error("webgl context lost")})}function z(Y){var K=!Y||Y===E?M:Y.canvas||Y,F=S.get(K);if(F===void 0){C=!0;var X=null;try{var tt=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],nt=w(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Y);F=nt&&tt.length===nt.length&&nt.every(function(Z,H){return Z===tt[H]}),F||(X="bad trial run results",console.info(tt,nt))}catch(Z){F=!1,X=Z.message}X&&console.warn("WebGL SDF generation not supported:",X),C=!1,S.set(K,F)}return F}var B=Object.freeze({__proto__:null,generate:w,generateIntoCanvas:U,generateIntoFramebuffer:L,isSupported:z});function $(Y,K,F,X,tt,nt){tt===void 0&&(tt=Math.max(X[2]-X[0],X[3]-X[1])/2),nt===void 0&&(nt=1);try{return w.apply(B,arguments)}catch(Z){return console.info("WebGL SDF generation failed, falling back to JS",Z),g.apply(y,arguments)}}function W(Y,K,F,X,tt,nt,Z,H,V,J){tt===void 0&&(tt=Math.max(X[2]-X[0],X[3]-X[1])/2),nt===void 0&&(nt=1),H===void 0&&(H=0),V===void 0&&(V=0),J===void 0&&(J=0);try{return U.apply(B,arguments)}catch(dt){return console.info("WebGL SDF generation failed, falling back to JS",dt),_.apply(y,arguments)}}return t.forEachPathCommand=n,t.generate=$,t.generateIntoCanvas=W,t.javascript=y,t.pathToLineSegments=r,t.webgl=B,t.webglUtils=d,Object.defineProperty(t,"__esModule",{value:!0}),t})({});return s}function Nx(){var s=(function(t){var e={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(e).forEach(function(xt,ht){i[xt]=1<<ht+1,n[i[xt]]=xt}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,o=i.L|i.R|i.AL,a=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function f(){if(!u){u=new Map;var xt=function(Et){if(e.hasOwnProperty(Et)){var ct=0;e[Et].split(",").forEach(function(kt){var P=kt.split("+"),A=P[0],k=P[1];A=parseInt(A,36),k=k?parseInt(k,36):0,u.set(ct+=A,i[Et]);for(var et=0;et<k;et++)u.set(++ct,i[Et])})}};for(var ht in e)xt(ht)}}function h(xt){return f(),u.get(xt.codePointAt(0))||i.L}function d(xt){return n[h(xt)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(xt,ht){var Et=36,ct=0,kt=new Map,P=ht&&new Map,A;return xt.split(",").forEach(function k(et){if(et.indexOf("+")!==-1)for(var Q=+et;Q--;)k(A);else{A=et;var j=et.split(">"),yt=j[0],lt=j[1];yt=String.fromCodePoint(ct+=parseInt(yt,Et)),lt=String.fromCodePoint(ct+=parseInt(lt,Et)),kt.set(yt,lt),ht&&P.set(lt,yt)}}),{map:kt,reverseMap:P}}var m,p,y;function x(){if(!m){var xt=_(g.pairs,!0),ht=xt.map,Et=xt.reverseMap;m=ht,p=Et,y=_(g.canonical,!1).map}}function v(xt){return x(),m.get(xt)||null}function b(xt){return x(),p.get(xt)||null}function T(xt){return x(),y.get(xt)||null}var E=i.L,C=i.R,M=i.EN,S=i.ES,D=i.ET,w=i.AN,U=i.CS,L=i.B,z=i.S,B=i.ON,$=i.BN,W=i.NSM,Y=i.AL,K=i.LRO,F=i.RLO,X=i.LRE,tt=i.RLE,nt=i.PDF,Z=i.LRI,H=i.RLI,V=i.FSI,J=i.PDI;function dt(xt,ht){for(var Et=125,ct=new Uint32Array(xt.length),kt=0;kt<xt.length;kt++)ct[kt]=h(xt[kt]);var P=new Map;function A(We,Mn){var Xe=ct[We];ct[We]=Mn,P.set(Xe,P.get(Xe)-1),Xe&a&&P.set(a,P.get(a)-1),P.set(Mn,(P.get(Mn)||0)+1),Mn&a&&P.set(a,(P.get(a)||0)+1)}for(var k=new Uint8Array(xt.length),et=new Map,Q=[],j=null,yt=0;yt<xt.length;yt++)j||Q.push(j={start:yt,end:xt.length-1,level:ht==="rtl"?1:ht==="ltr"?0:Xc(yt,!1)}),ct[yt]&L&&(j.end=yt,j=null);for(var lt=tt|X|F|K|r|J|nt|L,wt=function(We){return We+(We&1?1:2)},Ct=function(We){return We+(We&1?2:1)},at=0;at<Q.length;at++){j=Q[at];var _t=[{_level:j.level,_override:0,_isolate:0}],bt=void 0,Pt=0,Tt=0,Gt=0;P.clear();for(var G=j.start;G<=j.end;G++){var ot=ct[G];if(bt=_t[_t.length-1],P.set(ot,(P.get(ot)||0)+1),ot&a&&P.set(a,(P.get(a)||0)+1),ot&lt)if(ot&(tt|X)){k[G]=bt._level;var vt=(ot===tt?Ct:wt)(bt._level);vt<=Et&&!Pt&&!Tt?_t.push({_level:vt,_override:0,_isolate:0}):Pt||Tt++}else if(ot&(F|K)){k[G]=bt._level;var It=(ot===F?Ct:wt)(bt._level);It<=Et&&!Pt&&!Tt?_t.push({_level:It,_override:ot&F?C:E,_isolate:0}):Pt||Tt++}else if(ot&r){ot&V&&(ot=Xc(G+1,!0)===1?H:Z),k[G]=bt._level,bt._override&&A(G,bt._override);var ut=(ot===H?Ct:wt)(bt._level);ut<=Et&&Pt===0&&Tt===0?(Gt++,_t.push({_level:ut,_override:0,_isolate:1,_isolInitIndex:G})):Pt++}else if(ot&J){if(Pt>0)Pt--;else if(Gt>0){for(Tt=0;!_t[_t.length-1]._isolate;)_t.pop();var it=_t[_t.length-1]._isolInitIndex;it!=null&&(et.set(it,G),et.set(G,it)),_t.pop(),Gt--}bt=_t[_t.length-1],k[G]=bt._level,bt._override&&A(G,bt._override)}else ot&nt?(Pt===0&&(Tt>0?Tt--:!bt._isolate&&_t.length>1&&(_t.pop(),bt=_t[_t.length-1])),k[G]=bt._level):ot&L&&(k[G]=j.level);else k[G]=bt._level,bt._override&&ot!==$&&A(G,bt._override)}for(var Rt=[],Nt=null,Bt=j.start;Bt<=j.end;Bt++){var Vt=ct[Bt];if(!(Vt&l)){var he=k[Bt],le=Vt&r,ge=Vt===J;Nt&&he===Nt._level?(Nt._end=Bt,Nt._endsWithIsolInit=le):Rt.push(Nt={_start:Bt,_end:Bt,_level:he,_startsWithPDI:ge,_endsWithIsolInit:le})}}for(var Te=[],on=0;on<Rt.length;on++){var an=Rt[on];if(!an._startsWithPDI||an._startsWithPDI&&!et.has(an._start)){for(var yn=[Nt=an],ln=void 0;Nt&&Nt._endsWithIsolInit&&(ln=et.get(Nt._end))!=null;)for(var cn=on+1;cn<Rt.length;cn++)if(Rt[cn]._start===ln){yn.push(Nt=Rt[cn]);break}for(var Se=[],Rn=0;Rn<yn.length;Rn++)for(var Dr=yn[Rn],Ur=Dr._start;Ur<=Dr._end;Ur++)Se.push(Ur);for(var Yo=k[Se[0]],ys=j.level,Ni=Se[0]-1;Ni>=0;Ni--)if(!(ct[Ni]&l)){ys=k[Ni];break}var Lr=Se[Se.length-1],jo=k[Lr],R=j.level;if(!(ct[Lr]&r)){for(var q=Lr+1;q<=j.end;q++)if(!(ct[q]&l)){R=k[q];break}}Te.push({_seqIndices:Se,_sosType:Math.max(ys,Yo)%2?C:E,_eosType:Math.max(R,jo)%2?C:E})}}for(var rt=0;rt<Te.length;rt++){var st=Te[rt],O=st._seqIndices,At=st._sosType,Ut=st._eosType,Ot=k[O[0]]&1?C:E;if(P.get(W))for(var Ft=0;Ft<O.length;Ft++){var Wt=O[Ft];if(ct[Wt]&W){for(var Xt=At,zt=Ft-1;zt>=0;zt--)if(!(ct[O[zt]]&l)){Xt=ct[O[zt]];break}A(Wt,Xt&(r|J)?B:Xt)}}if(P.get(M))for(var Zt=0;Zt<O.length;Zt++){var ne=O[Zt];if(ct[ne]&M)for(var ce=Zt-1;ce>=-1;ce--){var se=ce===-1?At:ct[O[ce]];if(se&o){se===Y&&A(ne,w);break}}}if(P.get(Y))for(var ie=0;ie<O.length;ie++){var Ht=O[ie];ct[Ht]&Y&&A(Ht,C)}if(P.get(S)||P.get(U))for(var re=1;re<O.length-1;re++){var $t=O[re];if(ct[$t]&(S|U)){for(var Me=0,Pn=0,Pe=re-1;Pe>=0&&(Me=ct[O[Pe]],!!(Me&l));Pe--);for(var Nn=re+1;Nn<O.length&&(Pn=ct[O[Nn]],!!(Pn&l));Nn++);Me===Pn&&(ct[$t]===S?Me===M:Me&(M|w))&&A($t,Me)}}if(P.get(M))for(var te=0;te<O.length;te++){var He=O[te];if(ct[He]&M){for(var De=te-1;De>=0&&ct[O[De]]&(D|l);De--)A(O[De],M);for(te++;te<O.length&&ct[O[te]]&(D|l|M);te++)ct[O[te]]!==M&&A(O[te],M)}}if(P.get(D)||P.get(S)||P.get(U))for(var ve=0;ve<O.length;ve++){var Ue=O[ve];if(ct[Ue]&(D|S|U)){A(Ue,B);for(var Jn=ve-1;Jn>=0&&ct[O[Jn]]&l;Jn--)A(O[Jn],B);for(var un=ve+1;un<O.length&&ct[O[un]]&l;un++)A(O[un],B)}}if(P.get(M))for(var qo=0,Lc=At;qo<O.length;qo++){var Ic=O[qo],Ko=ct[Ic];Ko&M?Lc===E&&A(Ic,E):Ko&o&&(Lc=Ko)}if(P.get(a)){var Ir=C|M|w,Fc=Ir|E,Ss=[];{for(var Bi=[],Oi=0;Oi<O.length;Oi++)if(ct[O[Oi]]&a){var Fr=xt[O[Oi]],Nc=void 0;if(v(Fr)!==null)if(Bi.length<63)Bi.push({char:Fr,seqIndex:Oi});else break;else if((Nc=b(Fr))!==null)for(var Nr=Bi.length-1;Nr>=0;Nr--){var Zo=Bi[Nr].char;if(Zo===Nc||Zo===b(T(Fr))||v(T(Zo))===Fr){Ss.push([Bi[Nr].seqIndex,Oi]),Bi.length=Nr;break}}}Ss.sort(function(We,Mn){return We[0]-Mn[0]})}for(var Jo=0;Jo<Ss.length;Jo++){for(var Bc=Ss[Jo],Ms=Bc[0],$o=Bc[1],Oc=!1,Sn=0,Qo=Ms+1;Qo<$o;Qo++){var kc=O[Qo];if(ct[kc]&Fc){Oc=!0;var zc=ct[kc]&Ir?C:E;if(zc===Ot){Sn=zc;break}}}if(Oc&&!Sn){Sn=At;for(var ta=Ms-1;ta>=0;ta--){var Gc=O[ta];if(ct[Gc]&Fc){var Vc=ct[Gc]&Ir?C:E;Vc!==Ot?Sn=Vc:Sn=Ot;break}}}if(Sn){if(ct[O[Ms]]=ct[O[$o]]=Sn,Sn!==Ot){for(var Br=Ms+1;Br<O.length;Br++)if(!(ct[O[Br]]&l)){h(xt[O[Br]])&W&&(ct[O[Br]]=Sn);break}}if(Sn!==Ot){for(var Or=$o+1;Or<O.length;Or++)if(!(ct[O[Or]]&l)){h(xt[O[Or]])&W&&(ct[O[Or]]=Sn);break}}}}for(var $n=0;$n<O.length;$n++)if(ct[O[$n]]&a){for(var Hc=$n,ea=$n,na=At,kr=$n-1;kr>=0;kr--)if(ct[O[kr]]&l)Hc=kr;else{na=ct[O[kr]]&Ir?C:E;break}for(var Wc=Ut,zr=$n+1;zr<O.length;zr++)if(ct[O[zr]]&(a|l))ea=zr;else{Wc=ct[O[zr]]&Ir?C:E;break}for(var ia=Hc;ia<=ea;ia++)ct[O[ia]]=na===Wc?na:Ot;$n=ea}}}for(var $e=j.start;$e<=j.end;$e++){var Lf=k[$e],bs=ct[$e];if(Lf&1?bs&(E|M|w)&&k[$e]++:bs&C?k[$e]++:bs&(w|M)&&(k[$e]+=2),bs&l&&(k[$e]=$e===0?j.level:k[$e-1]),$e===j.end||h(xt[$e])&(z|L))for(var Es=$e;Es>=0&&h(xt[Es])&c;Es--)k[Es]=j.level}}return{levels:k,paragraphs:Q};function Xc(We,Mn){for(var Xe=We;Xe<xt.length;Xe++){var Qn=ct[Xe];if(Qn&(C|Y))return 1;if(Qn&(L|E)||Mn&&Qn===J)return 0;if(Qn&r){var Yc=If(Xe);Xe=Yc===-1?xt.length:Yc}}return 0}function If(We){for(var Mn=1,Xe=We+1;Xe<xt.length;Xe++){var Qn=ct[Xe];if(Qn&L)break;if(Qn&J){if(--Mn===0)return Xe}else Qn&r&&Mn++}return-1}}var pt="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ft;function gt(){if(!ft){var xt=_(pt,!0),ht=xt.map,Et=xt.reverseMap;Et.forEach(function(ct,kt){ht.set(kt,ct)}),ft=ht}}function I(xt){return gt(),ft.get(xt)||null}function Lt(xt,ht,Et,ct){var kt=xt.length;Et=Math.max(0,Et==null?0:+Et),ct=Math.min(kt-1,ct==null?kt-1:+ct);for(var P=new Map,A=Et;A<=ct;A++)if(ht[A]&1){var k=I(xt[A]);k!==null&&P.set(A,k)}return P}function St(xt,ht,Et,ct){var kt=xt.length;Et=Math.max(0,Et==null?0:+Et),ct=Math.min(kt-1,ct==null?kt-1:+ct);var P=[];return ht.paragraphs.forEach(function(A){var k=Math.max(Et,A.start),et=Math.min(ct,A.end);if(k<et){for(var Q=ht.levels.slice(k,et+1),j=et;j>=k&&h(xt[j])&c;j--)Q[j]=A.level;for(var yt=A.level,lt=1/0,wt=0;wt<Q.length;wt++){var Ct=Q[wt];Ct>yt&&(yt=Ct),Ct<lt&&(lt=Ct|1)}for(var at=yt;at>=lt;at--)for(var _t=0;_t<Q.length;_t++)if(Q[_t]>=at){for(var bt=_t;_t+1<Q.length&&Q[_t+1]>=at;)_t++;_t>bt&&P.push([bt+k,_t+k])}}}),P}function Mt(xt,ht,Et,ct){var kt=mt(xt,ht,Et,ct),P=[].concat(xt);return kt.forEach(function(A,k){P[k]=(ht.levels[A]&1?I(xt[A]):null)||xt[A]}),P.join("")}function mt(xt,ht,Et,ct){for(var kt=St(xt,ht,Et,ct),P=[],A=0;A<xt.length;A++)P[A]=A;return kt.forEach(function(k){for(var et=k[0],Q=k[1],j=P.slice(et,Q+1),yt=j.length;yt--;)P[Q-yt]=j[yt]}),P}return t.closingToOpeningBracket=b,t.getBidiCharType=h,t.getBidiCharTypeName=d,t.getCanonicalBracket=T,t.getEmbeddingLevels=dt,t.getMirroredCharacter=I,t.getMirroredCharactersMap=Lt,t.getReorderSegments=St,t.getReorderedIndices=mt,t.getReorderedString=Mt,t.openingToClosingBracket=v,Object.defineProperty(t,"__esModule",{value:!0}),t})({});return s}const bf=/\bvoid\s+main\s*\(\s*\)\s*{/g;function ic(s){const t=/^[ \t]*#include +<([\w\d./]+)>/gm;function e(i,n){let r=Jt[n];return r?ic(r):i}return s.replace(t,e)}const Le=[];for(let s=0;s<256;s++)Le[s]=(s<16?"0":"")+s.toString(16);function Bx(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toUpperCase()}const Ei=Object.assign||function(){let s=arguments[0];for(let t=1,e=arguments.length;t<e;t++){let i=arguments[t];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},Ox=Date.now(),Sh=new WeakMap,Mh=new Map;let kx=1e10;function rc(s,t){const e=Hx(t);let i=Sh.get(s);if(i||Sh.set(s,i=Object.create(null)),i[e])return new i[e];const n=`_onBeforeCompile${e}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=Mh[f];if(!h){const d=zx(this,c,t,e);h=Mh[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Ei(c.uniforms,this.uniforms),t.timeUniform&&(c.uniforms[t.timeUniform]={get value(){return Date.now()-Ox}}),this[n]&&this[n](c)},o=function(){return a(t.chained?s:s.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:kx++}),u.uuid=Bx(),u.uniforms=Ei({},c.uniforms,t.uniforms),u.defines=Ei({},c.defines,t.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${e}`]="",u.extensions=Ei({},c.extensions,t.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+e}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Ei(this.extensions,c.extensions),Ei(this.defines,c.defines),Ei(this.uniforms,tf.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=rc(s.isDerivedMaterial?s.getDepthMaterial():new of({depthPacking:Yh}),t),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=rc(s.isDerivedMaterial?s.getDistanceMaterial():new af,t),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[e]=o,new o}function zx(s,{vertexShader:t,fragmentShader:e},i,n){let{vertexDefs:r,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=i;if(r=r||"",o=o||"",a=a||"",c=c||"",u=u||"",f=f||"",(l||d)&&(t=ic(t)),(h||d)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=ic(e)),d){let _=d({vertexShader:t,fragmentShader:e});t=_.vertexShader,e=_.fragmentShader}if(h){let _=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(_.push(m),"")),f=`${h}
${_.join(`
`)}
${f}`}if(g){const _=`
uniform float ${g};
`;r=_+r,c=_+c}return l&&(t=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${t}
`,r=`${r}
void troikaVertexTransform${n}() {
  vec3 position = troika_position_${n};
  vec3 normal = troika_normal_${n};
  vec2 uv = troika_uv_${n};
  ${l}
  troika_position_${n} = position;
  troika_normal_${n} = normal;
  troika_uv_${n} = uv;
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}();
${o}
`,t=t.replace(/\b(position|normal|uv)\b/g,(_,m,p,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,p))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(t=t.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),t=bh(t,n,r,o,a),e=bh(e,n,c,u,f),{vertexShader:t,fragmentShader:e}}function bh(s,t,e,i,n){return(i||n||e)&&(s=s.replace(bf,`
${e}
void troikaOrigMain${t}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${t}();
  ${n}
}`),s}function Gx(s,t){return s==="uniforms"?void 0:typeof t=="function"?t.toString():t}let Vx=0;const Eh=new Map;function Hx(s){const t=JSON.stringify(s,Gx);let e=Eh.get(t);return e==null&&Eh.set(t,e=++Vx),e}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Wx(){return typeof window>"u"&&(self.window=self),(function(s){var t={parse:function(n){var r=t._bin,o=new Uint8Array(n);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(o,a);a+=4,c.push(t._readFont(o,f))}return c}return[t._readFont(o,0)]},_readFont:function(n,r){var o=t._bin,a=r;o.readFixed(n,r),r+=4;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:a},f={},h=0;h<l;h++){var d=o.readASCII(n,r,4);r+=4,o.readUint(n,r),r+=4;var g=o.readUint(n,r);r+=4;var _=o.readUint(n,r);r+=4,f[d]={offset:g,length:_}}for(h=0;h<c.length;h++){var m=c[h];f[m]&&(u[m.trim()]=t[m.trim()].parse(n,f[m].offset,f[m].length,u))}return u},_tabOffset:function(n,r,o){for(var a=t._bin,l=a.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var f=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var h=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,f==r)return h}return 0}};t._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return t._bin.readShort(n,r)/16384},readInt:function(n,r){return t._bin._view(n).getInt32(r)},readInt8:function(n,r){return t._bin._view(n).getInt8(r)},readShort:function(n,r){return t._bin._view(n).getInt16(r)},readUshort:function(n,r){return t._bin._view(n).getUint16(r)},readUshorts:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(t._bin.readUshort(n,r+2*l));return a},readUint:function(n,r){return t._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*t._bin.readUint(n,r)+t._bin.readUint(n,r+4)},readASCII:function(n,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(n[r+l]);return a},readUnicode:function(n,r,o){for(var a="",l=0;l<o;l++){var c=n[r++]<<8|n[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,o){var a=t._bin._tdec;return a&&r==0&&o==n.length?a.decode(n):t._bin.readASCII(n,r,o)},readBytes:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(n[r+l]);return a},readASCIIArray:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(n[r+l]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},t._lctf={},t._lctf.parse=function(n,r,o,a,l){var c=t._bin,u={},f=r;c.readFixed(n,r),r+=4;var h=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=t._lctf.readScriptList(n,f+h),u.featureList=t._lctf.readFeatureList(n,f+d),u.lookupList=t._lctf.readLookupList(n,f+g,l),u},t._lctf.readLookupList=function(n,r,o){var a=t._bin,l=r,c=[],u=a.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=a.readUshort(n,r);r+=2;var d=t._lctf.readLookupTable(n,l+h,o);c.push(d)}return c},t._lctf.readLookupTable=function(n,r,o){var a=t._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(n,r),r+=2,c.flag=a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var d=a.readUshort(n,r);r+=2;var g=o(n,f,l+d,c);c.tabs.push(g)}return c},t._lctf.numOfOnes=function(n){for(var r=0,o=0;o<32;o++)(n>>>o&1)!=0&&r++;return r},t._lctf.readClassDef=function(n,r){var o=t._bin,a=[],l=o.readUshort(n,r);if(r+=2,l==1){var c=o.readUshort(n,r);r+=2;var u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++)a.push(c+f),a.push(c+f),a.push(o.readUshort(n,r)),r+=2}if(l==2){var h=o.readUshort(n,r);for(r+=2,f=0;f<h;f++)a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2}return a},t._lctf.getInterval=function(n,r){for(var o=0;o<n.length;o+=3){var a=n[o],l=n[o+1];if(n[o+2],a<=r&&r<=l)return o}return-1},t._lctf.readCoverage=function(n,r){var o=t._bin,a={};a.fmt=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(n,r,l)),a.fmt==2&&(a.tab=o.readUshorts(n,r,3*l)),a},t._lctf.coverageIndex=function(n,r){var o=n.tab;if(n.fmt==1)return o.indexOf(r);if(n.fmt==2){var a=t._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},t._lctf.readFeatureList=function(n,r){var o=t._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,r,4);r+=4;var h=o.readUshort(n,r);r+=2;var d=t._lctf.readFeatureTable(n,a+h);d.tag=f.trim(),l.push(d)}return l},t._lctf.readFeatureTable=function(n,r){var o=t._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(n,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(n,r+2*f));return l},t._lctf.readScriptList=function(n,r){var o=t._bin,a=r,l={},c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,r,4);r+=4;var h=o.readUshort(n,r);r+=2,l[f.trim()]=t._lctf.readScriptTable(n,a+h)}return l},t._lctf.readScriptTable=function(n,r){var o=t._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.default=t._lctf.readLangSysTable(n,a+c));var u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=o.readASCII(n,r,4);r+=4;var d=o.readUshort(n,r);r+=2,l[h.trim()]=t._lctf.readLangSysTable(n,a+d)}return l},t._lctf.readLangSysTable=function(n,r){var o=t._bin,a={};o.readUshort(n,r),r+=2,a.reqFeature=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.features=o.readUshorts(n,r,l),a},t.CFF={},t.CFF.parse=function(n,r,o){var a=t._bin;(n=new Uint8Array(n.buffer,r,o))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=t.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=t.CFF.readIndex(n,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(t.CFF.readDict(n,r+f[u],r+f[u+1]));r+=f[f.length-1];var d=h[0],g=[];r=t.CFF.readIndex(n,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(a.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],t.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,g=[],r=t.CFF.readIndex(n,r,g);var m=[];for(u=0;u<g.length-1;u++)m.push(a.readBytes(n,r+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){r=d.FDArray;var p=[];for(r=t.CFF.readIndex(n,r,p),d.FDArray=[],u=0;u<p.length-1;u++){var y=t.CFF.readDict(n,r+p[u],r+p[u+1]);t.CFF._readFDict(n,y,_),d.FDArray.push(y)}r+=p[p.length-1],r=d.FDSelect,d.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var v=a.readUshort(n,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(a.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=t.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=t.CFF.readCharset(n,d.charset,d.CharStrings.length)),t.CFF._readFDict(n,d,_),d},t.CFF._readFDict=function(n,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=t.CFF.readDict(n,a,a+r.Private[0]),r.Private.Subrs&&t.CFF.readSubrs(n,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},t.CFF.readSubrs=function(n,r,o){var a=t._bin,l=[];r=t.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(a.readBytes(n,r+l[f],l[f+1]-l[f]))},t.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],t.CFF.glyphByUnicode=function(n,r){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==r)return o;return-1},t.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:t.CFF.glyphByUnicode(n,t.CFF.tableSE[r])},t.CFF.readEncoding=function(n,r,o){t._bin;var a=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)a.push(n[r+u]);return a},t.CFF.readCharset=function(n,r,o){var a=t._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<o;u++){var f=a.readUshort(n,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=a.readUshort(n,r),r+=2;var h=0;for(c==1?(h=n[r],r++):(h=a.readUshort(n,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},t.CFF.readIndex=function(n,r,o){var a=t._bin,l=a.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},t.CFF.getCharString=function(n,r,o){var a=t._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=a.readShort(n,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=a.readInt(n,r+1)/65535,u=5),o.val=h??"o"+f,o.size=u},t.CFF.readCharString=function(n,r,o){for(var a=r+o,l=t._bin,c=[];r<a;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(n,r+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(n,r+1)/65535,h=5),c.push(g??"o"+d),r+=h}return c},t.CFF.readDict=function(n,r,o){for(var a=t._bin,l={},c=[];r<o;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,d=null,g=null;if(u==28&&(g=a.readShort(n,r+1),h=3),u==29&&(g=a.readInt(n,r+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=a.readInt(n,r+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var m=n[r+h];h++;var p=m>>4,y=15&m;if(p!=15&&_.push(p),y!=15&&_.push(y),y==15)break}for(var x="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],b=0;b<_.length;b++)x+=v[_[b]];g=parseFloat(x)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=h}return l},t.cmap={},t.cmap.parse=function(n,r,o){n=new Uint8Array(n.buffer,r,o),r=0;var a=t._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=a.readUshort(n,r);r+=2;var d=a.readUshort(n,r);r+=2;var g=a.readUint(n,r);r+=4;var _="p"+h+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var y=a.readUshort(n,g);y==0?p=t.cmap.parse0(n,g):y==4?p=t.cmap.parse4(n,g):y==6?p=t.cmap.parse6(n,g):y==12?p=t.cmap.parse12(n,g):console.debug("unknown format: "+y,h,d,g),l.tables.push(p)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=m}return l},t.cmap.parse0=function(n,r){var o=t._bin,a={};a.format=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(n[r+c]);return a},t.cmap.parse4=function(n,r){var o=t._bin,a=r,l={};l.format=o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;var f=u/2;l.searchRange=o.readUshort(n,r),r+=2,l.entrySelector=o.readUshort(n,r),r+=2,l.rangeShift=o.readUshort(n,r),r+=2,l.endCount=o.readUshorts(n,r,f),r+=2*f,r+=2,l.startCount=o.readUshorts(n,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(o.readShort(n,r)),r+=2;for(l.idRangeOffset=o.readUshorts(n,r,f),r+=2*f,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(n,r)),r+=2;return l},t.cmap.parse6=function(n,r){var o=t._bin,a={};a.format=o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,a.firstCode=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(n,r)),r+=2;return a},t.cmap.parse12=function(n,r){var o=t._bin,a={};a.format=o.readUshort(n,r),r+=2,r+=2,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4;var l=o.readUint(n,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=o.readUint(n,u+0),h=o.readUint(n,u+4),d=o.readUint(n,u+8);a.groups.push([f,h,d])}return a},t.glyf={},t.glyf.parse=function(n,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},t.glyf._parseGlyf=function(n,r){var o=t._bin,a=n._data,l=t._tabOffset(a,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var f=o.readUshort(a,l);if(l+=2,a.length-l<f)return null;c.instructions=o.readBytes(a,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var g=a[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?a[l]:-a[l]),l++):p?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?a[l]:-a[l]),l++):p?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var y=0,x=0;for(u=0;u<h;u++)y+=c.xs[u],x+=c.ys[u],c.xs[u]=y,c.ys[u]=x}else{var v;c.parts=[];do{v=o.readUshort(a,l),l+=2;var b={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(b),b.glyphIndex=o.readUshort(a,l),l+=2,1&v){var T=o.readShort(a,l);l+=2;var E=o.readShort(a,l);l+=2}else T=o.readInt8(a,l),l++,E=o.readInt8(a,l),l++;2&v?(b.m.tx=T,b.m.ty=E):(b.p1=T,b.p2=E),8&v?(b.m.a=b.m.d=o.readF2dot14(a,l),l+=2):64&v?(b.m.a=o.readF2dot14(a,l),l+=2,b.m.d=o.readF2dot14(a,l),l+=2):128&v&&(b.m.a=o.readF2dot14(a,l),l+=2,b.m.b=o.readF2dot14(a,l),l+=2,b.m.c=o.readF2dot14(a,l),l+=2,b.m.d=o.readF2dot14(a,l),l+=2)}while(32&v);if(256&v){var C=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<C;u++)c.instr.push(a[l]),l++}}return c},t.GDEF={},t.GDEF.parse=function(n,r,o,a){var l=r;r+=4;var c=t._bin.readUshort(n,r);return{glyphClassDef:c===0?null:t._lctf.readClassDef(n,l+c)}},t.GPOS={},t.GPOS.parse=function(n,r,o,a){return t._lctf.parse(n,r,o,a,t.GPOS.subt)},t.GPOS.subt=function(n,r,o,a){var l=t._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(n,o);o+=2,u.coverage=t._lctf.readCoverage(n,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(n,o);o+=2,h!=0&&(u.pos=t.GPOS.readValueRecord(n,o,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,o),o+=2;var d=l.readUshort(n,o);o+=2;var g=t._lctf.numOfOnes(h),_=t._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,o);o+=2;for(var p=0;p<m;p++){var y=c+l.readUshort(n,o);o+=2;var x=l.readUshort(n,y);y+=2;for(var v=[],b=0;b<x;b++){var T=l.readUshort(n,y);y+=2,h!=0&&(w=t.GPOS.readValueRecord(n,y,h),y+=2*g),d!=0&&(U=t.GPOS.readValueRecord(n,y,d),y+=2*_),v.push({gid2:T,val1:w,val2:U})}u.pairsets.push(v)}}if(u.fmt==2){var E=l.readUshort(n,o);o+=2;var C=l.readUshort(n,o);o+=2;var M=l.readUshort(n,o);o+=2;var S=l.readUshort(n,o);for(o+=2,u.classDef1=t._lctf.readClassDef(n,c+E),u.classDef2=t._lctf.readClassDef(n,c+C),u.matrix=[],p=0;p<M;p++){var D=[];for(b=0;b<S;b++){var w=null,U=null;h!=0&&(w=t.GPOS.readValueRecord(n,o,h),o+=2*g),d!=0&&(U=t.GPOS.readValueRecord(n,o,d),o+=2*_),D.push({val1:w,val2:U})}u.matrix.push(D)}}}else if(r==4&&u.fmt==1)u.markCoverage=t._lctf.readCoverage(n,l.readUshort(n,o)+c),u.baseCoverage=t._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.markArray=t.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.baseArray=t.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=t._lctf.readCoverage(n,l.readUshort(n,o)+c),u.mark2Coverage=t._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.mark1Array=t.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.mark2Array=t.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var L=l.readUshort(n,o);o+=2;var z=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=L;else if(a.ltype!=L)throw"invalid extension substitution";return t.GPOS.subt(n,a.ltype,c+z)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},t.GPOS.readValueRecord=function(n,r,o){var a=t._bin,l=[];return l.push(1&o?a.readShort(n,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(n,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(n,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(n,r):0),r+=8&o?2:0,l},t.GPOS.readBaseArray=function(n,r,o){var a=t._bin,l=[],c=r,u=a.readUshort(n,r);r+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<o;d++)h.push(t.GPOS.readAnchorRecord(n,c+a.readUshort(n,r))),r+=2;l.push(h)}return l},t.GPOS.readMarkArray=function(n,r){var o=t._bin,a=[],l=r,c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=t.GPOS.readAnchorRecord(n,o.readUshort(n,r+2)+l);f.markClass=o.readUshort(n,r),a.push(f),r+=4}return a},t.GPOS.readAnchorRecord=function(n,r){var o=t._bin,a={};return a.fmt=o.readUshort(n,r),a.x=o.readShort(n,r+2),a.y=o.readShort(n,r+4),a},t.GSUB={},t.GSUB.parse=function(n,r,o,a){return t._lctf.parse(n,r,o,a,t.GSUB.subt)},t.GSUB.subt=function(n,r,o,a){var l=t._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(n,o);o+=2,u.coverage=t._lctf.readCoverage(n,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var h=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,h),o+=2*u.newg.length}}else if(r==2&&u.fmt==1){h=l.readUshort(n,o),o+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(n,o)+c;o+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(r==4)for(u.vals=[],h=l.readUshort(n,o),o+=2,d=0;d<h;d++){var m=l.readUshort(n,o);o+=2,u.vals.push(t.GSUB.readLigatureSet(n,c+m))}else if(r==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,o);o+=2,u.cDef=t._lctf.readClassDef(n,c+p),u.scset=[];var y=l.readUshort(n,o);for(o+=2,d=0;d<y;d++){var x=l.readUshort(n,o);o+=2,u.scset.push(x==0?null:t.GSUB.readSubClassSet(n,c+x))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(n,o),o+=2;for(var v=[],b=0;b<h;b++)v.push(t._lctf.readCoverage(n,c+l.readUshort(n,o+2*b)));o+=2*h,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}h=l.readUshort(n,o),o+=2,u.lookupRec=t.GSUB.readSubstLookupRecords(n,o,h)}}else{if(r==7&&u.fmt==1){var T=l.readUshort(n,o);o+=2;var E=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=T;else if(a.ltype!=T)throw"invalid extension substitution";return t.GSUB.subt(n,a.ltype,c+E)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},t.GSUB.readSubClassSet=function(n,r){var o=t._bin.readUshort,a=r,l=[],c=o(n,r);r+=2;for(var u=0;u<c;u++){var f=o(n,r);r+=2,l.push(t.GSUB.readSubClassRule(n,a+f))}return l},t.GSUB.readSubClassRule=function(n,r){var o=t._bin.readUshort,a={},l=o(n,r),c=o(n,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(n,r)),r+=2;return a.substLookupRecords=t.GSUB.readSubstLookupRecords(n,r,c),a},t.GSUB.readSubstLookupRecords=function(n,r,o){for(var a=t._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(n,r),a(n,r+2)),r+=4;return l},t.GSUB.readChainSubClassSet=function(n,r){var o=t._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,r);r+=2,l.push(t.GSUB.readChainSubClassRule(n,a+f))}return l},t.GSUB.readChainSubClassRule=function(n,r){for(var o=t._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,r);r+=2,c==1&&u--,a[l[c]]=o.readUshorts(n,r,u),r+=2*a[l[c]].length}return u=o.readUshort(n,r),r+=2,a.subst=o.readUshorts(n,r,2*u),r+=2*a.subst.length,a},t.GSUB.readLigatureSet=function(n,r){var o=t._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,r);r+=2,l.push(t.GSUB.readLigature(n,a+f))}return l},t.GSUB.readLigature=function(n,r){var o=t._bin,a={chain:[]};a.nglyph=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(n,r)),r+=2;return a},t.head={},t.head.parse=function(n,r,o){var a=t._bin,l={};return a.readFixed(n,r),r+=4,l.fontRevision=a.readFixed(n,r),r+=4,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4,l.flags=a.readUshort(n,r),r+=2,l.unitsPerEm=a.readUshort(n,r),r+=2,l.created=a.readUint64(n,r),r+=8,l.modified=a.readUint64(n,r),r+=8,l.xMin=a.readShort(n,r),r+=2,l.yMin=a.readShort(n,r),r+=2,l.xMax=a.readShort(n,r),r+=2,l.yMax=a.readShort(n,r),r+=2,l.macStyle=a.readUshort(n,r),r+=2,l.lowestRecPPEM=a.readUshort(n,r),r+=2,l.fontDirectionHint=a.readShort(n,r),r+=2,l.indexToLocFormat=a.readShort(n,r),r+=2,l.glyphDataFormat=a.readShort(n,r),r+=2,l},t.hhea={},t.hhea.parse=function(n,r,o){var a=t._bin,l={};return a.readFixed(n,r),r+=4,l.ascender=a.readShort(n,r),r+=2,l.descender=a.readShort(n,r),r+=2,l.lineGap=a.readShort(n,r),r+=2,l.advanceWidthMax=a.readUshort(n,r),r+=2,l.minLeftSideBearing=a.readShort(n,r),r+=2,l.minRightSideBearing=a.readShort(n,r),r+=2,l.xMaxExtent=a.readShort(n,r),r+=2,l.caretSlopeRise=a.readShort(n,r),r+=2,l.caretSlopeRun=a.readShort(n,r),r+=2,l.caretOffset=a.readShort(n,r),r+=2,r+=8,l.metricDataFormat=a.readShort(n,r),r+=2,l.numberOfHMetrics=a.readUshort(n,r),r+=2,l},t.hmtx={},t.hmtx.parse=function(n,r,o,a){for(var l=t._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<a.maxp.numGlyphs;h++)h<a.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,f=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},t.kern={},t.kern.parse=function(n,r,o,a){var l=t._bin,c=l.readUshort(n,r);if(r+=2,c==1)return t.kern.parseV1(n,r-2,o,a);var u=l.readUshort(n,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,o=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=t.kern.readFormat0(n,r,f)}return f},t.kern.parseV1=function(n,r,o,a){var l=t._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,r),r+=4;var h=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=t.kern.readFormat0(n,r,u)}return u},t.kern.readFormat0=function(n,r,o){var a=t._bin,l=-1,c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var f=a.readUshort(n,r);r+=2;var h=a.readUshort(n,r);r+=2;var d=a.readShort(n,r);r+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return r},t.loca={},t.loca.parse=function(n,r,o,a){var l=t._bin,c=[],u=a.head.indexToLocFormat,f=a.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,r+(h<<2)));return c},t.maxp={},t.maxp.parse=function(n,r,o){var a=t._bin,l={},c=a.readUint(n,r);return r+=4,l.numGlyphs=a.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(n,r),r+=2,l.maxContours=a.readUshort(n,r),r+=2,l.maxCompositePoints=a.readUshort(n,r),r+=2,l.maxCompositeContours=a.readUshort(n,r),r+=2,l.maxZones=a.readUshort(n,r),r+=2,l.maxTwilightPoints=a.readUshort(n,r),r+=2,l.maxStorage=a.readUshort(n,r),r+=2,l.maxFunctionDefs=a.readUshort(n,r),r+=2,l.maxInstructionDefs=a.readUshort(n,r),r+=2,l.maxStackElements=a.readUshort(n,r),r+=2,l.maxSizeOfInstructions=a.readUshort(n,r),r+=2,l.maxComponentElements=a.readUshort(n,r),r+=2,l.maxComponentDepth=a.readUshort(n,r),r+=2),l},t.name={},t.name.parse=function(n,r,o){var a=t._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,d=0;d<c;d++){var g=a.readUshort(n,r);r+=2;var _=a.readUshort(n,r);r+=2;var m=a.readUshort(n,r);r+=2;var p=a.readUshort(n,r);r+=2;var y=a.readUshort(n,r);r+=2;var x=a.readUshort(n,r);r+=2;var v,b=f[p],T=h+12*c+x;if(g==0)v=a.readUnicode(n,T,y/2);else if(g==3&&_==0)v=a.readUnicode(n,T,y/2);else if(_==0)v=a.readASCII(n,T,y);else if(_==1)v=a.readUnicode(n,T,y/2);else if(_==3)v=a.readUnicode(n,T,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;v=a.readASCII(n,T,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var E="p"+g+","+m.toString(16);l[E]==null&&(l[E]={}),l[E][b!==void 0?b:p]=v,l[E]._lang=m}for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==1033)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==0)return l[C];for(var C in l)if(l[C].postScriptName!=null&&l[C]._lang==3084)return l[C];for(var C in l)if(l[C].postScriptName!=null)return l[C];for(var C in l){u=C;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},t["OS/2"]={},t["OS/2"].parse=function(n,r,o){var a=t._bin.readUshort(n,r);r+=2;var l={};if(a==0)t["OS/2"].version0(n,r,l);else if(a==1)t["OS/2"].version1(n,r,l);else if(a==2||a==3||a==4)t["OS/2"].version2(n,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;t["OS/2"].version5(n,r,l)}return l},t["OS/2"].version0=function(n,r,o){var a=t._bin;return o.xAvgCharWidth=a.readShort(n,r),r+=2,o.usWeightClass=a.readUshort(n,r),r+=2,o.usWidthClass=a.readUshort(n,r),r+=2,o.fsType=a.readUshort(n,r),r+=2,o.ySubscriptXSize=a.readShort(n,r),r+=2,o.ySubscriptYSize=a.readShort(n,r),r+=2,o.ySubscriptXOffset=a.readShort(n,r),r+=2,o.ySubscriptYOffset=a.readShort(n,r),r+=2,o.ySuperscriptXSize=a.readShort(n,r),r+=2,o.ySuperscriptYSize=a.readShort(n,r),r+=2,o.ySuperscriptXOffset=a.readShort(n,r),r+=2,o.ySuperscriptYOffset=a.readShort(n,r),r+=2,o.yStrikeoutSize=a.readShort(n,r),r+=2,o.yStrikeoutPosition=a.readShort(n,r),r+=2,o.sFamilyClass=a.readShort(n,r),r+=2,o.panose=a.readBytes(n,r,10),r+=10,o.ulUnicodeRange1=a.readUint(n,r),r+=4,o.ulUnicodeRange2=a.readUint(n,r),r+=4,o.ulUnicodeRange3=a.readUint(n,r),r+=4,o.ulUnicodeRange4=a.readUint(n,r),r+=4,o.achVendID=[a.readInt8(n,r),a.readInt8(n,r+1),a.readInt8(n,r+2),a.readInt8(n,r+3)],r+=4,o.fsSelection=a.readUshort(n,r),r+=2,o.usFirstCharIndex=a.readUshort(n,r),r+=2,o.usLastCharIndex=a.readUshort(n,r),r+=2,o.sTypoAscender=a.readShort(n,r),r+=2,o.sTypoDescender=a.readShort(n,r),r+=2,o.sTypoLineGap=a.readShort(n,r),r+=2,o.usWinAscent=a.readUshort(n,r),r+=2,o.usWinDescent=a.readUshort(n,r),r+=2},t["OS/2"].version1=function(n,r,o){var a=t._bin;return r=t["OS/2"].version0(n,r,o),o.ulCodePageRange1=a.readUint(n,r),r+=4,o.ulCodePageRange2=a.readUint(n,r),r+=4},t["OS/2"].version2=function(n,r,o){var a=t._bin;return r=t["OS/2"].version1(n,r,o),o.sxHeight=a.readShort(n,r),r+=2,o.sCapHeight=a.readShort(n,r),r+=2,o.usDefault=a.readUshort(n,r),r+=2,o.usBreak=a.readUshort(n,r),r+=2,o.usMaxContext=a.readUshort(n,r),r+=2},t["OS/2"].version5=function(n,r,o){var a=t._bin;return r=t["OS/2"].version2(n,r,o),o.usLowerOpticalPointSize=a.readUshort(n,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(n,r),r+=2},t.post={},t.post.parse=function(n,r,o){var a=t._bin,l={};return l.version=a.readFixed(n,r),r+=4,l.italicAngle=a.readFixed(n,r),r+=4,l.underlinePosition=a.readShort(n,r),r+=2,l.underlineThickness=a.readShort(n,r),r+=2,l},t==null&&(t={}),t.U==null&&(t.U={}),t.U.codeToGlyph=function(n,r){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},t.U.glyphToPath=function(n,r){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var a=n.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=t.SVG.toPath(a),n.SVG.entries[r]=a),a)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}t.U._drawCFF(n.CFF.CharStrings[r],l,c,u,o)}else n.glyf&&t.U._drawGlyf(r,n,o);return o},t.U._drawGlyf=function(n,r,o){var a=r.glyf[n];a==null&&(a=r.glyf[n]=t.glyf._parseGlyf(r,n)),a!=null&&(a.noc>-1?t.U._simpleGlyph(a,o):t.U._compoGlyph(a,r,o))},t.U._simpleGlyph=function(n,r){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,f=c==l?a:c+1,h=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[f],_=n.xs[c],m=n.ys[c];if(c==a)if(h){if(!d){t.U.P.moveTo(r,_,m);continue}t.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?t.U.P.moveTo(r,n.xs[u],n.ys[u]):t.U.P.moveTo(r,(n.xs[u]+_)/2,(n.ys[u]+m)/2);h?d&&t.U.P.lineTo(r,_,m):g?t.U.P.qcurveTo(r,_,m,n.xs[f],n.ys[f]):t.U.P.qcurveTo(r,_,m,(_+n.xs[f])/2,(m+n.ys[f])/2)}t.U.P.closePath(r)}},t.U._compoGlyph=function(n,r,o){for(var a=0;a<n.parts.length;a++){var l={cmds:[],crds:[]},c=n.parts[a];t.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];o.crds.push(h*u.a+d*u.b+u.tx),o.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},t.U._getGlyphClass=function(n,r){var o=t._lctf.getInterval(r,n);return o==-1?0:r[o+2]},t.U._applySubs=function(n,r,o,a){for(var l=n.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=t._lctf.coverageIndex(f.coverage,n[r]))!=-1){if(o.ltype==1)n[r],f.fmt==1?n[r]=n[r]+f.delta:n[r]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],_=g.chain.length;if(!(_>l)){for(var m=!0,p=0,y=0;y<_;y++){for(;n[r+p+(1+y)]==-1;)p++;g.chain[y]!=n[r+p+(1+y)]&&(m=!1)}if(m){for(n[r]=g.nglyph,y=0;y<_+p;y++)n[r+y+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var x=t._lctf.getInterval(f.cDef,n[r]),v=f.cDef[x+2],b=f.scset[v],T=0;T<b.length;T++){var E=b[T],C=E.input;if(!(C.length>l)){for(m=!0,y=0;y<C.length;y++){var M=t._lctf.getInterval(f.cDef,n[r+1+y]);if(x==-1&&f.cDef[M+2]!=C[y]){m=!1;break}}if(m){var S=E.substLookupRecords;for(d=0;d<S.length;d+=2)S[d],S[d+1]}}}else if(o.ltype==6&&f.fmt==3){if(!t.U._glsCovered(n,f.backCvg,r-f.backCvg.length)||!t.U._glsCovered(n,f.inptCvg,r)||!t.U._glsCovered(n,f.ahedCvg,r+f.inptCvg.length))continue;var D=f.lookupRec;for(T=0;T<D.length;T+=2){x=D[T];var w=a[D[T+1]];t.U._applySubs(n,r+x,w,a)}}}}},t.U._glsCovered=function(n,r,o){for(var a=0;a<r.length;a++)if(t._lctf.coverageIndex(r[a],n[o+a])==-1)return!1;return!0},t.U.glyphsToPath=function(n,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=t.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)a.crds.push(h.crds[d]+l),a.crds.push(h.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<h.cmds.length;d++)a.cmds.push(h.cmds[d]);o&&a.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=t.U.getPairAdjustment(n,u,f))}}return a},t.U.P={},t.U.P.moveTo=function(n,r,o){n.cmds.push("M"),n.crds.push(r,o)},t.U.P.lineTo=function(n,r,o){n.cmds.push("L"),n.crds.push(r,o)},t.U.P.curveTo=function(n,r,o,a,l,c,u){n.cmds.push("C"),n.crds.push(r,o,a,l,c,u)},t.U.P.qcurveTo=function(n,r,o,a,l){n.cmds.push("Q"),n.crds.push(r,o,a,l)},t.U.P.closePath=function(n){n.cmds.push("Z")},t.U._drawCFF=function(n,r,o,a,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open,g=0,_=r.x,m=r.y,p=0,y=0,x=0,v=0,b=0,T=0,E=0,C=0,M=0,S=0,D={val:0,size:0};g<n.length;){t.CFF.getCharString(n,g,D);var w=D.val;if(g+=D.size,w=="o1"||w=="o18")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(w=="o3"||w=="o23")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(w=="o4")c.length>1&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),d&&t.U.P.closePath(l),m+=c.pop(),t.U.P.moveTo(l,_,m),d=!0;else if(w=="o5")for(;c.length>0;)_+=c.shift(),m+=c.shift(),t.U.P.lineTo(l,_,m);else if(w=="o6"||w=="o7")for(var U=c.length,L=w=="o6",z=0;z<U;z++){var B=c.shift();L?_+=B:m+=B,L=!L,t.U.P.lineTo(l,_,m)}else if(w=="o8"||w=="o24"){U=c.length;for(var $=0;$+6<=U;)p=_+c.shift(),y=m+c.shift(),x=p+c.shift(),v=y+c.shift(),_=x+c.shift(),m=v+c.shift(),t.U.P.curveTo(l,p,y,x,v,_,m),$+=6;w=="o24"&&(_+=c.shift(),m+=c.shift(),t.U.P.lineTo(l,_,m))}else{if(w=="o11")break;if(w=="o1234"||w=="o1235"||w=="o1236"||w=="o1237")w=="o1234"&&(y=m,x=(p=_+c.shift())+c.shift(),S=v=y+c.shift(),T=v,C=m,_=(E=(b=(M=x+c.shift())+c.shift())+c.shift())+c.shift(),t.U.P.curveTo(l,p,y,x,v,M,S),t.U.P.curveTo(l,b,T,E,C,_,m)),w=="o1235"&&(p=_+c.shift(),y=m+c.shift(),x=p+c.shift(),v=y+c.shift(),M=x+c.shift(),S=v+c.shift(),b=M+c.shift(),T=S+c.shift(),E=b+c.shift(),C=T+c.shift(),_=E+c.shift(),m=C+c.shift(),c.shift(),t.U.P.curveTo(l,p,y,x,v,M,S),t.U.P.curveTo(l,b,T,E,C,_,m)),w=="o1236"&&(p=_+c.shift(),y=m+c.shift(),x=p+c.shift(),S=v=y+c.shift(),T=v,E=(b=(M=x+c.shift())+c.shift())+c.shift(),C=T+c.shift(),_=E+c.shift(),t.U.P.curveTo(l,p,y,x,v,M,S),t.U.P.curveTo(l,b,T,E,C,_,m)),w=="o1237"&&(p=_+c.shift(),y=m+c.shift(),x=p+c.shift(),v=y+c.shift(),M=x+c.shift(),S=v+c.shift(),b=M+c.shift(),T=S+c.shift(),E=b+c.shift(),C=T+c.shift(),Math.abs(E-_)>Math.abs(C-m)?_=E+c.shift():m=C+c.shift(),t.U.P.curveTo(l,p,y,x,v,M,S),t.U.P.curveTo(l,b,T,E,C,_,m));else if(w=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var W=c.shift(),Y=c.shift(),K=c.shift(),F=c.shift(),X=t.CFF.glyphBySE(o,K),tt=t.CFF.glyphBySE(o,F);t.U._drawCFF(o.CharStrings[X],r,o,a,l),r.x=W,r.y=Y,t.U._drawCFF(o.CharStrings[tt],r,o,a,l)}d&&(t.U.P.closePath(l),d=!1)}else if(w=="o19"||w=="o20")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(w=="o21")c.length>2&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),m+=c.pop(),_+=c.pop(),d&&t.U.P.closePath(l),t.U.P.moveTo(l,_,m),d=!0;else if(w=="o22")c.length>1&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),_+=c.pop(),d&&t.U.P.closePath(l),t.U.P.moveTo(l,_,m),d=!0;else if(w=="o25"){for(;c.length>6;)_+=c.shift(),m+=c.shift(),t.U.P.lineTo(l,_,m);p=_+c.shift(),y=m+c.shift(),x=p+c.shift(),v=y+c.shift(),_=x+c.shift(),m=v+c.shift(),t.U.P.curveTo(l,p,y,x,v,_,m)}else if(w=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)p=_,y=m+c.shift(),_=x=p+c.shift(),m=(v=y+c.shift())+c.shift(),t.U.P.curveTo(l,p,y,x,v,_,m);else if(w=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,x=(p=_+c.shift())+c.shift(),v=y+c.shift(),_=x+c.shift(),m=v,t.U.P.curveTo(l,p,y,x,v,_,m);else if(w=="o10"||w=="o29"){var nt=w=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var Z=c.pop(),H=nt.Subrs[Z+nt.Bias];r.x=_,r.y=m,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d,t.U._drawCFF(H,r,o,a,l),_=r.x,m=r.y,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open}}else if(w=="o30"||w=="o31"){var V=c.length,J=($=0,w=="o31");for($+=V-(U=-3&V);$<U;)J?(y=m,x=(p=_+c.shift())+c.shift(),m=(v=y+c.shift())+c.shift(),U-$==5?(_=x+c.shift(),$++):_=x,J=!1):(p=_,y=m+c.shift(),x=p+c.shift(),v=y+c.shift(),_=x+c.shift(),U-$==5?(m=v+c.shift(),$++):m=v,J=!0),t.U.P.curveTo(l,p,y,x,v,_,m),$+=4}else{if((w+"").charAt(0)=="o")throw console.debug("Unknown operation: "+w,n),w;c.push(w)}}}r.x=_,r.y=m,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d};var e=t,i={Typr:e};return s.Typr=e,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Xx(){return(function(s){var t=Uint8Array,e=Uint16Array,i=Uint32Array,n=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(w,U){for(var L=new e(31),z=0;z<31;++z)L[z]=U+=1<<w[z-1];var B=new i(L[30]);for(z=1;z<30;++z)for(var $=L[z];$<L[z+1];++$)B[$]=$-L[z]<<5|z;return[L,B]},l=a(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=a(r,0)[0],h=new e(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(w,U,L){for(var z=w.length,B=0,$=new e(U);B<z;++B)++$[w[B]-1];var W,Y=new e(U);for(B=0;B<U;++B)Y[B]=Y[B-1]+$[B-1]<<1;{W=new e(1<<U);var K=15-U;for(B=0;B<z;++B)if(w[B])for(var F=B<<4|w[B],X=U-w[B],tt=Y[w[B]-1]++<<X,nt=tt|(1<<X)-1;tt<=nt;++tt)W[h[tt]>>>K]=F}return W},m=new t(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new t(32);for(d=0;d<32;++d)p[d]=5;var y=_(m,9),x=_(p,5),v=function(w){for(var U=w[0],L=1;L<w.length;++L)w[L]>U&&(U=w[L]);return U},b=function(w,U,L){var z=U/8|0;return(w[z]|w[z+1]<<8)>>(7&U)&L},T=function(w,U){var L=U/8|0;return(w[L]|w[L+1]<<8|w[L+2]<<16)>>(7&U)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(w,U,L){var z=new Error(U||E[w]);if(z.code=w,Error.captureStackTrace&&Error.captureStackTrace(z,C),!L)throw z;return z},M=function(w,U,L){var z=w.length;if(!z||L&&!L.l&&z<5)return U||new t(0);var B=!U||L,$=!L||L.i;L||(L={}),U||(U=new t(3*z));var W,Y=function(bt){var Pt=U.length;if(bt>Pt){var Tt=new t(Math.max(2*Pt,bt));Tt.set(U),U=Tt}},K=L.f||0,F=L.p||0,X=L.b||0,tt=L.l,nt=L.d,Z=L.m,H=L.n,V=8*z;do{if(!tt){L.f=K=b(w,F,1);var J=b(w,F+1,3);if(F+=3,!J){var dt=w[(Et=((W=F)/8|0)+(7&W&&1)+4)-4]|w[Et-3]<<8,pt=Et+dt;if(pt>z){$&&C(0);break}B&&Y(X+dt),U.set(w.subarray(Et,pt),X),L.b=X+=dt,L.p=F=8*pt;continue}if(J==1)tt=y,nt=x,Z=9,H=5;else if(J==2){var ft=b(w,F,31)+257,gt=b(w,F+10,15)+4,I=ft+b(w,F+5,31)+1;F+=14;for(var Lt=new t(I),St=new t(19),Mt=0;Mt<gt;++Mt)St[o[Mt]]=b(w,F+3*Mt,7);F+=3*gt;var mt=v(St),xt=(1<<mt)-1,ht=_(St,mt);for(Mt=0;Mt<I;){var Et,ct=ht[b(w,F,xt)];if(F+=15&ct,(Et=ct>>>4)<16)Lt[Mt++]=Et;else{var kt=0,P=0;for(Et==16?(P=3+b(w,F,3),F+=2,kt=Lt[Mt-1]):Et==17?(P=3+b(w,F,7),F+=3):Et==18&&(P=11+b(w,F,127),F+=7);P--;)Lt[Mt++]=kt}}var A=Lt.subarray(0,ft),k=Lt.subarray(ft);Z=v(A),H=v(k),tt=_(A,Z),nt=_(k,H)}else C(1);if(F>V){$&&C(0);break}}B&&Y(X+131072);for(var et=(1<<Z)-1,Q=(1<<H)-1,j=F;;j=F){var yt=(kt=tt[T(w,F)&et])>>>4;if((F+=15&kt)>V){$&&C(0);break}if(kt||C(2),yt<256)U[X++]=yt;else{if(yt==256){j=F,tt=null;break}var lt=yt-254;if(yt>264){var wt=n[Mt=yt-257];lt=b(w,F,(1<<wt)-1)+c[Mt],F+=wt}var Ct=nt[T(w,F)&Q],at=Ct>>>4;if(Ct||C(3),F+=15&Ct,k=f[at],at>3&&(wt=r[at],k+=T(w,F)&(1<<wt)-1,F+=wt),F>V){$&&C(0);break}B&&Y(X+131072);for(var _t=X+lt;X<_t;X+=4)U[X]=U[X-k],U[X+1]=U[X+1-k],U[X+2]=U[X+2-k],U[X+3]=U[X+3-k];X=_t}}L.l=tt,L.p=j,L.b=X,tt&&(K=1,L.m=Z,L.d=nt,L.n=H)}while(!K);return X==U.length?U:(function(bt,Pt,Tt){(Tt==null||Tt>bt.length)&&(Tt=bt.length);var Gt=new(bt instanceof e?e:bt instanceof i?i:t)(Tt-Pt);return Gt.set(bt.subarray(Pt,Tt)),Gt})(U,0,X)},S=new t(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(S,{stream:!0})}catch{}return s.convert_streams=function(w){var U=new DataView(w),L=0;function z(){var ft=U.getUint16(L);return L+=2,ft}function B(){var ft=U.getUint32(L);return L+=4,ft}function $(ft){dt.setUint16(pt,ft),pt+=2}function W(ft){dt.setUint32(pt,ft),pt+=4}for(var Y={signature:B(),flavor:B(),length:B(),numTables:z(),reserved:z(),totalSfntSize:B(),majorVersion:z(),minorVersion:z(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},K=0;Math.pow(2,K)<=Y.numTables;)K++;K--;for(var F=16*Math.pow(2,K),X=16*Y.numTables-F,tt=12,nt=[],Z=0;Z<Y.numTables;Z++)nt.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),tt+=16;var H,V=new Uint8Array(12+16*nt.length+nt.reduce((function(ft,gt){return ft+gt.origLength+4}),0)),J=V.buffer,dt=new DataView(J),pt=0;return W(Y.flavor),$(Y.numTables),$(F),$(K),$(X),nt.forEach((function(ft){W(ft.tag),W(ft.origChecksum),W(tt),W(ft.origLength),ft.outOffset=tt,(tt+=ft.origLength)%4!=0&&(tt+=4-tt%4)})),nt.forEach((function(ft){var gt,I=w.slice(ft.offset,ft.offset+ft.compLength);if(ft.compLength!=ft.origLength){var Lt=new Uint8Array(ft.origLength);gt=new Uint8Array(I,2),M(gt,Lt)}else Lt=new Uint8Array(I);V.set(Lt,ft.outOffset);var St=0;(tt=ft.outOffset+ft.origLength)%4!=0&&(St=4-tt%4),V.set(new Uint8Array(St).buffer,ft.outOffset+ft.origLength),H=tt+St})),J.slice(0,H)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function Yx(s,t){const e={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,o=4,a=8,l=16,c=32;let u;function f(E){if(!u){const C={R:r,L:n,D:o,C:l,U:c,T:a};u=new Map;for(let M in i){let S=0;i[M].split(",").forEach(D=>{let[w,U]=D.split("+");w=parseInt(w,36),U=U?parseInt(U,36):0,u.set(S+=w,C[M]);for(let L=U;L--;)u.set(++S,C[M])})}}return u.get(E)||c}const h=1,d=2,g=3,_=4,m=[null,"isol","init","fina","medi"];function p(E){const C=new Uint8Array(E.length);let M=c,S=h,D=-1;for(let w=0;w<E.length;w++){const U=E.codePointAt(w);let L=f(U)|0,z=h;L&a||(M&(n|o|l)?L&(r|o|l)?(z=g,(S===h||S===g)&&C[D]++):L&(n|c)&&(S===d||S===_)&&C[D]--:M&(r|c)&&(S===d||S===_)&&C[D]--,S=C[w]=z,M=L,D=w,U>65535&&w++)}return C}function y(E,C){const M=[];for(let D=0;D<C.length;D++){const w=C.codePointAt(D);w>65535&&D++,M.push(s.U.codeToGlyph(E,w))}const S=E.GSUB;if(S){const{lookupList:D,featureList:w}=S;let U;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,z=[];w.forEach(B=>{if(L.test(B.tag))for(let $=0;$<B.tab.length;$++){if(z[B.tab[$]])continue;z[B.tab[$]]=!0;const W=D[B.tab[$]],Y=/^(isol|init|fina|medi)$/.test(B.tag);Y&&!U&&(U=p(C));for(let K=0;K<M.length;K++)(!U||!Y||m[U[K]]===B.tag)&&s.U._applySubs(M,K,W,D)}})}return M}function x(E,C){const M=new Int16Array(C.length*3);let S=0;for(;S<C.length;S++){const L=C[S];if(L===-1)continue;M[S*3+2]=E.hmtx.aWidth[L];const z=E.GPOS;if(z){const B=z.lookupList;for(let $=0;$<B.length;$++){const W=B[$];for(let Y=0;Y<W.tabs.length;Y++){const K=W.tabs[Y];if(W.ltype===1){if(s._lctf.coverageIndex(K.coverage,L)!==-1&&K.pos){U(K.pos,S);break}}else if(W.ltype===2){let F=null,X=D();if(X!==-1){const tt=s._lctf.coverageIndex(K.coverage,C[X]);if(tt!==-1){if(K.fmt===1){const nt=K.pairsets[tt];for(let Z=0;Z<nt.length;Z++)nt[Z].gid2===L&&(F=nt[Z])}else if(K.fmt===2){const nt=s.U._getGlyphClass(C[X],K.classDef1),Z=s.U._getGlyphClass(L,K.classDef2);F=K.matrix[nt][Z]}if(F){F.val1&&U(F.val1,X),F.val2&&U(F.val2,S);break}}}}else if(W.ltype===4){const F=s._lctf.coverageIndex(K.markCoverage,L);if(F!==-1){const X=D(w),tt=X===-1?-1:s._lctf.coverageIndex(K.baseCoverage,C[X]);if(tt!==-1){const nt=K.markArray[F],Z=K.baseArray[tt][nt.markClass];M[S*3]=Z.x-nt.x+M[X*3]-M[X*3+2],M[S*3+1]=Z.y-nt.y+M[X*3+1];break}}}else if(W.ltype===6){const F=s._lctf.coverageIndex(K.mark1Coverage,L);if(F!==-1){const X=D();if(X!==-1){const tt=C[X];if(v(E,tt)===3){const nt=s._lctf.coverageIndex(K.mark2Coverage,tt);if(nt!==-1){const Z=K.mark1Array[F],H=K.mark2Array[nt][Z.markClass];M[S*3]=H.x-Z.x+M[X*3]-M[X*3+2],M[S*3+1]=H.y-Z.y+M[X*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const B=D();if(B!==-1){const $=E.kern.glyph1.indexOf(C[B]);if($!==-1){const W=E.kern.rval[$].glyph2.indexOf(L);W!==-1&&(M[B*3+2]+=E.kern.rval[$].vals[W])}}}}return M;function D(L){for(let z=S-1;z>=0;z--)if(C[z]!==-1&&(!L||L(C[z])))return z;return-1}function w(L){return v(E,L)===1}function U(L,z){for(let B=0;B<3;B++)M[z*3+B]+=L[B]||0}}function v(E,C){const M=E.GDEF&&E.GDEF.glyphClassDef;return M?s.U._getGlyphClass(C,M):0}function b(...E){for(let C=0;C<E.length;C++)if(typeof E[C]=="number")return E[C]}function T(E){const C=Object.create(null),M=E["OS/2"],S=E.hhea,D=E.head.unitsPerEm,w=b(M&&M.sTypoAscender,S&&S.ascender,D),U={unitsPerEm:D,ascender:w,descender:b(M&&M.sTypoDescender,S&&S.descender,0),capHeight:b(M&&M.sCapHeight,w),xHeight:b(M&&M.sxHeight,w),lineGap:b(M&&M.sTypoLineGap,S&&S.lineGap),supportsCodePoint(L){return s.U.codeToGlyph(E,L)>0},forEachGlyph(L,z,B,$){let W=0;const Y=1/U.unitsPerEm*z,K=y(E,L);let F=0;const X=x(E,K);return K.forEach((tt,nt)=>{if(tt!==-1){let Z=C[tt];if(!Z){const{cmds:H,crds:V}=s.U.glyphToPath(E,tt);let J="",dt=0;for(let Lt=0,St=H.length;Lt<St;Lt++){const Mt=e[H[Lt]];J+=H[Lt];for(let mt=1;mt<=Mt;mt++)J+=(mt>1?",":"")+V[dt++]}let pt,ft,gt,I;if(V.length){pt=ft=1/0,gt=I=-1/0;for(let Lt=0,St=V.length;Lt<St;Lt+=2){let Mt=V[Lt],mt=V[Lt+1];Mt<pt&&(pt=Mt),mt<ft&&(ft=mt),Mt>gt&&(gt=Mt),mt>I&&(I=mt)}}else pt=gt=ft=I=0;Z=C[tt]={index:tt,advanceWidth:E.hmtx.aWidth[tt],xMin:pt,yMin:ft,xMax:gt,yMax:I,path:J}}$.call(null,Z,W+X[nt*3]*Y,X[nt*3+1]*Y,F),W+=X[nt*3+2]*Y,B&&(W+=B*z)}F+=L.codePointAt(F)>65535?2:1}),W}};return U}return function(C){const M=new Uint8Array(C,0,4),S=s._bin.readASCII(M,0,4);if(S==="wOFF")C=t(C);else if(S==="wOF2")throw new Error("woff2 fonts not supported");return T(s.parse(C)[0])}}const jx=Pr({name:"Typr Font Parser",dependencies:[Wx,Xx,Yx],init(s,t,e){const i=s(),n=t();return e(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function qx(){return(function(s){var t=function(){this.buckets=new Map};t.prototype.add=function(x){var v=x>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&x))},t.prototype.has=function(x){var v=this.buckets.get(x>>5);return v!==void 0&&(v&1<<(31&x))!=0},t.prototype.serialize=function(){var x=[];return this.buckets.forEach((function(v,b){x.push((+b).toString(36)+":"+v.toString(36))})),x.join(",")},t.prototype.deserialize=function(x){var v=this;this.buckets.clear(),x.split(",").forEach((function(b){var T=b.split(":");v.buckets.set(parseInt(T[0],36),parseInt(T[1],36))}))};var e=Math.pow(2,8),i=e-1,n=~i;function r(x){var v=(function(T){return T&n})(x).toString(16),b=(function(T){return(T&n)+e-1})(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+v+"-"+b+".json"}function o(x,v){var b=x&i,T=v.codePointAt(b/6|0);return((T=(T||48)-48)&1<<b%6)!=0}function a(x,v){var b;(b=x,b.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(T){return T.split("-").map((function(E){return parseInt(E.trim(),16)}))}))).forEach((function(T){var E=T[0],C=T[1];C===void 0&&(C=E),v(E,C)}))}function l(x,v){a(x,(function(b,T){for(var E=b;E<=T;E++)v(E)}))}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(x){var v=f.get(x);return v||(v=new t,l(x.ranges,(function(b){return v.add(b)})),f.set(x,v)),v}var g,_=new Map;function m(x,v,b){return x[v]?v:x[b]?b:(function(T){for(var E in T)return E})(x)}function p(x,v){var b=v;if(!x.includes(b)){b=1/0;for(var T=0;T<x.length;T++)Math.abs(x[T]-v)<Math.abs(b-v)&&(b=x[T])}return b}function y(x){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(v){g.add(v)}))),g.has(x)}return s.CodePointSet=t,s.clearCache=function(){c={},u={}},s.getFontsForString=function(x,v){v===void 0&&(v={});var b,T=v.lang;T===void 0&&(T=/\p{Script=Hangul}/u.test(b=x)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(b)?"ja":"en");var E=v.category;E===void 0&&(E="sans-serif");var C=v.style;C===void 0&&(C="normal");var M=v.weight;M===void 0&&(M=400);var S=(v.dataUrl||h).replace(/\/$/g,""),D=new Map,w=new Uint8Array(x.length),U={},L={},z=new Array(x.length),B=new Map,$=!1;function W(F){var X=_.get(F);return X||(X=fetch(S+"/"+F).then((function(tt){if(!tt.ok)throw new Error(tt.statusText);return tt.json().then((function(nt){if(!Array.isArray(nt)||nt[0]!==1)throw new Error("Incorrect schema version; need 1, got "+nt[0]);return nt[1]}))})).catch((function(tt){if(S!==h)return $||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+S+'", trying default CDN. '+tt.message),$=!0),S=h,_.delete(F),W(F);throw tt})),_.set(F,X)),X}for(var Y=function(F){var X=x.codePointAt(F),tt=r(X);z[F]=tt,c[tt]||B.has(tt)||B.set(tt,W(tt).then((function(nt){c[tt]=nt}))),X>65535&&(F++,K=F)},K=0;K<x.length;K++)Y(K);return Promise.all(B.values()).then((function(){B.clear();for(var F=function(tt){var nt=x.codePointAt(tt),Z=null,H=c[z[tt]],V=void 0;for(var J in H){var dt=L[J];if(dt===void 0&&(dt=L[J]=new RegExp(J).test(T||"en")),dt){for(var pt in V=J,H[J])if(o(nt,H[J][pt])){Z=pt;break}break}}if(!Z){t:for(var ft in H)if(ft!==V){for(var gt in H[ft])if(o(nt,H[ft][gt])){Z=gt;break t}}}Z||(console.debug("No font coverage for U+"+nt.toString(16)),Z="latin"),z[tt]=Z,u[Z]||B.has(Z)||B.set(Z,W("font-meta/"+Z+".json").then((function(I){u[Z]=I}))),nt>65535&&(tt++,X=tt)},X=0;X<x.length;X++)F(X);return Promise.all(B.values())})).then((function(){for(var F,X=null,tt=0;tt<x.length;tt++){var nt=x.codePointAt(tt);if(X&&(y(nt)||d(X).has(nt)))w[tt]=w[tt-1];else{X=u[z[tt]];var Z=U[X.id];if(!Z){var H=X.typeforms,V=m(H,E,"sans-serif"),J=m(H[V],C,"normal"),dt=p((F=H[V])===null||F===void 0?void 0:F[J],M);Z=U[X.id]=S+"/font-files/"+X.id+"/"+V+"."+J+"."+dt+".woff"}var pt=D.get(Z);pt==null&&(pt=D.size,D.set(Z,pt)),w[tt]=pt}nt>65535&&(tt++,w[tt]=w[tt-1])}return{fontUrls:Array.from(D.keys()),chars:w}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function Kx(s,t){const e=Object.create(null),i=Object.create(null);function n(o,a){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=o,a(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(o,a){let l=e[o];l?a(l):i[o]?i[o].push(a):(i[o]=[a],n(o,c=>{c.src=o,e[o]=c,i[o].forEach(u=>u(c)),delete i[o]}))}return function(o,a,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(o.length),g=[];o.length||y();const _=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let E=0;(function C(M=0){for(let S=M,D=o.length;S<D;S++){const w=o.codePointAt(S);if(E===1&&g[d[S-1]].supportsCodePoint(w)||S>0&&/\s/.test(o[S]))d[S]=d[S-1],E===2&&(m[m.length-1][1]=S);else for(let U=d[S],L=c.length;U<=L;U++)if(U===L){const z=E===2?m[m.length-1]:m[m.length]=[S,S];z[1]=S,E=2}else{d[S]=U;const{src:z,unicodeRange:B}=c[U];if(!B||x(w,B)){const $=e[z];if(!$){r(z,()=>{C(S)});return}if($.supportsCodePoint(w)){let W=_.get($);typeof W!="number"&&(W=g.length,g.push($),_.set($,W)),d[S]=W,E=1;break}}}w>65535&&S+1<D&&(d[S+1]=d[S],S++,E===2&&(m[m.length-1][1]=S))}p()})()}else m.push([0,o.length-1]),p();function p(){if(m.length){const v=m.map(b=>o.substring(b[0],b[1]+1)).join(`
`);t.getFontsForString(v,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:b,chars:T})=>{const E=g.length;let C=0;m.forEach(S=>{for(let D=0,w=S[1]-S[0];D<=w;D++)d[S[0]+D]=T[C++]+E;C++});let M=0;b.forEach((S,D)=>{r(S,w=>{g[D+E]=w,++M===b.length&&y()})})})}else y()}function y(){a({chars:d,fonts:g})}function x(v,b){for(let T=0;T<b.length;T++){const[E,C=E]=b[T];if(E<=v&&v<=C)return!0}return!1}}}const Zx=Pr({name:"FontResolver",dependencies:[Kx,jx,qx],init(s,t,e){return s(t,e())}});function Jx(s,t){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:_,fonts:m,style:p,weight:y,preResolvedFonts:x,unicodeFontsURL:v},b){const T=({chars:E,fonts:C})=>{let M,S;const D=[];for(let w=0;w<E.length;w++)E[w]!==S?(S=E[w],D.push(M={start:w,end:w,fontObj:C[E[w]]})):M.end=w;b(D)};x?T(x):s(g,T,{lang:_,fonts:m,style:p,weight:y,unicodeFontsURL:v})}function a({text:g="",font:_,lang:m,sdfGlyphSize:p=64,fontSize:y=400,fontWeight:x=1,fontStyle:v="normal",letterSpacing:b=0,lineHeight:T="normal",maxWidth:E=1/0,direction:C,textAlign:M="left",textIndent:S=0,whiteSpace:D="normal",overflowWrap:w="normal",anchorX:U=0,anchorY:L=0,metricsOnly:z=!1,unicodeFontsURL:B,preResolvedFonts:$=null,includeCaretPositions:W=!1,chunkedBoundsSize:Y=8192,colorRanges:K=null},F){const X=f(),tt={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,b=+b,E=+E,T=T||"normal",S=+S,o({text:g,lang:m,style:v,weight:x,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:B,preResolvedFonts:$},nt=>{tt.fontLoad=f()-X;const Z=isFinite(E);let H=null,V=null,J=null,dt=null,pt=null,ft=null,gt=null,I=null,Lt=0,St=0,Mt=D!=="nowrap";const mt=new Map,xt=f();let ht=S,Et=0,ct=new h;const kt=[ct];nt.forEach(Q=>{const{fontObj:j}=Q,{ascender:yt,descender:lt,unitsPerEm:wt,lineGap:Ct,capHeight:at,xHeight:_t}=j;let bt=mt.get(j);if(!bt){const ot=y/wt,vt=T==="normal"?(yt-lt+Ct)*ot:T*y,It=(vt-(yt-lt)*ot)/2,ut=Math.min(vt,(yt-lt)*ot),it=(yt+lt)/2*ot+ut/2;bt={index:mt.size,src:j.src,fontObj:j,fontSizeMult:ot,unitsPerEm:wt,ascender:yt*ot,descender:lt*ot,capHeight:at*ot,xHeight:_t*ot,lineHeight:vt,baseline:-It-yt*ot,caretTop:it,caretBottom:it-ut},mt.set(j,bt)}const{fontSizeMult:Pt}=bt,Tt=g.slice(Q.start,Q.end+1);let Gt,G;j.forEachGlyph(Tt,y,b,(ot,vt,It,ut)=>{vt+=Et,ut+=Q.start,Gt=vt,G=ot;const it=g.charAt(ut),Rt=ot.advanceWidth*Pt,Nt=ct.count;let Bt;if("isEmpty"in ot||(ot.isWhitespace=!!it&&new RegExp(n).test(it),ot.canBreakAfter=!!it&&r.test(it),ot.isEmpty=ot.xMin===ot.xMax||ot.yMin===ot.yMax||i.test(it)),!ot.isWhitespace&&!ot.isEmpty&&St++,Mt&&Z&&!ot.isWhitespace&&vt+Rt+ht>E&&Nt){if(ct.glyphAt(Nt-1).glyphObj.canBreakAfter)Bt=new h,ht=-vt;else for(let he=Nt;he--;)if(he===0&&w==="break-word"){Bt=new h,ht=-vt;break}else if(ct.glyphAt(he).glyphObj.canBreakAfter){Bt=ct.splitAt(he+1);const le=Bt.glyphAt(0).x;ht-=le;for(let ge=Bt.count;ge--;)Bt.glyphAt(ge).x-=le;break}Bt&&(ct.isSoftWrapped=!0,ct=Bt,kt.push(ct),Lt=E)}let Vt=ct.glyphAt(ct.count);Vt.glyphObj=ot,Vt.x=vt+ht,Vt.y=It,Vt.width=Rt,Vt.charIndex=ut,Vt.fontData=bt,it===`
`&&(ct=new h,kt.push(ct),ht=-(vt+Rt+b*y)+S)}),Et=Gt+G.advanceWidth*Pt+b*y});let P=0;kt.forEach(Q=>{let j=!0;for(let yt=Q.count;yt--;){const lt=Q.glyphAt(yt);j&&!lt.glyphObj.isWhitespace&&(Q.width=lt.x+lt.width,Q.width>Lt&&(Lt=Q.width),j=!1);let{lineHeight:wt,capHeight:Ct,xHeight:at,baseline:_t}=lt.fontData;wt>Q.lineHeight&&(Q.lineHeight=wt);const bt=_t-Q.baseline;bt<0&&(Q.baseline+=bt,Q.cap+=bt,Q.ex+=bt),Q.cap=Math.max(Q.cap,Q.baseline+Ct),Q.ex=Math.max(Q.ex,Q.baseline+at)}Q.baseline-=P,Q.cap-=P,Q.ex-=P,P+=Q.lineHeight});let A=0,k=0;if(U&&(typeof U=="number"?A=-U:typeof U=="string"&&(A=-Lt*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),L&&(typeof L=="number"?k=-L:typeof L=="string"&&(k=L==="top"?0:L==="top-baseline"?-kt[0].baseline:L==="top-cap"?-kt[0].cap:L==="top-ex"?-kt[0].ex:L==="middle"?P/2:L==="bottom"?P:L==="bottom-baseline"?-kt[kt.length-1].baseline:c(L)*P)),!z){const Q=t.getEmbeddingLevels(g,C);H=new Uint16Array(St),V=new Uint8Array(St),J=new Float32Array(St*2),dt={},gt=[1/0,1/0,-1/0,-1/0],I=[],W&&(ft=new Float32Array(g.length*4)),K&&(pt=new Uint8Array(St*3));let j=0,yt=-1,lt=-1,wt,Ct;if(kt.forEach((at,_t)=>{let{count:bt,width:Pt}=at;if(bt>0){let Tt=0;for(let ut=bt;ut--&&at.glyphAt(ut).glyphObj.isWhitespace;)Tt++;let Gt=0,G=0;if(M==="center")Gt=(Lt-Pt)/2;else if(M==="right")Gt=Lt-Pt;else if(M==="justify"&&at.isSoftWrapped){let ut=0;for(let it=bt-Tt;it--;)at.glyphAt(it).glyphObj.isWhitespace&&ut++;G=(Lt-Pt)/ut}if(G||Gt){let ut=0;for(let it=0;it<bt;it++){let Rt=at.glyphAt(it);const Nt=Rt.glyphObj;Rt.x+=Gt+ut,G!==0&&Nt.isWhitespace&&it<bt-Tt&&(ut+=G,Rt.width+=G)}}const ot=t.getReorderSegments(g,Q,at.glyphAt(0).charIndex,at.glyphAt(at.count-1).charIndex);for(let ut=0;ut<ot.length;ut++){const[it,Rt]=ot[ut];let Nt=1/0,Bt=-1/0;for(let Vt=0;Vt<bt;Vt++)if(at.glyphAt(Vt).charIndex>=it){let he=Vt,le=Vt;for(;le<bt;le++){let ge=at.glyphAt(le);if(ge.charIndex>Rt)break;le<bt-Tt&&(Nt=Math.min(Nt,ge.x),Bt=Math.max(Bt,ge.x+ge.width))}for(let ge=he;ge<le;ge++){const Te=at.glyphAt(ge);Te.x=Bt-(Te.x+Te.width-Nt)}break}}let vt;const It=ut=>vt=ut;for(let ut=0;ut<bt;ut++){const it=at.glyphAt(ut);vt=it.glyphObj;const Rt=vt.index,Nt=Q.levels[it.charIndex]&1;if(Nt){const Bt=t.getMirroredCharacter(g[it.charIndex]);Bt&&it.fontData.fontObj.forEachGlyph(Bt,0,0,It)}if(W){const{charIndex:Bt,fontData:Vt}=it,he=it.x+A,le=it.x+it.width+A;ft[Bt*4]=Nt?le:he,ft[Bt*4+1]=Nt?he:le,ft[Bt*4+2]=at.baseline+Vt.caretBottom+k,ft[Bt*4+3]=at.baseline+Vt.caretTop+k;const ge=Bt-yt;ge>1&&u(ft,yt,ge),yt=Bt}if(K){const{charIndex:Bt}=it;for(;Bt>lt;)lt++,K.hasOwnProperty(lt)&&(Ct=K[lt])}if(!vt.isWhitespace&&!vt.isEmpty){const Bt=j++,{fontSizeMult:Vt,src:he,index:le}=it.fontData,ge=dt[he]||(dt[he]={});ge[Rt]||(ge[Rt]={path:vt.path,pathBounds:[vt.xMin,vt.yMin,vt.xMax,vt.yMax]});const Te=it.x+A,on=it.y+at.baseline+k;J[Bt*2]=Te,J[Bt*2+1]=on;const an=Te+vt.xMin*Vt,yn=on+vt.yMin*Vt,ln=Te+vt.xMax*Vt,cn=on+vt.yMax*Vt;an<gt[0]&&(gt[0]=an),yn<gt[1]&&(gt[1]=yn),ln>gt[2]&&(gt[2]=ln),cn>gt[3]&&(gt[3]=cn),Bt%Y===0&&(wt={start:Bt,end:Bt,rect:[1/0,1/0,-1/0,-1/0]},I.push(wt)),wt.end++;const Se=wt.rect;if(an<Se[0]&&(Se[0]=an),yn<Se[1]&&(Se[1]=yn),ln>Se[2]&&(Se[2]=ln),cn>Se[3]&&(Se[3]=cn),H[Bt]=Rt,V[Bt]=le,K){const Rn=Bt*3;pt[Rn]=Ct>>16&255,pt[Rn+1]=Ct>>8&255,pt[Rn+2]=Ct&255}}}}}),ft){const at=g.length-yt;at>1&&u(ft,yt,at)}}const et=[];mt.forEach(({index:Q,src:j,unitsPerEm:yt,ascender:lt,descender:wt,lineHeight:Ct,capHeight:at,xHeight:_t})=>{et[Q]={src:j,unitsPerEm:yt,ascender:lt,descender:wt,lineHeight:Ct,capHeight:at,xHeight:_t}}),tt.typesetting=f()-xt,F({glyphIds:H,glyphFontIndices:V,glyphPositions:J,glyphData:dt,fontData:et,caretPositions:ft,glyphColors:pt,chunkedBounds:I,fontSize:y,topBaseline:k+kt[0].baseline,blockBounds:[A,k-P,A+Lt,k],visibleBounds:gt,timings:tt})})}function l(g,_){a({...g,metricsOnly:!0},m=>{const[p,y,x,v]=m.blockBounds;_({width:x-p,height:v-y})})}function c(g){let _=g.match(/^([\d.]+)%$/),m=_?parseFloat(_[1]):NaN;return isNaN(m)?0:m/100}function u(g,_,m){const p=g[_*4],y=g[_*4+1],x=g[_*4+2],v=g[_*4+3],b=(y-p)/m;for(let T=0;T<m;T++){const E=(_+T)*4;g[E]=p+b*T,g[E+1]=p+b*(T+1),g[E+2]=x,g[E+3]=v}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*d.length),_}},h.flyweight=d.reduce((g,_,m,p)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+m]},set(y){this.data[this.index*d.length+m]=y}}),g),{data:null,index:0}),{typeset:a,measure:l}}const Pi=()=>(self.performance||Date).now(),Wo=Mf();let Th;function $x(s,t,e,i,n,r,o,a,l,c,u=!0){return u?ty(s,t,e,i,n,r,o,a,l,c).then(null,f=>(Th||(console.warn("WebGL SDF generation failed, falling back to JS",f),Th=!0),wh(s,t,e,i,n,r,o,a,l,c))):wh(s,t,e,i,n,r,o,a,l,c)}const Ro=[],Qx=5;let sc=0;function Ef(){const s=Pi();for(;Ro.length&&Pi()-s<Qx;)Ro.shift()();sc=Ro.length?setTimeout(Ef,0):0}const ty=(...s)=>new Promise((t,e)=>{Ro.push(()=>{const i=Pi();try{Wo.webgl.generateIntoCanvas(...s),t({timing:Pi()-i})}catch(n){e(n)}}),sc||(sc=setTimeout(Ef,0))}),ey=4,ny=2e3,Ah={};let iy=0;function wh(s,t,e,i,n,r,o,a,l,c){const u="TroikaTextSDFGenerator_JS_"+iy++%ey;let f=Ah[u];return f||(f=Ah[u]={workerModule:Pr({name:u,workerId:u,dependencies:[Mf,Pi],init(h,d){const g=h().javascript.generate;return function(..._){const m=d();return{textureData:g(..._),timing:d()-m}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(s,t,e,i,n,r).then(({textureData:h,timing:d})=>{const g=Pi(),_=new Uint8Array(h.length*4);for(let m=0;m<h.length;m++)_[m*4+c]=h[m];return Wo.webglUtils.renderImageData(o,_,a,l,s,t,1<<3-c),d+=Pi()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{Ix(u)},ny)),{timing:d}})}function ry(s){s._warm||(Wo.webgl.isSupported(s),s._warm=!0)}const sy=Wo.webglUtils.resizeWebGLCanvasWithoutClearing,ss={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},oy=new Kt;function fr(){return(self.performance||Date).now()}const Ch=Object.create(null);function ay(s,t){s=cy({},s);const e=fr(),i=[];if(s.font&&i.push({label:"user",src:uy(s.font)}),s.font=i,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||ss.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||ss.unicodeFontsURL,s.colorRanges!=null){let h={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=oy.set(g).getHex()),h[d]=g}s.colorRanges=h}Object.freeze(s);const{textureWidth:n,sdfExponent:r}=ss,{sdfGlyphSize:o}=s,a=n/o*4;let l=Ch[o];if(!l){const h=document.createElement("canvas");h.width=n,h.height=o*256/a,l=Ch[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:h,sdfTexture:new ke(h,void 0,void 0,void 0,pn,pn),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,ly(l)}const{sdfTexture:c,sdfCanvas:u}=l;wf(s).then(h=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:m,fontSize:p,timings:y}=h,x=[],v=new Float32Array(d.length*4);let b=0,T=0;const E=fr(),C=_.map(U=>{let L=l.glyphsByFont.get(U.src);return L||l.glyphsByFont.set(U.src,L=new Map),L});d.forEach((U,L)=>{const z=g[L],{src:B,unitsPerEm:$}=_[z];let W=C[z].get(U);if(!W){const{path:tt,pathBounds:nt}=h.glyphData[B][U],Z=Math.max(nt[2]-nt[0],nt[3]-nt[1])/o*(ss.sdfMargin*o+.5),H=l.glyphCount++,V=[nt[0]-Z,nt[1]-Z,nt[2]+Z,nt[3]+Z];C[z].set(U,W={path:tt,atlasIndex:H,sdfViewBox:V}),x.push(W)}const{sdfViewBox:Y}=W,K=m[T++],F=m[T++],X=p/$;v[b++]=K+Y[0]*X,v[b++]=F+Y[1]*X,v[b++]=K+Y[2]*X,v[b++]=F+Y[3]*X,d[L]=W.atlasIndex}),y.quads=(y.quads||0)+(fr()-E);const M=fr();y.sdf={};const S=u.height,D=Math.ceil(l.glyphCount/a),w=Math.pow(2,Math.ceil(Math.log2(D*o)));w>S&&(console.info(`Increasing SDF texture size ${S}->${w}`),sy(u,n,w),c.dispose()),Promise.all(x.map(U=>Tf(U,l,s.gpuAccelerateSDF).then(({timing:L})=>{y.sdf[U.atlasIndex]=L}))).then(()=>{x.length&&!l.contextLost&&(Af(l),c.needsUpdate=!0),y.sdfTotal=fr()-M,y.total=fr()-e,t(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:o,sdfExponent:r,glyphBounds:v,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||ry(u)})}function Tf({path:s,atlasIndex:t,sdfViewBox:e},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=ss,c=Math.max(e[2]-e[0],e[3]-e[1]),u=Math.floor(t/4),f=u%(a/i)*i,h=Math.floor(u/(a/i))*i,d=t%4;return $x(i,i,s,e,c,l,n,f,h,d,o)}function ly(s){const t=s.sdfCanvas;t.addEventListener("webglcontextlost",e=>{console.log("Context Lost",e),e.preventDefault(),s.contextLost=!0}),t.addEventListener("webglcontextrestored",e=>{console.log("Context Restored",e),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(Tf(r,s,!0))})}),Promise.all(i).then(()=>{Af(s),s.sdfTexture.needsUpdate=!0})})}function cy(s,t){for(let e in t)t.hasOwnProperty(e)&&(s[e]=t[e]);return s}let yo;function uy(s){return yo||(yo=typeof document>"u"?{}:document.createElement("a")),yo.href=s,yo.href}function Af(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:t,sdfTexture:e}=s,{width:i,height:n}=t,r=s.sdfCanvas.getContext("webgl");let o=e.image.data;(!o||o.length!==i*n*4)&&(o=new Uint8Array(i*n*4),e.image={width:i,height:n,data:o},e.flipY=!1,e.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,o)}}const hy=Pr({name:"Typesetter",dependencies:[Jx,Zx,Nx],init(s,t,e){return s(t,e())}}),wf=Pr({name:"Typesetter",dependencies:[hy],init(s){return function(t){return new Promise(e=>{s.typeset(t,e)})}},getTransferables(s){const t=[];for(let e in s)s[e]&&s[e].buffer&&t.push(s[e].buffer);return t}});wf.onMainThread;const Rh={};function fy(s){let t=Rh[s];return t||(t=Rh[s]=new mi(1,1,s,s).translate(.5,.5,0)),t}const dy="aTroikaGlyphBounds",Ph="aTroikaGlyphIndex",py="aTroikaGlyphColor";class my extends cp{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new sn,this.boundingBox=new fe}computeBoundingSphere(){}computeBoundingBox(){}set detail(t){if(t!==this._detail){this._detail=t,(typeof t!="number"||t<1)&&(t=1);let e=fy(t);["position","normal","uv"].forEach(i=>{this.attributes[i]=e.attributes[i].clone()}),this.setIndex(e.getIndex().clone())}}get detail(){return this._detail}set curveRadius(t){t!==this._curveRadius&&(this._curveRadius=t,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(t,e,i,n,r){this.updateAttributeData(dy,t,4),this.updateAttributeData(Ph,e,1),this.updateAttributeData(py,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=e.length,this._updateBounds()}_updateBounds(){const t=this._blockBounds;if(t){const{curveRadius:e,boundingBox:i}=this;if(e){const{PI:n,floor:r,min:o,max:a,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(e),d=t[0]/h,g=t[2]/h,_=r((d+u)/f)!==r((g+u)/f)?-h:o(l(d)*h,l(g)*h),m=r((d-u)/f)!==r((g-u)/f)?h:a(l(d)*h,l(g)*h),p=r((d+n)/f)!==r((g+n)/f)?h*2:a(h-c(d)*h,h-c(g)*h);i.min.set(_,t[1],e<0?-p:0),i.max.set(m,t[3],e<0?0:p)}else i.min.set(t[0],t[1],0),i.max.set(t[2],t[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(t){let e=this.getAttribute(Ph).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){e=i[n].end;let r=i[n].rect;if(r[1]<t.w&&r[3]>t.y&&r[0]<t.z&&r[2]>t.x)break}this.instanceCount=e}updateAttributeData(t,e,i){const n=this.getAttribute(t);e?n&&n.array.length===e.length?(n.array.set(e),n.needsUpdate=!0):(this.setAttribute(t,new Hl(e,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(t)}}const gy=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,_y=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,vy=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,xy=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function yy(s){const t=rc(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Yt},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new pe(0,0,0,0)},uTroikaClipRect:{value:new pe(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Yt},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Kt},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new qt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:gy,vertexTransform:_y,fragmentDefs:vy,fragmentColorTransform:xy,customRewriter({vertexShader:e,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(e)||(e=e.replace(bf,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:e,fragmentShader:i}}});return t.transparent=!0,t.forceSinglePass=!0,Object.defineProperties(t,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),t}const Pc=new wr({color:16777215,side:dn,transparent:!0}),Dh=8421504,Uh=new Qt,So=new N,Qa=new N,ns=[],Sy=new N,tl="+x+y";function Lh(s){return Array.isArray(s)?s[0]:s}let Cf=()=>{const s=new ye(new mi(1,1),Pc);return Cf=()=>s,s},Rf=()=>{const s=new ye(new mi(1,1,32,1),Pc);return Rf=()=>s,s};const My={type:"syncstart"},by={type:"synccomplete"},Pf=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Ey=Pf.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Po extends ye{constructor(){const t=new my;super(t,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Dh,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=tl,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(t){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(t):(this._isSyncing=!0,this.dispatchEvent(My),ay({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},e=>{this._isSyncing=!1,this._textRenderInfo=e,this.geometry.updateGlyphs(e.glyphBounds,e.glyphAtlasIndices,e.blockBounds,e.chunkedBounds,e.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(by),t&&t()})))}onBeforeRender(t,e,i,n,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(t){return yy(t)}get material(){let t=this._derivedMaterial;const e=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Pc.clone());if((!t||!t.isDerivedFrom(e))&&(t=this._derivedMaterial=this.createDerivedMaterial(e),e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),t.dispose()})),this.hasOutline()){let i=t._outlineMtl;return i||(i=t._outlineMtl=Object.create(t,{id:{value:t.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),i.dispose()})),[i,t]}else return t}set material(t){t&&t.isTroikaTextMaterial?(this._derivedMaterial=t,this._baseMaterial=t.baseMaterial):this._baseMaterial=t}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(t){this.geometry.detail=t}get curveRadius(){return this.geometry.curveRadius}set curveRadius(t){this.geometry.curveRadius=t}get customDepthMaterial(){return Lh(this.material).getDepthMaterial()}set customDepthMaterial(t){}get customDistanceMaterial(){return Lh(this.material).getDistanceMaterial()}set customDistanceMaterial(t){}_prepareForRender(t){const e=t.isTextOutlineMaterial,i=t.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:a,blockBounds:l}=n;i.uTroikaSDFTexture.value=a,i.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!e&&!!n.glyphColors;let c=0,u=0,f=0,h,d,g,_=0,m=0;if(e){let{outlineWidth:y,outlineOffsetX:x,outlineOffsetY:v,outlineBlur:b,outlineOpacity:T}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(b)||0),h=T,_=this._parsePercent(x)||0,m=this._parsePercent(v)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??Dh),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(_,m),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=f,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=h??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)i.uTroikaClipRect.value.fromArray(p);else{const y=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,t.polygonOffset=!!this.depthOffset,t.polygonOffsetFactor=t.polygonOffsetUnits=this.depthOffset||0;const r=e?this.outlineColor||0:this.color;if(r==null)delete t.color;else{const a=t.hasOwnProperty("color")?t.color:t.color=new Kt;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let o=this.orientation||tl;if(o!==t._orientation){let a=i.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==tl&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;So.set(0,0,0)[u]=c==="-"?1:-1,Qa.set(0,0,0)[h]=f==="-"?-1:1,Uh.lookAt(Sy,So.cross(Qa),Qa),a.setFromMatrix4(Uh)}else a.identity();t._orientation=o}}_parsePercent(t){if(typeof t=="string"){let e=t.match(/^(-?[\d.]+)%$/),i=e?parseFloat(e[1]):NaN;t=(isNaN(i)?0:i/100)*this.fontSize}return t}localPositionToTextCoords(t,e=new Yt){e.copy(t);const i=this.curveRadius;return i&&(e.x=Math.atan2(t.x,Math.abs(i)-Math.abs(t.z))*Math.abs(i)),e}worldPositionToTextCoords(t,e=new Yt){return So.copy(t),this.localPositionToTextCoords(this.worldToLocal(So),e)}raycast(t,e){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,o=n?Rf():Cf(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let f=r[0]+c.getX(u)*(r[2]-r[0]);const h=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,ns.length=0,o.raycast(t,ns);for(let u=0;u<ns.length;u++)ns[u].object=this,e.push(ns[u])}}copy(t){const e=this.geometry;return super.copy(t),this.geometry=e,Ey.forEach(i=>{this[i]=t[i]}),this}clone(){return new this.constructor().copy(this)}}Pf.forEach(s=>{const t="_private_"+s;Object.defineProperty(Po.prototype,s,{get(){return this[t]},set(e){e!==this[t]&&(this[t]=e,this._needsSync=!0)}})});new fe;new Kt;const oc={Car:16729156,Pedestrian:16777028,Cyclist:4521983,Van:16746564,Truck:16729343,Person_sitting:8978244,Tram:4491519,Misc:8947848,DontCare:4473924};class Ty{object3D;mesh;labels;dummy=new Fe;maxInstances=1e3;constructor(){this.object3D=new Wn;const t=new Li(1,1,1),e=new Cu(t),i=new di({vertexColors:!0,transparent:!0,opacity:.9});this.mesh=new xu(e,i,this.maxInstances),this.mesh.frustumCulled=!1,this.mesh.count=0,this.labels=new Wn,this.object3D.add(this.mesh),this.object3D.add(this.labels)}setData(t){const e=Math.min(t.length,this.maxInstances);for(let i=0;i<e;i++){const n=t[i];this.dummy.position.set(n.center.x,n.center.y,n.center.z),this.dummy.rotation.set(0,n.rotationY,0),this.dummy.scale.set(n.dimensions.x,n.dimensions.y,n.dimensions.z),this.dummy.updateMatrix(),this.mesh.setMatrixAt(i,this.dummy.matrix);const r=new Kt(oc[n.type]??65280);this.mesh.setColorAt(i,r)}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.updateLabels(t.slice(0,e))}updateLabels(t){for(;this.labels.children.length>0;){const e=this.labels.children[0];this.labels.remove(e),e instanceof Po&&e.dispose()}for(const e of t){const i=new Po;i.text=`${e.type}${e.score?` ${(e.score*100).toFixed(0)}%`:""}`,i.fontSize=.5,i.color=oc[e.type]??65280,i.position.set(e.center.x,e.center.y+e.dimensions.y/2+.5,e.center.z),i.sync(),this.labels.add(i)}}setMaxInstances(t){this.maxInstances=t,this.mesh.dispose();const e=new Li(1,1,1),i=new Cu(e),n=new di({vertexColors:!0,transparent:!0,opacity:.9});this.mesh=new xu(i,n,t),this.mesh.frustumCulled=!1,this.mesh.count=0}setVisible(t){this.object3D.visible=t}dispose(){this.mesh.geometry.dispose(),Array.isArray(this.mesh.material)?this.mesh.material.forEach(t=>t.dispose()):this.mesh.material.dispose();for(const t of this.labels.children)t instanceof Po&&t.dispose()}}class Ay{object3D;pointsMesh;boxLines;gridHelper;constructor(){this.object3D=new Wn,this.object3D.visible=!1;const t=new mi(200,200,1,1),e=new wr({color:657946,transparent:!0,opacity:.8,side:dn});this.pointsMesh=new ye(t,e),this.pointsMesh.rotation.x=-Math.PI/2,this.pointsMesh.position.y=-.01,this.boxLines=new xc(new ue,new di({vertexColors:!0})),this.gridHelper=new lf(200,40,3355494,2236996),this.gridHelper.position.y=0,this.object3D.add(this.pointsMesh),this.object3D.add(this.gridHelper),this.object3D.add(this.boxLines)}updateFromPointCloud(t){const{positions:e,intensities:i,count:n}=t,r=new Float32Array(n*3),o=new Float32Array(n*3);for(let l=0;l<n;l++){r[l*3]=e[l*3],r[l*3+1]=0,r[l*3+2]=e[l*3+2];const c=Math.min(i[l]/255,1);o[l*3]=Math.min(1,1.5-Math.abs(4*c-3)),o[l*3+1]=Math.min(1,1.5-Math.abs(4*c-2)),o[l*3+2]=Math.min(1,1.5-Math.abs(4*c-1))}const a=new ue;for(a.setAttribute("position",new xe(r,3)),a.setAttribute("color",new xe(o,3)),this.pointsMesh.geometry.dispose(),this.pointsMesh.geometry=a,this.pointsMesh.material=new yc({size:.3,vertexColors:!0,sizeAttenuation:!0}),this.pointsMesh=new Sc(a,this.pointsMesh.material);this.object3D.children.length>0;)this.object3D.remove(this.object3D.children[0]);this.object3D.add(this.pointsMesh),this.object3D.add(this.gridHelper),this.object3D.add(this.boxLines)}updateBoxes(t){const e=[],i=[];for(const n of t){const{x:r,z:o}=n.dimensions,{x:a,z:l}=n.center,c=n.rotationY,u=Math.cos(c),f=Math.sin(c),d=[[-o/2,-r/2],[o/2,-r/2],[o/2,r/2],[-o/2,r/2]].map(([m,p])=>[a+m*u+p*f,l-m*f+p*u]),g=[[0,1],[1,2],[2,3],[3,0]],_=new Kt(oc[n.type]??65280);for(const[m,p]of g)e.push(d[m][0],.01,d[m][1]),e.push(d[p][0],.01,d[p][1]),i.push(_.r,_.g,_.b),i.push(_.r,_.g,_.b)}this.boxLines.geometry.dispose(),this.boxLines.geometry=new ue,this.boxLines.geometry.setAttribute("position",new me(e,3)),this.boxLines.geometry.setAttribute("color",new me(i,3))}setVisible(t){this.object3D.visible=t}dispose(){this.pointsMesh.geometry.dispose(),this.boxLines.geometry.dispose(),this.gridHelper.geometry.dispose()}}class wy{object3D;line;pointMesh;velocityArrow;constructor(){this.object3D=new Wn;const t=new ue,e=new di({color:65535,linewidth:2,transparent:!0,opacity:.8});this.line=new vc(t,e);const i=new Ec(.3,16,16),n=new wr({color:65280});this.pointMesh=new ye(i,n),this.velocityArrow=new pp(new N(1,0,0),new N(0,0,0),5,16776960),this.object3D.add(this.line),this.object3D.add(this.pointMesh),this.object3D.add(this.velocityArrow)}setTrajectory(t){const e=[];if(t instanceof Float32Array)for(let i=0;i<t.length;i+=3)e.push(new N(t[i],t[i+1],t[i+2]));else e.push(...t);this.line.geometry.dispose(),this.line.geometry=new ue().setFromPoints(e),e.length>0&&this.pointMesh.position.copy(e[e.length-1])}setCurrentPosition(t,e){this.pointMesh.position.copy(t),e&&e.length()>.1?(this.velocityArrow.position.copy(t),this.velocityArrow.setDirection(e.clone().normalize()),this.velocityArrow.setLength(Math.min(e.length()*.5,10),1,.5),this.velocityArrow.visible=!0):this.velocityArrow.visible=!1}setVisible(t){this.object3D.visible=t}dispose(){this.line.geometry.dispose(),this.pointMesh.geometry.dispose(),this.velocityArrow.dispose()}}class Cy{object3D;grid;axes;constructor(t=200,e=40){this.object3D=new Wn,this.grid=new lf(t,e,3368652,1714762),this.grid.position.y=-.02,this.axes=new mp(5),this.axes.position.y=.01,this.object3D.add(this.grid),this.object3D.add(this.axes)}setVisible(t){this.object3D.visible=t}dispose(){this.grid.geometry.dispose(),this.axes.geometry.dispose()}}class Ry{scene;camera;loader;picker;lodManager;pointCloudLayer;bboxLayer;bevLayer;trajectoryLayer;gridLayer;layers=new Map;frames=[];currentFrameIndex=0;isPlaying=!1;playSpeed=1;playTimer=null;options;constructor(t){this.options={enableLOD:t.enableLOD??!1,enableWorker:t.enableWorker??!0,maxPoints:t.maxPoints??1e6},this.scene=new t0(t.container),this.camera=new m0(this.scene.camera,this.scene.renderer.domElement),this.loader=new Tx({enableWorker:this.options.enableWorker}),this.picker=new Sx,this.lodManager=new g0,this.pointCloudLayer=new Rx,this.bboxLayer=new Ty,this.bevLayer=new Ay,this.trajectoryLayer=new wy,this.gridLayer=new Cy,this.registerLayer("pointcloud",this.pointCloudLayer),this.registerLayer("bbox",this.bboxLayer),this.registerLayer("bev",this.bevLayer),this.registerLayer("trajectory",this.trajectoryLayer),this.registerLayer("grid",this.gridLayer),this.scene.add(this.gridLayer.object3D),this.scene.add(this.pointCloudLayer.object3D),this.scene.add(this.bboxLayer.object3D),this.scene.add(this.bevLayer.object3D),this.scene.add(this.trajectoryLayer.object3D),this.scene.onUpdate(e=>{this.camera.update(e)}),this.scene.start()}async loadFrame(t,e){const i=await this.loader.load(t,e);return this.frames=[i],this.currentFrameIndex=0,this.applyFrame(i),i}async loadSequence(t,e){return this.frames=await this.loader.loadSequence(t,e),this.frames.length>0&&(this.currentFrameIndex=0,this.applyFrame(this.frames[0])),this.frames}applyFrame(t){this.pointCloudLayer.setData(t.points),this.bboxLayer.setData(t.boxes),this.bevLayer.updateFromPointCloud(t.points),this.bevLayer.updateBoxes(t.boxes),this.options.enableLOD&&this.lodManager.build(t.points.positions)}nextFrame(){this.currentFrameIndex<this.frames.length-1&&(this.currentFrameIndex++,this.applyFrame(this.frames[this.currentFrameIndex]))}prevFrame(){this.currentFrameIndex>0&&(this.currentFrameIndex--,this.applyFrame(this.frames[this.currentFrameIndex]))}goToFrame(t){t>=0&&t<this.frames.length&&(this.currentFrameIndex=t,this.applyFrame(this.frames[t]))}play(t=1){if(this.frames.length===0)return;this.isPlaying=!0,this.playSpeed=t;const e=()=>{this.isPlaying&&(this.currentFrameIndex<this.frames.length-1?(this.nextFrame(),this.playTimer=window.setTimeout(e,1e3/(10*this.playSpeed))):this.isPlaying=!1)};e()}pause(){this.isPlaying=!1,this.playTimer!==null&&(clearTimeout(this.playTimer),this.playTimer=null)}setView(t){this.camera.setMode(t),t==="bev"?(this.bevLayer.setVisible(!0),this.pointCloudLayer.setVisible(!1),this.bboxLayer.setVisible(!1)):(this.bevLayer.setVisible(!1),this.pointCloudLayer.setVisible(!0),this.bboxLayer.setVisible(!0))}setColorMode(t){this.pointCloudLayer.setColorMode(t)}setPointSize(t){this.pointCloudLayer.setPointSize(t)}setLayerVisible(t,e){this.layers.get(t)?.setVisible(e)}pickPoint(t){return this.picker.pickPoint(t,this.scene.camera,this.pointCloudLayer.getGeometry(),this.pointCloudLayer.getColorMode()==="intensity"?2:1)}measureDistance(t,e){return this.picker.measureDistance(t,e)}getFrameInfo(){return{current:this.currentFrameIndex,total:this.frames.length}}getLODStats(){return this.lodManager.getStats()}registerLayer(t,e){this.layers.set(t,e)}dispose(){this.pause(),this.layers.forEach(t=>t.dispose()),this.loader.dispose(),this.picker.dispose(),this.lodManager.dispose(),this.camera.dispose(),this.scene.dispose()}}function Py(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Do={exports:{}},Dy=Do.exports,Ih;function Uy(){return Ih||(Ih=1,(function(s,t){(function(e,i){s.exports=i()})(Dy,function(){var e=function(){function i(d){return o.appendChild(d.dom),d}function n(d){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===d?"block":"none";r=d}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),n(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=i(new e.Panel("FPS","#0ff","#002")),f=i(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=i(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:o,addPanel:i,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(f.update(d-a,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:n}};return e.Panel=function(i,n,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,f=48*c,h=3*c,d=2*c,g=3*c,_=15*c,m=74*c,p=30*c,y=document.createElement("canvas");y.width=u,y.height=f,y.style.cssText="width:80px;height:48px";var x=y.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=r,x.fillRect(0,0,u,f),x.fillStyle=n,x.fillText(i,h,d),x.fillRect(g,_,m,p),x.fillStyle=r,x.globalAlpha=.9,x.fillRect(g,_,m,p),{dom:y,update:function(v,b){o=Math.min(o,v),a=Math.max(a,v),x.fillStyle=r,x.globalAlpha=1,x.fillRect(0,0,u,_),x.fillStyle=n,x.fillText(l(v)+" "+i+" ("+l(o)+"-"+l(a)+")",h,d),x.drawImage(y,g+c,_,m-c,p,g,_,m-c,p),x.fillRect(g+m-c,_,c,p),x.fillStyle=r,x.globalAlpha=.9,x.fillRect(g+m-c,_,c,l((1-v/b)*p))}}},e})})(Do)),Do.exports}var Ly=Uy();const Iy=Py(Ly),Fy=document.getElementById("canvas-container"),yr=document.getElementById("loading"),Je=new Ry({container:Fy,enableLOD:!0,enableWorker:!0}),Ii=new Iy;Ii.showPanel(0);Ii.dom.style.position="absolute";Ii.dom.style.top="0";Ii.dom.style.left="0";document.getElementById("stats-container").appendChild(Ii.dom);function Df(){requestAnimationFrame(Df),Ii.begin(),Ii.end()}Df();async function Ny(){try{const s="./sample-data/demo.bin",t="./sample-data/demo.txt";try{await Je.loadFrame(s,t)}catch{console.log("No demo data found. Please load a KITTI .bin file manually."),yr.classList.add("hidden"),document.getElementById("stats-text").textContent="Ready — Load a .bin file to start";return}yr.classList.add("hidden"),Xo()}catch(s){console.error("Failed to load demo data:",s),yr.classList.add("hidden"),document.getElementById("stats-text").textContent="Failed to load demo data"}}function Xo(){const{current:s,total:t}=Je.getFrameInfo();document.getElementById("frame-info").textContent=`${s+1} / ${t}`;const e=Je.getLODStats();document.getElementById("stats-text").textContent=`Frames: ${t} | LOD Nodes: ${e.totalNodes} (${e.leafNodes} leaves) | Points: ${e.totalPoints.toLocaleString()}`}document.getElementById("btn-3d").addEventListener("click",()=>Dc("3d"));document.getElementById("btn-bev").addEventListener("click",()=>Dc("bev"));document.getElementById("btn-follow").addEventListener("click",()=>Dc("follow"));function Dc(s){Je.setView(s),document.querySelectorAll("#controls .btn-group:nth-child(1) button").forEach(t=>t.classList.remove("active")),document.getElementById(`btn-${s}`)?.classList.add("active")}document.getElementById("btn-intensity").addEventListener("click",()=>Uc("intensity"));document.getElementById("btn-height").addEventListener("click",()=>Uc("height"));document.getElementById("btn-semantic").addEventListener("click",()=>Uc("semantic"));function Uc(s){Je.setColorMode(s),document.querySelectorAll("#controls .control-group:nth-child(2) button").forEach(t=>t.classList.remove("active")),document.getElementById(`btn-${s}`)?.classList.add("active")}const Fh=document.getElementById("point-size"),By=document.getElementById("size-value");Fh.addEventListener("input",()=>{const s=parseFloat(Fh.value);Je.setPointSize(s),By.textContent=s.toFixed(1)});document.getElementById("btn-grid").addEventListener("click",s=>{const t=s.target;t.classList.toggle("active"),Je.setLayerVisible("grid",t.classList.contains("active"))});document.getElementById("btn-bbox").addEventListener("click",s=>{const t=s.target;t.classList.toggle("active"),Je.setLayerVisible("bbox",t.classList.contains("active"))});document.getElementById("btn-trajectory").addEventListener("click",s=>{const t=s.target;t.classList.toggle("active"),Je.setLayerVisible("trajectory",t.classList.contains("active"))});document.getElementById("btn-prev").addEventListener("click",()=>{Je.prevFrame(),Xo()});document.getElementById("btn-next").addEventListener("click",()=>{Je.nextFrame(),Xo()});const dr=document.getElementById("btn-play");dr.addEventListener("click",()=>{dr.classList.contains("active")?(Je.pause(),dr.classList.remove("active"),dr.textContent="▶"):(Je.play(1),dr.classList.add("active"),dr.textContent="⏸")});const Uf=document.getElementById("file-input");document.getElementById("btn-load").addEventListener("click",()=>Uf.click());Uf.addEventListener("change",async s=>{const t=s.target.files?.[0];if(!t)return;yr.classList.remove("hidden"),yr.querySelector("p").textContent=`Loading ${t.name}...`;const e=URL.createObjectURL(t);try{await Je.loadFrame(e),Xo()}catch(i){console.error("Failed to load file:",i),alert(`Failed to load ${t.name}`)}finally{yr.classList.add("hidden"),URL.revokeObjectURL(e)}});Ny();
