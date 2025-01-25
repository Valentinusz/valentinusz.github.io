"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[3947],{981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"bigdata/hadoop/grep","title":"grep","description":"A feladathoz kapcsol\xf3d\xf3 k\xf3dok megtal\xe1lhat\xf3k a GitHub repoban.","source":"@site/notes/bigdata/01_hadoop/02_grep.mdx","sourceDirName":"bigdata/01_hadoop","slug":"/bigdata/hadoop/grep","permalink":"/notes/bigdata/hadoop/grep","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Boda B\xe1lint","lastUpdatedAt":1699042492000,"sidebarPosition":2,"frontMatter":{},"sidebar":"notesSidebar","previous":{"title":"WordCount","permalink":"/notes/bigdata/hadoop/wordcount"},"next":{"title":"WordMean","permalink":"/notes/bigdata/hadoop/wordmean"}}');var o=n(4848),r=n(8453);const s={},i="grep",l={},p=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"grep",children:"grep"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["A feladathoz kapcsol\xf3d\xf3 k\xf3dok megtal\xe1lhat\xf3k a ",(0,o.jsx)(t.a,{href:"https://github.com/Valentinusz/elte-ik-bsc/tree/main/5/bigdata/hadoop/grep",children:"GitHub repoban"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"K\xe9sz\xedts\xfcnk egy MapReduce programot, amely egy karaktersorozatot keres a bemeneti f\xe1jlban. \xcdrjuk ki azokat a sorokat a\nbementi f\xe1jlb\xf3l, amelyek tartalmazz\xe1k a keresett karaktersorozatot."}),"\n",(0,o.jsx)(t.p,{children:"Nem neh\xe9z meggondolni, hogy a feladat megold\xe1s\xe1hoz nem sz\xfcks\xe9ges k\xfcl\xf6n reducer. A MapReduce lehet\u0151v\xe9 teszi \xe9s Reduce\nf\xe1zis kihagy\xe1s\xe1t:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:"title='src/grep/GrepDriver.java'",children:'public class GrepDriver {\n    public static void main(String[] args) throws Exception {\n        Configuration conf = new Configuration();\n        Job job = Job.getInstance(conf, "grep");\n        job.setJarByClass(GrepDriver.class);\n        job.setMapperClass(GrepMapper.class);\n\n        // highlight-next-line\n        job.setNumReduceTasks(0); // reducer f\xe1zis kikapcsol\xe1sa\n\n        job.setOutputKeyClass(LongWritable.class);\n        job.setOutputValueClass(Text.class);\n\n        FileInputFormat.setInputPaths(job, new Path("input"));\n        FileOutputFormat.setOutputPath(job, new Path("out"));\n\n        if (!job.waitForCompletion(true)) return;\n    }\n}\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:"title='src/grep/GrepMapper.java'",children:'public class GrepMapper extends Mapper<LongWritable, Text, NullWritable, Text> {\n    public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {\n        if (ivalue.toString().contains("s\xfctsz")) {\n            // NullWritable a leghat\xe9konyabb, ha olyan kulcs/\xe9rt\xe9k kell, ami nem fontos\n            context.write(NullWritable.get(), ivalue);\n        }\n    }\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(6540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);