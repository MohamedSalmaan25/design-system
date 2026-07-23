import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as I}from"./index-Dx_1l3Sb.js";import{c as p}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const M=e.jsx("span",{className:"ms-stepper__connector-line"}),t=I.forwardRef(({activeStep:v,steps:u,orientation:S="horizontal",alternativeLabel:b,connector:_=M,className:E,...K},k)=>e.jsx("div",{ref:k,className:p("ms-stepper",`ms-stepper--${S}`,b&&"ms-stepper--alternative-label",E),...K,children:u.map((r,a)=>{const d=a<v,P=a===v,H=a===u.length-1;return e.jsxs("div",{className:p("ms-stepper__step-wrapper",S==="horizontal"&&!b&&"ms-stepper__step-wrapper--fill"),children:[e.jsxs("div",{className:p("ms-stepper__step",P&&"ms-stepper__step--active",d&&"ms-stepper__step--completed"),children:[e.jsx("div",{className:"ms-stepper__step-icon",children:r.icon??(d?"OK":a+1)}),e.jsxs("div",{className:"ms-stepper__step-label",children:[r.label,r.optionalText&&e.jsx("span",{className:"ms-stepper__step-optional",children:r.optionalText})]})]}),!H&&_&&e.jsx("div",{className:p("ms-stepper__connector",d&&"ms-stepper__connector--active"),children:_})]},a)})}));t.displayName="Stepper";t.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStep:{required:!0,tsType:{name:"number"},description:""},steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepData"}],raw:"StepData[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},alternativeLabel:{required:!1,tsType:{name:"boolean"},description:""},connector:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'<span className="ms-stepper__connector-line" />',computed:!1}}},composes:["HTMLAttributes"]};const Q={title:"Components/Stepper",component:t,argTypes:{activeStep:{control:"number"},orientation:{control:"select",options:["horizontal","vertical"]},alternativeLabel:{control:"boolean"}}},s=[{label:"Select plan"},{label:"Payment"},{label:"Confirmation"}],V=[{label:"Shipping address",optionalText:"Optional"},{label:"Payment details"},{label:"Review order"}],o={args:{activeStep:1,steps:s}},i={args:{activeStep:3,steps:s}},n={args:{activeStep:0,steps:s,orientation:"vertical"}},c={args:{activeStep:1,steps:s,alternativeLabel:!0}},l={args:{activeStep:1,steps:V}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"24px"},children:[e.jsx(t,{activeStep:1,steps:s}),e.jsx(t,{activeStep:0,steps:s,alternativeLabel:!0}),e.jsx(t,{activeStep:2,steps:s,orientation:"vertical"}),e.jsx(t,{activeStep:1,steps:V})]})};var x,g,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    activeStep: 1,
    steps: basicSteps
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,j,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    activeStep: 3,
    steps: basicSteps
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var N,T,L;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activeStep: 0,
    steps: basicSteps,
    orientation: 'vertical'
  }
}`,...(L=(T=n.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var O,w,z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    activeStep: 1,
    steps: basicSteps,
    alternativeLabel: true
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var C,D,q;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    activeStep: 1,
    steps: stepsWithOptional
  }
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var A,W,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '24px'
  }}>\r
      <Stepper activeStep={1} steps={basicSteps} />\r
      <Stepper activeStep={0} steps={basicSteps} alternativeLabel />\r
      <Stepper activeStep={2} steps={basicSteps} orientation="vertical" />\r
      <Stepper activeStep={1} steps={stepsWithOptional} />\r
    </div>
}`,...(R=(W=m.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const U=["Default","Completed","Vertical","AlternativeLabel","WithOptionalText","KitchenSink"];export{c as AlternativeLabel,i as Completed,o as Default,m as KitchenSink,n as Vertical,l as WithOptionalText,U as __namedExportsOrder,Q as default};
