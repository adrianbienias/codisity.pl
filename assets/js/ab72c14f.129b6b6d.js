"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[30516],{3905:(e,n,t)=>{t.d(n,{Zo:()=>y,kt:()=>w});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,w=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return t?r.createElement(w,i(i({ref:n},y),{},{components:t})):r.createElement(w,i({ref:n},y))}));function w(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19634:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,p={type:"mdx",permalink:"/100-bugow-js/fbd04755-cc69-4e14-ba17-5172fba6d6bf/solutionDescription",source:"@site/src/pages/100-bugow-js/fbd04755-cc69-4e14-ba17-5172fba6d6bf/solutionDescription.md",description:"Operator logiczny LUB || por\xf3wnuje warto\u015bci logiczne. Gdy operandy nie s\u0105 warto\u015bciami logicznymi (true/false), sprowadza je do warto\u015bci logicznej. Nast\u0119pnie zwraca pierwszy z nich, je\u015bli jest on prawdziwy, lub drugi, w ka\u017cdym innym przypadku.",frontMatter:{}},c=[],l={toc:c},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(y,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Operator logiczny LUB ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," por\xf3wnuje warto\u015bci logiczne. Gdy operandy nie s\u0105 warto\u015bciami logicznymi (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"), sprowadza je do warto\u015bci logicznej. Nast\u0119pnie zwraca pierwszy z nich, je\u015bli jest on prawdziwy, lub drugi, w ka\u017cdym innym przypadku."),(0,a.kt)("p",null,"Konwersja do warto\u015bci logicznej odbywa si\u0119 za pomoc\u0105 dzia\u0142ania algorytmu, kt\xf3ry odpowiada za konwersj\u0119 w funkcji ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean()")," lub podczas u\u017cycia podw\xf3jnego wykrzyknika ",(0,a.kt)("inlineCode",{parentName:"p"},"!!"),"."),(0,a.kt)("p",null,"Je\u015bli pierwszy operand po konwersji do warto\u015bci logicznej, jest warto\u015bci\u0105 prawdziw\u0105 (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"), to jest on zwracany w pierwotnej postaci."),(0,a.kt)("p",null,"Przyk\u0142adowo, ",(0,a.kt)("inlineCode",{parentName:"p"},'"to nie fa\u0142sz" || true')," zwr\xf3ci ",(0,a.kt)("inlineCode",{parentName:"p"},'"to nie fa\u0142sz"')),(0,a.kt)("p",null,"Warto pami\u0119ta\u0107, \u017ce wyst\u0119puje tutaj efekt zwarcia tzn. gdy pierwszy operand jest prawdziwy, drugi operand jest ju\u017c ca\u0142kowicie pomijany. Gdyby zamiast ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," pojawi\u0142o si\u0119 np. wywo\u0142anie funkcji, to funkcja nie zosta\u0142aby w \u017caden spos\xf3b wywo\u0142ana."),(0,a.kt)("p",null,"Je\u015bli natomiast pierwszy operand ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," jest warto\u015bci\u0105 fa\u0142szyw\u0105, to automatycznie zwracany zostaje operand drugi. Nie ma znaczenia, czy jest on prawdziwy czy fa\u0142szywy."),(0,a.kt)("p",null,"Mo\u017cna w ten spos\xf3b stworzy\u0107 np. \u0142a\u0144cuch wielu operator\xf3w ",(0,a.kt)("inlineCode",{parentName:"p"},"||"),", kt\xf3ry zwr\xf3ci operand w momencie gdy napotka na taki, kt\xf3ry jest prawdziwy, jednocze\u015bnie zatrzymuj\u0105c wykonywanie dalszej cz\u0119\u015bci kodu z \u0142a\u0144cucha."))}u.isMDXComponent=!0}}]);