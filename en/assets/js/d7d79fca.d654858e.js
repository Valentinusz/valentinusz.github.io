"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[501],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,c=u["".concat(i,".").concat(g)]||u[g]||d[g]||l;return a?n.createElement(c,s(s({ref:t},m),{},{components:a})):n.createElement(c,s({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:0,slug:"/bigdata",title:"Bevezet\xe9s"},s="Big Data architekt\xfar\xe1k \xe9s elemz\u0151 m\xf3dszerek",o={unversionedId:"bigdata/intro",id:"bigdata/intro",title:"Bevezet\xe9s",description:"Ez a tananyag folyamatosan friss\xfcl, \xe9rdemes ennek tudat\xe1ban a felk\xe9sz\xfcl\xe9s alapj\xe1ul v\xe1lasztani. \xc9szrev\xe9tel (pontatlans\xe1g, helyes\xedr\xe1si hiba) eset\xe9n nyugodtan",source:"@site/materials/bigdata/intro.md",sourceDirName:"bigdata",slug:"/bigdata",permalink:"/en/materials/bigdata",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1695973397,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/bigdata",title:"Bevezet\xe9s"},sidebar:"tutorialSidebar",previous:{title:"Konkurens programoz\xe1s",permalink:"/en/materials/hjava/concurrency"},next:{title:"Hadoop",permalink:"/en/materials/bigdata/hadoop/hadoop-intro"}},i={},p=[],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"big-data-architekt\xfar\xe1k-\xe9s-elemz\u0151-m\xf3dszerek"},"Big Data architekt\xfar\xe1k \xe9s elemz\u0151 m\xf3dszerek"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Ez a tananyag folyamatosan friss\xfcl, \xe9rdemes ennek tudat\xe1ban a felk\xe9sz\xfcl\xe9s alapj\xe1ul v\xe1lasztani. \xc9szrev\xe9tel (pontatlans\xe1g, helyes\xedr\xe1si hiba) eset\xe9n nyugodtan\nnyiss a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Valentinusz/elte-ik-bsc"},"tananyagos repository"),"-ban egy issue-t!")),(0,r.kt)("p",null,"Big Data alatt, olyan adathalmazokat \xe9rt\xfcnk, melyek ",(0,r.kt)("strong",{parentName:"p"},"m\xe9ret"),"e \xe9s/vagy ",(0,r.kt)("strong",{parentName:"p"},"komplexit\xe1s"),"a miatt a hagyom\xe1nyos adatfeldolgoz\xf3 m\xf3dszerek eredm\xe9nytelenn\xe9 esetlegesen haszn\xe1lhatatlann\xe1 v\xe1lnak."),(0,r.kt)("p",null,"Jellemz\u0151i:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mennyis\xe9g")," (Volume): hatalmas mennyis\xe9g\u0171 adat"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sebess\xe9g")," (Velocity):  szinte folyamatos adat\xe1raml\xe1s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"v\xe1ltozatoss\xe1g")," (Variety): rengeteg form\xe1tum"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pontoss\xe1g")," (Veracity): bizonytalans\xe1g az adat igazs\xe1gtartalma fel\xe9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\xe9rt\xe9k")," (Value): az adatb\xf3l \xe9rt\xe9kes inform\xe1ci\xf3 nyerhet\u0151 ki")),(0,r.kt)("admonition",{title:"\xc9rdekess\xe9g",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Csak a Google keres\u0151 naponta 10 milli\xe1rd \xe1tlagosan 20 KB m\xe9ret\u0171 weboldalt dolgoz fel. Ez 200TB adatot jelent, ami egy 50MB/s olvas\xe1si sebess\xe9g\u0171 lemez eset\xe9n 46 napba telne.")),(0,r.kt)("p",null,"Jobb hardver haszn\xe1lat\xe1val n\xf6velhet\u0151 a sz\xe1m\xedt\xe1si kapacit\xe1s (vertik\xe1lis sk\xe1l\xe1z\xe1s), hossz\xfat\xe1von az ilyen jelleg\u0171 fejleszt\xe9s nem fenntarthat\xf3."),(0,r.kt)("p",null,"\xc9rdemes sokkal ink\xe1bb egy elosztott, t\xf6bb g\xe9pet haszn\xe1l\xf3 megold\xe1sban gondolkodni, melyek \xedgy k\xe9pesek p\xe1rhuzamos sz\xe1m\xedt\xe1sokat v\xe9gezni. Ez a rendszer m\xe9g jobban sk\xe1l\xe1zhat\xf3 ugyanis kapacit\xe1sn\xf6vel\xe9s eset\xe9n csak \xfaj rendszerrel kell b\u0151v\xedteni a megl\xe9v\u0151 klasztert (horizont\xe1lis sk\xe1l\xe1z\xe1s)."))}d.isMDXComponent=!0}}]);