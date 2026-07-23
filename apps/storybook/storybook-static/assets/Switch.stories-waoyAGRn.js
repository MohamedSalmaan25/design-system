import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-Dx_1l3Sb.js";import{c as X}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=n.forwardRef(({checked:s,defaultChecked:o=!1,onChange:r,disabled:g,size:F="md",color:K="primary",label:k,className:W},l)=>{const c=s!==void 0,[G,J]=n.useState(o),P=c?s:G,Q=n.useRef(null),U=n.useCallback(t=>{c||J(t.target.checked),r==null||r(t)},[c,r]);return e.jsxs("label",{className:X("ms-switch",`ms-switch--${F}`,`ms-switch--${K}`,P&&"ms-switch--checked",g&&"ms-switch--disabled",W),children:[e.jsx("input",{type:"checkbox",ref:t=>{Q.current=t,typeof l=="function"?l(t):l&&"current"in l&&(l.current=t)},checked:c?s:void 0,defaultChecked:c?void 0:o,onChange:U,disabled:g,className:"ms-switch__input",role:"switch"}),e.jsx("span",{className:"ms-switch__track","aria-hidden":"true",children:e.jsx("span",{className:"ms-switch__thumb"})}),k&&e.jsx("span",{className:"ms-switch__label",children:k})]})});a.displayName="Switch";a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'danger' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Components/Switch",component:a,argTypes:{size:{control:"select",options:["sm","md"]},color:{control:"select",options:["primary","danger","success"]},disabled:{control:"boolean"},label:{control:"text"},defaultChecked:{control:"boolean"}}},d={args:{label:"Enable notifications"}},i={args:{label:"Wi-Fi",defaultChecked:!0}},u={render:()=>{const[s,o]=n.useState(!1);return e.jsx(a,{checked:s,onChange:r=>o(r.target.checked),label:`Bluetooth: ${s?"On":"Off"}`})}},m={args:{label:"Auto-update",color:"success",defaultChecked:!0}},p={args:{label:"Delete on exit",color:"danger"}},h={args:{label:"Compact mode",size:"sm",defaultChecked:!0}},f={args:{label:"Disabled switch",disabled:!0}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:[e.jsx(a,{label:"Default"}),e.jsx(a,{label:"Default on",defaultChecked:!0}),e.jsx(a,{label:"Success",color:"success",defaultChecked:!0}),e.jsx(a,{label:"Danger",color:"danger"}),e.jsx(a,{label:"Small",size:"sm",defaultChecked:!0}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled on",disabled:!0,defaultChecked:!0})]})};var S,x,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var w,y,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Wi-Fi',
    defaultChecked: true
  }
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var v,j,T;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={e => setChecked(e.target.checked)} label={\`Bluetooth: \${checked ? 'On' : 'Off'}\`} />;
  }
}`,...(T=(j=u.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var _,E,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Auto-update',
    color: 'success',
    defaultChecked: true
  }
}`,...(q=(E=m.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var N,z,I;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Delete on exit',
    color: 'danger'
  }
}`,...(I=(z=p.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var O,R,$;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Compact mode',
    size: 'sm',
    defaultChecked: true
  }
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var H,L,M;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    disabled: true
  }
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,A,B;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px'
  }}>\r
      <Switch label="Default" />\r
      <Switch label="Default on" defaultChecked />\r
      <Switch label="Success" color="success" defaultChecked />\r
      <Switch label="Danger" color="danger" />\r
      <Switch label="Small" size="sm" defaultChecked />\r
      <Switch label="Disabled" disabled />\r
      <Switch label="Disabled on" disabled defaultChecked />\r
    </div>
}`,...(B=(A=b.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const te=["Default","Checked","Controlled","Success","Danger","Small","Disabled","KitchenSink"];export{i as Checked,u as Controlled,p as Danger,d as Default,f as Disabled,b as KitchenSink,h as Small,m as Success,te as __namedExportsOrder,re as default};
