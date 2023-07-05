"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[13366],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),y=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=y(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=y(t),m=a,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(d,o(o({ref:n},l),{},{components:t})):r.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var y=2;y<i;y++)o[y]=t[y];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78706:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},o=void 0,p={type:"mdx",permalink:"/100-bugow-js/b2d2c3dc-7b6e-4d08-a448-193140af5c91/solutionDescription",source:"@site/src/pages/100-bugow-js/b2d2c3dc-7b6e-4d08-a448-193140af5c91/solutionDescription.md",description:"Zacznijmy od tego, \u017ce u\u017cycie operatora == lub === nie ma tutaj \u017cadnego znaczenia. Typ por\xf3wnywanych danych jest taki sam, wi\u0119c \u015bcis\u0142e por\xf3wnanie (===) zadzia\u0142a\u0142oby identycznie jak zwyk\u0142e (==).",frontMatter:{}},c=[],y={toc:c},l="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zacznijmy od tego, \u017ce u\u017cycie operatora ",(0,a.kt)("inlineCode",{parentName:"p"},"==")," lub ",(0,a.kt)("inlineCode",{parentName:"p"},"===")," nie ma tutaj \u017cadnego znaczenia. Typ por\xf3wnywanych danych jest taki sam, wi\u0119c \u015bcis\u0142e por\xf3wnanie (",(0,a.kt)("inlineCode",{parentName:"p"},"==="),") zadzia\u0142a\u0142oby identycznie jak zwyk\u0142e (",(0,a.kt)("inlineCode",{parentName:"p"},"=="),")."),(0,a.kt)("p",null,"Jednak mimo, \u017ce warto\u015bci obiekt\xf3w ",(0,a.kt)("inlineCode",{parentName:"p"},"user1")," i ",(0,a.kt)("inlineCode",{parentName:"p"},"user2")," s\u0105 takie same, ich por\xf3wnanie zwraca fa\u0142sz, poniewa\u017c s\u0105 to dwa r\xf3\u017cne obiekty."),(0,a.kt)("p",null,"W poprzednich bugach (np. #001) dowiedzia\u0142e\u015b si\u0119, \u017ce przypisywanie obiekt\xf3w do sta\u0142ych/zmiennych polega na przypisaniu jedynie ich referencji tj. adresu z pami\u0119ci RAM."),(0,a.kt)("p",null,"Oznacza to, \u017ce por\xf3wnuj\u0105c warto\u015bci przypisane do sta\u0142ych ",(0,a.kt)("inlineCode",{parentName:"p"},"user1")," i ",(0,a.kt)("inlineCode",{parentName:"p"},"user2"),", por\xf3wnujemy tak naprawd\u0119 jedynie adresy w pami\u0119ci RAM, w kt\xf3rych zapisane s\u0105 te obiekty. A te w naszym przypadku s\u0105 r\xf3\u017cne."),(0,a.kt)("p",null,"Sytuacja ma si\u0119 inaczej w przypadku por\xf3wnywania typ\xf3w pierwotnych jak ci\u0105gi znak\xf3w (",(0,a.kt)("em",{parentName:"p"},"string"),"), liczby (",(0,a.kt)("em",{parentName:"p"},"number"),"), warto\u015bci logiczne (",(0,a.kt)("em",{parentName:"p"},"boolean"),")."),(0,a.kt)("p",null,"Mo\u017cemy wi\u0119c u\u017cy\u0107 obej\u015bcia i za pomoc\u0105 ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," przekonwertowa\u0107 obiekty na ci\u0105gi znak\xf3w. Nast\u0119pnie mo\u017cemy por\xf3wna\u0107 ci\u0105gi znak\xf3w i otrzyma\u0107 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", ju\u017c zgodnie z naszymi oczekiwaniami."))}u.isMDXComponent=!0}}]);