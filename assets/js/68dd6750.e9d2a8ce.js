"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[67183],{3905:(e,n,t)=>{t.d(n,{Zo:()=>y,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),u=l(t),s=r,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||i;return t?a.createElement(m,o(o({ref:n},y),{},{components:t})):a.createElement(m,o({ref:n},y))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},76732:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={},o=void 0,p={type:"mdx",permalink:"/100-bugow-js/90b2a251-a246-4713-adfc-adf089197961/solutionDescription",source:"@site/src/pages/100-bugow-js/90b2a251-a246-4713-adfc-adf089197961/solutionDescription.md",description:"W przyk\u0142adzie z b\u0142\u0119dem, do konsoli zostanie zalogowane can everything. Mimo, \u017ce zalogowany u\u017cytkownik ma ustawion\u0105 rol\u0119 na reader, instrukcja switch nie zatrzyma swojego dzia\u0142ania na tym przypadku i finalnie u\u017cytkownik uzyska prawa admina.",frontMatter:{}},c=[],l={toc:c},y="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(y,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"W przyk\u0142adzie z b\u0142\u0119dem, do konsoli zostanie zalogowane ",(0,r.kt)("inlineCode",{parentName:"p"},"can everything"),". Mimo, \u017ce zalogowany u\u017cytkownik ma ustawion\u0105 rol\u0119 na ",(0,r.kt)("inlineCode",{parentName:"p"},"reader"),", instrukcja ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," nie zatrzyma swojego dzia\u0142ania na tym przypadku i finalnie u\u017cytkownik uzyska prawa admina."),(0,r.kt)("p",null,"Dzieje si\u0119 tak, poniewa\u017c domy\u015blnie ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," zaczynaj\u0105c od przypadku w kt\xf3rym nast\u0105pi dopasowanie, wykonuje kod a\u017c do pojawienia si\u0119 deklaracji ",(0,r.kt)("inlineCode",{parentName:"p"},"break"),"."),(0,r.kt)("p",null,"W naszym b\u0142\u0119dnym przyk\u0142adzie nie dodali\u015bmy ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," w \u017cadnym z przypadk\xf3w (",(0,r.kt)("inlineCode",{parentName:"p"},"case"),"), wi\u0119c kod wykonywa\u0142 si\u0119 po kolei, ko\u0144cz\u0105c na przypisaniu do zmiennej ",(0,r.kt)("inlineCode",{parentName:"p"},"permission")," warto\u015bci z ostatniego przypadku w ",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"."),(0,r.kt)("p",null,"Innym rozwi\u0105zaniem, unikaj\u0105cym wyst\u0105pienia b\u0142\u0119du, mog\u0142oby by\u0107 pomini\u0119cie zmiennej ",(0,r.kt)("inlineCode",{parentName:"p"},"permission")," i bezpo\u015brednie zwracanie po\u017c\u0105danych warto\u015bci w ka\u017cdy z przypadk\xf3w (",(0,r.kt)("inlineCode",{parentName:"p"},'return "can ..."'),")."),(0,r.kt)("p",null,"Nie musieliby\u015bmy wtedy u\u017cywa\u0107 wyra\u017ce\u0144 ",(0,r.kt)("inlineCode",{parentName:"p"},"break"),", poniewa\u017c po wywo\u0142aniu ",(0,r.kt)("inlineCode",{parentName:"p"},"return"),", dalszy kod w funkcji nie by\u0142by wykonywany."))}u.isMDXComponent=!0}}]);