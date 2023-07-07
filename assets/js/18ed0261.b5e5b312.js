"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[5926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>z});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,z=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?a.createElement(z,o(o({ref:t},u),{},{components:n})):a.createElement(z,o({ref:t},u))}));function z(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31374:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,p={type:"mdx",permalink:"/100-bugow-js/28eab874-606d-49f2-bc6c-f8382476a776/solutionDescription",source:"@site/src/pages/100-bugow-js/28eab874-606d-49f2-bc6c-f8382476a776/solutionDescription.md",description:"Metoda split() dzieli ci\u0105g znak\xf3w formuj\u0105c tablic\u0119 z fragmentami ci\u0105g\xf3w znak\xf3w.",frontMatter:{}},l=[],c={toc:l},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Metoda ",(0,r.kt)("inlineCode",{parentName:"p"},"split()")," dzieli ci\u0105g znak\xf3w formuj\u0105c tablic\u0119 z fragmentami ci\u0105g\xf3w znak\xf3w."),(0,r.kt)("p",null,"Podzia\u0142 zostaje wykonany na podstawie warto\u015bci rozdzielacza, przekazanego jako argument metody."),(0,r.kt)("p",null,"Przyk\u0142adowo, ",(0,r.kt)("inlineCode",{parentName:"p"},'"a b c".split(" ")'),", podzieli ci\u0105g znak\xf3w ",(0,r.kt)("inlineCode",{parentName:"p"},'"a b c"')," u\u017cywaj\u0105c bia\u0142ego znaku spacji jako rozdzielacza."),(0,r.kt)("p",null,"Uformowana zostanie tablica ",(0,r.kt)("inlineCode",{parentName:"p"},'["a", "b", "c"]'),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"".split(" ")')," zwraca tablic\u0119 z jednym elementem pustego ci\u0105gu znak\xf3w ",(0,r.kt)("inlineCode",{parentName:"p"},'[""]'),"."),(0,r.kt)("p",null,"Mimo, \u017ce nie ma czego dzieli\u0107 (pusty ci\u0105g znak\xf3w), przekazanie rozdzielacza powoduje, \u017ce nast\u0119puje podzia\u0142, kt\xf3rego efektem jest pusty ci\u0105g znak\xf3w."),(0,r.kt)("p",null,"W przypadku pr\xf3by podzia\u0142u pustego ci\u0105gu znak\xf3w, element rozdzielacza jest nieistotny, zawsze wygeneruje tablic\u0119 z jednym elementem pustego ci\u0105gi znak\xf3w."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"".split("?")'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"".split("asd")'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"".split("-")'),", bez znaczenia, zawsze zwr\xf3ci ",(0,r.kt)("inlineCode",{parentName:"p"},'[""]'),"."),(0,r.kt)("p",null,"Z kolei ",(0,r.kt)("inlineCode",{parentName:"p"},'"".split("")')," to pr\xf3ba podzielenia pustego ci\u0105gu znak\xf3w za pomoc\u0105 pustego znaku rozdzielacza."),(0,r.kt)("p",null,"Jest to jedyna sytuacja, w kt\xf3rej w efekcie dzia\u0142ania metody ",(0,r.kt)("inlineCode",{parentName:"p"},"split()"),", zostaje zwr\xf3cona pusta tablica."))}s.isMDXComponent=!0}}]);