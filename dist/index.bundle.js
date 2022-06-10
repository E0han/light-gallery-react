/*! For license information please see index.bundle.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.React);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(this,(e=>(()=>{var t={184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var l in r)o.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,s){for(var a,l,i=n(e),c=1;c<arguments.length;c++){for(var f in a=Object(arguments[c]))r.call(a,f)&&(i[f]=a[f]);if(t){l=t(a);for(var u=0;u<l.length;u++)o.call(a,l[u])&&(i[l[u]]=a[l[u]])}}return i}},251:(e,t,r)=>{"use strict";r(418);var o=r(359),n=60103;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;n=s("react.element"),s("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var o,s={},c=null,f=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)l.call(t,o)&&!i.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:f,props:s,_owner:a.current}}},893:(e,t,r)=>{"use strict";e.exports=r(251)},359:t=>{"use strict";t.exports=e},434:e=>{function t(){}e.exports=Object.assign(t,{default:t,register:t,revert:function(){},__esModule:!0})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};return(()=>{"use strict";o.d(n,{default:()=>b}),o(434);var e=o(359),t=o.n(e),r=o(184),s=o.n(r),a=o(893);const l=e.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"]}),{Consumer:i,Provider:c}=l;function f(t,r){const{prefixes:o}=(0,e.useContext)(l);return t||o[r]||r}function u(){const{breakpoints:t}=(0,e.useContext)(l);return t}const p=e.forwardRef(((e,t)=>{const[{className:r,...o},{as:n="div",bsPrefix:l,spans:i}]=function({as:e,bsPrefix:t,className:r,...o}){t=f(t,"col");const n=u(),a=[],l=[];return n.forEach((e=>{const r=o[e];let n,s,i;delete o[e],"object"==typeof r&&null!=r?({span:n,offset:s,order:i}=r):n=r;const c="xs"!==e?`-${e}`:"";n&&a.push(!0===n?`${t}${c}`:`${t}${c}-${n}`),null!=i&&l.push(`order${c}-${i}`),null!=s&&l.push(`offset${c}-${s}`)})),[{...o,className:s()(r,...a,...l)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,a.jsx)(n,{...o,ref:t,className:s()(r,!i.length&&l)})}));p.displayName="Col";const d=p;function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}const m=function(r){var o,n,s=r.index,a=r.img_src,l=r.img_padding,i=r.lg_col,c=r.md_col,f=r.xs_col,u=(o=(0,e.useState)({lg_col:i,md_col:c,xs_col:f}),n=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,s=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(s.push(o.value),!t||s.length!==t);a=!0);}catch(e){l=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw n}}return s}}(o,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(o,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=u[0],m=u[1];return t().createElement(d,{lg:p.lg_col,md:p.md_col,xs:p.xs_col,key:s,style:{display:"inline-block",overflow:"hidden",padding:l}},t().createElement("img",{onLoad:function(e){var t=e.target;t.offsetHeight>t.offsetWidth||t.offsetHeight<t.offsetWidth&&m({lg_col:i+i,md_col:c+c,xs_col:f+c})},src:a,style:{width:"100%"}}))},g=e.forwardRef((({bsPrefix:e,className:t,as:r="div",...o},n)=>{const l=f(e,"row"),i=u(),c=`${l}-cols`,p=[];return i.forEach((e=>{const t=o[e];let r;delete o[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const n="xs"!==e?`-${e}`:"";null!=r&&p.push(`${c}${n}-${r}`)})),(0,a.jsx)(r,{ref:n,...o,className:s()(t,l,...p)})}));g.displayName="Row";const v=g,b=function(e){var r=e.lg_col,o=void 0===r?4:r,n=e.md_col,s=void 0===n?6:n,a=e.xs_col,l=void 0===a?6:a,i=e.div_padding,c=void 0===i?"5%":i,f=e.img_padding,u=void 0===f?"5%":f,p=e.images,d=void 0===p?[]:p;return t().createElement("div",{className:"lightgallery",style:{padding:c}},t().createElement(v,{lg:12,md:12,xs:12},d.map((function(e,r){return t().createElement(m,{index:r,img_src:e,img_padding:u,lg_col:o,md_col:s,xs_col:l})}))))}})(),n.default})()));