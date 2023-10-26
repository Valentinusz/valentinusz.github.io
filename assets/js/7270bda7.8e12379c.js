"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[2919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},i="A rekord t\xedpus",l={unversionedId:"java/record",id:"java/record",title:"A rekord t\xedpus",description:"Java 14 bevezetett egy \xfaj oszt\xe1lyt\xedpust a record-ot, mely lehet\u0151v\xe9 teszi, hogy egyszer\u0171bben defini\xe1ljunk",source:"@site/notes/java/record.md",sourceDirName:"java",slug:"/java/record",permalink:"/notes/java/record",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1697492234,formattedLastUpdatedAt:"2023. okt. 16.",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Generikusok",permalink:"/notes/java/generic"},next:{title:"Annot\xe1ci\xf3k",permalink:"/notes/java/annotation"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a-rekord-t\xedpus"},"A rekord t\xedpus"),(0,o.kt)("p",null,"Java 14 bevezetett egy \xfaj oszt\xe1lyt\xedpust a ",(0,o.kt)("inlineCode",{parentName:"p"},"record"),"-ot, mely lehet\u0151v\xe9 teszi, hogy egyszer\u0171bben defini\xe1ljunk\n",(0,o.kt)("strong",{parentName:"p"},"nem mut\xe1lhat\xf3 oszt\xe1ly"),"okat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public record Point(int x, int y) {\n  // term\xe9szetesen defini\xe1lhatunk met\xf3dusokat\n  public double distance(Point other) {\n      if (other == null) {\n          throw new IllegalArgumentException();\n      }\n      return Math.sqrt(Math.pow(other.x() - this.x(), 2) + Math.pow(other.y() - this.y(), 2));\n  }\n}\n")),(0,o.kt)("p",null,"Ekkor legener\xe1l\xe1sra ker\xfclnek a k\xf6vetkez\u0151k:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Point point = new Point(5, 3); // minden adattagot tartalmaz\xf3 konstruktor\npoint.x(); // getter x-hez\npoint.y(); // getter y-hoz\npoint.hashCode();\npoint.equals(new Point(5, 3));\npoint.toString();\n")))}d.isMDXComponent=!0}}]);