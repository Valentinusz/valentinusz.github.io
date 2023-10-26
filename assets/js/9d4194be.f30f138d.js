"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[9722],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||o;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6679:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1,title:"WordCount"},i=void 0,l={unversionedId:"bigdata/hadoop/wordcount",id:"bigdata/hadoop/wordcount",title:"WordCount",description:"A feladathoz kapcsol\xf3d\xf3 k\xf3dok megtal\xe1lhat\xf3k a GitHub repoban.",source:"@site/notes/bigdata/hadoop/wordcount.md",sourceDirName:"bigdata/hadoop",slug:"/bigdata/hadoop/wordcount",permalink:"/notes/bigdata/hadoop/wordcount",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1697492234,formattedLastUpdatedAt:"2023. okt. 16.",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"WordCount"},sidebar:"tutorialSidebar",previous:{title:"Hadoop",permalink:"/notes/bigdata/hadoop/intro"},next:{title:"grep",permalink:"/notes/bigdata/hadoop/grep"}},p={},d=[],u={toc:d},s="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A feladathoz kapcsol\xf3d\xf3 k\xf3dok megtal\xe1lhat\xf3k a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Valentinusz/elte-ik-bsc/tree/main/5/bigdata/hadoop/wordCount"},"GitHub repoban"),".")),(0,r.kt)("p",null,"A MapReduce Hello World!-jek\xe9nt emlegedett feladat a k\xf6vetkez\u0151: Adott egy bemeneti f\xe1jl, sz\xe1moljuk meg az egyes szavak h\xe1nyszor fordulnak el\u0151 a f\xe1jlban!"),(0,r.kt)("p",null,"A Hadoop MapReduce egy Java nyelv\u0171 implement\xe1ci\xf3ja a MapReduce modellnek."),(0,r.kt)("p",null,"A f\u0151program, amit a ",(0,r.kt)("inlineCode",{parentName:"p"},"WordCountDriver")," oszt\xe1lyban helyez\xfcnk el felel a MapReduce motor konfigur\xe1l\xe1s\xe1\xe9rt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/wordcount/WordCountDriver.java"',title:'"src/wordcount/WordCountDriver.java"'},'package wordcount;\n\nimport org.apache.hadoop.conf.Configuration;\nimport org.apache.hadoop.fs.Path;\nimport org.apache.hadoop.io.IntWritable;\nimport org.apache.hadoop.io.Text;\nimport org.apache.hadoop.mapreduce.Job;\nimport org.apache.hadoop.mapreduce.lib.input.FileInputFormat;\nimport org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;\n\npublic class WordCountDriver {\n    public static void main(String[] args) throws Exception {\n        // HDFS itt t\xe1rolja az ideiglenes f\xe1jlokat\n        System.setProperty("hadoop.tmp.dir", "c:\\\\BigData\\\\tmp\\\\hadoop-xx");\n        \n        // k\xf6nyvt\xe1r ahol a Hadoop telep\xedtve van\n        System.setProperty("hadoop.home.dir", "c:\\\\BigData\\\\hadoop-3.3.6");\n        \n        Configuration conf = new Configuration();\n        \n        // job neve igaz\xe1b\xf3l nem sz\xe1m\xedt\n        Job job = Job.getInstance(conf, "WordCount"); \n        \n        job.setJarByClass(wordcount.WordCountDriver.class);\n        \n        // mapper oszt\xe1ly megad\xe1sa\n        job.setMapperClass(wordcount.WordCountMapper.class);\n        \n        // reducer oszt\xe1ly megad\xe1sa\n        job.setReducerClass(wordcount.WordCountReducer.class);\n        \n        // kimeneti kulcs \xe9rt\xe9k p\xe1r t\xedpus\xe1nak megad\xe1sa\n        job.setOutputKeyClass(Text.class);\n        job.setOutputValueClass(IntWritable.class);\n\n        // be \xe9s kimeneti k\xf6nyvt\xe1rak megad\xe1sa\n        FileInputFormat.setInputPaths(job, new Path("input")); // bementi mappa\n        FileOutputFormat.setOutputPath(job, new Path("out")); // kimeneti mappa\n\n        // v\xe9grehajtja a jobot\n        if (!job.waitForCompletion(true)) return;\n    }\n}\n')),(0,r.kt)("p",null,"\xc9rtelemszer\u0171en a Mapper f\xe1zis logik\xe1ja a ",(0,r.kt)("inlineCode",{parentName:"p"},"WordCountMapper")," oszt\xe1lyba fog ker\xfclni. A Mapper oszt\xe1lyok k\xf6z\xf6s \u0151soszt\xe1lya\na ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.mapreduce.Mapper")," generikus oszt\xe1ly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Mapper<KEYIN, VALUEIN, KEYOUT, VALUEOUT> {\n    protected void map(KEYIN key, VALUEIN value, Context context) throws IOException, InterruptedException { ... }\n    ...\n}\n")),(0,r.kt)("p",null,"N\xe9gy t\xedpusparam\xe9tere, a bemeneti kulcs t\xedpusa, a bemeneti \xe9rt\xe9k t\xedpusa, a kimeneti kulcs t\xedpusa, a kimeneti \xe9rt\xe9k\nt\xedpusa. A kimeneti kulcs \xe9s \xe9rt\xe9k egy\xfcttesen alkotj\xe1k azt a p\xe1rt ami, majd egy Reducer-hez el fog jutni."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Figyelj\xfcnk arra, hogy megtartsuk a ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," met\xf3dus szignat\xfar\xe1ja \xe9s az oszt\xe1ly t\xedpusparam\xe9terei k\xf6zti parit\xe1st! Azaz, ha a\n",(0,r.kt)("inlineCode",{parentName:"p"},"VALEUIN")," t\xedpusparam\xe9ter \xe9rt\xe9ke az oszt\xe1lyban ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", akkor a ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," met\xf3dus ",(0,r.kt)("inlineCode",{parentName:"p"},"VALUEIN")," t\xedpusparam\xe9tere is ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," legyen.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"A Hadoop nem a megszokott Java t\xedpusokat haszn\xe1lja! A t\xedpusok k\xf6zti megfeleltet\xe9seket a k\xf6vetkez\u0151 t\xe1bl\xe1zatok tartalmazz\xe1k:"),(0,r.kt)("div",{className:"side-2"},(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Java t\xedpus"),(0,r.kt)("th",{parentName:"tr",align:null},"Hadoop t\xedpus"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"byte")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ByteWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ShortWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IntWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LongWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FloatWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DoubleWritable"))))),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Java t\xedpus"),(0,r.kt)("th",{parentName:"tr",align:null},"Hadoop t\xedpus"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BooleanWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Text"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Map")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MapWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"java.util.List")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ArrayWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"java.util.Set")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ArrayWritable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"java.sql.Timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LongWritable"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/wordcount/WordCountMapper.java"',title:'"src/wordcount/WordCountMapper.java"'},'public class WordCountMapper extends Mapper<LongWritable, Text, Text, IntWritable> {\n    // \xe9rdemes \xedgy \xfajrahaszn\xe1lni a v\xe1ltoz\xf3kat\n    private Text key = new Text("");\n    private IntWritable value = new IntWritable(1); // value \xe9rt\xe9ke konstans 1\n\n    // ivalue tartalmazza bemeneti \xe9rt\xe9ket\n    // eset\xfcnkben egy f\xe1jl egy sora\n    public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {\n        // felbontjuk a stringet sz\xf3k\xf6z\xf6k ment\xe9n\n        String[] words = ivalue.toString().split(" ");\n\n        for (String word : words) {\n            key.set(word); // kulcs legyen a sz\xf3\n            \n            word = word.toLowerCase();\n            \n            // kulcs \xe9rt\xe9k p\xe1r l\xe9trehoz\xe1sa \xe9s tov\xe1bbad\xe1sa\n            context.write(key, value);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"A lek\xe9pz\u0151 oszt\xe1ly meg\xedr\xe1s\xe1val, m\xe1r el\u0151\xe1lltak a reducer \xe1ltal feldolgoz\xe1sra alkalmas kulcs-\xe9rt\xe9k p\xe1rok. A shuffler\nautomatikusan megoldja, hogy az azonos kulcs\xfa p\xe1rok azonos reducer-hez ker\xfcljenek, nek\xfcnk az aggreg\xe1l\xf3 logik\xe1t kell\nmeg\xedrni."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Reducer<KEYIN, VALUEIN, KEYOUT, VALUEOUT> { \n    ...\n    protected void reduce(KEYIN key, Iterable<VALUEIN> values, Context context) throws IOException, InterruptedException { ... }\n    ...\n}\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Mint a ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," eset\xe9ben, \xfcgyelj\xfcnk arra, hogy megtartsuk a ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," met\xf3dus szignat\xfar\xe1ja \xe9s az oszt\xe1ly t\xedpusparam\xe9terei\nk\xf6zti parit\xe1st! Rossz t\xedpusparam\xe9terz\xe9s eset\xe9n a ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," eredeti implement\xe1ci\xf3ja fut le, ami csak tov\xe1bbadja a\nkulcs-\xe9rt\xe9k p\xe1rt.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/wordcount/WordCountReducer.java"',title:'"src/wordcount/WordCountReducer.java"'},"public class WordCountReducer extends Reducer<Text, IntWritable, Text, IntWritable> {\n    // _key a k\xf6z\xf6s kulcs\n    // values az \xe9rt\xe9kek\n    public void reduce(Text _key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {\n        int count = 0;\n        \n        for (IntWritable entryValue : values) {\n            count++;\n        }\n        \n        context.write(_key, new IntWritable(count)); // p\xe1r tov\xe1bbad\xe1sa\n    }\n}\n")),(0,r.kt)("p",null,"Ha mindent j\xf3l csin\xe1ltunk l\xe9trej\xf6ttek az \xe1ltal\xe1lunk megadott kimeneti mapp\xe1ba a ",(0,r.kt)("inlineCode",{parentName:"p"},"_SUCCESS")," \xe9s az eredm\xe9nyt tartalmaz\xf3\n",(0,r.kt)("inlineCode",{parentName:"p"},"part-m-00000")," f\xe1jlok."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Combiner oszt\xe1ly haszn\xe1lat\xe1val hat\xe9konyabb megold\xe1st is tudunk adni erre a probl\xe9m\xe1ra. Szerencs\xe9s helyzetben vagyunk,\nmivel a Reducer kis m\xf3dos\xedt\xe1s\xe1val, felhaszn\xe1lhat\xf3 Combiner-k\xe9nt is:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="wordCountCombiner/src/wordcount/WordCountReducer.java"',title:'"wordCountCombiner/src/wordcount/WordCountReducer.java"'},"public void reduce(Text _key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {\n    int count = 0;\n    \n    for (IntWritable entryValue : values) {\n        //highlight-next-line\n        count += entryValue.get();\n    }\n    \n    context.write(_key, new IntWritable(count));\n}\n")),(0,r.kt)("p",{parentName:"admonition"},"Tov\xe1bb\xe1 be kell regisztr\xe1lnunk a Combiner-t a f\u0151programban:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="wordCountCombiner/src/wordcount/WordCountDriver.java"',title:'"wordCountCombiner/src/wordcount/WordCountDriver.java"'},"public static void main(String[] args) throws Exception {\n    ...\n    job.setMapperClass(wordcount_with_combiner.WordCountMapper.class);\n    //highlight-next-line\n    job.setCombinerClass(wordcount_with_combiner.WordCountReducer.class);\n    job.setReducerClass(wordcount.WordCountReducer.class);\n    ...\n}\n")),(0,r.kt)("p",{parentName:"admonition"},"A megold\xe1s el\xe9rhet\u0151 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Valentinusz/elte-ik-bsc/tree/main/5/bigdata/hadoop/wordCountCombiner"},"itt"),".")))}m.isMDXComponent=!0}}]);