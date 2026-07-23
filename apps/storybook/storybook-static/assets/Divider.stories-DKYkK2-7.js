import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _}from"./index-Dx_1l3Sb.js";import{c as A}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=_.forwardRef(({orientation:d="horizontal",variant:z="fullWidth",className:M,...R},T)=>e.jsx("hr",{ref:T,role:"separator","aria-orientation":d,className:A("ms-divider",`ms-divider--${d}`,`ms-divider--${z}`,M),...R}));r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'fullWidth' | 'inset' | 'middle'",elements:[{name:"literal",value:"'fullWidth'"},{name:"literal",value:"'inset'"},{name:"literal",value:"'middle'"}]},description:"",defaultValue:{value:"'fullWidth'",computed:!1}}},composes:["HTMLAttributes"]};const k={title:"Components/Divider",component:r,argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["fullWidth","inset","middle"]}}},i={},a={args:{variant:"inset"}},t={args:{variant:"middle"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",height:"100px",padding:"24px"},children:[e.jsx("span",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Center"}),e.jsx(r,{orientation:"vertical",variant:"inset",style:{height:"40px"}}),e.jsx("span",{children:"Right"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",height:"100px",padding:"24px"},children:[e.jsx("span",{children:"A"}),e.jsx(r,{orientation:"vertical",variant:"inset"}),e.jsx("span",{children:"B"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{children:"Full width"}),e.jsx(r,{variant:"fullWidth"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Inset"}),e.jsx(r,{variant:"inset"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Middle"}),e.jsx(r,{variant:"middle"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",height:"60px"},children:[e.jsx("span",{children:"Vertical"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Dividers"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Here"})]})]})};var o,p,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var v,m,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'inset'
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,u,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'middle'
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,j,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    height: '100px',
    padding: '24px'
  }}>\r
      <span>Left</span>\r
      <Divider orientation="vertical" />\r
      <span>Center</span>\r
      <Divider orientation="vertical" variant="inset" style={{
      height: '40px'
    }} />\r
      <span>Right</span>\r
    </div>
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var D,I,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    height: '100px',
    padding: '24px'
  }}>\r
      <span>A</span>\r
      <Divider orientation="vertical" variant="inset" />\r
      <span>B</span>\r
    </div>
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var V,W,w;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
      <div>\r
        <p>Full width</p>\r
        <Divider variant="fullWidth" />\r
      </div>\r
      <div>\r
        <p>Inset</p>\r
        <Divider variant="inset" />\r
      </div>\r
      <div>\r
        <p>Middle</p>\r
        <Divider variant="middle" />\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      height: '60px'
    }}>\r
        <span>Vertical</span>\r
        <Divider orientation="vertical" />\r
        <span>Dividers</span>\r
        <Divider orientation="vertical" />\r
        <span>Here</span>\r
      </div>\r
    </div>
}`,...(w=(W=l.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const q=["Default","Inset","Middle","Vertical","VerticalInset","KitchenSink"];export{i as Default,a as Inset,l as KitchenSink,t as Middle,s as Vertical,n as VerticalInset,q as __namedExportsOrder,k as default};
