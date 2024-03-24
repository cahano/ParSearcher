"use strict";(globalThis.webpackChunkparsearch_app=globalThis.webpackChunkparsearch_app||[]).push([[960],{8960:(e,i,t)=>{t.d(i,{Bubbler:()=>s});var b=t(4709),o=t(5558);function l(e,i,t,o){if(i>=t){const l=e+(i-t)*o;return(0,b.uZ)(l,e,i)}if(i<t){const l=e-(t-i)*o;return(0,b.uZ)(l,i,e)}}const n="bubble";class s extends b.L8{constructor(e){super(e),this._clickBubble=()=>{const e=this.container,i=e.actualOptions,t=e.interactivity.mouse.clickPosition,o=i.interactivity.modes.bubble;if(!o||!t)return;e.bubble||(e.bubble={});const l=e.retina.bubbleModeDistance;if(!l||l<0)return;const n=e.particles.quadTree.queryCircle(t,l,(e=>this.isEnabled(e))),{bubble:s}=e;for(const a of n){if(!s.clicking)continue;a.bubble.inRange=!s.durationEnd;const i=a.getPosition(),n=(0,b.Sp)(i,t),u=((new Date).getTime()-(e.interactivity.mouse.clickTime??0))/b.X5;u>o.duration&&(s.durationEnd=!0),u>2*o.duration&&(s.clicking=!1,s.durationEnd=!1);const c={bubbleObj:{optValue:e.retina.bubbleModeSize,value:a.bubble.radius},particlesObj:{optValue:(0,b.KI)(a.options.size.value)*e.retina.pixelRatio,value:a.size.value},type:"size"};this._process(a,n,u,c);const r={bubbleObj:{optValue:o.opacity,value:a.bubble.opacity},particlesObj:{optValue:(0,b.KI)(a.options.opacity.value),value:a.opacity?.value??1},type:"opacity"};this._process(a,n,u,r),!s.durationEnd&&n<=l?this._hoverBubbleColor(a,n):delete a.bubble.color}},this._hoverBubble=()=>{const e=this.container,i=e.interactivity.mouse.position,t=e.retina.bubbleModeDistance;if(!t||t<0||!i)return;const o=e.particles.quadTree.queryCircle(i,t,(e=>this.isEnabled(e)));for(const l of o){l.bubble.inRange=!0;const o=l.getPosition(),n=(0,b.Sp)(o,i),s=1-n/t;n<=t?s>=0&&e.interactivity.status===b.Wt&&(this._hoverBubbleSize(l,s),this._hoverBubbleOpacity(l,s),this._hoverBubbleColor(l,s)):this.reset(l),e.interactivity.status===b.aM&&this.reset(l)}},this._hoverBubbleColor=(e,i,t)=>{const o=this.container.actualOptions,l=t??o.interactivity.modes.bubble;if(l){if(!e.bubble.finalColor){const i=l.color;if(!i)return;const t=(0,b.wA)(i);e.bubble.finalColor=(0,b.lN)(t)}if(e.bubble.finalColor)if(l.mix){e.bubble.color=void 0;const t=e.getFillColor();e.bubble.color=t?(0,b.lC)((0,b.oc)(t,e.bubble.finalColor,1-i,i)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}},this._hoverBubbleOpacity=(e,i,t)=>{const o=this.container.actualOptions,n=t?.opacity??o.interactivity.modes.bubble?.opacity;if(!n)return;const s=e.options.opacity.value,a=l(e.opacity?.value??1,n,(0,b.KI)(s),i);void 0!==a&&(e.bubble.opacity=a)},this._hoverBubbleSize=(e,i,t)=>{const o=this.container,n=t?.size?t.size*o.retina.pixelRatio:o.retina.bubbleModeSize;if(void 0===n)return;const s=(0,b.KI)(e.options.size.value)*o.retina.pixelRatio,a=l(e.size.value,n,s,i);void 0!==a&&(e.bubble.radius=a)},this._process=(e,i,t,b)=>{const o=this.container,l=b.bubbleObj.optValue,n=o.actualOptions.interactivity.modes.bubble;if(!n||void 0===l)return;const s=n.duration,a=o.retina.bubbleModeDistance,u=b.particlesObj.optValue,c=b.bubbleObj.value,r=b.particlesObj.value??0,d=b.type;if(a&&!(a<0)&&l!==u)if(o.bubble||(o.bubble={}),o.bubble.durationEnd)c&&("size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity);else if(i<=a){if((c??r)!==l){const i=r-t*(r-l)/s;"size"===d&&(e.bubble.radius=i),"opacity"===d&&(e.bubble.opacity=i)}}else"size"===d&&delete e.bubble.radius,"opacity"===d&&delete e.bubble.opacity},this._singleSelectorHover=(e,i,t)=>{const o=this.container,l=document.querySelectorAll(i),n=o.actualOptions.interactivity.modes.bubble;n&&l.length&&l.forEach((i=>{const l=i,s=o.retina.pixelRatio,a={x:(l.offsetLeft+.5*l.offsetWidth)*s,y:(l.offsetTop+.5*l.offsetHeight)*s},u=.5*l.offsetWidth*s,c="circle"===t.type?new b.Cd(a.x,a.y,u):new b.Ae(l.offsetLeft*s,l.offsetTop*s,l.offsetWidth*s,l.offsetHeight*s),r=o.particles.quadTree.query(c,(e=>this.isEnabled(e)));for(const t of r){if(!c.contains(t.getPosition()))continue;t.bubble.inRange=!0;const i=n.divs,o=(0,b.iC)(i,l);t.bubble.div&&t.bubble.div===l||(this.clear(t,e,!0),t.bubble.div=l),this._hoverBubbleSize(t,1,o),this._hoverBubbleOpacity(t,1,o),this._hoverBubbleColor(t,1,o)}}))},e.bubble||(e.bubble={}),this.handleClickMode=i=>{i===n&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,i,t){e.bubble.inRange&&!t||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,i=e.actualOptions.interactivity.modes.bubble;i&&(e.retina.bubbleModeDistance=i.distance*e.retina.pixelRatio,void 0!==i.size&&(e.retina.bubbleModeSize=i.size*e.retina.pixelRatio))}interact(e){const i=this.container.actualOptions.interactivity.events,t=i.onHover,o=i.onClick,l=t.enable,s=t.mode,a=o.enable,u=o.mode,c=i.onDiv;l&&(0,b.dB)(n,s)?this._hoverBubble():a&&(0,b.dB)(n,u)?this._clickBubble():(0,b.XD)(n,c,((i,t)=>this._singleSelectorHover(e,i,t)))}isEnabled(e){const i=this.container,t=i.actualOptions,o=i.interactivity.mouse,l=(e?.interactivity??t.interactivity).events,{onClick:s,onDiv:a,onHover:u}=l,c=(0,b.wm)(n,a);return!!(c||u.enable&&o.position||s.enable&&o.clickPosition)&&((0,b.dB)(n,u.mode)||(0,b.dB)(n,s.mode)||c)}loadModeOptions(e,...i){e.bubble||(e.bubble=new o.x);for(const t of i)e.bubble.load(t?.bubble)}reset(e){e.bubble.inRange=!1}}}}]);
//# sourceMappingURL=960.ad3a2e77.chunk.js.map