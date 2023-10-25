"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[8656],{4138:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7294),l=n(9861),r=n(9819),i=n(4885);n(9869);const d="container_G_sE",o="node__5KA";function s(e){let{columns:t}=e;return a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Oszlop"),a.createElement("th",null,"T\xedpus"),a.createElement("th",null,"Le\xedr\xe1s"))),a.createElement("tbody",null,t.map((e=>{let{name:t,type:n,description:l}=e;return a.createElement("tr",{key:t},a.createElement("td",null,t),a.createElement("td",null,n),a.createElement("td",null,l))}))))}var p;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}const N=e=>{let{title:t,titleId:n,...l}=e;return a.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":n},l),t?a.createElement("title",{id:n},t):null,p||(p=a.createElement("path",{d:"M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"})))},u={databaseTable:function(e){let{data:{name:t,columns:n}}=e;return a.createElement("div",{className:d},a.createElement(l.HH,{id:"top",type:"source",position:l.Ly.Bottom}),a.createElement(l.HH,{id:"bottom",type:"source",position:l.Ly.Top}),a.createElement(l.HH,{id:"left",type:"source",position:l.Ly.Left}),a.createElement(l.HH,{id:"right",type:"source",position:l.Ly.Right}),a.createElement("h3",null,t),a.createElement(s,{className:o,columns:n}))}};function k(e){let{initialNodes:t=[],initialEdges:n=[]}=e;if(0===t.length)return console.error("No nodes provided."),null;const d=(0,a.useRef)(0),[o,s]=(0,a.useState)(t),[p,m]=(0,a.useState)(n),k=(0,a.useCallback)((e=>s((t=>(0,l.Fb)(e,t)))),[s]),c=(0,a.useCallback)((e=>m((t=>(0,l.yn)(e,t)))),[m]),E=(0,a.useCallback)((e=>m((t=>(0,l.Z_)(e,t)))),[m]);return a.createElement(a.Fragment,null,a.createElement(l.x$,{ref:d,nodes:o,edges:p,onNodesChange:k,onEdgesChange:c,onConnect:E,nodeTypes:u,connectionMode:"loose",nodesConnectable:!1,fitView:!0},a.createElement(r.A,{color:"#ccc",variant:"dots"}),a.createElement(i.Z,null,a.createElement(i.B,{onClick:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().then():d.current.requestFullscreen().then()},title:"fullscreen"},a.createElement(N,null)))))}},6853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>N});var a=n(7462),l=n(7294),r=n(3905),i=n(4138);function d(e){let{height:t="35em"}=e;const a=[{id:"1",type:"databaseTable",position:{x:0,y:0},data:n(4934)},{id:"2",type:"databaseTable",position:{x:300,y:0},data:n(4361)},{id:"3",type:"databaseTable",position:{x:300,y:250},data:n(9192)}];return l.createElement("div",{style:{width:"100%",height:t}},l.createElement(i.Z,{initialNodes:a,initialEdges:[{id:"edge-1",source:"1",target:"2",sourceHandle:"right",targetHandle:"left",label:"(OWNER, INDEX_NAME) 1:N (INDEX_OWNER, INDEX_NAME)"}]}))}const o={},s="Index rendszerkatal\xf3gusok",p={unversionedId:"databases2/indexes/index_catalogs",id:"databases2/indexes/index_catalogs",title:"Index rendszerkatal\xf3gusok",description:"INDEXES",source:"@site/notes/databases2/05_indexes/04_index_catalogs.mdx",sourceDirName:"databases2/05_indexes",slug:"/databases2/indexes/index_catalogs",permalink:"/notes/databases2/indexes/index_catalogs",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1698267985,formattedLastUpdatedAt:"2023. okt. 25.",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Oracle indexek",permalink:"/notes/databases2/indexes/oracle_indexes"},next:{title:"Part\xedci\xf3k",permalink:"/notes/databases2/partitions"}},m={},N=[{value:"<code>INDEXES</code>",id:"indexes",level:2},{value:"<code>IND_COLUMNS</code>",id:"ind_columns",level:2},{value:"<code>IND_EXPRESSIONS</code>",id:"ind_expressions",level:2}],u={toc:N},k="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"index-rendszerkatal\xf3gusok"},"Index rendszerkatal\xf3gusok"),(0,r.kt)("h2",{id:"indexes"},(0,r.kt)("inlineCode",{parentName:"h2"},"INDEXES")),(0,r.kt)("p",null,"Az adatb\xe1zisban tal\xe1lhat\xf3 indexekr\u0151l tartalmaz adatokat."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Oszlop"),(0,r.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"az index tulajdonososa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INDEX_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"az index neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"az indexelt objektum tulajdonosa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"az indexelt objektum neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"az indexelt objektum neve t\xedpusa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNIQUENESS"),(0,r.kt)("td",{parentName:"tr",align:null},"egyedi-e az index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COMPRESSION"),(0,r.kt)("td",{parentName:"tr",align:null},"haszn\xe1l-e t\xf6m\xf6r\xedt\xe9st")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PREFIX_LENGTH"),(0,r.kt)("td",{parentName:"tr",align:null},"t\xf6m\xf6r\xedt\xe9sn\xe9l a prefix oszlopok sz\xe1ma")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLESPACE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"t\xe1blat\xe9r neve")))),(0,r.kt)("h2",{id:"ind_columns"},(0,r.kt)("inlineCode",{parentName:"h2"},"IND_COLUMNS")),(0,r.kt)("p",null,"Az \xf6sszes t\xe1lba \xf6sszes index\xe9ben szerepl\u0151 oszlopokr\xf3l t\xe1rol inform\xe1ci\xf3kat."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Oszlop"),(0,r.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INDEX_OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"az index tulajdonososa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INDEX_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"az index neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"az indexelt objektum tulajdonosa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"az indexelt objektum neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLUMN_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"az index oszlop\xe1nak neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLUMN_POSITION"),(0,r.kt)("td",{parentName:"tr",align:null},"az oszlop sorsz\xe1ma az indexen bel\xfcl")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DESCEND"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DESC")," ha az oszlop cs\xf6kken\u0151en szerepel az indexben (k\xfcl\xf6nben ",(0,r.kt)("inlineCode",{parentName:"td"},"ASC"),")")))),(0,r.kt)("h2",{id:"ind_expressions"},(0,r.kt)("inlineCode",{parentName:"h2"},"IND_EXPRESSIONS")),(0,r.kt)("p",null,"A f\xfcggv\xe9ny alap\xfa indexekr\u0151l t\xe1rol inform\xe1ci\xf3kat"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Oszlop"),(0,r.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INDEX_OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"az index tulajdonososa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INDEX_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"az index neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"az indexelt objektum tulajdonosa")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"az indexelt objektum neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLUMN_EXPRESSION"),(0,r.kt)("td",{parentName:"tr",align:null},"a f\xfcggv\xe9ny")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLUMN_POSITION"),(0,r.kt)("td",{parentName:"tr",align:null},"az oszlop sorsz\xe1ma az indexen bel\xfcl")))),(0,r.kt)(d,{mdxType:"IndexesFlow"}))}c.isMDXComponent=!0},4361:e=>{e.exports=JSON.parse('{"name":"IND_COLUMNS","columns":[{"name":"INDEX_OWNER","description":"az index tulajdonososa","type":"VARCHAR2"},{"name":"INDEX_NAME","description":"az index neve","type":"VARCHAR2"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"VARCHAR2"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"VARCHAR2"},{"name":"COLUMN_NAME","description":"az index oszlop\xe1nak neve","type":"VARCHAR2"},{"name":"COLUMN_POSITION","description":"az oszlop sorsz\xe1ma az indexen bel\xfcl","type":"NUMBER"},{"name":"DESCEND","description":"`DESC` ha az oszlop cs\xf6kken\u0151en szerepel az indexben (k\xfcl\xf6nben `ASC`)","type":"VARCHAR2"}]}')},9192:e=>{e.exports=JSON.parse('{"name":"IND_EXPRESSIONS","columns":[{"name":"INDEX_OWNER","description":"az index tulajdonososa","type":"String"},{"name":"INDEX_NAME","description":"az index neve","type":"String"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"String"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"String"},{"name":"COLUMN_EXPRESSION","description":"a f\xfcggv\xe9ny","type":"String"},{"name":"COLUMN_POSITION","description":"az oszlop sorsz\xe1ma az indexen bel\xfcl","type":"Number"}]}')},4934:e=>{e.exports=JSON.parse('{"name":"INDEXES","columns":[{"name":"OWNER","description":"az index tulajdonososa","type":"String"},{"name":"INDEX_NAME","description":"az index neve","type":"String"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"String"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"String"},{"name":"TABLE_TYPE","description":"az indexelt objektum neve t\xedpusa","type":"String"},{"name":"UNIQUENESS","description":"egyedi-e az index","type":"String"},{"name":"COMPRESSION","description":"haszn\xe1l-e t\xf6m\xf6r\xedt\xe9st","type":"String"},{"name":"PREFIX_LENGTH","description":"t\xf6m\xf6r\xedt\xe9sn\xe9l a prefix oszlopok sz\xe1ma","type":"Number"},{"name":"TABLESPACE_NAME","description":"t\xe1blat\xe9r neve","type":"String"}]}')}}]);