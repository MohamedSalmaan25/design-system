import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as O}from"./index-Dx_1l3Sb.js";import{c as z}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=O.forwardRef(({variant:d="text",width:K,height:V,animation:m="pulse",className:$,style:H,...L},M)=>e.jsx("div",{ref:M,className:z("ms-skeleton",`ms-skeleton--${d}`,m!=="none"&&`ms-skeleton--${m}`,$),style:{width:K,height:V,...d==="text"?{}:{},...H},"aria-hidden":"true",...L}));a.displayName="Skeleton";a.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'pulse'",computed:!1}}},composes:["HTMLAttributes"]};const Q={title:"Components/Skeleton",component:a,argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"]},animation:{control:"select",options:["pulse","wave","none"]},width:{control:"text"},height:{control:"text"}}},t={args:{}},r={args:{variant:"text",width:240}},n={args:{variant:"circular",width:48,height:48}},i={args:{variant:"rectangular",width:240,height:160}},s={args:{variant:"rounded",width:240,height:160}},o={args:{animation:"wave",width:240}},l={args:{animation:"none",width:240}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:360},children:[e.jsx(a,{variant:"text"}),e.jsx(a,{variant:"text",width:200}),e.jsx(a,{variant:"text",width:160}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{variant:"circular",width:48,height:48}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",flex:1},children:[e.jsx(a,{variant:"text",width:"100%"}),e.jsx(a,{variant:"text",width:"60%"})]})]}),e.jsx(a,{variant:"rectangular",width:"100%",height:160}),e.jsx(a,{variant:"rounded",width:"100%",height:120}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(a,{variant:"circular",width:32,height:32,animation:"wave"}),e.jsx(a,{variant:"circular",width:32,height:32,animation:"wave"}),e.jsx(a,{variant:"circular",width:32,height:32,animation:"wave"})]})]})};var u,p,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,x,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 240
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var w,f,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 48,
    height: 48
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,k,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 240,
    height: 160
  }
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var T,D,R;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: 240,
    height: 160
  }
}`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var b,A,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    animation: 'wave',
    width: 240
  }
}`,...(N=(A=o.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var q,W,_;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    animation: 'none',
    width: 240
  }
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var C,E,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: 360
  }}>\r
      <Skeleton variant="text" />\r
      <Skeleton variant="text" width={200} />\r
      <Skeleton variant="text" width={160} />\r
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>\r
        <Skeleton variant="circular" width={48} height={48} />\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: 1
      }}>\r
          <Skeleton variant="text" width="100%" />\r
          <Skeleton variant="text" width="60%" />\r
        </div>\r
      </div>\r
      <Skeleton variant="rectangular" width="100%" height={160} />\r
      <Skeleton variant="rounded" width="100%" height={120} />\r
      <div style={{
      display: 'flex',
      gap: '16px'
    }}>\r
        <Skeleton variant="circular" width={32} height={32} animation="wave" />\r
        <Skeleton variant="circular" width={32} height={32} animation="wave" />\r
        <Skeleton variant="circular" width={32} height={32} animation="wave" />\r
      </div>\r
    </div>
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const U=["Default","Text","Circular","Rectangular","Rounded","WaveAnimation","NoAnimation","KitchenSink"];export{n as Circular,t as Default,c as KitchenSink,l as NoAnimation,i as Rectangular,s as Rounded,r as Text,o as WaveAnimation,U as __namedExportsOrder,Q as default};
