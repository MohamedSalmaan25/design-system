import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-Dx_1l3Sb.js";import{c as x}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const c=n.forwardRef(({left:i,right:a,onChange:t,leftTitle:E="Options",rightTitle:V="Selected",disabled:l=!1,className:z,...F},K)=>{const[u,g]=n.useState(new Set),[m,T]=n.useState(new Set),S=(s,r)=>{const d=new Set(s);return d.has(r)?d.delete(r):d.add(r),d},U=n.useCallback(()=>{if(l)return;const s=i.filter(r=>u.has(r.value));i.filter(r=>!u.has(r.value)),t==null||t([...a,...s]),g(new Set)},[i,a,u,t,l]),W=n.useCallback(()=>{if(l)return;a.filter(r=>m.has(r.value));const s=a.filter(r=>!m.has(r.value));t==null||t(s),T(new Set)},[a,m,t,l]),C=n.useCallback(()=>{l||(t==null||t([...a,...i]),g(new Set))},[i,a,t,l]),G=n.useCallback(()=>{l||(t==null||t([]),T(new Set))},[t,l]);return e.jsxs("div",{ref:K,className:x("ms-transfer-list",l&&"ms-transfer-list--disabled",z),...F,children:[e.jsxs("div",{className:"ms-transfer-list__panel",children:[e.jsx("div",{className:"ms-transfer-list__header",children:E}),e.jsx("div",{className:"ms-transfer-list__items",children:i.map(s=>e.jsx("div",{className:x("ms-transfer-list__item",u.has(s.value)&&"ms-transfer-list__item--selected"),onClick:()=>!l&&g(r=>S(r,s.value)),children:s.label},s.value))})]}),e.jsxs("div",{className:"ms-transfer-list__buttons",children:[e.jsx("button",{type:"button",onClick:C,disabled:l||i.length===0,title:"Move all right",children:">>"}),e.jsx("button",{type:"button",onClick:U,disabled:l||u.size===0,title:"Move selected right",children:">"}),e.jsx("button",{type:"button",onClick:W,disabled:l||m.size===0,title:"Move selected left",children:"<"}),e.jsx("button",{type:"button",onClick:G,disabled:l||a.length===0,title:"Move all left",children:"<<"})]}),e.jsxs("div",{className:"ms-transfer-list__panel",children:[e.jsx("div",{className:"ms-transfer-list__header",children:V}),e.jsx("div",{className:"ms-transfer-list__items",children:a.map(s=>e.jsx("div",{className:x("ms-transfer-list__item",m.has(s.value)&&"ms-transfer-list__item--selected"),onClick:()=>!l&&T(r=>S(r,s.value)),children:s.label},s.value))})]})]})});c.displayName="TransferList";c.__docgenInfo={description:"",methods:[],displayName:"TransferList",props:{left:{required:!0,tsType:{name:"Array",elements:[{name:"TransferItem"}],raw:"TransferItem[]"},description:""},right:{required:!0,tsType:{name:"Array",elements:[{name:"TransferItem"}],raw:"TransferItem[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(right: TransferItem[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"TransferItem"}],raw:"TransferItem[]"},name:"right"}],return:{name:"void"}}},description:""},leftTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Options'",computed:!1}},rightTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Selected'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Y={title:"Components/TransferList",component:c,argTypes:{leftTitle:{control:"text"},rightTitle:{control:"text"},disabled:{control:"boolean"}}},o=[{value:"1",label:"Item 1"},{value:"2",label:"Item 2"},{value:"3",label:"Item 3"},{value:"4",label:"Item 4"},{value:"5",label:"Item 5"}],f={args:{left:o,right:[]}},p={render:()=>{const[i,a]=n.useState([{value:"2",label:"Item 2"},{value:"4",label:"Item 4"}]);return e.jsx(c,{left:o,right:i,onChange:a})}},v={args:{left:o,right:[],leftTitle:"Available",rightTitle:"Selected"}},h={args:{left:o.slice(0,3),right:[{value:"4",label:"Item 4"}],disabled:!0}},b={render:()=>{const[i,a]=n.useState([{value:"2",label:"Item B"},{value:"4",label:"Item D"}]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx(c,{left:o,right:[],leftTitle:"Options",rightTitle:"Selected"}),e.jsx(c,{left:[{value:"a",label:"Apple"},{value:"b",label:"Banana"},{value:"c",label:"Cherry"}],right:i,onChange:a,leftTitle:"Fruits",rightTitle:"Chosen"}),e.jsx(c,{left:o.slice(0,3),right:[{value:"x",label:"Locked"}],disabled:!0,leftTitle:"Disabled",rightTitle:"Unavailable"})]})}};var _,I,y;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    left: defaultLeft,
    right: []
  }
}`,...(y=(I=f.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var j,L,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [right, setRight] = useState([{
      value: '2',
      label: 'Item 2'
    }, {
      value: '4',
      label: 'Item 4'
    }]);
    return <TransferList left={defaultLeft} right={right} onChange={setRight} />;
  }
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,N,R;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    left: defaultLeft,
    right: [],
    leftTitle: 'Available',
    rightTitle: 'Selected'
  }
}`,...(R=(N=v.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var D,A,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    left: defaultLeft.slice(0, 3),
    right: [{
      value: '4',
      label: 'Item 4'
    }],
    disabled: true
  }
}`,...(q=(A=h.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var O,B,M;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [right, setRight] = useState([{
      value: '2',
      label: 'Item B'
    }, {
      value: '4',
      label: 'Item D'
    }]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '24px'
    }}>\r
        <TransferList left={defaultLeft} right={[]} leftTitle="Options" rightTitle="Selected" />\r
        <TransferList left={[{
        value: 'a',
        label: 'Apple'
      }, {
        value: 'b',
        label: 'Banana'
      }, {
        value: 'c',
        label: 'Cherry'
      }]} right={right} onChange={setRight} leftTitle="Fruits" rightTitle="Chosen" />\r
        <TransferList left={defaultLeft.slice(0, 3)} right={[{
        value: 'x',
        label: 'Locked'
      }]} disabled leftTitle="Disabled" rightTitle="Unavailable" />\r
      </div>;
  }
}`,...(M=(B=b.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const Z=["Default","Controlled","WithCustomTitles","Disabled","KitchenSink"];export{p as Controlled,f as Default,h as Disabled,b as KitchenSink,v as WithCustomTitles,Z as __namedExportsOrder,Y as default};
