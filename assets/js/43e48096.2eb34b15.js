"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,c=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:5},i="Generikusok",s={unversionedId:"java/generic",id:"java/generic",title:"Generikusok",description:"Programoz\xe1s sor\xe1n sokszor el\u0151fordul, hogy egy oszt\xe1lyt (\xe1ltal\xe1ban egy adatszerkezetet) t\xf6bb k\xfcl\xf6nb\xf6z\u0151 t\xedpusra is defini\xe1lni szeretn\xe9nk. A dinamikus nyelvekben ez nem okoz gondot, probl\xe9ma n\xe9lk\xfcl tudunk a v\xe1ltoz\xf3knak b\xe1rmilyen t\xedpus\xfa \xe9rt\xe9ket adni. A Java statikus t\xedpusrendszer\xe9ben ezt azonban nem tudjuk megtenni.",source:"@site/materials/java/generic.md",sourceDirName:"java",slug:"/java/generic",permalink:"/materials/java/generic",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1697059738,formattedLastUpdatedAt:"2023. okt. 11.",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Folyamok",permalink:"/materials/java/stream"},next:{title:"A rekord t\xedpus",permalink:"/materials/java/record"}},o={},p=[{value:"T\xedpust\xf6rl\xe9s",id:"t\xedpust\xf6rl\xe9s",level:2},{value:"Alt\xedpusoss\xe1g",id:"alt\xedpusoss\xe1g",level:2},{value:"T\xedpusparam\xe9ter megk\xf6t\xe9sek",id:"t\xedpusparam\xe9ter-megk\xf6t\xe9sek",level:2},{value:"<code>extends</code>",id:"extends",level:3},{value:"<code>super</code>",id:"super",level:3},{value:"PECS szab\xe1ly",id:"pecs-szab\xe1ly",level:3},{value:"Met\xf3dusok",id:"met\xf3dusok",level:2}],k={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generikusok"},"Generikusok"),(0,r.kt)("p",null,"Programoz\xe1s sor\xe1n sokszor el\u0151fordul, hogy egy oszt\xe1lyt (\xe1ltal\xe1ban egy adatszerkezetet) t\xf6bb k\xfcl\xf6nb\xf6z\u0151 t\xedpusra is defini\xe1lni szeretn\xe9nk. A dinamikus nyelvekben ez nem okoz gondot, probl\xe9ma n\xe9lk\xfcl tudunk a v\xe1ltoz\xf3knak b\xe1rmilyen t\xedpus\xfa \xe9rt\xe9ket adni. A Java statikus t\xedpusrendszer\xe9ben ezt azonban nem tudjuk megtenni."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Pair { String s; char c }\nclass Pair { int i; boolean b }\n")),(0,r.kt)("p",null,"Ezt nem tehetj\xfck meg, mivel a Java megk\xf6veteli, hogy az oszt\xe1lynevek egyediek legyenek. De ha megtehetn\xe9nk se felt\xe9tlen lenne ez egy eleg\xe1ns megold\xe1s."),(0,r.kt)("p",null,"Erre megold\xe1sul ker\xfcltek bevezet\xe9sre Java 5-ben a generikusok. Ezen nyelvi funkci\xf3 lehet\u0151v\xe9 teszi, hogy az oszt\xe1lyainkat \xe9s met\xf3dusainkat, egy konkr\xe9t t\xedpus n\xe9lk\xfcli absztrakci\xf3val defini\xe1ljuk."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// t\xedpusparam\xe9terek\nclass Pair<T1, T2> {\n  T1 elem1;\n  T2 elem2;\n\n  T1 getElem1() {\n      return this.elem1;\n  }\n\n  public void setElem1(T1 elem1) {\n      this.elem1 = elem1;\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A t\xedpusparam\xe9terek eset\xe9ben a k\xf6vetkez\u0151 konvenci\xf3kat \xe9rdemes k\xf6vetni:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"T")," (type): \xe1ltal\xe1nos t\xedpusparam\xe9ter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"E")," (element): gy\u0171jtem\xe9ny elemt\xedpusa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"K")," \xe9s ",(0,r.kt)("inlineCode",{parentName:"li"},"V")," (key, value): kulcs \xe9rt\xe9k p\xe1rok"))),(0,r.kt)("p",null,"Miut\xe1n meg\xedrtuk egy generikus oszt\xe1lyt, a k\xf6vetkez\u0151 m\xf3don p\xe9ld\xe1nyos\xedthatjuk:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Pair<String, Character> pair = new Pair<String, Character>();\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Java 7 \xf3ta a p\xe9ld\xe1nyos\xedt\xe1s jobb oldal\xe1r\xf3l elhagyhat\xf3ak a t\xedpusparam\xe9terek:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Pair<String, Character> pair = new Pair<>();\n"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"T\xedpusparam\xe9terk\xe9nt csak referenciat\xedpusokat haszn\xe1lhatunk! Ez a korl\xe1toz\xe1s a generikusok implement\xe1ci\xf3j\xe1b\xf3l fakad, szemben m\xe1s nyelvekkel (p\xe9ld\xe1ul C++), a Java nem reifik\xe1ci\xf3t (sablon p\xe9ld\xe1nyos\xedt\xe1s \xfaj implement\xe1ci\xf3t hoz l\xe9tre, a megadott param\xe9terekkel), hanem t\xedpus t\xf6rl\xe9st haszn\xe1l.")),(0,r.kt)("h2",{id:"t\xedpust\xf6rl\xe9s"},"T\xedpust\xf6rl\xe9s"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"t\xedpus t\xf6rl\xe9s (type erasure)")," sor\xe1n, a a megadott sablon param\xe9terek t\xf6rl\u0151dnek, hely\xfckre egy konkr\xe9t referenciat\xedpus ker\xfcl (p\xe9ld\xe1ul ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),", de n\xe9ha valami specifikusabb)."),(0,r.kt)("p",null,"Teh\xe1t az el\u0151bbi k\xf3dunkb\xf3l ford\xedt\xe1st k\xf6vet\u0151en valami ilyesmi lesz:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Pair {\n  Object elem1;\n  Object elem2;\n\n  Object getElem1() {\n      return this.elem1;\n  }\n\n  public void setElem1(Object elem1) {\n      this.elem1 = elem1;\n  }\n}\n")),(0,r.kt)("p",null,"A sablonunk haszn\xe1lata meg valami ilyesmire fog fordulni:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Pair pair = new Pair();\npair.setElem1("abc");\n// t\xedpusk\xe9nyszer\xedt\xe9sek automatikusan beker\xfclnek a k\xf3dba\nString s = (String) pair.getElem1(); \n')),(0,r.kt)("p",null,"Egy\xe9bk\xe9nt kompatibilit\xe1si okokb\xf3l tudunk ilyet is csin\xe1lni:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Map nameToBook = new HashMap();\n")),(0,r.kt)("p",null,"Ez az \xfagynevezett nyers t\xedpus (raw type), haszn\xe1lata ker\xfclend\u0151 \xe9s erre a ford\xedt\xf3program is figyelmeztet."),(0,r.kt)("h2",{id:"alt\xedpusoss\xe1g"},"Alt\xedpusoss\xe1g"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Legyenek ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," t\xedpusok, ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," egy generikus t\xedpus, \xe9s legyen ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," alt\xedpusa ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"-nak, ekkor ",(0,r.kt)("inlineCode",{parentName:"p"},"C<B>")," nem alt\xedpusa ",(0,r.kt)("inlineCode",{parentName:"p"},"C<A>"),"-nak!\nP\xe9ld\xe1ul ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Integer>")," nem alt\xedpusa ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Object>"),"-nek!")),(0,r.kt)("p",null,"Ha ez nem \xedgy lenne, akkor a k\xf6vetkez\u0151 \xe9rtelmetlen k\xf3d m\u0171k\xf6dne:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Integer> ints = new ArrayList<>();\nList<Object> objs = ints;\nobjs.add(new Object());\nInteger value = ints.get(0); // integernek k\xe9ne lennie de \xedgy b\xe1rmi lehet\n")),(0,r.kt)("p",null,"T\xf6mb\xf6k nem sablonokkal vannak implement\xe1lva, ez\xe9rt kicsit m\xe1shogy m\u0171k\xf6dnek:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Integer[] ints = new Integer[5];\nObject[] objs = ints;\nobjs[0] = new Integer(4);\nobjs[1] = new Object(); // fut\xe1si idej\u0171 hiba (ArrayStoreException)\n")),(0,r.kt)("h2",{id:"t\xedpusparam\xe9ter-megk\xf6t\xe9sek"},"T\xedpusparam\xe9ter megk\xf6t\xe9sek"),(0,r.kt)("p",null,"A t\xedpusparam\xe9terekre megk\xf6t\xe9seket tehet\xfcnk (",(0,r.kt)("strong",{parentName:"p"},"bounded type parameter"),")."),(0,r.kt)("h3",{id:"extends"},(0,r.kt)("inlineCode",{parentName:"h3"},"extends")),(0,r.kt)("p",null,"Azt ellen\u0151rzi, hogy a ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," t\xedpus lesz\xe1rmazottja-e a megadott t\xedpusnak."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class FooPrinter<T extends PrintWriter> {\n    T writer;\n\n    public FooPrinter(T writer) {\n        this.writer = writer;\n    }\n    \n    void print(String s) {\n        writer.println(s + "foo");\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"FooPrinter<Integer> foo = new FooPrinter<>(...); //ford\xedt\xe1si hiba\nFooPrinter<PrintWriter> foo = new FooPrinter<>(new PrintWriter(...));\n")),(0,r.kt)("p",null,"Ekkor \xe9rtelemszer\u0171en a t\xedpust\xf6rl\xe9s sor\xe1n ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," helyett ",(0,r.kt)("inlineCode",{parentName:"p"},"PrintWriter")," ker\xfcl a t\xedpusparam\xe9ter hely\xe9re."),(0,r.kt)("p",null,"Lehet\u0151s\xe9g van bonyolultabb korl\xe1toz\xe1sok megad\xe1s\xe1ra is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// T lesz\xe1rmazottja Exception-nek \xe9s\n// megval\xf3s\xedtja az Cloneable \xe9s Collection<Integer> interf\xe9szeket\nclass Foo<T extends Exception & Cloneable & Collection<Integer>> { ... }\n")),(0,r.kt)("p",null,"A t\xedpusparam\xe9tereknek is lehetnek t\xedpusparam\xe9terei:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Foo<T, Cmp extends Comparator<T>> { ... }\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"A t\xedpusparam\xe9terek egym\xe1st\xf3l f\xfcgg\xe9se nem alkothat k\xf6rt!")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," (wildcard) karakterrel jel\xf6lhet\xfcnk tetsz\u0151leges t\xedpust."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"void f(List<?> list) { ... }\n")),(0,r.kt)("p",null,"Term\xe9szetesen ezt lehet kombin\xe1lni az kor\xe1bban l\xe1tott ",(0,r.kt)("inlineCode",{parentName:"p"},"extend"),"-el, interf\xe9sz megval\xf3s\xedt\xe1ssal viszont nem."),(0,r.kt)("h3",{id:"super"},(0,r.kt)("inlineCode",{parentName:"h3"},"super")),(0,r.kt)("p",null,"Azt ellen\u0151rzi, hogy a ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," t\xedpus sz\xfcl\u0151je-e az adott t\xedpusnak."),(0,r.kt)("h3",{id:"pecs-szab\xe1ly"},"PECS szab\xe1ly"),(0,r.kt)("p",null,'"Producer extends, consumer super". Ha gy\u0171jtem\xe9nyn\xe9l t\xedpusparam\xe9ter-megk\xf6t\xe9st haszn\xe1lunk. P\xe9ld\xe1ul ha egy lista elemit akarjuk el\xe9rni, akkor a lista a gy\xe1rt\xf3, teh\xe1t ',(0,r.kt)("inlineCode",{parentName:"p"},"List<? extends T>"),", ha hozz\xe1adni akarunk akkor mi vagyunk a gy\xe1rt\xf3 teh\xe1t ",(0,r.kt)("inlineCode",{parentName:"p"},"List<? super T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"<T> List<? super Comparable<T>> f(List<? extends Comparable<T>> param) {\n  List<? super Comparable<T> retval = new ArrayList<>();\n  for (var elem : param) {\n    retval.add(elem);\n  }\n  return retval;\n}\n")),(0,r.kt)("h2",{id:"met\xf3dusok"},"Met\xf3dusok"),(0,r.kt)("p",null,"A met\xf3dusoknak tudunk saj\xe1t t\xedpusparam\xe9tert adni, egy kicsit fura szintaxissal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"static <T> boolean noSameObjs(List<T> elems) {...}\n")),(0,r.kt)("p",null,"Megh\xedv\xe1s:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(C.<String>noSameObjs(texts));\n")))}u.isMDXComponent=!0}}]);