import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-Dx_1l3Sb.js";import{c as g}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const G=a.createContext({separator:"/",separatorClass:""}),s=a.forwardRef(({separator:t="/",maxItems:o,itemsBeforeCollapse:n=1,itemsAfterCollapse:c=1,className:m,children:d,...b},C)=>{const l=a.Children.toArray(d).filter(a.isValidElement),y=l.length,w=o!==void 0&&y>o;let i=[];if(w){const j=l.slice(0,n),p=l.slice(y-c),L=e.jsx(J,{},"ms-collapsed");i=[...j,L,...p]}else i=l;return e.jsx(G.Provider,{value:{separator:t,separatorClass:"ms-breadcrumbs__separator"},children:e.jsx("nav",{ref:C,className:g("ms-breadcrumbs",m),"aria-label":"Breadcrumb",...b,children:e.jsx("ol",{className:"ms-breadcrumbs__list",children:i.map((j,p)=>e.jsxs("li",{className:"ms-breadcrumbs__item",children:[j,p<i.length-1&&e.jsx("span",{className:"ms-breadcrumbs__separator","aria-hidden":"true",children:t})]},p))})})})});s.displayName="Breadcrumbs";const r=a.forwardRef(({href:t,linkComponent:o,className:n,children:c,...m},d)=>{const b=o||"a";return t?e.jsx(b,{ref:d,href:t,className:g("ms-breadcrumbs__link",n),...m,children:c}):e.jsx("span",{ref:d,className:g("ms-breadcrumbs__link","ms-breadcrumbs__link--current",n),"aria-current":"page",...m,children:c})});r.displayName="Breadcrumbs.Item";function J(){return e.jsx("span",{className:"ms-breadcrumbs__collapsed","aria-hidden":"true",children:"…"})}s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{separator:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'/'",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:""},itemsBeforeCollapse:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},itemsAfterCollapse:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};r.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs.Item",props:{href:{required:!1,tsType:{name:"string"},description:""},linkComponent:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType<any>",elements:[{name:"any"}]},description:""}},composes:["AnchorHTMLAttributes"]};const K={title:"Components/Breadcrumbs",component:s,argTypes:{separator:{control:"text"},maxItems:{control:"number"},itemsBeforeCollapse:{control:"number"},itemsAfterCollapse:{control:"number"}}},u={render:()=>e.jsxs(s,{children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/products",children:"Products"}),e.jsx(r,{href:"/products/electronics",children:"Electronics"}),e.jsx(r,{children:"Headphones"})]})},h={render:()=>e.jsxs(s,{separator:">",children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/blog",children:"Blog"}),e.jsx(r,{href:"/blog/tutorials",children:"Tutorials"}),e.jsx(r,{children:"Getting Started"})]})},f={render:()=>e.jsxs(s,{maxItems:4,itemsBeforeCollapse:1,itemsAfterCollapse:1,children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/category",children:"Category"}),e.jsx(r,{href:"/category/subcategory",children:"Subcategory"}),e.jsx(r,{href:"/category/subcategory/detail",children:"Detail"}),e.jsx(r,{href:"/category/subcategory/detail/section",children:"Section"}),e.jsx(r,{children:"Current Page"})]})},x={render:()=>e.jsxs(s,{separator:e.jsx("span",{children:"->"}),children:[e.jsx(r,{href:"/",children:"Dashboard"}),e.jsx(r,{href:"/users",children:"Users"}),e.jsx(r,{href:"/users/1",children:"John Doe"}),e.jsx(r,{children:"Edit"})]})},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Default Separator (/)"})}),e.jsxs(s,{children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/products",children:"Products"}),e.jsx(r,{children:"Current"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsxs("strong",{children:["Custom Separator (",">",")"]})}),e.jsxs(s,{separator:">",children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/blog",children:"Blog"}),e.jsx(r,{children:"Post"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsxs("strong",{children:["Icon Separator (","->",")"]})}),e.jsxs(s,{separator:e.jsx("span",{children:"->"}),children:[e.jsx(r,{href:"/",children:"Dashboard"}),e.jsx(r,{href:"/settings",children:"Settings"}),e.jsx(r,{children:"Profile"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Collapsed (maxItems=3)"})}),e.jsxs(s,{maxItems:3,itemsBeforeCollapse:1,itemsAfterCollapse:1,children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/a",children:"A"}),e.jsx(r,{href:"/b",children:"B"}),e.jsx(r,{href:"/c",children:"C"}),e.jsx(r,{href:"/d",children:"D"}),e.jsx(r,{children:"Current"})]})]})]})};var B,v,S;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>\r
      <Item href="/">Home</Item>\r
      <Item href="/products">Products</Item>\r
      <Item href="/products/electronics">Electronics</Item>\r
      <Item>Headphones</Item>\r
    </Breadcrumbs>
}`,...(S=(v=u.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var _,D,H;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Breadcrumbs separator=">">\r
      <Item href="/">Home</Item>\r
      <Item href="/blog">Blog</Item>\r
      <Item href="/blog/tutorials">Tutorials</Item>\r
      <Item>Getting Started</Item>\r
    </Breadcrumbs>
}`,...(H=(D=h.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var A,T,N;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Breadcrumbs maxItems={4} itemsBeforeCollapse={1} itemsAfterCollapse={1}>\r
      <Item href="/">Home</Item>\r
      <Item href="/category">Category</Item>\r
      <Item href="/category/subcategory">Subcategory</Item>\r
      <Item href="/category/subcategory/detail">Detail</Item>\r
      <Item href="/category/subcategory/detail/section">Section</Item>\r
      <Item>Current Page</Item>\r
    </Breadcrumbs>
}`,...(N=(T=f.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var P,E,q;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Breadcrumbs separator={<span>-&gt;</span>}>\r
      <Item href="/">Dashboard</Item>\r
      <Item href="/users">Users</Item>\r
      <Item href="/users/1">John Doe</Item>\r
      <Item>Edit</Item>\r
    </Breadcrumbs>
}`,...(q=(E=x.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var R,V,k;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
      <div>\r
        <p><strong>Default Separator (/)</strong></p>\r
        <Breadcrumbs>\r
          <Item href="/">Home</Item>\r
          <Item href="/products">Products</Item>\r
          <Item>Current</Item>\r
        </Breadcrumbs>\r
      </div>\r
      <div>\r
        <p><strong>Custom Separator ({'>'})</strong></p>\r
        <Breadcrumbs separator=">">\r
          <Item href="/">Home</Item>\r
          <Item href="/blog">Blog</Item>\r
          <Item>Post</Item>\r
        </Breadcrumbs>\r
      </div>\r
      <div>\r
        <p><strong>Icon Separator ({'->'})</strong></p>\r
        <Breadcrumbs separator={<span>-&gt;</span>}>\r
          <Item href="/">Dashboard</Item>\r
          <Item href="/settings">Settings</Item>\r
          <Item>Profile</Item>\r
        </Breadcrumbs>\r
      </div>\r
      <div>\r
        <p><strong>Collapsed (maxItems=3)</strong></p>\r
        <Breadcrumbs maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1}>\r
          <Item href="/">Home</Item>\r
          <Item href="/a">A</Item>\r
          <Item href="/b">B</Item>\r
          <Item href="/c">C</Item>\r
          <Item href="/d">D</Item>\r
          <Item>Current</Item>\r
        </Breadcrumbs>\r
      </div>\r
    </div>
}`,...(k=(V=I.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const Q=["Default","CustomSeparator","Collapsed","IconSeparator","AllVariants"];export{I as AllVariants,f as Collapsed,h as CustomSeparator,u as Default,x as IconSeparator,Q as __namedExportsOrder,K as default};
