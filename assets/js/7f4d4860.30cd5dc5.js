"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4,title:"WordMean"},l=void 0,i={unversionedId:"bigdata/hadoop/WordMean",id:"bigdata/hadoop/WordMean",title:"WordMean",description:"A feladathoz kapcsol\xf3d\xf3 k\xf3dok megtal\xe1lhat\xf3k a",source:"@site/materials/bigdata/hadoop/WordMean.md",sourceDirName:"bigdata/hadoop",slug:"/bigdata/hadoop/WordMean",permalink:"/materials/bigdata/hadoop/WordMean",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"WordMean"},sidebar:"tutorialSidebar",previous:{title:"grep",permalink:"/materials/bigdata/hadoop/grep"},next:{title:"Bevezet\xe9s",permalink:"/materials/databases2"}},s={},p=[],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A feladathoz kapcsol\xf3d\xf3 k\xf3dok megtal\xe1lhat\xf3k a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Valentinusz/elte-ik-bsc/tree/main/5/bigdata/hadoop/wordMean"},"GitHub repoban"),".")),(0,r.kt)("p",null,"Adjuk meg, hogy a bemeneti f\xe1jlban mekkora a szavak \xe1tlagos hossza!"),(0,r.kt)("p",null,"A keressett adat meghat\xe1roz\xe1s\xe1hoz k\xe9t adatra van sz\xfcks\xe9g\xfcnk, a ",(0,r.kt)("strong",{parentName:"p"},"karakterek sz\xe1m\xe1ra")," \xe9s a ",(0,r.kt)("strong",{parentName:"p"},"szavak sz\xe1m\xe1r\xe1"),"."),(0,r.kt)("p",null,"A feladat bemenete egy f\xe1jl, a lek\xe9pez\u0151 alap bemeneti t\xedpusaihoz nem kell hozz\xe1ny\xfalnunk. Mivel a kimenetben egyetlen\naggreg\xe1lt \xe9rt\xe9ket akarunk, ez\xe9rt fontos, hogy minden kulcs-\xe9rt\xe9k p\xe1r egy Reducer-hez ker\xfclj\xf6n. Mivel az alap hash alap\xfa\nshuffle algoritmust haszn\xe1ljuk, ez\xe9rt csak azt kell el\xe9rn\xfcnk, hogy a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapper")," \xe1ltal kiadott p\xe1rok kulcsa azonos legyen."),(0,r.kt)("p",null,"Ehhez \xe9n kulcsk\xe9nt, a ",(0,r.kt)("inlineCode",{parentName:"p"},"NullWritable")," oszt\xe1lyt fogom haszn\xe1lni:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="wordMean/src/wordmean/WordMeanMapper.java"',title:'"wordMean/src/wordmean/WordMeanMapper.java"'},'public class WordMeanMapper extends Mapper<LongWritable, Text, NullWritable, IntWritable> {\n    public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {\n        for (String word : ivalue.toString().replaceAll("[,.?!:]", " ").split(" ")) {\n            // NullWritable singleton, ez\xe9rt az, hogy nem mentj\xfck ki v\xe1ltoz\xf3ba nem ront a teljes\xedtm\xe9nyen\n            context.write(NullWritable.get(), new IntWritable(word.length()));\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Ennek hat\xe1s\xe1ra a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," pontosan szavak sz\xe1ma darab p\xe1rt fog kapni, ahol az \xe9rt\xe9k az adott sz\xf3 hossza."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="wordMean/src/wordmean/WordMeanReducer.java"',title:'"wordMean/src/wordmean/WordMeanReducer.java"'},"public class WordMeanReducer extends Reducer<NullWritable, IntWritable, NullWritable, DoubleWritable> {\n    // figyelj\xfcnk a reduce t\xedpusszignat\xfar\xe1j\xe1ra, _key t\xedpus\xe1nak meg kell egyeznie az oszt\xe1ly els\u0151 t\xedpusapram\xe9ter\xe9vel\n    // az iterable t\xedpusparam\xe9ter\xe9nek pedig az oszt\xe1ly m\xe1sodik t\xedpusparam\xe9ter\xe9vel\n    public void reduce(NullWritable _key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {\n        int wordCount = 0;\n        int wordLengthSum = 0;\n        \n        for (IntWritable entryValue : values) {\n            wordCount++;\n            wordLengthSum += entryValue.get();\n        }\n        \n        context.write(NullWritable.get(), new DoubleWritable((double) wordLengthSum / wordCount));\n    }\n}\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Driver")," oszt\xe1lyban minim\xe1lis v\xe1ltoztat\xe1sokat kell megtenn\xfcnk:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class WordMeanDriver {\n    public static void main(String[] args) throws Exception {\n        System.setProperty("hadoop.tmp.dir", "c:\\\\BigData\\\\tmp\\\\hadoop-xx");\n        System.setProperty("hadoop.home.dir", "c:\\\\BigData\\\\hadoop-3.3.6");\n        \n        Configuration conf = new Configuration();\n        Job job = Job.getInstance(conf, "wordMean");\n        job.setJarByClass(wordmean.WordMeanDriver.class);\n\n        job.setMapperClass(wordmean.WordMeanMapper.class);\n        job.setReducerClass(wordmean.WordMeanReducer.class);\n        \n        // highlight-start\n        // alap\xe9rtelmezetten a Map output t\xedpusai megegyeznek a teljes output t\xedpusaival\n        // eset\xfcnkben ez nem \xedgy van ez\xe9rt explicit meg kell adnunk \u0151ket\n        job.setMapOutputKeyClass(NullWritable.class);\n        job.setMapOutputValueClass(IntWritable.class);\n        // highlight-end\n        \n        job.setOutputKeyClass(NullWritable.class);\n        job.setOutputValueClass(DoubleWritable.class);\n\n        FileInputFormat.setInputPaths(job, new Path("input"));\n        FileOutputFormat.setOutputPath(job, new Path("out"));\n        \n        if (!job.waitForCompletion(true)) return;\n    }\n}\n')))}c.isMDXComponent=!0}}]);