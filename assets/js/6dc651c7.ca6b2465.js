"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[28393],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),m=o,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89510:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},i=void 0,c={type:"mdx",permalink:"/100-bugow-js/1342370d-03e0-4f0b-aa22-69e05fc64d53/solutionDescription",source:"@site/src/pages/100-bugow-js/1342370d-03e0-4f0b-aa22-69e05fc64d53/solutionDescription.md",description:"Uruchomienie kodu z b\u0142\u0119dem wyrzuci nam do konsoli b\u0142\u0105d Cannot access 'Cat' before initialization.",frontMatter:{}},p=[],l={toc:p},u="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uruchomienie kodu z b\u0142\u0119dem wyrzuci nam do konsoli b\u0142\u0105d ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot access 'Cat' before initialization"),"."),(0,o.kt)("p",null,"W JavaScript deklaracje funkcji oraz zmiennych definiowanych wyra\u017ceniem ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," s\u0105 podci\u0105gane na pocz\u0105tek wykonywanego kodu. W\u0142asno\u015b\u0107 t\u0105 z j. angielskiego nazywamy ",(0,o.kt)("em",{parentName:"p"},"hoisting"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Hoisting")," w JS oznacza, \u017ce mo\u017cemy najpierw wywo\u0142a\u0107 funkcj\u0119, a dopiero w dalszej cz\u0119\u015bci kodu j\u0105 zdefiniowa\u0107."),(0,o.kt)("p",null,"Nie mo\u017cemy jednak zrobi\u0107 tego samego z klas\u0105. Deklaracja ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," nie jest podci\u0105gana, przez co nie mo\u017cemy jej wywo\u0142a\u0107 przed jej zdeklarowaniem."),(0,o.kt)("p",null,"I dok\u0142adnie to jest powodem wyst\u0105pienia b\u0142\u0119du w wcze\u015bniej przedstawionym b\u0142\u0119dnym kodzie."),(0,o.kt)("p",null,"Aby naprawi\u0107 b\u0142\u0105d, musimy po prostu przenie\u015b\u0107 wywo\u0142anie ",(0,o.kt)("inlineCode",{parentName:"p"},"new Cat()")," do dalszej cz\u0119\u015bci kodu, aby wywo\u0142anie nast\u0105pi\u0142o ju\u017c po deklaracji klasy."))}s.isMDXComponent=!0}}]);