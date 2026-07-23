import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-Dx_1l3Sb.js";import{r as V}from"./index-BaBTCQBq.js";import{c as $}from"./cn-2dOUpm6k.js";import{B as p}from"./Button-C6PCuTDE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B6ujFmsw.js";const n=s.forwardRef(({open:t,onClose:r,anchor:x="left",variant:o="temporary",width:f=280,className:H,children:I,...q},i)=>{const F=s.useRef(null);s.useEffect(()=>{if(!t||o!=="temporary")return;const a=M=>{M.key==="Escape"&&(r==null||r())};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[t,r,o]);const L=x==="left"||x==="right"?{width:f}:{height:f},w=e.jsx("div",{ref:a=>{typeof i=="function"?i(a):i&&"current"in i&&(i.current=a),F.current=a},className:$("ms-drawer",`ms-drawer--${x}`,`ms-drawer--${o}`,t&&"ms-drawer--open",H),style:L,...q,children:e.jsx("div",{className:"ms-drawer__paper",children:I})});return o==="temporary"?t?V.createPortal(e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ms-drawer__backdrop",onClick:r,"aria-hidden":"true"}),w]}),document.body):null:o==="persistent"?e.jsx(e.Fragment,{children:w}):w});n.displayName="Drawer";n.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchor:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'temporary' | 'persistent' | 'permanent'",elements:[{name:"literal",value:"'temporary'"},{name:"literal",value:"'persistent'"},{name:"literal",value:"'permanent'"}]},description:"",defaultValue:{value:"'temporary'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"280",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const Y={title:"Components/Drawer",component:n,argTypes:{anchor:{control:"select",options:["left","right","top","bottom"]},variant:{control:"select",options:["temporary","persistent","permanent"]},open:{control:"boolean"},width:{control:"number"}}},d={render:()=>{const[t,r]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(n,{open:t,onClose:()=>r(!1),children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{children:"Drawer Content"}),e.jsx("p",{children:"This is a temporary drawer."})]})})]})}},l={render:()=>{const[t,r]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>r(!0),children:"Open Right Drawer"}),e.jsx(n,{open:t,onClose:()=>r(!1),anchor:"right",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{children:"Right Drawer"}),e.jsx("p",{children:"Content slides in from the right."})]})})]})}},c={render:()=>{const[t,r]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>r(!0),children:"Open Top Drawer"}),e.jsx(n,{open:t,onClose:()=>r(!1),anchor:"top",width:200,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{children:"Top Drawer"}),e.jsx("p",{children:"Content slides in from the top."})]})})]})}},m={render:()=>{const[t,r]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>r(!0),children:"Open Bottom Drawer"}),e.jsx(n,{open:t,onClose:()=>r(!1),anchor:"bottom",width:200,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{children:"Bottom Drawer"}),e.jsx("p",{children:"Content slides in from the bottom."})]})})]})}},h={render:()=>{const[t,r]=s.useState(!0);return e.jsxs("div",{style:{position:"relative",minHeight:"300px"},children:[e.jsxs(p,{onClick:()=>r(!t),children:[t?"Hide":"Show"," Persistent Drawer"]}),e.jsx("div",{style:{marginLeft:t?"300px":"0",transition:"margin-left 0.3s",padding:"16px"},children:e.jsx("p",{children:"Main content area adjusts when the drawer is toggled."})}),e.jsx(n,{open:t,onClose:()=>r(!1),variant:"persistent",width:280,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{children:"Persistent Drawer"}),e.jsx("p",{children:"This drawer pushes content."})]})})]})}},u={render:()=>e.jsxs("div",{style:{display:"flex",minHeight:"300px"},children:[e.jsx(n,{open:!0,variant:"permanent",width:240,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{children:"Navigation"}),e.jsx("p",{children:"Item 1"}),e.jsx("p",{children:"Item 2"}),e.jsx("p",{children:"Item 3"})]})}),e.jsxs("div",{style:{padding:"24px",flex:1},children:[e.jsx("h2",{children:"Main Content"}),e.jsx("p",{children:"Permanent drawer is always visible alongside content."})]})]})};var g,v,j;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>\r
        <Drawer open={open} onClose={() => setOpen(false)}>\r
          <div style={{
          padding: '16px'
        }}>\r
            <h3>Drawer Content</h3>\r
            <p>This is a temporary drawer.</p>\r
          </div>\r
        </Drawer>\r
      </>;
  }
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,D,O;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>\r
        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">\r
          <div style={{
          padding: '16px'
        }}>\r
            <h3>Right Drawer</h3>\r
            <p>Content slides in from the right.</p>\r
          </div>\r
        </Drawer>\r
      </>;
  }
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var C,S,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Top Drawer</Button>\r
        <Drawer open={open} onClose={() => setOpen(false)} anchor="top" width={200}>\r
          <div style={{
          padding: '16px'
        }}>\r
            <h3>Top Drawer</h3>\r
            <p>Content slides in from the top.</p>\r
          </div>\r
        </Drawer>\r
      </>;
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,b,k;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Bottom Drawer</Button>\r
        <Drawer open={open} onClose={() => setOpen(false)} anchor="bottom" width={200}>\r
          <div style={{
          padding: '16px'
        }}>\r
            <h3>Bottom Drawer</h3>\r
            <p>Content slides in from the bottom.</p>\r
          </div>\r
        </Drawer>\r
      </>;
  }
}`,...(k=(b=m.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var P,R,E;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={{
      position: 'relative',
      minHeight: '300px'
    }}>\r
        <Button onClick={() => setOpen(!open)}>\r
          {open ? 'Hide' : 'Show'} Persistent Drawer\r
        </Button>\r
        <div style={{
        marginLeft: open ? '300px' : '0',
        transition: 'margin-left 0.3s',
        padding: '16px'
      }}>\r
          <p>Main content area adjusts when the drawer is toggled.</p>\r
        </div>\r
        <Drawer open={open} onClose={() => setOpen(false)} variant="persistent" width={280}>\r
          <div style={{
          padding: '16px'
        }}>\r
            <h3>Persistent Drawer</h3>\r
            <p>This drawer pushes content.</p>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var N,_,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    minHeight: '300px'
  }}>\r
      <Drawer open variant="permanent" width={240}>\r
        <div style={{
        padding: '16px'
      }}>\r
          <h3>Navigation</h3>\r
          <p>Item 1</p>\r
          <p>Item 2</p>\r
          <p>Item 3</p>\r
        </div>\r
      </Drawer>\r
      <div style={{
      padding: '24px',
      flex: 1
    }}>\r
        <h2>Main Content</h2>\r
        <p>Permanent drawer is always visible alongside content.</p>\r
      </div>\r
    </div>
}`,...(A=(_=u.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const Z=["Default","AnchorRight","AnchorTop","AnchorBottom","Persistent","Permanent"];export{m as AnchorBottom,l as AnchorRight,c as AnchorTop,d as Default,u as Permanent,h as Persistent,Z as __namedExportsOrder,Y as default};
