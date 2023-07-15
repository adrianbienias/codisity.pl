"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[65799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=i,k=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(k,a(a({ref:n},c),{},{components:t})):r.createElement(k,a({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64440:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={},a=void 0,p={type:"mdx",permalink:"/100-bugow-js/6bc1f45c-7f3e-4207-854f-e4ac9843f8b6/solutionDescription",source:"@site/src/pages/100-bugow-js/6bc1f45c-7f3e-4207-854f-e4ac9843f8b6/solutionDescription.md",description:"Efektem dzia\u0142ania b\u0142\u0119dnego kodu b\u0119dzie zalogowanie tekstu do konsoli po up\u0142ywie jednej sekundy, dziesi\u0119ciokrotnie naraz.",frontMatter:{}},l=[],u={toc:l},c="wrapper";function s(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Efektem dzia\u0142ania b\u0142\u0119dnego kodu b\u0119dzie zalogowanie tekstu do konsoli po up\u0142ywie jednej sekundy, dziesi\u0119ciokrotnie naraz."),(0,i.kt)("p",null,"Nasz b\u0142\u0105d logiczny ukry\u0142 si\u0119 w przekazanym argumencie op\xf3\u017anienia w funkcji ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout()"),"."),(0,i.kt)("p",null,"Ustawione op\xf3\u017anienie 1 sekundy (",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," milisekund) nie zmienia si\u0119 w \u017cadnej iteracji p\u0119tli."),(0,i.kt)("p",null,"P\u0119tla ",(0,i.kt)("inlineCode",{parentName:"p"},"for()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," razy wywo\u0142uje ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout()"),", kt\xf3ry przy ka\u017cdym wywo\u0142aniu ma ustawiane to samo op\xf3\u017anienie."),(0,i.kt)("p",null,"Aby uzyska\u0107 po\u017c\u0105dany efekt 1 sekundowych op\xf3\u017anie\u0144 pomi\u0119dzy wywo\u0142aniami kodu, musimy pomno\u017cy\u0107 op\xf3\u017anienie przez warto\u015b\u0107 indeksu (",(0,i.kt)("inlineCode",{parentName:"p"},"i"),") w ka\u017cdej z iteracji p\u0119tli"),(0,i.kt)("p",null,"Uzyskamy wtedy wywo\u0142ania z rosn\u0105c\u0105 r\xf3\u017cnic\u0105 odst\u0119pu czasu:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout(() => {...}, 0)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout(() => {...}, 1000)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout(() => {...}, 2000)")),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("p",null,"I w\u0142a\u015bnie o taki efekt nam chodzi."),(0,i.kt)("p",null,"Pomi\u0119dzy ka\u017cdym z wywo\u0142a\u0144 kodu z anonimowej funkcji strza\u0142kowej przekazanej jako callback do ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout()"),", r\xf3\u017cnica odst\u0119pu wykonania kodu w czasie b\u0119dzie wynosi\u0142a ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," milisekund."))}s.isMDXComponent=!0}}]);