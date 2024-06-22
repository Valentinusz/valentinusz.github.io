"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[8656],{1840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>E,frontMatter:()=>o,metadata:()=>x,toc:()=>j});var s=t(5893),d=t(1151),i=(t(7294),t(4138));const r=[{id:"1",type:"databaseTable",position:{x:0,y:0},data:t(5682)},{id:"2",type:"databaseTable",position:{x:300,y:0},data:t(6250)},{id:"3",type:"databaseTable",position:{x:300,y:250},data:t(4176)}],l=[{id:"edge-1",source:"1",target:"2",sourceHandle:"right",targetHandle:"left",label:"(OWNER, INDEX_NAME) 1:N (INDEX_OWNER, INDEX_NAME)"}];function a(e){let{height:n="35em"}=e;return(0,s.jsx)("div",{style:{width:"100%",height:n},children:(0,s.jsx)(i.Z,{initialNodes:r,initialEdges:l})})}const o={},c="Index rendszerkatal\xf3gusok",x={id:"databases2/indexes/index_catalogs",title:"Index rendszerkatal\xf3gusok",description:"INDEXES",source:"@site/notes/databases2/05_indexes/04_index_catalogs.mdx",sourceDirName:"databases2/05_indexes",slug:"/databases2/indexes/index_catalogs",permalink:"/notes/databases2/indexes/index_catalogs",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1698267985,formattedLastUpdatedAt:"2023. okt. 25.",sidebarPosition:4,frontMatter:{},sidebar:"notesSidebar",previous:{title:"Oracle indexek",permalink:"/notes/databases2/indexes/oracle_indexes"},next:{title:"Part\xedci\xf3k",permalink:"/notes/databases2/partitions"}},h={},j=[{value:"<code>INDEXES</code>",id:"indexes",level:2},{value:"<code>IND_COLUMNS</code>",id:"ind_columns",level:2},{value:"<code>IND_EXPRESSIONS</code>",id:"ind_expressions",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"index-rendszerkatal\xf3gusok",children:"Index rendszerkatal\xf3gusok"}),"\n",(0,s.jsx)(n.h2,{id:"indexes",children:(0,s.jsx)(n.code,{children:"INDEXES"})}),"\n",(0,s.jsx)(n.p,{children:"Az adatb\xe1zisban tal\xe1lhat\xf3 indexekr\u0151l tartalmaz adatokat."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Oszlop"}),(0,s.jsx)(n.th,{children:"Le\xedr\xe1s"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OWNER"}),(0,s.jsx)(n.td,{children:"az index tulajdonososa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INDEX_NAME"}),(0,s.jsx)(n.td,{children:"az index neve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLE_OWNER"}),(0,s.jsx)(n.td,{children:"az indexelt objektum tulajdonosa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLE_NAME"}),(0,s.jsx)(n.td,{children:"az indexelt objektum neve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLE_TYPE"}),(0,s.jsx)(n.td,{children:"az indexelt objektum neve t\xedpusa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UNIQUENESS"}),(0,s.jsx)(n.td,{children:"egyedi-e az index"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"COMPRESSION"}),(0,s.jsx)(n.td,{children:"haszn\xe1l-e t\xf6m\xf6r\xedt\xe9st"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PREFIX_LENGTH"}),(0,s.jsx)(n.td,{children:"t\xf6m\xf6r\xedt\xe9sn\xe9l a prefix oszlopok sz\xe1ma"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLESPACE_NAME"}),(0,s.jsx)(n.td,{children:"t\xe1blat\xe9r neve"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ind_columns",children:(0,s.jsx)(n.code,{children:"IND_COLUMNS"})}),"\n",(0,s.jsx)(n.p,{children:"Az \xf6sszes t\xe1lba \xf6sszes index\xe9ben szerepl\u0151 oszlopokr\xf3l t\xe1rol inform\xe1ci\xf3kat."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Oszlop"}),(0,s.jsx)(n.th,{children:"Le\xedr\xe1s"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INDEX_OWNER"}),(0,s.jsx)(n.td,{children:"az index tulajdonososa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INDEX_NAME"}),(0,s.jsx)(n.td,{children:"az index neve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLE_OWNER"}),(0,s.jsx)(n.td,{children:"az indexelt objektum tulajdonosa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLE_NAME"}),(0,s.jsx)(n.td,{children:"az indexelt objektum neve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"COLUMN_NAME"}),(0,s.jsx)(n.td,{children:"az index oszlop\xe1nak neve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"COLUMN_POSITION"}),(0,s.jsx)(n.td,{children:"az oszlop sorsz\xe1ma az indexen bel\xfcl"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DESCEND"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"DESC"})," ha az oszlop cs\xf6kken\u0151en szerepel az indexben (k\xfcl\xf6nben ",(0,s.jsx)(n.code,{children:"ASC"}),")"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ind_expressions",children:(0,s.jsx)(n.code,{children:"IND_EXPRESSIONS"})}),"\n",(0,s.jsx)(n.p,{children:"A f\xfcggv\xe9ny alap\xfa indexekr\u0151l t\xe1rol inform\xe1ci\xf3kat"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Oszlop"}),(0,s.jsx)(n.th,{children:"Le\xedr\xe1s"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INDEX_OWNER"}),(0,s.jsx)(n.td,{children:"az index tulajdonososa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INDEX_NAME"}),(0,s.jsx)(n.td,{children:"az index neve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLE_OWNER"}),(0,s.jsx)(n.td,{children:"az indexelt objektum tulajdonosa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLE_NAME"}),(0,s.jsx)(n.td,{children:"az indexelt objektum neve"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"COLUMN_EXPRESSION"}),(0,s.jsx)(n.td,{children:"a f\xfcggv\xe9ny"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"COLUMN_POSITION"}),(0,s.jsx)(n.td,{children:"az oszlop sorsz\xe1ma az indexen bel\xfcl"})]})]})]}),"\n",(0,s.jsx)(a,{})]})}function E(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4138:(e,n,t)=>{t.d(n,{Z:()=>E});var s=t(7294),d=t(2064),i=t(9819),r=t(4885);t(9869);const l="container_G_sE",a="node__5KA";var o,c=t(5893);function x(e){let{columns:n,className:t}=e;return(0,c.jsxs)("table",{className:t,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Oszlop"}),(0,c.jsx)("th",{children:"T\xedpus"}),(0,c.jsx)("th",{children:"Le\xedr\xe1s"})]})}),(0,c.jsx)("tbody",{children:n.map((e=>{let{name:n,type:t,description:s}=e;return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n}),(0,c.jsx)("td",{children:t}),(0,c.jsx)("td",{children:s})]},n)}))})]})}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},h.apply(this,arguments)}const j=e=>{let{title:n,titleId:t,...d}=e;return s.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":t},d),n?s.createElement("title",{id:t},n):null,o||(o=s.createElement("path",{d:"M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"})))},p={databaseTable:function(e){let{data:{name:n,columns:t}}=e;return(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)(d.HH,{id:"top",type:"source",position:d.Ly.Top}),(0,c.jsx)(d.HH,{id:"bottom",type:"source",position:d.Ly.Bottom}),(0,c.jsx)(d.HH,{id:"left",type:"source",position:d.Ly.Left}),(0,c.jsx)(d.HH,{id:"right",type:"source",position:d.Ly.Right}),(0,c.jsx)("h3",{children:n}),(0,c.jsx)(x,{className:a,columns:t})]})}};function E(e){let{initialNodes:n=[],initialEdges:t=[]}=e;if(0===n.length)return console.error("No nodes provided."),null;const l=(0,s.useRef)(0),[a,o]=(0,s.useState)(n),[x,h]=(0,s.useState)(t),E=(0,s.useCallback)((e=>o((n=>(0,d.Fb)(e,n)))),[o]),u=(0,s.useCallback)((e=>h((n=>(0,d.yn)(e,n)))),[h]),N=(0,s.useCallback)((e=>h((n=>(0,d.Z_)(e,n)))),[h]);return(0,c.jsxs)(d.x$,{ref:l,nodes:a,onNodesChange:E,edges:x,onEdgesChange:u,nodeTypes:p,onConnect:N,connectionMode:"loose",nodesConnectable:!1,fitView:!0,children:[(0,c.jsx)(i.A,{color:"#ccc",variant:"dots"}),(0,c.jsx)(r.Z,{children:(0,c.jsx)(r.B,{onClick:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().then():l.current.requestFullscreen().then()},title:"fullscreen",children:(0,c.jsx)(j,{})})})]})}},6250:e=>{e.exports=JSON.parse('{"name":"IND_COLUMN","columns":[{"name":"INDEX_OWNER","description":"az index tulajdonososa","type":"VARCHAR2"},{"name":"INDEX_NAME","description":"az index neve","type":"VARCHAR2"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"VARCHAR2"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"VARCHAR2"},{"name":"COLUMN_NAME","description":"az index oszlop\xe1nak neve","type":"VARCHAR2"},{"name":"COLUMN_POSITION","description":"az oszlop sorsz\xe1ma az indexen bel\xfcl","type":"NUMBER"},{"name":"DESCEND","description":"DESC ha az oszlop cs\xf6kken\u0151en szerepel az indexben (k\xfcl\xf6nben ASC)","type":"VARCHAR2"}]}')},4176:e=>{e.exports=JSON.parse('{"name":"IND_EXPRESSIONS","columns":[{"name":"INDEX_OWNER","description":"az index tulajdonososa","type":"String"},{"name":"INDEX_NAME","description":"az index neve","type":"String"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"String"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"String"},{"name":"COLUMN_EXPRESSION","description":"a f\xfcggv\xe9ny","type":"String"},{"name":"COLUMN_POSITION","description":"az oszlop sorsz\xe1ma az indexen bel\xfcl","type":"Number"}]}')},5682:e=>{e.exports=JSON.parse('{"name":"INDEXES","columns":[{"name":"OWNER","description":"az index tulajdonososa","type":"String"},{"name":"INDEX_NAME","description":"az index neve","type":"String"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"String"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"String"},{"name":"TABLE_TYPE","description":"az indexelt objektum neve t\xedpusa","type":"String"},{"name":"UNIQUENESS","description":"egyedi-e az index","type":"String"},{"name":"COMPRESSION","description":"haszn\xe1l-e t\xf6m\xf6r\xedt\xe9st","type":"String"},{"name":"PREFIX_LENGTH","description":"t\xf6m\xf6r\xedt\xe9sn\xe9l a prefix oszlopok sz\xe1ma","type":"Number"},{"name":"TABLESPACE_NAME","description":"t\xe1blat\xe9r neve","type":"String"}]}')}}]);