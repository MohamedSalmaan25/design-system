import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as $}from"./index-Dx_1l3Sb.js";import{c as re}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const s=$.forwardRef(({value:a,defaultValue:m,onChange:h,options:J,placeholder:S,disabled:b,error:P,fullWidth:Q,size:X="md",label:f,className:Y,...Z},ee)=>{const v=a!==void 0;return e.jsxs("div",{className:re("ms-select",`ms-select--${X}`,P&&"ms-select--error",b&&"ms-select--disabled",Q&&"ms-select--fullWidth",Y),children:[f&&e.jsx("label",{className:"ms-select__label",children:f}),e.jsxs("div",{className:"ms-select__wrapper",children:[e.jsxs("select",{ref:ee,value:v?a:void 0,defaultValue:v?void 0:m,onChange:h,disabled:b,className:"ms-select__native",...Z,children:[S&&e.jsx("option",{value:"",disabled:!0,children:S}),J.map(g=>e.jsx("option",{value:g.value,children:g.label},g.value))]}),e.jsx("span",{className:"ms-select__arrow","aria-hidden":"true",children:e.jsx("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 1L5 5L9 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})});s.displayName="Select";s.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ne={title:"Components/Select",component:s,argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},error:{control:"boolean"},fullWidth:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]},label:{control:"text"}}},r=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"}],l={args:{options:r,placeholder:"Select a country"}},t={render:()=>{const[a,m]=$.useState("");return e.jsx(s,{options:r,value:a,onChange:h=>m(h.target.value),placeholder:"Select a country"})}},o={args:{options:r,label:"Country",placeholder:"Select a country"}},n={args:{options:r.slice(0,3),size:"sm",placeholder:"Small select"}},c={args:{options:r.slice(0,3),size:"lg",placeholder:"Large select"}},i={args:{options:r,placeholder:"Select a country",error:!0,label:"Country"}},d={args:{options:r,placeholder:"Disabled",disabled:!0}},p={args:{options:r,placeholder:"Full width select",fullWidth:!0}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:400},children:[e.jsx(s,{options:r,placeholder:"Default"}),e.jsx(s,{options:r,placeholder:"Small",size:"sm"}),e.jsx(s,{options:r,placeholder:"Large",size:"lg"}),e.jsx(s,{options:r,placeholder:"With label",label:"Choose one"}),e.jsx(s,{options:r,placeholder:"Error state",error:!0,label:"Country"}),e.jsx(s,{options:r,placeholder:"Disabled",disabled:!0}),e.jsx(s,{options:r,placeholder:"Full width",fullWidth:!0})]})};var x,y,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options: countries,
    placeholder: 'Select a country'
  }
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,w,W;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Select options={countries} value={value} onChange={e => setValue(e.target.value)} placeholder="Select a country" />;
  }
}`,...(W=(w=t.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var L,T,E;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Country',
    placeholder: 'Select a country'
  }
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var D,_,q;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: countries.slice(0, 3),
    size: 'sm',
    placeholder: 'Small select'
  }
}`,...(q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var z,N,k;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options: countries.slice(0, 3),
    size: 'lg',
    placeholder: 'Large select'
  }
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var F,V,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: countries,
    placeholder: 'Select a country',
    error: true,
    label: 'Country'
  }
}`,...(R=(V=i.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var M,H,K;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options: countries,
    placeholder: 'Disabled',
    disabled: true
  }
}`,...(K=(H=d.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var O,U,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: countries,
    placeholder: 'Full width select',
    fullWidth: true
  }
}`,...(A=(U=p.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var B,G,I;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: 400
  }}>\r
      <Select options={countries} placeholder="Default" />\r
      <Select options={countries} placeholder="Small" size="sm" />\r
      <Select options={countries} placeholder="Large" size="lg" />\r
      <Select options={countries} placeholder="With label" label="Choose one" />\r
      <Select options={countries} placeholder="Error state" error label="Country" />\r
      <Select options={countries} placeholder="Disabled" disabled />\r
      <Select options={countries} placeholder="Full width" fullWidth />\r
    </div>
}`,...(I=(G=u.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const ce=["Default","Controlled","WithLabel","Small","Large","Error","Disabled","FullWidth","KitchenSink"];export{t as Controlled,l as Default,d as Disabled,i as Error,p as FullWidth,u as KitchenSink,c as Large,n as Small,o as WithLabel,ce as __namedExportsOrder,ne as default};
