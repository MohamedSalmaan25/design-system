import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as x}from"./index-Dx_1l3Sb.js";import{c as U}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const a=x.forwardRef(({checked:m,defaultChecked:$,onChange:O,disabled:h,indeterminate:p,size:B="md",color:F="primary",label:g,className:G,...J},r)=>{const u=x.useRef(null);x.useEffect(()=>{u.current&&(u.current.indeterminate=!!p)},[p]);const Q=b=>{u.current=b,typeof r=="function"?r(b):r&&"current"in r&&(r.current=b)},f=m!==void 0;return e.jsxs("label",{className:U("ms-checkbox",`ms-checkbox--${B}`,`ms-checkbox--${F}`,m&&"ms-checkbox--checked",h&&"ms-checkbox--disabled",p&&"ms-checkbox--indeterminate",G),children:[e.jsx("input",{type:"checkbox",ref:Q,checked:f?m:void 0,defaultChecked:f?void 0:$,onChange:O,disabled:h,className:"ms-checkbox__input",...J}),e.jsx("span",{className:"ms-checkbox__visual","aria-hidden":"true"}),g&&e.jsx("span",{className:"ms-checkbox__label",children:g})]})});a.displayName="Checkbox";a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'danger' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Components/Checkbox",component:a,argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","danger","success"]},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},s={args:{label:"Checkbox"}},l={args:{label:"Checked",defaultChecked:!0}},t={args:{label:"Disabled",disabled:!0}},c={args:{label:"Indeterminate",indeterminate:!0}},n={args:{label:"Accept terms and conditions",defaultChecked:!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"24px"},children:[e.jsx(a,{label:"Primary",color:"primary",defaultChecked:!0}),e.jsx(a,{label:"Danger",color:"danger",defaultChecked:!0}),e.jsx(a,{label:"Success",color:"success",defaultChecked:!0})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"24px"},children:[e.jsx(a,{label:"Small",size:"sm"}),e.jsx(a,{label:"Medium",size:"md"}),e.jsx(a,{label:"Large",size:"lg"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"24px"},children:[e.jsx(a,{label:"Default"}),e.jsx(a,{label:"Checked",defaultChecked:!0}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Indeterminate",indeterminate:!0}),e.jsx(a,{label:"Danger",color:"danger",defaultChecked:!0}),e.jsx(a,{label:"Success",color:"success",defaultChecked:!0})]})};var k,C,y;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox'
  }
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,j,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Checked',
    defaultChecked: true
  }
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var D,T,I;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...(I=(T=t.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var z,E,_;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate',
    indeterminate: true
  }
}`,...(_=(E=c.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var q,w,R;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: true
  }
}`,...(R=(w=n.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var L,N,W;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <Checkbox label="Primary" color="primary" defaultChecked />\r
      <Checkbox label="Danger" color="danger" defaultChecked />\r
      <Checkbox label="Success" color="success" defaultChecked />\r
    </div>
}`,...(W=(N=o.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var M,H,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    padding: '24px'
  }}>\r
      <Checkbox label="Small" size="sm" />\r
      <Checkbox label="Medium" size="md" />\r
      <Checkbox label="Large" size="lg" />\r
    </div>
}`,...(A=(H=d.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var K,P,V;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <Checkbox label="Default" />\r
      <Checkbox label="Checked" defaultChecked />\r
      <Checkbox label="Disabled" disabled />\r
      <Checkbox label="Indeterminate" indeterminate />\r
      <Checkbox label="Danger" color="danger" defaultChecked />\r
      <Checkbox label="Success" color="success" defaultChecked />\r
    </div>
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const se=["Default","Checked","Disabled","Indeterminate","WithLabel","Colors","Sizes","KitchenSink"];export{l as Checked,o as Colors,s as Default,t as Disabled,c as Indeterminate,i as KitchenSink,d as Sizes,n as WithLabel,se as __namedExportsOrder,re as default};
