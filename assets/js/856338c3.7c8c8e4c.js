"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[31199],{3905:(e,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>s});var r=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,i=function(e,a){if(null==e)return{};var n,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),w=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},k=function(e){var a=w(e.components);return r.createElement(p.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var n=e.components,i=e.mdxType,t=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),c=w(n),y=i,s=c["".concat(p,".").concat(y)]||c[y]||u[y]||t;return n?r.createElement(s,o(o({ref:a},k),{},{components:n})):r.createElement(s,o({ref:a},k))}));function s(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=n.length,o=new Array(t);o[0]=y;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var w=2;w<t;w++)o[w]=n[w];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},93125:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>w});var r=n(87462),i=(n(67294),n(3905));const t={tags:["RegEx"]},o="Wyra\u017cenia regularne",l={unversionedId:"podstawy/programowanie/wyrazenia-regularne",id:"podstawy/programowanie/wyrazenia-regularne",title:"Wyra\u017cenia regularne",description:"Wyra\u017cenia regularne, znane tak\u017ce jako regex lub regexp, to pot\u0119\u017cne narz\u0119dzie u\u017cywane w informatyce do wyszukiwania i manipulacji tekstem na podstawie okre\u015blonych wzorc\xf3w. Wyra\u017cenia regularne pozwalaj\u0105 na przeszukiwanie tekst\xf3w w celu znalezienia okre\u015blonych sekwencji znak\xf3w, dopasowania wzorc\xf3w i wykonania r\xf3\u017cnych operacji na tek\u015bcie, takich jak zast\u0119powanie, wydobywanie danych czy walidacja.",source:"@site/docs/010-podstawy/040-programowanie/065-wyrazenia-regularne.mdx",sourceDirName:"010-podstawy/040-programowanie",slug:"/podstawy/programowanie/wyrazenia-regularne",permalink:"/podstawy/programowanie/wyrazenia-regularne",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.pl/blob/main/docs/010-podstawy/040-programowanie/065-wyrazenia-regularne.mdx",tags:[{label:"RegEx",permalink:"/tags/reg-ex"}],version:"current",sidebarPosition:65,frontMatter:{tags:["RegEx"]},sidebar:"basicsSidebar",previous:{title:"\u25b6\ufe0f Wzorce projektowe",permalink:"/podstawy/programowanie/wzorce-projektowe"},next:{title:"\u25b6\ufe0f Frameworki i biblioteki",permalink:"/podstawy/programowanie/frameworki-i-biblioteki"}},p={},w=[{value:"Linki",id:"linki",level:2}],k={toc:w},c="wrapper";function u(e){let{components:a,...n}=e;return(0,i.kt)(c,(0,r.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wyra\u017cenia-regularne"},"Wyra\u017cenia regularne"),(0,i.kt)("p",null,"Wyra\u017cenia regularne, znane tak\u017ce jako regex lub regexp, to pot\u0119\u017cne narz\u0119dzie u\u017cywane w informatyce do wyszukiwania i manipulacji tekstem na podstawie okre\u015blonych wzorc\xf3w. Wyra\u017cenia regularne pozwalaj\u0105 na przeszukiwanie tekst\xf3w w celu znalezienia okre\u015blonych sekwencji znak\xf3w, dopasowania wzorc\xf3w i wykonania r\xf3\u017cnych operacji na tek\u015bcie, takich jak zast\u0119powanie, wydobywanie danych czy walidacja."),(0,i.kt)("p",null,"Oto kilka podstawowych koncepcji i sk\u0142adni zwi\u0105zanych z wyra\u017ceniami regularnymi:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Znak litera\u0142u"),": Wi\u0119kszo\u015b\u0107 znak\xf3w w wyra\u017ceniach regularnych jest traktowana jako znaki litera\u0142owe, co oznacza, \u017ce dopasowuj\u0105 si\u0119 do dok\u0142adnie takich samych znak\xf3w w tek\u015bcie. Na przyk\u0142ad, wyra\u017cenie regularne ",(0,i.kt)("inlineCode",{parentName:"p"},"abc"),' dopasuje sekwencj\u0119 "abc" w tek\u015bcie.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Metaznaki"),": Wyra\u017cenia regularne zawieraj\u0105 metaznaki, kt\xf3re maj\u0105 specjalne znaczenie i s\u0142u\u017c\u0105 do dopasowania okre\u015blonych wzorc\xf3w. Przyk\u0142adowe metaznaki to:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"."),": Dopasowuje dowolny pojedynczy znak (z wyj\u0105tkiem nowej linii)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*"),": Dopasowuje zero lub wi\u0119cej wyst\u0105pie\u0144 poprzedniego znaku lub grupy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+"),": Dopasowuje jeden lub wi\u0119cej wyst\u0105pie\u0144 poprzedniego znaku lub grupy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"?"),": Oznacza, \u017ce poprzedni znak lub grupa jest opcjonalne (zero lub jedno wyst\u0105pienie)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"|"),": Pozwala na dopasowanie jednego z wielu r\xf3\u017cnych znak\xf3w lub wzorc\xf3w. Na przyk\u0142ad, ",(0,i.kt)("inlineCode",{parentName:"li"},"a|b"),' dopasuje "a" lub "b".'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Klasy znak\xf3w"),": Klasy znak\xf3w pozwalaj\u0105 na dopasowanie grupy znak\xf3w o okre\u015blonych cechach. Na przyk\u0142ad:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[0-9]"),": Dopasowuje dowoln\u0105 cyfr\u0119 od 0 do 9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[a-zA-Z]"),": Dopasowuje dowoln\u0105 liter\u0119 alfabetu (zar\xf3wno ma\u0142\u0105, jak i wielk\u0105)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[^0-9]"),": Dopasowuje dowolny znak, kt\xf3ry nie jest cyfr\u0105."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Grupy i zast\u0105pienie"),": Mo\u017cesz tworzy\u0107 grupy znak\xf3w, kt\xf3re pozwalaj\u0105 na okre\u015blenie logicznych fragment\xf3w wyra\u017cenia regularnego. Grupy s\u0105 przydatne, gdy chcesz wykona\u0107 operacje zast\u0105pienia lub wydoby\u0107 konkretne cz\u0119\u015bci tekstu. Na przyk\u0142ad:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(ab)+"),': Dopasuje sekwencj\u0119 "ab", "abab", "ababab", itd.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(\\d{3})-(\\d{2})-(\\d{4})"),': Dopasuje dat\u0119 w formacie "123-45-6789" i wydobywa trzy grupy: rok, miesi\u0105c i dzie\u0144.'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Anchors"),": Anchors pozwalaj\u0105 na okre\u015blenie, gdzie w tek\u015bcie ma by\u0107 dokonywane dopasowanie. Na przyk\u0142ad:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"^abc"),': Dopasuje "abc" tylko na pocz\u0105tku linii.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"abc$"),': Dopasuje "abc" tylko na ko\u0144cu linii.'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Modifikatory"),": Modifikatory wp\u0142ywaj\u0105 na spos\xf3b dopasowywania i s\u0105 stosowane do ca\u0142o\u015bci lub do poszczeg\xf3lnych element\xf3w wyra\u017cenia regularnego. Przyk\u0142ady modifikator\xf3w to ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," (ignorowanie wielko\u015bci liter), ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," (globalne dopasowywanie) i ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," (dopasowywanie wielu linii)."))),(0,i.kt)("p",null,"Wyra\u017cenia regularne s\u0105 bardzo pot\u0119\u017cnym narz\u0119dziem do analizy i manipulacji tekstu, ale ich sk\u0142adnia mo\u017ce by\u0107 trudna do opanowania. Warto po\u015bwi\u0119ci\u0107 czas na nauk\u0119 wyra\u017ce\u0144 regularnych, poniewa\u017c s\u0105 one u\u017cywane w wielu dziedzinach programowania, takich jak przetwarzanie tekstu, walidacja danych, parsowanie danych i wiele innych."),(0,i.kt)("h2",{id:"linki"},"Linki"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pl.wikipedia.org/wiki/Wyra%C5%BCenie_regularne"},"Wyra\u017cenie regularne \u2013 Wikipedia, wolna encyklopedia"))))}u.isMDXComponent=!0}}]);