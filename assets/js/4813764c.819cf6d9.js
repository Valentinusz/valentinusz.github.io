"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[8955],{2210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"bigdata/spark/dataframe/creation","title":"L\xe9trehoz\xe1s","description":"DataFrame-et az Spark munkamenet read adattagj\xe1nak met\xf3dusain kereszt\xfcl tudunk l\xe9trehozni.","source":"@site/notes/bigdata/02_spark/dataframe/01_creation.mdx","sourceDirName":"bigdata/02_spark/dataframe","slug":"/bigdata/spark/dataframe/creation","permalink":"/notes/bigdata/spark/dataframe/creation","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Boda B\xe1lint","lastUpdatedAt":1699279639000,"sidebarPosition":1,"frontMatter":{},"sidebar":"notesSidebar","previous":{"title":"DataFrame","permalink":"/notes/bigdata/spark/dataframe/"},"next":{"title":"DataFrame m\u0171veletek","permalink":"/notes/bigdata/spark/dataframe/operations"}}');var r=t(4848),s=t(8453);const l={},d="L\xe9trehoz\xe1s",i={},c=[{value:"CSV",id:"csv",level:2},{value:"JSON",id:"json",level:2},{value:"Sz\xf6vegf\xe1jl",id:"sz\xf6vegf\xe1jl",level:2},{value:"Rel\xe1ci\xf3s adatb\xe1zis",id:"rel\xe1ci\xf3s-adatb\xe1zis",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"l\xe9trehoz\xe1s",children:"L\xe9trehoz\xe1s"})}),"\n",(0,r.jsxs)(n.p,{children:["DataFrame-et az Spark munkamenet ",(0,r.jsx)(n.code,{children:"read"})," adattagj\xe1nak met\xf3dusain kereszt\xfcl tudunk l\xe9trehozni."]}),"\n",(0,r.jsx)(n.h2,{id:"csv",children:"CSV"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df = spark.read.csv('dolgozo.csv')\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ezzel l\xe9trej\xf6tt a k\xf6vetkez\u0151 dataframe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"DataFrame[_c0: string, _c1: string, _c2: string, _c3: string, _c4: string, _c5: string, _c6: string, _c7: string]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A dataframe tartalm\xe1t a ",(0,r.jsx)(n.code,{children:"show([n])"})," met\xf3dussal tudjuk megjelen\xedteni."]}),"\n",(0,r.jsx)("div",{className:"show-table",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"_c0"}),(0,r.jsx)("th",{children:"_c1"}),(0,r.jsx)("th",{children:"_c2"}),(0,r.jsx)("th",{children:"_c3"}),(0,r.jsx)("th",{children:"_c4"}),(0,r.jsx)("th",{children:"_c5"}),(0,r.jsx)("th",{children:"_c6"}),(0,r.jsx)("th",{children:"_c7"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"DKOD"}),(0,r.jsx)("td",{children:"DNEV"}),(0,r.jsx)("td",{children:"FOGLALKOZAS"}),(0,r.jsx)("td",{children:"FONOKE"}),(0,r.jsx)("td",{children:"BELEPES"}),(0,r.jsx)("td",{children:"FIZETES"}),(0,r.jsx)("td",{children:"JUTALEK"}),(0,r.jsx)("td",{children:"OAZON"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"7839"}),(0,r.jsx)("td",{children:"KING"}),(0,r.jsx)("td",{children:"PRESIDENT"}),(0,r.jsx)("td",{children:"0000"}),(0,r.jsx)("td",{children:"81-NOV-17"}),(0,r.jsx)("td",{children:"5000"}),(0,r.jsx)("td",{children:"0"}),(0,r.jsx)("td",{children:"10"})]})]}),(0,r.jsxs)("caption",{children:[(0,r.jsx)(n.code,{children:"df.show(2)"})," eredm\xe9nye"]})]})}),"\n",(0,r.jsx)(n.p,{children:"Nem felt\xe9tlen ezt az eredm\xe9nyt v\xe1rtuk. Adatk\xe9nt ker\xfclt \xe9rtelmez\xe9sre a fejl\xe9c \xe9s a t\xedpusok sem megfelel\u0151ek."}),"\n",(0,r.jsxs)(n.p,{children:["A bet\xf6lt\xe9s el\u0151tt az ",(0,r.jsx)(n.code,{children:"option()"})," met\xf3dus l\xe1ncol\xe1s\xe1val tudjuk konfigur\xe1lni a f\xe1jlolvas\xe1st."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"df = (spark.read\n      .option('header', True) # els\u0151 sor fejl\xe9c\n      .option('inferschema', True) # s\xe9ma kik\xf6vetkeztet\xe9se\n      .csv('dolgozo.csv'))\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"df.printSchema()"})," met\xf3dush\xedv\xe1ssal le tudjuk k\xe9rne a beolvasott adat s\xe9m\xe1j\xe1t."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"root\n |-- DKOD: integer (nullable = true)\n |-- DNEV: string (nullable = true)\n |-- FOGLALKOZAS: string (nullable = true)\n |-- FONOKE: integer (nullable = true)\n |-- BELEPES: string (nullable = true)\n |-- FIZETES: integer (nullable = true)\n |-- JUTALEK: integer (nullable = true)\n |-- OAZON: integer (nullable = true)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Az ",(0,r.jsx)(n.code,{children:"pyspark.sql.types"})," csomag t\xedpusaival lehet\u0151s\xe9g\xfcbk van manu\xe1lisan fel\xe9p\xedteni a s\xe9m\xe1t."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"from pyspark.sql.types import StringType,StructType, StructField, IntegerType\n\nworkerSchema = StructType([\n    StructField(name='DKOD', dataType=IntegerType(), nullable=False), # keyword megad\xe1s\n    StructField('DNEV', StringType()), # poz\xedcion\xe1lis megad\xe1s\n    StructField('FOGLALKOZAS', StringType()),\n    StructField('FONOKE', IntegerType()),\n    StructField('BELEPES', StringType()),\n    StructField('FIZETES', IntegerType()),\n    StructField('JUTALEK', IntegerType()),\n    StructField('OAZON', IntegerType()),\n])\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["CSV f\xe1jlok eset\xe9n a ",(0,r.jsx)(n.code,{children:"nullable=False"}),"-nak nincs hat\xe1sa."]})}),"\n",(0,r.jsx)(n.h2,{id:"json",children:"JSON"}),"\n",(0,r.jsx)(n.p,{children:"Lehet\u0151s\xe9g\xfcnk van JSON alapj\xe1n beolvasni. Mivel a JSON minden rekord eset\xe9n tartalmazza a fejl\xe9cet ez\xe9rt azzal sosem kell\nt\xf6r\u0151dn\xfcnk."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"d_json = spark.read.option('multiline', True).json('dolgozo.json')\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"Az alap JSON beolvas\xe1si strat\xe9gia a JSON Lines form\xe1tum. Ez a JSON-nek egy olyan v\xe1ltozata, ahol minden rekord egy sor."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"lines",children:'{"name":"group_1", "value":5}\n{"name":"group_1", "value":6}\n{"name":"group_3", "value":7}\n{"name":"group_2", "value":3}\n'})}),(0,r.jsxs)(n.p,{children:["A rendes json form\xe1tum haszn\xe1lat\xe1hoz meg kell adni a ",(0,r.jsx)(n.code,{children:"multiline"})," opci\xf3t, ahogy azt az el\u0151bbi k\xf3dr\xe9szlet eset\xe9n is\nl\xe1ttuk."]})]}),"\n",(0,r.jsx)(n.h2,{id:"sz\xf6vegf\xe1jl",children:"Sz\xf6vegf\xe1jl"}),"\n",(0,r.jsx)(n.p,{children:"Lehet\u0151s\xe9g\xfcnk van sz\xf6vegf\xe1jlokat megnyitni. Ekkor a DataFrame egyetlen oszlopb\xf3l fog \xe1llni, minden rekord a sz\xf6vegf\xe1jl\nadott sor\xe1t t\xe1rolja el."}),"\n",(0,r.jsx)(n.p,{children:"P\xe9ld\xe1ul a k\xf6vetkez\u0151 k\xf3d eset\xe9n."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"df1 = spark.read.text('dolgozo.csv')\ndf1.show(2)\n"})}),"\n",(0,r.jsx)("div",{className:"show-table",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"value"})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"KOD,DNEV,FOGLALK..."})}),(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:'"7839,""KING"",""PRES..."'})})]})]})}),"\n",(0,r.jsx)(n.h2,{id:"rel\xe1ci\xf3s-adatb\xe1zis",children:"Rel\xe1ci\xf3s adatb\xe1zis"}),"\n",(0,r.jsx)(n.p,{children:"A dataframe-et ak\xe1r adatb\xe1zisb\xf3l is el\u0151\xe1ll\xedthatjuk. Ennek megmutat\xe1sa nem c\xe9lja a t\xe1rgynak, s\u0151t, mivel adatb\xe1zis-kezel\u0151\nrendszerenk\xe9nt a konfigur\xe1l\xe1si folyamat elt\xe9rhet \xe9n sem tudok megfelel\u0151 \xfatmutat\xe1st adni."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var a=t(6540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);