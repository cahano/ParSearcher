"use strict";(globalThis.webpackChunkparsearch_app=globalThis.webpackChunkparsearch_app||[]).push([[666],{5666:(i,n,t)=>{t.d(n,{LinkInstance:()=>o});var e=t(4709);function s(i,n){const t=((s=i.map((i=>i.id))).sort(((i,n)=>i-n)),s.join("_"));var s;let o=n.get(t);return void 0===o&&(o=(0,e.sZ)(),n.set(t,o)),o}class o{constructor(i){this.container=i,this._drawLinkLine=(i,n)=>{const t=i.options.links;if(!t?.enable)return;const s=this.container,o=s.actualOptions,a=n.destination,r=i.getPosition(),l=a.getPosition();let c=n.opacity;s.canvas.draw((n=>{let d;const p=i.options.twinkle?.lines;if(p?.enable){const i=p.frequency,n=(0,e.tX)(p.color);(0,e.sZ)()<i&&n&&(d=n,c=(0,e.Gu)(p.opacity))}if(!d){const n=void 0!==t.id?s.particles.linksColors.get(t.id):s.particles.linksColor;d=(0,e.BE)(i,a,n)}if(!d)return;const k=i.retina.linksWidth??0,h=i.retina.linksDistance??0,{backgroundMask:g}=o;!function(i){let n=!1;const{begin:t,end:s,maxDistance:o,context:a,canvasSize:r,width:l,backgroundMask:c,colorLine:d,opacity:p,links:k}=i;if((0,e.Sp)(t,s)<=o)(0,e.pS)(a,t,s),n=!0;else if(k.warp){let i,l;const c={x:s.x-r.width,y:s.y},d=(0,e.oW)(t,c);if(d.distance<=o){const n=t.y-d.dy/d.dx*t.x;i={x:0,y:n},l={x:r.width,y:n}}else{const n={x:s.x,y:s.y-r.height},a=(0,e.oW)(t,n);if(a.distance<=o){const n=-(t.y-a.dy/a.dx*t.x)/(a.dy/a.dx);i={x:n,y:0},l={x:n,y:r.height}}else{const n={x:s.x-r.width,y:s.y-r.height},a=(0,e.oW)(t,n);if(a.distance<=o){const n=t.y-a.dy/a.dx*t.x;i={x:-n/(a.dy/a.dx),y:n},l={x:i.x+r.width,y:i.y+r.height}}}}i&&l&&((0,e.pS)(a,t,i),(0,e.pS)(a,s,l),n=!0)}if(!n)return;a.lineWidth=l,c.enable&&(a.globalCompositeOperation=c.composite),a.strokeStyle=(0,e.iz)(d,p);const{shadow:h}=k;if(h.enable){const i=(0,e.tX)(h.color);i&&(a.shadowBlur=h.blur,a.shadowColor=(0,e.iz)(i))}a.stroke()}({context:n,width:k,begin:r,end:l,maxDistance:h,canvasSize:s.canvas.size,links:t,backgroundMask:g,colorLine:d,opacity:c})}))},this._drawLinkTriangle=(i,n,t)=>{const s=i.options.links;if(!s?.enable)return;const o=s.triangles;if(!o.enable)return;const a=this.container,r=a.actualOptions,l=n.destination,c=t.destination,d=o.opacity??.5*(n.opacity+t.opacity);d<=0||a.canvas.draw((n=>{const t=i.getPosition(),p=l.getPosition(),k=c.getPosition(),h=i.retina.linksDistance??0;if((0,e.Sp)(t,p)>h||(0,e.Sp)(k,p)>h||(0,e.Sp)(k,t)>h)return;let g=(0,e.tX)(o.color);if(!g){const n=void 0!==s.id?a.particles.linksColors.get(s.id):a.particles.linksColor;g=(0,e.BE)(i,l,n)}g&&function(i){const{context:n,pos1:t,pos2:s,pos3:o,backgroundMask:a,colorTriangle:r,opacityTriangle:l}=i;!function(i,n,t,e){i.beginPath(),i.moveTo(n.x,n.y),i.lineTo(t.x,t.y),i.lineTo(e.x,e.y),i.closePath()}(n,t,s,o),a.enable&&(n.globalCompositeOperation=a.composite),n.fillStyle=(0,e.iz)(r,l),n.fill()}({context:n,pos1:t,pos2:p,pos3:k,backgroundMask:r.backgroundMask,colorTriangle:g,opacityTriangle:d})}))},this._drawTriangles=(i,n,t,e)=>{const s=t.destination;if(!i.links?.triangles.enable||!s.options.links?.triangles.enable)return;const o=s.links?.filter((i=>{const n=this._getLinkFrequency(s,i.destination);return s.options.links&&n<=s.options.links.frequency&&e.findIndex((n=>n.destination===i.destination))>=0}));if(o?.length)for(const a of o){const e=a.destination;this._getTriangleFrequency(n,s,e)>i.links.triangles.frequency||this._drawLinkTriangle(n,t,a)}},this._getLinkFrequency=(i,n)=>s([i,n],this._freqs.links),this._getTriangleFrequency=(i,n,t)=>s([i,n,t],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}drawParticle(i,n){const{links:t,options:e}=n;if(!t?.length)return;const s=t.filter((i=>e.links&&(e.links.frequency>=1||this._getLinkFrequency(n,i.destination)<=e.links.frequency)));for(const o of s)this._drawTriangles(e,n,o,s),o.opacity>0&&(n.retina.linksWidth??0)>0&&this._drawLinkLine(n,o)}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(i){if(i.links=[],!i.options.links)return;const n=this.container.retina.pixelRatio,{retina:t}=i,{distance:e,width:s}=i.options.links;t.linksDistance=e*n,t.linksWidth=s*n}particleDestroyed(i){i.links=[]}}}}]);
//# sourceMappingURL=666.61bc5926.chunk.js.map