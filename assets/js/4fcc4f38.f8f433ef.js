"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[43342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),s=r,k=u["".concat(c,".").concat(s)]||u[s]||y[s]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43434:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,p={type:"mdx",permalink:"/100-bugow-js/ffc67d5d-0437-493c-b712-e1e3571caaef/solutionDescription",source:"@site/src/pages/100-bugow-js/ffc67d5d-0437-493c-b712-e1e3571caaef/solutionDescription.md",description:"first val, second a,b zostanie zwr\xf3cone w wywo\u0142aniu nr 2.",frontMatter:{}},c=[],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"first val, second a,b")," zostanie zwr\xf3cone w wywo\u0142aniu nr 2."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Przyk\u0142ady 1 i 3")," to wywo\u0142ania tzw. etykietowanego szablonu (",(0,r.kt)("em",{parentName:"p"},"tagged template"),"). U\u017cywaj\u0105c grawis\xf3w (",(0,r.kt)("em",{parentName:"p"},"backtick")," ",(0,r.kt)("inlineCode",{parentName:"p"},"`"),") mo\u017cemy wywo\u0142ywa\u0107 funkcje przekazuj\u0105c litera\u0142 szablonu (",(0,r.kt)("em",{parentName:"p"},"template literal"),") jako argument."),(0,r.kt)("p",null,"Funkcja ma wtedy do dyspozycji go\u0142y tekst jako pierwszy parametr, a pod kolejnymi, dynamicznie generowanymi parametrami, dost\u0119pne s\u0105 ewaluacje notacji ",(0,r.kt)("inlineCode",{parentName:"p"},"${}")," przekazane wewn\u0105trz litera\u0142u szablonu."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"W przyk\u0142adzie 1"),", w funkcji pod parametrem ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," mamy dost\u0119pn\u0105 tylko tablic\u0119 z go\u0142ymi fragmentami tekstu z litera\u0142u szablonu. Brakuje w niej element\xf3w wywo\u0142ywanych za pomoc\u0105 notacji ",(0,r.kt)("inlineCode",{parentName:"p"},"${}"),", kt\xf3re dost\u0119pne s\u0105 pod kolejnymi, dynamicznie tworzonymi parametrami funkcji."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Przyk\u0142ad 3")," r\xf3\u017cni si\u0119 od 1 tylko u\u017cyciem parametru reszty dla argument\xf3w funkcji. Tym samym, wszystkie dynamicznie wygenerowane parametry dost\u0119pne s\u0105 w tablicy ",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"."),(0,r.kt)("p",null,"Pierwszy element tablicy zawiera 3 warto\u015bci go\u0142ego tekstu, te same, kt\xf3re zosta\u0142y zalogowane w przyk\u0142adzie 1."),(0,r.kt)("p",null,"Kolejne elementy tablicy to warto\u015bci wywo\u0142ane wewn\u0105trz notacji ",(0,r.kt)("inlineCode",{parentName:"p"},"${}"),", czyli ",(0,r.kt)("inlineCode",{parentName:"p"},"val")," oraz tablica z 2 elementami ",(0,r.kt)("inlineCode",{parentName:"p"},'["a", "b"]'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Przyk\u0142ad 2")," zwraca nam ci\u0105g znak\xf3w przekazany jako argument, ju\u017c po ewaluacji kodu umieszczonego w notacjach ",(0,r.kt)("inlineCode",{parentName:"p"},"${}"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Przyk\u0142ad 4")," robi to samo co 2, jednak z uwagi na u\u017cycie parametru reszty ",(0,r.kt)("inlineCode",{parentName:"p"},"...args"),", zwr\xf3cona zostaje tablica przekazanych argument\xf3w. Przekazany zosta\u0142 tylko 1 argument w postaci litera\u0142u szablonu, wi\u0119c tablica zawiera tylko 1 element, ci\u0105g znak\xf3w, taki jak ten z przyk\u0142adu nr 2."))}u.isMDXComponent=!0}}]);