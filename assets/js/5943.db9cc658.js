"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[5943],{5943:(e,t,s)=>{s.d(t,{diagram:()=>z});var o=s(1504),i=s(5625),a=s(2977),n=s(5322),r=s(7936);s(7484),s(7967),s(7856),s(1644),s(9354);const d="rect",l="rectWithTitle",c="statediagram",p=`${c}-state`,b="transition",g=`${b} note-edge`,h=`${c}-note`,u=`${c}-cluster`,y=`${c}-cluster-alt`,f="parent",w="note",x="----",$=`${x}${w}`,m=`${x}${f}`,T="fill:none",S="fill: #333",k="text",D="normal";let v={},A=0;function B(e="",t=0,s="",o=x){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const C=(e,t,s,i,a,r)=>{const c=s.id,b=null==(x=i[c])?"":x.classes?x.classes.join(" "):"";var x;if("root"!==c){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),v[c]||(v[c]={id:c,shape:t,description:n.e.sanitizeText(c,(0,n.c)()),classes:`${b} ${p}`});const i=v[c];s.description&&(Array.isArray(i.description)?(i.shape=l,i.description.push(s.description)):i.description.length>0?(i.shape=l,i.description===c?i.description=[s.description]:i.description=[i.description,s.description]):(i.shape=d,i.description=s.description),i.description=n.e.sanitizeTextOrArray(i.description,(0,n.c)())),1===i.description.length&&i.shape===l&&(i.shape=d),!i.type&&s.doc&&(n.l.info("Setting cluster for ",c,R(s)),i.type="group",i.dir=R(s),i.shape=s.type===o.a?"divider":"roundedWithTitle",i.classes=i.classes+" "+u+" "+(r?y:""));const a={labelStyle:"",shape:i.shape,labelText:i.description,classes:i.classes,style:"",id:c,dir:i.dir,domId:B(c,A),type:i.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:c+$+"-"+A,domId:B(c,A,w),type:i.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:i.classes,style:"",id:c+m,domId:B(c,A,f),type:"group",padding:0};A++;const n=c+m;e.setNode(n,o),e.setNode(t.id,t),e.setNode(c,a),e.setParent(c,n),e.setParent(t.id,n);let r=c,d=t.id;"left of"===s.note.position&&(r=t.id,d=c),e.setEdge(r,d,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:g,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D})}else e.setNode(c,a)}t&&"root"!==t.id&&(n.l.trace("Setting node ",c," to be child of its parent ",t.id),e.setParent(c,t.id)),s.doc&&(n.l.trace("Adding nodes children "),E(e,s,s.doc,i,a,!r))},E=(e,t,s,i,a,r)=>{n.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:C(e,t,s,i,a,r);break;case o.S:{C(e,t,s.state1,i,a,r),C(e,t,s.state2,i,a,r);const o={id:"edge"+A,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:n.e.sanitizeText(s.description,(0,n.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:D,classes:b};e.setEdge(s.state1.id,s.state2.id,o,A),A++}}}))},R=(e,t=o.c)=>{let s=t;if(e.doc)for(let o=0;o<e.doc.length;o++){const t=e.doc[o];"dir"===t.stmt&&(s=t.value)}return s},V={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){n.l.info("Drawing state diagram (v2)",t),v={},o.db.getDirection();const{securityLevel:l,state:p}=(0,n.c)(),b=p.nodeSpacing||50,g=p.rankSpacing||50;n.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),n.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new i.k({multigraph:!0,compound:!0}).setGraph({rankdir:R(o.db.getRootDocV2()),nodesep:b,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;C(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===l&&(y=(0,a.Ys)("#i"+t));const f="sandbox"===l?(0,a.Ys)(y.nodes()[0].contentDocument.body):(0,a.Ys)("body"),w=f.select(`[id="${t}"]`),x=f.select("#"+t+" g");await(0,r.r)(x,u,["barb"],c,t);n.u.insertTitle(w,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const $=w.node().getBBox(),m=$.width+16,T=$.height+16;w.attr("class",c);const S=w.node().getBBox();(0,n.i)(w,T,m,p.useMaxWidth);const k=`${S.x-8} ${S.y-8} ${m} ${T}`;n.l.debug(`viewBox ${k}`),w.attr("viewBox",k);const D=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const i of D){const e=i.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),i.insertBefore(t,i.firstChild)}}},z={parser:o.p,db:o.d,renderer:V,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);