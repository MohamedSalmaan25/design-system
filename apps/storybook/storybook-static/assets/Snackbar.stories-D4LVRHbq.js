import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-Dx_1l3Sb.js";import{c as J}from"./cn-2dOUpm6k.js";import{B as o}from"./Button-C6PCuTDE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const s=n.forwardRef(({open:t,message:r,onClose:a,autoHideDuration:g=5e3,action:f,position:$="bottom-center",severity:b,className:K,...V},L)=>{const[S,k]=n.useState(!1),v=n.useCallback(()=>{k(!0),setTimeout(()=>{k(!1),a==null||a()},200)},[a]);if(n.useEffect(()=>{if(!t||!g)return;const G=setTimeout(v,g);return()=>clearTimeout(G)},[t,g,v]),!t&&!S)return null;const[M,F]=$.split("-");return e.jsxs("div",{ref:L,className:J("ms-snackbar",`ms-snackbar--${M}-${F}`,b&&`ms-snackbar--${b}`,t&&!S?"ms-snackbar--enter":"ms-snackbar--exit",K),role:"alert","aria-live":"assertive",...V,children:[e.jsx("span",{className:"ms-snackbar__content",children:r}),f&&e.jsx("span",{className:"ms-snackbar__action",children:f})]})});s.displayName="Snackbar";s.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{open:{required:!0,tsType:{name:"boolean"},description:""},message:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},autoHideDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"}]},description:"",defaultValue:{value:"'bottom-center'",computed:!1}},severity:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""}},composes:["HTMLAttributes"]};const re={title:"Components/Snackbar",component:s,argTypes:{open:{control:"boolean"},message:{control:"text"},position:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]},severity:{control:"select",options:[void 0,"success","info","warning","error"]},autoHideDuration:{control:"number"}}},c={args:{open:!0,message:"This is a snackbar message."}},i={render:()=>{const[t,r]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>r(!0),children:"Show Snackbar"}),e.jsx(s,{open:t,message:"Snackbar with action",action:e.jsx(o,{size:"sm",color:"primary",onClick:()=>r(!1),children:"Undo"}),onClose:()=>r(!1)})]})}},l={args:{open:!0,message:"Item deleted",action:e.jsx("button",{children:"Undo"})}},p={args:{open:!0,message:"Operation completed successfully!",severity:"success"}},u={args:{open:!0,message:"Something went wrong.",severity:"error"}},m={args:{open:!0,message:"Top center notification",position:"top-center"}},d={render:()=>{const[t,r]=n.useState(null);return e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"24px"},children:[e.jsx(o,{onClick:()=>r("success"),children:"Success"}),e.jsx(o,{onClick:()=>r("error"),children:"Error"}),e.jsx(o,{onClick:()=>r("top"),children:"Top Center"}),e.jsx(s,{open:t==="success",message:"Success!",severity:"success",onClose:()=>r(null),autoHideDuration:3e3}),e.jsx(s,{open:t==="error",message:"Error occurred",severity:"error",onClose:()=>r(null),autoHideDuration:3e3}),e.jsx(s,{open:t==="top",message:"Top notification",position:"top-center",onClose:()=>r(null),autoHideDuration:3e3})]})}};var h,x,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'This is a snackbar message.'
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,T,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>\r
        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>\r
        <Snackbar open={open} message="Snackbar with action" action={<Button size="sm" color="primary" onClick={() => setOpen(false)}>Undo</Button>} onClose={() => setOpen(false)} />\r
      </div>;
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var w,O,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Item deleted',
    action: <button>Undo</button>
  }
}`,...(B=(O=l.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var E,D,_;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Operation completed successfully!',
    severity: 'success'
  }
}`,...(_=(D=p.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var q,H,N;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Something went wrong.',
    severity: 'error'
  }
}`,...(N=(H=u.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,U,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Top center notification',
    position: 'top-center'
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var z,A,I;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState<string | null>(null);
    return <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      padding: '24px'
    }}>\r
        <Button onClick={() => setOpen('success')}>Success</Button>\r
        <Button onClick={() => setOpen('error')}>Error</Button>\r
        <Button onClick={() => setOpen('top')}>Top Center</Button>\r
        <Snackbar open={open === 'success'} message="Success!" severity="success" onClose={() => setOpen(null)} autoHideDuration={3000} />\r
        <Snackbar open={open === 'error'} message="Error occurred" severity="error" onClose={() => setOpen(null)} autoHideDuration={3000} />\r
        <Snackbar open={open === 'top'} message="Top notification" position="top-center" onClose={() => setOpen(null)} autoHideDuration={3000} />\r
      </div>;
  }
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const te=["Default","Controlled","WithAction","Success","Error","TopCenter","KitchenSink"];export{i as Controlled,c as Default,u as Error,d as KitchenSink,p as Success,m as TopCenter,l as WithAction,te as __namedExportsOrder,re as default};
