"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[7306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},b="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,c=b["".concat(i,".").concat(d)]||b[d]||k[d]||l;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[b]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},o="Adatb\xe1zis objektumok",s={unversionedId:"databases2/database_objects",id:"databases2/database_objects",title:"Adatb\xe1zis objektumok",description:"Az adatb\xe1zis-kezel\u0151 rendszer alapvet\u0151 \xe9p\xedt\u0151 k\xf6vei az adatb\xe1zis objektumok. A legfontosabb objektumokkal a t\xe1bl\xe1kkal \xe9s a",source:"@site/notes/databases2/database_objects.md",sourceDirName:"databases2",slug:"/databases2/database_objects",permalink:"/notes/databases2/database_objects",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1697492234,formattedLastUpdatedAt:"2023. okt. 16.",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Rendszerkatal\xf3gusok",permalink:"/notes/databases2/system_catalogs"},next:{title:"Adatt\xe1rol\xe1s",permalink:"/notes/databases2/data_storage"}},i={},p=[{value:"Szinonima",id:"szinonima",level:2},{value:"Adatb\xe1zis kapcsolat",id:"adatb\xe1zis-kapcsolat",level:2}],u={toc:p},b="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adatb\xe1zis-objektumok"},"Adatb\xe1zis objektumok"),(0,r.kt)("p",null,"Az adatb\xe1zis-kezel\u0151 rendszer alapvet\u0151 \xe9p\xedt\u0151 k\xf6vei az adatb\xe1zis objektumok. A legfontosabb objektumokkal a t\xe1bl\xe1kkal \xe9s a\nn\xe9zetekkel m\xe1r tal\xe1lkoztunk, de ezeken fel\xfcl sz\xe1mos olyan objektum van, melyek haszn\xe1lat\xe1val hat\xe9konyabb\xe1, k\xf6nnyebben\nhaszn\xe1lhat\xf3v\xe1 tudjuk tenni az adatb\xe1zisunkat."),(0,r.kt)("h2",{id:"szinonima"},"Szinonima"),(0,r.kt)("p",null,"A szinonima, ahogy annak neve sugallja, egy m\xe1s adatb\xe1zis objektum alternat\xedv megnevez\xe9se. Haszn\xe1lat\xe1val egyszer\u0171bb\nneveket adhatunk bonyolult adatb\xe1zis objektumoknak (p\xe9ld\xe1ul m\xe1s adatb\xe1zisban szerepl\u0151 t\xe1bla)."),(0,r.kt)("p",null,"A szinonim\xe1k lehetnek priv\xe1tak, ezeket csak a tulajdonos \xe9s a megfelel\u0151 jogosults\xe1ggal rendelkez\u0151 felhaszn\xe1l\xf3k\n\xe9rhetik el."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SYNONYM offices\nFOR hr.locations;\n")),(0,r.kt)("p",null,"A publikus szinonim\xe1kat ezzel szemben minden felhaszn\xe1l\xf3 el\xe9ri:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PUBLIC SYNONYM emp_table \nFOR hr.employees;\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"SYNONYMS")," adatsz\xf3t\xe1r n\xe9zeteben (",(0,r.kt)("inlineCode",{parentName:"p"},"ALL_SYNONYMS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DBA_SYNONYMS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_SYNONYMS"),") k\xe9t oszlop hib\xe1san a ",(0,r.kt)("inlineCode",{parentName:"p"},"TABLE_OWNER")," \xe9s a ",(0,r.kt)("inlineCode",{parentName:"p"},"TABLE_NAME")," nevet viseli, annak\nellen\xe9re, hogy szinonim\xe1ja b\xe1rmilyen t\xedpus\xfa objektumnak lehet.")),(0,r.kt)("h2",{id:"adatb\xe1zis-kapcsolat"},"Adatb\xe1zis kapcsolat"),(0,r.kt)("p",null,"Az adatb\xe1zis kapcsolat egy olyan objektum, mely egy m\xe1sik adatb\xe1zisban tal\xe1lhat\xf3 objektumok el\xe9r\xe9s\xe9t teszi lehet\u0151v\xe9."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE LINK ullman\n    CONNECT TO felhasznalonev\n    IDENTIFIED BY jelszo\n    USING 'ullman.inf.elte.hu:1521/ullman'\n")),(0,r.kt)("p",null,"Kapcsolat haszn\xe1lata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM VDANI.DOLGOZO@ULLMAN;\n")))}k.isMDXComponent=!0}}]);