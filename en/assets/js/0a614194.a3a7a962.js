"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=u(n),c=l,g=k["".concat(o,".").concat(c)]||k[c]||m[c]||s;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[k]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const s={sidebar_position:2},r="Tesztel\xe9s",i={unversionedId:"hjava/test",id:"hjava/test",title:"Tesztel\xe9s",description:"A tesztel\xe9snek sok m\xf3dszere l\xe9tezik (p\xe9ld\xe1ul integr\xe1ci\xf3s teszt, felhaszn\xe1l\xf3i teszt, form\xe1lis helyess\xe9gbizony\xedt\xe1s, ...), ezek k\xf6z\xfcl a legelterjedtebb az egys\xe9gteszt.",source:"@site/materials/hjava/test.md",sourceDirName:"hjava",slug:"/hjava/test",permalink:"/en/materials/hjava/test",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"A felsorol\xe1si t\xedpus",permalink:"/en/materials/hjava/enum"},next:{title:"Lambda kifejez\xe9sek",permalink:"/en/materials/hjava/lambda"}},o={},u=[{value:"Egys\xe9gteszt",id:"egys\xe9gteszt",level:2},{value:"JUnit",id:"junit",level:2}],p={toc:u},k="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tesztel\xe9s"},"Tesztel\xe9s"),(0,l.kt)("p",null,"A tesztel\xe9snek sok m\xf3dszere l\xe9tezik (p\xe9ld\xe1ul integr\xe1ci\xf3s teszt, felhaszn\xe1l\xf3i teszt, form\xe1lis helyess\xe9gbizony\xedt\xe1s, ...), ezek k\xf6z\xfcl a legelterjedtebb az egys\xe9gteszt."),(0,l.kt)("h2",{id:"egys\xe9gteszt"},"Egys\xe9gteszt"),(0,l.kt)("p",null,"Program legkisebb \xf6n\xe1ll\xf3 r\xe9szeinek funkcion\xe1lis helyess\xe9g\xe9t ellen\u0151rzik. Egys\xe9g alatt \xe9rthet\xfcnk egy met\xf3dust egy oszt\xe1lyt, vagy ak\xe1r egy teljes modult is."),(0,l.kt)("p",null,"Az egys\xe9gteszteknek nem lehetnek k\xfcls\u0151 f\xfcgg\u0151s\xe9gei (p\xe9ld\xe1ul f\xe1jlrendszer, adatb\xe1zis, h\xe1l\xf3zat)."),(0,l.kt)("p",null,"Fekete dobozos megk\xf6zel\xedt\xe9st haszn\xe1l, azaz csak az adott egys\xe9g nyilv\xe1nos interf\xe9sz\xe9t haszn\xe1lja."),(0,l.kt)("p",null,"Tesztvez\xe9relt fejleszt\xe9si m\xf3dszer (el\u0151sz\xf6r tesztek \xe9s azokhoz \xedrjuk meg a k\xf3dot)."),(0,l.kt)("h2",{id:"junit"},"JUnit"),(0,l.kt)("p",null,"Teszt keretrendszer Java nyelvhez. A tesztesetek tipikusan h\xe1rom r\xe9szb\u0151l \xe1llnak:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Arrange (teszteset el\u0151k\xe9sz\xedt\xe9se)"),(0,l.kt)("li",{parentName:"ul"},"Act (tesztelend\u0151 funkci\xf3 haszn\xe1lata)"),(0,l.kt)("li",{parentName:"ul"},"Assert (kapott eredm\xe9ny vizsg\xe1lata).")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class ListTest {\n    @Test // teszteket annot\xe1lni kell\n    void test() {\n      List<Integer> list = new ArrayList<>(); // Arrange\n      int size = myList.size(); // Act\n      assertEquals(0, size); // Assert (expected, actual)\n    }\n}\n")),(0,l.kt)("p",null,"Az eredm\xe9ny vizsg\xe1lat\xe1ra t\xf6bb met\xf3dus is haszn\xe1lhat\xf3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"assertEquals(expected, actual)")," egyenl\u0151s\xe9gvizsg\xe1lat ",(0,l.kt)("inlineCode",{parentName:"li"},"equals")," met\xf3dus alapj\xe1n"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"assertTrue(actual)")," \xe9s ",(0,l.kt)("inlineCode",{parentName:"li"},"assertFalse(actual)")," logikai egyenl\u0151s\xe9gvizsg\xe1lat"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"assertArrayEquals(actuals)")," t\xf6mb egyenl\u0151s\xe9gvizsg\xe1lat"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"assertNull(actual)")," \xe9s ",(0,l.kt)("inlineCode",{parentName:"li"},"assertNotNull(actual)")," ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," vizsg\xe1lat"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"assertThrows()")," ls ",(0,l.kt)("inlineCode",{parentName:"li"},"assertNotThrows()")," kiv\xe9teldob\xe1s vizsg\xe1lata p\xe9d\xe1ul ",(0,l.kt)("inlineCode",{parentName:"li"},"assertThrows(IllegalArgumentException.class, () -> { ... })"))),(0,l.kt)("p",null,"Lehet\u0151s\xe9g\xfcnk van a teszteset manu\xe1lis megbuktat\xe1s\xe1ra is a ",(0,l.kt)("inlineCode",{parentName:"p"},"fail()")," met\xf3dussal."),(0,l.kt)("p",null,"Egy tesztesetben t\xf6bb ",(0,l.kt)("inlineCode",{parentName:"p"},"assert"),"-et is elhelyezhet\xfcnk a teszteset futtat\xe1si azonban az els\u0151 sikertelen ",(0,l.kt)("inlineCode",{parentName:"p"},"assert"),"-n\xe9l meg fog \xe1llni."),(0,l.kt)("p",null,"Ha m\xe9gis le szeretn\xe9nk futtatni az \xf6sszes vizsg\xe1latot lehet\u0151s\xe9g\xfcnk van az ",(0,l.kt)("inlineCode",{parentName:"p"},"assert"),"-eket egy ",(0,l.kt)("inlineCode",{parentName:"p"},"assertAll()"),"-ba csomagolni:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\nvoid test() {\n    assertAll(\n        () -> assertEquals(1, myList.size()),\n        () -> assertEquals(123, myList.get(0))\n    );\n}\n")))}m.isMDXComponent=!0}}]);