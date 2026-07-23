import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as D}from"./index-Dx_1l3Sb.js";import{c as K}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const M=["var(--shadow-sm)","var(--shadow-sm)","var(--shadow-md)","var(--shadow-lg)","var(--shadow-xl)"],e=D.forwardRef(({elevation:N=1,variant:l="elevation",square:T=!1,className:O,style:b,children:_,...V},k)=>a.jsx("div",{ref:k,className:K("ms-paper",`ms-paper--${l}`,T&&"ms-paper--square",O),style:{...l==="elevation"?{boxShadow:M[N]}:{},...b},...V,children:_}));e.displayName="Paper";e.__docgenInfo={description:"",methods:[],displayName:"Paper",props:{elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"1",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'elevation' | 'outlined'",elements:[{name:"literal",value:"'elevation'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'elevation'",computed:!1}},square:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const L={title:"Components/Paper",component:e,argTypes:{elevation:{control:"select",options:[0,1,2,3,4]},variant:{control:"select",options:["elevation","outlined"]},square:{control:"boolean"}}},r={args:{children:"This is a paper surface.",style:{padding:"24px",maxWidth:320}}},n={args:{children:"Elevation 3 paper.",elevation:3,style:{padding:"24px",maxWidth:320}}},t={args:{children:"No shadow (elevation 0).",elevation:0,style:{padding:"24px",maxWidth:320}}},i={args:{children:"Outlined variant.",variant:"outlined",style:{padding:"24px",maxWidth:320}}},s={args:{children:"Square corners.",square:!0,style:{padding:"24px",maxWidth:320}}},d={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",padding:"24px"},children:[a.jsx(e,{elevation:0,style:{padding:"24px",width:140},children:"elevation 0"}),a.jsx(e,{elevation:1,style:{padding:"24px",width:140},children:"elevation 1"}),a.jsx(e,{elevation:2,style:{padding:"24px",width:140},children:"elevation 2"}),a.jsx(e,{elevation:3,style:{padding:"24px",width:140},children:"elevation 3"}),a.jsx(e,{elevation:4,style:{padding:"24px",width:140},children:"elevation 4"}),a.jsx(e,{variant:"outlined",style:{padding:"24px",width:140},children:"outlined"}),a.jsx(e,{square:!0,style:{padding:"24px",width:140},children:"square"})]})};var o,p,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'This is a paper surface.',
    style: {
      padding: '24px',
      maxWidth: 320
    }
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Elevation 3 paper.',
    elevation: 3,
    style: {
      padding: '24px',
      maxWidth: 320
    }
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,h,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'No shadow (elevation 0).',
    elevation: 0,
    style: {
      padding: '24px',
      maxWidth: 320
    }
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,w,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Outlined variant.',
    variant: 'outlined',
    style: {
      padding: '24px',
      maxWidth: 320
    }
  }
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var P,q,S;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Square corners.',
    square: true,
    style: {
      padding: '24px',
      maxWidth: 320
    }
  }
}`,...(S=(q=s.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var W,j,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <Paper elevation={0} style={{
      padding: '24px',
      width: 140
    }}>elevation 0</Paper>\r
      <Paper elevation={1} style={{
      padding: '24px',
      width: 140
    }}>elevation 1</Paper>\r
      <Paper elevation={2} style={{
      padding: '24px',
      width: 140
    }}>elevation 2</Paper>\r
      <Paper elevation={3} style={{
      padding: '24px',
      width: 140
    }}>elevation 3</Paper>\r
      <Paper elevation={4} style={{
      padding: '24px',
      width: 140
    }}>elevation 4</Paper>\r
      <Paper variant="outlined" style={{
      padding: '24px',
      width: 140
    }}>outlined</Paper>\r
      <Paper square style={{
      padding: '24px',
      width: 140
    }}>square</Paper>\r
    </div>
}`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const $=["Default","Elevated","NoShadow","Outlined","Square","KitchenSink"];export{r as Default,n as Elevated,d as KitchenSink,t as NoShadow,i as Outlined,s as Square,$ as __namedExportsOrder,L as default};
