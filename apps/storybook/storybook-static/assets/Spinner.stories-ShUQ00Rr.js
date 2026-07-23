import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{S as e}from"./Spinner-DII45QN-.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-2dOUpm6k.js";const E={title:"Components/Spinner",component:e,argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","danger","success","warning"]},value:{control:"number",min:0,max:100}}},s={args:{size:"md",color:"primary"}},n={args:{value:65,size:"md",color:"primary"}},i={render:()=>r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"24px"},children:[r.jsx(e,{size:"sm"}),r.jsx(e,{size:"md"}),r.jsx(e,{size:"lg"})]})},a={render:()=>r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"24px"},children:[r.jsx(e,{color:"primary"}),r.jsx(e,{color:"danger"}),r.jsx(e,{color:"success"}),r.jsx(e,{color:"warning"})]})},o={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[r.jsx("strong",{children:"Indeterminate"}),r.jsx(e,{size:"sm"}),r.jsx(e,{size:"md"}),r.jsx(e,{size:"lg"})]}),r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[r.jsx("strong",{children:"Determinate"}),r.jsx(e,{value:25}),r.jsx(e,{value:50}),r.jsx(e,{value:75}),r.jsx(e,{value:100})]}),r.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[r.jsx("strong",{children:"Colors"}),r.jsx(e,{color:"primary"}),r.jsx(e,{color:"danger"}),r.jsx(e,{color:"success"}),r.jsx(e,{color:"warning"})]})]})};var l,p,t;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'primary'
  }
}`,...(t=(p=s.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: 65,
    size: 'md',
    color: 'primary'
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,g,u;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    padding: '24px'
  }}>\r
      <Spinner size="sm" />\r
      <Spinner size="md" />\r
      <Spinner size="lg" />\r
    </div>
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,j,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    padding: '24px'
  }}>\r
      <Spinner color="primary" />\r
      <Spinner color="danger" />\r
      <Spinner color="success" />\r
      <Spinner color="warning" />\r
    </div>
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var S,z,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>\r
        <strong>Indeterminate</strong>\r
        <Spinner size="sm" />\r
        <Spinner size="md" />\r
        <Spinner size="lg" />\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>\r
        <strong>Determinate</strong>\r
        <Spinner value={25} />\r
        <Spinner value={50} />\r
        <Spinner value={75} />\r
        <Spinner value={100} />\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>\r
        <strong>Colors</strong>\r
        <Spinner color="primary" />\r
        <Spinner color="danger" />\r
        <Spinner color="success" />\r
        <Spinner color="warning" />\r
      </div>\r
    </div>
}`,...(f=(z=o.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};const V=["Indeterminate","Determinate","Sizes","Colors","AllVariants"];export{o as AllVariants,a as Colors,n as Determinate,s as Indeterminate,i as Sizes,V as __namedExportsOrder,E as default};
