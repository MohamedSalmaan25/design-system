import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as O}from"./index-Dx_1l3Sb.js";import{c as G}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const e=O.forwardRef(({color:$="primary",size:B="md",disabled:p,onClick:m,href:u,icon:x,className:H,children:d,...g},b)=>{const f=G("ms-fab",`ms-fab--${$}`,`ms-fab--${B}`,d&&"ms-fab--extended",H),y=a.jsxs(a.Fragment,{children:[x&&a.jsx("span",{className:"ms-fab__icon",children:x}),d&&a.jsx("span",{className:"ms-fab__label",children:d})]});return u?a.jsx("a",{ref:b,className:f,href:u,"aria-disabled":p,onClick:p?void 0:m,...g,children:y}):a.jsx("button",{ref:b,className:f,disabled:p,onClick:m,...g,children:y})});e.displayName="Fab";e.__docgenInfo={description:"",methods:[],displayName:"Fab",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'default' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},href:{required:!1,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes"]};const Z={title:"Components/Fab",component:e,argTypes:{color:{control:"select",options:["primary","default","danger"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},r={args:{icon:a.jsx("span",{style:{fontSize:"1.2em"},children:"+"}),"aria-label":"Add"}},s={args:{color:"primary",icon:a.jsx("span",{style:{fontSize:"1.2em"},children:"✎"}),"aria-label":"Edit"}},n={args:{color:"default",icon:a.jsx("span",{style:{fontSize:"1.2em"},children:"☰"}),"aria-label":"Menu"}},l={args:{color:"danger",icon:a.jsx("span",{style:{fontSize:"1.2em"},children:"✕"}),"aria-label":"Delete"}},i={args:{icon:a.jsx("span",{style:{fontSize:"1.2em"},children:"+"}),children:"Create"}},o={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"24px"},children:[a.jsx(e,{size:"sm",icon:a.jsx("span",{children:"+"}),"aria-label":"Small"}),a.jsx(e,{size:"md",icon:a.jsx("span",{children:"+"}),"aria-label":"Medium"}),a.jsx(e,{size:"lg",icon:a.jsx("span",{children:"+"}),"aria-label":"Large"})]})},c={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"24px"},children:[a.jsx(e,{color:"default",icon:a.jsx("span",{children:"☰"}),"aria-label":"Default"}),a.jsx(e,{color:"primary",icon:a.jsx("span",{children:"+"}),"aria-label":"Primary"}),a.jsx(e,{color:"danger",icon:a.jsx("span",{children:"✕"}),"aria-label":"Danger"})]})},t={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"24px"},children:[a.jsx(e,{icon:a.jsx("span",{children:"+"}),"aria-label":"Add"}),a.jsx(e,{color:"default",icon:a.jsx("span",{children:"☰"}),"aria-label":"Menu"}),a.jsx(e,{color:"danger",icon:a.jsx("span",{children:"✕"}),"aria-label":"Delete"}),a.jsx(e,{size:"sm",icon:a.jsx("span",{children:"+"}),"aria-label":"Small"}),a.jsx(e,{size:"lg",icon:a.jsx("span",{children:"+"}),"aria-label":"Large"}),a.jsx(e,{icon:a.jsx("span",{children:"+"}),children:"Extended"})]})};var j,h,S;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: <span style={{
      fontSize: '1.2em'
    }}>&#43;</span>,
    'aria-label': 'Add'
  }
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var z,v,F;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    icon: <span style={{
      fontSize: '1.2em'
    }}>&#9998;</span>,
    'aria-label': 'Edit'
  }
}`,...(F=(v=s.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var D,E,N;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: 'default',
    icon: <span style={{
      fontSize: '1.2em'
    }}>&#9776;</span>,
    'aria-label': 'Menu'
  }
}`,...(N=(E=n.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var _,C,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: 'danger',
    icon: <span style={{
      fontSize: '1.2em'
    }}>&#10005;</span>,
    'aria-label': 'Delete'
  }
}`,...(M=(C=l.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var w,R,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: <span style={{
      fontSize: '1.2em'
    }}>&#43;</span>,
    children: 'Create'
  }
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var A,I,L;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '24px'
  }}>\r
      <Fab size="sm" icon={<span>&#43;</span>} aria-label="Small" />\r
      <Fab size="md" icon={<span>&#43;</span>} aria-label="Medium" />\r
      <Fab size="lg" icon={<span>&#43;</span>} aria-label="Large" />\r
    </div>
}`,...(L=(I=o.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var q,P,k;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '24px'
  }}>\r
      <Fab color="default" icon={<span>&#9776;</span>} aria-label="Default" />\r
      <Fab color="primary" icon={<span>&#43;</span>} aria-label="Primary" />\r
      <Fab color="danger" icon={<span>&#10005;</span>} aria-label="Danger" />\r
    </div>
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var K,V,W;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <Fab icon={<span>&#43;</span>} aria-label="Add" />\r
      <Fab color="default" icon={<span>&#9776;</span>} aria-label="Menu" />\r
      <Fab color="danger" icon={<span>&#10005;</span>} aria-label="Delete" />\r
      <Fab size="sm" icon={<span>&#43;</span>} aria-label="Small" />\r
      <Fab size="lg" icon={<span>&#43;</span>} aria-label="Large" />\r
      <Fab icon={<span>&#43;</span>}>Extended</Fab>\r
    </div>
}`,...(W=(V=t.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const aa=["Default","Primary","DefaultColor","Danger","Extended","Sizes","Colors","KitchenSink"];export{c as Colors,l as Danger,r as Default,n as DefaultColor,i as Extended,t as KitchenSink,s as Primary,o as Sizes,aa as __namedExportsOrder,Z as default};
