import{p as he}from"../common/process-06825524.js";import{c as J,r as Qe}from"../common/index-1be4ecae.js";function Ze(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function et(e,t,n){return t&&ye(e.prototype,t),n&&ye(e,n),e}function tt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),r.forEach(function(a){tt(e,a,n[a])})}return e}function ge(e,t){return nt(e)||rt(e,t)||at()}function nt(e){if(Array.isArray(e))return e}function rt(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o=e[Symbol.iterator](),s;!(r=(s=o.next()).done)&&!(n.push(s.value),t&&n.length===t);r=!0);}catch(l){a=!0,i=l}finally{try{!r&&o.return!=null&&o.return()}finally{if(a)throw i}}return n}function at(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var ve=function(){},Q={},be={},it=null,we={mark:ve,measure:ve};try{typeof window!="undefined"&&(Q=window),typeof document!="undefined"&&(be=document),typeof MutationObserver!="undefined"&&(it=MutationObserver),typeof performance!="undefined"&&(we=performance)}catch(e){}var ot=Q.navigator||{},ke=ot.userAgent,xe=ke===void 0?"":ke,N=Q,h=be,L=we;!!N.document;var Z=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function";~xe.indexOf("MSIE")||~xe.indexOf("Trident/");var S="___FONT_AWESOME___",Oe="fa",Ie="svg-inline--fa",st="data-fa-i2svg";(function(){try{return he.env.NODE_ENV==="production"}catch(e){return!1}})();var ee={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Se=N.FontAwesomeConfig||{};function lt(e){var t=h.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ft(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(h&&typeof h.querySelector=="function"){var ct=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ct.forEach(function(e){var t=ge(e,2),n=t[0],r=t[1],a=ft(lt(n));a!=null&&(Se[r]=a)})}var ut={familyPrefix:Oe,replacementClass:Ie,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},te=c({},ut,Se);te.autoReplaceSvg||(te.observeMutations=!1);var v=c({},te);N.FontAwesomeConfig=v;var C=N||{};C[S]||(C[S]={}),C[S].styles||(C[S].styles={}),C[S].hooks||(C[S].hooks={}),C[S].shims||(C[S].shims=[]);var O=C[S],mt=[],dt=function e(){h.removeEventListener("DOMContentLoaded",e),ne=1,mt.map(function(t){return t()})},ne=!1;Z&&(ne=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),ne||h.addEventListener("DOMContentLoaded",dt)),typeof global!="undefined"&&typeof global.process!="undefined"&&typeof global.process.emit=="function",typeof setImmediate=="undefined"?setTimeout:setImmediate;var E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pt(e){if(!e||!Z)return;var t=h.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=h.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return h.head.insertBefore(t,r),e}var ht="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function R(){for(var e=12,t="";e-- >0;)t+=ht[Math.random()*62|0];return t}function Ce(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ce(e[n]),'" ')},"").trim()}function Pe(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function Me(e){return e.size!==E.size||e.x!==E.x||e.y!==E.y||e.rotate!==E.rotate||e.flipX||e.flipY}function Ae(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}var re={x:0,y:0,width:"100%",height:"100%"};function Ee(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gt(e){return e.tag==="g"?e.children:[e]}function vt(e){var t=e.children,n=e.attributes,r=e.main,a=e.mask,i=e.maskId,o=e.transform,s=r.width,l=r.icon,f=a.width,m=a.icon,d=Ae({transform:o,containerWidth:f,iconWidth:s}),w={tag:"rect",attributes:c({},re,{fill:"white"})},y=l.children?{children:l.children.map(Ee)}:{},I={tag:"g",attributes:c({},d.inner),children:[Ee(c({tag:l.tag,attributes:c({},l.attributes,d.path)},y))]},k={tag:"g",attributes:c({},d.outer),children:[I]},g="mask-".concat(i||R()),x="clip-".concat(i||R()),M={tag:"mask",attributes:c({},re,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,k]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:gt(m)},M]};return t.push(_,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(g,")")},re)}),{children:t,attributes:n}}function bt(e){var t=e.children,n=e.attributes,r=e.main,a=e.transform,i=e.styles,o=Pe(i);if(o.length>0&&(n.style=o),Me(a)){var s=Ae({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:c({},s.outer),children:[{tag:"g",attributes:c({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c({},r.icon.attributes,s.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}function wt(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Me(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Pe(c({},i,{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function kt(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},a,{id:o}),children:r}]}]}function xt(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,m=e.titleId,d=e.extra,w=e.watchable,y=w===void 0?!1:w,I=r.found?r:n,k=I.width,g=I.height,x=a==="fak",M=x?"":"fa-w-".concat(Math.ceil(k/g*16)),_=[v.replacementClass,i?"".concat(v.familyPrefix,"-").concat(i):"",M].filter(function(j){return d.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(d.classes).join(" "),A={children:[],attributes:c({},d.attributes,{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(g)})},K=x&&!~d.classes.indexOf("fa-fw")?{width:"".concat(k/g*16*.0625,"em")}:{};y&&(A.attributes[st]=""),l&&A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(m||R())},children:[l]});var P=c({},A,{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:c({},K,d.styles)}),pe=r.found&&n.found?vt(P):bt(P),Ke=pe.children,Je=pe.attributes;return P.children=Ke,P.attributes=Je,s?kt(P):wt(P)}var Te=function(){};v.measurePerformance&&L&&L.mark&&L.measure;var Ot=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ae=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ot(n,a):n,l,f,m;for(r===void 0?(l=1,m=t[i[0]]):(l=0,m=r);l<o;l++)f=i[l],m=s(m,t[f],f,t);return m};function _e(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Object.keys(t).reduce(function(o,s){var l=t[s],f=!!l.icon;return f?o[l.iconName]=l.icon:o[s]=l,o},{});typeof O.hooks.addPack=="function"&&!a?O.hooks.addPack(e,i):O.styles[e]=c({},O.styles[e]||{},i),e==="fas"&&_e("fa",t)}var ze=O.styles,It=O.shims,je=function(){var t=function(a){return ae(ze,function(i,o,s){return i[s]=ae(o,a,{}),i},{})};t(function(r,a,i){return a[3]&&(r[a[3]]=i),r}),t(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(s){r[s]=i}),r});var n="far"in ze;ae(It,function(r,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!n&&(o="fas"),r[i]={prefix:o,iconName:s},r},{})};je(),O.styles;function Ne(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Le(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ce(e):"<".concat(t," ").concat(yt(r),">").concat(i.map(Le).join(""),"</").concat(t,">")}var St=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n):n};function ie(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}ie.prototype=Object.create(Error.prototype),ie.prototype.constructor=ie;var $={fill:"currentColor"},Re={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c({},$,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var oe=c({},Re,{attributeName:"opacity"});c({},$,{cx:"256",cy:"364",r:"28"}),c({},Re,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},oe,{values:"1;0;1;1;0;1;"}),c({},$,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},oe,{values:"1;0;0;0;0;1;"}),c({},$,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},oe,{values:"0;0;1;1;0;0;"}),O.styles;function $e(e){var t=e[0],n=e[1],r=e.slice(4),a=ge(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.familyPrefix,"-").concat(ee.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(ee.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(ee.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}O.styles;var Ct=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Pt(){var e=Oe,t=Ie,n=v.familyPrefix,r=v.replacementClass,a=Ct;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Mt=function(){function e(){Ze(this,e),this.definitions={}}return et(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=c({},n.definitions[s]||{},o[s]),_e(s,o[s]),je()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon;n[s]||(n[s]={}),n[s][l]=f}),n}}]),e}();function At(){v.autoAddCss&&!We&&(pt(Pt()),We=!0)}function Et(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Le(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!Z)return;var r=h.createElement("div");return r.innerHTML=e.html,r.children}}),e}function Fe(e){var t=e.prefix,n=t===void 0?"fa":t,r=e.iconName;return r?Ne(_t.definitions,n,r)||Ne(O.styles,n,r):void 0}function Tt(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fe(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Fe(a||{})),e(r,c({},n,{mask:a}))}}var _t=new Mt,We=!1,se={transform:function(t){return St(t)}},zt=Tt(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?E:n,a=t.symbol,i=a===void 0?!1:a,o=t.mask,s=o===void 0?null:o,l=t.maskId,f=l===void 0?null:l,m=t.title,d=m===void 0?null:m,w=t.titleId,y=w===void 0?null:w,I=t.classes,k=I===void 0?[]:I,g=t.attributes,x=g===void 0?{}:g,M=t.styles,_=M===void 0?{}:M;if(!e)return;var A=e.prefix,K=e.iconName,P=e.icon;return Et(c({type:"icon"},e),function(){return At(),v.autoA11y&&(d?x["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(y||R()):(x["aria-hidden"]="true",x.focusable="false")),xt({icons:{main:$e(P),mask:s?$e(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:K,transform:c({},E,r),symbol:i,title:d,maskId:f,titleId:y,extra:{attributes:x,styles:_,classes:k}})})});/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=typeof Symbol=="function"&&Symbol.for,le=p?Symbol.for("react.element"):60103,fe=p?Symbol.for("react.portal"):60106,F=p?Symbol.for("react.fragment"):60107,W=p?Symbol.for("react.strict_mode"):60108,D=p?Symbol.for("react.profiler"):60114,U=p?Symbol.for("react.provider"):60109,Y=p?Symbol.for("react.context"):60110,ce=p?Symbol.for("react.async_mode"):60111,B=p?Symbol.for("react.concurrent_mode"):60111,H=p?Symbol.for("react.forward_ref"):60112,X=p?Symbol.for("react.suspense"):60113,jt=p?Symbol.for("react.suspense_list"):60120,V=p?Symbol.for("react.memo"):60115,G=p?Symbol.for("react.lazy"):60116,Nt=p?Symbol.for("react.block"):60121,Lt=p?Symbol.for("react.fundamental"):60117,Rt=p?Symbol.for("react.responder"):60118,$t=p?Symbol.for("react.scope"):60119;function b(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case le:switch(e=e.type,e){case ce:case B:case F:case D:case W:case X:return e;default:switch(e=e&&e.$$typeof,e){case Y:case H:case G:case V:case U:return e;default:return t}}case fe:return t}}}function De(e){return b(e)===B}var Ft=ce,Wt=B,Dt=Y,Ut=U,Yt=le,Bt=H,Ht=F,Xt=G,Vt=V,Gt=fe,qt=D,Kt=W,Jt=X,Qt=function(e){return De(e)||b(e)===ce},Zt=De,en=function(e){return b(e)===Y},tn=function(e){return b(e)===U},nn=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===le},rn=function(e){return b(e)===H},an=function(e){return b(e)===F},on=function(e){return b(e)===G},sn=function(e){return b(e)===V},ln=function(e){return b(e)===fe},fn=function(e){return b(e)===D},cn=function(e){return b(e)===W},un=function(e){return b(e)===X},mn=function(e){return typeof e=="string"||typeof e=="function"||e===F||e===B||e===D||e===W||e===X||e===jt||typeof e=="object"&&e!==null&&(e.$$typeof===G||e.$$typeof===V||e.$$typeof===U||e.$$typeof===Y||e.$$typeof===H||e.$$typeof===Lt||e.$$typeof===Rt||e.$$typeof===$t||e.$$typeof===Nt)},dn=b,pn={AsyncMode:Ft,ConcurrentMode:Wt,ContextConsumer:Dt,ContextProvider:Ut,Element:Yt,ForwardRef:Bt,Fragment:Ht,Lazy:Xt,Memo:Vt,Portal:Gt,Profiler:qt,StrictMode:Kt,Suspense:Jt,isAsyncMode:Qt,isConcurrentMode:Zt,isContextConsumer:en,isContextProvider:tn,isElement:nn,isForwardRef:rn,isFragment:an,isLazy:on,isMemo:sn,isPortal:ln,isProfiler:fn,isStrictMode:cn,isSuspense:un,isValidElementType:mn,typeOf:dn};J(function(e,t){}),J(function(e){e.exports=pn});var hn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",yn=hn;Function.call.bind(Object.prototype.hasOwnProperty);function Ue(){}function Ye(){}Ye.resetWarningCache=Ue;var gn=function(){function e(r,a,i,o,s,l){if(l===yn)return;var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}e.isRequired=e;function t(){return e}var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ye,resetWarningCache:Ue};return n.PropTypes=n,n},u=J(function(e){e.exports=gn()});function q(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?q=function(t){return typeof t}:q=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(e)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(n),!0).forEach(function(r){T(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vn(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++){if(a=r[i],t.indexOf(a)>=0)continue;n[a]=e[a]}return n}function He(e,t){if(e==null)return{};var n=vn(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++){if(r=i[a],t.indexOf(r)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,r))continue;n[r]=e[r]}}return n}function me(e){return bn(e)||wn(e)||kn()}function bn(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function wn(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function kn(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function xn(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,i=e.inverse,o=e.border,s=e.listItem,l=e.flip,f=e.size,m=e.rotation,d=e.pull,w=(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":l==="horizontal"||l==="both","fa-flip-vertical":l==="vertical"||l==="both"},T(t,"fa-".concat(f),typeof f!="undefined"&&f!==null),T(t,"fa-rotate-".concat(m),typeof m!="undefined"&&m!==null&&m!==0),T(t,"fa-pull-".concat(d),typeof d!="undefined"&&d!==null),T(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(y){return w[y]?y:null}).filter(function(y){return y})}function On(e){return e=e-0,e===e}function Xe(e){return On(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}function In(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Sn(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Xe(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[In(a)]=i:t[a]=i,t},{})}function Ve(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ve(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var m=t.attributes[f];switch(f){case"class":l.attrs.className=m,delete t.attributes.class;break;case"style":l.attrs.style=Sn(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=m:l.attrs[Xe(f)]=m}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=He(n,["style"]);return a.attrs.style=ue({},a.attrs.style,{},o),e.apply(void 0,[t.tag,ue({},a.attrs,{},s)].concat(me(r)))}var Ge=!1;try{Ge=he.env.NODE_ENV==="production"}catch(e){}function Cn(){if(!Ge&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qe(e){if(se.icon)return se.icon(e);if(e===null)return null;if(q(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function de(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?T({},e,t):{}}function z(e){var t=e.forwardedRef,n=He(e,["forwardedRef"]),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,f=qe(r),m=de("classes",[].concat(me(xn(n)),me(o.split(" ")))),d=de("transform",typeof n.transform=="string"?se.transform(n.transform):n.transform),w=de("mask",qe(a)),y=zt(f,ue({},m,{},d,{},w,{symbol:i,title:s,titleId:l}));if(!y)return Cn("Could not find icon",f),null;var I=y.abstract,k={ref:t};return Object.keys(n).forEach(function(g){z.defaultProps.hasOwnProperty(g)||(k[g]=n[g])}),Pn(I[0],k)}z.displayName="FontAwesomeIcon",z.propTypes={border:u.bool,className:u.string,mask:u.oneOfType([u.object,u.array,u.string]),fixedWidth:u.bool,inverse:u.bool,flip:u.oneOf(["horizontal","vertical","both"]),icon:u.oneOfType([u.object,u.array,u.string]),listItem:u.bool,pull:u.oneOf(["right","left"]),pulse:u.bool,rotation:u.oneOf([0,90,180,270]),size:u.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:u.bool,symbol:u.oneOfType([u.bool,u.string]),title:u.string,transform:u.oneOfType([u.string,u.object]),swapOpacity:u.bool},z.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Pn=Ve.bind(null,Qe.createElement);export{z as FontAwesomeIcon};
