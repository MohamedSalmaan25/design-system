import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-Dx_1l3Sb.js";import{c as z}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const A=s.createContext(null),n=s.forwardRef(({name:o,value:r,defaultValue:l,onChange:i,row:u,children:R,className:t,...p},g)=>{const d=r!==void 0,h=s.useRef(d?void 0:l),B=s.useCallback(f=>{d||(h.current=f),i==null||i(f)},[d,i]),I={name:o,selectedValue:d?r:h.current,onChange:B};return e.jsx(A.Provider,{value:I,children:e.jsx("div",{ref:g,role:"radiogroup",className:z("ms-radio-group",u&&"ms-radio-group--row",t),...p,children:R})})});n.displayName="RadioGroup";const a=s.forwardRef(({value:o,disabled:r,label:l,className:i,...u},R)=>{const t=s.useContext(A),p=(t==null?void 0:t.selectedValue)===o,g=d=>{d.target.checked&&(t==null||t.onChange(o))};return e.jsxs("label",{ref:R,className:z("ms-radio",p&&"ms-radio--checked",r&&"ms-radio--disabled",i),...u,children:[e.jsx("input",{type:"radio",name:t==null?void 0:t.name,value:o,checked:p,onChange:g,disabled:r,className:"ms-radio__input"}),e.jsx("span",{className:"ms-radio__visual","aria-hidden":"true"}),l&&e.jsx("span",{className:"ms-radio__label",children:l})]})});a.displayName="Radio";n.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},row:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const H={title:"Components/RadioGroup",component:n,argTypes:{row:{control:"boolean"},name:{control:"text"},value:{control:"text"},defaultValue:{control:"text"}}},c={render:()=>{const[o,r]=s.useState("option1");return e.jsxs(n,{value:o,onChange:l=>r(l),children:[e.jsx(a,{value:"option1",label:"Option 1"}),e.jsx(a,{value:"option2",label:"Option 2"}),e.jsx(a,{value:"option3",label:"Option 3"})]})}},v={render:()=>{const[o,r]=s.useState("option1");return e.jsxs(n,{value:o,onChange:l=>r(l),row:!0,children:[e.jsx(a,{value:"option1",label:"Option 1"}),e.jsx(a,{value:"option2",label:"Option 2"}),e.jsx(a,{value:"option3",label:"Option 3"})]})}},m={render:()=>{const[o,r]=s.useState("option1");return e.jsxs(n,{value:o,onChange:l=>r(l),children:[e.jsx(a,{value:"option1",label:"Option 1"}),e.jsx(a,{value:"option2",label:"Option 2 (disabled)",disabled:!0}),e.jsx(a,{value:"option3",label:"Option 3"})]})}},x={render:()=>e.jsxs(n,{defaultValue:"option2",onChange:o=>console.log(o),children:[e.jsx(a,{value:"option1",label:"Option 1"}),e.jsx(a,{value:"option2",label:"Option 2 (default)"}),e.jsx(a,{value:"option3",label:"Option 3"})]})},b={render:()=>{const[o,r]=s.useState("a"),[l,i]=s.useState("x");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Column layout"}),e.jsxs(n,{value:o,onChange:u=>r(u),children:[e.jsx(a,{value:"a",label:"Choice A"}),e.jsx(a,{value:"b",label:"Choice B"}),e.jsx(a,{value:"c",label:"Choice C (disabled)",disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Row layout"}),e.jsxs(n,{value:l,onChange:u=>i(u),row:!0,children:[e.jsx(a,{value:"x",label:"Extra Small"}),e.jsx(a,{value:"y",label:"Small"}),e.jsx(a,{value:"z",label:"Medium"})]})]})]})}};var j,y,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <RadioGroup value={value} onChange={v => setValue(v)}>\r
        <Radio value="option1" label="Option 1" />\r
        <Radio value="option2" label="Option 2" />\r
        <Radio value="option3" label="Option 3" />\r
      </RadioGroup>;
  }
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var O,V,S;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <RadioGroup value={value} onChange={v => setValue(v)} row>\r
        <Radio value="option1" label="Option 1" />\r
        <Radio value="option2" label="Option 2" />\r
        <Radio value="option3" label="Option 3" />\r
      </RadioGroup>;
  }
}`,...(S=(V=v.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var G,w,N;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <RadioGroup value={value} onChange={v => setValue(v)}>\r
        <Radio value="option1" label="Option 1" />\r
        <Radio value="option2" label="Option 2 (disabled)" disabled />\r
        <Radio value="option3" label="Option 3" />\r
      </RadioGroup>;
  }
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var T,_,q;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option2" onChange={v => console.log(v)}>\r
      <Radio value="option1" label="Option 1" />\r
      <Radio value="option2" label="Option 2 (default)" />\r
      <Radio value="option3" label="Option 3" />\r
    </RadioGroup>
}`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var D,k,E;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('x');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '24px'
    }}>\r
        <div>\r
          <strong>Column layout</strong>\r
          <RadioGroup value={value1} onChange={v => setValue1(v)}>\r
            <Radio value="a" label="Choice A" />\r
            <Radio value="b" label="Choice B" />\r
            <Radio value="c" label="Choice C (disabled)" disabled />\r
          </RadioGroup>\r
        </div>\r
        <div>\r
          <strong>Row layout</strong>\r
          <RadioGroup value={value2} onChange={v => setValue2(v)} row>\r
            <Radio value="x" label="Extra Small" />\r
            <Radio value="y" label="Small" />\r
            <Radio value="z" label="Medium" />\r
          </RadioGroup>\r
        </div>\r
      </div>;
  }
}`,...(E=(k=b.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const J=["Default","Row","DisabledOption","WithDefaultValue","KitchenSink"];export{c as Default,m as DisabledOption,b as KitchenSink,v as Row,x as WithDefaultValue,J as __namedExportsOrder,H as default};
