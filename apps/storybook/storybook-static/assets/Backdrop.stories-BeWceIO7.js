import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{B as d}from"./Backdrop-EZiCI_5d.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-2dOUpm6k.js";import"./Spinner-DII45QN-.js";const V={title:"Components/Backdrop",component:d,argTypes:{open:{control:"boolean"},invisible:{control:"boolean"}}},n={args:{open:!0,children:r.jsx("div",{style:{color:"#fff",padding:"2rem"},children:"Backdrop content"})}},e={args:{open:!0}},i={args:{open:!0,invisible:!0,children:r.jsx("div",{style:{padding:"2rem"},children:"Invisible backdrop"})}},o={args:{open:!0,onClick:()=>alert("Backdrop clicked"),children:r.jsx("div",{style:{color:"#fff",padding:"2rem"},children:"Click the backdrop"})}},s={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[r.jsxs("div",{children:[r.jsx("p",{children:r.jsx("strong",{children:"Loading (Spinner)"})}),r.jsx(d,{open:!0})]}),r.jsxs("div",{children:[r.jsx("p",{children:r.jsx("strong",{children:"With Content"})}),r.jsx(d,{open:!0,children:r.jsx("div",{style:{color:"#fff",padding:"2rem"},children:"Visible backdrop"})})]}),r.jsxs("div",{children:[r.jsx("p",{children:r.jsx("strong",{children:"Invisible Backdrop"})}),r.jsx(d,{open:!0,invisible:!0,children:r.jsx("div",{style:{padding:"2rem"},children:"Invisible (no dimming)"})})]})]})};var a,c,t;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <div style={{
      color: '#fff',
      padding: '2rem'
    }}>Backdrop content</div>
  }
}`,...(t=(c=n.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    open: true
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,v,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    open: true,
    invisible: true,
    children: <div style={{
      padding: '2rem'
    }}>Invisible backdrop</div>
  }
}`,...(u=(v=i.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,h,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: true,
    onClick: () => alert('Backdrop clicked'),
    children: <div style={{
      color: '#fff',
      padding: '2rem'
    }}>Click the backdrop</div>
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,b,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
      <div>\r
        <p><strong>Loading (Spinner)</strong></p>\r
        <Backdrop open />\r
      </div>\r
      <div>\r
        <p><strong>With Content</strong></p>\r
        <Backdrop open>\r
          <div style={{
          color: '#fff',
          padding: '2rem'
        }}>Visible backdrop</div>\r
        </Backdrop>\r
      </div>\r
      <div>\r
        <p><strong>Invisible Backdrop</strong></p>\r
        <Backdrop open invisible>\r
          <div style={{
          padding: '2rem'
        }}>Invisible (no dimming)</div>\r
        </Backdrop>\r
      </div>\r
    </div>
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const W=["Default","Loading","Invisible","WithClickHandler","AllVariants"];export{s as AllVariants,n as Default,i as Invisible,e as Loading,o as WithClickHandler,W as __namedExportsOrder,V as default};
