"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[4149],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),p=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(k.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(a),u=r,N=m["".concat(k,".").concat(u)]||m[u]||s[u]||l;return a?n.createElement(N,o(o({ref:e},d),{},{components:a})):n.createElement(N,o({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4002:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},o="Rendszerkatal\xf3gusok",i={unversionedId:"databases2/system_catalogs",id:"databases2/system_catalogs",title:"Rendszerkatal\xf3gusok",description:"A kapcsol\xf3d\xf3 gyakorlati feladatok megold\xe1sai el\xe9rhet\u0151ek a GitHub repo-ban.",source:"@site/notes/databases2/system_catalogs.md",sourceDirName:"databases2",slug:"/databases2/system_catalogs",permalink:"/notes/databases2/system_catalogs",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1697492234,formattedLastUpdatedAt:"2023. okt. 16.",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bevezet\xe9s",permalink:"/notes/databases2"},next:{title:"Adatb\xe1zis objektumok",permalink:"/notes/databases2/database_objects"}},k={},p=[{value:"Adatsz\xf3t\xe1r n\xe9zetek",id:"adatsz\xf3t\xe1r-n\xe9zetek",level:2},{value:"<code>TAB_COLS</code> n\xe9zetek",id:"tab_cols-n\xe9zetek",level:3}],d={toc:p},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rendszerkatal\xf3gusok"},"Rendszerkatal\xf3gusok"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A kapcsol\xf3d\xf3 gyakorlati feladatok megold\xe1sai el\xe9rhet\u0151ek a GitHub repo-ban.")),(0,r.kt)("p",null,"Az adatb\xe1zis-kezel\u0151 rendszerek sz\xe1mos olyan t\xe1bl\xe1t \xe9s n\xe9zetet tartalmaznak, melyek az adatb\xe1zis k\xfcl\xf6nb\xf6z\u0151 objektumair\xf3l\ntartalmaznak adatokat."),(0,r.kt)("h2",{id:"adatsz\xf3t\xe1r-n\xe9zetek"},"Adatsz\xf3t\xe1r n\xe9zetek"),(0,r.kt)("p",null,"Ezen metaadatot tartalmaz\xf3 objektumok nevei rendszerint k\xe9t tagb\xf3l \xe1llnak, egy hozz\xe1f\xe9r\xe9si k\xf6rb\u0151l \xe9s egy\nobjektumt\xedpusb\xf3l."),(0,r.kt)("p",null,"A hozz\xe1f\xe9r\xe9si k\xf6r\xf6ket a k\xf6vetkez\u0151 t\xe1bl\xe1zat tartalmazza:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Lek\xe9rdezheti"),(0,r.kt)("th",{parentName:"tr",align:null},"Tartalma"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USER"),(0,r.kt)("td",{parentName:"tr",align:null},"B\xe1rki"),(0,r.kt)("td",{parentName:"tr",align:null},"Felhaszn\xe1l\xf3 tulajdonai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALL"),(0,r.kt)("td",{parentName:"tr",align:null},"B\xe1rki"),(0,r.kt)("td",{parentName:"tr",align:null},"Amit a felhaszn\xe1l\xf3nak joga van megtekinteni")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBA"),(0,r.kt)("td",{parentName:"tr",align:null},"Adatb\xe1zis adminisztr\xe1tor (DBA)"),(0,r.kt)("td",{parentName:"tr",align:null},"Minden")))),(0,r.kt)("p",null,"Objektumt\xedpusok lehetnek p\xe9ld\xe1ul:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OBJECTS"),": minden"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VIEWS"),": csak n\xe9zetek"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TABLES"),": csak t\xe1bl\xe1k")),(0,r.kt)("p",null,"Ezekb\u0151l alkothat\xf3ak a rendszerkatal\xf3gusok nevei. P\xe9ld\xe1ul: ",(0,r.kt)("inlineCode",{parentName:"p"},"DBA_OBJECTS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_TABLES"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL_VIEWS")," stb."),(0,r.kt)("p",null,"A rendszerkatal\xf3gusok n\xe9zetek, melyek a k\xf6vetkez\u0151 oszlopokb\xf3l \xe1llnak (vastagon kiemelve a legfontosabb oszlopok):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OWNER")),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(30)"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Owner of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OBJECT_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(30)"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUBOBJECT_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(30)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the subobject (for example, partition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OBJECT_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary object number of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATA_OBJECT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary object number of the segment that contains the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OBJECT_TYPE")),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(19)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the object (such as TABLE, INDEX)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CREATED"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp for the creation of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LAST_DDL_TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp for the last modification of the object resulting from a DDL statement (including grants and revokes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(20)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp for the specification of the object (character data)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATUS"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(7)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the object (VALID, INVALID, or N/A)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TEMPORARY"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(1)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the object is temporary (the current session can see only data that it placed in this object itself)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GENERATED"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(1)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the name of this object was system generated (Y) or not (N)")))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Az egyes specifikus n\xe9zetek bizonyos oszlopokat a redundancia elker\xfcl\xe9se v\xe9gett nem tartalmaznak, p\xe9ld\xe1ul ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_TABLES")," eset\xe9n nem szerepelnek az  ",(0,r.kt)("inlineCode",{parentName:"p"},"OWNER")," \xe9s ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECT_TYPE")," oszlopok. ")),(0,r.kt)("h3",{id:"tab_cols-n\xe9zetek"},(0,r.kt)("inlineCode",{parentName:"h3"},"TAB_COLS")," n\xe9zetek"),(0,r.kt)("p",null,"K\xfcl\xf6nlegesnek tekinthet\u0151ek a ",(0,r.kt)("inlineCode",{parentName:"p"},"TAB_COLS")," adatsz\xf3t\xe1r n\xe9zetek, melyek az adatb\xe1zisban szerepl\u0151 t\xe1bl\xe1k sorair\xf3l t\xe1rolnak\ninform\xe1ci\xf3kat."),(0,r.kt)("p",null,"A n\xe9zet legfontosabb oszlopai:"),(0,r.kt)("figure",{class:"figure-with-caption"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Oszlop Neve"),(0,r.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"Tulajdonos a t\xe1bl\xe1nak, n\xe9zetnek vagy csoportnak")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"A t\xe1bla, n\xe9zet vagy csoport neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLUMN_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Oszlop neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATA_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Az oszlop adatt\xedpusa")))),(0,r.kt)("figcaption",null,"Forr\xe1s: ",(0,r.kt)("a",{href:"https://docs.oracle.com/cd/E11882_01/server.112/e40402/statviews_2102.htm#REFRN20276"},"Oracle DBMS dokument\xe1ci\xf3"))))}s.isMDXComponent=!0}}]);