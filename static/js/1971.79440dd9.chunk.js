"use strict";(globalThis.webpackChunkparsearch_app=globalThis.webpackChunkparsearch_app||[]).push([[1971],{1971:(t,i,n)=>{n.d(i,{Connector:()=>l});var o=n(4709);class e{constructor(){this.opacity=.5}load(t){t&&void 0!==t.opacity&&(this.opacity=t.opacity)}}class s{constructor(){this.distance=80,this.links=new e,this.radius=60}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(t.links),void 0!==t.radius&&(this.radius=t.radius))}}const a=0,c=1;function r(t,i,n,e){const s=t.actualOptions.interactivity.modes.connect;if(s)return function(t,i,n,e){const s=Math.floor(n.getRadius()/i.getRadius()),r=i.getFillColor(),d=n.getFillColor();if(!r||!d)return;const l=i.getPosition(),u=n.getPosition(),p=(0,o.oc)(r,d,i.getRadius(),n.getRadius()),h=t.createLinearGradient(l.x,l.y,u.x,u.y);return h.addColorStop(a,(0,o.vz)(r,e)),h.addColorStop((0,o.uZ)(s,a,c),(0,o.iz)(p,e)),h.addColorStop(c,(0,o.vz)(d,e)),h}(i,n,e,s.links.opacity)}function d(t,i,n){t.canvas.draw((e=>{const s=r(t,e,i,n);if(!s)return;const a=i.getPosition(),c=n.getPosition();!function(t,i,n,e,s){(0,o.pS)(t,e,s),t.lineWidth=i,t.strokeStyle=n,t.stroke()}(e,i.retina.linksWidth??0,s,a,c)}))}class l extends o.L8{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.connect;i&&(t.retina.connectModeDistance=i.distance*t.retina.pixelRatio,t.retina.connectModeRadius=i.radius*t.retina.pixelRatio)}interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){const i=t.interactivity.mouse.position,{connectModeDistance:n,connectModeRadius:o}=t.retina;if(!n||n<0||!o||o<0||!i)return;const e=Math.abs(o),s=t.particles.quadTree.queryCircle(i,e,(t=>this.isEnabled(t)));s.forEach(((i,o)=>{const e=i.getPosition();for(const a of s.slice(o+1)){const o=a.getPosition(),s=Math.abs(n),c=Math.abs(e.x-o.x),r=Math.abs(e.y-o.y);c<s&&r<s&&d(t,i,a)}}))}}isEnabled(t){const i=this.container,n=i.interactivity.mouse,e=(t?.interactivity??i.actualOptions.interactivity).events;return!(!e.onHover.enable||!n.position)&&(0,o.dB)("connect",e.onHover.mode)}loadModeOptions(t,...i){t.connect||(t.connect=new s);for(const n of i)t.connect.load(n?.connect)}reset(){}}}}]);
//# sourceMappingURL=1971.79440dd9.chunk.js.map