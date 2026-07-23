import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as t}from"./index-Dx_1l3Sb.js";import{c as k}from"./cn-2dOUpm6k.js";/* empty css                  */import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const l=t.forwardRef(({options:C,value:c,defaultValue:A=null,onChange:d,onInputChange:S,label:m,placeholder:le,disabled:f=!1,error:re=!1,fullWidth:se=!1,freeSolo:be=!1,loading:ne=!1,noOptionsText:ie="No options",className:ue,...pe},u)=>{const[p,s]=t.useState(!1),[F,T]=t.useState(""),[E,W]=t.useState(!1),[j,h]=t.useState(-1),[ce,de]=t.useState(A),me=t.useRef(null),fe=t.useRef(null),w=t.useRef(null),D=c!==void 0,n=D?c:ce,q=E||!!F,i=C.filter(e=>e.label.toLowerCase().includes(F.toLowerCase())),N=t.useCallback(e=>{D||de(e),d==null||d(e),T(e?e.label:""),s(!1)},[D,d]);t.useEffect(()=>{p&&i.length>0&&h(0)},[p,i.length]),t.useEffect(()=>{const e=r=>{w.current&&!w.current.contains(r.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const he=e=>{if(e.key==="ArrowDown"){if(e.preventDefault(),!p){s(!0);return}h(r=>Math.min(r+1,i.length-1))}else e.key==="ArrowUp"?(e.preventDefault(),h(r=>Math.max(r-1,0))):e.key==="Enter"&&p&&j>=0?(e.preventDefault(),N(i[j])):e.key==="Escape"&&s(!1)},V=p&&!f;return o.jsxs("div",{ref:e=>{w.current=e,typeof u=="function"?u(e):u&&"current"in u&&(u.current=e)},className:k("ms-autocomplete",se&&"ms-autocomplete--fullWidth",re&&"ms-autocomplete--error",f&&"ms-autocomplete--disabled",E&&"ms-autocomplete--focused",m&&q&&"ms-autocomplete--floating",ue),...pe,children:[o.jsxs("div",{className:"ms-autocomplete__input-wrapper",children:[o.jsx("input",{ref:me,className:"ms-textfield__input ms-autocomplete__input",value:F,onChange:e=>{T(e.target.value),S==null||S(e.target.value),s(!0)},onFocus:()=>{W(!0),s(!0)},onBlur:()=>W(!1),onKeyDown:he,placeholder:m&&!q?"":le,disabled:f,role:"combobox","aria-expanded":V,"aria-haspopup":"listbox"}),m&&o.jsx("label",{className:"ms-autocomplete__label",children:m}),o.jsx("span",{className:"ms-autocomplete__indicator",onClick:()=>!f&&s(e=>!e),children:"▼"})]}),V&&o.jsx("ul",{ref:fe,className:"ms-autocomplete__listbox",role:"listbox",children:ne?o.jsx("li",{className:"ms-autocomplete__option ms-autocomplete__option--loading",children:"Loading..."}):i.length===0?o.jsx("li",{className:"ms-autocomplete__option ms-autocomplete__option--no-results",children:ie}):i.map((e,r)=>o.jsx("li",{role:"option","aria-selected":(n==null?void 0:n.value)===e.value,className:k("ms-autocomplete__option",r===j&&"ms-autocomplete__option--highlighted",(n==null?void 0:n.value)===e.value&&"ms-autocomplete__option--selected"),onClick:()=>N(e),onMouseEnter:()=>h(r),children:e.label},e.value))})]})});l.displayName="Autocomplete";l.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"AutocompleteOption | null",elements:[{name:"AutocompleteOption"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"AutocompleteOption | null",elements:[{name:"AutocompleteOption"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption | null) => void",signature:{arguments:[{type:{name:"union",raw:"AutocompleteOption | null",elements:[{name:"AutocompleteOption"},{name:"null"}]},name:"option"}],return:{name:"void"}}},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},freeSolo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},noOptionsText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No options'",computed:!1}}},composes:["Omit"]};const a=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"}],Ce={title:"Components/Autocomplete",component:l,argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},error:{control:"boolean"},fullWidth:{control:"boolean"},loading:{control:"boolean"},freeSolo:{control:"boolean"},noOptionsText:{control:"text"}}},b={args:{options:a,label:"Fruit",placeholder:""}},g={render:()=>{const[C,c]=t.useState({value:"cherry",label:"Cherry"});return o.jsx(l,{options:a,value:C,onChange:A=>c(A),label:"Fruit",placeholder:"Choose a fruit..."})}},v={args:{options:a,label:"Fruit",placeholder:"Choose a fruit...",disabled:!0,value:{value:"banana",label:"Banana"}}},x={args:{options:a,label:"Fruit",placeholder:"Choose a fruit...",error:!0}},y={args:{options:a,label:"Fruit",placeholder:"Choose a fruit...",loading:!0}},O={args:{options:a,label:"Fruit",placeholder:"Choose a fruit...",fullWidth:!0}},_={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[o.jsx(l,{options:a,label:"Default",placeholder:"Choose a fruit..."}),o.jsx(l,{options:a,label:"With Selection",placeholder:"Choose a fruit...",defaultValue:{value:"banana",label:"Banana"}}),o.jsx(l,{options:a,label:"Disabled",placeholder:"Choose a fruit...",disabled:!0,value:{value:"apple",label:"Apple"}}),o.jsx(l,{options:a,label:"Error State",placeholder:"Choose a fruit...",error:!0}),o.jsx(l,{options:a,label:"Loading",placeholder:"Choose a fruit...",loading:!0}),o.jsx(l,{options:a,label:"Full Width",placeholder:"Choose a fruit...",fullWidth:!0})]})};var L,R,B;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: ""
  }
}`,...(B=(R=b.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var K,M,G;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<{
      value: string;
      label: string;
    } | null>({
      value: 'cherry',
      label: 'Cherry'
    });
    return <Autocomplete options={fruitOptions} value={value} onChange={opt => setValue(opt)} label="Fruit" placeholder="Choose a fruit..." />;
  }
}`,...(G=(M=g.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var H,I,U;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: 'Choose a fruit...',
    disabled: true,
    value: {
      value: 'banana',
      label: 'Banana'
    }
  }
}`,...(U=(I=v.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var z,J,P;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: 'Choose a fruit...',
    error: true
  }
}`,...(P=(J=x.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: 'Choose a fruit...',
    loading: true
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: 'Choose a fruit...',
    fullWidth: true
  }
}`,...(ee=($=O.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,te,ae;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>\r
      <Autocomplete options={fruitOptions} label="Default" placeholder="Choose a fruit..." />\r
      <Autocomplete options={fruitOptions} label="With Selection" placeholder="Choose a fruit..." defaultValue={{
      value: 'banana',
      label: 'Banana'
    }} />\r
      <Autocomplete options={fruitOptions} label="Disabled" placeholder="Choose a fruit..." disabled value={{
      value: 'apple',
      label: 'Apple'
    }} />\r
      <Autocomplete options={fruitOptions} label="Error State" placeholder="Choose a fruit..." error />\r
      <Autocomplete options={fruitOptions} label="Loading" placeholder="Choose a fruit..." loading />\r
      <Autocomplete options={fruitOptions} label="Full Width" placeholder="Choose a fruit..." fullWidth />\r
    </div>
}`,...(ae=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Ae=["Default","WithSelection","Disabled","Error","Loading","FullWidth","KitchenSink"];export{b as Default,v as Disabled,x as Error,O as FullWidth,_ as KitchenSink,y as Loading,g as WithSelection,Ae as __namedExportsOrder,Ce as default};
