(self.webpackChunkcodisity_pl=self.webpackChunkcodisity_pl||[]).push([[12126],{51762:(e,o,n)=>{"use strict";n.d(o,{ZP:()=>s});var t=n(87462),a=(n(67294),n(3905));const i={toc:[{value:"\u2764\ufe0f Podobaj\u0105 Ci si\u0119 bugi JS?",id:"\ufe0f-podobaj\u0105-ci-si\u0119-bugi-js",level:2}]},r="wrapper";function s(e){let{components:o,...n}=e;return(0,a.kt)(r,(0,t.Z)({},i,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ufe0f-podobaj\u0105-ci-si\u0119-bugi-js"},"\u2764\ufe0f Podobaj\u0105 Ci si\u0119 bugi JS?"),(0,a.kt)("p",null,"Podziel si\u0119 linkiem ze znajomymi:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://codisity.pl/100-bugow-js"},"https://codisity.pl/100-bugow-js")))}s.isMDXComponent=!0},4984:(e,o,n)=>{"use strict";n.d(o,{ZP:()=>s});var t=n(87462),a=(n(67294),n(3905));const i={toc:[]},r="wrapper";function s(e){let{components:o,...n}=e;return(0,a.kt)(r,(0,t.Z)({},i,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("iframe",{src:`https://stackblitz.com/edit/${n.bugId}?devToolsHeight=100&file=index.js&hideExplorer=1&embed=1&ctl=1`,style:{width:"100%",aspectRatio:"16/9"}}),(0,a.kt)("a",{href:`https://stackblitz.com/edit/${n.bugId}?devToolsHeight=50&file=index.js`,target:"_blank",rel:"noreferrer"},"Otw\xf3rz edytor w nowym oknie"))}s.isMDXComponent=!0},54233:(e,o,n)=>{"use strict";n.r(o),n.d(o,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const i={},r=void 0,s={type:"mdx",permalink:"/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/bugCode",source:"@site/src/pages/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/bugCode.md",frontMatter:{}},p=[],d={toc:p},l="wrapper";function c(e){let{components:o,...n}=e;return(0,a.kt)(l,(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'// "use strict"\n\nconst greeting = {\n  message1: "hello",\n  message2: "everyone",\n}\n\nconst validator = {\n  set(obj, prop, value) {\n    if (prop === "message2") {\n      return value !== "no one"\n    }\n    obj[prop] = value\n\n    return true\n  },\n}\n\nconst proxy1 = new Proxy(greeting, {})\nproxy1.message2 = "everybody"\n\nconst proxy2 = new Proxy(greeting, validator)\nproxy2.message2 = "no one"\n\ngreeting.message1 = "welcome"\n\nconsole.log(greeting)\nconsole.log(proxy1)\nconsole.log(proxy2)\n')))}c.isMDXComponent=!0},61014:(e,o,n)=>{"use strict";n.r(o),n.d(o,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const i={},r=void 0,s={type:"mdx",permalink:"/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/bugDescription",source:"@site/src/pages/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/bugDescription.md",description:"Jakie warto\u015bci zostan\u0105 zalogowane do konsoli?",frontMatter:{}},p=[],d={toc:p},l="wrapper";function c(e){let{components:o,...n}=e;return(0,a.kt)(l,(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jakie warto\u015bci zostan\u0105 zalogowane do konsoli?"),(0,a.kt)("p",null,"Czy aktywowanie ",(0,a.kt)("inlineCode",{parentName:"p"},"use strict")," co\u015b by zmieni\u0142o?"))}c.isMDXComponent=!0},64832:(e,o,n)=>{"use strict";n.r(o),n.d(o,{contentTitle:()=>m,default:()=>z,frontMatter:()=>u,metadata:()=>k,toc:()=>w});var t=n(87462),a=(n(67294),n(3905)),i=(n(60614),n(54233)),r=n(61014),s=n(61448),p=n(28088),d=n(51500),l=n(4984),c=n(51762);const u={},m=void 0,k={type:"mdx",permalink:"/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/",source:"@site/src/pages/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/index.mdx",description:"Bug #",frontMatter:{}},y=new URL("file:///home/runner/work/codisity.pl/codisity.pl/src/pages/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/index.mdx").pathname.split("100-bugow-js/")[1].replace("/index.mdx",""),g=n(25221).keys()[0],b=(n(21662)(""+g),g.replace("./info-","").replace(".json","")),w=[{value:"\ud83e\udeb2 Znajd\u017a buga",id:"-znajd\u017a-buga",level:2},{value:"\ud83e\uddea Rozwi\u0105zanie",id:"-rozwi\u0105zanie",level:2},{value:"\ud83c\udfa2 Plac zabaw",id:"-plac-zabaw",level:2},{value:"\ud83d\udcd1 Linki",id:"-linki",level:2}],x={toc:w},f="wrapper";function z(e){let{components:o,...n}=e;return(0,a.kt)(f,(0,t.Z)({},x,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Bug #",b),(0,a.kt)("h2",{id:"-znajd\u017a-buga"},"\ud83e\udeb2 Znajd\u017a buga"),(0,a.kt)(i.default,{mdxType:"BugCode"}),(0,a.kt)(r.default,{mdxType:"BugDescription"}),(0,a.kt)("h2",{id:"-rozwi\u0105zanie"},"\ud83e\uddea Rozwi\u0105zanie"),(0,a.kt)(s.default,{mdxType:"SolutionCode"}),(0,a.kt)(p.default,{mdxType:"SolutionDescription"}),(0,a.kt)("h2",{id:"-plac-zabaw"},"\ud83c\udfa2 Plac zabaw"),(0,a.kt)(l.ZP,{bugId:y,mdxType:"StackBlitz"}),(0,a.kt)("h2",{id:"-linki"},"\ud83d\udcd1 Linki"),(0,a.kt)(d.default,{mdxType:"Links"}),(0,a.kt)(c.ZP,{mdxType:"Footer"}))}z.isMDXComponent=!0},51500:(e,o,n)=>{"use strict";n.r(o),n.d(o,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const i={},r=void 0,s={type:"mdx",permalink:"/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/links",source:"@site/src/pages/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/links.md",description:"- Proxy - JavaScript | MDN",frontMatter:{}},p=[],d={toc:p},l="wrapper";function c(e){let{components:o,...n}=e;return(0,a.kt)(l,(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"},"Proxy - JavaScript | MDN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set"},"handler.set() - JavaScript | MDN"))))}c.isMDXComponent=!0},61448:(e,o,n)=>{"use strict";n.r(o),n.d(o,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const i={},r=void 0,s={type:"mdx",permalink:"/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/solutionCode",source:"@site/src/pages/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/solutionCode.md",frontMatter:{}},p=[],d={toc:p},l="wrapper";function c(e){let{components:o,...n}=e;return(0,a.kt)(l,(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'// "use strict"\n\nconst greeting = {\n  message1: "hello",\n  message2: "everyone",\n}\n\nconst validator = {\n  set(obj, prop, value) {\n    if (prop === "message2") {\n      return value !== "no one"\n    }\n    obj[prop] = value\n\n    return true\n  },\n}\n\nconst proxy1 = new Proxy(greeting, {})\nproxy1.message2 = "everybody"\n\nconst proxy2 = new Proxy(greeting, validator)\nproxy2.message2 = "no one"\n\ngreeting.message1 = "welcome"\n\nconsole.log(greeting)\nconsole.log(proxy1)\nconsole.log(proxy2)\n// 3x {\n//   message1: "welcome",\n//   message2: "everybody"\n// }\n')))}c.isMDXComponent=!0},28088:(e,o,n)=>{"use strict";n.r(o),n.d(o,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const i={},r=void 0,s={type:"mdx",permalink:"/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/solutionDescription",source:"@site/src/pages/100-bugow-js/cdc9845a-3304-4646-b257-3238bad1e179/solutionDescription.md",description:"Proxy umo\u017cliwia ustanowienie pe\u0142nomocnictwa dla danego obiektu.",frontMatter:{}},p=[],d={toc:p},l="wrapper";function c(e){let{components:o,...n}=e;return(0,a.kt)(l,(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Proxy")," umo\u017cliwia ustanowienie pe\u0142nomocnictwa dla danego obiektu."),(0,a.kt)("p",null,"Oznacza to, \u017ce poprzez ",(0,a.kt)("inlineCode",{parentName:"p"},"new Proxy(greeting, {})"),", tworzymy nowy obiekt proxy ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),", kt\xf3ry b\u0119dzie zachowywa\u0142 si\u0119 tak jak obiekt ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting"),"."),(0,a.kt)("p",null,"Wszystkie operacje na takim obiekcie w tym np. modyfikacje w\u0142asno\u015bci ",(0,a.kt)("inlineCode",{parentName:"p"},"message2"),", b\u0119d\u0105 mia\u0142y odzwierciedlenie w oryginalnym obiekcie, czyli zmiany zajd\u0105 zar\xf3wno w obiekcie ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy1")," jak i ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting"),"."),(0,a.kt)("p",null,"Na tym etapie proxy przypomina stworzenie aliasu obiektu np. poprzez ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy1 = greeting"),"."),(0,a.kt)("p",null,"Mamy wi\u0119c przypisanie przez referencj\u0119 i modyfikowanie obiektu ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy1")," jest to\u017csame z modyfikowaniem obiektu ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting"),"."),(0,a.kt)("p",null,"Proxy umo\u017cliwia jednak dodanie dodatkowej logiki, kt\xf3ra zostanie wykonana w imieniu oryginalnego obiektu."),(0,a.kt)("p",null,"Mo\u017cemy w ten spos\xf3b doda\u0107 np. walidacj\u0119 ",(0,a.kt)("em",{parentName:"p"},"setter"),"'\xf3w, przez co przed modyfikacj\u0105 oryginalnego obiektu, obiekt proxy najpierw wykona w\u0142asny kod i dopiero w nim zdecyduje czy dana modyfikacja mo\u017ce zosta\u0107 wykonana."),(0,a.kt)("p",null,"Tworz\u0105c obiekt ",(0,a.kt)("inlineCode",{parentName:"p"},"validator")," i ustawiaj\u0105c go jako proxy dla obiektu ",(0,a.kt)("inlineCode",{parentName:"p"},"greeting")," poprzez ",(0,a.kt)("inlineCode",{parentName:"p"},"new Proxy(greeting, validator)"),", blokujemy mo\u017cliwo\u015b\u0107 ustawienia w\u0142asno\u015bci ",(0,a.kt)("inlineCode",{parentName:"p"},"message2")," na warto\u015b\u0107 ",(0,a.kt)("inlineCode",{parentName:"p"},"no one"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'proxy2.message2 = "no one"')," staje si\u0119 wi\u0119c niedozwolone i nie zmodyfikuje ani obiektu proxy ani obiektu oryginalnego."),(0,a.kt)("p",null,"Je\u015bli aktywujemy tryb \u015bcis\u0142y, to ze wzgl\u0119du na tak\u0105 niedozwolon\u0105 akcj\u0119, wyrzucony zostanie b\u0142\u0105d ",(0,a.kt)("inlineCode",{parentName:"p"},"'set' on proxy: trap returned falsish for property 'message2'"),"."))}c.isMDXComponent=!0},21662:(e,o,n)=>{var t={"./bugCode.md":54233,"./bugDescription.md":61014,"./index.mdx":64832,"./info-096":81968,"./info-096.json":81968,"./links.md":51500,"./solutionCode.md":61448,"./solutionDescription.md":28088};function a(e){var o=i(e);return n(o)}function i(e){if(!n.o(t,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=i,e.exports=a,a.id=21662},25221:(e,o,n)=>{var t={"./info-096.json":81968};function a(e){var o=i(e);return n(o)}function i(e){if(!n.o(t,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=i,e.exports=a,a.id=25221},81968:e=>{"use strict";e.exports=JSON.parse('{"solutionHighlightedRows":[],"preheader":"Proxy"}')}}]);