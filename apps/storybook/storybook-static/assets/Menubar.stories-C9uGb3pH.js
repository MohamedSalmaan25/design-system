import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-Dx_1l3Sb.js";import{c as x}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const l=u.forwardRef(({className:a,children:o,...c},b)=>{const[p,d]=u.useState(null),m=u.useRef(null);u.useEffect(()=>{const t=r=>{m.current&&!m.current.contains(r.target)&&d(null)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const N=(Array.isArray(o)?o:[o]).filter(t=>t!=null&&typeof t=="object"&&"type"in t);return e.jsx("div",{ref:m,children:e.jsx("div",{ref:b,role:"menubar",className:x("ms-menubar",a),...c,children:N.map((t,r)=>{var j,h;const M=p===r;return e.jsxs("div",{className:"ms-menubar__item-wrapper",style:{position:"relative"},children:[e.jsx("button",{role:"menuitem",className:x("ms-menubar__item",M&&"ms-menubar__item--active"),onClick:()=>d(M?null:r),onMouseEnter:()=>{p!==null&&d(r)},children:(j=t.props)==null?void 0:j.trigger}),M&&e.jsx("div",{className:"ms-menubar__menu",role:"menu",children:(h=t.props)==null?void 0:h.children})]},r)})})})});l.displayName="Menubar";const y=()=>null;y.displayName="Menubar.Item";const E=u.forwardRef(({className:a,children:o,...c},b)=>e.jsx("div",{ref:b,className:x("ms-menubar__menu-inner",a),...c,children:o}));E.displayName="Menubar.Menu";l.Item=y;l.Menu=E;const n=l;l.__docgenInfo={description:"",methods:[],displayName:"Menubar",composes:["HTMLAttributes"]};const R={title:"Components/Menubar",component:n},i={render:()=>e.jsxs(n,{children:[e.jsx(n.Item,{trigger:"File",children:e.jsxs(n.Menu,{children:[e.jsx("button",{children:"New"}),e.jsx("button",{children:"Open"}),e.jsx("button",{children:"Save"})]})}),e.jsx(n.Item,{trigger:"Edit",children:e.jsxs(n.Menu,{children:[e.jsx("button",{children:"Undo"}),e.jsx("button",{children:"Redo"})]})})]})},s={render:()=>e.jsx("div",{style:{padding:"24px"},children:e.jsxs(n,{children:[e.jsx(n.Item,{trigger:"File",children:e.jsxs(n.Menu,{children:[e.jsx("button",{onClick:()=>alert("New"),children:"New Project"}),e.jsx("button",{onClick:()=>alert("Open"),children:"Open File"}),e.jsx("hr",{}),e.jsx("button",{onClick:()=>alert("Save"),children:"Save"}),e.jsx("button",{onClick:()=>alert("Save As"),children:"Save As"}),e.jsx("hr",{}),e.jsx("button",{onClick:()=>alert("Exit"),children:"Exit"})]})}),e.jsx(n.Item,{trigger:"Edit",children:e.jsxs(n.Menu,{children:[e.jsx("button",{onClick:()=>alert("Undo"),children:"Undo"}),e.jsx("button",{onClick:()=>alert("Redo"),children:"Redo"}),e.jsx("hr",{}),e.jsx("button",{onClick:()=>alert("Cut"),children:"Cut"}),e.jsx("button",{onClick:()=>alert("Copy"),children:"Copy"}),e.jsx("button",{onClick:()=>alert("Paste"),children:"Paste"})]})}),e.jsx(n.Item,{trigger:"View",children:e.jsxs(n.Menu,{children:[e.jsx("button",{onClick:()=>alert("Zoom In"),children:"Zoom In"}),e.jsx("button",{onClick:()=>alert("Zoom Out"),children:"Zoom Out"}),e.jsx("button",{onClick:()=>alert("Fullscreen"),children:"Fullscreen"})]})}),e.jsx(n.Item,{trigger:"Help",children:e.jsxs(n.Menu,{children:[e.jsx("button",{onClick:()=>alert("About"),children:"About"}),e.jsx("button",{onClick:()=>alert("Docs"),children:"Documentation"})]})})]})})};var C,k,g;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Menubar>\r
      <Menubar.Item trigger="File">\r
        <Menubar.Menu>\r
          <button>New</button>\r
          <button>Open</button>\r
          <button>Save</button>\r
        </Menubar.Menu>\r
      </Menubar.Item>\r
      <Menubar.Item trigger="Edit">\r
        <Menubar.Menu>\r
          <button>Undo</button>\r
          <button>Redo</button>\r
        </Menubar.Menu>\r
      </Menubar.Item>\r
    </Menubar>
}`,...(g=(k=i.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var I,v,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px'
  }}>\r
      <Menubar>\r
        <Menubar.Item trigger="File">\r
          <Menubar.Menu>\r
            <button onClick={() => alert('New')}>New Project</button>\r
            <button onClick={() => alert('Open')}>Open File</button>\r
            <hr />\r
            <button onClick={() => alert('Save')}>Save</button>\r
            <button onClick={() => alert('Save As')}>Save As</button>\r
            <hr />\r
            <button onClick={() => alert('Exit')}>Exit</button>\r
          </Menubar.Menu>\r
        </Menubar.Item>\r
        <Menubar.Item trigger="Edit">\r
          <Menubar.Menu>\r
            <button onClick={() => alert('Undo')}>Undo</button>\r
            <button onClick={() => alert('Redo')}>Redo</button>\r
            <hr />\r
            <button onClick={() => alert('Cut')}>Cut</button>\r
            <button onClick={() => alert('Copy')}>Copy</button>\r
            <button onClick={() => alert('Paste')}>Paste</button>\r
          </Menubar.Menu>\r
        </Menubar.Item>\r
        <Menubar.Item trigger="View">\r
          <Menubar.Menu>\r
            <button onClick={() => alert('Zoom In')}>Zoom In</button>\r
            <button onClick={() => alert('Zoom Out')}>Zoom Out</button>\r
            <button onClick={() => alert('Fullscreen')}>Fullscreen</button>\r
          </Menubar.Menu>\r
        </Menubar.Item>\r
        <Menubar.Item trigger="Help">\r
          <Menubar.Menu>\r
            <button onClick={() => alert('About')}>About</button>\r
            <button onClick={() => alert('Docs')}>Documentation</button>\r
          </Menubar.Menu>\r
        </Menubar.Item>\r
      </Menubar>\r
    </div>
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const F=["Default","KitchenSink"];export{i as Default,s as KitchenSink,F as __namedExportsOrder,R as default};
