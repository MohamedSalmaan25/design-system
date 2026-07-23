import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-Dx_1l3Sb.js";import{c as C}from"./cn-2dOUpm6k.js";import{B as I}from"./Backdrop-EZiCI_5d.js";import{B as i}from"./Button-C6PCuTDE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-DII45QN-.js";const O=l.forwardRef(({open:o,onClose:n,maxWidth:r="sm",fullWidth:a=!1,fullScreen:d=!1,children:U,className:Y,...H},p)=>{const D=l.useRef(null),j=l.useCallback(s=>{if(s.key==="Escape"){n==null||n();return}if(s.key==="Tab"){const u=D.current;if(!u)return;const c=u.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(c.length===0)return;const T=c[0],k=c[c.length-1];s.shiftKey?document.activeElement===T&&(s.preventDefault(),k.focus()):document.activeElement===k&&(s.preventDefault(),T.focus())}},[n]);return l.useEffect(()=>{if(!o)return;document.addEventListener("keydown",j);const s=setTimeout(()=>{var c;const u=(c=D.current)==null?void 0:c.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');u==null||u.focus()},50);return()=>{clearTimeout(s),document.removeEventListener("keydown",j)}},[o,j]),o?e.jsx(I,{open:o,onClick:n,className:"ms-dialog__backdrop",children:e.jsx("div",{ref:s=>{typeof p=="function"?p(s):p&&(p.current=s),D.current=s},role:"dialog","aria-modal":"true",className:C("ms-dialog",`ms-dialog--${r}`,a&&"ms-dialog--fullWidth",d&&"ms-dialog--fullScreen",Y),onClick:s=>s.stopPropagation(),...H,children:e.jsx("div",{className:"ms-dialog__paper",children:U})})}):null});O.displayName="Dialog";const L=l.forwardRef(({children:o,className:n,...r},a)=>e.jsx("div",{ref:a,className:C("ms-dialog__title",n),...r,children:o}));L.displayName="Dialog.Title";const V=l.forwardRef(({children:o,className:n,...r},a)=>e.jsx("div",{ref:a,className:C("ms-dialog__content",n),...r,children:o}));V.displayName="Dialog.Content";const K=l.forwardRef(({children:o,className:n,...r},a)=>e.jsx("div",{ref:a,className:C("ms-dialog__actions",n),...r,children:o}));K.displayName="Dialog.Actions";const t=Object.assign(O,{Title:L,Content:V,Actions:K});O.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullScreen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const ee={title:"Components/Dialog",component:t,argTypes:{maxWidth:{control:"select",options:["sm","md","lg","xl"]},fullWidth:{control:"boolean"},fullScreen:{control:"boolean"},open:{control:"boolean"}}},m={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(t,{open:o,onClose:()=>n(!1),children:[e.jsx(t.Title,{children:"Dialog Title"}),e.jsx(t.Content,{children:"This is the dialog content. You can put any content here."}),e.jsxs(t.Actions,{children:[e.jsx(i,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(i,{onClick:()=>n(!1),children:"Confirm"})]})]})]})}},f={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>n(!0),children:"Open with Actions"}),e.jsxs(t,{open:o,onClose:()=>n(!1),children:[e.jsx(t.Title,{children:"Confirm Action"}),e.jsx(t.Content,{children:"Are you sure you want to proceed with this action?"}),e.jsxs(t.Actions,{children:[e.jsx(i,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(i,{color:"danger",onClick:()=>n(!1),children:"Delete"})]})]})]})}},h={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>n(!0),children:"Open Full Width"}),e.jsxs(t,{open:o,onClose:()=>n(!1),maxWidth:"md",fullWidth:!0,children:[e.jsx(t.Title,{children:"Full Width Dialog"}),e.jsx(t.Content,{children:"This dialog spans the full width of its maxWidth container."}),e.jsx(t.Actions,{children:e.jsx(i,{onClick:()=>n(!1),children:"Close"})})]})]})}},g={render:()=>{const[o,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>n(!0),children:"Open Full Screen"}),e.jsxs(t,{open:o,onClose:()=>n(!1),fullScreen:!0,children:[e.jsx(t.Title,{children:"Full Screen Dialog"}),e.jsx(t.Content,{children:"This dialog takes up the entire screen."}),e.jsx(t.Actions,{children:e.jsx(i,{onClick:()=>n(!1),children:"Close"})})]})]})}},x={render:()=>{const[o,n]=l.useState(!1),[r,a]=l.useState("sm");return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:["sm","md","lg","xl"].map(d=>e.jsx(i,{variant:r===d?"solid":"outline",onClick:()=>{a(d),n(!0)},children:d.toUpperCase()},d))}),e.jsxs(t,{open:o,onClose:()=>n(!1),maxWidth:r,children:[e.jsxs(t.Title,{children:['maxWidth="',r,'"']}),e.jsxs(t.Content,{children:["This dialog uses the ",r," maxWidth breakpoint."]}),e.jsx(t.Actions,{children:e.jsx(i,{onClick:()=>n(!1),children:"Close"})})]})]})}};var W,y,v;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>\r
        <Dialog open={open} onClose={() => setOpen(false)}>\r
          <Dialog.Title>Dialog Title</Dialog.Title>\r
          <Dialog.Content>\r
            This is the dialog content. You can put any content here.\r
          </Dialog.Content>\r
          <Dialog.Actions>\r
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>\r
            <Button onClick={() => setOpen(false)}>Confirm</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </>;
  }
}`,...(v=(y=m.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,S,A;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open with Actions</Button>\r
        <Dialog open={open} onClose={() => setOpen(false)}>\r
          <Dialog.Title>Confirm Action</Dialog.Title>\r
          <Dialog.Content>\r
            Are you sure you want to proceed with this action?\r
          </Dialog.Content>\r
          <Dialog.Actions>\r
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>\r
            <Button color="danger" onClick={() => setOpen(false)}>Delete</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </>;
  }
}`,...(A=(S=f.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var b,w,F;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Full Width</Button>\r
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>\r
          <Dialog.Title>Full Width Dialog</Dialog.Title>\r
          <Dialog.Content>\r
            This dialog spans the full width of its maxWidth container.\r
          </Dialog.Content>\r
          <Dialog.Actions>\r
            <Button onClick={() => setOpen(false)}>Close</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </>;
  }
}`,...(F=(w=h.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var _,N,q;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Full Screen</Button>\r
        <Dialog open={open} onClose={() => setOpen(false)} fullScreen>\r
          <Dialog.Title>Full Screen Dialog</Dialog.Title>\r
          <Dialog.Content>\r
            This dialog takes up the entire screen.\r
          </Dialog.Content>\r
          <Dialog.Actions>\r
            <Button onClick={() => setOpen(false)}>Close</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </>;
  }
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var E,R,M;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [maxWidth, setMaxWidth] = useState<'sm' | 'md' | 'lg' | 'xl'>('sm');
    return <>\r
        <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px'
      }}>\r
          {(['sm', 'md', 'lg', 'xl'] as const).map(mw => <Button key={mw} variant={maxWidth === mw ? 'solid' : 'outline'} onClick={() => {
          setMaxWidth(mw);
          setOpen(true);
        }}>\r
              {mw.toUpperCase()}\r
            </Button>)}\r
        </div>\r
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth={maxWidth}>\r
          <Dialog.Title>maxWidth=&quot;{maxWidth}&quot;</Dialog.Title>\r
          <Dialog.Content>\r
            This dialog uses the {maxWidth} maxWidth breakpoint.\r
          </Dialog.Content>\r
          <Dialog.Actions>\r
            <Button onClick={() => setOpen(false)}>Close</Button>\r
          </Dialog.Actions>\r
        </Dialog>\r
      </>;
  }
}`,...(M=(R=x.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};const ne=["Default","WithActions","FullWidth","FullScreen","MaxWidthOptions"];export{m as Default,g as FullScreen,h as FullWidth,x as MaxWidthOptions,f as WithActions,ne as __namedExportsOrder,ee as default};
