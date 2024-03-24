"use strict";(globalThis.webpackChunkparsearch_app=globalThis.webpackChunkparsearch_app||[]).push([[294],{7294:(e,i,t)=>{t.d(i,{BaseMover:()=>s});var n=t(4709);const a=1;function o(e,i,t,o,s,c){!function(e,i){const t=e.options,o=t.move.path;if(!o.enable)return;if(e.lastPathTime<=e.pathDelay)return void(e.lastPathTime+=i.value);const s=e.pathGenerator?.generate(e,i);s&&e.velocity.addTo(s);o.clamp&&(e.velocity.x=(0,n.uZ)(e.velocity.x,-a,a),e.velocity.y=(0,n.uZ)(e.velocity.y,-a,a));e.lastPathTime-=e.pathDelay}(e,c);const r=e.gravity,l=r?.enable&&r.inverse?-a:a;s&&t&&(e.velocity.x+=s*c.factor/(60*t)),r?.enable&&t&&(e.velocity.y+=l*(r.acceleration*c.factor)/(60*t));const p=e.moveDecay;e.velocity.multTo(p);const y=e.velocity.mult(t);r?.enable&&o>0&&(!r.inverse&&y.y>=0&&y.y>=o||r.inverse&&y.y<=0&&y.y<=-o)&&(y.y=l*o,t&&(e.velocity.y=y.y/t));const v=e.options.zIndex,u=(a-e.zIndexFactor)**v.velocityRate;y.multTo(u);const{position:d}=e;d.addTo(y),i.vibrate&&(d.x+=Math.sin(d.x*Math.cos(d.y)),d.y+=Math.cos(d.y*Math.sin(d.x)))}class s{init(e){const i=e.options.move.gravity;e.gravity={enable:i.enable,acceleration:(0,n.Gu)(i.acceleration),inverse:i.inverse},function(e){const i=e.container,t=e.options.move.spin;if(!t.enable)return;const a=t.position??{x:50,y:50},o={x:.01*a.x*i.canvas.size.width,y:.01*a.y*i.canvas.size.height},s=e.getPosition(),c=(0,n.Sp)(s,o),r=(0,n.Gu)(t.acceleration);e.retina.spinAcceleration=r*i.retina.pixelRatio,e.spin={center:o,direction:e.velocity.x>=0?"clockwise":"counter-clockwise",angle:e.velocity.angle,radius:c,acceleration:e.retina.spinAcceleration}}(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,i){const t=e.options,s=t.move;if(!s.enable)return;const c=e.container,r=c.retina.pixelRatio;e.retina.moveSpeed??=(0,n.Gu)(s.speed)*r,e.retina.moveDrift??=(0,n.Gu)(e.options.move.drift)*r;const l=function(e){return e.slow.inRange?e.slow.factor:a}(e),p=e.retina.moveSpeed*c.retina.reduceFactor,y=e.retina.moveDrift,v=(0,n.KI)(t.size.value)*r,u=p*(s.size?e.getRadius()/v:1)*l*(i.factor||1)/2,d=e.retina.maxSpeed??c.retina.maxSpeed;s.spin.enable?function(e,i){const t=e.container;if(!e.spin)return;const n={x:"clockwise"===e.spin.direction?Math.cos:Math.sin,y:"clockwise"===e.spin.direction?Math.sin:Math.cos};e.position.x=e.spin.center.x+e.spin.radius*n.x(e.spin.angle),e.position.y=e.spin.center.y+e.spin.radius*n.y(e.spin.angle),e.spin.radius+=e.spin.acceleration;const o=Math.max(t.canvas.size.width,t.canvas.size.height),s=.5*o;e.spin.radius>s?(e.spin.radius=s,e.spin.acceleration*=-a):e.spin.radius<0&&(e.spin.radius=0,e.spin.acceleration*=-a),e.spin.angle+=.01*i*(a-e.spin.radius/o)}(e,u):o(e,s,u,d,y,i),function(e){const i=e.initialPosition,{dx:t,dy:a}=(0,n.oW)(i,e.position),o=Math.abs(t),s=Math.abs(a),{maxDistance:c}=e.retina,r=c.horizontal,l=c.vertical;if(!r&&!l)return;if((r&&o>=r||l&&s>=l)&&!e.misplaced)e.misplaced=!!r&&o>r||!!l&&s>l,r&&(e.velocity.x=.5*e.velocity.y-e.velocity.x),l&&(e.velocity.y=.5*e.velocity.x-e.velocity.y);else if((!r||o<r)&&(!l||s<l)&&e.misplaced)e.misplaced=!1;else if(e.misplaced){const t=e.position,a=e.velocity;r&&(t.x<i.x&&a.x<0||t.x>i.x&&a.x>0)&&(a.x*=-(0,n.sZ)()),l&&(t.y<i.y&&a.y<0||t.y>i.y&&a.y>0)&&(a.y*=-(0,n.sZ)())}}(e)}}}}]);
//# sourceMappingURL=294.29e41971.chunk.js.map