import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as F}from"./index-Dx_1l3Sb.js";import{c as _}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=F.forwardRef(({className:q,maxWidth:o,disableGutters:G,fixed:D,children:M,...N},T)=>e.jsx("div",{ref:T,className:_("ms-container",o&&`ms-container--${o}`,G&&"ms-container--disableGutters",D&&"ms-container--fixed",q),...N,children:M}));n.displayName="Container";n.__docgenInfo={description:"",methods:[],displayName:"Container",props:{maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | false",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"false"}]},description:""},disableGutters:{required:!1,tsType:{name:"boolean"},description:""},fixed:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const H={title:"Components/Container",component:n,argTypes:{maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1]},disableGutters:{control:"boolean"},fixed:{control:"boolean"}}},r={args:{children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:"Container Content"})}},t={args:{maxWidth:"sm",children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:'maxWidth="sm"'})}},a={args:{maxWidth:"lg",children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:'maxWidth="lg"'})}},i={args:{fixed:!0,children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:"Fixed container"})}},d={args:{disableGutters:!0,children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:"No gutters"})}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx(n,{maxWidth:"sm",children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:"sm"})}),e.jsx(n,{maxWidth:"md",children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:"md"})}),e.jsx(n,{maxWidth:"lg",children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:"lg"})}),e.jsx(n,{maxWidth:"xl",children:e.jsx("div",{style:{background:"#e0e0e0",padding:"24px",textAlign:"center"},children:"xl"})})]})};var l,c,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <div style={{
      background: '#e0e0e0',
      padding: '24px',
      textAlign: 'center'
    }}>\r
        Container Content\r
      </div>
  }
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    maxWidth: 'sm',
    children: <div style={{
      background: '#e0e0e0',
      padding: '24px',
      textAlign: 'center'
    }}>\r
        maxWidth=&quot;sm&quot;\r
      </div>
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    maxWidth: 'lg',
    children: <div style={{
      background: '#e0e0e0',
      padding: '24px',
      textAlign: 'center'
    }}>\r
        maxWidth=&quot;lg&quot;\r
      </div>
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,y,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    fixed: true,
    children: <div style={{
      background: '#e0e0e0',
      padding: '24px',
      textAlign: 'center'
    }}>\r
        Fixed container\r
      </div>
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var W,k,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disableGutters: true,
    children: <div style={{
      background: '#e0e0e0',
      padding: '24px',
      textAlign: 'center'
    }}>\r
        No gutters\r
      </div>
  }
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var j,C,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
      <Container maxWidth="sm">\r
        <div style={{
        background: '#e0e0e0',
        padding: '24px',
        textAlign: 'center'
      }}>sm</div>\r
      </Container>\r
      <Container maxWidth="md">\r
        <div style={{
        background: '#e0e0e0',
        padding: '24px',
        textAlign: 'center'
      }}>md</div>\r
      </Container>\r
      <Container maxWidth="lg">\r
        <div style={{
        background: '#e0e0e0',
        padding: '24px',
        textAlign: 'center'
      }}>lg</div>\r
      </Container>\r
      <Container maxWidth="xl">\r
        <div style={{
        background: '#e0e0e0',
        padding: '24px',
        textAlign: 'center'
      }}>xl</div>\r
      </Container>\r
    </div>
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const I=["Default","MaxWidthSm","MaxWidthLg","Fixed","DisableGutters","KitchenSink"];export{r as Default,d as DisableGutters,i as Fixed,s as KitchenSink,a as MaxWidthLg,t as MaxWidthSm,I as __namedExportsOrder,H as default};
