"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[75167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var k=n.createContext({}),l=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(k.Provider,{value:t},e.children)},s="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,k=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(a),y=o,m=s["".concat(k,".").concat(y)]||s[y]||w[y]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=y;var c={};for(var k in t)hasOwnProperty.call(t,k)&&(c[k]=t[k]);c.originalType=e,c[s]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},76614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>r,default:()=>w,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const i={tags:["WebSocket"]},r="WebSocket",c={unversionedId:"fullstack/websocket/index",id:"fullstack/websocket/index",title:"WebSocket",description:"WebSocket to protok\xf3\u0142 komunikacyjny stosowany w aplikacjach sieciowych, kt\xf3ry umo\u017cliwia dwukierunkow\u0105 komunikacj\u0119 w czasie rzeczywistym pomi\u0119dzy przegl\u0105dark\u0105 lub klientem a serwerem. Jest to alternatywa dla tradycyjnego modelu HTTP, kt\xf3ry jest protoko\u0142em jednokierunkowym, gdzie przegl\u0105darka lub klient wysy\u0142a \u017c\u0105danie do serwera, a serwer odpowiada.",source:"@site/docs/050-fullstack/040-websocket/index.mdx",sourceDirName:"050-fullstack/040-websocket",slug:"/fullstack/websocket/",permalink:"/fullstack/websocket/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.pl/blob/main/docs/050-fullstack/040-websocket/index.mdx",tags:[{label:"WebSocket",permalink:"/tags/web-socket"}],version:"current",frontMatter:{tags:["WebSocket"]},sidebar:"fullstackSidebar",previous:{title:"Paginacja",permalink:"/fullstack/paginacja/"},next:{title:"Powiadomienia push",permalink:"/fullstack/powiadomienia-push/"}},k={},l=[{value:"Linki",id:"linki",level:2}],p={toc:l},s="wrapper";function w(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websocket"},"WebSocket"),(0,o.kt)("p",null,"WebSocket to protok\xf3\u0142 komunikacyjny stosowany w aplikacjach sieciowych, kt\xf3ry umo\u017cliwia dwukierunkow\u0105 komunikacj\u0119 w czasie rzeczywistym pomi\u0119dzy przegl\u0105dark\u0105 lub klientem a serwerem. Jest to alternatywa dla tradycyjnego modelu HTTP, kt\xf3ry jest protoko\u0142em jednokierunkowym, gdzie przegl\u0105darka lub klient wysy\u0142a \u017c\u0105danie do serwera, a serwer odpowiada."),(0,o.kt)("p",null,"Oto kluczowe cechy i informacje dotycz\u0105ce WebSocket:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dwukierunkowa komunikacja"),": W przeciwie\u0144stwie do protoko\u0142u HTTP, kt\xf3ry jest jednokierunkowy (\u017c\u0105danie i odpowied\u017a), WebSocket umo\u017cliwia dwukierunkow\u0105 komunikacj\u0119. Zar\xf3wno klient, jak i serwer mog\u0105 inicjowa\u0107 wysy\u0142anie wiadomo\u015bci w dowolnym momencie, bez konieczno\u015bci czekania na \u017c\u0105dania.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Niski narzut komunikacyjny"),": Protok\xf3\u0142 WebSocket jest bardziej efektywny ni\u017c tradycyjne po\u0142\u0105czenia HTTP, poniewa\u017c nie wymaga ponownego nawi\u0105zywania po\u0142\u0105czenia za ka\u017cdym razem, gdy klient chce wys\u0142a\u0107 lub otrzyma\u0107 dane. Dzia\u0142a to na zasadzie utrzymania trwa\u0142ego po\u0142\u0105czenia (persistent connection).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Szybko\u015b\u0107 i czas rzeczywisty"),": WebSocket jest szczeg\xf3lnie przydatny w aplikacjach wymagaj\u0105cych szybkiej komunikacji w czasie rzeczywistym, takich jak czat online, gry wieloosobowe, transmisje na \u017cywo czy aplikacje do wsp\xf3\u0142pracy.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bezpiecze\u0144stwo"),": Aby zapewni\u0107 bezpieczn\u0105 komunikacj\u0119, mo\u017cna stosowa\u0107 protok\xf3\u0142 WebSocket w po\u0142\u0105czeniu z szyfrowaniem TLS/SSL, co zabezpiecza przesy\u0142ane dane.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Standardy i biblioteki"),": WebSocket jest standardem opisanym w dokumencie RFC 6455. Istnieje wiele bibliotek i framework\xf3w dost\u0119pnych w r\xf3\u017cnych j\u0119zykach programowania, kt\xf3re u\u0142atwiaj\u0105 implementacj\u0119 komunikacji WebSocket w aplikacjach.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Obs\u0142uga b\u0142\u0119d\xf3w"),": Protok\xf3\u0142 WebSocket zawiera mechanizmy obs\u0142ugi b\u0142\u0119d\xf3w, takie jak obs\u0142uga roz\u0142\u0105czenia i ponownego nawi\u0105zywania po\u0142\u0105czenia w przypadku awarii.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wsparcie przegl\u0105darek"),": Wsp\xf3\u0142czesne przegl\u0105darki internetowe (takie jak Chrome, Firefox, Safari i Edge) obs\u0142uguj\u0105 protok\xf3\u0142 WebSocket, co oznacza, \u017ce \u200b\u200bmo\u017cna go wykorzystywa\u0107 w aplikacjach internetowych dzia\u0142aj\u0105cych w przegl\u0105darkach."))),(0,o.kt)("p",null,"Protok\xf3\u0142 WebSocket jest cz\u0119sto stosowany w po\u0142\u0105czeniu z technologi\u0105 WebSockets API, kt\xf3ra umo\u017cliwia tworzenie interaktywnych aplikacji internetowych. Jest to szczeg\xf3lnie u\u017cyteczne w przypadku aplikacji wymagaj\u0105cych natychmiastowej synchronizacji danych mi\u0119dzy klientem a serwerem. WebSocket znacz\u0105co poprawia do\u015bwiadczenie u\u017cytkownika w takich aplikacjach, poniewa\u017c pozwala na b\u0142yskawiczne przesy\u0142anie danych i komunikacj\u0119 w czasie rzeczywistym."),(0,o.kt)("h2",{id:"linki"},"Linki"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pl.wikipedia.org/wiki/WebSocket"},"WebSocket \u2013 Wikipedia, wolna encyklopedia"))))}w.isMDXComponent=!0}}]);