(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81,568],{3311:function(e,n,o){Promise.resolve().then(o.bind(o,7867)),Promise.resolve().then(o.bind(o,1085)),Promise.resolve().then(o.bind(o,575)),Promise.resolve().then(o.bind(o,9295)),Promise.resolve().then(o.bind(o,1288)),Promise.resolve().then(o.bind(o,1214)),Promise.resolve().then(o.bind(o,9818)),Promise.resolve().then(o.bind(o,2847)),Promise.resolve().then(o.bind(o,1522)),Promise.resolve().then(o.bind(o,6066)),Promise.resolve().then(o.bind(o,4766)),Promise.resolve().then(o.bind(o,5312)),Promise.resolve().then(o.bind(o,5472)),Promise.resolve().then(o.bind(o,124)),Promise.resolve().then(o.bind(o,2477)),Promise.resolve().then(o.bind(o,2092)),Promise.resolve().then(o.bind(o,6709)),Promise.resolve().then(o.bind(o,4330)),Promise.resolve().then(o.bind(o,6356)),Promise.resolve().then(o.bind(o,8829)),Promise.resolve().then(o.bind(o,1e3)),Promise.resolve().then(o.bind(o,6749)),Promise.resolve().then(o.bind(o,3404)),Promise.resolve().then(o.bind(o,2258)),Promise.resolve().then(o.bind(o,1162)),Promise.resolve().then(o.bind(o,911)),Promise.resolve().then(o.bind(o,5094)),Promise.resolve().then(o.bind(o,9316)),Promise.resolve().then(o.bind(o,1177)),Promise.resolve().then(o.bind(o,7868)),Promise.resolve().then(o.bind(o,3580)),Promise.resolve().then(o.bind(o,404)),Promise.resolve().then(o.bind(o,5022)),Promise.resolve().then(o.bind(o,9678)),Promise.resolve().then(o.bind(o,5234)),Promise.resolve().then(o.bind(o,3500)),Promise.resolve().then(o.bind(o,9670)),Promise.resolve().then(o.bind(o,6204)),Promise.resolve().then(o.bind(o,435)),Promise.resolve().then(o.bind(o,4630)),Promise.resolve().then(o.bind(o,7330)),Promise.resolve().then(o.bind(o,5731)),Promise.resolve().then(o.bind(o,8780)),Promise.resolve().then(o.bind(o,1467)),Promise.resolve().then(o.bind(o,9511)),Promise.resolve().then(o.bind(o,1908)),Promise.resolve().then(o.bind(o,5995)),Promise.resolve().then(o.bind(o,6983)),Promise.resolve().then(o.bind(o,8651)),Promise.resolve().then(o.bind(o,6948)),Promise.resolve().then(o.bind(o,2060)),Promise.resolve().then(o.bind(o,6694)),Promise.resolve().then(o.bind(o,9909)),Promise.resolve().then(o.bind(o,197)),Promise.resolve().then(o.bind(o,3714)),Promise.resolve().then(o.bind(o,6537)),Promise.resolve().then(o.bind(o,2796)),Promise.resolve().then(o.bind(o,2468)),Promise.resolve().then(o.bind(o,9889))},1522:function(e,n,o){"use strict";o.d(n,{default:function(){return s}});var i=o(2265),r=o(9376);function s(){let e=(0,r.useRouter)();return(0,i.useEffect)(()=>{let e=window.location.hash;if(e){let n=e.replace("#",""),o=document.getElementById(n);o&&o.scrollIntoView({behavior:"smooth"})}},[e]),null}},9889:function(e,n,o){"use strict";o.d(n,{CodeBlock:function(){return c}});var i=o(7437),r=o(2265);o(5336);var s=o(5404),t=o.n(s),l=o(7187),d=o(1747),h=o.n(d);o(159),o(4473),o(6650),o(7257),o(3180);let c=e=>{let{highlight:n,codeInstances:o=[],codePreview:s,copyButton:d=!0,compact:c=!1,className:a,style:b}=e,m=(0,r.useRef)(null),v=(0,r.useRef)(null),[P,u]=(0,r.useState)(0),{code:p,language:f,label:g}=o[P]||{code:"",language:"",label:"Select Code"},[x,C]=(0,r.useState)("clipboard");(0,r.useEffect)(()=>{m.current&&o.length>0&&h().highlightAll()},[p,o.length]);let _=()=>{o.length>0&&navigator.clipboard.writeText(p).then(()=>{C("check"),setTimeout(()=>{C("clipboard")},5e3)}).catch(e=>{console.error("Failed to copy code: ",e)})},k=e=>{let n=o.findIndex(n=>n.label===e);-1!==n&&u(n)};return(0,i.jsxs)(l.kC,{position:"relative",zIndex:0,background:"surface",radius:"l",border:"neutral-medium",borderStyle:"solid-1",direction:"column",justifyContent:"center",fillWidth:!0,minHeight:3,className:a||"",style:b,children:[(o.length>1||d&&!c)&&(0,i.jsxs)(l.kC,{style:{borderBottom:"1px solid var(--neutral-border-medium)"},zIndex:2,fillWidth:!0,padding:"8",justifyContent:"space-between",children:[o.length>1?(0,i.jsx)(l.kC,{children:(0,i.jsx)(l.Z_,{dropdownOptions:o.map((e,n)=>({label:e.label,value:"".concat(e.label,"-").concat(n)})),dropdownProps:{onOptionSelect:e=>{k(e.value.split("-")[0])}},children:(0,i.jsx)(l.zx,{size:"s",label:g,suffixIcon:"chevronDown",variant:"tertiary"})})}):(0,i.jsx)("div",{}),d&&!c&&(0,i.jsx)(l.hU,{tooltip:"Copy",variant:"secondary",onClick:_,icon:x})]}),s&&(0,i.jsx)(l.kC,{position:"relative",zIndex:1,fillHeight:!0,padding:"l",minHeight:12,justifyContent:"center",alignItems:"center",children:Array.isArray(s)?s.map((e,n)=>(0,i.jsx)(r.Fragment,{children:e},n)):s}),o.length>0&&(0,i.jsxs)(l.kC,{style:{borderTop:!c&&s?"1px solid var(--neutral-border-medium)":"none"},fillWidth:!0,padding:"8",position:"relative",overflowY:"auto",children:[c&&d&&(0,i.jsx)(l.kC,{zIndex:1,style:{right:"var(--static-space-8)",top:"var(--static-space-8)"},position:"absolute",children:(0,i.jsx)(l.hU,{"aria-label":"Copy code",onClick:_,icon:x,size:"m",variant:"secondary"})}),(0,i.jsx)("pre",{"data-line":n,ref:v,className:"".concat(t().pre," language-").concat(f),tabIndex:-1,children:(0,i.jsx)("code",{ref:m,className:"".concat(t().code," ").concat("language-".concat(f)),children:p})})]})]})}},5336:function(){},5404:function(e){e.exports={pre:"CodeBlock_pre__GI0hv",code:"CodeBlock_code__q_Rhr",copy:"CodeBlock_copy__7WubB",margin:"CodeBlock_margin__xL0tD"}}},function(e){e.O(0,[208,546,665,240,516,464,581,867,187,109,102,971,117,744],function(){return e(e.s=3311)}),_N_E=e.O()}]);