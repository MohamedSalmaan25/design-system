import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as I}from"./index-Dx_1l3Sb.js";import{c as T}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const N={sm:"4px",md:"6px",lg:"8px"},r=I.forwardRef(({value:t,size:S="md",color:D="primary",className:_,...m},b)=>{const l=t===void 0;return e.jsx("div",{ref:b,role:"progressbar","aria-valuenow":l?void 0:t,"aria-valuemin":0,"aria-valuemax":100,className:T("ms-linear-progress",`ms-linear-progress--${D}`,l&&"ms-linear-progress--indeterminate",_),style:{height:N[S],...m.style},...m,children:e.jsx("span",{className:"ms-linear-progress__bar",style:l?void 0:{width:`${t}%`}})})});r.displayName="LinearProgress";r.__docgenInfo={description:"",methods:[],displayName:"LinearProgress",props:{value:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'danger' | 'success' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}},composes:["HTMLAttributes"]};const R={title:"Components/Progress",component:r,argTypes:{value:{control:"number",min:0,max:100},size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","danger","success","warning"]}}},s={args:{}},a={args:{value:60}},o={args:{size:"sm"}},n={args:{size:"lg"}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsx("strong",{children:"Indeterminate"}),e.jsx(r,{color:"primary"}),e.jsx("strong",{children:"Determinate"}),e.jsx(r,{value:45,color:"primary"}),e.jsx(r,{value:80,color:"success"}),e.jsx(r,{value:30,color:"danger"}),e.jsx(r,{value:60,color:"warning"}),e.jsx("strong",{children:"Sizes"}),e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,y,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,z,L;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(L=(z=n.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var P,w,h;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>\r
      <strong>Indeterminate</strong>\r
      <LinearProgress color="primary" />\r
      <strong>Determinate</strong>\r
      <LinearProgress value={45} color="primary" />\r
      <LinearProgress value={80} color="success" />\r
      <LinearProgress value={30} color="danger" />\r
      <LinearProgress value={60} color="warning" />\r
      <strong>Sizes</strong>\r
      <LinearProgress size="sm" />\r
      <LinearProgress size="md" />\r
      <LinearProgress size="lg" />\r
    </div>
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const $=["Indeterminate","Determinate","Small","Large","AllVariants"];export{i as AllVariants,a as Determinate,s as Indeterminate,n as Large,o as Small,$ as __namedExportsOrder,R as default};
