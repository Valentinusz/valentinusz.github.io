"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[735],{4138:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7294),s=a(9861),r=a(9819),l=a(4885);a(9869);const p="container_G_sE",m="node__5KA";function i(e){let{columns:t,className:a}=e;return n.createElement("table",{className:a},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Oszlop"),n.createElement("th",null,"T\xedpus"),n.createElement("th",null,"Le\xedr\xe1s"))),n.createElement("tbody",null,t.map((e=>{let{name:t,type:a,description:s}=e;return n.createElement("tr",{key:t},n.createElement("td",null,t),n.createElement("td",null,a),n.createElement("td",null,s))}))))}var o;function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},N.apply(this,arguments)}const d=e=>{let{title:t,titleId:a,...s}=e;return n.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":a},s),t?n.createElement("title",{id:a},t):null,o||(o=n.createElement("path",{d:"M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"})))},c={databaseTable:function(e){let{data:{name:t,columns:a}}=e;return n.createElement("div",{className:p},n.createElement(s.HH,{id:"top",type:"source",position:s.Ly.Top}),n.createElement(s.HH,{id:"bottom",type:"source",position:s.Ly.Bottom}),n.createElement(s.HH,{id:"left",type:"source",position:s.Ly.Left}),n.createElement(s.HH,{id:"right",type:"source",position:s.Ly.Right}),n.createElement("h3",null,t),n.createElement(i,{className:m,columns:a}))}};function k(e){let{initialNodes:t=[],initialEdges:a=[]}=e;if(0===t.length)return console.error("No nodes provided."),null;const p=(0,n.useRef)(0),[m,i]=(0,n.useState)(t),[o,N]=(0,n.useState)(a),k=(0,n.useCallback)((e=>i((t=>(0,s.Fb)(e,t)))),[i]),g=(0,n.useCallback)((e=>N((t=>(0,s.yn)(e,t)))),[N]),u=(0,n.useCallback)((e=>N((t=>(0,s.Z_)(e,t)))),[N]);return n.createElement(n.Fragment,null,n.createElement(s.x$,{ref:p,nodes:m,edges:o,onNodesChange:k,onEdgesChange:g,onConnect:u,nodeTypes:c,connectionMode:"loose",nodesConnectable:!1,fitView:!0},n.createElement(r.A,{color:"#ccc",variant:"dots"}),n.createElement(l.Z,null,n.createElement(l.B,{onClick:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().then():p.current.requestFullscreen().then()},title:"fullscreen"},n.createElement(d,null)))))}},6581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>N,default:()=>A,frontMatter:()=>o,metadata:()=>d,toc:()=>k});var n=a(7462),s=a(7294),r=a(3905),l=a(4138);const p=[{id:"OBJECT",type:"databaseTable",position:{x:0,y:0},data:a(6323)},{id:"TAB_COL",type:"databaseTable",position:{x:800,y:0},data:a(4941)},{id:"DATA_FILE",type:"databaseTable",position:{x:0,y:1e3},data:a(806)},{id:"SEGMENT",type:"databaseTable",position:{x:0,y:500},data:a(7159)},{id:"EXTENT",type:"databaseTable",position:{x:600,y:500},data:a(6472)},{id:"TABLE_SPACE",type:"databaseTable",position:{x:750,y:1e3},data:a(4822)},{id:"INDEX",type:"databaseTable",position:{x:-600,y:0},data:a(4934)},{id:"IND_COLUMN",type:"databaseTable",position:{x:-800,y:500},data:a(4361)},{id:"IND_EXPRESSION",type:"databaseTable",position:{x:-800,y:1e3},data:a(9192)},{id:"PART_TABLE",type:"databaseTable",position:{x:0,y:-350},data:a(1247)},{id:"TAB_PARTITION",type:"databaseTable",position:{x:600,y:-350},data:a(7711)},{id:"PART_KEY_COLUMN",type:"databaseTable",position:{x:1200,y:-350},data:a(33)},{id:"SUB_PARTITION",type:"databaseTable",position:{x:600,y:-700},data:a(3492)},{id:"SUBPART_KEY_COLUMN",type:"databaseTable",position:{x:1200,y:-700},data:a(8668)},{id:"PART_INDEX",type:"databaseTable",position:{x:-600,y:-350},data:a(7389)},{id:"IND_PARTITION",type:"databaseTable",position:{x:-600,y:-700},data:a(7402)}],m=[{id:"edge-1",source:"OBJECT",target:"TAB_COL",sourceHandle:"right",targetHandle:"left",label:"1:N"},{id:"edge-2",source:"OBJECT",target:"SEGMENT",sourceHandle:"bottom",targetHandle:"top",label:"1:N"},{id:"edge-3",source:"SEGMENT",target:"EXTENT",sourceHandle:"right",targetHandle:"left",label:"1:N"},{id:"edge-4",source:"DATA_FILE",target:"SEGMENT",sourceHandle:"top",targetHandle:"bottom",label:"1:N"},{id:"edge-5",source:"DATA_FILE",target:"EXTENT",sourceHandle:"top",targetHandle:"bottom",label:"1:N"},{id:"edge-6",source:"TABLE_SPACE",target:"EXTENT",sourceHandle:"top",targetHandle:"bottom",label:"1:N"},{id:"edge-7",source:"TABLE_SPACE",target:"SEGMENT",sourceHandle:"top",targetHandle:"bottom",label:"1:N"},{id:"edge-8",source:"OBJECT",target:"INDEX",sourceHandle:"left",targetHandle:"right",label:"1:N"},{id:"edge-9",source:"INDEX",target:"IND_COLUMN",sourceHandle:"bottom",targetHandle:"top",label:"1:N"},{id:"edge-10",source:"IND_COLUMN",target:"IND_EXPRESSION",sourceHandle:"bottom",targetHandle:"top",label:"1:N"},{id:"edge-11",source:"OBJECT",target:"PART_TABLE",sourceHandle:"top",targetHandle:"bottom",label:"1:N"},{id:"edge-12",source:"PART_TABLE",target:"TAB_PARTITION",sourceHandle:"right",targetHandle:"left",label:"1:N"},{id:"edge-13",source:"TAB_PARTITION",target:"PART_KEY_COLUMN",sourceHandle:"right",targetHandle:"left",label:"1:N"},{id:"edge-14",source:"TAB_PARTITION",target:"SUB_PARTITION",sourceHandle:"top",targetHandle:"bottom",label:"1:N"},{id:"edge-15",source:"TABLE_SPACE",target:"DATA_FILE",sourceHandle:"left",targetHandle:"right",label:"1:N"},{id:"edge-16",source:"PART_INDEX",target:"PART_TABLE",sourceHandle:"right",targetHandle:"left",label:"1:N"},{id:"edge-17",source:"PART_INDEX",target:"INDEX",sourceHandle:"bottom",targetHandle:"top",label:"is a"},{id:"edge-18",source:"SUB_PARTITION",target:"SUBPART_KEY_COLUMN",sourceHandle:"right",targetHandle:"left",label:"1:N"},{id:"edge-19",source:"PART_INDEX",target:"IND_PARTITION",sourceHandle:"top",targetHandle:"bottom",label:"1:N"}];function i(e){let{height:t="35em"}=e;return s.createElement("div",{style:{width:"100%",height:t}},s.createElement(l.Z,{initialNodes:p,initialEdges:m}))}const o={},N="Rendszerkatal\xf3gusok",d={unversionedId:"databases2/system_catalogs",id:"databases2/system_catalogs",title:"Rendszerkatal\xf3gusok",description:"A kapcsol\xf3d\xf3 gyakorlati feladatok megold\xe1sai el\xe9rhet\u0151ek a GitHub repo-ban.",source:"@site/notes/databases2/01_system_catalogs.mdx",sourceDirName:"databases2",slug:"/databases2/system_catalogs",permalink:"/notes/databases2/system_catalogs",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1698333590,formattedLastUpdatedAt:"2023. okt. 26.",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bevezet\xe9s",permalink:"/notes/databases2/"},next:{title:"Adatb\xe1zis objektumok",permalink:"/notes/databases2/database_objects"}},c={},k=[{value:"L\xe1that\xf3s\xe1gi halmazok",id:"l\xe1that\xf3s\xe1gi-halmazok",level:2},{value:"Objektumt\xedpusok",id:"objektumt\xedpusok",level:2},{value:"Specializ\xe1lt objektum n\xe9zetek",id:"specializ\xe1lt-objektum-n\xe9zetek",level:2},{value:"<code>TAB_COLS</code> n\xe9zet",id:"tab_cols-n\xe9zet",level:2},{value:"Rendszerkatal\xf3gusok kapcsolatai",id:"rendszerkatal\xf3gusok-kapcsolatai",level:2}],g={toc:k},u="wrapper";function A(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rendszerkatal\xf3gusok"},"Rendszerkatal\xf3gusok"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A kapcsol\xf3d\xf3 gyakorlati feladatok megold\xe1sai el\xe9rhet\u0151ek a GitHub repo-ban.")),(0,r.kt)("p",null,"Az adatb\xe1zis-kezel\u0151 rendszerek sz\xe1mos olyan t\xe1bl\xe1t \xe9s n\xe9zetet tartalmaznak, melyek az adatb\xe1zis k\xfcl\xf6nb\xf6z\u0151 elemir\u0151l\ntartalmaznak adatokat. Ezeket az Oracle adatb\xe1zis-kezel\u0151 rendszerben ",(0,r.kt)("strong",{parentName:"p"},"rendszerkatal\xf3gus"),"oknak\n(illetve ",(0,r.kt)("strong",{parentName:"p"},"adatsz\xf3t\xe1r n\xe9zet"),"eknek) nevezz\xfck."),(0,r.kt)("p",null,"A rendszerkatal\xf3gusok nevei jellemz\u0151en k\xe9t tagb\xf3l \xe1llnak: egy l\xe1that\xf3s\xe1gi halmaz prefixumb\xf3l\n(az els\u0151 al\xe1h\xfaz\xe1sjelig tart) \xe9s az adatsz\xf3t\xe1r nev\xe9b\u0151l."),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("munder",{parentName:"mrow"},(0,r.kt)("munder",{parentName:"munder"},(0,r.kt)("mtext",{parentName:"munder"},"USER|ALL|DBA"),(0,r.kt)("mo",{parentName:"munder",stretchy:"true"},"\u23df")),(0,r.kt)("mrow",{parentName:"munder"},(0,r.kt)("mtext",{parentName:"mrow"},"l"),(0,r.kt)("mover",{parentName:"mrow",accent:"true"},(0,r.kt)("mtext",{parentName:"mover"},"a"),(0,r.kt)("mo",{parentName:"mover"},"\u02ca")),(0,r.kt)("mtext",{parentName:"mrow"},"that"),(0,r.kt)("mover",{parentName:"mrow",accent:"true"},(0,r.kt)("mtext",{parentName:"mover"},"o"),(0,r.kt)("mo",{parentName:"mover"},"\u02ca")),(0,r.kt)("mtext",{parentName:"mrow"},"s"),(0,r.kt)("mover",{parentName:"mrow",accent:"true"},(0,r.kt)("mtext",{parentName:"mover"},"a"),(0,r.kt)("mo",{parentName:"mover"},"\u02ca")),(0,r.kt)("mtext",{parentName:"mrow"},"g"))),(0,r.kt)("mtext",{parentName:"mrow"},"_"),(0,r.kt)("munder",{parentName:"mrow"},(0,r.kt)("munder",{parentName:"munder"},(0,r.kt)("mtext",{parentName:"munder"},"IND_EXPRESSIONS"),(0,r.kt)("mo",{parentName:"munder",stretchy:"true"},"\u23df")),(0,r.kt)("mrow",{parentName:"munder"},(0,r.kt)("mtext",{parentName:"mrow"},"n"),(0,r.kt)("mover",{parentName:"mrow",accent:"true"},(0,r.kt)("mtext",{parentName:"mover"},"e"),(0,r.kt)("mo",{parentName:"mover"},"\u02ca")),(0,r.kt)("mtext",{parentName:"mrow"},"v")))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\underbrace{\\text{USER|ALL|DBA}}_{\\text{l\xe1that\xf3s\xe1g}}\\text{\\_}\\underbrace{\\text{IND\\_EXPRESSIONS}}_{\\text{n\xe9v}}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4702em",verticalAlign:"-1.7202em"}}),(0,r.kt)("span",{parentName:"span",className:"mord munder"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.75em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-1.4159em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"l"),(0,r.kt)("span",{parentName:"span",className:"mord accent mtight"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6944em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.7em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"a")),(0,r.kt)("span",{parentName:"span",style:{top:"-2.7em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.25em"}},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"\u02ca"))))))),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"that"),(0,r.kt)("span",{parentName:"span",className:"mord accent mtight"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6944em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.7em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"o")),(0,r.kt)("span",{parentName:"span",style:{top:"-2.7em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.25em"}},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"\u02ca"))))))),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord accent mtight"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6944em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.7em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"a")),(0,r.kt)("span",{parentName:"span",style:{top:"-2.7em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.25em"}},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"\u02ca"))))))),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"g"))))),(0,r.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord munder"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.75em"}},(0,r.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-2.102em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"stretchy",style:{height:"0.548em",minWidth:"1.6em"}},(0,r.kt)("span",{parentName:"span",className:"brace-left",style:{height:"0.548em"}},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMinYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z"}))),(0,r.kt)("span",{parentName:"span",className:"brace-center",style:{height:"0.548em"}},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMidYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z"}))),(0,r.kt)("span",{parentName:"span",className:"brace-right",style:{height:"0.548em"}},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMaxYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z"}))))),(0,r.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"USER|ALL|DBA"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.898em"}},(0,r.kt)("span",{parentName:"span"}))))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.7202em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"_")),(0,r.kt)("span",{parentName:"span",className:"mord munder"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-1.3559em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord accent mtight"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6944em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.7em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"e")),(0,r.kt)("span",{parentName:"span",style:{top:"-2.7em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.25em"}},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"\u02ca"))))))),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"v"))))),(0,r.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord munder"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6833em"}},(0,r.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-2.042em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"stretchy",style:{height:"0.548em",minWidth:"1.6em"}},(0,r.kt)("span",{parentName:"span",className:"brace-left",style:{height:"0.548em"}},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMinYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z"}))),(0,r.kt)("span",{parentName:"span",className:"brace-center",style:{height:"0.548em"}},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMidYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z"}))),(0,r.kt)("span",{parentName:"span",className:"brace-right",style:{height:"0.548em"}},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"0.548em",viewBox:"0 0 400000 548",preserveAspectRatio:"xMaxYMin slice"},(0,r.kt)("path",{parentName:"svg",d:"M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z"}))))),(0,r.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"IND_EXPRESSIONS"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.958em"}},(0,r.kt)("span",{parentName:"span"}))))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6441em"}},(0,r.kt)("span",{parentName:"span"})))))))))),(0,r.kt)("h2",{id:"l\xe1that\xf3s\xe1gi-halmazok"},"L\xe1that\xf3s\xe1gi halmazok"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Lek\xe9rdezheti"),(0,r.kt)("th",{parentName:"tr",align:null},"Tartalma"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USER"),(0,r.kt)("td",{parentName:"tr",align:null},"B\xe1rki"),(0,r.kt)("td",{parentName:"tr",align:null},"Felhaszn\xe1l\xf3 tulajdonai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALL"),(0,r.kt)("td",{parentName:"tr",align:null},"B\xe1rki"),(0,r.kt)("td",{parentName:"tr",align:null},"Amit a felhaszn\xe1l\xf3nak joga van megtekinteni")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBA"),(0,r.kt)("td",{parentName:"tr",align:null},"Adatb\xe1zis adminisztr\xe1tor (DBA)"),(0,r.kt)("td",{parentName:"tr",align:null},"Minden")))),(0,r.kt)("h2",{id:"objektumt\xedpusok"},"Objektumt\xedpusok"),(0,r.kt)("p",null,"Az adatb\xe1zis szinte \xf6sszes elem\xe9hez l\xe9tezik rendszerkatal\xf3gus. Ezek felsorol\xe1sa \xe9rtelmetlen lenne ez\xe9rt kezdetben csak\naz egyik legfontosabb katal\xf3gussal (\xe9s annak speci\xe1lis v\xe1ltozataival) fogunk megismerkedni."),(0,r.kt)("p",null,"Ez az ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECTS"),", mely az adatb\xe1zisban szerepl\u0151 objektumokr\xf3l t\xe1rol \xe1ltal\xe1nos inform\xe1ci\xf3kat."),(0,r.kt)("p",null,"Az \xf6sszes adatb\xe1zisbeli objektumot p\xe9ld\xe1ul ",(0,r.kt)("inlineCode",{parentName:"p"},"DBA_OBJECTS")," katal\xf3guson kereszt\xfcl \xe9rhetj\xfck el."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OWNER")),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(30)"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Owner of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OBJECT_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(30)"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUBOBJECT_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(30)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the subobject (for example, partition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OBJECT_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary object number of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATA_OBJECT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary object number of the segment that contains the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"OBJECT_TYPE")),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(19)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the object (such as TABLE, INDEX)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CREATED"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp for the creation of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LAST_DDL_TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT NULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp for the last modification of the object resulting from a DDL statement (including grants and revokes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(20)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp for the specification of the object (character data)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATUS"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(7)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the object (VALID, INVALID, or N/A)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TEMPORARY"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(1)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the object is temporary (the current session can see only data that it placed in this object itself)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GENERATED"),(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR2(1)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the name of this object was system generated (Y) or not (N)")))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"USER")," l\xe1that\xf3s\xe1g eset\xe9n, mivel egy\xe9rtelm\u0171 a tulajdonos szem\xe9lye, ",(0,r.kt)("strong",{parentName:"p"},"nem szerepel")," az ",(0,r.kt)("inlineCode",{parentName:"p"},"OWNER")," oszlop!")),(0,r.kt)("h2",{id:"specializ\xe1lt-objektum-n\xe9zetek"},"Specializ\xe1lt objektum n\xe9zetek"),(0,r.kt)("p",null,"A k\xfcl\xf6nb\xf6z\u0151 t\xedpus\xfa objektumra l\xe9teznek specifikus n\xe9zetek, (pl ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_VIEWS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL_SYNONYMS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DBA_IND_EXPRESSIONS"),")."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"A specifikus n\xe9zetekben ",(0,r.kt)("strong",{parentName:"p"},"nem szerepel")," az ",(0,r.kt)("inlineCode",{parentName:"p"},"OBJECT_TYPE")," oszlop.")),(0,r.kt)("h2",{id:"tab_cols-n\xe9zet"},(0,r.kt)("inlineCode",{parentName:"h2"},"TAB_COLS")," n\xe9zet"),(0,r.kt)("p",null,"K\xfcl\xf6nlegesnek tekinthet\u0151ek a ",(0,r.kt)("inlineCode",{parentName:"p"},"TAB_COLS")," adatsz\xf3t\xe1r n\xe9zetek, melyek az adatb\xe1zisban szerepl\u0151 t\xe1bl\xe1k sorair\xf3l t\xe1rolnak\ninform\xe1ci\xf3kat."),(0,r.kt)("p",null,"A n\xe9zet legfontosabb oszlopai:"),(0,r.kt)("figure",{className:"figure-with-caption"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Oszlop Neve"),(0,r.kt)("th",{parentName:"tr",align:null},"Le\xedr\xe1s"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OWNER"),(0,r.kt)("td",{parentName:"tr",align:null},"Tulajdonos a t\xe1bl\xe1nak, n\xe9zetnek vagy csoportnak")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TABLE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"A t\xe1bla, n\xe9zet vagy csoport neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COLUMN_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Oszlop neve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATA_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Az oszlop adatt\xedpusa")))),(0,r.kt)("figcaption",null,"Forr\xe1s: ",(0,r.kt)("a",{href:"https://docs.oracle.com/cd/E11882_01/server.112/e40402/statviews_2102.htm#REFRN20276"},"Oracle DBMS dokument\xe1ci\xf3"))),(0,r.kt)("h2",{id:"rendszerkatal\xf3gusok-kapcsolatai"},"Rendszerkatal\xf3gusok kapcsolatai"),(0,r.kt)("p",null,"A k\xf6vetkez\u0151 grafikon a k\xfcl\xf6nb\xf6z\u0151 rendszerkatal\xf3gusok k\xf6zti kapcsolatokat (\xe9s az ezek kialak\xedt\xe1s\xe1hoz\nsz\xfcks\xe9ges \xf6sszekapcsol\xe1sok felt\xe9teleit) mutatja:"),(0,r.kt)(i,{mdxType:"AllViewsFlow"}))}A.isMDXComponent=!0},806:e=>{e.exports=JSON.parse('{"name":"DATA_FILES","columns":[{"name":"FILE_NAME","description":"Az adatf\xe1jl el\xe9r\xe9si \xfatja \xe9s neve.","type":"String"},{"name":"FILE_ID","description":"Az adatf\xe1jl azonos\xedt\xf3ja.","type":"Number"},{"name":"TABLESPACE_NAME","description":"Az adatf\xe1jl t\xe1blat\xe9r\xe9nek neve.","type":"String"},{"name":"BYTES","description":"Az adatf\xe1jl m\xe9rete b\xe1jtban.","type":"Number"},{"name":"BLOCKS","description":"Az adatf\xe1jl m\xe9rete Oracle blokkokban.","type":"Number"},{"name":"STATUS","description":"Az adatf\xe1jl \xe1llapota (pl. AVAILABLE, INVALID).","type":"String"},{"name":"AUTOEXTENSIBLE","description":"Megadja, hogy az adatf\xe1jl automatikusan b\u0151v\xfclhet-e.","type":"Boolean"},{"name":"MAXBYTES","description":"Az adatf\xe1jl maxim\xe1lis m\xe9rete b\xe1jtban.","type":"Number"},{"name":"MAXBLOCKS","description":"Az adatf\xe1jl maxim\xe1lis m\xe9rete adatb\xe1zis blokkokban.","type":"Number"}]}')},6472:e=>{e.exports=JSON.parse('{"name":"EXTENT","columns":[{"name":"OWNER","description":"a tartalmaz\xf3 szegmens tulajdonosa","type":"String"},{"name":"SEGMENT_NAME","description":"a tartalmaz\xf3 szegmens neve","type":"String"},{"name":"SEGMENT_TYPE","description":"a tartalmaz\xf3 szegmens t\xedpusa","type":"String"},{"name":"TABLESPACE_NAME","description":"a ter\xfclet t\xe1blat\xe9r\xe9nek neve","type":"String"},{"name":"FILE_ID","description":"a ter\xfclet blokkjait tartalmaz\xf3 f\xe1jl azonos\xedt\xf3ja","type":"Number"},{"name":"BLOCK_ID","description":"a ter\xfclet kezd\u0151blokkj\xe1nak sorsz\xe1ma","type":"Number"},{"name":"BYTES","description":"a ter\xfclet m\xe9rete b\xe1jtban","type":"Number"},{"name":"BLOCKS","description":"a ter\xfclet m\xe9rete blokkokban","type":"Number"},{"name":"EXTENT_ID","description":"a ter\xfclet szegmensen bel\xfcli azonos\xedt\xf3ja","type":"Number"}]}')},4361:e=>{e.exports=JSON.parse('{"name":"IND_COLUMN","columns":[{"name":"INDEX_OWNER","description":"az index tulajdonososa","type":"VARCHAR2"},{"name":"INDEX_NAME","description":"az index neve","type":"VARCHAR2"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"VARCHAR2"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"VARCHAR2"},{"name":"COLUMN_NAME","description":"az index oszlop\xe1nak neve","type":"VARCHAR2"},{"name":"COLUMN_POSITION","description":"az oszlop sorsz\xe1ma az indexen bel\xfcl","type":"NUMBER"},{"name":"DESCEND","description":"DESC ha az oszlop cs\xf6kken\u0151en szerepel az indexben (k\xfcl\xf6nben ASC)","type":"VARCHAR2"}]}')},9192:e=>{e.exports=JSON.parse('{"name":"IND_EXPRESSIONS","columns":[{"name":"INDEX_OWNER","description":"az index tulajdonososa","type":"String"},{"name":"INDEX_NAME","description":"az index neve","type":"String"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"String"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"String"},{"name":"COLUMN_EXPRESSION","description":"a f\xfcggv\xe9ny","type":"String"},{"name":"COLUMN_POSITION","description":"az oszlop sorsz\xe1ma az indexen bel\xfcl","type":"Number"}]}')},7402:e=>{e.exports=JSON.parse('{"name":"IND_PARTITION","columns":[{"type":"VARCHAR2","name":"INDEX_OWNER","description":"az index tulajdonosa"},{"type":"VARCHAR2","name":"INDEX_NAME","description":"az index neve"},{"type":"VARCHAR2","name":"COMPOSITE","description":"YES, ha lok\xe1lis index, k\xfcl\xf6nben NO"},{"type":"VARCHAR2","name":"PARTITION_NAME","description":"Part\xedci\xf3 neve"},{"type":"NUMBER","name":"SUBPARTITION_COUNT","description":"Alpart\xedci\xf3k sz\xe1ma"}]}')},4934:e=>{e.exports=JSON.parse('{"name":"INDEXES","columns":[{"name":"OWNER","description":"az index tulajdonososa","type":"String"},{"name":"INDEX_NAME","description":"az index neve","type":"String"},{"name":"TABLE_OWNER","description":"az indexelt objektum tulajdonosa","type":"String"},{"name":"TABLE_NAME","description":"az indexelt objektum neve","type":"String"},{"name":"TABLE_TYPE","description":"az indexelt objektum neve t\xedpusa","type":"String"},{"name":"UNIQUENESS","description":"egyedi-e az index","type":"String"},{"name":"COMPRESSION","description":"haszn\xe1l-e t\xf6m\xf6r\xedt\xe9st","type":"String"},{"name":"PREFIX_LENGTH","description":"t\xf6m\xf6r\xedt\xe9sn\xe9l a prefix oszlopok sz\xe1ma","type":"Number"},{"name":"TABLESPACE_NAME","description":"t\xe1blat\xe9r neve","type":"String"}]}')},6323:e=>{e.exports=JSON.parse('{"name":"OBJECT","columns":[{"name":"OWNER","description":"Az objektum tulajdonosa","type":"VARCHAR2"},{"name":"OBJECT_NAME","description":"Az objektum neve","type":"VARCHAR2"},{"name":"SUBOBJECT_NAME","description":"Alobjektum neve (pl. part\xedci\xf3)","type":"VARCHAR2"},{"name":"OBJECT_ID","description":"Objektum azonos\xedt\xf3ja az adatsz\xf3t\xe1rban","type":"NUMBER"},{"name":"DATA_OBJECT_ID","description":"Az objektum szegmens\xe9nek azonos\xedt\xf3ja adatsz\xf3t\xe1rban","type":"NUMBER"},{"name":"OBJECT_TYPE","description":"Objektum t\xedpusa (pl. TABLE, INDEX)","type":"VARCHAR2"},{"name":"CREATED","description":"L\xe9trehoz\xe1s id\u0151b\xe9lyege","type":"DATE"},{"name":"LAST_DDL_TIME","description":"Utols\xf3 m\xf3dos\xedt\xe1s id\u0151b\xe9lyege","type":"DATE"},{"name":"GENERATED","description":"Rendszergener\xe1lt-e (Y vagy N)","type":"VARCHAR2"}]}')},7389:e=>{e.exports=JSON.parse('{"name":"PART_INDEX","columns":[{"type":"VARCHAR2","name":"OWNER","description":"az index tulajdonosa"},{"type":"VARCHAR2","name":"INDEX_NAME","description":"az index neve"},{"type":"VARCHAR2","name":"TABLE_NAME","description":"a part\xedcion\xe1lt t\xe1bla neve"},{"type":"varchar2","name":"PARTITIONING_TYPE","description":"Part. strat\xe9gia"},{"type":"varchar2","name":"SUB_PARTITIONING_TYPE","description":"Alpart. strat\xe9gia"},{"type":"number","name":"PARTITION_COUNT","description":"Part\xedci\xf3k sz\xe1ma"}]}')},33:e=>{e.exports=JSON.parse('{"name":"PART_KEY_COLUMN","columns":[{"type":"VARCHAR2","name":"OWNER","description":"A part\xedci\xf3 tulajdonosa"},{"type":"VARCHAR2","name":"NAME","description":"A part\xedci\xf3 neve"},{"type":"CHAR","name":"OBJECT_TYPE","description":"TABLE vagy INDEX"},{"type":"VARCHAR2","name":"COLUMN_NAME","description":"Oszlop neve"}]}')},1247:e=>{e.exports=JSON.parse('{"name":"PART_TABLE","columns":[{"type":"varchar2","name":"OWNER","description":"Part\xedcion\xe1lt T\xe1bla tulajdonosa"},{"type":"varchar2","name":"TABLE_NAME","description":"Part\xedcion\xe1lt t\xe1bla neve"},{"type":"varchar2","name":"PARTITIONING_TYPE","description":"P. strat\xe9gia t\xedpusa"},{"type":"varchar2","name":"SUB_PARTITIONING_TYPE","description":"Alp. strat\xe9gia t\xedpusa"},{"type":"number","name":"PARTITION_COUNT","description":"Part\xedci\xf3k sz\xe1ma"}]}')},7159:e=>{e.exports=JSON.parse('{"name":"SEGMENT","columns":[{"name":"OWNER","description":"A szegmens tulajdonos\xe1nak neve.","type":"field"},{"name":"SEGMENT_NAME","description":"A szegmens neve.","type":"field"},{"name":"PARTITION_NAME","description":"A szegmens part\xedci\xf3j\xe1nak neve (ha van).","type":"field"},{"name":"SEGMENT_TYPE","description":"A szegmens t\xedpusa (pl., TABLE, INDEX).","type":"field"},{"name":"TABLESPACE_NAME","description":"A szegmenst tartalmaz\xf3 t\xe1blat\xe9r neve.","type":"field"},{"name":"BYTES","description":"A szegmens m\xe9rete b\xe1jtban.","type":"field"},{"name":"BLOCKS","description":"A szegmens m\xe9rete Oracle blokkokban.","type":"field"},{"name":"EXTENTS","description":"A szegmens m\xe9rete ter\xfcletekben.","type":"field"}]}')},3492:e=>{e.exports=JSON.parse('{"name":"SUB_PARTITION","columns":[{"type":"VARCHAR2","name":"TABLE_OWNER","description":"T\xe1bla tulajdonosa"},{"type":"VARCHAR2","name":"TABLE_NAME","description":"Part\xedcion\xe1lt t\xe1bla neve"},{"type":"VARCHAR2","name":"PARTITION_NAME","description":"Sz\xfcl\u0151part\xedci\xf3 neve"},{"type":"VARCHAR2","name":"SUBPARTITION_NAME","description":"Alpart\xedci\xf3 neve"}]}')},8668:e=>{e.exports=JSON.parse('{"name":"SUBPART_KEY_COLUMN","columns":[{"name":"OWNER","type":"VARCHAR2 ","description":""},{"name":"NAME","type":"VARCHAR2 ","description":""},{"name":"OBJECT_TYPE","type":"CHAR","description":""},{"name":"COLUMN_NAME","type":"VARCHAR2 ","description":""}]}')},4941:e=>{e.exports=JSON.parse('{"name":"TAB_COL","columns":[{"name":"OWNER","description":"Tulajdonos a t\xe1bl\xe1nak, n\xe9zetnek vagy csoportnak","type":"VARCHAR2"},{"name":"TABLE_NAME","description":"A t\xe1bla, n\xe9zet vagy csoport neve","type":"VARCHAR2"},{"name":"COLUMN_NAME","description":"Oszlop neve","type":"VARCHAR2"},{"name":"DATA_TYPE","description":"Az oszlop adatt\xedpusa","type":"VARCHAR2"}]}')},7711:e=>{e.exports=JSON.parse('{"name":"TAB_PARTITIONS","columns":[{"type":"VARCHAR2","name":"TABLE_OWNER","description":"T\xe1bla tulajdonosa"},{"type":"VARCHAR2","name":"TABLE_NAME","description":"Part\xedcion\xe1lt t\xe1bla neve"},{"type":"VARCHAR2","name":"COMPOSITE","description":"YES, ha van alpart\xedci\xf3, k\xfcl\xf6nben NO"},{"type":"VARCHAR2","name":"PARTITION_NAME","description":"Part\xedci\xf3 neve"},{"type":"NUMBER","name":"SUBPARTITION_COUNT","description":"Alpart\xedci\xf3k sz\xe1ma"}]}')},4822:e=>{e.exports=JSON.parse('{"name":"TABLE_SPACE","columns":[{"name":"TABLESPACE_NAME","description":"A t\xe1blat\xe9r neve.","type":"String"},{"name":"BLOCK_SIZE","description":"A t\xe1blat\xe9r blokkjainak m\xe9rete b\xe1jtban.","type":"Number"},{"name":"CONTENTS","description":"A t\xe1blat\xe9r adatainak jellege. (pl. ideiglenes, \xe1lland\xf3)","type":"String"},{"name":"STATUS","description":"A t\xe1blat\xe9r \xe1llapota (pl., ONLINE, OFFLINE).","type":"String"}]}')}}]);