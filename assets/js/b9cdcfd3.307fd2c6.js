"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[2866],{3981:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(5893),l=n(1151);const r={},s="Spark RDD",i={id:"bigdata/spark/rdd",title:"Spark RDD",description:"Az RDD (Resilient Distributed Dataset - hibat\u0171r\u0151 elosztott adathalmaz) a Spark \xe1ltal haszn\xe1lt els\u0151dleges absztrakci\xf3.",source:"@site/notes/bigdata/spark/rdd.md",sourceDirName:"bigdata/spark",slug:"/bigdata/spark/rdd",permalink:"/notes/bigdata/spark/rdd",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1697727265,formattedLastUpdatedAt:"2023. okt. 19.",frontMatter:{},sidebar:"notesSidebar",previous:{title:"Spark - bevezet\xe9s",permalink:"/notes/bigdata/spark/"},next:{title:"Bevezet\xe9s",permalink:"/notes/databases2/"}},d={},c=[{value:"Transzform\xe1ci\xf3k",id:"transzform\xe1ci\xf3k",level:2},{value:"Lek\xe9pez\xe9s - <code>map</code>",id:"lek\xe9pez\xe9s---map",level:3},{value:"Sz\u0171r\xe9s  - <code>filter</code>",id:"sz\u0171r\xe9s----filter",level:3},{value:"Dimenzi\xf3cs\xf6kkent\u0151 lek\xe9pez\xe9s - <code>flapMap</code>",id:"dimenzi\xf3cs\xf6kkent\u0151-lek\xe9pez\xe9s---flapmap",level:3},{value:"Akci\xf3k",id:"akci\xf3k",level:2},{value:"Megsz\xe1ml\xe1l\xe1s - <code>count</code>",id:"megsz\xe1ml\xe1l\xe1s---count",level:3},{value:"Redukci\xf3 - <code>reduce</code>",id:"redukci\xf3---reduce",level:3}];function o(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"spark-rdd",children:"Spark RDD"}),"\n",(0,t.jsx)(a.p,{children:"Az RDD (Resilient Distributed Dataset - hibat\u0171r\u0151 elosztott adathalmaz) a Spark \xe1ltal haszn\xe1lt els\u0151dleges absztrakci\xf3.\nEgy olyan adathalmazt reprezent\xe1l, melynek r\xe9szei a klaszter k\xfcl\xf6nb\xf6z\u0151 g\xe9pein helyezkednek el. Ezt az adathalmazt,\nk\xfcl\xf6nb\xf6z\u0151 m\u0171veleteken kereszt\xfcl v\xe1ltoztatni tudjuk."}),"\n",(0,t.jsx)(a.p,{children:"RDD-t t\xf6bb m\xf3don is l\xe9tre lehet hozni, p\xe9ld\xe1ul megl\xe9v\u0151 list\xe1b\xf3l. Itt a 3-as a part\xedci\xf3k sz\xe1m\xe1t adja meg, azaz h\xe1ny g\xe9pen\nker\xfclj\xf6n eloszt\xe1sra az adathalmaz."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:"numbers = [1, 2, 4, 6, 7, 2, 4, 6, 5]\n\nrdd = sc.parallelize(numbers, 3)\n"})}),"\n",(0,t.jsx)(a.p,{children:"Az RDD-ken K\xe9t m\u0171velett\xedpust \xe9rtelmez\xfcnk: transzform\xe1ci\xf3kat \xe9s akci\xf3kat. A kett\u0151 k\xf6zti k\xfcl\xf6nbs\xe9g, hogy a transzform\xe1ci\xf3k\n\xfaj RDD-kel, m\xedg az akci\xf3k valami m\xe1s jelleg\u0171 \xe9rt\xe9kkel t\xe9rnek vissza."}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.p,{children:["A m\u0171veletek jellege nagyon hasonl\xedt a ",(0,t.jsx)(a.a,{href:"/notes/java/stream",children:"Java folyamaihoz"})," illetve a JavaScript t\xf6mbf\xfcggv\xe9nyeihez."]})}),"\n",(0,t.jsx)(a.h2,{id:"transzform\xe1ci\xf3k",children:"Transzform\xe1ci\xf3k"}),"\n",(0,t.jsxs)(a.p,{children:["Ebben a bekezd\xe9sben a legfontosabb RDD transzform\xe1ci\xf3kat szeretn\xe9m bemutatni. A transzform\xe1ci\xf3k teljes list\xe1ja\nmegtal\xe1lhat\xf3 a ",(0,t.jsx)(a.a,{href:"https://spark.apache.org/docs/latest/rdd-programming-guide.html#transformations",children:"spark dokument\xe1ci\xf3ban"}),"."]}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsx)(a.p,{children:"Minden k\xf3dr\xe9szlet eset\xe9n adottnak tekintj\xfck a"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"from pyspark import SparkConf, SparkContext \n\nconf = SparkConf() \nsc = SparkContext(conf=conf)\n"})}),(0,t.jsx)(a.p,{children:"sorokat."})]}),"\n",(0,t.jsxs)(a.h3,{id:"lek\xe9pez\xe9s---map",children:["Lek\xe9pez\xe9s - ",(0,t.jsx)(a.code,{children:"map"})]}),"\n",(0,t.jsx)(a.p,{children:"Egy \xfaj RDD-t ad vissza, melynek elemei az eredeti RDD elemei valamilyen logikai ment\xe9n \xe1talak\xedtva."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"numbers = sc.parallelize(range(1000))\nnumbers.map(lambda number: number ** 2)\n"})}),"\n",(0,t.jsxs)(a.h3,{id:"sz\u0171r\xe9s----filter",children:["Sz\u0171r\xe9s  - ",(0,t.jsx)(a.code,{children:"filter"})]}),"\n",(0,t.jsx)(a.p,{children:"Egy predik\xe1tumf\xfcggv\xe9nyt v\xe1r. Egy olyan rdd-t ad vissza, melyben az"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"numbers = sc.parallelize(range(1000))\nnumbers.filter(lambda number: number % 2 == 0)\n"})}),"\n",(0,t.jsxs)(a.h3,{id:"dimenzi\xf3cs\xf6kkent\u0151-lek\xe9pez\xe9s---flapmap",children:["Dimenzi\xf3cs\xf6kkent\u0151 lek\xe9pez\xe9s - ",(0,t.jsx)(a.code,{children:"flapMap"})]}),"\n",(0,t.jsxs)(a.p,{children:["Egy szekvencia t\xedpus\xfa \xe9rt\xe9ket (",(0,t.jsx)(a.code,{children:"string"}),", ",(0,t.jsx)(a.code,{children:"byte"}),", ",(0,t.jsx)(a.code,{children:"list"}),", ",(0,t.jsx)(a.code,{children:"tuple"}),", ",(0,t.jsx)(a.code,{children:"bytearray"}),", ",(0,t.jsx)(a.code,{children:"buffer"}),", ",(0,t.jsx)(a.code,{children:"range"}),") visszaad\xf3 f\xfcggv\xe9nyt\nv\xe1r. Egy olyan RRD-vel t\xe9r vissza, mely a f\xfcggv\xe9ny \xe1ltal visszaadott szekvenci\xe1k elemeit tartalmazza. Teh\xe1t a visszaadott\nszekvenci\xe1kat egyetlen szekvenci\xe1v\xe1 lap\xedtja."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'text = sc.textFile(\'text.txt\') # rdd-be a f\xe1jl sorai lesznek\ntext.map(lambda line: line.split(" ")) # rdd minden eleme egy lista melyben szavak vannak\ntext.flatMap(lambda line: line.split(" ")) # rdd minden eleme egy sz\xf3\n'})}),"\n",(0,t.jsx)(a.h2,{id:"akci\xf3k",children:"Akci\xf3k"}),"\n",(0,t.jsxs)(a.h3,{id:"megsz\xe1ml\xe1l\xe1s---count",children:["Megsz\xe1ml\xe1l\xe1s - ",(0,t.jsx)(a.code,{children:"count"})]}),"\n",(0,t.jsx)(a.p,{children:"Megadja az adott RDD-ben l\xe9v\u0151 elemeik sz\xe1m\xe1t."}),"\n",(0,t.jsxs)(a.h3,{id:"redukci\xf3---reduce",children:["Redukci\xf3 - ",(0,t.jsx)(a.code,{children:"reduce"})]}),"\n",(0,t.jsxs)(a.p,{children:["A redukci\xf3 egy k\xe9tparam\xe9teres (",(0,t.jsx)(a.code,{children:"accumulator"}),", ",(0,t.jsx)(a.code,{children:"current"}),") f\xfcggv\xe9ny v\xe1r, aminek alkalmaz\xe1s\xe1val feldolgozza a teljes RDD-t. Ehhez minden elem eset\xe9n\nmegh\xedvja a megadott f\xfcggv\xe9nyt, melynek ",(0,t.jsx)(a.code,{children:"accumulator"})," param\xe9terek\xe9nt \xe1tadja a f\xfcggv\xe9ny el\u0151z\u0151 h\xedv\xe1s\xe1nak eredm\xe9ny\xe9t\n(kezdetben az \xe9rt\xe9k az RDD els\u0151 eleme) ",(0,t.jsx)(a.code,{children:"current"})," param\xe9terk\xe9nt pedig az aktu\xe1lis elemet."]}),"\n",(0,t.jsxs)(a.p,{children:["Hasonl\xf3k\xe9rt l\xe1sd: ",(0,t.jsx)(a.a,{href:"http://zvon.org/other/haskell/Outputprelude/foldl_f.html",children:"foldl (Haskell)"}),",\n",(0,t.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",children:"reduce (JavaScript)"}),",\n",(0,t.jsx)(a.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#reduce-T-java.util.function.BinaryOperator-",children:"Stream.reduce (Java)"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"numbers = sc.parallelize(range(1000))\nnumbers.reduce(lambda accumulator, current: accumulator + current) # \xf6sszegz\xe9s megval\xf3s\xedt\xe1sa\nnumbers.reduce(lambda maximum, current: max(accumulator, current)) # maximumkiv\xe1laszt\xe1s\n"})}),"\n",(0,t.jsxs)(a.admonition,{type:"danger",children:[(0,t.jsx)(a.p,{children:"Nagyon fontos, hogy az elosztott v\xe9grehajt\xe1s miatt kommutat\xedvnak \xe9s asszociat\xedvnak kell lennie, illetve \xfagy kell meg\xedrni\n, hogy k\xe9s\u0151bb amikor a k\xfcl\xf6nb\xf6z\u0151 Node-okon befejez\u0151dik a redukci\xf3, az alredukci\xf3k eredm\xe9nye is ugyan ezzel a f\xfcggv\xe9nnyel\nlesz reduk\xe1lva."}),(0,t.jsx)(a.p,{children:"Ez\xe9rt p\xe9ld\xe1ul a k\xf6vetkez\u0151 k\xf3d rosszul m\u0171k\xf6dik:"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-py",children:"numbers.reduce(lambda count, current: count + 1 if current % 2 == 0 else count)\n"})})]})]})}function m(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>s});var t=n(7294);const l={},r=t.createContext(l);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);