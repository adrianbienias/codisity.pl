"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[92922],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>b});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},i=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,b=s["".concat(u,".").concat(f)]||s[f]||y[f]||a;return t?r.createElement(b,c(c({ref:n},i),{},{components:t})):r.createElement(b,c({ref:n},i))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78963:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={},c=void 0,l={type:"mdx",permalink:"/100-bugow-js/5838b978-3b1c-433d-b118-9801923593e0/bugCode",source:"@site/src/pages/100-bugow-js/5838b978-3b1c-433d-b118-9801923593e0/bugCode.md",frontMatter:{}},u=[],p={toc:u},i="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(i,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const now = new Date()\n\nconst months = new Map([\n  [1, "January"],\n  [2, "February"],\n  [3, "March"],\n  [4, "April"],\n  [5, "May"],\n  [6, "June"],\n  [7, "July"],\n  [8, "August"],\n  [9, "September"],\n  [10, "October"],\n  [11, "November"],\n  [12, "December"],\n])\n\nconst weekdays = new Map([\n  [1, "Monday"],\n  [2, "Tuesday"],\n  [3, "Wednesday"],\n  [4, "Thursday"],\n  [5, "Friday"],\n  [6, "Saturday"],\n  [7, "Sunday"],\n])\n\nconsole.log(now.toISOString())\nconsole.log(now.getDate())\nconsole.log(months.get(now.getMonth()))\nconsole.log(weekdays.get(now.getDay()))\n')))}s.isMDXComponent=!0}}]);