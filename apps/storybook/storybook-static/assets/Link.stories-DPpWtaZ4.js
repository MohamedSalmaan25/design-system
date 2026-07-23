import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as T}from"./index-Dx_1l3Sb.js";import{c as C}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=T.forwardRef(({href:f,underline:v="hover",color:x="primary",variant:l,as:a,external:o,className:y,target:k,rel:j,children:t,...L},g)=>{const w=C("ms-link",`ms-link--underline-${v}`,`ms-link--${x}`,l&&`ms-link--${l}`,y),s={ref:g,className:w,href:f,target:o?"_blank":k,rel:o?"noopener noreferrer":j,...L};return a?e.jsx(a,{...s,children:t}):e.jsx("a",{...s,children:t})});r.displayName="Link";r.__docgenInfo={description:"",methods:[],displayName:"Link",props:{href:{required:!0,tsType:{name:"string"},description:""},underline:{required:!1,tsType:{name:"union",raw:"'none' | 'hover' | 'always'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"}]},description:"",defaultValue:{value:"'hover'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'inherit' | 'muted'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'inherit'"},{name:"literal",value:"'muted'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},external:{required:!1,tsType:{name:"boolean"},description:""}},composes:["AnchorHTMLAttributes"]};const D={title:"Components/Link",component:r,argTypes:{href:{control:"text"},underline:{control:"select",options:["none","hover","always"]},color:{control:"select",options:["primary","inherit","muted"]},variant:{control:"text"},external:{control:"boolean"}}},n={args:{href:"#",children:"Click me"}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsx("div",{children:e.jsx(r,{href:"#",underline:"none",children:"Underline: none"})}),e.jsx("div",{children:e.jsx(r,{href:"#",underline:"hover",children:"Underline: hover"})}),e.jsx("div",{children:e.jsx(r,{href:"#",underline:"always",children:"Underline: always"})}),e.jsx("div",{children:e.jsx(r,{href:"#",color:"primary",children:"Color: primary"})}),e.jsx("div",{children:e.jsx(r,{href:"#",color:"inherit",children:"Color: inherit"})}),e.jsx("div",{children:e.jsx(r,{href:"#",color:"muted",children:"Color: muted"})}),e.jsx("div",{children:e.jsx(r,{href:"https://example.com",external:!0,children:"External link"})})]})};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Click me'
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>\r
      <div>\r
        <Link href="#" underline="none">Underline: none</Link>\r
      </div>\r
      <div>\r
        <Link href="#" underline="hover">Underline: hover</Link>\r
      </div>\r
      <div>\r
        <Link href="#" underline="always">Underline: always</Link>\r
      </div>\r
      <div>\r
        <Link href="#" color="primary">Color: primary</Link>\r
      </div>\r
      <div>\r
        <Link href="#" color="inherit">Color: inherit</Link>\r
      </div>\r
      <div>\r
        <Link href="#" color="muted">Color: muted</Link>\r
      </div>\r
      <div>\r
        <Link href="https://example.com" external>External link</Link>\r
      </div>\r
    </div>
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const N=["Default","KitchenSink"];export{n as Default,i as KitchenSink,N as __namedExportsOrder,D as default};
