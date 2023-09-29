"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=l.createContext({}),s=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=s(e.components);return l.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,c=p["".concat(m,".").concat(u)]||p[u]||d[u]||r;return a?l.createElement(c,i(i({ref:t},k),{},{components:a})):l.createElement(c,i({ref:t},k))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=a(7462),n=(a(7294),a(3905));const r={sidebar_position:4},i="Folyamok",o={unversionedId:"hjava/stream",id:"hjava/stream",title:"Folyamok",description:"API adatszerkezetek feldolgoz\xe1s\xe1hoz. B\xe1r els\u0151re \xfagy t\u0171nhet a list\xe1khoz nagyon hasonl\xf3ak, a folyamok azonban nem",source:"@site/materials/hjava/stream.md",sourceDirName:"hjava",slug:"/hjava/stream",permalink:"/materials/hjava/stream",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1695973397,formattedLastUpdatedAt:"2023. szept. 29.",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Lambda kifejez\xe9sek",permalink:"/materials/hjava/lambda"},next:{title:"Generikusok",permalink:"/materials/hjava/generic"}},m={},s=[{value:"L\xe9trehoz\xf3 m\u0171veletek",id:"l\xe9trehoz\xf3-m\u0171veletek",level:2},{value:"Iterate",id:"iterate",level:3},{value:"Generate",id:"generate",level:3},{value:"<code>Collection.stream()</code>",id:"collectionstream",level:3},{value:"<code>Stream.concat()</code>",id:"streamconcat",level:3},{value:"New I/O csomag",id:"new-io-csomag",level:3},{value:"K\xf6zb\xfcls\u0151 m\u0171veletek",id:"k\xf6zb\xfcls\u0151-m\u0171veletek",level:2},{value:"Lek\xe9pez\xe9s (<code>map</code>)",id:"lek\xe9pez\xe9s-map",level:3},{value:"Csomagol\xe1s (<code>boxed</code>)",id:"csomagol\xe1s-boxed",level:3},{value:"Sz\u0171r\xe9s (<code>filter</code>)",id:"sz\u0171r\xe9s-filter",level:3},{value:"<code>distinct()</code>",id:"distinct",level:3},{value:"Sz\u0171k\xedt\xe9s (<code>limit</code>)",id:"sz\u0171k\xedt\xe9s-limit",level:3},{value:"Kihagy\xe1s (<code>skip</code>)",id:"kihagy\xe1s-skip",level:3},{value:"<code>peek()</code>",id:"peek",level:3},{value:"<code>takeWhile()</code>",id:"takewhile",level:3},{value:"<code>dropWhile()</code>",id:"dropwhile",level:3},{value:"Termin\xe1l\xf3 m\u0171veletek",id:"termin\xe1l\xf3-m\u0171veletek",level:2},{value:"<code>forEach()</code>",id:"foreach",level:3},{value:"Gy\u0171jt\xe9s",id:"gy\u0171jt\xe9s",level:3},{value:"<code>toArray()</code>",id:"toarray",level:4},{value:"<code>toList()</code>",id:"tolist",level:4},{value:"<code>Collectors.toSet()</code>",id:"collectorstoset",level:4},{value:"Vizsg\xe1l\xf3 m\u0171veletek",id:"vizsg\xe1l\xf3-m\u0171veletek",level:3},{value:"<code>count()</code>",id:"count",level:3},{value:"Statisztikai m\u0171veletek",id:"statisztikai-m\u0171veletek",level:3},{value:"Keres\xe9s",id:"keres\xe9s",level:3},{value:"<code>findFirst()</code>",id:"findfirst",level:4},{value:"<code>findAny()</code>",id:"findany",level:4}],k={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"folyamok"},"Folyamok"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"API adatszerkezetek feldolgoz\xe1s\xe1hoz"),'. B\xe1r els\u0151re \xfagy t\u0171nhet a list\xe1khoz nagyon hasonl\xf3ak, a folyamok azonban nem\nt\xe1rolnak elemeiket, hanem "gener\xe1lj\xe1k" azokat.'),(0,n.kt)("p",null,"Folyamot sz\xe1mos m\xf3don tudunk l\xe9trehozni:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.of(1, 1, 2, 1, 3, 1, 2).forEach(n -> System.out.println(n));\n")),(0,n.kt)("p",null,"Streamek v\xe9gtelen elemet is tartalmazhatnak, ezek lust\xe1n j\xf6nnek l\xe9tre azaz mindig csak egy van a mem\xf3ri\xe1ban."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.iterate(1, n -> n + 1).forEach(n -> System.out.println(n));\n\n// le is lehet limit\xe1lni\nStream.iterate(1, n -> n + 1).limit(10).forEach(n -> System.out.println(n));\n")),(0,n.kt)("p",null,"A folyamok \xe9letciklus\xe1t h\xe1rom f\xe1zisra tudjuk osztani:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"l\xe9trehoz\xe1s"),(0,n.kt)("li",{parentName:"ul"},"k\xf6ztes m\u0171veletek (intermediate operation)"),(0,n.kt)("li",{parentName:"ul"},"lez\xe1r\xf3 m\u0171velet (termination)")),(0,n.kt)("p",null,"Egy adott folyamot csak egyszer lehet feldolgozni, a lez\xe1r\xf3 m\u0171velet megh\xedv\xe1s\xe1t k\xf6vet\u0151en tov\xe1bbi m\u0171veletek megh\xedv\xe1sa ",(0,n.kt)("inlineCode",{parentName:"p"},"IllegalStateException"),"-t eredm\xe9nyez! "),(0,n.kt)("p",null,"Hasonl\xf3an a lambd\xe1khoz, vannak a primit\xedv t\xedpusokra specializ\xe1lt folyamok (p\xe9ld\xe1ul: ",(0,n.kt)("inlineCode",{parentName:"p"},"IntStream"),")."),(0,n.kt)("p",null,"Az ",(0,n.kt)("inlineCode",{parentName:"p"},"IntStream")," haszn\xe1lata nem csak hat\xe9konys\xe1g miatt aj\xe1nlott, hanem extra l\xe9trehoz\xf3 m\u0171veletekkel rendelkezik."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntStream.range(0, 10); // balr\xf3l z\xe1rt jobbr\xf3l nyitott\nIntStream.rangeClosed(0, 10); // z\xe1rt \n")),(0,n.kt)("h2",{id:"l\xe9trehoz\xf3-m\u0171veletek"},"L\xe9trehoz\xf3 m\u0171veletek"),(0,n.kt)("h3",{id:"iterate"},"Iterate"),(0,n.kt)("p",null,"Egy kezdeti \xe9rt\xe9ket \xe9s egy ",(0,n.kt)("inlineCode",{parentName:"p"},"UnaryOperator")," lambd\xe1t v\xe1r."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.iterate(0, n -> n + 1).limit(5).forEach(System.out::println); // 0 1 2 3 4\n")),(0,n.kt)("h3",{id:"generate"},"Generate"),(0,n.kt)("p",null,"Egy ",(0,n.kt)("inlineCode",{parentName:"p"},"Supplier")," lambda alapj\xe1n \xe1ll\xedtja el\u0151 a folyamot:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.generate(() -> 5).limit(3).forEach(System.out::println); // 5 5 5\n")),(0,n.kt)("h3",{id:"collectionstream"},(0,n.kt)("inlineCode",{parentName:"h3"},"Collection.stream()")),(0,n.kt)("p",null,"Az egyik leggyakrabban haszn\xe1lt l\xe9trehoz\xf3 m\u0171velet a ",(0,n.kt)("inlineCode",{parentName:"p"},"Collection")," interf\xe9sz ",(0,n.kt)("inlineCode",{parentName:"p"},"stream()"),' met\xf3dusa, mely egy adott\ngy\u0171jtem\xe9ny "folyamk\xe9nti" feldolgoz\xe1s\xe1t teszi lehet\u0151v\xe9. A folyam v\xe1ltoztat\xe1sa nem v\xe1ltoztatja meg az adatszerkezetet.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ArrayList<String> arrayList = new ArrayList<>();\narrayList.stream().forEach(System.out::println);\n")),(0,n.kt)("p",null,"Bonyolultabb p\xe9lda ",(0,n.kt)("inlineCode",{parentName:"p"},"Map"),"-ekkel:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Map.of('a', 1, 'b', 2).entrySet().stream().forEach(entry -> System.out.println(entry.getKey())); // a b\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"entrySet()")," a ",(0,n.kt)("inlineCode",{parentName:"li"},"Map")," bejegyz\xe9seinek halmaza"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"values()")," a ",(0,n.kt)("inlineCode",{parentName:"li"},"Map")," \xe9rt\xe9keinek gy\u0171jtem\xe9nye"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keySet()")," a ",(0,n.kt)("inlineCode",{parentName:"li"},"Map")," kulcsainak halmaza")),(0,n.kt)("p",null,"\xc9rdekess\xe9g, hogy a k\xf6vetkez\u0151t is meg tudjuk tenni:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Map.of('a', 1, 'b', 2).entrySet().forEach(entry -> System.out.println(entry.getKey()));\n")),(0,n.kt)("p",null,"Ekkor azonban nem folyamot, hanem az ",(0,n.kt)("inlineCode",{parentName:"p"},"Iterable")," interf\xe9sz adta ",(0,n.kt)("inlineCode",{parentName:"p"},"forEach")," met\xf3dust haszn\xe1ljuk, a stream API tov\xe1bbi lehet\u0151s\xe9geket nem tudn\xe1nk haszn\xe1lni."),(0,n.kt)("h3",{id:"streamconcat"},(0,n.kt)("inlineCode",{parentName:"h3"},"Stream.concat()")),(0,n.kt)("p",null,"Lehet\u0151s\xe9g\xfcnk van streamet, \xfagy l\xe9trehozni, hogy kor\xe1bban l\xe9trehozott folyamokat f\u0171z\xfcnk \xf6ssze:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.concat(Stream.of(1, 2), Stream.of(3, 4));\n")),(0,n.kt)("h3",{id:"new-io-csomag"},"New I/O csomag"),(0,n.kt)("p",null,"A NIO csomag t\xf6bb lehet\u0151s\xe9get biztos\xedt arra, hogy f\xe1jlrendszer m\u0171veletek eredm\xe9ny\xe9t folyamk\xe9nt dolgozhassuk fel."),(0,n.kt)("p",null,"F\xe1jl sorai:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Files.lines(Path.of("src", "Streams.java")).forEach(System.out::println);\n')),(0,n.kt)("p",null,"K\xf6nyvt\xe1r tartalma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Files.list(Path.of("src", "Streams.java")).forEach(System.out::println);\n')),(0,n.kt)("p",null,"K\xf6nyvt\xe1rszerkezet tartalma (m\xe9lys\xe9gi bej\xe1r\xe1ssal):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Files.walk(Path.of("src", "Streams.java")).forEach(System.out::println);\n')),(0,n.kt)("h2",{id:"k\xf6zb\xfcls\u0151-m\u0171veletek"},"K\xf6zb\xfcls\u0151 m\u0171veletek"),(0,n.kt)("p",null,"A folyamokon k\xf6zb\xfcls\u0151 m\u0171veleteket v\xe9gezhet\xfcnk, melyek \xfaj folyamokat adnak vissza."),(0,n.kt)("h3",{id:"lek\xe9pez\xe9s-map"},"Lek\xe9pez\xe9s (",(0,n.kt)("inlineCode",{parentName:"h3"},"map"),")"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"map()")," valamilyen a megadott ",(0,n.kt)("inlineCode",{parentName:"p"},"Function")," lambd\xe1ban l\xe9v\u0151 logika ment\xe9n \xe1talak\xedtja a folyam elemeit."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.of(0, 1, 2).map(n -> (n % 2 = 0)).forEach(System.out::println); // true false true\n")),(0,n.kt)("p",null,"Specializ\xe1lt folyamok eset\xe9n a ",(0,n.kt)("inlineCode",{parentName:"p"},"map")," m\u0171velet ",(0,n.kt)("inlineCode",{parentName:"p"},"UnaryOperator"),"-t v\xe1r, ha, azt szeretn\xe9nk hogy megv\xe1ltozzon a ",(0,n.kt)("inlineCode",{parentName:"p"},"stream")," elemt\xedpusa a ",(0,n.kt)("inlineCode",{parentName:"p"},"mapToObj")," m\u0171veletet kell haszn\xe1lnunk."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntStream.rangeClosed(0, 2).mapToObj(n -> (n % 2 == 0)).forEach(System.out::println);\n")),(0,n.kt)("p",null,"Illetve, ha egy specializ\xe1lt folyamb\xf3l, egy m\xe1sfajta specializ\xe1lt folyamba szeretn\xe9nk k\xe9pezni, azt a ",(0,n.kt)("inlineCode",{parentName:"p"},"mapTo<Type>()")," met\xf3dus haszn\xe1lat\xe1val tehetj\xfck meg."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntStream.rangeClosed(7, 9).mapToDouble(Math::sqrt).forEach(System.out::println);\n")),(0,n.kt)("h3",{id:"csomagol\xe1s-boxed"},"Csomagol\xe1s (",(0,n.kt)("inlineCode",{parentName:"h3"},"boxed"),")"),(0,n.kt)("p",null,"A specializ\xe1lt folyamokat \xe1ltal\xe1noss\xe1 tudjuk alak\xedtani a ",(0,n.kt)("inlineCode",{parentName:"p"},"boxed()")," met\xf3dussal."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntStream.rangeClosed(7, 9).boxed();\n")),(0,n.kt)("h3",{id:"sz\u0171r\xe9s-filter"},"Sz\u0171r\xe9s (",(0,n.kt)("inlineCode",{parentName:"h3"},"filter"),")"),(0,n.kt)("p",null,"Kisz\u0171ri a folyamb\xf3l a predik\xe1tumot nem teljes\xedt\u0151 elemeket."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntStream.rangeClosed(0, 2).filter(n -> (n % 2 == 0)).forEach(System.out::println); // 0 2\n")),(0,n.kt)("h3",{id:"distinct"},(0,n.kt)("inlineCode",{parentName:"h3"},"distinct()")),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"filter")," egy speci\xe1lis v\xe1ltozata, mely az adott oszt\xe1ly ",(0,n.kt)("inlineCode",{parentName:"p"},"hashCode")," \xe9s az ",(0,n.kt)("inlineCode",{parentName:"p"},"equals")," implement\xe1ci\xf3ja alapj\xe1n kisz\u0171ri az\nelemek t\xf6bbsz\xf6ri el\u0151fordul\xe1sait."),(0,n.kt)("h3",{id:"sz\u0171k\xedt\xe9s-limit"},"Sz\u0171k\xedt\xe9s (",(0,n.kt)("inlineCode",{parentName:"h3"},"limit"),")"),(0,n.kt)("p",null,"A folyam elemsz\xe1m\xe1t egy megadott m\xe9ret\u0171re cs\xf6kkenti."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.iterate(0, n -> n + 1).limit(10)\n")),(0,n.kt)("h3",{id:"kihagy\xe1s-skip"},"Kihagy\xe1s (",(0,n.kt)("inlineCode",{parentName:"h3"},"skip"),")"),(0,n.kt)("p",null,"Megadott mennyis\xe9g\u0171 elem kihagy\xe1sa a folyam elej\xe9r\u0151l."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.iterate(0, n -> n + 1).skip(2)\n")),(0,n.kt)("h3",{id:"peek"},(0,n.kt)("inlineCode",{parentName:"h3"},"peek()")),(0,n.kt)("p",null,"Lehet\u0151s\xe9g van a folyam elemeinek megtekint\xe9s\xe9re, an\xe9lk\xfcl, hogy termin\xe1l\xf3 m\u0171veletet haszn\xe1ln\xe1nk."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntStream.rangeClosed(0, 2).peek(System.out::println); 0 1 2\n")),(0,n.kt)("h3",{id:"takewhile"},(0,n.kt)("inlineCode",{parentName:"h3"},"takeWhile()")),(0,n.kt)("p",null,"Egy predik\xe1tumot v\xe1r, \xe9s addig vesz elemeket a folyamb\xf3l am\xedg a felt\xe9tel teljes\xfcl."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.iterate(0, n -> n + 1).takeWhile(n -> n < 100);\n")),(0,n.kt)("h3",{id:"dropwhile"},(0,n.kt)("inlineCode",{parentName:"h3"},"dropWhile()")),(0,n.kt)("p",null,"Egy predik\xe1tumot v\xe1r, \xe9s addig dob el elemeket a folyamb\xf3l am\xedg a felt\xe9tel teljes\xfcl."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Stream.iterate(0, n -> n + 1).dropWhile(n -> n < 5).limit(5);\n")),(0,n.kt)("h2",{id:"termin\xe1l\xf3-m\u0171veletek"},"Termin\xe1l\xf3 m\u0171veletek"),(0,n.kt)("h3",{id:"foreach"},(0,n.kt)("inlineCode",{parentName:"h3"},"forEach()")),(0,n.kt)("p",null,"A folyam \xf6sszes elem\xe9re v\xe9grehajtja a megadott ",(0,n.kt)("inlineCode",{parentName:"p"},"Consumer")," lambd\xe1t."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntStream.rangeClosed(0, 3).forEach(n -> System.out.println(n));\n")),(0,n.kt)("h3",{id:"gy\u0171jt\xe9s"},"Gy\u0171jt\xe9s"),(0,n.kt)("p",null,"A folyam elemeib\u0151l lehet\u0151s\xe9g\xfcnk van k\xfcl\xf6nb\xf6z\u0151 gy\u0171jtem\xe9nyeket k\xe9sz\xedteni."),(0,n.kt)("h4",{id:"toarray"},(0,n.kt)("inlineCode",{parentName:"h4"},"toArray()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Arrays.toString(IntStream.rangeClosed(0, 2).toArray()); // [0, 1, 2]\n")),(0,n.kt)("p",null,"\xc1ltal\xe1nos folyamok eset\xe9ben ez kicsit fur\xe1n m\u0171k\xf6dik, a Java generikus rendszere okozta korl\xe1toz\xe1sok miatt."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Object[] x = Stream.of(1,2,3).toArray();\n")),(0,n.kt)("p",null,"Ez a probl\xe9ma a k\xf6vetkez\u0151 m\xf3dokon oldhat\xf3 meg:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Integer[] y = Stream.of(1,2,3).toArray(n -> new Integer[n]);\nInteger[] z = Stream.of(1,2,3).toArray(Integer[]::new);\n")),(0,n.kt)("h4",{id:"tolist"},(0,n.kt)("inlineCode",{parentName:"h4"},"toList()")),(0,n.kt)("p",null,"Egy list\xe1t hoz l\xe9tre a folyam alapj\xe1n."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"List <Integer> list1 = Stream.of(1,2,3).toList(); //immutable\nList <Integer> list2 = Stream.of(1,2,3).collect(Collectors.toList()); //mutable\n")),(0,n.kt)("h4",{id:"collectorstoset"},(0,n.kt)("inlineCode",{parentName:"h4"},"Collectors.toSet()")),(0,n.kt)("p",null,"Mut\xe1lhat\xf3 halmazt hoz l\xe9tre a folyam alapj\xe1n."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Set<Integer> set = Stream.of(1,2,3,2).collect(Collectors.toSet()); // {1 2 3}\n")),(0,n.kt)("h3",{id:"vizsg\xe1l\xf3-m\u0171veletek"},"Vizsg\xe1l\xf3 m\u0171veletek"),(0,n.kt)("p",null,"A vizsg\xe1l\xf3 m\u0171veletek egy predik\xe1tumot v\xe1rnak \xe9s egy logikai \xe9rt\xe9ket adnak vissza."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"allMatch()")," Igazzal t\xe9r vissza, ha a felt\xe9tel a folyam \xf6sszes eleme eset\xe9n igaz."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"anyMatch()")," Igazzal t\xe9r vissza, ha a felt\xe9tel a folyam legal\xe1bb egy elem\xe9re teljes\xfcl."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"noneMatch()")," Igazzal t\xe9r vissza, ha a felt\xe9tel a folyam egyik elem\xe9re sem teljes\xfcl.")),(0,n.kt)("h3",{id:"count"},(0,n.kt)("inlineCode",{parentName:"h3"},"count()")),(0,n.kt)("p",null,"Megadja a stream elemsz\xe1m\xe1t."),(0,n.kt)("h3",{id:"statisztikai-m\u0171veletek"},"Statisztikai m\u0171veletek"),(0,n.kt)("p",null,"Specializ\xe1lt folyamok eset\xe9n \xe9rhet\u0151ek el."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"min()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sum()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"average()"))),(0,n.kt)("p",null,"Illetve a ",(0,n.kt)("inlineCode",{parentName:"p"},"min()")," \xe9s a ",(0,n.kt)("inlineCode",{parentName:"p"},"max()")," haszn\xe1lhat\xf3 \xe1ltal\xe1nos folyamokkal is de ekkor meg kell adtunk egy ",(0,n.kt)("inlineCode",{parentName:"p"},"Comparator")," lambd\xe1t."),(0,n.kt)("p",null,"Lehet\u0151s\xe9g van lek\xe9rni a statisztik\xe1k (bele\xe9rtve: ",(0,n.kt)("inlineCode",{parentName:"p"},"count()"),") egy\xfcttes lek\xe9r\xe9s\xe9re is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntSummaryStatistics statistics = IntStream.rangeClosed(0, 10).summaryStatistics();\n")),(0,n.kt)("h3",{id:"keres\xe9s"},"Keres\xe9s"),(0,n.kt)("h4",{id:"findfirst"},(0,n.kt)("inlineCode",{parentName:"h4"},"findFirst()")),(0,n.kt)("p",null,"Megadja a folyam els\u0151 elem\xe9t egy ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Optional"))," objektumba csomagolva (ugyan ez t\xf6rt\xe9nik az el\u0151bb eml\xedtett ",(0,n.kt)("inlineCode",{parentName:"p"},"min")," \xe9s ",(0,n.kt)("inlineCode",{parentName:"p"},"max")," m\u0171veletek eset\xe9ben is)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IntStream.rangeClosed(0, 10).findFirst()\n")),(0,n.kt)("h4",{id:"findany"},(0,n.kt)("inlineCode",{parentName:"h4"},"findAny()")),(0,n.kt)("p",null,"A folyam egy tetsz\u0151leges elem\xe9t adja vissza ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional"),"-be csomagolva."))}d.isMDXComponent=!0}}]);