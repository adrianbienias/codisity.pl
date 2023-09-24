"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[58039],{3905:(a,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var t=n(67294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function c(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},o=Object.keys(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var p=t.createContext({}),y=function(a){var e=t.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},l=function(a){var e=y(a.components);return t.createElement(p.Provider,{value:e},a.children)},k="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},w=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,o=a.originalType,p=a.parentName,l=c(a,["components","mdxType","originalType","parentName"]),k=y(n),w=i,d=k["".concat(p,".").concat(w)]||k[w]||m[w]||o;return n?t.createElement(d,r(r({ref:e},l),{},{components:n})):t.createElement(d,r({ref:e},l))}));function d(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var o=n.length,r=new Array(o);r[0]=w;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=a,c[k]="string"==typeof a?a:i,r[1]=c;for(var y=2;y<o;y++)r[y]=n[y];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}w.displayName="MDXCreateElement"},93829:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>y});var t=n(87462),i=(n(67294),n(3905));const o={tags:["ORM"]},r="Mapowanie obiektowo-relacyjne",c={unversionedId:"backend/bazy-danych/mapowanie-obiektowo-relacyjne",id:"backend/bazy-danych/mapowanie-obiektowo-relacyjne",title:"Mapowanie obiektowo-relacyjne",description:"Mapowanie obiektowo-relacyjne (Object-Relational Mapping, ORM) to technika u\u017cywana w programowaniu komputerowym, kt\xf3ra s\u0142u\u017cy do mapowania obiekt\xf3w w j\u0119zykach programowania na struktury danych relacyjnych w bazach danych. G\u0142\xf3wnym celem ORM jest u\u0142atwienie i usprawnienie interakcji mi\u0119dzy kodem aplikacji, kt\xf3ry operuje na obiektach, a baz\u0105 danych, kt\xf3ra przechowuje dane w formie tabel relacyjnych. Oto kilka kluczowych informacji na ten temat:",source:"@site/docs/040-backend/040-bazy-danych/010-mapowanie-obiektowo-relacyjne.mdx",sourceDirName:"040-backend/040-bazy-danych",slug:"/backend/bazy-danych/mapowanie-obiektowo-relacyjne",permalink:"/backend/bazy-danych/mapowanie-obiektowo-relacyjne",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.pl/blob/main/docs/040-backend/040-bazy-danych/010-mapowanie-obiektowo-relacyjne.mdx",tags:[{label:"ORM",permalink:"/tags/orm"}],version:"current",sidebarPosition:10,frontMatter:{tags:["ORM"]},sidebar:"backendSidebar",previous:{title:"\u25b6\ufe0f Bazy danych",permalink:"/backend/bazy-danych/"},next:{title:"\u25b6\ufe0f Systemy zarz\u0105dzania tre\u015bci\u0105",permalink:"/backend/systemy-zarzadzania-trescia/"}},p={},y=[{value:"Linki",id:"linki",level:2}],l={toc:y},k="wrapper";function m(a){let{components:e,...n}=a;return(0,i.kt)(k,(0,t.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mapowanie-obiektowo-relacyjne"},"Mapowanie obiektowo-relacyjne"),(0,i.kt)("p",null,"Mapowanie obiektowo-relacyjne (Object-Relational Mapping, ORM) to technika u\u017cywana w programowaniu komputerowym, kt\xf3ra s\u0142u\u017cy do mapowania obiekt\xf3w w j\u0119zykach programowania na struktury danych relacyjnych w bazach danych. G\u0142\xf3wnym celem ORM jest u\u0142atwienie i usprawnienie interakcji mi\u0119dzy kodem aplikacji, kt\xf3ry operuje na obiektach, a baz\u0105 danych, kt\xf3ra przechowuje dane w formie tabel relacyjnych. Oto kilka kluczowych informacji na ten temat:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Obiekty a tabele"),": W aplikacjach opartych na obiektach, dane s\u0105 zazwyczaj reprezentowane za pomoc\u0105 obiekt\xf3w i klas, kt\xf3re maj\u0105 metody i w\u0142a\u015bciwo\u015bci. Natomiast w bazach danych dane s\u0105 przechowywane w postaci tabel relacyjnych, gdzie ka\u017cda tabela odpowiada pewnej encji.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mapowanie"),": ORM dostarcza mechanizm\xf3w, kt\xf3re pozwalaj\u0105 na mapowanie obiekt\xf3w aplikacji na odpowiednie tabelki w bazie danych i odwrotnie. To oznacza, \u017ce \u200b\u200bkiedy programista pracuje z obiektami w kodzie aplikacji, nie musi martwi\u0107 si\u0119 o konwersj\u0119 i zarz\u0105dzanie danymi w bazie danych.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"J\u0119zyk zapyta\u0144"),": ORM zazwyczaj umo\u017cliwia programistom korzystanie z j\u0119zyka zapyta\u0144 w j\u0119zyku programowania, a nie bezpo\u015brednio pisania zapyta\u0144 SQL. Oznacza to, \u017ce zapytania do bazy danych mo\u017cna formu\u0142owa\u0107 w spos\xf3b bardziej naturalny dla danego j\u0119zyka programowania.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Generowanie SQL"),": ORM generuje odpowiednie zapytania SQL na podstawie operacji wykonywanych na obiektach. Dzi\u0119ki temu programista nie musi r\u0119cznie pisa\u0107 z\u0142o\u017conych zapyta\u0144 SQL.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Zarz\u0105dzanie relacjami"),": ORM obs\u0142uguje tak\u017ce relacje mi\u0119dzy obiektami. Mo\u017cna definiowa\u0107, \u017ce pewne obiekty s\u0105 ze sob\u0105 powi\u0105zane, na przyk\u0142ad \u017ce u\u017cytkownik ma wiele zam\xf3wie\u0144. ORM automatycznie zarz\u0105dza tymi relacjami w bazie danych.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Kontrola transakcji"),": ORM pozwala na zarz\u0105dzanie transakcjami w bazie danych na poziomie obiekt\xf3w. Mo\u017cna rozpocz\u0105\u0107 transakcj\u0119, wykonywa\u0107 operacje na obiektach, a nast\u0119pnie zatwierdzi\u0107 lub wycofa\u0107 transakcj\u0119.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Popularne ORM"),": Istnieje wiele popularnych bibliotek ORM dost\u0119pnych dla r\xf3\u017cnych j\u0119zyk\xf3w programowania. Przyk\u0142ady to Hibernate dla j\u0119zyka Java, Entity Framework dla j\u0119zyka C#, SQLAlchemy dla Pythona, Sequelize dla Node.js i wiele innych.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Zalety ORM"),": Korzystanie z ORM mo\u017ce znacz\u0105co przyspieszy\u0107 proces tworzenia aplikacji, u\u0142atwiaj\u0105c mapowanie danych i zarz\u0105dzanie nimi. Pomaga to r\xf3wnie\u017c w unikni\u0119ciu wielu b\u0142\u0119d\xf3w zwi\u0105zanych z dost\u0119pem do bazy danych.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Wady ORM"),": ORM nie zawsze jest najlepszym rozwi\u0105zaniem w ka\u017cdym przypadku. W z\u0142o\u017conych bazach danych i zaawansowanych operacjach SQL mo\u017ce by\u0107 konieczne napisanie zapyta\u0144 r\u0119cznie. Ponadto, niekt\xf3re operacje przy u\u017cyciu ORM mog\u0105 by\u0107 mniej wydajne ni\u017c r\u0119cznie napisane zapytania SQL."))),(0,i.kt)("p",null,"Mapowanie obiektowo-relacyjne jest bardzo przydatne w projektach, gdzie kod aplikacji jest oparty na obiektach, a dane s\u0105 przechowywane w bazach danych. U\u0142atwia to prac\u0119 programistom i pozwala na bardziej abstrakcyjne podej\u015bcie do zarz\u0105dzania danymi, niezale\u017cne od konkretnego systemu zarz\u0105dzania baz\u0105 danych."),(0,i.kt)("h2",{id:"linki"},"Linki"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pl.wikipedia.org/wiki/Mapowanie_obiektowo-relacyjne"},"Mapowanie obiektowo-relacyjne \u2013 Wikipedia, wolna encyklopedia"))))}m.isMDXComponent=!0}}]);