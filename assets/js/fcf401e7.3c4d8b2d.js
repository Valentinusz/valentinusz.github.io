"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[5641],{1778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"bigdata/hadoop/counters","title":"Sz\xe1ml\xe1l\xf3k","description":"A Hadoop a MapReduce job fut\xe1sa sor\xe1n statisztik\xe1kat k\xe9sz\xedt, melyeket \xfagynevezett sz\xe1ml\xe1l\xf3kban t\xe1rol. A sz\xe1ml\xe1l\xf3kra","source":"@site/notes/bigdata/01_hadoop/04_counters.mdx","sourceDirName":"bigdata/01_hadoop","slug":"/bigdata/hadoop/counters","permalink":"/notes/bigdata/hadoop/counters","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Boda B\xe1lint","lastUpdatedAt":1699042492000,"sidebarPosition":4,"frontMatter":{},"sidebar":"notesSidebar","previous":{"title":"WordMean","permalink":"/notes/bigdata/hadoop/wordmean"},"next":{"title":"El\u0151zetes / Ut\xf3lagos m\u0171veletek","permalink":"/notes/bigdata/hadoop/pre_post_operations"}}');var l=n(4848),o=n(8453);const a={},r="Sz\xe1ml\xe1l\xf3k",d={},i=[{value:"Be\xe9p\xedtett sz\xe1ml\xe1l\xf3k",id:"be\xe9p\xedtett-sz\xe1ml\xe1l\xf3k",level:2},{value:"Saj\xe1t sz\xe1ml\xe1l\xf3",id:"saj\xe1t-sz\xe1ml\xe1l\xf3",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"sz\xe1ml\xe1l\xf3k",children:"Sz\xe1ml\xe1l\xf3k"})}),"\n",(0,l.jsx)(t.p,{children:"A Hadoop a MapReduce job fut\xe1sa sor\xe1n statisztik\xe1kat k\xe9sz\xedt, melyeket \xfagynevezett sz\xe1ml\xe1l\xf3kban t\xe1rol. A sz\xe1ml\xe1l\xf3kra\na Context oszt\xe1ly p\xe9ld\xe1nyain kereszt\xfcl tudunk hivatkoz\xe1st szerezni. tudjuk kiolvasni."}),"\n",(0,l.jsx)(t.p,{children:"P\xe9ld\xe1ul:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"protected void cleanup(Context context) throws IOException, InterruptedException {\n    org.apache.hadoop.mapreduce.Counter counter = context.getCounter(TaskCounter.CPU_MILLISECONDS);\n    long milliSeconds = counter.getValue();\n    ...\n}\n"})}),"\n",(0,l.jsxs)(t.admonition,{type:"danger",children:[(0,l.jsx)(t.p,{children:"A sz\xe1ml\xe1l\xf3k \xe9rt\xe9kei a sz\xe1m\xedt\xf3g\xe9pek k\xf6z\xf6tt csak a job legv\xe9g\xe9n ker\xfclnek szinkroniz\xe1l\xe1sra, s\u0151t m\xe9g csak egy sz\xe1m\xedt\xf3g\xe9p\neset\xe9n is a k\xfcl\xf6nb\xf6z\u0151 task-ok k\xf6z\xf6tt az \xe9rt\xe9kek elt\xe9r\u0151ek lehetnek."}),(0,l.jsx)(t.p,{children:"Ez\xe9rt a programlogik\xe1ban nem t\xe1maszkodhatunk a sz\xe1ml\xe1l\xf3k pontoss\xe1g\xe1ra."})]}),"\n",(0,l.jsx)(t.h2,{id:"be\xe9p\xedtett-sz\xe1ml\xe1l\xf3k",children:"Be\xe9p\xedtett sz\xe1ml\xe1l\xf3k"}),"\n",(0,l.jsxs)(t.p,{children:["A be\xe9p\xedtett sz\xe1ml\xe1l\xf3k 5 csoportra vannak osztva. Minden sz\xe1ml\xe1l\xf3csoport egy felsorol\xe1s, a specifikus ",(0,l.jsx)(t.code,{children:"enum"})," elemek az\negyes sz\xe1ml\xe1l\xf3k azonos\xedt\xf3i."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Sz\xe1ml\xe1l\xf3"}),(0,l.jsx)(t.th,{children:"Tartalom"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"TaskCounter"}),(0,l.jsx)(t.td,{children:"Task-ok (map, reduce, shuffle stb.) statisztik\xe1i."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"FileSystem"}),(0,l.jsx)(t.td,{children:"F\xe1jlrendszer statisztik\xe1k p\xe9ld\xe1ul \xedrott vagy olvasott b\xe1jtok sz\xe1ma."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"FileInputFormat"}),(0,l.jsx)(t.td,{children:"BYTES_READ - beolvasott b\xe1jtok sz\xe1ma"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"FileOutputFormat"}),(0,l.jsx)(t.td,{children:"BYTES_WRITTEN - \xedrt b\xe1jtok sz\xe1ma"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"JobCounter"}),(0,l.jsx)(t.td,{children:"Job szint\u0171 inform\xe1ci\xf3k (pl. sikertelen mapek sz\xe1ma)."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"saj\xe1t-sz\xe1ml\xe1l\xf3",children:"Saj\xe1t sz\xe1ml\xe1l\xf3"}),"\n",(0,l.jsxs)(t.p,{children:["Lehet\u0151s\xe9g\xfcnk van saj\xe1t sz\xe1ml\xe1l\xf3t is defini\xe1lni, ehhez egyszer\u0171en egy a Hadoop \xe1ltal m\xe9g nem haszn\xe1lt ",(0,l.jsx)(t.code,{children:"enum"})," \xe9rt\xe9ket kell\n\xe1tadnunk a ",(0,l.jsx)(t.code,{children:"Context"})," ",(0,l.jsx)(t.code,{children:"getCounter()"})," met\xf3dus\xe1nak. Nyilv\xe1nval\xf3an ennek a kezel\xe9s\xe9r\u0151l nek\xfcnk kell gondoskodnunk."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"enum CustomCounters {\n    CUSTOM_COUNTER;\n}\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:"protected void cleanup(Context context) throws IOException, InterruptedException {\n    Counter counter = context.getCounter(CustomCounters.CUSTOM_COUNTER);\n    counter.setValue(0); // be\xe1ll\xedt\xe1s\n    counter.increment(5); // n\xf6vel\xe9s\n    long a = counter.getValue(); // a = 5\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(6540);const l={},o=s.createContext(l);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);