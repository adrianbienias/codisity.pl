"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[94741],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,m=u["".concat(l,".").concat(y)]||u[y]||f[y]||c;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},76764:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const c={},a=void 0,i={type:"mdx",permalink:"/100-bugow-js/4a3a28c4-f782-4ef5-911f-4f08799f54b8/bugCode",source:"@site/src/pages/100-bugow-js/4a3a28c4-f782-4ef5-911f-4f08799f54b8/bugCode.md",frontMatter:{}},l=[],p={toc:l},s="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'const person = {\n  name: "John",\n  height: 178,\n  birthdate: new Date("1999-12-31"),\n  children: [\n    {\n      name: "John Junior",\n      height: 132,\n      birthdate: new Date("2022-02-22"),\n    },\n  ],\n}\n\nconst copy1 = JSON.parse(JSON.stringify(person))\nconst copy2 = { ...person }\nconst copy3 = structuredClone(person)\n\nperson.children[0].name = "Susan"\n\nconsole.log(person.birthdate.getTime())\nconsole.log(person.children[0])\n\nconsole.log(copy1.birthdate.getTime())\nconsole.log(copy1.children[0])\n\nconsole.log(copy2.birthdate.getTime())\nconsole.log(copy2.children[0])\n\nconsole.log(copy3.birthdate.getTime())\nconsole.log(copy3.children[0])\n')))}u.isMDXComponent=!0}}]);