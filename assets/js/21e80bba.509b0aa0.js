"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[2197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="A rekord t\xedpus",l={unversionedId:"java/record",id:"java/record",title:"A rekord t\xedpus",description:"Java 14 bevezetett egy \xfaj oszt\xe1lyt\xedpust a record-ot, mely lehet\u0151v\xe9 teszi, hogy egyszer\u0171bben defini\xe1ljunk",source:"@site/materials/java/record.md",sourceDirName:"java",slug:"/java/record",permalink:"/materials/java/record",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1697059738,formattedLastUpdatedAt:"2023. okt. 11.",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Generikusok",permalink:"/materials/java/generic"},next:{title:"Annot\xe1ci\xf3k",permalink:"/materials/java/annotation"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a-rekord-t\xedpus"},"A rekord t\xedpus"),(0,a.kt)("p",null,"Java 14 bevezetett egy \xfaj oszt\xe1lyt\xedpust a ",(0,a.kt)("inlineCode",{parentName:"p"},"record"),"-ot, mely lehet\u0151v\xe9 teszi, hogy egyszer\u0171bben defini\xe1ljunk\n",(0,a.kt)("strong",{parentName:"p"},"nem mut\xe1lhat\xf3 oszt\xe1ly"),"okat."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public record Point(int x, int y) {\n  // term\xe9szetesen defini\xe1lhatunk met\xf3dusokat\n  public double distance(Point other) {\n      if (other == null) {\n          throw new IllegalArgumentException();\n      }\n      return Math.sqrt(Math.pow(other.x() - this.x(), 2) + Math.pow(other.y() - this.y(), 2));\n  }\n}\n")),(0,a.kt)("p",null,"Ekkor legener\xe1l\xe1sra ker\xfclnek a k\xf6vetkez\u0151k:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Point point = new Point(5, 3); // minden adattagot tartalmaz\xf3 konstruktor\npoint.x(); // getter x-hez\npoint.y(); // getter y-hoz\npoint.hashCode();\npoint.equals(new Point(5, 3));\npoint.toString();\n")))}d.isMDXComponent=!0}}]);