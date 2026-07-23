import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as U}from"./index-Dx_1l3Sb.js";import{c as X}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=U.forwardRef(({variant:$="filled",color:A="default",size:M="md",avatar:m,icon:h,onDelete:u,deleteIcon:B,children:G,className:H,...L},Q)=>e.jsxs("button",{ref:Q,className:X("ms-chip",`ms-chip--${$}`,`ms-chip--${A}`,`ms-chip--${M}`,H),...L,children:[m&&e.jsx("span",{className:"ms-chip__avatar",children:m}),h&&!m&&e.jsx("span",{className:"ms-chip__icon",children:h}),e.jsx("span",{className:"ms-chip__label",children:G}),u&&e.jsx("span",{className:"ms-chip__delete",role:"button",tabIndex:0,onClick:a=>{a.stopPropagation(),u()},onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),u())},children:B||e.jsx("span",{"aria-hidden":"true",children:"×"})})]}));r.displayName="Chip";r.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'danger' | 'success' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},deleteIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const se={title:"Components/Chip",component:r,argTypes:{variant:{control:"select",options:["filled","outlined"]},color:{control:"select",options:["default","primary","danger","success","warning"]},size:{control:"select",options:["sm","md"]},children:{control:"text"}}},s={args:{children:"Chip"}},i={args:{variant:"filled",children:"Filled"}},n={args:{variant:"outlined",children:"Outlined"}},l={args:{children:"Dismissable",onDelete:()=>alert("deleted")}},t={args:{children:"Settings",icon:e.jsx("span",{style:{fontSize:"1.2em"},children:"⚙"})}},o={args:{children:"John Doe",avatar:e.jsx("span",{style:{fontWeight:"bold"},children:"J"})}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"24px"},children:[e.jsx(r,{color:"default",children:"Default"}),e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"danger",children:"Danger"}),e.jsx(r,{color:"success",children:"Success"}),e.jsx(r,{color:"warning",children:"Warning"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"24px"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"24px"},children:[e.jsx(r,{variant:"filled",children:"Filled"}),e.jsx(r,{variant:"outlined",children:"Outlined"}),e.jsx(r,{onDelete:()=>{},children:"Dismissable"}),e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"danger",children:"Danger"}),e.jsx(r,{color:"success",children:"Success"}),e.jsx(r,{color:"warning",children:"Warning"}),e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{icon:e.jsx("span",{children:"★"}),children:"Starred"})]})};var g,f,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Chip'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,y,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    children: 'Filled'
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,S,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Outlined'
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var w,W,R;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Dismissable',
    onDelete: () => alert('deleted')
  }
}`,...(R=(W=l.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var N,z,_;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Settings',
    icon: <span style={{
      fontSize: '1.2em'
    }}>&#9881;</span>
  }
}`,...(_=(z=t.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var b,O,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'John Doe',
    avatar: <span style={{
      fontWeight: 'bold'
    }}>J</span>
  }
}`,...(T=(O=o.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var q,I,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <Chip color="default">Default</Chip>\r
      <Chip color="primary">Primary</Chip>\r
      <Chip color="danger">Danger</Chip>\r
      <Chip color="success">Success</Chip>\r
      <Chip color="warning">Warning</Chip>\r
    </div>
}`,...(F=(I=c.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var k,P,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '24px'
  }}>\r
      <Chip size="sm">Small</Chip>\r
      <Chip size="md">Medium</Chip>\r
    </div>
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var J,K,V;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <Chip variant="filled">Filled</Chip>\r
      <Chip variant="outlined">Outlined</Chip>\r
      <Chip onDelete={() => {}}>Dismissable</Chip>\r
      <Chip color="primary">Primary</Chip>\r
      <Chip color="danger">Danger</Chip>\r
      <Chip color="success">Success</Chip>\r
      <Chip color="warning">Warning</Chip>\r
      <Chip size="sm">Small</Chip>\r
      <Chip icon={<span>&#9733;</span>}>Starred</Chip>\r
    </div>
}`,...(V=(K=p.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const ie=["Default","Filled","Outlined","WithDelete","WithIcon","WithAvatar","Colors","Sizes","KitchenSink"];export{c as Colors,s as Default,i as Filled,p as KitchenSink,n as Outlined,d as Sizes,o as WithAvatar,l as WithDelete,t as WithIcon,ie as __namedExportsOrder,se as default};
