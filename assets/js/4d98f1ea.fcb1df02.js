"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[5945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,y=u["".concat(l,".").concat(m)]||u[m]||b[m]||c;return n?r.createElement(y,a(a({ref:t},i),{},{components:n})):r.createElement(y,a({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71780:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const c={},a=void 0,s={type:"mdx",permalink:"/100-bugow-js/1748706a-b38f-403a-ab65-6666bd6bede7/bugCode",source:"@site/src/pages/100-bugow-js/1748706a-b38f-403a-ab65-6666bd6bede7/bugCode.md",frontMatter:{}},l=[],p={toc:l},i="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const sym1 = Symbol()\nconst sym2 = Symbol()\n\nconst obj1 = {}\nconst obj2 = {}\n\nconsole.log(sym1 === sym2)\nconsole.log(sym1 === sym1)\n\nconsole.log(obj1 === obj2)\nconsole.log(obj1 === obj1)\n\nconst test = {}\n\ntest[sym1] = "Foo"\ntest[sym2] = "Bar"\n\ntest[obj1] = "Baz"\ntest[obj2] = "Qux"\n\nconsole.log(test[sym1])\nconsole.log(test[sym2])\n\nconsole.log(test[obj1])\nconsole.log(test[obj2])\n\nconsole.log(test)\n')))}u.isMDXComponent=!0}}]);