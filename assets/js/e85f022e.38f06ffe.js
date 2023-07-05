"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[93636],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(t),s=a,y=d["".concat(c,".").concat(s)]||d[s]||u[s]||i;return t?r.createElement(y,o(o({ref:n},m),{},{components:t})):r.createElement(y,o({ref:n},m))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4891:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={},o=void 0,p={type:"mdx",permalink:"/100-bugow-js/a8adcbd8-2151-494e-b538-44c1503f3beb/solutionDescription",source:"@site/src/pages/100-bugow-js/a8adcbd8-2151-494e-b538-44c1503f3beb/solutionDescription.md",description:"Object.is() mimo, \u017ce swoj\u0105 nazw\u0105 sugeruje por\xf3wnywanie obiekt\xf3w, w rzeczywisto\u015bci por\xf3wnuje dwie warto\u015bci przekazane jako argumenty do metody is().",frontMatter:{}},c=[],l={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Object.is()")," mimo, \u017ce swoj\u0105 nazw\u0105 sugeruje por\xf3wnywanie obiekt\xf3w, w rzeczywisto\u015bci por\xf3wnuje dwie warto\u015bci przekazane jako argumenty do metody ",(0,a.kt)("inlineCode",{parentName:"p"},"is()"),"."),(0,a.kt)("p",null,"Metoda dzia\u0142a bardzo podobnie do por\xf3wnania, kt\xf3re wykonuje operator ",(0,a.kt)("inlineCode",{parentName:"p"},"==="),", ale z ma\u0142ymi wyj\u0105tkami."),(0,a.kt)("p",null,"Por\xf3wnanie dw\xf3ch warto\u015bci ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN")," za pomoc\u0105 ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.is()")," da prawd\u0119."),(0,a.kt)("p",null,"Tego samego nie mo\u017cemy si\u0119 jednak spodziewa\u0107 po dzia\u0142aniu operatora ",(0,a.kt)("inlineCode",{parentName:"p"},"==="),", kt\xf3ry je\u015bli napotka operand ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN"),", to zawsze zwraca fa\u0142sz."),(0,a.kt)("p",null,"Nie ma tutaj znaczenia czy ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN")," jest przekazany bezpo\u015brednio jako warto\u015b\u0107, czy jest wynikiem dzia\u0142ania, np. dzielenia ",(0,a.kt)("inlineCode",{parentName:"p"},"0 / 0"),"."),(0,a.kt)("p",null,"Drugim wyj\u0105tkiem i nie\u015bcis\u0142o\u015bci\u0105 pomi\u0119dzy ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.is()"),", a operatorem ",(0,a.kt)("inlineCode",{parentName:"p"},"===")," jest por\xf3wnanie zera ujemnego z zerem dodatnim."),(0,a.kt)("p",null,"W informatyce zapis liczb w pami\u0119ci w postaci binarnej wi\u0105\u017ce si\u0119 z u\u017cyciem dodatkowego bita (",(0,a.kt)("em",{parentName:"p"},"sign"),"), kt\xf3ry okre\u015bla czy liczba jest dodatnia czy ujemna."),(0,a.kt)("p",null,"Bit ten mo\u017ce by\u0107 u\u017cyty r\xf3wnie\u017c dla liczby ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", tym samym rozgraniczaj\u0105c j\u0105 na dwie warto\u015bci: ",(0,a.kt)("inlineCode",{parentName:"p"},"-0")," i ",(0,a.kt)("inlineCode",{parentName:"p"},"+0"),"."),(0,a.kt)("p",null,"Dla ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.is()")," zero ujemne b\u0119dzie r\xf3\u017cni\u0142o si\u0119 od zera dodatniego wi\u0119c por\xf3wnanie ich zwr\xf3ci ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"Dla operatora ",(0,a.kt)("inlineCode",{parentName:"p"},"===")," oba zera b\u0119d\u0105 takie same, zwracaj\u0105c w efekcie ich por\xf3wnania warto\u015b\u0107 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."))}d.isMDXComponent=!0}}]);