"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[31106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,m=u["".concat(i,".").concat(y)]||u[y]||f[y]||c;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=y;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},78105:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const c={},l=void 0,a={type:"mdx",permalink:"/100-bugow-js/52fbfe20-45e9-4a02-adc1-cb03d30fb6e9/solutionCode",source:"@site/src/pages/100-bugow-js/52fbfe20-45e9-4a02-adc1-cb03d30fb6e9/solutionCode.md",frontMatter:{}},i=[],p={toc:i},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers {14}",showLineNumbers:!0,"{14}":!0},'let firstName = new String("Brendan")\nlet lastName = String("Eich")\nlet user = { id: 1, admin: true }\nlet numbers = [1, 2, 3]\nlet nothing\nlet empty = null\nlet greet = function () { return "Hi!" }\nlet greeting = new greet()\n\nconsole.log("object" === typeof firstName)\nconsole.log("object" === typeof lastName)\nconsole.log("object" === typeof user)\nconsole.log("object" === typeof numbers)\nconsole.log("object" === typeof empty)\nconsole.log("object" === typeof nothing)\nconsole.log("object" === typeof greet)\nconsole.log("object" === typeof greeting)\n')))}u.isMDXComponent=!0}}]);