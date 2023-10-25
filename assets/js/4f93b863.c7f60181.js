"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[1897],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=l.createContext({}),d=function(t){var e=l.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):k(k({},e),t)),a},s=function(t){var e=d(t.components);return l.createElement(i.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},g=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),g=n,u=m["".concat(i,".").concat(g)]||m[g]||p[g]||r;return a?l.createElement(u,k(k({ref:e},s),{},{components:a})):l.createElement(u,k({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,k=new Array(r);k[0]=g;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[m]="string"==typeof t?t:n,k[1]=o;for(var d=2;d<r;d++)k[d]=a[d];return l.createElement.apply(null,k)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7705:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>k,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=a(7462),n=(a(7294),a(3905));const r={sidebar_position:3,title:"Adatt\xe1rol\xe1s"},k=void 0,o={unversionedId:"databases2/data_storage",id:"databases2/data_storage",title:"Adatt\xe1rol\xe1s",description:"Az Oracle adatb\xe1zis-kezel\u0151 rendszerben, a lemezen l\xe9v\u0151 adatok fokozatosan egyre nagyobb logikai egys\xe9gekben t\xe1rol\xf3dnak.",source:"@site/notes/databases2/03_data_storage.md",sourceDirName:"databases2",slug:"/databases2/data_storage",permalink:"/notes/databases2/data_storage",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1698267985,formattedLastUpdatedAt:"2023. okt. 25.",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Adatt\xe1rol\xe1s"},sidebar:"tutorialSidebar",previous:{title:"Adatb\xe1zis objektumok",permalink:"/notes/databases2/database_objects"},next:{title:"ROWID pszeud\xf3oszlop",permalink:"/notes/databases2/rowid"}},i={},d=[{value:"Fizikai strukt\xfar\xe1k",id:"fizikai-strukt\xfar\xe1k",level:2},{value:"Lemez blokk (OS blokk)",id:"lemez-blokk-os-blokk",level:3},{value:"Adatf\xe1jl",id:"adatf\xe1jl",level:3},{value:"Logikai strukt\xfar\xe1k",id:"logikai-strukt\xfar\xe1k",level:2},{value:"Oracle adatblokk",id:"oracle-adatblokk",level:3},{value:"Ter\xfclet (extent)",id:"ter\xfclet-extent",level:3},{value:"Szegmens",id:"szegmens",level:3},{value:"T\xe1blat\xe9r",id:"t\xe1blat\xe9r",level:3}],s={toc:d},m="wrapper";function p(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,l.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Az Oracle adatb\xe1zis-kezel\u0151 rendszerben, a lemezen l\xe9v\u0151 adatok fokozatosan egyre nagyobb logikai egys\xe9gekben t\xe1rol\xf3dnak."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(4232).Z,width:"227",height:"263"})),(0,n.kt)("h2",{id:"fizikai-strukt\xfar\xe1k"},"Fizikai strukt\xfar\xe1k"),(0,n.kt)("h3",{id:"lemez-blokk-os-blokk"},"Lemez blokk (OS blokk)"),(0,n.kt)("p",null,"A legalapvet\u0151bb \xe9p\xedt\u0151k\xf6vek, a fizikai lemez blokkjai."),(0,n.kt)("h3",{id:"adatf\xe1jl"},"Adatf\xe1jl"),(0,n.kt)("p",null,"Az adatb\xe1zis-kezel\u0151 rendszer \xe1ltal adatt\xe1rol\xe1sra haszn\xe1lt f\xe1jlok. Az adatf\xe1jlok inform\xe1ci\xf3i lek\xe9rhet\u0151k a ",(0,n.kt)("inlineCode",{parentName:"p"},"TEMP_FILES"),"\n(ideiglenes adatf\xe1jlok) \xe9s ",(0,n.kt)("inlineCode",{parentName:"p"},"DATA_FILES")," n\xe9zeteken kereszt\xfcl. Minden adatf\xe1jl valamilyen t\xe1blat\xe9rhez tartozik."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"DATA_FILES n\xe9zetek legfontosabb oszlopai"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"FILE_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"Az adatf\xe1jl el\xe9r\xe9si \xfatja \xe9s neve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"FILE_ID")),(0,n.kt)("td",{parentName:"tr",align:null},"Az adatf\xe1jl azonos\xedt\xf3ja.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"TABLESPACE_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"Az adatf\xe1jl t\xe1blat\xe9r\xe9nek neve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BYTES")),(0,n.kt)("td",{parentName:"tr",align:null},"Az adatf\xe1jl m\xe9rete b\xe1jtban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BLOCKS")),(0,n.kt)("td",{parentName:"tr",align:null},"Az adatf\xe1jl m\xe9rete Oracle blokkokban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"STATUS")),(0,n.kt)("td",{parentName:"tr",align:null},"Az adatf\xe1jl \xe1llapota (pl. AVAILABLE, INVALID).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"AUTOEXTENSIBLE")),(0,n.kt)("td",{parentName:"tr",align:null},"Megadja, hogy az adatf\xe1jl automatikusan b\u0151v\xfclhet-e.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"MAXBYTES")),(0,n.kt)("td",{parentName:"tr",align:null},"Az adatf\xe1jl maxim\xe1lis m\xe9rete b\xe1jtban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"MAXBLOCKS")),(0,n.kt)("td",{parentName:"tr",align:null},"Az adatf\xe1jl maxim\xe1lis m\xe9rete adatb\xe1zis blokkokban.")))),(0,n.kt)("p",null,"Teljes lista: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/23/refrn/DBA_DATA_FILES.html"},"Oracle DBMS dokument\xe1ci\xf3"))),(0,n.kt)("h2",{id:"logikai-strukt\xfar\xe1k"},"Logikai strukt\xfar\xe1k"),(0,n.kt)("p",null,"Az adatb\xe1zis-kezel\u0151 rendszer annak \xe9rdek\xe9ben, hogy egy magas szint\u0171 interf\xe9szt biztos\xedtson, a lemezblokkok f\xf6l\xe9\nabsztrakci\xf3k\xe9nt logikai strukt\xfar\xe1kat vezet be."),(0,n.kt)("h3",{id:"oracle-adatblokk"},"Oracle adatblokk"),(0,n.kt)("p",null,"A legkisebb logikai egy\xe9s tipikusan 4 kilob\xe1jtnyi (t\xe1bla terenk\xe9nt elt\xe9rhet) egym\xe1s mellett lefoglalt lemez blokkot\njelent. Nincs adatsz\xf3t\xe1r n\xe9zet\xfck."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(5147).Z,width:"372",height:"320"})),(0,n.kt)("p",null,"A blokk elej\xe9n tal\xe1lhat\xf3 ",(0,n.kt)("strong",{parentName:"p"},"blokkfejl\xe9c")," a t\xe1rolt adat kezel\xe9s\xe9hez sz\xfcks\xe9ges metaadatokat tartalmazza. A blokk v\xe9g\xe9n\nhelyezkedik el a t\xe1rolt sor adata. A k\xe9t r\xe9sz k\xf6z\xf6tt szabad t\xe1rhely tal\xe1lhat\xf3, mely lehet\u0151v\xe9 teszi mind a fejl\xe9c\nmind a soradat r\xe9sz b\u0151v\xfcl\xe9s\xe9t, ha arra sz\xfcks\xe9g lenne."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"EXTENTS n\xe9zetek legfontosabb oszlopai"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"OWNER")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfcletet tartalmaz\xf3 szegmens tulajdonosa.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SEGMENT_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens neve amihez a ter\xfclet tartozik.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SEGMENT_TYPE")),(0,n.kt)("td",{parentName:"tr",align:null},"A tartalmaz\xf3 szegmens t\xedpusa.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"TABLESPACE_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet t\xe1blat\xe9r\xe9nek neve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"FILE_ID")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet blokkjait tartalmaz\xf3 f\xe1jl azonos\xedt\xf3ja.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BLOCK_ID")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet kezd\u0151blokkj\xe1nak sorsz\xe1ma.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BYTES")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet m\xe9rete b\xe1jtban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BLOCKS")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet m\xe9rete blokkokban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"EXTENT_ID")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet szegmensen bel\xfcli azonos\xedt\xf3ja.")))),(0,n.kt)("p",null,"Teljes lista: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/23/refrn/DBA_EXTENTS.html"},"Oracle DBMS dokument\xe1ci\xf3"))),(0,n.kt)("h3",{id:"ter\xfclet-extent"},"Ter\xfclet (extent)"),(0,n.kt)("p",null,"\xc1ltal\xe1ban 8 (megv\xe1ltoztathat\xf3) egym\xe1st k\xf6vet\u0151 Oracle adatblokk alkotta csoport. A ter\xfcletek mindig egy adott t\xe1blat\xe9rhez\ntartoznak. A ter\xfcletek adatait a ",(0,n.kt)("inlineCode",{parentName:"p"},"EXTENTS")," n\xe9zetek tartalmazz\xe1k. A ",(0,n.kt)("inlineCode",{parentName:"p"},"FREE_SPACE")," n\xe9zeteken kereszt\xfcl lek\xe9rdezhet\u0151ek az\n\xfcres ter\xfcletek."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"EXTENTS n\xe9zetek legfontosabb oszlopai"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"OWNER")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfcletet tartalmaz\xf3 szegmens tulajdonosa.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SEGMENT_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens neve amihez a ter\xfclet tartozik.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SEGMENT_TYPE")),(0,n.kt)("td",{parentName:"tr",align:null},"A tartalmaz\xf3 szegmens t\xedpusa.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"TABLESPACE_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet t\xe1blat\xe9r\xe9nek neve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"FILE_ID")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet blokkjait tartalmaz\xf3 f\xe1jl azonos\xedt\xf3ja.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BLOCK_ID")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet kezd\u0151blokkj\xe1nak sorsz\xe1ma.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BYTES")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet m\xe9rete b\xe1jtban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BLOCKS")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet m\xe9rete blokkokban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"EXTENT_ID")),(0,n.kt)("td",{parentName:"tr",align:null},"Az ter\xfclet szegmensen bel\xfcli azonos\xedt\xf3ja.")))),(0,n.kt)("p",null,"Teljes lista: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/23/refrn/DBA_EXTENTS.html"},"Oracle DBMS dokument\xe1ci\xf3"))),(0,n.kt)("h3",{id:"szegmens"},"Szegmens"),(0,n.kt)("p",null,"Legal\xe1bb egy ter\xfclet alkotta csoport. Az alkot\xf3 ter\xfcletek m\xe9retei ak\xe1r v\xe1ltoz\xf3ak is lehetnek, \xe9s nincsenek egym\xe1s\nmellett a mem\xf3ri\xe1ban. Konkr\xe9t adatb\xe1zis objektumot reprezent\xe1l. Egy adott t\xe1blat\xe9rhez tartozik. A szegmensek adatait a\n",(0,n.kt)("inlineCode",{parentName:"p"},"SEGMENTS")," n\xe9zetekb\u0151l tudjuk lek\xe9rni."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"SEGMENTS n\xe9zetek legfontosabb oszlopai"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Oszlop neve"),(0,n.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"OWNER")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens tulajdonos\xe1nak neve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SEGMENT_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens neve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"PARTITION_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens part\xedci\xf3j\xe1nak neve (ha van).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"SEGMENT_TYPE")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens t\xedpusa (pl., TABLE, INDEX).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"TABLESPACE_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmenst tartalmaz\xf3 t\xe1blat\xe9r neve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BYTES")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens m\xe9rete b\xe1jtban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BLOCKS")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens m\xe9rete Oracle blokkokban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"EXTENTS")),(0,n.kt)("td",{parentName:"tr",align:null},"A szegmens m\xe9rete ter\xfcletekben.")))),(0,n.kt)("p",null,"Teljes lista: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/23/refrn/DBA_SEGMENTS.html"},"Oracle DBMS dokument\xe1ci\xf3"))),(0,n.kt)("h3",{id:"t\xe1blat\xe9r"},"T\xe1blat\xe9r"),(0,n.kt)("p",null,"A t\xe1blat\xe9r a szegmenseket foglalja \xf6ssze egy k\xf6z\xf6s szab\xe1lyrendszerbe, ami az az objektumok tartalm\xe1t \xe9s t\xe1rol\xe1si m\xf3dj\xe1t\nhat\xe1rozza meg. Egy t\xe1blat\xe9r (\xe9s ez\xe1ltal az azt alkot\xf3 objektumok) fizikailag ak\xe1r t\xf6bb k\xfcl\xf6nb\xf6z\u0151 adatf\xe1jlban is\nelhelyezkedhetnek. A t\xe1blaterek n\xe9zete a ",(0,n.kt)("inlineCode",{parentName:"p"},"TABLESPACES"),"."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"TABLESPACES n\xe9zetek legfontosabb oszlopai"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Oszlop neve"),(0,n.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"TABLESPACE_NAME")),(0,n.kt)("td",{parentName:"tr",align:null},"A t\xe1blat\xe9r neve.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"BLOCK_SIZE")),(0,n.kt)("td",{parentName:"tr",align:null},"A t\xe1blat\xe9r blokkjainak m\xe9rete b\xe1jtban.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"CONTENTS")),(0,n.kt)("td",{parentName:"tr",align:null},"A t\xe1blat\xe9r adatainak jellege. (pl. ideiglenes, \xe1lland\xf3)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"STATUS")),(0,n.kt)("td",{parentName:"tr",align:null},"A t\xe1blat\xe9r \xe1llapota (pl., ONLINE, OFFLINE).")))),(0,n.kt)("p",null,"Teljes lista: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/23/refrn/DBA_TABLESPACES.html"},"Oracle DBMS dokument\xe1ci\xf3"))))}p.isMDXComponent=!0},5147:(t,e,a)=>{a.d(e,{Z:()=>l});const l="data:image/png;base64,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"},4232:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/images/storage-a9f5302ebd19b7ae060a8feb2966a6e8.png"}}]);