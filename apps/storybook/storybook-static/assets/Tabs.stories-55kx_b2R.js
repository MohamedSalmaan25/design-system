import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-Dx_1l3Sb.js";import{c as V}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const $=r.createContext(null);function J(){const a=r.useContext($);if(!a)throw new Error("Tab compound components must be used within <Tabs>");return a}const o=r.forwardRef(({value:a,onChange:l,orientation:t="horizontal",variant:c="standard",className:p,children:b,...x},w)=>{const A=r.useRef(null),h=r.useCallback(u=>{var W;const i=u.currentTarget.querySelectorAll(".ms-tab:not(.ms-tab--disabled)"),m=Array.from(i).findIndex(T=>T.dataset.value===String(a));let d=m;if(t==="horizontal"?u.key==="ArrowRight"?d=Math.min(m+1,i.length-1):u.key==="ArrowLeft"&&(d=Math.max(m-1,0)):u.key==="ArrowDown"?d=Math.min(m+1,i.length-1):u.key==="ArrowUp"&&(d=Math.max(m-1,0)),d!==m&&i[d]){u.preventDefault();const T=i[d].dataset.value;T!==void 0&&(l==null||l(/^\d+$/.test(T)?Number(T):T),(W=i[d])==null||W.focus())}},[a,l,t]),v=[],C=[];return r.Children.forEach(b,u=>{if(!u)return;const i=u;i.type===n?v.push(i):i.type===s&&C.push(i)}),e.jsx($.Provider,{value:{value:a,onChange:l,orientation:t,variant:c},children:e.jsxs("div",{ref:w,className:V("ms-tabs",t==="vertical"&&"ms-tabs--vertical",c==="scrollable"&&"ms-tabs--scrollable",c==="fullWidth"&&"ms-tabs--fullWidth",p),...x,children:[e.jsx("div",{ref:A,className:"ms-tabs__tab-list",role:"tablist","aria-orientation":t,onKeyDown:h,children:v}),C.length>0&&e.jsx("div",{className:"ms-tabs__panels",children:C})]})})});o.displayName="Tabs";const n=r.forwardRef(({value:a,label:l,icon:t,disabled:c,className:p,children:b,...x},w)=>{const{value:A,onChange:h}=J(),v=A===a;return e.jsxs("button",{ref:w,role:"tab","data-value":a,"aria-selected":v,disabled:c,className:V("ms-tab",v&&"ms-tab--active",c&&"ms-tab--disabled",p),onClick:()=>h==null?void 0:h(a),...x,children:[t&&e.jsx("span",{className:"ms-tab__icon",children:t}),(l||b)&&e.jsx("span",{className:"ms-tab__label",children:l||b}),v&&e.jsx("span",{className:"ms-tab__indicator"})]})});n.displayName="Tab";const s=r.forwardRef(({value:a,children:l,className:t,...c},p)=>{const{value:b}=J();return b===a?e.jsx("div",{ref:p,role:"tabpanel",className:V("ms-tab-panel",t),...c,children:l}):null});s.displayName="Tab.Panel";o.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'scrollable' | 'fullWidth'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'scrollable'"},{name:"literal",value:"'fullWidth'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};n.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};s.__docgenInfo={description:"",methods:[],displayName:"Tab.Panel",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const te={title:"Components/Tabs",component:o,argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["standard","scrollable","fullWidth"]}}},f={render:()=>{const[a,l]=r.useState(0);return e.jsxs(o,{value:a,onChange:t=>l(t),children:[e.jsx(n,{value:0,label:"Tab One"}),e.jsx(n,{value:1,label:"Tab Two"}),e.jsx(n,{value:2,label:"Tab Three"}),e.jsx(s,{value:0,children:"Content for Tab One"}),e.jsx(s,{value:1,children:"Content for Tab Two"}),e.jsx(s,{value:2,children:"Content for Tab Three"})]})}},j={render:()=>{const[a,l]=r.useState(0);return e.jsxs(o,{value:a,onChange:t=>l(t),children:[e.jsx(n,{value:0,label:"Favorites"}),e.jsx(n,{value:1,label:"Photos"}),e.jsx(n,{value:2,label:"Settings"}),e.jsx(s,{value:0,children:"Favorites content"}),e.jsx(s,{value:1,children:"Photos content"}),e.jsx(s,{value:2,children:"Settings content"})]})}},g={render:()=>{const[a,l]=r.useState("a");return e.jsx("div",{style:{display:"flex",gap:16},children:e.jsxs(o,{value:a,onChange:t=>l(t),orientation:"vertical",children:[e.jsx(n,{value:"a",label:"Section A"}),e.jsx(n,{value:"b",label:"Section B"}),e.jsx(n,{value:"c",label:"Section C"}),e.jsxs("div",{style:{padding:"var(--space-4)"},children:[e.jsx(s,{value:"a",children:"Section A content"}),e.jsx(s,{value:"b",children:"Section B content"}),e.jsx(s,{value:"c",children:"Section C content"})]})]})})}},S={render:()=>{const[a,l]=r.useState(0);return e.jsxs(o,{value:a,onChange:t=>l(t),variant:"fullWidth",children:[e.jsx(n,{value:0,label:"One"}),e.jsx(n,{value:1,label:"Two"}),e.jsx(n,{value:2,label:"Three"}),e.jsx(s,{value:0,children:"One"}),e.jsx(s,{value:1,children:"Two"}),e.jsx(s,{value:2,children:"Three"})]})}},y={render:()=>{const[a,l]=r.useState(0);return e.jsxs(o,{value:a,onChange:t=>l(t),children:[e.jsx(n,{value:0,label:"Active"}),e.jsx(n,{value:1,label:"Disabled",disabled:!0}),e.jsx(n,{value:2,label:"Available"}),e.jsx(s,{value:0,children:"Active tab content"}),e.jsx(s,{value:2,children:"Available tab content"})]})}},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"24px"},children:[e.jsx(Q,{}),e.jsx(X,{}),e.jsx(Y,{})]})};function Q(){const[a,l]=r.useState(0);return e.jsxs(o,{value:a,onChange:t=>l(t),children:[e.jsx(n,{value:0,label:"One"}),e.jsx(n,{value:1,label:"Two"}),e.jsx(n,{value:2,label:"Three"}),e.jsx(s,{value:0,children:"One"}),e.jsx(s,{value:1,children:"Two"}),e.jsx(s,{value:2,children:"Three"})]})}function X(){const[a,l]=r.useState("a");return e.jsxs(o,{value:a,onChange:t=>l(t),orientation:"vertical",children:[e.jsx(n,{value:"a",label:"Alpha"}),e.jsx(n,{value:"b",label:"Beta"}),e.jsx(n,{value:"c",label:"Gamma"}),e.jsx(s,{value:"a",children:"Alpha content"}),e.jsx(s,{value:"b",children:"Beta content"}),e.jsx(s,{value:"c",children:"Gamma content"})]})}function Y(){const[a,l]=r.useState(0);return e.jsxs(o,{value:a,onChange:t=>l(t),variant:"fullWidth",children:[e.jsx(n,{value:0,label:"A"}),e.jsx(n,{value:1,label:"B"}),e.jsx(n,{value:2,label:"C"}),e.jsx(s,{value:0,children:"A"}),e.jsx(s,{value:1,children:"B"}),e.jsx(s,{value:2,children:"C"})]})}var N,_,q;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    return <Tabs value={value} onChange={v => setValue(v)}>\r
        <Tab value={0} label="Tab One" />\r
        <Tab value={1} label="Tab Two" />\r
        <Tab value={2} label="Tab Three" />\r
        <TabPanel value={0}>Content for Tab One</TabPanel>\r
        <TabPanel value={1}>Content for Tab Two</TabPanel>\r
        <TabPanel value={2}>Content for Tab Three</TabPanel>\r
      </Tabs>;
  }
}`,...(q=(_=f.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var D,O,R;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    return <Tabs value={value} onChange={v => setValue(v)}>\r
        <Tab value={0} label="Favorites" />\r
        <Tab value={1} label="Photos" />\r
        <Tab value={2} label="Settings" />\r
        <TabPanel value={0}>Favorites content</TabPanel>\r
        <TabPanel value={1}>Photos content</TabPanel>\r
        <TabPanel value={2}>Settings content</TabPanel>\r
      </Tabs>;
  }
}`,...(R=(O=j.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var k,B,F;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('a');
    return <div style={{
      display: 'flex',
      gap: 16
    }}>\r
        <Tabs value={value} onChange={v => setValue(v)} orientation="vertical">\r
          <Tab value="a" label="Section A" />\r
          <Tab value="b" label="Section B" />\r
          <Tab value="c" label="Section C" />\r
          <div style={{
          padding: 'var(--space-4)'
        }}>\r
            <TabPanel value="a">Section A content</TabPanel>\r
            <TabPanel value="b">Section B content</TabPanel>\r
            <TabPanel value="c">Section C content</TabPanel>\r
          </div>\r
        </Tabs>\r
      </div>;
  }
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var I,z,M;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    return <Tabs value={value} onChange={v => setValue(v)} variant="fullWidth">\r
        <Tab value={0} label="One" />\r
        <Tab value={1} label="Two" />\r
        <Tab value={2} label="Three" />\r
        <TabPanel value={0}>One</TabPanel>\r
        <TabPanel value={1}>Two</TabPanel>\r
        <TabPanel value={2}>Three</TabPanel>\r
      </Tabs>;
  }
}`,...(M=(z=S.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var E,L,K;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    return <Tabs value={value} onChange={v => setValue(v)}>\r
        <Tab value={0} label="Active" />\r
        <Tab value={1} label="Disabled" disabled />\r
        <Tab value={2} label="Available" />\r
        <TabPanel value={0}>Active tab content</TabPanel>\r
        <TabPanel value={2}>Available tab content</TabPanel>\r
      </Tabs>;
  }
}`,...(K=(L=y.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var G,H,U;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '24px'
  }}>\r
      <TabsWithState />\r
      <VerticalTabsWithState />\r
      <FullWidthTabsWithState />\r
    </div>
}`,...(U=(H=P.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const se=["Default","WithIcons","Vertical","FullWidth","DisabledTab","KitchenSink"];export{f as Default,y as DisabledTab,S as FullWidth,P as KitchenSink,g as Vertical,j as WithIcons,se as __namedExportsOrder,te as default};
