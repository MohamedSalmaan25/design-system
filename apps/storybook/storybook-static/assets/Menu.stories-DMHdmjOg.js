import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-Dx_1l3Sb.js";import{r as T}from"./index-BaBTCQBq.js";import{c as I}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B6ujFmsw.js";const R=o.createContext({});function g(s,n){const t=s.getBoundingClientRect(),r={};return n.startsWith("bottom")?r.top=`${t.bottom+4}px`:r.bottom=`${window.innerHeight-t.top+4}px`,n.endsWith("start")?r.left=`${t.left}px`:n.endsWith("end")?(r.left=`${t.right}px`,r.transform="translateX(-100%)"):(r.left=`${t.left+t.width/2}px`,r.transform="translateX(-50%)"),r}const m=o.forwardRef(({anchorEl:s,open:n,onClose:t,placement:r="bottom-start",children:i},c)=>{const u=o.useRef(null),[b,a]=o.useState({}),y=o.useId();o.useEffect(()=>{n&&s&&a(g(s,r))},[n,s,r]),o.useEffect(()=>{if(!n)return;const d=v=>{u.current&&!u.current.contains(v.target)&&t()},C=v=>{v.key==="Escape"&&t()},p=()=>{s&&a(g(s,r))};return document.addEventListener("mousedown",d),document.addEventListener("keydown",C),window.addEventListener("scroll",p,!0),window.addEventListener("resize",p),()=>{document.removeEventListener("mousedown",d),document.removeEventListener("keydown",C),window.removeEventListener("scroll",p,!0),window.removeEventListener("resize",p)}},[n,t,s,r]);const L=o.useCallback(()=>{t()},[t]);return n?T.createPortal(e.jsx("div",{ref:d=>{typeof c=="function"?c(d):c&&(c.current=d),u.current=d},role:"menu",className:"ms-menu",style:b,"aria-labelledby":y,children:e.jsx(R.Provider,{value:{onItemClick:L},children:e.jsx("div",{className:"ms-menu__paper",children:e.jsx("ul",{className:"ms-menu__list",children:i})})})}),document.body):null});m.displayName="Menu";const l=o.forwardRef(({onClick:s,disabled:n,selected:t,icon:r,className:i,children:c,...u},b)=>{const{onItemClick:a}=o.useContext(R),y=()=>{n||(s==null||s(),a==null||a())};return e.jsx("li",{role:"none",children:e.jsxs("button",{ref:b,role:"menuitem",disabled:n,className:I("ms-menu-item",t&&"ms-menu-item--selected",n&&"ms-menu-item--disabled",i),onClick:y,...u,children:[r&&e.jsx("span",{className:"ms-menu-item__icon",children:r}),e.jsx("span",{className:"ms-menu-item__label",children:c})]})})});l.displayName="Menu.Item";const x=o.forwardRef(({className:s,...n},t)=>e.jsx("li",{role:"none",children:e.jsx("hr",{ref:t,role:"separator",className:I("ms-menu-divider",s),...n})}));x.displayName="Menu.Divider";m.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{anchorEl:{required:!0,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'bottom-start'
| 'bottom'
| 'bottom-end'
| 'top-start'
| 'top'
| 'top-end'`,elements:[{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top'"},{name:"literal",value:"'top-end'"}]},description:"",defaultValue:{value:"'bottom-start'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"Menu.Item",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};x.__docgenInfo={description:"",methods:[],displayName:"Menu.Divider",composes:["HTMLAttributes"]};const O={title:"Components/Menu",component:m,argTypes:{placement:{control:"select",options:["bottom-start","bottom","bottom-end","top-start","top","top-end"]},open:{control:"boolean"}}},f={render:()=>{const[s,n]=o.useState(null),t=o.useRef(null);return e.jsxs("div",{style:{padding:"100px"},children:[e.jsx("button",{ref:t,onClick:()=>n(t.current),children:"Open Menu"}),e.jsxs(m,{anchorEl:s,open:!!s,onClose:()=>n(null),children:[e.jsx(l,{onClick:()=>alert("Profile clicked"),children:"Profile"}),e.jsx(l,{onClick:()=>alert("Settings clicked"),children:"Settings"}),e.jsx(x,{}),e.jsx(l,{onClick:()=>alert("Logout clicked"),children:"Logout"})]})]})}},h={render:()=>{const[s,n]=o.useState(null),[t,r]=o.useState(null),i=o.useRef(null);return e.jsxs("div",{style:{padding:"100px"},children:[e.jsx("button",{ref:i,onClick:()=>n(i.current),children:t||"Open Menu"}),e.jsxs(m,{anchorEl:s,open:!!s,onClose:()=>n(null),children:[e.jsx(l,{selected:t==="Cut",icon:e.jsx("span",{children:"✂"}),onClick:()=>r("Cut"),children:"Cut"}),e.jsx(l,{selected:t==="Copy",icon:e.jsx("span",{children:"📋"}),onClick:()=>r("Copy"),children:"Copy"}),e.jsx(l,{selected:t==="Paste",icon:e.jsx("span",{children:"📎"}),onClick:()=>r("Paste"),children:"Paste"}),e.jsx(x,{}),e.jsx(l,{disabled:!0,icon:e.jsx("span",{children:"⌫"}),onClick:()=>r("Delete"),children:"Delete (disabled)"})]})]})}};var j,k,M;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    return <div style={{
      padding: '100px'
    }}>\r
        <button ref={btnRef} onClick={() => setAnchor(btnRef.current)}>\r
          Open Menu\r
        </button>\r
        <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)}>\r
          <Item onClick={() => alert('Profile clicked')}>Profile</Item>\r
          <Item onClick={() => alert('Settings clicked')}>Settings</Item>\r
          <Divider />\r
          <Item onClick={() => alert('Logout clicked')}>Logout</Item>\r
        </Menu>\r
      </div>;
  }
}`,...(M=(k=f.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var S,w,E;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const [selected, setSelected] = useState<string | null>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    return <div style={{
      padding: '100px'
    }}>\r
        <button ref={btnRef} onClick={() => setAnchor(btnRef.current)}>\r
          {selected || 'Open Menu'}\r
        </button>\r
        <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)}>\r
          <Item selected={selected === 'Cut'} icon={<span>&#9986;</span>} onClick={() => setSelected('Cut')}>\r
            Cut\r
          </Item>\r
          <Item selected={selected === 'Copy'} icon={<span>&#128203;</span>} onClick={() => setSelected('Copy')}>\r
            Copy\r
          </Item>\r
          <Item selected={selected === 'Paste'} icon={<span>&#128206;</span>} onClick={() => setSelected('Paste')}>\r
            Paste\r
          </Item>\r
          <Divider />\r
          <Item disabled icon={<span>&#9003;</span>} onClick={() => setSelected('Delete')}>\r
            Delete (disabled)\r
          </Item>\r
        </Menu>\r
      </div>;
  }
}`,...(E=(w=h.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const $=["Default","KitchenSink"];export{f as Default,h as KitchenSink,$ as __namedExportsOrder,O as default};
