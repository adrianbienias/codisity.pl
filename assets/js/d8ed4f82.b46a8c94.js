"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[45352],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},k="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=c(t),d=a,y=k["".concat(l,".").concat(d)]||k[d]||w[d]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[k]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35311:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,p={type:"mdx",permalink:"/100-bugow-js/c58e01be-7092-47d4-ba65-cffd25192ba4/solutionDescription",source:"@site/src/pages/100-bugow-js/c58e01be-7092-47d4-ba65-cffd25192ba4/solutionDescription.md",description:"Wszystkie przyk\u0142ady opr\xf3cz 3 > 2 > 1 zaloguj\u0105 warto\u015b\u0107 true.",frontMatter:{}},l=[],c={toc:l},u="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wszystkie przyk\u0142ady opr\xf3cz ",(0,a.kt)("inlineCode",{parentName:"p"},"3 > 2 > 1")," zaloguj\u0105 warto\u015b\u0107 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Dlaczego ",(0,a.kt)("inlineCode",{parentName:"p"},"3 > 2 > 1")," zaloguje ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"? Przeanalizujmy to krok po kroku."),(0,a.kt)("p",null,"Operatory ",(0,a.kt)("inlineCode",{parentName:"p"},">")," (",(0,a.kt)("em",{parentName:"p"},"wi\u0119cej ni\u017c"),") oraz ",(0,a.kt)("inlineCode",{parentName:"p"},"<")," (",(0,a.kt)("em",{parentName:"p"},"mniej ni\u017c"),") por\xf3wnuj\u0105 ze sob\u0105 dwa operandy, zwracaj\u0105c warto\u015b\u0107 logiczn\u0105 z takiego por\xf3wnania."),(0,a.kt)("p",null,"Gdy u\u017cywamy ci\u0105gu kilku por\xf3wna\u0144, sytuacja wygl\u0105da analogicznie, jak w przypadku u\u017cywania ci\u0105gu innych operator\xf3w np. dodawania, mno\u017cenia, por\xf3wnania, koniunkcji itp."),(0,a.kt)("p",null,"Kolejno\u015b\u0107 oraz kierunek wykonywania operacji wykonywanych przez operatory definiuje tabela pierwsze\u0144stwa operator\xf3w (",(0,a.kt)("em",{parentName:"p"},"operator precedence"),")."),(0,a.kt)("p",null,"Operatory ",(0,a.kt)("inlineCode",{parentName:"p"},">")," i ",(0,a.kt)("inlineCode",{parentName:"p"},"<")," wykonuj\u0105 por\xf3wnania po kolei, od lewej do prawej."),(0,a.kt)("p",null,"Dla ",(0,a.kt)("inlineCode",{parentName:"p"},"3 > 2 > 1")," w pierwszej kolejno\u015bci wykonane zostanie por\xf3wnanie ",(0,a.kt)("inlineCode",{parentName:"p"},"3 > 2")," i zwr\xf3ci ono warto\u015b\u0107 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"Ci\u0105g por\xf3wna\u0144 zostanie zredukowany i b\u0119dzie w kolejnym kroku por\xf3wnywa\u0142 ",(0,a.kt)("inlineCode",{parentName:"p"},"true > 1"),"."),(0,a.kt)("p",null,"W przypadku gdy por\xf3wnywane warto\u015bci nie s\u0105 warto\u015bciami liczbowymi, zostaj\u0105 one sprowadzone do warto\u015bci liczbowej za pomoc\u0105 algorytmu funkcji ",(0,a.kt)("inlineCode",{parentName:"p"},"Number()"),"."),(0,a.kt)("p",null,"Warto\u015b\u0107 ",(0,a.kt)("inlineCode",{parentName:"p"},"Number(true)")," zwraca warto\u015b\u0107 ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("p",null,"W j\u0119zykach programowania, warto\u015bci logiczne ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"false")," s\u0105 z regu\u0142y reprezentowane przez warto\u015bci liczbowe ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"Finalnie ",(0,a.kt)("inlineCode",{parentName:"p"},"true > 1")," zostanie wi\u0119c skonwertowane do ",(0,a.kt)("inlineCode",{parentName:"p"},"1 > 1"),". Wynikiem takiego por\xf3wnania b\u0119dzie rzecz jasna warto\u015b\u0107 ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"W pozosta\u0142ych przyk\u0142adach por\xf3wna\u0144 zachodzi analogiczny proces."),(0,a.kt)("p",null,"Z pocz\u0105tkowych por\xf3wna\u0144 zwracana jest warto\u015b\u0107 logiczna. Nast\u0119pnie kolejne por\xf3wnania konwertuj\u0105 warto\u015bci logiczne na warto\u015bci liczbowe i dokonuj\u0105 kolejnych por\xf3wna\u0144."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true < 3")," to prawda, ",(0,a.kt)("inlineCode",{parentName:"p"},"true < 2")," to prawda i ",(0,a.kt)("inlineCode",{parentName:"p"},"true > 0")," to te\u017c prawda."))}k.isMDXComponent=!0}}]);