"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6674],{8273:function(c,a,b){b.r(a),b.d(a,{CountUp:function(){return e}});var d=function(){return(d=Object.assign||function(d){for(var a,b=1,e=arguments.length;b<e;b++)for(var c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)},e=function(){function a(a,b,c){var e=this;this.endVal=b,this.options=c,this.version="2.1.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(b){e.startTime||(e.startTime=b);var a=b-e.startTime;e.remaining=e.duration-a,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(a,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(a,e.startVal,e.endVal-e.startVal,e.duration):e.countDown?e.frameVal=e.startVal-(e.startVal-e.endVal)*(a/e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(a/e.duration),e.countDown?e.frameVal=e.frameVal<e.endVal?e.endVal:e.frameVal:e.frameVal=e.frameVal>e.endVal?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),a<e.duration?e.rAF=requestAnimationFrame(e.count):null!==e.finalEndVal?e.update(e.finalEndVal):e.callback&&e.callback()},this.formatNumber=function(g){i=Math.abs(g).toFixed(e.options.decimalPlaces);var i,a,d,b,f=(i+="").split(".");if(a=f[0],d=f.length>1?e.options.decimal+f[1]:"",e.options.useGrouping){b="";for(var c=0,h=a.length;c<h;++c)0!==c&&c%3==0&&(b=e.options.separator+b),b=a[h-c-1]+b;a=b}return e.options.numerals&&e.options.numerals.length&&(a=a.replace(/[0-9]/g,function(a){return e.options.numerals[+a]}),d=d.replace(/[0-9]/g,function(a){return e.options.numerals[+a]})),(g<0?"-":"")+e.options.prefix+a+d+e.options.suffix},this.easeOutExpo=function(a,b,c,d){return c*(1-Math.pow(2,-10*a/d))*1024/1023+b},this.options=d(d({},this.defaults),c),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(b),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof a?document.getElementById(a):a,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",void 0!==window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,a):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return e.handleScroll(e)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return a.prototype.handleScroll=function(a){if(a&&window){var c=window.innerHeight+window.scrollY,b=a.el.offsetTop+a.el.offsetHeight;b<c&&b>window.scrollY&&a.paused?(a.paused=!1,setTimeout(function(){return a.start()},a.options.scrollSpyDelay)):window.scrollY>b&&!a.paused&&a.reset()}},a.prototype.determineDirectionAndSmartEasing=function(){var a=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>a,Math.abs(a-this.startVal)>this.options.smartEasingThreshold){this.finalEndVal=a;var b=this.countDown?1:-1;this.endVal=a+b*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=a,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},a.prototype.start=function(a){this.error||(this.callback=a,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},a.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},a.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},a.prototype.update=function(a){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(a),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},a.prototype.printValue=function(b){var a=this.formattingFn(b);"INPUT"===this.el.tagName?this.el.value=a:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=a:this.el.innerHTML=a},a.prototype.ensureNumber=function(a){return"number"==typeof a&&!isNaN(a)},a.prototype.validateValue=function(a){var b=Number(a);return this.ensureNumber(b)?b:(this.error="[CountUp] invalid start or end value: "+a,null)},a.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},a}()},17857:function(e,c,b){var d,a=b(67294),f=b(8273);function g(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function h(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?g(Object(b),!0).forEach(function(a){i(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):g(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}d=a;var j="undefined"!=typeof window&& void 0!==window.document&& void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function k(b){var c=a.useRef(b);return j(function(){c.current=b}),a.useCallback(function(){for(var b=arguments.length,d=new Array(b),a=0;a<b;a++)d[a]=arguments[a];return c.current.apply(void 0,d)},[])}var l=function(c,a){var d=a.decimal,e=a.decimals,g=a.duration,h=a.easingFn,i=a.end,j=a.formattingFn,k=a.numerals,l=a.prefix,b=a.separator,m=a.start,n=a.suffix,o=a.useEasing,p=a.enableScrollSpy,q=a.scrollSpyDelay;return new f.CountUp(c,i,{startVal:m,duration:g,decimal:d,decimalPlaces:e,easingFn:h,formattingFn:j,numerals:k,separator:b,prefix:l,suffix:n,useEasing:o,useGrouping:!!b,enableScrollSpy:p,scrollSpyDelay:q})},m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],n={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0};c.$i=function(c){var b=a.useMemo(function(){return h(h({},n),c)},[c]),r=b.ref,s=b.startOnMount,e=b.enableReinitialize,f=b.delay,t=b.onEnd,u=b.onStart,v=b.onPauseResume,w=b.onReset,x=b.onUpdate,y=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,m),z=a.useRef(),A=a.useRef(),g=a.useRef(!1),B=k(function(){return l("string"==typeof r?r:r.current,y)}),i=k(function(c){var a=z.current;if(a&&!c)return a;var b=B();return z.current=b,b}),C=k(function(){var a=function(){return i(!0).start(function(){null==t||t({pauseResume:j,reset:d,start:p,update:o})})};f&&f>0?A.current=setTimeout(a,1e3*f):a(),null==u||u({pauseResume:j,reset:d,update:o})}),j=k(function(){i().pauseResume(),null==v||v({reset:d,start:p,update:o})}),d=k(function(){A.current&&clearTimeout(A.current),i().reset(),null==w||w({pauseResume:j,start:p,update:o})}),o=k(function(a){i().update(a),null==x||x({pauseResume:j,reset:d,start:p})}),p=k(function(){d(),C()}),q=k(function(a){s&&(a&&d(),C())});return a.useEffect(function(){g.current?e&&q(!0):(g.current=!0,q())},[e,g,q,f,c.start,c.suffix,c.prefix,c.duration,c.separator,c.decimals,c.decimal,c.formattingFn]),a.useEffect(function(){return function(){d()}},[d]),{start:p,pauseResume:j,reset:d,update:o,getCountUp:i}}},27434:function(g,d,b){var e=b(67294),f=b(45697),a=b.n(f);function h(){return(h=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}var c=(0,e.forwardRef)(function(a,f){var b=a.color,c=a.size,d=void 0===c?24:c,g=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["color","size"]);return e.createElement("svg",h({ref:f,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===b?"currentColor":b,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},g),e.createElement("polyline",{points:"6 9 12 15 18 9"}))});c.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},c.displayName="ChevronDown",d.Z=c},70131:function(d,b,a){a.d(b,{YD:function(){return i}});var c=a(67294),e=new Map,f=new WeakMap,g=0,h=void 0;function i(i){var a=void 0===i?{}:i,d=a.threshold,l=a.delay,m=a.trackVisibility,n=a.rootMargin,o=a.root,p=a.triggerOnce,q=a.skip,r=a.initialInView,s=a.fallbackInView,t=a.onChange,w=c.useRef(),u=c.useRef(),j=c.useState({inView:!!r}),k=j[0],x=j[1];u.current=t;var v=c.useCallback(function(a){void 0!==w.current&&(w.current(),w.current=void 0),!q&&a&&(w.current=function(a,k,b,c){if(void 0===b&&(b={}),void 0===c&&(c=h),void 0===window.IntersectionObserver&& void 0!==c){var d=a.getBoundingClientRect();return k(c,{isIntersecting:c,target:a,intersectionRatio:"number"==typeof b.threshold?b.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),function(){}}var i=function(a){var d,c=(d=a,Object.keys(d).sort().filter(function(a){return void 0!==d[a]}).map(function(b){var a;return b+"_"+("root"===b?(a=d.root)?(f.has(a)||(g+=1,f.set(a,g.toString())),f.get(a)):"0":d[b])}).toString()),b=e.get(c);if(!b){var i,j=new Map,h=new IntersectionObserver(function(b){b.forEach(function(b){var c,d=b.isIntersecting&&i.some(function(a){return b.intersectionRatio>=a});a.trackVisibility&& void 0===b.isVisible&&(b.isVisible=d),null==(c=j.get(b.target))||c.forEach(function(a){a(d,b)})})},a);i=h.thresholds||(Array.isArray(a.threshold)?a.threshold:[a.threshold||0]),b={id:c,observer:h,elements:j},e.set(c,b)}return b}(b),n=i.id,m=i.observer,j=i.elements,l=j.get(a)||[];return j.has(a)||j.set(a,l),l.push(k),m.observe(a),function(){l.splice(l.indexOf(k),1),0===l.length&&(j.delete(a),m.unobserve(a)),0===j.size&&(m.disconnect(),e.delete(n))}}(a,function(b,a){x({inView:b,entry:a}),u.current&&u.current(b,a),a.isIntersecting&&p&&w.current&&(w.current(),w.current=void 0)},{root:o,rootMargin:n,threshold:d,trackVisibility:m,delay:l},s))},[Array.isArray(d)?d.toString():d,o,n,p,q,m,s,l]);c.useEffect(function(){w.current||!k.entry||p||q||x({inView:!!r})});var b=[v,k.inView,k.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}c.Component}}])