"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,k=c["".concat(s,".").concat(g)]||c[g]||u[g]||n;return a?o.createElement(k,l(l({ref:t},d),{},{components:a})):o.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:0,title:"Hadoop"},l="Hadoop",i={unversionedId:"bigdata/hadoop/hadoop-intro",id:"bigdata/hadoop/hadoop-intro",title:"Hadoop",description:"A Apache Hadoop egy ny\xedlt forr\xe1sk\xf3d\xfa szoftvergy\u0171jtem\xe9ny, mely nagy mennyis\xe9g\u0171 adat elosztott feldolgoz\xe1s\xe1t teszi lehet\u0151v\xe9.",source:"@site/materials/bigdata/hadoop/hadoop-intro.md",sourceDirName:"bigdata/hadoop",slug:"/bigdata/hadoop/hadoop-intro",permalink:"/en/materials/bigdata/hadoop/hadoop-intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Hadoop"},sidebar:"tutorialSidebar",previous:{title:"Bevezet\xe9s",permalink:"/en/materials/bigdata"},next:{title:"WordCount",permalink:"/en/materials/bigdata/hadoop/WordCount"}},s={},p=[{value:"HDFS",id:"hdfs",level:2},{value:"MapReduce",id:"mapreduce",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hadoop"},"Hadoop"),(0,r.kt)("p",null,"A Apache Hadoop egy ny\xedlt forr\xe1sk\xf3d\xfa szoftvergy\u0171jtem\xe9ny, mely nagy mennyis\xe9g\u0171 adat elosztott feldolgoz\xe1s\xe1t teszi lehet\u0151v\xe9."),(0,r.kt)("p",null,"A Google ",(0,r.kt)("a",{parentName:"p",href:"https://research.google/pubs/pub62/"},"MapReduce")," \xe9s ",(0,r.kt)("a",{parentName:"p",href:"https://research.google/pubs/pub51/"},"File System")," technol\xf3gi\xe1k le\xedr\xe1sain alapszik, k\xe9t f\u0151 r\xe9sze a Hadoop elosztott f\xe1jlrendszer (HDFS)  \xe9s MapReduce motor."),(0,r.kt)("h2",{id:"hdfs"},"HDFS"),(0,r.kt)("p",null,"A HDFS egy a Hadoop \xe1ltal haszn\xe1lt elosztott f\xe1jlrendszer, melyet nagy mennyis\xe9g\u0171 adat hibat\u0171r\u0151 t\xe1rol\xe1s\xe1ra fejlesztettek ki."),(0,r.kt)("p",null,"A HDFS, a f\xe1jlokat maximum 128MB-os blokkokra bontva t\xe1rolja, t\xf6bb k\xfcl\xf6nb\xf6z\u0151 sz\xe1m\xedt\xf3g\xe9pen (node). Emellett a hibatolerancia n\xf6vel\xe9se \xe9rdek\xe9ben az egyes blokkokr\xf3l replik\xe1kat (alapb\xf3l 3 db) t\xe1rol, k\xfcl\xf6nb\xf6z\u0151 rack-be (g\xe9pek egy csoportja) tartoz\xf3 node-okon."),(0,r.kt)("h2",{id:"mapreduce"},"MapReduce"),(0,r.kt)("p",null,"A MapReduce egy programoz\xe1si modell, ami nagy mennyis\xe9g\u0171 adat elosztott feldolgoz\xe1s\xe1t teszi lehet\u0151v\xe9."),(0,r.kt)("p",null,"Alapvet\u0151en \xf6t f\xe1zisb\xf3l \xe1ll:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bementi adatok feloszt\xe1sa"),(0,r.kt)("li",{parentName:"ol"},"A felosztott adatok lek\xe9pez\xe9se kulcs-\xe9rt\xe9k p\xe1rokk\xe1"),(0,r.kt)("li",{parentName:"ol"},"Az azonos kulcs\xfa p\xe1rok \xf6sszegy\u0171jt\xe9se"),(0,r.kt)("li",{parentName:"ol"},"Az \xf6sszegy\u0171jt\xf6tt azonos kulcs\xfa p\xe1rok aggreg\xe1l\xe1sa"),(0,r.kt)("li",{parentName:"ol"},"Kimenet el\u0151\xe1ll\xedt\xe1sa")),(0,r.kt)("figure",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MapReduce",src:a(3265).Z,width:"1059",height:"448"})),(0,r.kt)("figcaption",null,"Forr\xe1s: ",(0,r.kt)("a",{href:"https://vargadaniel.web.elte.hu/"},"Varga D\xe1niel")," ")),(0,r.kt)("p",null,"Minden f\xe1zis v\xe9g\xe9n h\xe1l\xf3zati adatmozgat\xe1s t\xf6rt\xe9nik, ez\xe9rt a shuffle f\xe1zis el\xe9 bevezethet\xfcnk egy opcion\xe1lis combine f\xe1zist,\nami lok\xe1lisan elv\xe9gzi a reducer feladat\xe1nak egy r\xe9sz\xe9t."),(0,r.kt)("p",null,"A k\xf6vetkez\u0151 fejezetekben gyakorlati feladatokon kereszt\xfcl ismerked\xfcnk meg a Hadoop MapReduce saj\xe1toss\xe1gaival."))}u.isMDXComponent=!0},3265:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/mapreduce-3e2762d3e3dda19713b6cdb5c89a231a.png"}}]);