import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-Dx_1l3Sb.js";import{c as f}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function x(n,a){const s=a-n+1;return Array.from({length:s},(e,r)=>n+r)}function se(n,a,s,e){return l.useMemo(()=>{const r=n;if(r<=2*e+2*s+1)return x(1,r);const d=x(1,e),u=x(r-e+1,r),g=Math.max(Math.min(a-s,r-e-2*s-1),e+2),c=Math.min(Math.max(a+s,e+2*s+2),r-e-1),p=[...d];return g>e+2?p.push("ellipsis-start"):e+1<r-e&&p.push(e+1),p.push(...x(Math.max(g,e+1),Math.min(c,r-e))),c<r-e-1?p.push("ellipsis-end"):r-e>e&&p.push(r-e),p.push(...u),p},[n,a,s,e])}const i=l.forwardRef(({count:n,page:a,onChange:s,siblingCount:e=1,boundaryCount:r=1,variant:d="text",color:u="primary",size:g="md",disabled:c=!1,hidePrevButton:p=!1,hideNextButton:W=!1,showFirstButton:X=!1,showLastButton:Y=!1,className:Z,...ee},ae)=>{const te=se(n,a,e,r),m=o=>{o<1||o>n||c||s==null||s(o)},h=(o,ne)=>f("ms-pagination__item",d==="outlined"&&"ms-pagination__item--outlined",u==="primary"&&"ms-pagination__item--primary",u==="neutral"&&"ms-pagination__item--neutral",g==="sm"&&"ms-pagination__item--sm",g==="md"&&"ms-pagination__item--md",g==="lg"&&"ms-pagination__item--lg",o&&"ms-pagination__item--selected",(ne||c)&&"ms-pagination__item--disabled");return t.jsx("nav",{ref:ae,className:f("ms-pagination",Z),"aria-label":"Pagination",...ee,children:t.jsxs("ul",{className:"ms-pagination__list",children:[X&&t.jsx("li",{children:t.jsx("button",{className:h(!1,a===1),onClick:()=>m(1),disabled:c||a===1,"aria-label":"First page",children:t.jsx("span",{"aria-hidden":"true",children:"«"})})}),!p&&t.jsx("li",{children:t.jsx("button",{className:f(h(!1,a===1),"ms-pagination__nav-button"),onClick:()=>m(a-1),disabled:c||a===1,"aria-label":"Previous page",children:t.jsx("span",{"aria-hidden":"true",children:"‹"})})}),te.map(o=>o==="ellipsis-start"||o==="ellipsis-end"?t.jsx("li",{children:t.jsx("span",{className:"ms-pagination__ellipsis","aria-hidden":"true",children:"…"})},o):t.jsx("li",{children:t.jsx("button",{className:h(o===a,!1),onClick:()=>m(o),disabled:c,"aria-current":o===a?"page":void 0,"aria-label":`Page ${o}`,children:o})},o)),!W&&t.jsx("li",{children:t.jsx("button",{className:f(h(!1,a===n),"ms-pagination__nav-button"),onClick:()=>m(a+1),disabled:c||a===n,"aria-label":"Next page",children:t.jsx("span",{"aria-hidden":"true",children:"›"})})}),Y&&t.jsx("li",{children:t.jsx("button",{className:h(!1,a===n),onClick:()=>m(n),disabled:c||a===n,"aria-label":"Last page",children:t.jsx("span",{"aria-hidden":"true",children:"»"})})})]})})});i.displayName="Pagination";i.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{count:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'text'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'text'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hidePrevButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideNextButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLastButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const ce={title:"Components/Pagination",component:i,argTypes:{count:{control:"number"},page:{control:"number"},variant:{control:"select",options:["outlined","text"]},color:{control:"select",options:["primary","neutral"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},siblingCount:{control:"number"},boundaryCount:{control:"number"},hidePrevButton:{control:"boolean"},hideNextButton:{control:"boolean"},showFirstButton:{control:"boolean"},showLastButton:{control:"boolean"},onChange:{action:"changed"}}},P={render:n=>{const[a,s]=l.useState(1);return t.jsx(i,{...n,page:a,onChange:e=>s(e)})},args:{count:10}},v={render:n=>{const[a,s]=l.useState(1);return t.jsx(i,{...n,page:a,onChange:e=>s(e)})},args:{count:10,variant:"outlined"}},S={render:n=>{const[a,s]=l.useState(1);return t.jsx(i,{...n,page:a,onChange:e=>s(e)})},args:{count:10,size:"sm"}},j={render:n=>{const[a,s]=l.useState(1);return t.jsx(i,{...n,page:a,onChange:e=>s(e)})},args:{count:10,size:"lg"}},_={render:n=>{const[a,s]=l.useState(1);return t.jsx(i,{...n,page:a,onChange:e=>s(e)})},args:{count:10,disabled:!0}},b={render:n=>{const[a,s]=l.useState(10);return t.jsx(i,{...n,page:a,onChange:e=>s(e)})},args:{count:50}},y={render:n=>{const[a,s]=l.useState(5);return t.jsx(i,{...n,page:a,onChange:e=>s(e)})},args:{count:20,showFirstButton:!0,showLastButton:!0}},w={render:()=>{const[n,a]=l.useState(1),[s,e]=l.useState(5),[r,d]=l.useState(3);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[t.jsx(i,{count:10,page:n,onChange:u=>a(u),variant:"text",color:"primary"}),t.jsx(i,{count:10,page:s,onChange:u=>e(u),variant:"outlined",color:"neutral"}),t.jsx(i,{count:10,page:r,onChange:u=>d(u),size:"sm"}),t.jsx(i,{count:10,page:1,size:"lg",disabled:!0}),t.jsx(i,{count:10,page:3,showFirstButton:!0,showLastButton:!0})]})}};var B,T,q;P.parameters={...P.parameters,docs:{...(B=P.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} page={page} onChange={p => setPage(p)} />;
  },
  args: {
    count: 10
  }
}`,...(q=(T=P.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var N,L,V;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} page={page} onChange={p => setPage(p)} />;
  },
  args: {
    count: 10,
    variant: 'outlined'
  }
}`,...(V=(L=v.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var F,M,z;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} page={page} onChange={p => setPage(p)} />;
  },
  args: {
    count: 10,
    size: 'sm'
  }
}`,...(z=(M=S.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var C,k,D;j.parameters={...j.parameters,docs:{...(C=j.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} page={page} onChange={p => setPage(p)} />;
  },
  args: {
    count: 10,
    size: 'lg'
  }
}`,...(D=(k=j.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var E,O,I;_.parameters={..._.parameters,docs:{...(E=_.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} page={page} onChange={p => setPage(p)} />;
  },
  args: {
    count: 10,
    disabled: true
  }
}`,...(I=(O=_.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var K,R,A;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(10);
    return <Pagination {...args} page={page} onChange={p => setPage(p)} />;
  },
  args: {
    count: 50
  }
}`,...(A=(R=b.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var $,G,H;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(5);
    return <Pagination {...args} page={page} onChange={p => setPage(p)} />;
  },
  args: {
    count: 20,
    showFirstButton: true,
    showLastButton: true
  }
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(5);
    const [page3, setPage3] = useState(3);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '24px'
    }}>\r
        <Pagination count={10} page={page1} onChange={p => setPage1(p)} variant="text" color="primary" />\r
        <Pagination count={10} page={page2} onChange={p => setPage2(p)} variant="outlined" color="neutral" />\r
        <Pagination count={10} page={page3} onChange={p => setPage3(p)} size="sm" />\r
        <Pagination count={10} page={1} size="lg" disabled />\r
        <Pagination count={10} page={3} showFirstButton showLastButton />\r
      </div>;
  }
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const pe=["Default","Outlined","Small","Large","Disabled","ManyPages","ShowFirstLast","KitchenSink"];export{P as Default,_ as Disabled,w as KitchenSink,j as Large,b as ManyPages,v as Outlined,y as ShowFirstLast,S as Small,pe as __namedExportsOrder,ce as default};
