"use strict";(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[87068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46525:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),i=r(86010),a=r(52802),o=r(39960),c=r(13919),l=r(95999);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};function s(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer)},r)}function p(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u.cardTitle),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:o},o))}function d(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"":"\ud83d\udd17";return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},83820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905)),a=r(46525);const o={},c="Praktyczne szkolenie projektowania UX/UI",l={unversionedId:"ux-ui/praktyczne-szkolenie-projektowania-ux-ui/index",id:"ux-ui/praktyczne-szkolenie-projektowania-ux-ui/index",title:"Praktyczne szkolenie projektowania UX/UI",description:"",source:"@site/docs/02-ux-ui/02-praktyczne-szkolenie-projektowania-ux-ui/index.mdx",sourceDirName:"02-ux-ui/02-praktyczne-szkolenie-projektowania-ux-ui",slug:"/ux-ui/praktyczne-szkolenie-projektowania-ux-ui/",permalink:"/docs/ux-ui/praktyczne-szkolenie-projektowania-ux-ui/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.pl/blob/main/docs/02-ux-ui/02-praktyczne-szkolenie-projektowania-ux-ui/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"uxuiSidebar",previous:{title:"\u25b6\ufe0f 5.2.6. Detale",permalink:"/docs/ux-ui/projektowanie-interfejsu-i-doswiadczen-uzytkownikow/\u25b6\ufe0f-5-2-6-detale"},next:{title:"\u25b6\ufe0f Nagranie z webinaru (UX)",permalink:"/docs/ux-ui/praktyczne-szkolenie-projektowania-ux-ui/\u25b6\ufe0f-01-nagranie-z-webinaru-ux"}},u={},s=[],p={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"praktyczne-szkolenie-projektowania-uxui"},"Praktyczne szkolenie projektowania UX/UI"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);