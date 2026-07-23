import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-Dx_1l3Sb.js";import{c as O}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=l.forwardRef(({value:i,defaultValue:x,onChange:o,min:t,max:s,step:m=1,size:T="md",error:k=!1,disabled:c=!1,fullWidth:z=!1,className:S,...W},D)=>{const v=i!==void 0,[I,w]=l.useState(x??0),n=v?i:I,V=l.useCallback(d=>{let a=d;return t!==void 0&&(a=Math.max(t,a)),s!==void 0&&(a=Math.min(s,a)),a},[t,s]),u=l.useCallback(d=>{const a=V(d);v||w(a),o==null||o(a)},[V,v,o]),E=l.useCallback(d=>{const a=parseFloat(d.target.value);isNaN(a)||u(a)},[u]),K=l.useCallback(()=>u(n+m),[u,n,m]),M=l.useCallback(()=>u(n-m),[u,n,m]);return e.jsxs("div",{className:O("ms-number-field",`ms-number-field--${T}`,k&&"ms-number-field--error",c&&"ms-number-field--disabled",z&&"ms-number-field--fullWidth",S),children:[e.jsx("button",{type:"button",className:"ms-number-field__btn ms-number-field__btn--decrement",onClick:M,disabled:c||t!==void 0&&n<=t,tabIndex:-1,"aria-label":"Decrement",children:"-"}),e.jsx("input",{ref:D,type:"number",className:"ms-number-field__input",value:n,onChange:E,min:t,max:s,step:m,disabled:c,...W}),e.jsx("button",{type:"button",className:"ms-number-field__btn ms-number-field__btn--increment",onClick:K,disabled:c||s!==void 0&&n>=s,tabIndex:-1,"aria-label":"Increment",children:"+"})]})});r.displayName="NumberField";r.__docgenInfo={description:"",methods:[],displayName:"NumberField",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const H={title:"Components/NumberField",component:r,argTypes:{size:{control:"select",options:["sm","md","lg"]},min:{control:"number"},max:{control:"number"},step:{control:"number"},error:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},defaultValue:{control:"number"}}},p={args:{defaultValue:0,min:0,max:100,step:1}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"400px"},children:[e.jsx(r,{defaultValue:0,min:0,max:100,size:"sm"}),e.jsx(r,{defaultValue:50,min:0,max:100,size:"md"}),e.jsx(r,{defaultValue:10,min:0,max:20,size:"lg"}),e.jsx(r,{defaultValue:0,min:0,max:10,step:2}),e.jsx(r,{defaultValue:5,min:0,max:10,error:!0}),e.jsx(r,{defaultValue:3,min:0,max:10,disabled:!0})]})},b={render:()=>{const[i,x]=l.useState(5);return e.jsxs("div",{style:{padding:"24px",maxWidth:"400px"},children:[e.jsxs("p",{children:["Value: ",i]}),e.jsx(r,{value:i,onChange:x,min:0,max:20})]})}};var y,g,h;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1
  }
}`,...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var N,j,_;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '400px'
  }}>\r
      <NumberField defaultValue={0} min={0} max={100} size="sm" />\r
      <NumberField defaultValue={50} min={0} max={100} size="md" />\r
      <NumberField defaultValue={10} min={0} max={20} size="lg" />\r
      <NumberField defaultValue={0} min={0} max={10} step={2} />\r
      <NumberField defaultValue={5} min={0} max={10} error />\r
      <NumberField defaultValue={3} min={0} max={10} disabled />\r
    </div>
}`,...(_=(j=f.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var F,C,q;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(5);
    return <div style={{
      padding: '24px',
      maxWidth: '400px'
    }}>\r
        <p>Value: {value}</p>\r
        <NumberField value={value} onChange={setValue} min={0} max={20} />\r
      </div>;
  }
}`,...(q=(C=b.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const J=["Default","KitchenSink","Controlled"];export{b as Controlled,p as Default,f as KitchenSink,J as __namedExportsOrder,H as default};
