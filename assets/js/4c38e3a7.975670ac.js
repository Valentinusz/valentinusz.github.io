"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[7273],{3995:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"java/enum","title":"A felsorol\xe1si t\xedpus","description":"A Java nyelvben az felsorol\xe1s egy speci\xe1lis oszt\xe1ly, mely jobb eszk\xf6zt ad \xe9rt\xe9kek egy j\xf3l meghat\xe1rozott halmaz\xe1nak (p\xe9ld\xe1ul francia k\xe1rtya sz\xednei) \xe1br\xe1zol\xe1s\xe1ra.","source":"@site/notes/java/enum.md","sourceDirName":"java","slug":"/java/enum","permalink":"/notes/java/enum","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Valentinusz","lastUpdatedAt":1697492234000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"notesSidebar","previous":{"title":"Halad\xf3 Java","permalink":"/notes/java"},"next":{"title":"Tesztel\xe9s","permalink":"/notes/java/test"}}');var s=a(4848),l=a(8453);const i={sidebar_position:1},r="A felsorol\xe1si t\xedpus",o={},d=[{value:"Viselked\xe9s",id:"viselked\xe9s",level:2},{value:"M\u0171veletek",id:"m\u0171veletek",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"a-felsorol\xe1si-t\xedpus",children:"A felsorol\xe1si t\xedpus"})}),"\n",(0,s.jsx)(n.p,{children:"A Java nyelvben az felsorol\xe1s egy speci\xe1lis oszt\xe1ly, mely jobb eszk\xf6zt ad \xe9rt\xe9kek egy j\xf3l meghat\xe1rozott halmaz\xe1nak (p\xe9ld\xe1ul francia k\xe1rtya sz\xednei) \xe1br\xe1zol\xe1s\xe1ra."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"enum CardSuit {\n\tSPADES, HEARTS, CLUBS, DIAMONDS;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Bizonyos nyelvekben nincs ",(0,s.jsx)(n.code,{children:"enum"}),", ezen nyelvek eset\xe9ben valami ilyesmivel tudjuk helyettes\xedteni ezt a konstrukci\xf3t:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"class WorseCardSuit {\n\tfinal static int SPADES = 0;\n\tfinal static int HEARTS = 1;\n\tfinal static int CLUBS = 2;\n\tfinal static int DIAMONDS = 3;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Fontos megjegyezni, hogy a h\xe1tt\xe9rben a Java ford\xedt\xf3 is valami ilyesmit \xe1ll\xedt el\u0151, annyi k\xfcl\xf6nbs\xe9ggel hogy a ",(0,s.jsx)(n.code,{children:"final static"})," adattagok t\xedpusa ",(0,s.jsx)(n.code,{children:"CardSuit"})," lesz. Teh\xe1t szemben a C nyelvvel az ",(0,s.jsx)(n.code,{children:"enum"})," elemek m\xf6g\xf6ttes \xe9rt\xe9ke nem sz\xe1m, hanem objektum. Ezen objektum strukt\xfar\xe1ja az felsorol\xe1si t\xedpus \xedr\xe1sakor is megadhat\xf3."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'enum CardSuit {\n    SPADES("pikk"), HEARTS("sz\xedv"), CLUBS("treff"), DIAMONDS("k\xe1r\xf3");\n\n    private final String hungarianName;\n\n    CardSuit(String hungarianName) {\n        this.hungarianName = hungarianName;\n    }\n\n    public String getHungarianName() {\n        return this.hungarianName;\n    }\n\n    @Override\n    public String toString() {\n        return this.getHungarianName();\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["L\xe1that\xf3, hogy megadhatunk adattagokat konstruktort, \xedrhatunk \xe9s fel\xfcldefini\xe1lhatunk met\xf3dusokat (p\xe9ld\xe1ul amiket mint minden m\xe1s oszt\xe1ly a ",(0,s.jsx)(n.code,{children:"java.lang.Object"}),"-b\u0151l meg\xf6r\xf6k\xf6l)."]}),"\n",(0,s.jsx)(n.p,{children:"Lehet\u0151s\xe9g van elemenk\xe9nti fel\xfcldefini\xe1l\xe1sra is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'HEARTS("sz\xedv") {\n  @Override\n  public Color getColor() {\n    return Color.RED;\n  }\n},\n'})}),"\n",(0,s.jsx)(n.h2,{id:"viselked\xe9s",children:"Viselked\xe9s"}),"\n",(0,s.jsx)(n.p,{children:"A felsorol\xe1si t\xedpusokban szerepl\u0151 \xe9rt\xe9kek fut\xe1si id\u0151ben m\xe1r ismertek."}),"\n",(0,s.jsxs)(n.p,{children:["Minden ",(0,s.jsx)(n.code,{children:"enum"})," elemb\u0151l csak egy j\xf6n l\xe9tre mem\xf3ri\xe1ban, ez\xe9rt a ",(0,s.jsx)(n.code,{children:"=="})," oper\xe1tor biztons\xe1gosan haszn\xe1lhat\xf3 egyenl\u0151s\xe9gvizsg\xe1latra."]}),"\n",(0,s.jsxs)(n.p,{children:["Mivel az ",(0,s.jsx)(n.code,{children:"enum"}),"-ok \xe9rt\xe9kek j\xf3l meghat\xe1rozott halmaz\xe1t reprezent\xe1lj\xe1k, nem lehet bel\u0151l\xfck \xfaj oszt\xe1lyokat sz\xe1rmaztatni."]}),"\n",(0,s.jsxs)(n.p,{children:["Haszn\xe1lhat\xf3 ",(0,s.jsx)(n.code,{children:"switch"}),"-ben."]}),"\n",(0,s.jsx)(n.h2,{id:"m\u0171veletek",children:"M\u0171veletek"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"values()"})," megadja az ",(0,s.jsx)(n.code,{children:"enum"})," elemeit egy t\xf6mbben:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"CardSuit.values()\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ordinal()"})," megadja az adott felsorol\xe1si elem deklar\xe1ci\xf3beli poz\xedci\xf3j\xe1t:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"CardSuit.DIAMONDS.ordinal() // 3\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"valueOf(String name)"})," megadja azt az ",(0,s.jsx)(n.code,{children:"enum"})," elemet aminek a neve a megadott param\xe9terrel egyenl\u0151, ",(0,s.jsx)(n.code,{children:"IllegalArgumentException"}),"-t dob, ha nem l\xe9tezik."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'CardSuit.valueOf("DIAMONDS") // referencia CardSuit.DIAMONDS-re\nCardSuit.valueOf("asd") // IllegalArgumentException\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(6540);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);