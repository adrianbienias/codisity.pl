"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[42781],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>w});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=c(t),m=a,w=y["".concat(l,".").concat(m)]||y[m]||d[m]||o;return t?r.createElement(w,i(i({ref:n},u),{},{components:t})):r.createElement(w,i({ref:n},u))}));function w(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[y]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18868:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,p={type:"mdx",permalink:"/100-bugow-js/bb05d968-36d2-4e0d-b17f-d60291b46bf3/solutionDescription",source:"@site/src/pages/100-bugow-js/bb05d968-36d2-4e0d-b17f-d60291b46bf3/solutionDescription.md",description:"W przyk\u0142adzie z b\u0142\u0119dem, 7 linia wyrzuci do konsoli SyntaxError.",frontMatter:{}},l=[],c={toc:l},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"W przyk\u0142adzie z b\u0142\u0119dem, 7 linia wyrzuci do konsoli ",(0,a.kt)("inlineCode",{parentName:"p"},"SyntaxError"),"."),(0,a.kt)("p",null,"Tre\u015b\u0107 b\u0142\u0119du mo\u017ce si\u0119 r\xf3\u017cni\u0107 w zale\u017cno\u015bci od kontekstu, w kt\xf3rym kod zostanie wywo\u0142any."),(0,a.kt)("p",null,"W przypadku przekazania kodu jako argument do ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()"),", dostaniemy informacj\u0119 o brakuj\u0105cym domkni\u0119ciu nawiasu na li\u015bcie argument\xf3w."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SyntaxError")," sprowadza si\u0119 jednak do niedozwolonej sk\u0142adni w j\u0119zyku JavaScript. Po prostu nie mo\u017cemy u\u017cy\u0107 danej konstrukcji."),(0,a.kt)("p",null,"I tak\u0105 niedozwolon\u0105 konstrukcj\u0105 jest u\u017cycie operatora ",(0,a.kt)("inlineCode",{parentName:"p"},"??")," na r\xf3wni z operatorami ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," lub ",(0,a.kt)("inlineCode",{parentName:"p"},"&&"),"."),(0,a.kt)("p",null,"Po prostu nie mo\u017cemy tego robi\u0107, musimy u\u017cy\u0107 nawias\xf3w dla wyra\u017anego zgrupowania wyra\u017ce\u0144, kt\xf3re chcemy aby zosta\u0142y wykonane w pierwszej kolejno\u015bci."),(0,a.kt)("p",null,"Dokumentacja JavaScript od Mozilli (",(0,a.kt)("em",{parentName:"p"},"MDN"),"), t\u0142umaczy, \u017ce jednoczesne u\u017cycie ",(0,a.kt)("inlineCode",{parentName:"p"},"??")," w po\u0142\u0105czeniu z ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," lub ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," mog\u0142oby wprowadza\u0107 w kodzie b\u0142\u0119dy wynikaj\u0105ce z wyst\u0105pienia zwarcia (",(0,a.kt)("em",{parentName:"p"},"short circuiting"),")."),(0,a.kt)("p",null,"Warto zauwa\u017cy\u0107, \u017ce tabela priorytet\xf3w wykonywania operator\xf3w plasuje ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," wy\u017cej ni\u017c ",(0,a.kt)("inlineCode",{parentName:"p"},"||"),", ale ze wzgl\u0119du na efekt zwarcia, kt\xf3ry je\u015bli wyst\u0105pi, totalnie ignoruje drugi operand, co r\xf3wnie\u017c mo\u017ce prowadzi\u0107 do b\u0142\u0119d\xf3w w kodzie zwi\u0105zanych z oczekiwaniem wywo\u0142ania funkcji w takim wyra\u017ceniu."),(0,a.kt)("p",null,"Przyk\u0142adowo, przy wyra\u017ceniu ",(0,a.kt)("inlineCode",{parentName:"p"},'true || alert("bar") && false')," zadzia\u0142a zwarcie na warto\u015bci ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," i ca\u0142y dalszy kod nie zostanie wykonany, mimo \u017ce priorytet wykonywania operator\xf3w m\xf3g\u0142by sugerowa\u0107, \u017ce funkcja ",(0,a.kt)("inlineCode",{parentName:"p"},'alert("bar")')," powinna zosta\u0107 wykonana w celu ewaluacji warto\u015bci operatora ",(0,a.kt)("inlineCode",{parentName:"p"},"&&"),"."),(0,a.kt)("p",null,"W tym kontek\u015bcie, wyrzucanie b\u0142\u0119du sk\u0142adniowego w momencie r\xf3wnoleg\u0142ego u\u017cycia ",(0,a.kt)("inlineCode",{parentName:"p"},"??")," z ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," lub ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," wydaje si\u0119 by\u0107 naci\u0105gane."))}y.isMDXComponent=!0}}]);