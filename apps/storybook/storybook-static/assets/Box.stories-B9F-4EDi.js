import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as N}from"./index-Dx_1l3Sb.js";import{c as D}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const e=N.forwardRef(({component:j,as:T,className:A,children:k,...v},S)=>{const E=T||j||"div";return r.jsx(E,{ref:S,className:D("ms-box",A),...v,children:k})});e.displayName="Box";e.__docgenInfo={description:"",methods:[],displayName:"Box",props:{component:{required:!1,tsType:{name:"ElementType"},description:""},as:{required:!1,tsType:{name:"ElementType"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};const V={title:"Components/Box",component:e,argTypes:{component:{control:"text"},as:{control:"text"}}},s={args:{children:"This is a Box (renders as a <div>)",style:{padding:16,border:"1px solid #ccc",borderRadius:4}}},o={args:{as:"section",children:"This Box renders as a <section> element",style:{padding:16,border:"1px solid #ccc",borderRadius:4,background:"#f5f5f5"}}},a={args:{as:"article",children:"This Box renders as an <article> element",style:{padding:16,border:"1px solid #ccc",borderRadius:4}}},d={args:{as:"main",children:"This Box renders as a <main> element",style:{padding:16,border:"1px solid #ccc",borderRadius:4,background:"#fafafa"}}},n={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[r.jsxs(e,{style:{padding:16,border:"1px solid #ccc",borderRadius:4},children:["Box as ",r.jsx("strong",{children:"<div>"})," (default)"]}),r.jsxs(e,{as:"section",style:{padding:16,border:"1px solid #ccc",borderRadius:4,background:"#f5f5f5"},children:["Box as ",r.jsx("strong",{children:"<section>"})]}),r.jsxs(e,{as:"article",style:{padding:16,border:"1px solid #ccc",borderRadius:4},children:["Box as ",r.jsx("strong",{children:"<article>"})]}),r.jsxs(e,{as:"main",style:{padding:16,border:"1px solid #ccc",borderRadius:4,background:"#f0f0f0"},children:["Box as ",r.jsx("strong",{children:"<main>"})]}),r.jsxs(e,{as:"header",style:{padding:16,border:"1px solid #ccc",borderRadius:4},children:["Box as ",r.jsx("strong",{children:"<header>"})]}),r.jsxs(e,{as:"footer",style:{padding:16,border:"1px solid #ccc",borderRadius:4,background:"#f5f5f5"},children:["Box as ",r.jsx("strong",{children:"<footer>"})]})]})};var c,i,t;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a Box (renders as a <div>)',
    style: {
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4
    }
  }
}`,...(t=(i=s.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var l,p,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    as: 'section',
    children: 'This Box renders as a <section> element',
    style: {
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4,
      background: '#f5f5f5'
    }
  }
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,m,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    as: 'article',
    children: 'This Box renders as an <article> element',
    style: {
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,f,B;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    as: 'main',
    children: 'This Box renders as a <main> element',
    style: {
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4,
      background: '#fafafa'
    }
  }
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var h,y,R;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>\r
      <Box style={{
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4
    }}>\r
        Box as <strong>&lt;div&gt;</strong> (default)\r
      </Box>\r
      <Box as="section" style={{
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4,
      background: '#f5f5f5'
    }}>\r
        Box as <strong>&lt;section&gt;</strong>\r
      </Box>\r
      <Box as="article" style={{
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4
    }}>\r
        Box as <strong>&lt;article&gt;</strong>\r
      </Box>\r
      <Box as="main" style={{
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4,
      background: '#f0f0f0'
    }}>\r
        Box as <strong>&lt;main&gt;</strong>\r
      </Box>\r
      <Box as="header" style={{
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4
    }}>\r
        Box as <strong>&lt;header&gt;</strong>\r
      </Box>\r
      <Box as="footer" style={{
      padding: 16,
      border: '1px solid #ccc',
      borderRadius: 4,
      background: '#f5f5f5'
    }}>\r
        Box as <strong>&lt;footer&gt;</strong>\r
      </Box>\r
    </div>
}`,...(R=(y=n.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};const H=["Default","AsSection","AsArticle","AsMain","AllVariants"];export{n as AllVariants,a as AsArticle,d as AsMain,o as AsSection,s as Default,H as __namedExportsOrder,V as default};
