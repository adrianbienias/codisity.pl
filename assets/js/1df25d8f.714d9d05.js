"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[80160],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),i=s(r),b=o,f=i["".concat(l,".").concat(b)]||i[b]||m[b]||c;return r?t.createElement(f,a(a({ref:n},p),{},{components:r})):t.createElement(f,a({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=b;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[i]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<c;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},57198:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>i,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const c={},a=void 0,u={type:"mdx",permalink:"/100-bugow-js/967dd2e3-34d2-4e05-b56d-5c54782406d2/bugCode",source:"@site/src/pages/100-bugow-js/967dd2e3-34d2-4e05-b56d-5c54782406d2/bugCode.md",frontMatter:{}},l=[],s={toc:l},p="wrapper";function i(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"const numbers = {\n  set current(number) {\n    this.log.push(number)\n  },\n  get latest() {\n    return this.log.at(-1)\n  },\n  log: [],\n}\n\nnumbers.current = 5\nnumbers.current = 23\n\nconsole.log(numbers.log)\nconsole.log(numbers.latest)\n\nconst numbersCopy = Object.assign({}, numbers)\n\nnumbersCopy.current = 11\n\nconsole.log(numbersCopy.log)\nconsole.log(numbersCopy.latest)\n")))}i.isMDXComponent=!0}}]);