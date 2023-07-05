"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[84313],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||y[d]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29014:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={},o=void 0,p={type:"mdx",permalink:"/100-bugow-js/88306d48-4df5-4c3e-9452-4fee2be681fd/solutionDescription",source:"@site/src/pages/100-bugow-js/88306d48-4df5-4c3e-9452-4fee2be681fd/solutionDescription.md",description:"B\u0142\u0119dy zostan\u0105 wyrzucone w trzech liniach:",frontMatter:{}},c=[],l={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"B\u0142\u0119dy zostan\u0105 wyrzucone w trzech liniach:"),(0,i.kt)("p",null,"8: ",(0,i.kt)("inlineCode",{parentName:"p"},"Numeric separators are not allowed here.")),(0,i.kt)("p",null,"11: ",(0,i.kt)("inlineCode",{parentName:"p"},"Numeric separator can not be used after leading 0.")),(0,i.kt)("p",null,"17: ",(0,i.kt)("inlineCode",{parentName:"p"},"Numeric separators are not allowed here.")),(0,i.kt)("p",null,"Pozosta\u0142e zapisy liczb i dzia\u0142a\u0144 s\u0105 poprawne."),(0,i.kt)("p",null,"Pomi\u0119dzy cyframi w liczbach dziesi\u0119tnych mo\u017cna umieszcza\u0107 wizualny separator ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"."),(0,i.kt)("p",null,"Przydaje si\u0119 to przy trzycyfrowych grupach, czyli liczebnikach pot\u0119gi tysi\u0105ca (tysi\u0105c, milion, miliard, itd.)."),(0,i.kt)("p",null,"W niekt\xf3rych sytuacjach, nie mo\u017cemy jednak zastosowa\u0107 podkre\u015blenia w zapisach liczbowych."),(0,i.kt)("p",null,"Podkre\u015blenie nie mo\u017ce pojawi\u0107 si\u0119 jako pierwszy znak, bo taki zapis odnosi\u0142by si\u0119 do definiowania nazwy np. zmiennej (",(0,i.kt)("inlineCode",{parentName:"p"},"_myVar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_123"),")."),(0,i.kt)("p",null,"Podkre\u015blenie nie mo\u017ce pojawi\u0107 si\u0119 na ko\u0144cu liczby (np. ",(0,i.kt)("inlineCode",{parentName:"p"},"100_"),")."),(0,i.kt)("p",null,"Podkre\u015blenie nie mo\u017ce wyst\u0105pi\u0107 po pocz\u0105tkowym zerze (np. ",(0,i.kt)("inlineCode",{parentName:"p"},"0_1"),")."),(0,i.kt)("p",null,"Podkre\u015blenia nie mo\u017cna u\u017cy\u0107 w zapisach wyk\u0142adniczych (np. ",(0,i.kt)("inlineCode",{parentName:"p"},"1_e2"),")."),(0,i.kt)("p",null,"Podkre\u015blenia nie mo\u017cna te\u017c u\u017cy\u0107 po pocz\u0105tkowej definicji zapis\xf3w liczb w postaci binarnej, \xf3semkowej, czy szesnastkowej (np. ",(0,i.kt)("inlineCode",{parentName:"p"},"0b_001"),")."),(0,i.kt)("p",null,"Przy u\u017cyciu ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," mo\u017cemy wi\u0119c wizualnie separowa\u0107 liczby dziesi\u0119tne jak np. ",(0,i.kt)("inlineCode",{parentName:"p"},"125_4912_6824"),", jak r\xf3wnie\u017c zapisy liczby w innych systemach liczbowych np. separuj\u0105c co 4 bity liczb binarnych np. ",(0,i.kt)("inlineCode",{parentName:"p"},"0b1010_1101"),"."))}u.isMDXComponent=!0}}]);