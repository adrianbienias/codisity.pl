"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[7835],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),i=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=i(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(r),b=o,m=p["".concat(u,".").concat(b)]||p[b]||f[b]||c;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=r[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},82863:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=r(87462),o=(r(67294),r(3905));const c={},a=void 0,l={type:"mdx",permalink:"/100-bugow-js/71c6322b-f4cb-4ab0-9497-0b618c975d01/bugCode",source:"@site/src/pages/100-bugow-js/71c6322b-f4cb-4ab0-9497-0b618c975d01/bugCode.md",frontMatter:{}},u=[],i={toc:u},s="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(s,(0,t.Z)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"const numbers = [10, 20, NaN, 30, null]\n\nconsole.log(numbers.includes(NaN))\nconsole.log(numbers.includes(30))\nconsole.log(numbers.includes(null))\n\nconsole.log(numbers.indexOf(NaN))\nconsole.log(numbers.indexOf(30))\nconsole.log(numbers.indexOf(null))\n")))}p.isMDXComponent=!0}}]);