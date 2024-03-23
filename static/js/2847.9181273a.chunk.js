"use strict";(globalThis.webpackChunkparsearch_app=globalThis.webpackChunkparsearch_app||[]).push([[2847,9188],{9188:(t,e,a)=>{a.d(e,{Eo:()=>d,loadGifImage:()=>m});const i=[0,4,2,1],o=[8,8,4,2];class s{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t)}getString(t){const e=this.data.slice(this.pos,this.pos+t);return this.pos+=e.length,e.reduce(((t,e)=>t+String.fromCharCode(e)),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let t="",e=0;do{e=this.data[this.pos++];for(let a=e;--a>=0;t+=String.fromCharCode(this.data[this.pos++]));}while(0!==e);return t}readSubBlocksBin(){let t=this.data[this.pos],e=0;for(let i=0;0!==t;i+=t+1,t=this.data[this.pos+i])e+=t;const a=new Uint8Array(e);t=this.data[this.pos++];for(let i=0;0!==t;t=this.data[this.pos++])for(let e=t;--e>=0;a[i++]=this.data[this.pos++]);return a}skipSubBlocks(){for(const t=1,e=0;this.data[this.pos]!==e;this.pos+=this.data[this.pos]+t);this.pos++}}const n={x:0,y:0},r=0,l=.5,h=0,g=0,c=0;function f(t,e){const a=[];for(let i=0;i<e;i++)a.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return a}async function p(t,e,a,s,n,r){switch(t.nextByte()){case 59:return!0;case 44:await async function(t,e,a,s,n,r){const l=e.frames[s(!0)];l.left=t.nextTwoBytes(),l.top=t.nextTwoBytes(),l.width=t.nextTwoBytes(),l.height=t.nextTwoBytes();const h=t.nextByte(),g=128===(128&h),c=64===(64&h);l.sortFlag=32===(32&h),l.reserved=(24&h)>>>3;const p=1<<1+(7&h);g&&(l.localColorTable=f(t,p));const d=t=>{const{r:i,g:o,b:s}=(g?l.localColorTable:e.globalColorTable)[t];return t!==n(null)?{r:i,g:o,b:s,a:255}:{r:i,g:o,b:s,a:a?~~((i+o+s)/3):0}},m=(()=>{try{return new ImageData(l.width,l.height,{colorSpace:"srgb"})}catch(t){if(t instanceof DOMException&&"IndexSizeError"===t.name)return null;throw t}})();if(null==m)throw new EvalError("GIF frame size is to large");const u=t.nextByte(),w=t.readSubBlocksBin(),y=1<<u,b=(t,e)=>{const a=t>>>3,i=7&t;return(w[a]+(w[a+1]<<8)+(w[a+2]<<16)&(1<<e)-1<<i)>>>i};if(c){for(let a=0,n=u+1,h=0,g=[[0]],c=0;c<4;c++){if(i[c]<l.height){let t=0,e=0,s=!1;for(;!s;){const r=a;if(a=b(h,n),h+=n+1,a===y){n=u+1,g.length=y+2;for(let t=0;t<g.length;t++)g[t]=t<y?[t]:[]}else{a>=g.length?g.push(g[r].concat(g[r][0])):r!==y&&g.push(g[r].concat(g[a][0]));for(const s of g[a]){const{r:a,g:n,b:r,a:h}=d(s);m.data.set([a,n,r,h],i[c]*l.width+o[c]*e+t%(4*l.width)),t+=4}g.length===1<<n&&n<12&&n++}t===4*l.width*(e+1)&&(e++,i[c]+o[c]*e>=l.height&&(s=!0))}}r?.(t.pos/(t.data.length-1),s(!1)+1,m,{x:l.left,y:l.top},{width:e.width,height:e.height})}l.image=m,l.bitmap=await createImageBitmap(m)}else{let a=0,i=u+1,o=0,n=-4,h=!1;const g=[[0]];for(;!h;){const t=a;if(a=b(o,i),o+=i,a===y){i=u+1,g.length=y+2;for(let t=0;t<g.length;t++)g[t]=t<y?[t]:[]}else{if(a===y+1){h=!0;break}a>=g.length?g.push(g[t].concat(g[t][0])):t!==y&&g.push(g[t].concat(g[a][0]));for(const t of g[a]){const{r:e,g:a,b:i,a:o}=d(t);m.data.set([e,a,i,o],n+=4)}g.length>=1<<i&&i<12&&i++}}l.image=m,l.bitmap=await createImageBitmap(m),r?.((t.pos+1)/t.data.length,s(!1)+1,l.image,{x:l.left,y:l.top},{width:e.width,height:e.height})}}(t,e,a,s,n,r);break;case 33:!function(t,e,a,i){switch(t.nextByte()){case 249:{const o=e.frames[a(!1)];t.pos++;const s=t.nextByte();o.GCreserved=(224&s)>>>5,o.disposalMethod=(28&s)>>>2,o.userInputDelayFlag=2===(2&s);const n=1===(1&s);o.delayTime=10*t.nextTwoBytes();const r=t.nextByte();n&&i(r),t.pos++;break}case 255:{t.pos++;const a={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};e.applicationExtensions.push(a);break}case 254:e.comments.push([a(!1),t.readSubBlocks()]);break;case 1:if(0===e.globalColorTable.length)throw new EvalError("plain text extension without global color table");t.pos++,e.frames[a(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break;default:t.skipSubBlocks()}}(t,e,s,n);break;default:throw new EvalError("undefined block found")}return!1}function d(t){const{context:e,radius:a,particle:i,delta:o}=t,s=i.image;if(!s?.gifData||!s.gif)return;const f=new OffscreenCanvas(s.gifData.width,s.gifData.height),p=f.getContext("2d");if(!p)throw new Error("could not create offscreen canvas context");p.imageSmoothingQuality="low",p.imageSmoothingEnabled=!1,p.clearRect(n.x,n.y,f.width,f.height),void 0===i.gifLoopCount&&(i.gifLoopCount=s.gifLoopCount??c);let d=i.gifFrame??r;const m={x:-s.gifData.width*l,y:-s.gifData.height*l},u=s.gifData.frames[d];if(void 0===i.gifTime&&(i.gifTime=h),u.bitmap){switch(e.scale(a/s.gifData.width,a/s.gifData.height),u.disposalMethod){case 4:case 5:case 6:case 7:case 0:p.drawImage(u.bitmap,u.left,u.top),e.drawImage(f,m.x,m.y),p.clearRect(n.x,n.y,f.width,f.height);break;case 1:p.drawImage(u.bitmap,u.left,u.top),e.drawImage(f,m.x,m.y);break;case 2:p.drawImage(u.bitmap,u.left,u.top),e.drawImage(f,m.x,m.y),p.clearRect(n.x,n.y,f.width,f.height),s.gifData.globalColorTable.length?p.putImageData(s.gifData.backgroundImage,m.x,m.y):p.putImageData(s.gifData.frames[g].image,m.x+u.left,m.y+u.top);break;case 3:{const t=p.getImageData(n.x,n.y,f.width,f.height);p.drawImage(u.bitmap,u.left,u.top),e.drawImage(f,m.x,m.y),p.clearRect(n.x,n.y,f.width,f.height),p.putImageData(t,n.x,n.y)}}if(i.gifTime+=o.value,i.gifTime>u.delayTime){if(i.gifTime-=u.delayTime,++d>=s.gifData.frames.length){if(--i.gifLoopCount<=c)return;d=g,p.clearRect(n.x,n.y,f.width,f.height)}i.gifFrame=d}e.scale(s.gifData.width/a,s.gifData.height/a)}}async function m(t){if("gif"===t.type){t.loading=!0;try{t.gifData=await async function(t,e,a){a||(a=!1);const i=await fetch(t);if(!i.ok&&404===i.status)throw new EvalError("file not found");const o=await i.arrayBuffer(),n={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},r=new s(new Uint8ClampedArray(o));if("GIF89a"!==r.getString(6))throw new Error("not a supported GIF file");n.width=r.nextTwoBytes(),n.height=r.nextTwoBytes();const l=r.nextByte(),h=128===(128&l);n.colorRes=(112&l)>>>4,n.sortFlag=8===(8&l);const g=1<<1+(7&l),c=r.nextByte();n.pixelAspectRatio=r.nextByte(),0!==n.pixelAspectRatio&&(n.pixelAspectRatio=(n.pixelAspectRatio+15)/64),h&&(n.globalColorTable=f(r,g));const d=(()=>{try{return new ImageData(n.width,n.height,{colorSpace:"srgb"})}catch(t){if(t instanceof DOMException&&"IndexSizeError"===t.name)return null;throw t}})();if(null==d)throw new Error("GIF frame size is to large");const{r:m,g:u,b:w}=n.globalColorTable[c];d.data.set(h?[m,u,w,255]:[0,0,0,0]);for(let s=4;s<d.data.length;s*=2)d.data.copyWithin(s,0,s);n.backgroundImage=d;let y=-1,b=!0,x=-1;const C=t=>(t&&(b=!0),y),I=t=>(null!=t&&(x=t),x);try{do{b&&(n.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),y++,x=-1,b=!1)}while(!await p(r,n,a,C,I,e));n.frames.length--;for(const t of n.frames){if(t.userInputDelayFlag&&0===t.delayTime){n.totalTime=1/0;break}n.totalTime+=t.delayTime}return n}catch(T){if(T instanceof EvalError)throw new Error(`error while parsing frame ${y} "${T.message}"`);throw T}}(t.source),t.gifLoopCount=function(t){for(const e of t.applicationExtensions)if(e.identifier+e.authenticationCode==="NETSCAPE2.0")return e.data[1]+(e.data[2]<<8);return NaN}(t.gifData)??c,t.gifLoopCount||(t.gifLoopCount=1/0)}catch{t.error=!0}t.loading=!1}else{const{loadImage:e}=await Promise.resolve().then(a.bind(a,9602));await e(t)}}},2847:(t,e,a)=>{a.d(e,{ImageDrawer:()=>n});var i=a(4709),o=a(9602),s=a(9188);class n{constructor(t){this.loadImageShape=async t=>{if(!this._engine.loadImage)throw new Error(`${i.gK} image shape not initialized`);await this._engine.loadImage({gif:t.gif,name:t.name,replaceColor:t.replaceColor??!1,src:t.src})},this._engine=t}addImage(t){this._engine.images||(this._engine.images=[]),this._engine.images.push(t)}draw(t){const{context:e,radius:a,particle:i,opacity:o}=t,n=i.image,r=n?.element;if(n){if(e.globalAlpha=o,n.gif&&n.gifData)(0,s.Eo)(t);else if(r){const t=n.ratio,i={x:-a,y:-a},o=2*a;e.drawImage(r,i.x,i.y,o,o/t)}e.globalAlpha=1}}getSidesCount(){return 12}async init(t){const e=t.actualOptions;if(e.preload&&this._engine.loadImage)for(const a of e.preload)await this._engine.loadImage(a)}loadShape(t){if("image"!==t.shape&&"images"!==t.shape)return;this._engine.images||(this._engine.images=[]);const e=t.shapeData;if(!e)return;this._engine.images.find((t=>t.name===e.name||t.source===e.src))||this.loadImageShape(e).then((()=>{this.loadShape(t)}))}particleInit(t,e){if("image"!==e.shape&&"images"!==e.shape)return;this._engine.images||(this._engine.images=[]);const a=this._engine.images,i=e.shapeData;if(!i)return;const s=e.getFillColor(),n=a.find((t=>t.name===i.name||t.source===i.src));if(!n)return;const r=i.replaceColor??n.replaceColor;n.loading?setTimeout((()=>{this.particleInit(t,e)})):(async()=>{let t;t=n.svgData&&s?await(0,o.e)(n,i,s,e):{color:s,data:n,element:n.element,gif:n.gif,gifData:n.gifData,gifLoopCount:n.gifLoopCount,loaded:!0,ratio:i.width&&i.height?i.width/i.height:n.ratio??1,replaceColor:r,source:i.src},t.ratio||(t.ratio=1);const a={image:t,fill:i.fill??e.shapeFill,close:i.close??e.shapeClose};e.image=a.image,e.shapeFill=a.fill,e.shapeClose=a.close})()}}}}]);
//# sourceMappingURL=2847.9181273a.chunk.js.map