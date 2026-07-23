import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as J}from"./index-Dx_1l3Sb.js";import{c as K}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const Q={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",caption:"span",overline:"span"},a=J.forwardRef(({variant:d="body1",color:_="default",align:c,weight:y,as:$,truncate:V=!1,className:P,children:A,...I},L)=>{const F=$??Q[d],G=K("ms-typography",`ms-typography--${d}`,`ms-typography--${_}`,c&&`ms-typography--${c}`,y&&`ms-typography--${y}`,V&&"ms-typography--truncate",P);return e.jsx(F,{ref:L,className:G,...I,children:A})});a.displayName="Typography";a.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
| 'body1' | 'body2'
| 'caption' | 'overline'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'overline'"}]},description:"",defaultValue:{value:"'body1'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'muted'
| 'subtle'
| 'inverse'
| 'primary'
| 'danger'
| 'success'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'inverse'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""},as:{required:!1,tsType:{name:"ElementType"},description:""},truncate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const ee={title:"Components/Typography",component:a,argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body1","body2","caption","overline"]},color:{control:"select",options:["default","muted","subtle","inverse","primary","danger","success"]},align:{control:"select",options:["left","center","right"]},weight:{control:"select",options:["normal","medium","semibold","bold"]},truncate:{control:"boolean"}}},r={args:{variant:"h1",children:"Heading 1"}},n={args:{variant:"h2",children:"Heading 2"}},o={args:{variant:"body1",children:"This is body1 text. The quick brown fox jumps over the lazy dog."}},t={args:{variant:"body2",children:"This is body2 text. The quick brown fox jumps over the lazy dog."}},l={args:{variant:"caption",children:"Caption text - small and subtle"}},i={args:{variant:"overline",children:"Overline Text"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"h1",children:"Heading 1"}),e.jsx(a,{variant:"h2",children:"Heading 2"}),e.jsx(a,{variant:"h3",children:"Heading 3"}),e.jsx(a,{variant:"h4",children:"Heading 4"}),e.jsx(a,{variant:"h5",children:"Heading 5"}),e.jsx(a,{variant:"h6",children:"Heading 6"}),e.jsx(a,{variant:"body1",children:"Body 1 - Regular paragraph text"}),e.jsx(a,{variant:"body2",children:"Body 2 - Smaller paragraph text"}),e.jsx(a,{variant:"caption",children:"Caption text"}),e.jsx(a,{variant:"overline",children:"Overline text"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{color:"default",children:"Default"}),e.jsx(a,{color:"muted",children:"Muted"}),e.jsx(a,{color:"primary",children:"Primary"}),e.jsx(a,{color:"danger",children:"Danger"}),e.jsx(a,{color:"success",children:"Success"})]})};var h,m,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,f,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    children: 'This is body1 text. The quick brown fox jumps over the lazy dog.'
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var j,H,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'body2',
    children: 'This is body2 text. The quick brown fox jumps over the lazy dog.'
  }
}`,...(S=(H=t.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var q,w,C;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'caption',
    children: 'Caption text - small and subtle'
  }
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var B,D,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'overline',
    children: 'Overline Text'
  }
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var k,z,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>\r
      <Typography variant="h1">Heading 1</Typography>\r
      <Typography variant="h2">Heading 2</Typography>\r
      <Typography variant="h3">Heading 3</Typography>\r
      <Typography variant="h4">Heading 4</Typography>\r
      <Typography variant="h5">Heading 5</Typography>\r
      <Typography variant="h6">Heading 6</Typography>\r
      <Typography variant="body1">Body 1 - Regular paragraph text</Typography>\r
      <Typography variant="body2">Body 2 - Smaller paragraph text</Typography>\r
      <Typography variant="caption">Caption text</Typography>\r
      <Typography variant="overline">Overline text</Typography>\r
    </div>
}`,...(E=(z=s.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var M,N,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>\r
      <Typography color="default">Default</Typography>\r
      <Typography color="muted">Muted</Typography>\r
      <Typography color="primary">Primary</Typography>\r
      <Typography color="danger">Danger</Typography>\r
      <Typography color="success">Success</Typography>\r
    </div>
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const ae=["Heading1","Heading2","Body1","Body2","Caption","Overline","TypeScale","Colors"];export{o as Body1,t as Body2,l as Caption,p as Colors,r as Heading1,n as Heading2,i as Overline,s as TypeScale,ae as __namedExportsOrder,ee as default};
