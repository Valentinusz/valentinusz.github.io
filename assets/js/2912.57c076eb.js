(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[2912],{2660:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>kt});var s=n(7294),a=n(833),o=n(902),l=n(5893);const i=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(i.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(i);if(null===e)throw new o.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4334),m=n(7524),h=n(5999),p=n(9960);function b(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,l.jsxs)(p.Z,{className:(0,u.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function f(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(b,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(b,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=c();return(0,l.jsx)(f,{previous:e.previous,next:e.next})}var x=n(2263),v=n(143),j=n(5281),N=n(373),k=n(4477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){const t=C[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function y(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.Z,{to:n,onClick:s,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,x.Z)(),{pluginId:a}=(0,v.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,N.J)(a),{latestDocSuggestion:i,latestVersionSuggestion:r}=(0,v.Jo)(a),c=i??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.Z)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(L,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(y,{versionLabel:r.label,to:c.path,onClick:()=>o(r.name)})})]})}function B(e){let{className:t}=e;const n=(0,k.E)();return n.banner?(0,l.jsx)(_,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,k.E)();return n.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function Z(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:j.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(T,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(Z,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const A={iconEdit:"iconEdit_Z9Sw"};function H(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(A.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,l.jsxs)(p.Z,{to:t,className:j.k.common.editThisPage,children:[(0,l.jsx)(H,{}),(0,l.jsx)(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const M={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function S(e){let{permalink:t,label:n,count:s}=e;return(0,l.jsxs)(p.Z,{href:t,className:(0,u.Z)(M.tag,s?M.tagWithCount:M.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const U={tags:"tags_jXut",tag:"tag_QGVx"};function V(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(U.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:U.tag,children:(0,l.jsx)(S,{label:t,permalink:n})},n)}))})]})}const O={lastUpdated:"lastUpdated_vwxv"};function P(e){return(0,l.jsx)("div",{className:(0,u.Z)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(V,{...e})})})}function R(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(j.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(I,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",O.lastUpdated),children:(n||s)&&(0,l.jsx)(E,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function z(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,i=o.length>0,r=!!(t||n||a);return i||r?(0,l.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)(P,{tags:o}),r&&(0,l.jsx)(R,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var $=n(6043),D=n(6668);function W(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function F(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function G(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>q(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function J(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,D.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function X(e){const t=(0,s.useRef)(void 0),n=J();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),r=G(i,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function Y(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,l.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(p.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(Y,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const Q=s.memo(Y);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:r,...c}=e;const d=(0,D.L)(),u=i??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>F({toc:W(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return X((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,l.jsx)(Q,{toc:h,className:n,linkClassName:a,...c})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function te(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:i}=(0,$.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(ne.tocCollapsible,!o&&ne.tocCollapsibleExpanded,n),children:[(0,l.jsx)(te,{collapsed:o,onClick:i}),(0,l.jsx)($.z,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:o,children:(0,l.jsx)(K,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const ae={tocMobile:"tocMobile_ITEo"};function oe(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,ae.tocMobile)})}const le={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},ie="table-of-contents__link toc-highlight",re="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.Z)(le.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(K,{...n,linkClassName:ie,linkActiveClassName:re})})}function de(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var ue=n(7955),me=n(1151),he=n(5742),pe=n(2389),be=n(2949);function fe(){const{prism:e}=(0,D.L)(),{colorMode:t}=(0,be.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var ge=n(7594),xe=n.n(ge);const ve=/title=(?<quote>["'])(?<title>.*?)\1/,je=/\{(?<range>[\d,-]+)\}/,Ne={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function ke(e,t){const n=e.map((e=>{const{start:n,end:s}=Ne[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function Ce(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&je.test(o)){const e=o.match(je).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=xe()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return ke(["js","jsBlock"],t);case"jsx":case"tsx":return ke(["js","jsBlock","jsx"],t);case"html":return ke(["js","jsBlock","html"],t);case"python":case"py":case"bash":return ke(["bash"],t);case"markdown":case"md":return ke(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return ke(["tex"],t);case"lua":case"haskell":case"sql":return ke(["lua"],t);case"wasm":return ke(["wasm"],t);default:return ke(Object.keys(Ne).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(s,a),i=n.split("\n"),r=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),c=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(l);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));c[t]?r[c[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;xe()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const Le={codeBlockContainer:"codeBlockContainer_Ckt0"};function ye(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(fe());return(0,l.jsx)(t,{...n,style:s,className:(0,u.Z)(n.className,Le.codeBlockContainer,j.k.common.codeBlock)})}const _e={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Be(e){let{children:t,className:n}=e;return(0,l.jsx)(ye,{as:"pre",tabIndex:0,className:(0,u.Z)(_e.codeBlockStandalone,"thin-scrollbar",n),children:(0,l.jsx)("code",{className:_e.codeBlockLines,children:t})})}const we={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Te(e,t){const[n,a]=(0,s.useState)(),l=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{l()}),[l]),function(e,t,n){void 0===n&&(n=we);const a=(0,o.zX)(t),l=(0,o.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,l),()=>t.disconnect()}),[e,a,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var Ze=n(204);const Ee={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function Ae(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,u.Z)(n,s&&Ee.codeLine)}),r=t.map(((e,t)=>(0,l.jsx)("span",{...o({token:e,key:t})},t)));return(0,l.jsxs)("span",{...i,children:[s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:Ee.codeLineNumber}),(0,l.jsx)("span",{className:Ee.codeLineContent,children:r})]}):r,(0,l.jsx)("br",{})]})}function He(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function Ie(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const Me={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Se(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),l=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(t),o(!0),i.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,l.jsx)("button",{type:"button","aria-label":a?(0,h.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,Me.copyButton,a&&Me.copyButtonCopied),onClick:r,children:(0,l.jsxs)("span",{className:Me.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(He,{className:Me.copyButtonIcon}),(0,l.jsx)(Ie,{className:Me.copyButtonSuccessIcon})]})})}function Ue(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const Ve={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Oe(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,h.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,s&&Ve.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,l.jsx)(Ue,{className:Ve.wordWrapButtonIcon,"aria-hidden":"true"})})}function Pe(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:i,language:r}=e;const{prism:{defaultLanguage:c,magicComments:d}}=(0,D.L)(),m=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??c),h=fe(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),l=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Te(o,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),b=function(e){return e?.match(ve)?.groups.title??""}(a)||o,{lineClassNames:f,code:g}=Ce(t,{metastring:a,language:m,magicComments:d}),x=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,l.jsxs)(ye,{as:"div",className:(0,u.Z)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[b&&(0,l.jsx)("div",{className:_e.codeBlockTitle,children:b}),(0,l.jsxs)("div",{className:_e.codeBlockContent,children:[(0,l.jsx)(Ze.y$,{theme:h,code:g,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,l.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.Z)(t,_e.codeBlock,"thin-scrollbar"),style:n,children:(0,l.jsx)("code",{className:(0,u.Z)(_e.codeBlockLines,x&&_e.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,l.jsx)(Ae,{line:e,getLineProps:a,getTokenProps:o,classNames:f[t],showLineNumbers:x},t)))})})}}),(0,l.jsxs)("div",{className:_e.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,l.jsx)(Oe,{className:_e.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,l.jsx)(Se,{className:_e.codeButton,code:g})]})]})]})}function Re(e){let{children:t,...n}=e;const a=(0,pe.Z)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof o?Pe:Be;return(0,l.jsx)(i,{...n,children:o},String(a))}var ze=n(7459);const $e={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function De(e){return!!e&&("SUMMARY"===e.tagName||De(e.parentElement))}function We(e,t){return!!e&&(e===t||We(e.parentElement,t))}function Fe(e){let{summary:t,children:n,...a}=e;const o=(0,pe.Z)(),i=(0,s.useRef)(null),{collapsed:r,setCollapsed:c}=(0,$.u)({initialState:!a.open}),[d,u]=(0,s.useState)(a.open),m=s.isValidElement(t)?t:(0,l.jsx)("summary",{children:t??"Details"});return(0,l.jsxs)("details",{...a,ref:i,open:d,"data-collapsed":r,className:(0,ze.Z)($e.details,o&&$e.isBrowser,a.className),onMouseDown:e=>{De(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;De(t)&&We(t,i.current)&&(e.preventDefault(),r?(c(!1),u(!0)):c(!0))},children:[m,(0,l.jsx)($.z,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),u(!e)},children:(0,l.jsx)("div",{className:$e.collapsibleContent,children:n})})]})}const qe={details:"details_b_Ee"},Ge="alert alert--info";function Je(e){let{...t}=e;return(0,l.jsx)(Fe,{...t,className:(0,u.Z)(Ge,qe.details,t.className)})}function Xe(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==n))});return(0,l.jsx)(Je,{...e,summary:n,children:a})}function Ye(e){return(0,l.jsx)(ue.Z,{...e})}const Qe={containsTaskList:"containsTaskList_mC6p"};function Ke(e){if(void 0!==e)return(0,u.Z)(e,e?.includes("contains-task-list")&&Qe.containsTaskList)}const et={img:"img_ev3q"};var tt=n(3032);const nt={Head:he.Z,details:Xe,Details:Xe,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,l.jsx)("code",{...e}):(0,l.jsx)(Re,{...e})},a:function(e){return(0,l.jsx)(p.Z,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:Ke(e.className)})},img:function(e){return(0,l.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,et.img))});var t},h1:e=>(0,l.jsx)(Ye,{as:"h1",...e}),h2:e=>(0,l.jsx)(Ye,{as:"h2",...e}),h3:e=>(0,l.jsx)(Ye,{as:"h3",...e}),h4:e=>(0,l.jsx)(Ye,{as:"h4",...e}),h5:e=>(0,l.jsx)(Ye,{as:"h5",...e}),h6:e=>(0,l.jsx)(Ye,{as:"h6",...e}),admonition:tt.Z,mermaid:()=>null};function st(e){let{children:t}=e;return(0,l.jsx)(me.Z,{components:nt,children:t})}function at(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(ue.Z,{as:"h1",children:n})}),(0,l.jsx)(st,{children:t})]})}var ot=n(3438),lt=n(8596),it=n(4996);function rt(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ct={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function dt(){const e=(0,it.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(rt,{className:ct.breadcrumbHomeIcon})})})}const ut={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function mt(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(p.Z,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function ht(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function pt(){const e=(0,ot.s1)(),t=(0,lt.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,ut.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(dt,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ht,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(mt,{href:a,isLast:s,children:t.label})},n)}))]})}):null}function bt(){return(0,l.jsx)(h.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function ft(){return(0,l.jsx)(h.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function gt(){return(0,l.jsx)(he.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function xt(e){let{className:t}=e;return(0,l.jsx)(tt.Z,{type:"caution",title:(0,l.jsx)(bt,{}),className:(0,u.Z)(t,j.k.common.unlistedBanner),children:(0,l.jsx)(ft,{})})}function vt(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(gt,{}),(0,l.jsx)(xt,{...e})]})}const jt={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Nt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(oe,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(de,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&jt.docItemCol),children:[s&&(0,l.jsx)(vt,{}),(0,l.jsx)(B,{}),(0,l.jsxs)("div",{className:jt.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(pt,{}),(0,l.jsx)(w,{}),n.mobile,(0,l.jsx)(at,{children:t}),(0,l.jsx)(z,{})]}),(0,l.jsx)(g,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function kt(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.FG,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(Nt,{children:(0,l.jsx)(n,{})})]})})}},4697:(e,t,n)=>{"use strict";n.d(t,{X:()=>o});var s=n(7294),a=n(5893);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),l=n?.props.children;return{mdxAdmonitionTitle:l,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i,a:()=>l});var s=n(7294);const a={},o=s.createContext(a);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(o.Provider,{value:t},e.children)}},512:(e,t,n)=>{"use strict";function s(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a});const a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(a&&(a+=" "),a+=t);return a}}}]);