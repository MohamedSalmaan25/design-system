import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-Dx_1l3Sb.js";import{c as z}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ie=e.jsx("span",{children:"☆"}),de=e.jsx("span",{children:"★"}),s=n.forwardRef(({value:u,defaultValue:o=0,onChange:r,readOnly:t=!1,disabled:l=!1,size:X="md",max:Y=5,precision:j=1,emptyIcon:h=ie,filledIcon:_=de,className:Z,...ee},ae)=>{const y=u!==void 0,[se,re]=n.useState(o),[R,b]=n.useState(null),S=y?u:se,d=R??S,te=n.useCallback(a=>{t||l||(y||re(a),r==null||r(a))},[t,l,y,r]),le=n.useCallback(a=>{t||l||b(a)},[t,l]),ne=n.useCallback(()=>{t||l||b(null)},[t,l]),ue=Array.from({length:Y},(a,i)=>i+1);return e.jsx("div",{ref:ae,role:"radiogroup",className:z("ms-rating",`ms-rating--${X}`,t&&"ms-rating--readOnly",l&&"ms-rating--disabled",Z),...ee,children:ue.map(a=>{const i=j===1?d>=a:d>=a-.5,oe=j===.5&&d>=a-.5&&d<a;return e.jsx("span",{role:"radio","aria-checked":S>=a,"aria-label":`${a} star${a>1?"s":""}`,className:z("ms-rating__icon",i&&"ms-rating__icon--filled",!i&&"ms-rating__icon--empty",R!==null&&a<=R&&"ms-rating__icon--hover"),onClick:()=>te(a),onMouseEnter:()=>le(a),onMouseLeave:ne,style:{cursor:t||l?"default":"pointer"},children:oe?e.jsxs("span",{className:"ms-rating__half",children:[e.jsx("span",{className:"ms-rating__half-empty",children:h}),e.jsx("span",{className:"ms-rating__half-filled",children:_})]}):i?_:h},a)})})});s.displayName="Rating";s.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},precision:{required:!1,tsType:{name:"union",raw:"0.5 | 1",elements:[{name:"literal",value:"0.5"},{name:"literal",value:"1"}]},description:"",defaultValue:{value:"1",computed:!1}},emptyIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<span>&#9734;</span>",computed:!1}},filledIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<span>&#9733;</span>",computed:!1}}},composes:["Omit"]};const ve={title:"Components/Rating",component:s,argTypes:{value:{control:"number"},defaultValue:{control:"number"},max:{control:"number"},precision:{control:"select",options:[.5,1]},size:{control:"select",options:["sm","md","lg"]},readOnly:{control:"boolean"},disabled:{control:"boolean"}}},c={args:{defaultValue:3}},m={render:()=>{const[u,o]=n.useState(3);return e.jsx(s,{value:u,onChange:r=>o(r)})}},p={args:{value:4,readOnly:!0}},f={args:{defaultValue:2,disabled:!0}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center",padding:"24px"},children:[e.jsx(s,{defaultValue:3,size:"sm"}),e.jsx(s,{defaultValue:3,size:"md"}),e.jsx(s,{defaultValue:3,size:"lg"})]})},v={render:()=>{const[u,o]=n.useState(3.5);return e.jsx(s,{value:u,onChange:r=>o(r),precision:.5})}},x={args:{defaultValue:7,max:10}},V={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsx(s,{defaultValue:3}),e.jsx(s,{value:4,readOnly:!0}),e.jsx(s,{defaultValue:2,disabled:!0}),e.jsx(s,{defaultValue:3,size:"sm"}),e.jsx(s,{defaultValue:3,size:"lg"}),e.jsx(s,{defaultValue:3.5,precision:.5}),e.jsx(s,{defaultValue:8,max:10})]})};var C,N,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var q,k,D;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(3);
    return <Rating value={value} onChange={v => setValue(v)} />;
  }
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var E,M,w;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true
  }
}`,...(w=(M=p.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var H,I,O;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultValue: 2,
    disabled: true
  }
}`,...(O=(I=f.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var $,F,K;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    padding: '24px'
  }}>\r
      <Rating defaultValue={3} size="sm" />\r
      <Rating defaultValue={3} size="md" />\r
      <Rating defaultValue={3} size="lg" />\r
    </div>
}`,...(K=(F=g.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var L,P,A;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(3.5);
    return <Rating value={value} onChange={v => setValue(v)} precision={0.5} />;
  }
}`,...(A=(P=v.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var B,G,J;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: 7,
    max: 10
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,W;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>\r
      <Rating defaultValue={3} />\r
      <Rating value={4} readOnly />\r
      <Rating defaultValue={2} disabled />\r
      <Rating defaultValue={3} size="sm" />\r
      <Rating defaultValue={3} size="lg" />\r
      <Rating defaultValue={3.5} precision={0.5} />\r
      <Rating defaultValue={8} max={10} />\r
    </div>
}`,...(W=(U=V.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const xe=["Default","Controlled","ReadOnly","Disabled","Sizes","HalfPrecision","CustomMax","KitchenSink"];export{m as Controlled,x as CustomMax,c as Default,f as Disabled,v as HalfPrecision,V as KitchenSink,p as ReadOnly,g as Sizes,xe as __namedExportsOrder,ve as default};
