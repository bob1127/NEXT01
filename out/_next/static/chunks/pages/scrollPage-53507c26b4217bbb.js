(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[737],{3294:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scrollPage",function(){return i(3672)}])},3672:function(t,e,i){"use strict";let s,n;i.r(e),i.d(e,{default:function(){return Z}});var o=i(5893),r=i(7294),l=i(3146),h=i.n(l),a=i(5675),c=i.n(a);function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}function p(t,e,i){return Math.max(t,Math.min(e,i))}class d{advance(t){var e,i,s,n;if(!this.isRunning)return;let o=!1;if(this.lerp)this.value=(i=this.value,s=this.to,(1-(n=1-Math.exp(-60*this.lerp*t)))*i+n*s),Math.round(this.value)===this.to&&(this.value=this.to,o=!0);else{this.currentTime+=t;let e=p(0,this.currentTime/this.duration,1);o=e>=1;let i=o?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}null==(e=this.onUpdate)||e.call(this,this.value,{completed:o}),o&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:s=1,easing:n=t=>t,onUpdate:o}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=n,this.currentTime=0,this.isRunning=!0,this.onUpdate=o}}class m{constructor({wrapper:t,content:e,autoResize:i=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,i){var s;let t;let e=(s=this.resize,function(){let e=arguments,i=this;clearTimeout(t),t=setTimeout(function(){s.apply(i,e)},250)});this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(e),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(e),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;null==(t=this.wrapperResizeObserver)||t.disconnect(),null==(e=this.contentResizeObserver)||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class f{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let t=0,s=i.length;t<s;t++)i[t](...e)}on(t,e){var i;return(null==(i=this.events[t])?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null==(i=this.events[t])?void 0:i.filter(t=>e!==t)}}destroy(){this.events={}}}class g{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=2,normalizeWheel:s=!1}){this.onTouchStart=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0}},this.onTouchMove=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,n=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:n},this.emitter.emit("scroll",{type:"touch",deltaX:s,deltaY:n,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=t=>{let{deltaX:e,deltaY:i}=t;this.normalizeWheel&&(e=p(-100,e,100),i=p(-100,i,100)),e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:e,deltaY:i,event:t})},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.normalizeWheel=s,this.touchStart={x:null,y:null},this.emitter=new f,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class v{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,smoothWheel:s=!0,smoothTouch:n=!1,syncTouch:o=!1,syncTouchLerp:r=.1,__iosNoInertiaSyncTouchLerp:l=.4,touchInertiaMultiplier:h=35,duration:a,easing:c=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:p=a&&.1,infinite:v=!1,orientation:w="vertical",gestureOrientation:y="vertical",touchMultiplier:S=1,wheelMultiplier:E=1,normalizeWheel:_=!1,autoResize:L=!0}={}){this.onVirtualScroll=({type:t,inertia:e,deltaX:i,deltaY:s,event:n})=>{if(n.ctrlKey)return;let o="touch"===t,r="wheel"===t;if("vertical"===this.options.gestureOrientation&&0===s||"horizontal"===this.options.gestureOrientation&&0===i||o&&"vertical"===this.options.gestureOrientation&&0===this.scroll&&!this.options.infinite&&s<=0||n.composedPath().find(t=>(null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent"))||o&&(null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent-touch"))||r&&(null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked)return void n.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&o||this.options.smoothWheel&&r,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();n.preventDefault();let l=s;"both"===this.options.gestureOrientation?l=Math.abs(s)>Math.abs(i)?s:i:"horizontal"===this.options.gestureOrientation&&(l=i);let h=o&&this.options.syncTouch,a=o&&e&&Math.abs(l)>1;a&&(l=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+l,u({programmatic:!1},h&&{lerp:a?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onScroll=()=>{if(!this.isScrolling){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-t),this.emit()}},window.lenisVersion="1.0.19",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,smoothWheel:s,smoothTouch:n,syncTouch:o,syncTouchLerp:r,__iosNoInertiaSyncTouchLerp:l,touchInertiaMultiplier:h,duration:a,easing:c,lerp:p,infinite:v,gestureOrientation:y,orientation:w,touchMultiplier:S,wheelMultiplier:E,normalizeWheel:_,autoResize:L},this.dimensions=new m({wrapper:t,content:e,autoResize:L}),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=s||n,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new d,this.emitter=new f,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new g(i,{touchMultiplier:S,wheelMultiplier:E,normalizeWheel:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")}on(t,e){return this.emitter.on(t,e)}off(t,e){var i;this.emitter.events[t]=null==(i=this.emitter.events[t])?void 0:i.filter(t=>e!==t)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:n=this.options.duration,easing:o=this.options.easing,lerp:r=!n&&this.options.lerp,onComplete:l=null,force:h=!1,programmatic:a=!0}={}){if(!this.isStopped||h){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var c;let i;if("string"==typeof t?i=document.querySelector(t):null!=(c=t)&&c.nodeType&&(i=t),i){if(this.options.wrapper!==window){let t=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}let s=i.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t){if(t+=e,t=Math.round(t),this.options.infinite?a&&(this.targetScroll=this.animatedScroll=this.scroll):t=p(0,t,this.limit),i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(null==l||l());if(!a){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:n,easing:o,lerp:r,onUpdate:(t,{completed:e})=>{s&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),a&&(this.targetScroll=t),e&&(s&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,null==l||l()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var t;return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}var w=i(3234),y=i(6681),S=i(5487),E=i(7301);let _=new WeakMap;function L({target:t,contentRect:e,borderBoxSize:i}){var s;null===(s=_.get(t))||void 0===s||s.forEach(s=>{s({target:t,contentSize:e,get size(){return function(t,e){if(e){let{inlineSize:t,blockSize:i}=e[0];return{width:t,height:i}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,i)}})})}function z(t){t.forEach(L)}let T=new Set;var x=i(3967),b=i(3038);let W=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),M=()=>({time:0,x:W(),y:W()}),O={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function j(t,e,i,s){let n=i[e],{length:o,position:r}=O[e],l=n.current,h=i.time;n.current=t["scroll"+r],n.scrollLength=t["scroll"+o]-t["client"+o],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=(0,x.Y)(0,n.scrollLength,n.current);let a=s-h;n.velocity=a>50?0:(0,b.R)(n.current-l,a)}let R={All:[[0,0],[1,1]]},H={start:0,center:.5,end:1};function A(t,e,i=0){let s=0;if(void 0!==H[t]&&(t=H[t]),"string"==typeof t){let e=parseFloat(t);t.endsWith("px")?s=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?s=e/100*document.documentElement.clientWidth:t.endsWith("vh")?s=e/100*document.documentElement.clientHeight:t=e}return"number"==typeof t&&(s=e*t),i+s}let N=[0,0];var k=i(4606),B=i(599);let Y={x:0,y:0};var P=i(2074);let X=new WeakMap,C=new WeakMap,I=new WeakMap,D=t=>t===document.documentElement?window:t;var q=i(8868);function F(t,e){(0,S.K)(!!(!e||e.current),`You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let V=()=>({scrollX:(0,w.B)(0),scrollY:(0,w.B)(0),scrollXProgress:(0,w.B)(0),scrollYProgress:(0,w.B)(0)}),G=t=>"object"==typeof t&&t.mix,U=t=>G(t)?t.mix:void 0;var K=i(5512);function Q(t,e,i,s){let n="function"==typeof e?e:function(...t){let e=!Array.isArray(t[0]),i=e?0:-1,s=t[0+i],n=t[1+i],o=t[2+i],r=t[3+i],l=(0,k.s)(n,o,{mixer:U(o[0]),...r});return e?l(s):l}(e,i,s);return Array.isArray(t)?$(t,n):$([t],([t])=>n(t))}function $(t,e){let i=(0,y.h)(()=>[]);return(0,K.N)(t,()=>{i.length=0;let s=t.length;for(let e=0;e<s;e++)i[e]=t[e].get();return e(i)})}var J=i(5134);function Z(){let t=(0,r.useRef)(null),[e,i]=(0,r.useState)({width:0,height:0}),{scrollYProgress:l}=function({container:t,target:e,layoutEffect:i=!0,...o}={}){let l=(0,y.h)(V),h=i?q.L:r.useEffect;return h(()=>(F("target",e),F("container",t),function(t,{container:e=document.documentElement,...i}={}){let o=I.get(e);o||(o=new Set,I.set(e,o));let r=M(),l=function(t,e,i,s={}){return{measure:()=>(function(t,e=t,i){if(i.x.targetOffset=0,i.y.targetOffset=0,e!==t){let s=e;for(;s&&s!==t;)i.x.targetOffset+=s.offsetLeft,i.y.targetOffset+=s.offsetTop,s=s.offsetParent}i.x.targetLength=e===t?e.scrollWidth:e.clientWidth,i.y.targetLength=e===t?e.scrollHeight:e.clientHeight,i.x.containerLength=t.clientWidth,i.y.containerLength=t.clientHeight})(t,s.target,i),update:e=>{j(t,"x",i,e),j(t,"y",i,e),i.time=e,(s.offset||s.target)&&function(t,e,i){let{offset:s=R.All}=i,{target:n=t,axis:o="y"}=i,r="y"===o?"height":"width",l=n!==t?function(t,e){let i={x:0,y:0},s=t;for(;s&&s!==e;)if(s instanceof HTMLElement)i.x+=s.offsetLeft,i.y+=s.offsetTop,s=s.offsetParent;else if(s instanceof SVGGraphicsElement&&"getBBox"in s){let{top:t,left:e}=s.getBBox();for(i.x+=e,i.y+=t;s&&"svg"!==s.tagName;)s=s.parentNode}return i}(n,t):Y,h=n===t?{width:t.scrollWidth,height:t.scrollHeight}:{width:n.clientWidth,height:n.clientHeight},a={width:t.clientWidth,height:t.clientHeight};e[o].offset.length=0;let c=!e[o].interpolate,u=s.length;for(let t=0;t<u;t++){let i=function(t,e,i,s){let n=Array.isArray(t)?t:N,o=0;return"number"==typeof t?n=[t,t]:"string"==typeof t&&(n=(t=t.trim()).includes(" ")?t.split(" "):[t,H[t]?t:"0"]),A(n[0],i,s)-A(n[1],e)}(s[t],a[r],h[r],l[o]);c||i===e[o].interpolatorOffsets[t]||(c=!0),e[o].offset[t]=i}c&&(e[o].interpolate=(0,k.s)(e[o].offset,(0,B.Y)(s)),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=e[o].interpolate(e[o].current)}(t,i,s)},notify:()=>e(i)}}(e,t,r,i);if(o.add(l),!X.has(e)){let t=()=>{for(let t of o)t.measure()},i=()=>{for(let t of o)t.update(P.frameData.timestamp)},r=()=>{for(let t of o)t.notify()},l=()=>{P.Wi.read(t,!1,!0),P.Wi.update(i,!1,!0),P.Wi.update(r,!1,!0)};X.set(e,l);let h=D(e);window.addEventListener("resize",l,{passive:!0}),e!==document.documentElement&&C.set(e,"function"==typeof e?(T.add(e),n||(n=()=>{let t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};T.forEach(t=>t(e))},window.addEventListener("resize",n)),()=>{T.delete(e),!T.size&&n&&(n=void 0)}):function(t,e){s||"undefined"==typeof ResizeObserver||(s=new ResizeObserver(z));let i=(0,E.I)(t);return i.forEach(t=>{let i=_.get(t);i||(i=new Set,_.set(t,i)),i.add(e),null==s||s.observe(t)}),()=>{i.forEach(t=>{let i=_.get(t);null==i||i.delete(e),(null==i?void 0:i.size)||null==s||s.unobserve(t)})}}(e,l)),h.addEventListener("scroll",l,{passive:!0})}let h=X.get(e);return P.Wi.read(h,!1,!0),()=>{var t;(0,P.Pn)(h);let i=I.get(e);if(!i||(i.delete(l),i.size))return;let s=X.get(e);X.delete(e),s&&(D(e).removeEventListener("scroll",s),null===(t=C.get(e))||void 0===t||t(),window.removeEventListener("resize",s))}}(({x:t,y:e})=>{l.scrollX.set(t.current),l.scrollXProgress.set(t.progress),l.scrollY.set(e.current),l.scrollYProgress.set(e.progress)},{...o,container:(null==t?void 0:t.current)||void 0,target:(null==e?void 0:e.current)||void 0})),[]),l}({target:t,offset:["start end","end start"]}),{height:a}=e,c=Q(l,[0,1],[0,2*a]),u=Q(l,[0,1],[0,3.3*a]),p=Q(l,[0,1],[0,1.25*a]),d=Q(l,[0,1],[0,3*a]);return(0,r.useEffect)(()=>{let t=new v,e=i=>{t.raf(i),requestAnimationFrame(e)},s=()=>{i({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",s),requestAnimationFrame(e),s(),()=>{window.removeEventListener("resize",s)}},[]),(0,o.jsxs)("main",{className:h().main,children:[(0,o.jsx)("div",{className:h().spacer}),(0,o.jsxs)("div",{ref:t,className:h().gallery,children:[(0,o.jsx)(tt,{images:["1.jpg","2.jpg","3.jpg"],y:c}),(0,o.jsx)(tt,{images:["4.jpg","5.jpg","6.jpg"],y:u}),(0,o.jsx)(tt,{images:["7.jpg","8.jpg","9.jpg"],y:p}),(0,o.jsx)(tt,{images:["10.jpg","11.jpg","12.jpg"],y:d})]}),(0,o.jsx)("div",{className:h().spacer})]})}let tt=t=>{let{images:e,y:i}=t;return(0,o.jsx)(J.E.div,{className:h().column,style:{y:i},children:e.map((t,e)=>(0,o.jsx)("div",{className:h().imageContainer,children:(0,o.jsx)(c(),{src:"/images/".concat(t),alt:"image",fill:!0})},e))})}},3146:function(t){t.exports={main:"page_main__aQ8Rk",mask:"page_mask__EgwRc",body:"page_body__3p6u0",gallery:"page_gallery__3gxmj",column:"page_column__19HGS",imageContainer:"page_imageContainer__Safi3",spacer:"page_spacer__SFvTy"}},7301:function(t,e,i){"use strict";i.d(e,{I:function(){return n}});var s=i(5487);function n(t,e,i){var n;if("string"==typeof t){let o=document;e&&((0,s.k)(!!e.current,"Scope provided, but no element detected."),o=e.current),i?(null!==(n=i[t])&&void 0!==n||(i[t]=o.querySelectorAll(t)),t=i[t]):t=o.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}},5512:function(t,e,i){"use strict";i.d(e,{N:function(){return r}});var s=i(4960),n=i(8868),o=i(2074);function r(t,e){let i=(0,s.c)(e()),r=()=>i.set(e());return r(),(0,n.L)(()=>{let e=()=>o.Wi.update(r,!1,!0),i=t.map(t=>t.on("change",e));return()=>{i.forEach(t=>t()),(0,o.Pn)(r)}}),i}},4960:function(t,e,i){"use strict";i.d(e,{c:function(){return l}});var s=i(7294),n=i(3234),o=i(6014),r=i(6681);function l(t){let e=(0,r.h)(()=>(0,n.B)(t)),{isStatic:i}=(0,s.useContext)(o._);if(i){let[,i]=(0,s.useState)(t);(0,s.useEffect)(()=>e.on("change",i),[])}return e}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=3294)}),_N_E=t.O()}]);