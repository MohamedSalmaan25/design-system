import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-Dx_1l3Sb.js";import{c as J}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const P=s.createContext(null),r=s.forwardRef(({value:t,selected:n,onChange:u,disabled:c,size:T,children:f,className:B,...j},y)=>{const l=s.useContext(P),i=T||(l==null?void 0:l.size)||"md";let a;n!==void 0?a=n:(l==null?void 0:l.selectedValue)!==void 0?Array.isArray(l.selectedValue)?a=l.selectedValue.includes(t):a=l.selectedValue===t:a=!1;const S=G=>{var C;c||(u==null||u(G,!a),(C=l==null?void 0:l.onChange)==null||C.call(l,t))};return e.jsx("button",{ref:y,type:"button",disabled:c,"aria-pressed":a,onClick:S,className:J("ms-toggle-button",`ms-toggle-button--${i}`,a&&"ms-toggle-button--selected",B),...j,children:f})});r.displayName="ToggleButton";const o=s.forwardRef(({value:t,onChange:n,exclusive:u,orientation:c="horizontal",size:T="md",children:f,className:B,...j},y)=>{const l=s.useCallback(i=>{if(n)if(u)n(i);else{const a=Array.isArray(t)?t:[],S=a.includes(i)?a.filter(G=>G!==i):[...a,i];n(S)}},[n,u,t]);return e.jsx(P.Provider,{value:{selectedValue:t,onChange:l,exclusive:u,size:T},children:e.jsx("div",{ref:y,role:"group",className:J("ms-toggle-button-group",c==="vertical"&&"ms-toggle-button-group--vertical",B),...j,children:f})})});o.displayName="ToggleButtonGroup";r.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{value:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>, selected: boolean) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"},{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"ToggleButtonGroup",props:{value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},exclusive:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ne={title:"Components/ToggleButton",component:r,argTypes:{value:{control:"text"},disabled:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]}}},d={args:{value:"bold",children:"Bold"}},g={args:{value:"bold",selected:!0,children:"Bold"}},m={render:()=>{const[t,n]=s.useState("left");return e.jsxs(o,{value:t,onChange:n,exclusive:!0,children:[e.jsx(r,{value:"left",children:"Left"}),e.jsx(r,{value:"center",children:"Center"}),e.jsx(r,{value:"right",children:"Right"})]})}},p={render:()=>{const[t,n]=s.useState(["bold","italic"]);return e.jsxs(o,{value:t,onChange:n,children:[e.jsx(r,{value:"bold",children:"B"}),e.jsx(r,{value:"italic",children:"I"}),e.jsx(r,{value:"underline",children:"U"}),e.jsx(r,{value:"strikethrough",children:"S"})]})}},v={render:()=>{const[t,n]=s.useState("asc");return e.jsxs(o,{value:t,onChange:n,exclusive:!0,orientation:"vertical",children:[e.jsx(r,{value:"asc",children:"Ascending"}),e.jsx(r,{value:"desc",children:"Descending"})]})}},h={render:()=>{const[t,n]=s.useState("md");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(o,{value:t,onChange:n,exclusive:!0,size:"sm",children:e.jsx(r,{value:"sm",children:"Small"})}),e.jsx(o,{value:t,onChange:n,exclusive:!0,size:"md",children:e.jsx(r,{value:"md",children:"Medium"})}),e.jsx(o,{value:t,onChange:n,exclusive:!0,size:"lg",children:e.jsx(r,{value:"lg",children:"Large"})})]})}};function Q(){const[t,n]=s.useState("left");return e.jsxs(o,{value:t,onChange:n,exclusive:!0,children:[e.jsx(r,{value:"left",children:"Left"}),e.jsx(r,{value:"center",children:"Center"}),e.jsx(r,{value:"right",children:"Right"})]})}function W(){const[t,n]=s.useState(["bold","italic"]);return e.jsxs(o,{value:t,onChange:n,children:[e.jsx(r,{value:"bold",children:"B"}),e.jsx(r,{value:"italic",children:"I"}),e.jsx(r,{value:"underline",children:"U"}),e.jsx(r,{value:"strikethrough",children:"S"})]})}function X(){const[t,n]=s.useState("asc");return e.jsxs(o,{value:t,onChange:n,exclusive:!0,orientation:"vertical",children:[e.jsx(r,{value:"asc",children:"Ascending"}),e.jsx(r,{value:"desc",children:"Descending"})]})}const x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx(Q,{}),e.jsx(W,{}),e.jsx(X,{})]})};var V,b,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 'bold',
    children: 'Bold'
  }
}`,...(z=(b=d.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var R,q,w;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 'bold',
    selected: true,
    children: 'Bold'
  }
}`,...(w=(q=g.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var E,M,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>('left');
    return <ToggleButtonGroup value={value} onChange={setValue} exclusive>\r
        <ToggleButton value="left">Left</ToggleButton>\r
        <ToggleButton value="center">Center</ToggleButton>\r
        <ToggleButton value="right">Right</ToggleButton>\r
      </ToggleButtonGroup>;
  }
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var A,D,k;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>(['bold', 'italic']);
    return <ToggleButtonGroup value={value} onChange={setValue}>\r
        <ToggleButton value="bold">B</ToggleButton>\r
        <ToggleButton value="italic">I</ToggleButton>\r
        <ToggleButton value="underline">U</ToggleButton>\r
        <ToggleButton value="strikethrough">S</ToggleButton>\r
      </ToggleButtonGroup>;
  }
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var L,_,I;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>('asc');
    return <ToggleButtonGroup value={value} onChange={setValue} exclusive orientation="vertical">\r
        <ToggleButton value="asc">Ascending</ToggleButton>\r
        <ToggleButton value="desc">Descending</ToggleButton>\r
      </ToggleButtonGroup>;
  }
}`,...(I=(_=v.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var H,U,K;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>('md');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>\r
        <ToggleButtonGroup value={value} onChange={setValue} exclusive size="sm">\r
          <ToggleButton value="sm">Small</ToggleButton>\r
        </ToggleButtonGroup>\r
        <ToggleButtonGroup value={value} onChange={setValue} exclusive size="md">\r
          <ToggleButton value="md">Medium</ToggleButton>\r
        </ToggleButtonGroup>\r
        <ToggleButtonGroup value={value} onChange={setValue} exclusive size="lg">\r
          <ToggleButton value="lg">Large</ToggleButton>\r
        </ToggleButtonGroup>\r
      </div>;
  }
}`,...(K=(U=h.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var O,$,F;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
      <ExclusiveGroup />\r
      <MultipleGroup />\r
      <VerticalGroupComponent />\r
    </div>
}`,...(F=($=x.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const le=["Default","Selected","ToggleButtonGroupExclusive","ToggleButtonGroupMultiple","VerticalGroup","Sizes","KitchenSink"];export{d as Default,x as KitchenSink,g as Selected,h as Sizes,m as ToggleButtonGroupExclusive,p as ToggleButtonGroupMultiple,v as VerticalGroup,le as __namedExportsOrder,ne as default};
