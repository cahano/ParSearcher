"use strict";(globalThis.webpackChunkparsearch_app=globalThis.webpackChunkparsearch_app||[]).push([[844],{6844:(t,i,o)=>{o.d(i,{OutOfCanvasUpdater:()=>d});var e=o(4709);class s{constructor(t){this.container=t,this.modes=["bounce","split"]}update(t,i,o,s){if(!this.modes.includes(s))return;const n=this.container;let a=!1;for(const[,e]of n.plugins)if(void 0!==e.particleBounce&&(a=e.particleBounce(t,o,i)),a)break;if(a)return;const r=t.getPosition(),c=t.offset,d=t.getRadius(),p=(0,e.M_)(r,d),u=n.canvas.size;!function(t){if("bounce"!==t.outMode&&"split"!==t.outMode||"left"!==t.direction&&"right"!==t.direction)return;t.bounds.right<0&&"left"===t.direction?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&"right"===t.direction&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);const i=t.particle.velocity.x;let o=!1;if("right"===t.direction&&t.bounds.right>=t.canvasSize.width&&i>0||"left"===t.direction&&t.bounds.left<=0&&i<0){const i=(0,e.Gu)(t.particle.options.bounce.horizontal.value);t.particle.velocity.x*=-i,o=!0}if(!o)return;const s=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&"right"===t.direction?t.particle.position.x=t.canvasSize.width-s:t.bounds.left<=0&&"left"===t.direction&&(t.particle.position.x=s),"split"===t.outMode&&t.particle.destroy()}({particle:t,outMode:s,direction:i,bounds:p,canvasSize:u,offset:c,size:d}),function(t){if("bounce"!==t.outMode&&"split"!==t.outMode||"bottom"!==t.direction&&"top"!==t.direction)return;t.bounds.bottom<0&&"top"===t.direction?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&"bottom"===t.direction&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);const i=t.particle.velocity.y;let o=!1;if("bottom"===t.direction&&t.bounds.bottom>=t.canvasSize.height&&i>0||"top"===t.direction&&t.bounds.top<=0&&i<0){const i=(0,e.Gu)(t.particle.options.bounce.vertical.value);t.particle.velocity.y*=-i,o=!0}if(!o)return;const s=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&"bottom"===t.direction?t.particle.position.y=t.canvasSize.height-s:t.bounds.top<=0&&"top"===t.direction&&(t.particle.position.y=s),"split"===t.outMode&&t.particle.destroy()}({particle:t,outMode:s,direction:i,bounds:p,canvasSize:u,offset:c,size:d})}}class n{constructor(t){this.container=t,this.modes=["destroy"]}update(t,i,o,s){if(!this.modes.includes(s))return;const n=this.container;switch(t.outType){case"normal":case"outside":if((0,e.Ac)(t.position,n.canvas.size,e.OW.origin,t.getRadius(),i))return;break;case"inside":{const{dx:i,dy:o}=(0,e.oW)(t.position,t.moveCenter),{x:s,y:n}=t.velocity;if(s<0&&i>t.moveCenter.radius||n<0&&o>t.moveCenter.radius||s>=0&&i<-t.moveCenter.radius||n>=0&&o<-t.moveCenter.radius)return;break}}n.particles.remove(t,void 0,!0)}}class a{constructor(t){this.container=t,this.modes=["none"]}update(t,i,o,s){if(!this.modes.includes(s))return;if((t.options.move.distance.horizontal&&("left"===i||"right"===i))??(t.options.move.distance.vertical&&("top"===i||"bottom"===i)))return;const n=t.options.move.gravity,a=this.container,r=a.canvas.size,c=t.getRadius();if(n.enable){const o=t.position;(!n.inverse&&o.y>r.height+c&&"bottom"===i||n.inverse&&o.y<-c&&"top"===i)&&a.particles.remove(t)}else{if(t.velocity.y>0&&t.position.y<=r.height+c||t.velocity.y<0&&t.position.y>=-c||t.velocity.x>0&&t.position.x<=r.width+c||t.velocity.x<0&&t.position.x>=-c)return;(0,e.Ac)(t.position,a.canvas.size,e.OW.origin,c,i)||a.particles.remove(t)}}}class r{constructor(t){this.container=t,this.modes=["out"]}update(t,i,o,s){if(!this.modes.includes(s))return;const n=this.container;switch(t.outType){case"inside":{const{x:i,y:o}=t.velocity,s=e.OW.origin;s.length=t.moveCenter.radius,s.angle=t.velocity.angle+Math.PI,s.addTo(e.OW.create(t.moveCenter));const{dx:a,dy:r}=(0,e.oW)(t.position,s);if(i<=0&&a>=0||o<=0&&r>=0||i>=0&&a<=0||o>=0&&r<=0)return;t.position.x=Math.floor((0,e.vd)({min:0,max:n.canvas.size.width})),t.position.y=Math.floor((0,e.vd)({min:0,max:n.canvas.size.height}));const{dx:c,dy:d}=(0,e.oW)(t.position,t.moveCenter);t.direction=Math.atan2(-d,-c),t.velocity.angle=t.direction;break}default:if((0,e.Ac)(t.position,n.canvas.size,e.OW.origin,t.getRadius(),i))return;switch(t.outType){case"outside":{t.position.x=Math.floor((0,e.vd)({min:-t.moveCenter.radius,max:t.moveCenter.radius}))+t.moveCenter.x,t.position.y=Math.floor((0,e.vd)({min:-t.moveCenter.radius,max:t.moveCenter.radius}))+t.moveCenter.y;const{dx:i,dy:o}=(0,e.oW)(t.position,t.moveCenter);t.moveCenter.radius&&(t.direction=Math.atan2(o,i),t.velocity.angle=t.direction);break}case"normal":{const o=t.options.move.warp,s=n.canvas.size,a={bottom:s.height+t.getRadius()+t.offset.y,left:-t.getRadius()-t.offset.x,right:s.width+t.getRadius()+t.offset.x,top:-t.getRadius()-t.offset.y},r=t.getRadius(),c=(0,e.M_)(t.position,r);"right"===i&&c.left>s.width+t.offset.x?(t.position.x=a.left,t.initialPosition.x=t.position.x,o||(t.position.y=(0,e.sZ)()*s.height,t.initialPosition.y=t.position.y)):"left"===i&&c.right<-t.offset.x&&(t.position.x=a.right,t.initialPosition.x=t.position.x,o||(t.position.y=(0,e.sZ)()*s.height,t.initialPosition.y=t.position.y)),"bottom"===i&&c.top>s.height+t.offset.y?(o||(t.position.x=(0,e.sZ)()*s.width,t.initialPosition.x=t.position.x),t.position.y=a.top,t.initialPosition.y=t.position.y):"top"===i&&c.bottom<-t.offset.y&&(o||(t.position.x=(0,e.sZ)()*s.width,t.initialPosition.x=t.position.x),t.position.y=a.bottom,t.initialPosition.y=t.position.y);break}}}}}const c=(t,i)=>t.default===i||t.bottom===i||t.left===i||t.right===i||t.top===i;class d{constructor(t){this._updateOutMode=(t,i,o,e)=>{for(const s of this.updaters)s.update(t,e,i,o)},this.container=t,this.updaters=[]}init(t){this.updaters=[];const i=t.options.move.outModes;c(i,"bounce")?this.updaters.push(new s(this.container)):c(i,"out")?this.updaters.push(new r(this.container)):c(i,"destroy")?this.updaters.push(new n(this.container)):c(i,"none")&&this.updaters.push(new a(this.container))}isEnabled(t){return!t.destroyed&&!t.spawning}update(t,i){const o=t.options.move.outModes;this._updateOutMode(t,i,o.bottom??o.default,"bottom"),this._updateOutMode(t,i,o.left??o.default,"left"),this._updateOutMode(t,i,o.right??o.default,"right"),this._updateOutMode(t,i,o.top??o.default,"top")}}}}]);
//# sourceMappingURL=844.2581153c.chunk.js.map