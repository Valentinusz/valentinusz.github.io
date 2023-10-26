"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[2102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,g=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6,title:"Konfigur\xe1ci\xf3"},i=void 0,p={unversionedId:"bigdata/hadoop/configuration",id:"bigdata/hadoop/configuration",title:"Konfigur\xe1ci\xf3",description:"A Driver oszt\xe1lyban lehet\u0151s\xe9g\xfcnk van, a Configuration objektumhoz kulcs-\xe9rt\xe9k p\xe1rokat adni.",source:"@site/notes/bigdata/hadoop/configuration.md",sourceDirName:"bigdata/hadoop",slug:"/bigdata/hadoop/configuration",permalink:"/notes/bigdata/hadoop/configuration",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1697492234,formattedLastUpdatedAt:"2023. okt. 16.",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Konfigur\xe1ci\xf3"},sidebar:"tutorialSidebar",previous:{title:"El\u0151zetes / Ut\xf3lagos m\u0171veletek",permalink:"/notes/bigdata/hadoop/pre_post_operations"},next:{title:"Saj\xe1t Writable",permalink:"/notes/bigdata/hadoop/custom_writable"}},c={},u=[],l={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Driver")," oszt\xe1lyban lehet\u0151s\xe9g\xfcnk van, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," objektumhoz kulcs-\xe9rt\xe9k p\xe1rokat adni."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) throws Exception {\n    Configuration conf = new Configuration();\n    conf.setInt("x", 3); // t\xedpus specifikus met\xf3dusok \n    conf.setInt("minimumCount", 100);\n    conf.set("required", "T");\n}\n')),(0,o.kt)("p",null,"A konfigur\xe1ci\xf3s objektum lek\xe9rhet\u0151 a ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," oszt\xe1ly p\xe9ld\xe1nyain kereszt\xfcl, \xedgy visszakaphatjuk a kor\xe1bban megadott\nkulcs-\xe9rt\xe9k p\xe1rokat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {\n    Configuration conf = context.getConfiguration();\n    String required = conf.get("required");\n    int k = conf.getInt("k", 3); // t\xedpus specifikus met\xf3dusok \n}\n')))}d.isMDXComponent=!0}}]);