"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[99387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},y=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,s=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(s,a(a({ref:t},y),{},{components:n})):r.createElement(s,a({ref:t},y))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81106:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,p={type:"mdx",permalink:"/100-bugow-js/fa73295e-34e5-4f5c-9098-291e3770e4b0/solutionDescription",source:"@site/src/pages/100-bugow-js/fa73295e-34e5-4f5c-9098-291e3770e4b0/solutionDescription.md",description:"W przyk\u0142adzie z b\u0142\u0119dem, Car.drive() zaloguje do konsoli obiekt Car, natomiast driveMyCar() zaloguje globalny obiekt lub undefined w zale\u017cno\u015bci od tego, czy aktywny b\u0119dzie tryb \u015bcis\u0142y (strict mode).",frontMatter:{}},l=[],c={toc:l},y="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"W przyk\u0142adzie z b\u0142\u0119dem, ",(0,o.kt)("inlineCode",{parentName:"p"},"Car.drive()")," zaloguje do konsoli obiekt ",(0,o.kt)("inlineCode",{parentName:"p"},"Car"),", natomiast ",(0,o.kt)("inlineCode",{parentName:"p"},"driveMyCar()")," zaloguje globalny obiekt lub ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," w zale\u017cno\u015bci od tego, czy aktywny b\u0119dzie tryb \u015bcis\u0142y (",(0,o.kt)("em",{parentName:"p"},"strict mode"),")."),(0,o.kt)("p",null,"Przypisuj\u0105c do sta\u0142ej ",(0,o.kt)("inlineCode",{parentName:"p"},"driveMyCar")," metod\u0119 ",(0,o.kt)("inlineCode",{parentName:"p"},"Car.drive"),", przypisujemy j\u0105 w globalnym kontek\u015bcie."),(0,o.kt)("p",null,"Wywo\u0142anie ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," b\u0119dzie wi\u0119c odnosi\u0142o si\u0119 do globalnego obiektu (",(0,o.kt)("inlineCode",{parentName:"p"},"Window")," w przegl\u0105darkach, ",(0,o.kt)("inlineCode",{parentName:"p"},"global")," w Node.js), lub zwr\xf3ci ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," je\u015bli b\u0119dziemy w trybie \u015bcis\u0142ym."),(0,o.kt)("p",null,"Je\u015bli chcemy to naprawi\u0107, musimy wyra\u017anie powi\u0105za\u0107 przypisywan\u0105 metod\u0119 ",(0,o.kt)("inlineCode",{parentName:"p"},"drive")," z innym kontekstem, w kt\xf3rym chcemy aby zosta\u0142a wykonana. Takie powi\u0105zanie uzyskamy korzystaj\u0105c z metody ",(0,o.kt)("inlineCode",{parentName:"p"},"bind()"),"."),(0,o.kt)("p",null,"W naszym przypadku chcemy powi\u0105za\u0107 t\u0105 metod\u0119 z obiektem ",(0,o.kt)("inlineCode",{parentName:"p"},"Car"),"."))}d.isMDXComponent=!0}}]);