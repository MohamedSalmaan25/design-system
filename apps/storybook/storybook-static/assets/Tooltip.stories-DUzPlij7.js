import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-Dx_1l3Sb.js";import{c as F}from"./cn-2dOUpm6k.js";import{B as a}from"./Button-C6PCuTDE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const G={top:"top",bottom:"bottom",left:"left",right:"right","top-start":"top","top-end":"top","bottom-start":"bottom","bottom-end":"bottom","left-start":"left","left-end":"left","right-start":"right","right-end":"right"},i=n.forwardRef(({title:H,children:B,placement:f="top",arrow:I=!0,open:v,delay:j=300},K)=>{const[O,y]=n.useState(!1),p=v!==void 0,g=p?v:O,x=n.useRef(null),w=n.useRef(null),s=n.useRef(null),P=n.useCallback(()=>{s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{p||y(!0)},j)},[j,p]),z=n.useCallback(()=>{s.current&&(clearTimeout(s.current),s.current=null),p||y(!1)},[p]);return n.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),n.useEffect(()=>{if(!g||!x.current||!w.current)return;const b=x.current,T=w.current,e=b.getBoundingClientRect(),r=T.getBoundingClientRect();let o=0,l=0;switch(f){case"top":o=-r.height-8,l=(e.width-r.width)/2;break;case"bottom":o=e.height+8,l=(e.width-r.width)/2;break;case"left":o=(e.height-r.height)/2,l=-r.width-8;break;case"right":o=(e.height-r.height)/2,l=e.width+8;break;case"top-start":o=-r.height-8,l=0;break;case"top-end":o=-r.height-8,l=e.width-r.width;break;case"bottom-start":o=e.height+8,l=0;break;case"bottom-end":o=e.height+8,l=e.width-r.width;break;case"left-start":o=0,l=-r.width-8;break;case"left-end":o=e.height-r.height,l=-r.width-8;break;case"right-start":o=0,l=e.width+8;break;case"right-end":o=e.height-r.height,l=e.width+8;break}T.style.top=`${o}px`,T.style.left=`${l}px`},[g,f,B]),t.jsxs("div",{ref:K,className:"ms-tooltip",onMouseEnter:P,onMouseLeave:z,style:{position:"relative",display:"inline-flex"},children:[t.jsx("span",{ref:x,style:{display:"inline-flex"},children:B}),t.jsxs("div",{ref:b=>{w.current=b},role:"tooltip",className:F("ms-tooltip__content",`ms-tooltip--${G[f]}`,g&&"ms-tooltip--visible"),children:[H,I&&t.jsx("span",{className:"ms-tooltip__arrow"})]})]})});i.displayName="Tooltip";i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}}}};const tt={title:"Components/Tooltip",component:i,argTypes:{title:{control:"text"},placement:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"]},arrow:{control:"boolean"},delay:{control:"number"}}},c={args:{title:"Tooltip text",children:t.jsx(a,{children:"Hover me"})}},d={args:{title:"No arrow tooltip",arrow:!1,children:t.jsx(a,{children:"No arrow"})}},m={render:()=>t.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"60px"},children:[t.jsx(i,{title:"Top",placement:"top",children:t.jsx(a,{children:"Top"})}),t.jsx(i,{title:"Bottom",placement:"bottom",children:t.jsx(a,{children:"Bottom"})}),t.jsx(i,{title:"Left",placement:"left",children:t.jsx(a,{children:"Left"})}),t.jsx(i,{title:"Right",placement:"right",children:t.jsx(a,{children:"Right"})})]})},u={args:{title:"Appears after 1s",delay:1e3,children:t.jsx(a,{children:"Slow tooltip"})}},h={render:()=>t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"80px"},children:[t.jsx(i,{title:"Top",placement:"top",arrow:!0,children:t.jsx(a,{children:"Top"})}),t.jsx(i,{title:"Bottom",placement:"bottom",arrow:!0,children:t.jsx(a,{children:"Bottom"})}),t.jsx(i,{title:"Left",placement:"left",arrow:!0,children:t.jsx(a,{children:"Left"})}),t.jsx(i,{title:"Right",placement:"right",arrow:!0,children:t.jsx(a,{children:"Right"})}),t.jsx(i,{title:"No arrow",placement:"top",arrow:!1,children:t.jsx(a,{children:"No Arrow"})})]})};var R,k,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip text',
    children: <Button>Hover me</Button>
  }
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var S,L,_;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'No arrow tooltip',
    arrow: false,
    children: <Button>No arrow</Button>
  }
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var E,q,A;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '60px'
  }}>\r
      <Tooltip title="Top" placement="top">\r
        <Button>Top</Button>\r
      </Tooltip>\r
      <Tooltip title="Bottom" placement="bottom">\r
        <Button>Bottom</Button>\r
      </Tooltip>\r
      <Tooltip title="Left" placement="left">\r
        <Button>Left</Button>\r
      </Tooltip>\r
      <Tooltip title="Right" placement="right">\r
        <Button>Right</Button>\r
      </Tooltip>\r
    </div>
}`,...(A=(q=m.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var C,D,W;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Appears after 1s',
    delay: 1000,
    children: <Button>Slow tooltip</Button>
  }
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var M,V,$;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '80px'
  }}>\r
      <Tooltip title="Top" placement="top" arrow>\r
        <Button>Top</Button>\r
      </Tooltip>\r
      <Tooltip title="Bottom" placement="bottom" arrow>\r
        <Button>Bottom</Button>\r
      </Tooltip>\r
      <Tooltip title="Left" placement="left" arrow>\r
        <Button>Left</Button>\r
      </Tooltip>\r
      <Tooltip title="Right" placement="right" arrow>\r
        <Button>Right</Button>\r
      </Tooltip>\r
      <Tooltip title="No arrow" placement="top" arrow={false}>\r
        <Button>No Arrow</Button>\r
      </Tooltip>\r
    </div>
}`,...($=(V=h.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const et=["Default","Arrowless","Placements","Delay","KitchenSink"];export{d as Arrowless,c as Default,u as Delay,h as KitchenSink,m as Placements,et as __namedExportsOrder,tt as default};
