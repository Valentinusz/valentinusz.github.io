"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5,title:"El\u0151zetes / Ut\xf3lagos m\u0171veletek"},i=void 0,p={unversionedId:"bigdata/hadoop/pre_post_operations",id:"bigdata/hadoop/pre_post_operations",title:"El\u0151zetes / Ut\xf3lagos m\u0171veletek",description:"A Mapper \xe9s a Reducer oszt\xe1lyban defini\xe1lva van egy setup() \xe9s egy cleanup() m\u0171velet, melyek az adott Map/Reduce",source:"@site/materials/bigdata/hadoop/pre_post_operations.md",sourceDirName:"bigdata/hadoop",slug:"/bigdata/hadoop/pre_post_operations",permalink:"/materials/bigdata/hadoop/pre_post_operations",draft:!1,tags:[],version:"current",lastUpdatedBy:"Boda B\xe1lint",lastUpdatedAt:1696775746,formattedLastUpdatedAt:"2023. okt. 8.",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"El\u0151zetes / Ut\xf3lagos m\u0171veletek"},sidebar:"tutorialSidebar",previous:{title:"Sz\xe1ml\xe1l\xf3k",permalink:"/materials/bigdata/hadoop/counters"},next:{title:"Konfigur\xe1ci\xf3",permalink:"/materials/bigdata/hadoop/configuration"}},s={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapper")," \xe9s a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," oszt\xe1lyban defini\xe1lva van egy ",(0,r.kt)("inlineCode",{parentName:"p"},"setup()")," \xe9s egy ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanup()")," m\u0171velet, melyek az adott Map/Reduce\ntask futtat\xe1sa el\u0151tt vagy ut\xe1n ker\xfclnek v\xe9grehajt\xe1sra."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Mapper<KEYIN, VALUEIN, KEYOUT, VALUEOUT> {\n    ...\n    protected void setup(Context context) throws IOException, InterruptedException { }\n    protected void cleanup(Context context) throws IOException, InterruptedException { }\n    ...\n}\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Ezek a m\u0171veletek pontosan annyiszor futnak le, ah\xe1ny Map/Reduce task van. Ez egyg\xe9pes rendszereken nem okoz gondot, de\negy rendles klaszteren ez ak\xe1r a sz\xe1m\xedt\xf3g\xe9pek sz\xe1ma is lehet.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Lehet\u0151s\xe9g\xfcnk van annak garant\xe1l\xe1s\xe1ra, hogy csak egy Reduce task fusson le a ",(0,r.kt)("inlineCode",{parentName:"p"},"Driver")," oszt\xe1ly ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," met\xf3dus\xe1ban a\nk\xf6vetkez\u0151 utas\xedt\xe1s megad\xe1s\xe1val:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Job job = Job.getInstance(conf, "job-name");\njob.setNumReduceTasks(1);\n'))))}u.isMDXComponent=!0}}]);