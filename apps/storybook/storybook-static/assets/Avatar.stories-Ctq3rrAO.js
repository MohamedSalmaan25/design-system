import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-Dx_1l3Sb.js";import{c as X}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=u.forwardRef(({src:d,alt:e="",size:M="md",fallback:O,className:K,...P},R)=>{const[V,H]=u.useState(!1),$=!d||V,G=O||(e?e.split(" ").map(Q=>Q[0]).join("").toUpperCase().slice(0,2):"?");return a.jsx("div",{ref:R,className:X("ms-avatar",`ms-avatar--${M}`,K),role:"img","aria-label":e,...P,children:$?a.jsx("span",{className:"ms-avatar__fallback",children:G}):a.jsx("img",{className:"ms-avatar__img",src:d,alt:e,onError:()=>H(!0)})})});r.displayName="Avatar";r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fallback:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const sa={title:"Components/Avatar",component:r,argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},src:{control:"text"},alt:{control:"text"},fallback:{control:"text"}}},s={args:{src:"https://i.pravatar.cc/150?u=avatar1",alt:"John Doe"}},t={args:{alt:"Jane Smith"}},o={args:{fallback:"JD"}},l={args:{size:"sm",alt:"Alice Brown"}},c={args:{size:"md",alt:"Bob Johnson"}},n={args:{size:"lg",alt:"Charlie Wilson"}},i={args:{size:"xl",alt:"Diana Prince"}},m={args:{src:"https://invalid.url/nonexistent.jpg",alt:"User Name"}},p={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center",padding:"24px"},children:[a.jsx(r,{src:"https://i.pravatar.cc/150?u=user1",alt:"User One",size:"sm"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=user2",alt:"User Two",size:"md"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=user3",alt:"User Three",size:"lg"}),a.jsx(r,{src:"https://i.pravatar.cc/150?u=user4",alt:"User Four",size:"xl"}),a.jsx(r,{alt:"Initial Fallback",size:"md"}),a.jsx(r,{fallback:"AB",size:"md"}),a.jsx(r,{src:"https://invalid.url/broken.jpg",alt:"Broken Image",size:"md"})]})};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?u=avatar1',
    alt: 'John Doe'
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,f,z;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    alt: 'Jane Smith'
  }
}`,...(z=(f=t.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var k,b,j;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fallback: 'JD'
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var A,S,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    alt: 'Alice Brown'
  }
}`,...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var y,U,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'md',
    alt: 'Bob Johnson'
  }
}`,...(B=(U=c.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var T,w,F;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    alt: 'Charlie Wilson'
  }
}`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var E,J,_;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    alt: 'Diana Prince'
  }
}`,...(_=(J=i.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var N,C,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    src: 'https://invalid.url/nonexistent.jpg',
    alt: 'User Name'
  }
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var W,L,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '24px'
  }}>\r
      <Avatar src="https://i.pravatar.cc/150?u=user1" alt="User One" size="sm" />\r
      <Avatar src="https://i.pravatar.cc/150?u=user2" alt="User Two" size="md" />\r
      <Avatar src="https://i.pravatar.cc/150?u=user3" alt="User Three" size="lg" />\r
      <Avatar src="https://i.pravatar.cc/150?u=user4" alt="User Four" size="xl" />\r
      <Avatar alt="Initial Fallback" size="md" />\r
      <Avatar fallback="AB" size="md" />\r
      <Avatar src="https://invalid.url/broken.jpg" alt="Broken Image" size="md" />\r
    </div>
}`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const ta=["WithImage","Fallback","CustomFallback","Small","Medium","Large","ExtraLarge","BrokenImage","KitchenSink"];export{m as BrokenImage,o as CustomFallback,i as ExtraLarge,t as Fallback,p as KitchenSink,n as Large,c as Medium,l as Small,s as WithImage,ta as __namedExportsOrder,sa as default};
