"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[2457],{310:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(5893),s=t(1151);const r={},i="DataFrame",o={id:"bigdata/spark/dataframe/index",title:"DataFrame",description:"A DataFrame egy az RDD-n\xe9l magasabb API, mely az adatok manipul\xe1l\xe1s\xe1t ORM \xe9s SQL szer\u0171 interf\xe9szen kereszt\xfcl teszi",source:"@site/notes/bigdata/spark/dataframe/index.mdx",sourceDirName:"bigdata/spark/dataframe",slug:"/bigdata/spark/dataframe/",permalink:"/notes/bigdata/spark/dataframe/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Boda B\xe1lint",lastUpdatedAt:1699042492,formattedLastUpdatedAt:"2023. nov. 3.",frontMatter:{},sidebar:"notesSidebar",previous:{title:"Akci\xf3k",permalink:"/notes/bigdata/spark/rdd/actions"},next:{title:"L\xe9trehoz\xe1s",permalink:"/notes/bigdata/spark/dataframe/creation"}},l={},d=[{value:"Inicializ\xe1l\xe1s",id:"inicializ\xe1l\xe1s",level:2}];function c(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"dataframe",children:"DataFrame"}),"\n",(0,n.jsx)(a.p,{children:"A DataFrame egy az RDD-n\xe9l magasabb API, mely az adatok manipul\xe1l\xe1s\xe1t ORM \xe9s SQL szer\u0171 interf\xe9szen kereszt\xfcl teszi\nlehet\u0151v\xe9."}),"\n",(0,n.jsx)(a.p,{children:"A DataFrame struktur\xe1lt adatok (pl. JSON, CSV, rel\xe1ci\xf3s adatb\xe1zis rekordjai) feldolgoz\xe1s\xe1ra van tervezve."}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"A DataFrame teljes m\xe9rt\xe9kben az RDD API-ra \xe9p\xfcl."})}),"\n",(0,n.jsx)(a.h2,{id:"inicializ\xe1l\xe1s",children:"Inicializ\xe1l\xe1s"}),"\n",(0,n.jsxs)(a.p,{children:["A DataFrame API haszn\xe1lat\xe1hoz egy ",(0,n.jsx)(a.code,{children:"SparkSession"})," objektumot kell l\xe9trehozni."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"from pyspark.sql import  *\nfrom pyspark.sql.functions import *\n\nspark = SparkSession.builder.getOrCreate()\n"})}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["A ",(0,n.jsx)(a.code,{children:"from pyspark.sql.functions import *"})," utas\xedt\xe1s a munkamenet l\xe9trehoz\xe1s\xe1hoz nem sz\xfcks\xe9ges, de a k\xe9s\u0151bbiekben sz\xfcks\xe9ges\nlesz csomag elemeire."]})}),"\n",(0,n.jsxs)(a.p,{children:["A ",(0,n.jsx)(a.code,{children:"builder"})," automatikusan l\xe9tre fogja hozni, a spark kontextust \xe9s a spark konfigur\xe1ci\xf3t, melyeket a ",(0,n.jsx)(a.code,{children:"sparkContext"})," \xe9s\n",(0,n.jsx)(a.code,{children:"conf"})," adattagokon \xe1t el is tudunk \xe9rni."]})]})}function p(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>i});var n=t(7294);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);