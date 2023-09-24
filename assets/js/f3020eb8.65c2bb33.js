"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[94818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),y=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=y(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=y(r),d=a,u=l["".concat(c,".").concat(d)]||l[d]||p[d]||i;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var y=2;y<i;y++)o[y]=r[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46525:(e,t,r)=>{r.d(t,{Z:()=>z});var n=r(67294),a=r(86010),i=r(52802),o=r(39960),s=r(13919),c=r(95999);const y={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",y.cardContainer)},r)}function l(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",y.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",y.cardDescription),title:o},o))}function p(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(l,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"":"\ud83d\udd17";return n.createElement(l,{href:t.href,icon:r,title:t.label,description:t.description})}function u(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(z,{items:r.items,className:t})}function z(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(u,{item:e})))))}},54998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),i=r(46525);const o={},s="System binarny",c={unversionedId:"podstawy/sprzet-komputerowy/system-binarny/index",id:"podstawy/sprzet-komputerowy/system-binarny/index",title:"System binarny",description:"System binarny, zwany tak\u017ce systemem dw\xf3jkowym, to system liczbowy, kt\xf3ry u\u017cywa dw\xf3ch cyfr: 0 i 1, aby reprezentowa\u0107 wszystkie swoje liczby i informacje. Jest to podstawowy system liczbowy wykorzystywany w komputerach i elektronice cyfrowej ze wzgl\u0119du na jego prostot\u0119 i zgodno\u015b\u0107 z reprezentacj\u0105 informacji za pomoc\u0105 sygna\u0142\xf3w elektronicznych.",source:"@site/docs/010-podstawy/010-sprzet-komputerowy/000-system-binarny/index.mdx",sourceDirName:"010-podstawy/010-sprzet-komputerowy/000-system-binarny",slug:"/podstawy/sprzet-komputerowy/system-binarny/",permalink:"/podstawy/sprzet-komputerowy/system-binarny/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.pl/blob/main/docs/010-podstawy/010-sprzet-komputerowy/000-system-binarny/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"basicsSidebar",previous:{title:"Sprz\u0119t komputerowy",permalink:"/podstawy/sprzet-komputerowy/"},next:{title:"\u25b6\ufe0f Podstawy systemu binarnego",permalink:"/podstawy/sprzet-komputerowy/system-binarny/podstawy-systemu-binarnego"}},y={},m=[{value:"Lekcje wideo",id:"lekcje-wideo",level:2}],l={toc:m},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-binarny"},"System binarny"),(0,a.kt)("p",null,"System binarny, zwany tak\u017ce systemem dw\xf3jkowym, to system liczbowy, kt\xf3ry u\u017cywa dw\xf3ch cyfr: 0 i 1, aby reprezentowa\u0107 wszystkie swoje liczby i informacje. Jest to podstawowy system liczbowy wykorzystywany w komputerach i elektronice cyfrowej ze wzgl\u0119du na jego prostot\u0119 i zgodno\u015b\u0107 z reprezentacj\u0105 informacji za pomoc\u0105 sygna\u0142\xf3w elektronicznych."),(0,a.kt)("p",null,"W systemie binarnym ka\u017cda pozycja liczby ma warto\u015b\u0107 pot\u0119gi liczby 2. Najmniej znacz\u0105ca pozycja znajduje si\u0119 zawsze po prawej stronie, a warto\u015bci rosn\u0105 w kierunku lewej strony, zwi\u0119kszaj\u0105c swoj\u0105 warto\u015b\u0107 dwukrotnie wraz z ka\u017cd\u0105 pozycj\u0105. Przyk\u0142adowo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 w systemie binarnym jest r\xf3wna 1 w systemie dziesi\u0119tnym."),(0,a.kt)("li",{parentName:"ul"},"10 w systemie binarnym jest r\xf3wna 2 w systemie dziesi\u0119tnym (1",(0,a.kt)("em",{parentName:"li"},"2^1 + 0"),"2^0)."),(0,a.kt)("li",{parentName:"ul"},"11 w systemie binarnym jest r\xf3wna 3 w systemie dziesi\u0119tnym (1",(0,a.kt)("em",{parentName:"li"},"2^1 + 1"),"2^0)."),(0,a.kt)("li",{parentName:"ul"},"100 w systemie binarnym jest r\xf3wna 4 w systemie dziesi\u0119tnym (1",(0,a.kt)("em",{parentName:"li"},"2^2 + 0"),"2^1 + 0","*","2^0).")),(0,a.kt)("p",null,"System binarny jest fundamentalnym narz\u0119dziem w elektronice cyfrowej, poniewa\u017c mo\u017cna go wykorzystywa\u0107 do reprezentacji i przetwarzania informacji za pomoc\u0105 sygna\u0142\xf3w elektronicznych, kt\xf3re przyjmuj\u0105 jedn\u0105 z dw\xf3ch warto\u015bci: nisk\u0105 (0) lub wysok\u0105 (1). Kombinacje tych sygna\u0142\xf3w reprezentuj\u0105 dane, kt\xf3re mog\u0105 by\u0107 przekazywane, przechowywane i przetwarzane przez komputery oraz inne urz\u0105dzenia elektroniczne."),(0,a.kt)("p",null,"Warto doda\u0107, \u017ce dla ludzi system binarny jest trudny do odczytania i pracy na nim, dlatego u\u017cywamy bardziej przyjaznego systemu dziesi\u0119tnego, kt\xf3ry wykorzystuje dziesi\u0119\u0107 cyfr (0-9) do reprezentacji liczb. Jednak komputery t\u0142umacz\u0105 informacje mi\u0119dzy systemem binarnym a dziesi\u0119tnym, co pozwala na efektywn\u0105 komunikacj\u0119 mi\u0119dzy lud\u017ami a maszynami."),(0,a.kt)("h2",{id:"lekcje-wideo"},"Lekcje wideo"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);