"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[51876],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(y,c(c({ref:n},s),{},{components:t})):r.createElement(y,c({ref:n},s))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6846:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(87462),o=(t(67294),t(3905));const a={},c=void 0,l={type:"mdx",permalink:"/100-bugow-js/7a984008-730d-41bf-be00-1493e1c1cdc6/solutionCode",source:"@site/src/pages/100-bugow-js/7a984008-730d-41bf-be00-1493e1c1cdc6/solutionCode.md",frontMatter:{}},i=[],p={toc:i},s="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"const minVal = Number.MIN_VALUE\n\nconsole.log(0 / 0) // NaN\nconsole.log(minVal / minVal) // 1\n\nconsole.log(0 * 0) // 0\nconsole.log(minVal * minVal) // 0\n\nconsole.log(minVal + 1) // 1\nconsole.log(minVal - 1) // -1\n\nconsole.log(minVal) // 5e-324\n")))}u.isMDXComponent=!0}}]);