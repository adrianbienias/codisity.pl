"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[14765],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),k=o,f=s["".concat(p,".").concat(k)]||s[k]||w[k]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=k;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},97926:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={},i=void 0,l={type:"mdx",permalink:"/100-bugow-js/1be29c44-56a0-4d02-81e3-8c93f17b434b/solutionDescription",source:"@site/src/pages/100-bugow-js/1be29c44-56a0-4d02-81e3-8c93f17b434b/solutionDescription.md",description:'Instrukcja warunkowa if (new Boolean(false)) zostanie wykonana i do konsoli zostanie zalogowana warto\u015b\u0107 "Third".',frontMatter:{}},p=[],c={toc:p},u="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Instrukcja warunkowa ",(0,o.kt)("inlineCode",{parentName:"p"},"if (new Boolean(false))")," zostanie wykonana i do konsoli zostanie zalogowana warto\u015b\u0107 ",(0,o.kt)("inlineCode",{parentName:"p"},'"Third"'),"."),(0,o.kt)("p",null,"Pozosta\u0142e instrukcje nie wykonaj\u0105 si\u0119."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"if (false)")," powinno by\u0107 oczywiste. Instrukcja nie wykonuje si\u0119, bo przekazany warunek jest fa\u0142szywy."),(0,o.kt)("p",null,"Funkcja ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," zwraca warto\u015b\u0107 logiczn\u0105 ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," lub ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," w zale\u017cno\u015bci od przekazanego argumentu i jego ewentualnej konwersji na warto\u015b\u0107 logiczn\u0105, je\u015bli jest innego typu."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Boolean(false)")," zwraca warto\u015b\u0107 ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," wi\u0119c tutaj mamy t\u0105 sam\u0105 sytuacj\u0119 co w pierwszej instrukcji."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"new Boolean(false)")," mo\u017ce wydawa\u0107 si\u0119 ekwiwalentem ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean(false)"),", ale u\u017cycie s\u0142owa kluczowego ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," powoduje utworzenie nowego obiektu, traktuj\u0105c funkcj\u0119 ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean()")," jako konstruktor obiektu,"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"new Boolean()")," zwraca wi\u0119c obiekt, a nie warto\u015b\u0107 logiczn\u0105."),(0,o.kt)("p",null,"Obiekty z natury s\u0105 warto\u015bciami prawdziwymi (nie ma znaczenia, \u017ce wprowadzili\u015bmy do konstruktora warto\u015b\u0107 ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"), wi\u0119c trzecia instrukcja warunkowa zostaje wykonana."),(0,o.kt)("p",null,"Czwarta i ostatnia instrukcja nie zostaje wykonana bo podw\xf3jny wykrzyknij dzia\u0142a tak samo, jak funkcja ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean()"),"."),(0,o.kt)("p",null,"Z ",(0,o.kt)("inlineCode",{parentName:"p"},"!false")," generowana jest warto\u015b\u0107 przeciwna ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", a nast\u0119pnie z ",(0,o.kt)("inlineCode",{parentName:"p"},"!true"),", warto\u015b\u0107 przeciwna, czyli ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."))}s.isMDXComponent=!0}}]);