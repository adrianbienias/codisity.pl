"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[61267],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),y=o,m=s["".concat(p,".").concat(y)]||s[y]||f[y]||a;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=y;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},25112:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={},c=void 0,i={type:"mdx",permalink:"/100-bugow-js/fa73295e-34e5-4f5c-9098-291e3770e4b0/bugCode",source:"@site/src/pages/100-bugow-js/fa73295e-34e5-4f5c-9098-291e3770e4b0/bugCode.md",frontMatter:{}},p=[],l={toc:p},u="wrapper";function s(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const Car = {\n  color: "red",\n  drive() {\n    console.log(this)\n  },\n}\n\nCar.drive()\n\nconst driveMyCar = Car.drive\n\ndriveMyCar()\n')))}s.isMDXComponent=!0}}]);