"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[7420],{2378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(5893),o=n(1151);const s={},r="El\u0151zetes / Ut\xf3lagos m\u0171veletek",i={id:"bigdata/hadoop/pre_post_operations",title:"El\u0151zetes / Ut\xf3lagos m\u0171veletek",description:"A Mapper \xe9s a Reducer oszt\xe1lyban defini\xe1lva van egy setup() \xe9s egy cleanup() m\u0171velet, melyek az adott Map/Reduce",source:"@site/notes/bigdata/01_hadoop/05_pre_post_operations.mdx",sourceDirName:"bigdata/01_hadoop",slug:"/bigdata/hadoop/pre_post_operations",permalink:"/notes/bigdata/hadoop/pre_post_operations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Boda B\xe1lint",lastUpdatedAt:1699042492,formattedLastUpdatedAt:"2023. nov. 3.",sidebarPosition:5,frontMatter:{},sidebar:"notesSidebar",previous:{title:"Sz\xe1ml\xe1l\xf3k",permalink:"/notes/bigdata/hadoop/counters"},next:{title:"Konfigur\xe1ci\xf3",permalink:"/notes/bigdata/hadoop/configuration"}},d={},c=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"el\u0151zetes--ut\xf3lagos-m\u0171veletek",children:"El\u0151zetes / Ut\xf3lagos m\u0171veletek"}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.code,{children:"Mapper"})," \xe9s a ",(0,a.jsx)(t.code,{children:"Reducer"})," oszt\xe1lyban defini\xe1lva van egy ",(0,a.jsx)(t.code,{children:"setup()"})," \xe9s egy ",(0,a.jsx)(t.code,{children:"cleanup()"})," m\u0171velet, melyek az adott Map/Reduce\ntask futtat\xe1sa el\u0151tt vagy ut\xe1n ker\xfclnek v\xe9grehajt\xe1sra."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"public class Mapper<KEYIN, VALUEIN, KEYOUT, VALUEOUT> {\n    ...\n    protected void setup(Context context) throws IOException, InterruptedException { }\n    protected void cleanup(Context context) throws IOException, InterruptedException { }\n    ...\n}\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"danger",children:(0,a.jsx)(t.p,{children:"Ezek a m\u0171veletek pontosan annyiszor futnak le, ah\xe1ny Map/Reduce task van. Ez egyg\xe9pes rendszereken nem okoz gondot, de\negy rendles klaszteren ez ak\xe1r a sz\xe1m\xedt\xf3g\xe9pek sz\xe1ma is lehet."})}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsx)(t.p,{children:"A k\xf6vetkez\u0151 tr\xfckkel garant\xe1lhatjuk, hogy csak egy Reduce task fusson le:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:"title='Driver.java'",children:'public static void main(String[] args) {\n    ...\n    Job job = Job.getInstance(conf, "job-name");\n    job.setNumReduceTasks(1);\n    ...\n}\n'})})]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);