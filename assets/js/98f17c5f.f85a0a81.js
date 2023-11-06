"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[4821],{5137:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var t=s(5893),r=s(1151);const d={},l="Spark SQL",i={id:"bigdata/spark/dataframe/sql",title:"Spark SQL",description:"A dataframe-ek az SQL nyelv szintaktik\xe1j\xe1t k\xf6vet\u0151 utas\xedt\xe1sokon kereszt\xfcl is manipul\xe1lhat\xf3k.",source:"@site/notes/bigdata/02_spark/dataframe/03_sql.mdx",sourceDirName:"bigdata/02_spark/dataframe",slug:"/bigdata/spark/dataframe/sql",permalink:"/notes/bigdata/spark/dataframe/sql",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Boda B\xe1lint",lastUpdatedAt:1699279639,formattedLastUpdatedAt:"2023. nov. 6.",sidebarPosition:3,frontMatter:{},sidebar:"notesSidebar",previous:{title:"DataFrame m\u0171veletek",permalink:"/notes/bigdata/spark/dataframe/operations"},next:{title:"Bevezet\xe9s",permalink:"/notes/databases2/"}},c={},a=[{value:"Feladatok",id:"feladatok",level:2},{value:"Melyik orsz\xe1gban \xe9l a legt\xf6bb v\xe1s\xe1rl\xf3?",id:"melyik-orsz\xe1gban-\xe9l-a-legt\xf6bb-v\xe1s\xe1rl\xf3",level:4},{value:"Adjuk meg azt az 5 orsz\xe1got, amelyekb\u0151l a legt\xf6bb bev\xe9tel sz\xe1rmazik!",id:"adjuk-meg-azt-az-5-orsz\xe1got-amelyekb\u0151l-a-legt\xf6bb-bev\xe9tel-sz\xe1rmazik",level:4},{value:"Melyik term\xe9k termelte a legnagyobb bev\xe9telt?",id:"melyik-term\xe9k-termelte-a-legnagyobb-bev\xe9telt",level:4},{value:"Melyik a legn\xe9pszer\u0171bb term\xe9k",id:"melyik-a-legn\xe9pszer\u0171bb-term\xe9k",level:4},{value:"\xc1tlagosan h\xe1ny k\xfcl\xf6nb\xf6z\u0151 term\xe9ket vesz egy v\xe1s\xe1rl\xf3 egy v\xe1s\xe1rl\xe1s sor\xe1n?",id:"\xe1tlagosan-h\xe1ny-k\xfcl\xf6nb\xf6z\u0151-term\xe9ket-vesz-egy-v\xe1s\xe1rl\xf3-egy-v\xe1s\xe1rl\xe1s-sor\xe1n",level:4},{value:"Melyik tranzakci\xf3 sor\xe1n v\xe1s\xe1rolt\xe1k a legt\xf6bb k\xfcl\xf6nb\xf6z\u0151 term\xe9ket \xe9s h\xe1nyat?",id:"melyik-tranzakci\xf3-sor\xe1n-v\xe1s\xe1rolt\xe1k-a-legt\xf6bb-k\xfcl\xf6nb\xf6z\u0151-term\xe9ket-\xe9s-h\xe1nyat",level:4}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"spark-sql",children:"Spark SQL"}),"\n",(0,t.jsx)(n.p,{children:"A dataframe-ek az SQL nyelv szintaktik\xe1j\xe1t k\xf6vet\u0151 utas\xedt\xe1sokon kereszt\xfcl is manipul\xe1lhat\xf3k."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from pyspark.sql import  *\nfrom pyspark.sql.functions import *\n\nspark = SparkSession.builder.getOrCreate()\n\ndf = spark.read.option('header', True).csv('dolgozo.csv')\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ahhoz, hogy egy dataframe-et lek\xe9rdez\xe9sekben haszn\xe1lni tudjunk, egy n\xe9zetet kell l\xe9trehozni:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"df.createOrReplaceTempView('dolgozo')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A met\xf3dush\xedv\xe1st k\xf6vet\u0151en a ",(0,t.jsx)(n.code,{children:"context"})," objektum m\xe1r ismeri milyen dataframe-et \xe9rt\xfcnk ",(0,t.jsx)(n.code,{children:"dolgozo"})," n\xe9ven. \xcdgy m\xe1r tudunk SQL\nlek\xe9rdez\xe9seket v\xe9gezni."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"spark.sql('SELECT * FROM dolgozo').show(3)\n"})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"DKOD"}),(0,t.jsx)(n.th,{children:"DNEV"}),(0,t.jsx)(n.th,{children:"FOGLALKOZAS"}),(0,t.jsx)(n.th,{children:"FONOKE"}),(0,t.jsx)(n.th,{children:"BELEPES"}),(0,t.jsx)(n.th,{children:"FIZETES"}),(0,t.jsx)(n.th,{children:"JUTALEK"}),(0,t.jsx)(n.th,{children:"OAZON"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7839"}),(0,t.jsx)(n.td,{children:"KING"}),(0,t.jsx)(n.td,{children:"PRESIDENT"}),(0,t.jsx)(n.td,{children:"0000"}),(0,t.jsx)(n.td,{children:"81-NOV-17"}),(0,t.jsx)(n.td,{children:"5000"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7698"}),(0,t.jsx)(n.td,{children:"BLAKE"}),(0,t.jsx)(n.td,{children:"MANAGER"}),(0,t.jsx)(n.td,{children:"7839"}),(0,t.jsx)(n.td,{children:"81-MAY-01"}),(0,t.jsx)(n.td,{children:"2850"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7782"}),(0,t.jsx)(n.td,{children:"CLARK"}),(0,t.jsx)(n.td,{children:"MANAGER"}),(0,t.jsx)(n.td,{children:"7839"}),(0,t.jsx)(n.td,{children:"81-JUN-09"}),(0,t.jsx)(n.td,{children:"2450"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"10"})]})]})]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Fontos, hogy ezek nem t\xe9nyleges SQL k\xe9r\xe9sek, puszt\xe1n a szintaxis azonos."})}),"\n",(0,t.jsx)(n.p,{children:"A lek\xe9rdez\xe9sek tagol\xe1s\xe1hoz haszn\xe1lhatunk t\xf6bbsoros string-eket."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"spark.sql(\n    '''\n    SELECT OAZON, COUNT(*)\n    FROM dolgozo\n    GROUP BY OAZON\n    '''\n).show()\n"})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"OAZON"}),(0,t.jsx)(n.th,{children:"count(1)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"4"})]})]})]})}),"\n",(0,t.jsx)(n.p,{children:"A programozott \xe9s az SQL megold\xe1s \xe1ltal\xe1ban ekvivalens."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"df.groupBy(df.OAZON).agg(count('*')).sameSemantics(spark.sql('SELECT OAZON, COUNT(*) FROM dolgozo GROUP BY OAZON'))\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"> True\n"})}),"\n",(0,t.jsx)(n.h2,{id:"feladatok",children:"Feladatok"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"rdf = spark.read.option('header', True).option('inferSchema', True).csv('online_retail_data.csv')\n\nrdf.createOrReplaceTempView('retail')\n\nspark.sql('SELECT * FROM retail LIMIT 5').show()\n"})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"InvoiceNo"}),(0,t.jsx)(n.th,{children:"StockCode"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Quantity"}),(0,t.jsx)(n.th,{children:"InvoiceDate"}),(0,t.jsx)(n.th,{children:"UnitPrice"}),(0,t.jsx)(n.th,{children:"CustomerID"}),(0,t.jsx)(n.th,{children:"Country"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"536365"}),(0,t.jsx)(n.td,{children:"85123A"}),(0,t.jsx)(n.td,{children:"WHITE HANGING HEA..."}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"01/12/2010 8:26"}),(0,t.jsx)(n.td,{children:"2.55"}),(0,t.jsx)(n.td,{children:"17850"}),(0,t.jsx)(n.td,{children:"United Kingdom"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"536365"}),(0,t.jsx)(n.td,{children:"71053"}),(0,t.jsx)(n.td,{children:"WHITE METAL LANTERN"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"01/12/2010 8:26"}),(0,t.jsx)(n.td,{children:"3.39"}),(0,t.jsx)(n.td,{children:"17850"}),(0,t.jsx)(n.td,{children:"United Kingdom"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"536365"}),(0,t.jsx)(n.td,{children:"84406B"}),(0,t.jsx)(n.td,{children:"CREAM CUPID HEART..."}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"01/12/2010 8:26"}),(0,t.jsx)(n.td,{children:"2.75"}),(0,t.jsx)(n.td,{children:"17850"}),(0,t.jsx)(n.td,{children:"United Kingdom"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"536365"}),(0,t.jsx)(n.td,{children:"84029G"}),(0,t.jsx)(n.td,{children:"KNITTED UNION FLA..."}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"01/12/2010 8:26"}),(0,t.jsx)(n.td,{children:"3.39"}),(0,t.jsx)(n.td,{children:"17850"}),(0,t.jsx)(n.td,{children:"United Kingdom"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"536365"}),(0,t.jsx)(n.td,{children:"84029E"}),(0,t.jsx)(n.td,{children:"RED WOOLLY HOTTIE..."}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"01/12/2010 8:26"}),(0,t.jsx)(n.td,{children:"3.39"}),(0,t.jsx)(n.td,{children:"17850"}),(0,t.jsx)(n.td,{children:"United Kingdom"})]})]})]})}),"\n",(0,t.jsx)(n.h4,{id:"melyik-orsz\xe1gban-\xe9l-a-legt\xf6bb-v\xe1s\xe1rl\xf3",children:"Melyik orsz\xe1gban \xe9l a legt\xf6bb v\xe1s\xe1rl\xf3?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'spark.sql(\n    """\n    SELECT Country, COUNT(DISTINCT CustomerID) as c\n    FROM retail\n    GROUP BY Country\n    ORDER BY c DESC\n    LIMIT 1\n    """\n).show()\n'})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Country"}),(0,t.jsx)(n.th,{children:"c"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"United Kingdom"}),(0,t.jsx)(n.td,{children:"3950"})]})})]})}),"\n",(0,t.jsx)(n.h4,{id:"adjuk-meg-azt-az-5-orsz\xe1got-amelyekb\u0151l-a-legt\xf6bb-bev\xe9tel-sz\xe1rmazik",children:"Adjuk meg azt az 5 orsz\xe1got, amelyekb\u0151l a legt\xf6bb bev\xe9tel sz\xe1rmazik!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'spark.sql(\n    """\n    SELECT Country, SUM(Quantity * UnitPrice) as p\n    FROM retail\n    GROUP BY Country\n    ORDER BY p DESC\n    LIMIT 5\n    """\n).show()\n'})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Country"}),(0,t.jsx)(n.th,{children:"p"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"United Kingdom"}),(0,t.jsx)(n.td,{children:"8208343.204000185"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Netherlands"}),(0,t.jsx)(n.td,{children:"284661.54000000004"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"EIRE"}),(0,t.jsx)(n.td,{children:"263276.82000000024"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Germany"}),(0,t.jsx)(n.td,{children:"221698.2099999999"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"France"}),(0,t.jsx)(n.td,{children:"197463.5900000001"})]})]})]})}),"\n",(0,t.jsx)(n.h4,{id:"melyik-term\xe9k-termelte-a-legnagyobb-bev\xe9telt",children:"Melyik term\xe9k termelte a legnagyobb bev\xe9telt?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'spark.sql(\n    """\n    SELECT StockCode, Description, SUM(Quantity * UnitPrice) AS p\n    FROM retail\n    GROUP BY StockCode, Description\n    ORDER BY p DESC LIMIT 1\n    """\n).show()\n'})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"StockCode"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"p"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DOT"}),(0,t.jsx)(n.td,{children:"DOTCOM POSTAGE"}),(0,t.jsx)(n.td,{children:"206245.47999999998"})]})})]})}),"\n",(0,t.jsx)(n.h4,{id:"melyik-a-legn\xe9pszer\u0171bb-term\xe9k",children:"Melyik a legn\xe9pszer\u0171bb term\xe9k"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'spark.sql(\n    """\n    SELECT StockCode, Description, SUM(Quantity) AS c\n    FROM retail\n    GROUP BY StockCode, Description\n    ORDER BY c DESC LIMIT 1\n    """\n).show()\n'})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"StockCode"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"c"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"84077"}),(0,t.jsx)(n.td,{children:"WORLD WAR 2 GLIDE..."}),(0,t.jsx)(n.td,{children:"53847"})]})})]})}),"\n",(0,t.jsx)(n.h4,{id:"\xe1tlagosan-h\xe1ny-k\xfcl\xf6nb\xf6z\u0151-term\xe9ket-vesz-egy-v\xe1s\xe1rl\xf3-egy-v\xe1s\xe1rl\xe1s-sor\xe1n",children:"\xc1tlagosan h\xe1ny k\xfcl\xf6nb\xf6z\u0151 term\xe9ket vesz egy v\xe1s\xe1rl\xf3 egy v\xe1s\xe1rl\xe1s sor\xe1n?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'spark.sql(\n    """\n    SELECT round(avg(c),2)\n    FROM (\n    SELECT InvoiceNo, COUNT(DISTINCT StockCode) AS c\n    FROM retail\n    GROUP BY InvoiceNo)\n    """\n).show()\n'})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{children:"round(avg(c), 2)"})})}),(0,t.jsx)(n.tbody,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"20.51"})})})]})}),"\n",(0,t.jsx)(n.h4,{id:"melyik-tranzakci\xf3-sor\xe1n-v\xe1s\xe1rolt\xe1k-a-legt\xf6bb-k\xfcl\xf6nb\xf6z\u0151-term\xe9ket-\xe9s-h\xe1nyat",children:"Melyik tranzakci\xf3 sor\xe1n v\xe1s\xe1rolt\xe1k a legt\xf6bb k\xfcl\xf6nb\xf6z\u0151 term\xe9ket \xe9s h\xe1nyat?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'spark.sql(\n    """\n    SELECT InvoiceNo, COUNT(DISTINCT StockCode) AS c\n    FROM retail\n    GROUP BY InvoiceNo\n    ORDER BY c DESC\n    LIMIT 1\n    """\n).show()\n'})}),"\n",(0,t.jsx)("div",{className:"show-table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"InvoiceNo"}),(0,t.jsx)(n.th,{children:"c"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"573585"}),(0,t.jsx)(n.td,{children:"1110"})]})})]})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(7294);const r={},d=t.createContext(r);function l(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);