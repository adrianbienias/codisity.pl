"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[29139],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},l),{},{components:a})):n.createElement(k,o({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46525:(e,t,a)=>{a.d(t,{Z:()=>z});var n=a(67294),r=a(86010),i=a(52802),o=a(39960),c=a(13919),s=a(95999);const p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};function l(e){let{href:t,children:a}=e;return n.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",p.cardContainer)},a)}function d(e){let{href:t,icon:a,title:i,description:o}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",p.cardTitle),title:i},a," ",i),o&&n.createElement("p",{className:(0,r.Z)("text--truncate",p.cardDescription),title:o},o))}function u(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const a=(0,c.Z)(t.href)?"":"\ud83d\udd17";return n.createElement(d,{href:t.href,icon:a,title:t.label,description:t.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(z,{items:a.items,className:t})}function z(e){const{items:t,className:a}=e;if(!t)return n.createElement(y,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(k,{item:e})))))}},54617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905)),i=a(46525);const o={},c="Redux",s={unversionedId:"frontend/zarzadzanie-stanem/podstawy-reduxa/index",id:"frontend/zarzadzanie-stanem/podstawy-reduxa/index",title:"Redux",description:"Redux to biblioteka JavaScript, cz\u0119sto u\u017cywana w po\u0142\u0105czeniu z frameworkiem React, kt\xf3ra s\u0142u\u017cy do zarz\u0105dzania stanem aplikacji. Jest to narz\u0119dzie, kt\xf3re pomaga w efektywnym zarz\u0105dzaniu danymi i ich przep\u0142ywem w du\u017cych i skomplikowanych aplikacjach internetowych. Redux jest oparty na kilku kluczowych koncepcjach:",source:"@site/docs/030-frontend/080-zarzadzanie-stanem/020-podstawy-reduxa/index.mdx",sourceDirName:"030-frontend/080-zarzadzanie-stanem/020-podstawy-reduxa",slug:"/frontend/zarzadzanie-stanem/podstawy-reduxa/",permalink:"/frontend/zarzadzanie-stanem/podstawy-reduxa/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.pl/blob/main/docs/030-frontend/080-zarzadzanie-stanem/020-podstawy-reduxa/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"frontendSidebar",previous:{title:"Zarz\u0105dzanie stanem",permalink:"/frontend/zarzadzanie-stanem/"},next:{title:"\u25b6\ufe0f Przygotowanie \u015brodowiska deweloperskiego",permalink:"/frontend/zarzadzanie-stanem/podstawy-reduxa/przygotowanie-srodowiska-deweloperskiego"}},p={},l=[{value:"Kurs wideo - Podstawy Reduxa",id:"kurs-wideo---podstawy-reduxa",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redux"},"Redux"),(0,r.kt)("p",null,"Redux to biblioteka JavaScript, cz\u0119sto u\u017cywana w po\u0142\u0105czeniu z frameworkiem React, kt\xf3ra s\u0142u\u017cy do zarz\u0105dzania stanem aplikacji. Jest to narz\u0119dzie, kt\xf3re pomaga w efektywnym zarz\u0105dzaniu danymi i ich przep\u0142ywem w du\u017cych i skomplikowanych aplikacjach internetowych. Redux jest oparty na kilku kluczowych koncepcjach:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Centralny magazyn stanu (Store)"),": W Reduxie ca\u0142y stan aplikacji jest przechowywany w jednym centralnym magazynie stanu. To oznacza, \u017ce wszystkie dane aplikacji, takie jak stan komponent\xf3w, s\u0105 przechowywane w jednym miejscu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Niezmienno\u015b\u0107 stanu"),": Stan w Reduxie jest niezmienialny, co oznacza, \u017ce nie mo\u017cna go bezpo\u015brednio modyfikowa\u0107. Zamiast tego ka\u017cda zmiana stanu jest tworzona jako nowy obiekt, co pomaga w monitorowaniu zmian i zachowaniu sp\xf3jno\u015bci.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Akcje (Actions)"),": Akcje to obiekty JavaScript, kt\xf3re opisuj\u0105 zmian\u0119 stanu. Ka\u017cda akcja zawiera typ (typowy ci\u0105g znak\xf3w) i opcjonalne dane, kt\xf3re s\u0105 przekazywane do reduktor\xf3w w celu aktualizacji stanu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reduktory (Reducers)"),": Reduktory to funkcje, kt\xf3re okre\u015blaj\u0105, jakie zmiany w stanie maj\u0105 by\u0107 dokonane w odpowiedzi na akcje. Reduktory przyjmuj\u0105 bie\u017c\u0105cy stan i akcj\u0119 jako argumenty i zwracaj\u0105 nowy stan.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Po\u0142\u0105czenie (Connect)"),": W aplikacji Redux cz\u0119sto korzysta si\u0119 z funkcji ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),", kt\xf3ra pozwala komponentom React na dost\u0119p do stanu i akcji Reduxa. To umo\u017cliwia komponentom korzystanie z danych ze stanu i reagowanie na zmiany w stanie."))),(0,r.kt)("p",null,"Korzy\u015bci z u\u017cycia Reduxa:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Jasne zarz\u0105dzanie stanem"),": Redux narzuca struktur\u0119 i jednoznaczny spos\xf3b zarz\u0105dzania stanem, co u\u0142atwia zrozumienie i utrzymanie aplikacji, szczeg\xf3lnie w przypadku wi\u0119kszych projekt\xf3w.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u0141atwe testowanie"),": Funkcje reduktora s\u0105 czyste i deterministyczne, co u\u0142atwia testowanie. Mo\u017cna \u0142atwo pisa\u0107 testy jednostkowe i sprawdza\u0107, czy akcje zmieniaj\u0105 stan w oczekiwany spos\xf3b.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Wsparcie dla podr\xf3\u017cowania w czasie (time-travel debugging)"),": Redux pozwala na \u015bledzenie historii akcji i cofanie si\u0119 do wcze\u015bniejszych stan\xf3w aplikacji, co jest przydatne podczas debugowania i analizy b\u0142\u0119d\xf3w.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rejestracja zdarze\u0144 (Logging)"),": Mo\u017cliwe jest \u0142atwe logowanie akcji i zmian stanu, co u\u0142atwia \u015bledzenie dzia\u0142ania aplikacji."))),(0,r.kt)("p",null,"Redux jest popularnym narz\u0119dziem w ekosystemie React, ale mo\u017ce by\u0107 u\u017cywany w po\u0142\u0105czeniu z innymi bibliotekami i frameworkami JavaScript. Jest szczeg\xf3lnie przydatny w projektach, kt\xf3re maj\u0105 skomplikowany stan aplikacji, du\u017c\u0105 ilo\u015b\u0107 danych i du\u017c\u0105 skalowalno\u015b\u0107."),(0,r.kt)("h2",{id:"kurs-wideo---podstawy-reduxa"},"Kurs wideo - Podstawy Reduxa"),(0,r.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);