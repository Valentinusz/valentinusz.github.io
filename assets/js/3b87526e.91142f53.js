"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[7452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,g=s["".concat(p,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6,title:"Konfigur\xe1ci\xf3"},i=void 0,l={unversionedId:"bigdata/hadoop/configuration",id:"bigdata/hadoop/configuration",title:"Konfigur\xe1ci\xf3",description:"A Driver oszt\xe1lyban lehet\u0151s\xe9g\xfcnk van, a Configuration objektumhoz kulcs-\xe9rt\xe9k p\xe1rokat adni.",source:"@site/materials/bigdata/hadoop/configuration.md",sourceDirName:"bigdata/hadoop",slug:"/bigdata/hadoop/configuration",permalink:"/materials/bigdata/hadoop/configuration",draft:!1,tags:[],version:"current",lastUpdatedBy:"Boda B\xe1lint",lastUpdatedAt:1696775746,formattedLastUpdatedAt:"2023. okt. 8.",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Konfigur\xe1ci\xf3"},sidebar:"tutorialSidebar",previous:{title:"El\u0151zetes / Ut\xf3lagos m\u0171veletek",permalink:"/materials/bigdata/hadoop/pre_post_operations"},next:{title:"Saj\xe1t Writable",permalink:"/materials/bigdata/hadoop/custom_writable"}},p={},c=[],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Driver")," oszt\xe1lyban lehet\u0151s\xe9g\xfcnk van, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," objektumhoz kulcs-\xe9rt\xe9k p\xe1rokat adni."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) throws Exception {\n    Configuration conf = new Configuration();\n    conf.setInt("x", 3); // t\xedpus specifikus met\xf3dusok \n    conf.setInt("minimumCount", 100);\n    conf.set("required", "T");\n}\n')),(0,o.kt)("p",null,"A konfigur\xe1ci\xf3s objektum lek\xe9rhet\u0151 a ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," oszt\xe1ly p\xe9ld\xe1nyain kereszt\xfcl, \xedgy visszakaphatjuk a kor\xe1bban megadott\nkulcs-\xe9rt\xe9k p\xe1rokat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {\n    Configuration conf = context.getConfiguration();\n    String required = conf.get("required");\n    int k = conf.getInt("k", 3); // t\xedpus specifikus met\xf3dusok \n}\n')))}d.isMDXComponent=!0}}]);