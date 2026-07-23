import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-Dx_1l3Sb.js";import{c as l}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const c=d.forwardRef(({dense:t,disablePadding:i,subheader:r,className:a,children:n,...m},j)=>e.jsxs("div",{className:"ms-list-wrapper",children:[r&&e.jsx("div",{className:"ms-list__subheader",children:r}),e.jsx("ul",{ref:j,className:l("ms-list",t&&"ms-list--dense",a),...m,children:n})]}));c.displayName="List";const h=d.forwardRef(({disablePadding:t,secondaryAction:i,className:r,children:a,...n},m)=>e.jsxs("li",{ref:m,className:l("ms-list-item",t&&"ms-list-item--disablePadding",r),...n,children:[i&&e.jsx("div",{className:"ms-list-item__secondary-action",children:i}),a]}));h.displayName="List.Item";const L=d.forwardRef(({className:t,children:i,...r},a)=>e.jsx("span",{ref:a,className:l("ms-list-item-icon",t),...r,children:i}));L.displayName="List.ItemIcon";const f=d.forwardRef(({primary:t,secondary:i,className:r,children:a,...n},m)=>e.jsxs("span",{ref:m,className:l("ms-list-item-text",r),...n,children:[t&&e.jsx("span",{className:"ms-list-item-text__primary",children:t}),i&&e.jsx("span",{className:"ms-list-item-text--secondary",children:i}),a]}));f.displayName="List.ItemText";const s=c;s.Item=h;s.ItemIcon=L;s.ItemText=f;c.__docgenInfo={description:"",methods:[],displayName:"List",props:{dense:{required:!1,tsType:{name:"boolean"},description:""},disablePadding:{required:!1,tsType:{name:"boolean"},description:""},subheader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["HTMLAttributes"]};const g={title:"Components/List",component:s,argTypes:{dense:{control:"boolean"},disablePadding:{control:"boolean"},subheader:{control:"text"}}},o={render:()=>e.jsxs(s,{children:[e.jsxs(s.Item,{children:[e.jsx(s.ItemIcon,{children:e.jsx("span",{style:{fontWeight:"bold"},children:"@"})}),e.jsx(s.ItemText,{primary:"Inbox",secondary:"3 unread"})]}),e.jsxs(s.Item,{children:[e.jsx(s.ItemIcon,{children:e.jsx("span",{style:{fontWeight:"bold"},children:"▶"})}),e.jsx(s.ItemText,{primary:"Sent"})]}),e.jsxs(s.Item,{children:[e.jsx(s.ItemIcon,{children:e.jsx("span",{style:{fontWeight:"bold"},children:"X"})}),e.jsx(s.ItemText,{primary:"Trash"})]})]})};var p,I,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <List>\r
      <List.Item>\r
        <List.ItemIcon><span style={{
          fontWeight: 'bold'
        }}>@</span></List.ItemIcon>\r
        <List.ItemText primary="Inbox" secondary="3 unread" />\r
      </List.Item>\r
      <List.Item>\r
        <List.ItemIcon><span style={{
          fontWeight: 'bold'
        }}>&#9654;</span></List.ItemIcon>\r
        <List.ItemText primary="Sent" />\r
      </List.Item>\r
      <List.Item>\r
        <List.ItemIcon><span style={{
          fontWeight: 'bold'
        }}>X</span></List.ItemIcon>\r
        <List.ItemText primary="Trash" />\r
      </List.Item>\r
    </List>
}`,...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,g as default};
