"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[2919],{9268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(5893),r=n(1151);const a={sidebar_position:6},s="A rekord t\xedpus",i={id:"java/record",title:"A rekord t\xedpus",description:"Java 14 bevezetett egy \xfaj oszt\xe1lyt\xedpust a record-ot, mely lehet\u0151v\xe9 teszi, hogy egyszer\u0171bben defini\xe1ljunk",source:"@site/notes/java/record.md",sourceDirName:"java",slug:"/java/record",permalink:"/notes/java/record",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Boda B\xe1lint",lastUpdatedAt:1698432915,formattedLastUpdatedAt:"2023. okt. 27.",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"notesSidebar",previous:{title:"Generikusok",permalink:"/notes/java/generic"},next:{title:"Annot\xe1ci\xf3k",permalink:"/notes/java/annotation"}},d={},c=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"a-rekord-t\xedpus",children:"A rekord t\xedpus"}),"\n",(0,o.jsxs)(t.p,{children:["Java 14 bevezetett egy \xfaj oszt\xe1lyt\xedpust a ",(0,o.jsx)(t.code,{children:"record"}),"-ot, mely lehet\u0151v\xe9 teszi, hogy egyszer\u0171bben defini\xe1ljunk\n",(0,o.jsx)(t.strong,{children:"nem mut\xe1lhat\xf3 oszt\xe1ly"}),"okat."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"public record Point(int x, int y) {\n    // term\xe9szetesen defini\xe1lhatunk met\xf3dusokat\n    public double distance(Point other) {\n        if (other == null) {\n            throw new IllegalArgumentException();\n        }\n        return Math.sqrt(Math.pow(other.x() - this.x(), 2) + Math.pow(other.y() - this.y(), 2));\n    }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Ekkor legener\xe1l\xe1sra ker\xfclnek a k\xf6vetkez\u0151k:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"Point point = new Point(5, 3); // minden adattagot tartalmaz\xf3 konstruktor\npoint.x(); // getter x-hez\npoint.y(); // getter y-hoz\npoint.hashCode();\npoint.equals(new Point(5, 3));\npoint.toString();\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(7294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);