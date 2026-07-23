import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as Q}from"./index-Dx_1l3Sb.js";import{c as U}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const Z={success:"V",info:"i",warning:"!",error:"X"},r=Q.forwardRef(({severity:p="info",variant:B="standard",onClose:m,icon:v,title:f,children:G,className:H,...J},L)=>e.jsxs("div",{ref:L,role:"alert",className:U("ms-alert",`ms-alert--${p}`,`ms-alert--${B}`,H),...J,children:[v!==null&&e.jsx("span",{className:"ms-alert__icon","aria-hidden":"true",children:v??Z[p]}),e.jsxs("span",{className:"ms-alert__content",children:[f&&e.jsx("span",{className:"ms-alert__title",children:f}),G]}),m&&e.jsx("button",{type:"button",className:"ms-alert__close","aria-label":"Close",onClick:m,children:"X"})]}));r.displayName="Alert";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const te={title:"Components/Alert",component:r,argTypes:{severity:{control:"select",options:["success","info","warning","error"]},variant:{control:"select",options:["filled","outlined","standard"]},onClose:{action:"closed"},title:{control:"text"}}},s={args:{severity:"info",children:"This is an informational alert."}},n={args:{severity:"success",children:"Operation completed successfully."}},i={args:{severity:"warning",children:"Please review your input before submitting."}},t={args:{severity:"error",children:"An unexpected error occurred. Please try again."}},a={args:{severity:"info",variant:"filled",children:"Filled variant with solid background."}},l={args:{severity:"info",variant:"outlined",children:"Outlined variant with border only."}},o={args:{severity:"info",variant:"standard",children:"Standard variant with subtle background."}},c={args:{severity:"warning",title:"Attention Required",children:"Your session will expire in 5 minutes."}},d={args:{severity:"error",onClose:()=>alert("Closed"),children:"Click the close button to dismiss this alert."}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:[e.jsx(r,{severity:"success",title:"Success",children:"Data saved successfully."}),e.jsx(r,{severity:"info",title:"Info",children:"Your profile has been updated."}),e.jsx(r,{severity:"warning",title:"Warning",children:"Disk space is running low."}),e.jsx(r,{severity:"error",title:"Error",children:"Failed to connect to server."}),e.jsx(r,{severity:"info",variant:"filled",children:"Filled info alert."}),e.jsx(r,{severity:"info",variant:"outlined",children:"Outlined info alert."}),e.jsx(r,{severity:"info",variant:"standard",children:"Standard info alert."}),e.jsx(r,{severity:"success",variant:"filled",children:"Filled success alert."}),e.jsx(r,{severity:"warning",variant:"outlined",children:"Outlined warning alert."}),e.jsx(r,{severity:"error",variant:"filled",onClose:()=>{},children:"Dismissible error alert."})]})};var g,y,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    children: 'This is an informational alert.'
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,w,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    children: 'Operation completed successfully.'
  }
}`,...(A=(w=n.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var b,S,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    children: 'Please review your input before submitting.'
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,O,_;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    children: 'An unexpected error occurred. Please try again.'
  }
}`,...(_=(O=t.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var k,T,D;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    variant: 'filled',
    children: 'Filled variant with solid background.'
  }
}`,...(D=(T=a.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var F,N,q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    variant: 'outlined',
    children: 'Outlined variant with border only.'
  }
}`,...(q=(N=l.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var E,R,W;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'Standard variant with subtle background.'
  }
}`,...(W=(R=o.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var I,P,Y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: 'Attention Required',
    children: 'Your session will expire in 5 minutes.'
  }
}`,...(Y=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var V,K,X;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    onClose: () => alert('Closed'),
    children: 'Click the close button to dismiss this alert.'
  }
}`,...(X=(K=d.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var $,M,z;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px'
  }}>\r
      <Alert severity="success" title="Success">Data saved successfully.</Alert>\r
      <Alert severity="info" title="Info">Your profile has been updated.</Alert>\r
      <Alert severity="warning" title="Warning">Disk space is running low.</Alert>\r
      <Alert severity="error" title="Error">Failed to connect to server.</Alert>\r
      <Alert severity="info" variant="filled">Filled info alert.</Alert>\r
      <Alert severity="info" variant="outlined">Outlined info alert.</Alert>\r
      <Alert severity="info" variant="standard">Standard info alert.</Alert>\r
      <Alert severity="success" variant="filled">Filled success alert.</Alert>\r
      <Alert severity="warning" variant="outlined">Outlined warning alert.</Alert>\r
      <Alert severity="error" variant="filled" onClose={() => {}}>Dismissible error alert.</Alert>\r
    </div>
}`,...(z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const ae=["Info","Success","Warning","Error","Filled","Outlined","Standard","WithTitle","Dismissible","KitchenSink"];export{d as Dismissible,t as Error,a as Filled,s as Info,u as KitchenSink,l as Outlined,o as Standard,n as Success,i as Warning,c as WithTitle,ae as __namedExportsOrder,te as default};
