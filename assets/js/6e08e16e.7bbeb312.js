"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,c=k["".concat(o,".").concat(d)]||k[d]||u[d]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},i="Lambda kifejez\xe9sek",p={unversionedId:"hjava/lambda",id:"hjava/lambda",title:"Lambda kifejez\xe9sek",description:"Esetenk\xe9nt el\u0151fordul, hogy param\xe9terk\xe9nt egy konkr\xe9t lefuttatand\xf3 k\xf3dot, f\xfcggv\xe9nyt szeretn\xe9nk \xe1tadni. A Java",source:"@site/materials/hjava/lambda.md",sourceDirName:"hjava",slug:"/hjava/lambda",permalink:"/materials/hjava/lambda",draft:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1695973397,formattedLastUpdatedAt:"2023. szept. 29.",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tesztel\xe9s",permalink:"/materials/hjava/test"},next:{title:"Folyamok",permalink:"/materials/hjava/stream"}},o={},s=[{value:"Funkcion\xe1lis interf\xe9szek",id:"funkcion\xe1lis-interf\xe9szek",level:2},{value:"Function",id:"function",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Supplier",id:"supplier",level:3},{value:"Runnable",id:"runnable",level:3},{value:"Predicate",id:"predicate",level:3},{value:"UnaryOperator, BinaryOperator",id:"unaryoperator-binaryoperator",level:3},{value:"Specializ\xe1lt interf\xe9szek",id:"specializ\xe1lt-interf\xe9szek",level:2},{value:"T\xf6bbparam\xe9teres interf\xe9szek",id:"t\xf6bbparam\xe9teres-interf\xe9szek",level:2},{value:"B\u0151v\xedtett interf\xe9szek",id:"b\u0151v\xedtett-interf\xe9szek",level:3},{value:"Comparator",id:"comparator",level:3}],m={toc:s},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lambda-kifejez\xe9sek"},"Lambda kifejez\xe9sek"),(0,r.kt)("p",null,"Esetenk\xe9nt el\u0151fordul, hogy param\xe9terk\xe9nt egy konkr\xe9t lefuttatand\xf3 k\xf3dot, f\xfcggv\xe9nyt szeretn\xe9nk \xe1tadni. A Java\noszt\xe1lyalap\xfa megk\xf6zel\xedt\xe9se, azonban nem teszi lehet\u0151v\xe9, hogy \xf6n\xe1ll\xf3 f\xfcggv\xe9nyeket defini\xe1ljunk."),(0,r.kt)("p",null,"Emiatt a f\xfcggv\xe9ny\xfcnket egy oszt\xe1lyba kell szervezn\xfcnk, amit p\xe9ld\xe1nyos\xedtanunk kell, vagy egy interface-t kell\nimplement\xe1lnunk."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface Printable {\n    void print();\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Printable printable = new Printable() {\n            @Override\n            public void print() {\n                System.out.println("asd");\n            }\n        };\n    }\n}\n')),(0,r.kt)("p",null,"L\xe1thatjuk, hogy ez rengeteg felesleges k\xf3ddal j\xe1r. Ezen probl\xe9ma megold\xe1s\xe1ra vezette be a Java 8 a lambda kifejez\xe9seket."),(0,r.kt)("p",null,"Egy interf\xe9szt ",(0,r.kt)("strong",{parentName:"p"},"funkcion\xe1lis interf\xe9sz"),"nek nevez\xfcnk, ha ",(0,r.kt)("strong",{parentName:"p"},"egyetlen absztrakt met\xf3dussal rendelkezik"),"."),(0,r.kt)("p",null,"Jel\xf6l\xe9s\xe9re a ",(0,r.kt)("inlineCode",{parentName:"p"},"@FunctionalInterface")," annot\xe1ci\xf3t haszn\xe1ljuk, ami b\xe1r opcion\xe1lis megad\xe1sa aj\xe1nlott, mivel \xedgy a ford\xedt\xf3 ellen\u0151rizni tudja, hogy val\xf3ban funkcion\xe1lis interf\xe9szt adunk meg."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@FunctionalInterface\npublic interface Printable {\n    void print();\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n    public static void main(String[] args) {\n        Printable lambda = () -> System.out.println("asd");\n        lambda.print() // megh\xedv\xe1s\n    }\n}\n')),(0,r.kt)("p",null,"\xc1ltal\xe1ban nincs sz\xfcks\xe9g\xfcnk saj\xe1t funkcion\xe1lis interf\xe9szek defini\xe1l\xe1s\xe1ra, mivel a legt\xf6bb haszn\xe1lati esetet a nyelv be\xe9p\xedtett interf\xe9szei lefedik."),(0,r.kt)("h2",{id:"funkcion\xe1lis-interf\xe9szek"},"Funkcion\xe1lis interf\xe9szek"),(0,r.kt)("h3",{id:"function"},"Function"),(0,r.kt)("p",null,"A matematik\xe1b\xf3l j\xf3l ismert f\xfcggv\xe9ny, egy bemenethez egy kimenetet rendel. Egyetlen met\xf3dusa az ",(0,r.kt)("inlineCode",{parentName:"p"},"apply()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Function<Integer, Integer> increment = n -> n+1;\nincrement.apply(5);\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"B\xe1r logikusnak t\u0171nne, sajnos a Java nem engedi meg azt, hogy a f\xfcggv\xe9nyt egyszer\u0171en ",(0,r.kt)("inlineCode",{parentName:"p"},"increment(5)")," m\xf3don h\xedvjuk meg.")),(0,r.kt)("h3",{id:"consumer"},"Consumer"),(0,r.kt)("p",null,"Olyan lambda mely egy param\xe9terrel rendelkezik, de nem ad vissza \xe9rt\xe9ket."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Consumer<Integer> printer = n -> System.out.println(n);\nprinter.accept(5);\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Amikor egy lambda csak egy megl\xe9v\u0151 f\xfcggv\xe9nyt h\xedv meg haszn\xe1lhatunk met\xf3dush\xedv\xe1s helyett ",(0,r.kt)("strong",{parentName:"p"},"met\xf3dusreferenci\xe1t")," is."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Consumer<Integer> printer = System.out::println;\n"))),(0,r.kt)("h3",{id:"supplier"},"Supplier"),(0,r.kt)("p",null,"Nincs param\xe9tere \xe9s \xe9rt\xe9ket ad vissza."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Supplier<String> abc = () -> "abc...";\nString abcString = abc.get();\n')),(0,r.kt)("h3",{id:"runnable"},"Runnable"),(0,r.kt)("p",null,"Nincs param\xe9tere, nem t\xe9r ad vissza \xe9rt\xe9ket."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Runnable r = () -> System.out.println("valami");\nr.run();\n')),(0,r.kt)("h3",{id:"predicate"},"Predicate"),(0,r.kt)("p",null,"Param\xe9terhez logikai \xe9rt\xe9ket rendel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Predicate<Integer> gt5 = n -> n > 5;\ngt5.test(6);\n")),(0,r.kt)("h3",{id:"unaryoperator-binaryoperator"},"UnaryOperator, BinaryOperator"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," speci\xe1lis esete, ahol a ",(0,r.kt)("strong",{parentName:"p"},"param\xe9ter")," \xe9s a ",(0,r.kt)("strong",{parentName:"p"},"visszat\xe9r\xe9si \xe9rt\xe9k t\xedpusa azonos"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"UnaryOperator<Integer> negate = n -> -1 * n;\nnegate.apply(5);\n")),(0,r.kt)("h2",{id:"specializ\xe1lt-interf\xe9szek"},"Specializ\xe1lt interf\xe9szek"),(0,r.kt)("p",null,"A Java generikus rendszere nem teszi lehet\u0151v\xe9, hogy primit\xedv t\xedpusok t\xedpusparam\xe9terek legyenek. A wrapper oszt\xe1lyok\n(p\xe9ld\xe1ul ",(0,r.kt)("inlineCode",{parentName:"p"},"Integer"),") haszn\xe1lata azonban rontja a teljes\xedtm\xe9nyt, ez\xe9rt az el\u0151bb eml\xedtett funkcion\xe1lis interf\xe9szek t\xf6bbs\xe9ge\nrendelkezik az ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"long"),", \xe9s ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," primit\xedv t\xedpusokra specializ\xe1lt v\xe1ltozattal."),(0,r.kt)("p",null,"P\xe9ld\xe1ul:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"IntUnaryOperator increment2 = n -> n+1;\nincrement2.applyAsInt(5); // met\xf3dusnevek elt\xe9rnek\n")),(0,r.kt)("h2",{id:"t\xf6bbparam\xe9teres-interf\xe9szek"},"T\xf6bbparam\xe9teres interf\xe9szek"),(0,r.kt)("h3",{id:"b\u0151v\xedtett-interf\xe9szek"},"B\u0151v\xedtett interf\xe9szek"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Predicate"),", \xe9s ",(0,r.kt)("inlineCode",{parentName:"p"},"UnaryOperator")," mind rendelkeznek k\xe9t param\xe9terre b\u0151v\xedtett v\xe1ltozatokkal."),(0,r.kt)("p",null,"P\xe9ld\xe1ul:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BiPredicate<Integer, Integer> greaterThan = (a, b) -> a > b;\ngreaterThan.test(5, 7);\n\nBinaryOperator<Integer> add = (a, b) -> a + b;\nadd.apply(5, 3);\n")),(0,r.kt)("h3",{id:"comparator"},"Comparator"),(0,r.kt)("p",null,"H\xe1romir\xe1ny\xfa (-1, 0, 1 \xe9rt\xe9keket visszaad\xf3) \xf6sszehasonl\xedt\xe1st v\xe9gez a megadott param\xe9tereken."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Comparator<Integer> comparator = Integer::compareTo;\ncomparator.compare(5, 6);\n")))}u.isMDXComponent=!0}}]);