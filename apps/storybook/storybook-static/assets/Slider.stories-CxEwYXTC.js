import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-Dx_1l3Sb.js";import{c as de}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const n=l.forwardRef(({value:d,defaultValue:b=0,onChange:c,min:a=0,max:o=100,step:j=1,disabled:i=!1,marks:m=!1,showValue:N="off",orientation:u="horizontal",className:ee,...ae},re)=>{const S=d!==void 0,[se,te]=l.useState(b),[_,T]=l.useState(!1),k=l.useRef(null),q=S?d:se,p=(q-a)/(o-a)*100,f=l.useCallback((r,t)=>{if(!k.current||i)return;const s=k.current.getBoundingClientRect();let M;u==="horizontal"?M=(r-s.left)/s.width:M=1-(t-s.top)/s.height;const oe=Math.min(1,Math.max(0,M)),ue=a+oe*(o-a),ie=Math.round((ue-a)/j)*j+a,D=Math.min(o,Math.max(a,ie));S||te(D),c==null||c(D)},[a,o,j,i,S,c,u]),le=l.useCallback(r=>{r.preventDefault(),T(!0),f(r.clientX,r.clientY)},[f]);l.useEffect(()=>{if(!_)return;const r=s=>{s.preventDefault(),f(s.clientX,s.clientY)},t=()=>T(!1);return window.addEventListener("mousemove",r),window.addEventListener("mouseup",t),()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",t)}},[_,f]);const z=Array.isArray(m)?m:m?Array.from({length:5},(r,t)=>({value:a+t*(o-a)/4})):[],ne=N==="on"||N==="auto"&&_;return e.jsxs("div",{ref:re,className:de("ms-slider",u==="vertical"&&"ms-slider--vertical",i&&"ms-slider--disabled",ee),...ae,children:[e.jsxs("div",{ref:k,className:"ms-slider__track",onMouseDown:le,style:u==="vertical"?{height:"100%"}:void 0,children:[e.jsx("div",{className:"ms-slider__rail"}),e.jsx("div",{className:"ms-slider__fill",style:u==="horizontal"?{width:`${p}%`}:{height:`${p}%`}}),e.jsx("div",{className:"ms-slider__thumb",style:u==="horizontal"?{left:`${p}%`}:{bottom:`${p}%`},tabIndex:i?-1:0,role:"slider","aria-valuemin":a,"aria-valuemax":o,"aria-valuenow":q,"aria-disabled":i})]}),ne&&e.jsx("div",{className:"ms-slider__value",children:q}),m&&z.length>0&&e.jsx("div",{className:"ms-slider__marks",children:z.map((r,t)=>{const s=(r.value-a)/(o-a)*100;return e.jsx("div",{className:"ms-slider__mark",style:u==="horizontal"?{left:`${s}%`}:{bottom:`${s}%`},children:r.label&&e.jsx("span",{className:"ms-slider__mark-label",children:r.label})},t)})})]})});n.displayName="Slider";n.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},marks:{required:!1,tsType:{name:"union",raw:"boolean | Mark[]",elements:[{name:"boolean"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: number; label?: string }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!1}}]}}],raw:"Mark[]"}]},description:"",defaultValue:{value:"false",computed:!1}},showValue:{required:!1,tsType:{name:"union",raw:"'off' | 'on' | 'auto'",elements:[{name:"literal",value:"'off'"},{name:"literal",value:"'on'"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"'off'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}}},composes:["Omit"]};const he={title:"Components/Slider",component:n,argTypes:{min:{control:"number"},max:{control:"number"},step:{control:"number"},disabled:{control:"boolean"},orientation:{control:"select",options:["horizontal","vertical"]},showValue:{control:"select",options:["off","on","auto"]},marks:{control:"boolean"}}},v={args:{defaultValue:50}},h={render:()=>{const[d,b]=l.useState(30);return e.jsx(n,{value:d,onChange:b})}},g={args:{defaultValue:50,marks:!0,showValue:"on"}},V={args:{defaultValue:50,orientation:"vertical",style:{height:200}}},w={args:{defaultValue:40,disabled:!0}},y={args:{min:0,max:200,step:10,defaultValue:100,showValue:"on"}},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"24px",maxWidth:600},children:[e.jsx("div",{style:{width:"100%"},children:e.jsx(n,{defaultValue:50,showValue:"on"})}),e.jsx("div",{style:{width:"100%"},children:e.jsx(n,{defaultValue:30,marks:!0,showValue:"on"})}),e.jsx("div",{style:{width:"100%"},children:e.jsx(n,{defaultValue:70,disabled:!0})}),e.jsx("div",{style:{height:200},children:e.jsx(n,{defaultValue:50,orientation:"vertical",showValue:"on"})})]})};var E,C,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: 50
  }
}`,...(R=(C=v.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var W,$,A;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(30);
    return <Slider value={value} onChange={setValue} />;
  }
}`,...(A=($=h.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var L,I,K;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    marks: true,
    showValue: 'on'
  }
}`,...(K=(I=g.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var O,X,Y;V.parameters={...V.parameters,docs:{...(O=V.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    orientation: 'vertical',
    style: {
      height: 200
    }
  }
}`,...(Y=(X=V.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var B,U,F;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: 40,
    disabled: true
  }
}`,...(F=(U=w.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var G,H,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 200,
    step: 10,
    defaultValue: 100,
    showValue: 'on'
  }
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var P,Q,Z;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '24px',
    maxWidth: 600
  }}>\r
      <div style={{
      width: '100%'
    }}>\r
        <Slider defaultValue={50} showValue="on" />\r
      </div>\r
      <div style={{
      width: '100%'
    }}>\r
        <Slider defaultValue={30} marks showValue="on" />\r
      </div>\r
      <div style={{
      width: '100%'
    }}>\r
        <Slider defaultValue={70} disabled />\r
      </div>\r
      <div style={{
      height: 200
    }}>\r
        <Slider defaultValue={50} orientation="vertical" showValue="on" />\r
      </div>\r
    </div>
}`,...(Z=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const ge=["Default","Controlled","WithMarks","Vertical","Disabled","CustomRange","KitchenSink"];export{h as Controlled,y as CustomRange,v as Default,w as Disabled,x as KitchenSink,V as Vertical,g as WithMarks,ge as __namedExportsOrder,he as default};
