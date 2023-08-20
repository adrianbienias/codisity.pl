"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[43120],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),y=o,s=m["".concat(p,".").concat(y)]||m[y]||k[y]||i;return t?a.createElement(s,r(r({ref:n},u),{},{components:t})):a.createElement(s,r({ref:n},u))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},32876:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const i={},r=void 0,l={type:"mdx",permalink:"/100-bugow-js/c240b7f1-fb67-434c-9965-b41432f128c6/solutionDescription",source:"@site/src/pages/100-bugow-js/c240b7f1-fb67-434c-9965-b41432f128c6/solutionDescription.md",description:'Wszystkie 6 wywo\u0142a\u0144 zwr\xf3ci te same warto\u015bci, tablic\u0119 ["a", "b", "c"].',frontMatter:{}},p=[],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wszystkie 6 wywo\u0142a\u0144 zwr\xf3ci te same warto\u015bci, tablic\u0119 ",(0,o.kt)("inlineCode",{parentName:"p"},'["a", "b", "c"]'),"."),(0,o.kt)("p",null,"Funkcja ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," za pomoc\u0105 operatora ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," tworzy list\u0119 przekazanych do niej argument\xf3w, a nast\u0119pnie zwraca utworzon\u0105 w ten spos\xf3b tablic\u0119 z warto\u015bciami przekazanymi w argumentach."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'console.log(fn("a", "b", "c"))')," zaloguje do konsoli warto\u015bci zwr\xf3cone z wywo\u0142anej funkcji ",(0,o.kt)("inlineCode",{parentName:"p"},"fn"),", co skutkuje stworzeniem z listy przekazanych argument\xf3w, tablicy ",(0,o.kt)("inlineCode",{parentName:"p"},'["a", "b", "c"]'),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'console.log.call(null, ["a", "b", "c"])')," za pomoc\u0105 metody ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," wywo\u0142ywana jest funkcja ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," co stanowi ekwiwalent wywo\u0142ania ",(0,o.kt)("inlineCode",{parentName:"p"},'console.log(["a", "b", "c"])')," z kontekstem ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", czyli bez wskazywania na konkretny obiekt, kt\xf3ry by\u0142by dost\u0119pny pod ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'console.log(Function.call.call(fn, null, "a", "b", "c"))')," loguje do konsoli efekt wywo\u0142ania metody ",(0,o.kt)("inlineCode",{parentName:"p"},"call()")," na funkcji utworzonej przez wywo\u0142anie poprzedniej metody ",(0,o.kt)("inlineCode",{parentName:"p"},"call()"),", kt\xf3ra to tworzy anonimowy obiekt funkcji, tak samo jak gdyby\u015bmy wywo\u0142ali ",(0,o.kt)("inlineCode",{parentName:"p"},"Function()"),"."),(0,o.kt)("p",null,"Pocz\u0105tkowa funkcja w takim ci\u0105gu przestaje mie\u015b\u0107 znaczenie. Wida\u0107 to na kolejnym przyk\u0142adzie ",(0,o.kt)("inlineCode",{parentName:"p"},'console.log(fn.call.call(fn, null, "a", "b", "c"))'),", kt\xf3ry zachowuje si\u0119 tak samo."),(0,o.kt)("p",null,"\u0141a\u0144cuch ",(0,o.kt)("inlineCode",{parentName:"p"},".call.call")," m\xf3g\u0142by zawiera\u0107 znacznie wi\u0119cej powt\xf3rze\u0144 nie zmieniaj\u0105c\u0105 ostatecznego dzia\u0142ania. Pocz\u0105tkowa funkcja na kt\xf3rej rozpoczyna si\u0119 ci\u0105g wielu wywo\u0142a\u0144 ",(0,o.kt)("inlineCode",{parentName:"p"},".call")," traci wtedy na znaczeniu."),(0,o.kt)("p",null,"Finalnie licz\u0105 si\u0119 tylko 2 ostatnie elementy. Wywo\u0142anie poprzez metod\u0119 ",(0,o.kt)("inlineCode",{parentName:"p"},"call()")," funkcji, kt\xf3ra r\xf3wnie\u017c jest funkcj\u0105 ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," i nie implementuje dodatkowego dzia\u0142ania."),(0,o.kt)("p",null,"Nast\u0119puje wi\u0119c przesuni\u0119cie. Kontekst przekazany jako pierwszy argument do ",(0,o.kt)("inlineCode",{parentName:"p"},"call()")," staje si\u0119 implementacj\u0105 wywo\u0142ywanej funkcji."),(0,o.kt)("p",null,"Kolejny argument ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," staje si\u0119 kontekstem dla ewentualnego wywo\u0142ania ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", a nast\u0119pne argumenty staj\u0105 si\u0119 argumentami przekazanymi ju\u017c do docelowej funkcji (w naszym przypadku ",(0,o.kt)("inlineCode",{parentName:"p"},"fn"),")."),(0,o.kt)("p",null,"Ostatnim przyk\u0142adem udowadniaj\u0105cym to dzia\u0142anie jest u\u017cycie ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout"),', kt\xf3ry s\u0142u\u017cy jedynie za "dawc\u0119", na kt\xf3rym mo\u017cna rozpocz\u0105\u0107 wywo\u0142ywanie ci\u0105gu ',(0,o.kt)("inlineCode",{parentName:"p"},".call"),"."),(0,o.kt)("p",null,"Warto te\u017c wspomnie\u0107 o bli\u017aniaczym odpowiedniku metody ",(0,o.kt)("inlineCode",{parentName:"p"},"call()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"apply()"),"."),(0,o.kt)("p",null,"Jedyna r\xf3\u017cnica pomi\u0119dzy tymi metodami jest taka, \u017ce ",(0,o.kt)("inlineCode",{parentName:"p"},"call()")," przyjmuje list\u0119 argument\xf3w (tak jak standardowa funkcja), a ",(0,o.kt)("inlineCode",{parentName:"p"},"apply()")," przyjmuje tablic\u0119 zawieraj\u0105c\u0105 docelowe argumenty."))}m.isMDXComponent=!0}}]);