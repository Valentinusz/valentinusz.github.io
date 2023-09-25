"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,b=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3,title:"grep"},i=void 0,l={unversionedId:"bigdata/hadoop/grep",id:"bigdata/hadoop/grep",title:"grep",description:"A feladathoz kapcsol\xf3d\xf3 k\xf3dok megtal\xe1lhat\xf3k a GitHub repoban.",source:"@site/materials/bigdata/hadoop/grep.md",sourceDirName:"bigdata/hadoop",slug:"/bigdata/hadoop/grep",permalink:"/en/materials/bigdata/hadoop/grep",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"grep"},sidebar:"tutorialSidebar",previous:{title:"WordCount",permalink:"/en/materials/bigdata/hadoop/WordCount"},next:{title:"WordMean",permalink:"/en/materials/bigdata/hadoop/WordMean"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"A feladathoz kapcsol\xf3d\xf3 k\xf3dok megtal\xe1lhat\xf3k a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Valentinusz/elte-ik-bsc/tree/main/5/bigdata/hadoop/grep"},"GitHub repoban"),".")),(0,n.kt)("p",null,"K\xe9sz\xedts\xfcnk egy MapReduce programot, amely egy karaktersorozatot keres a bemeneti f\xe1jlban. \xcdrjuk ki azokat a sorokat a\nbementi f\xe1jlb\xf3l, amelyek tartalmazz\xe1k a keresett karaktersorozatot."),(0,n.kt)("p",null,"Nem neh\xe9z meggondolni, hogy a feladat megold\xe1s\xe1hoz nem sz\xfcks\xe9ges k\xfcl\xf6n reducer. A MapReduce lehet\u0151v\xe9 teszi \xe9s Reduce\nf\xe1zis kihagy\xe1s\xe1t:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='src/grep/GrepDriver.java'",title:"'src/grep/GrepDriver.java'"},'public class GrepDriver {\n    public static void main(String[] args) throws Exception {\n        Configuration conf = new Configuration();\n        Job job = Job.getInstance(conf, "grep");\n        job.setJarByClass(GrepDriver.class);\n        job.setMapperClass(GrepMapper.class);\n\n        // highlight-next-line\n        job.setNumReduceTasks(0); // reducer f\xe1zis kikapcsol\xe1sa\n\n        job.setOutputKeyClass(LongWritable.class);\n        job.setOutputValueClass(Text.class);\n\n        FileInputFormat.setInputPaths(job, new Path("input"));\n        FileOutputFormat.setOutputPath(job, new Path("out"));\n\n        if (!job.waitForCompletion(true)) return;\n    }\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"title='src/grep/GrepMapper.java'",title:"'src/grep/GrepMapper.java'"},'public class GrepMapper extends Mapper<LongWritable, Text, NullWritable, Text> {\n    public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {\n        if (ivalue.toString().contains("s\xfctsz")) {\n            // NullWritable a leghat\xe9konyabb, ha olyan kulcs/\xe9rt\xe9k kell, ami nem fontos\n            context.write(NullWritable.get(), ivalue);\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);