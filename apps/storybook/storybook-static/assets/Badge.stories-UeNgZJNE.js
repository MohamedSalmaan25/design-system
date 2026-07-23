import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as W}from"./index-Dx_1l3Sb.js";import{c as $}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=W.forwardRef(({badgeContent:a,variant:l="standard",color:S="primary",overlap:T="rectangular",invisible:k=!1,max:c=99,children:A,className:V,...q},_)=>{const M=l==="dot"?null:typeof a=="number"&&a>c?`${c}+`:a,O=k||a===void 0&&l!=="dot";return e.jsxs("span",{ref:_,className:$("ms-badge",`ms-badge--${l}`,`ms-badge--${S}`,`ms-badge--${T}`,O&&"ms-badge--invisible",V),...q,children:[A,e.jsx("span",{className:"ms-badge__content",role:"status",children:M})]})});r.displayName="Badge";r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{badgeContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'dot' | 'standard'",elements:[{name:"literal",value:"'dot'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'danger' | 'success' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},overlap:{required:!1,tsType:{name:"union",raw:"'rectangular' | 'circular'",elements:[{name:"literal",value:"'rectangular'"},{name:"literal",value:"'circular'"}]},description:"",defaultValue:{value:"'rectangular'",computed:!1}},invisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}}},composes:["HTMLAttributes"]};const F={title:"Components/Badge",component:r,argTypes:{badgeContent:{control:"text"},variant:{control:"select",options:["standard","dot"]},color:{control:"select",options:["default","primary","danger","success","warning"]},overlap:{control:"select",options:["rectangular","circular"]},invisible:{control:"boolean"},max:{control:"number"}}},n={args:{badgeContent:4,children:e.jsx("span",{style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:4},children:"Inbox"})}},d={args:{variant:"dot",children:e.jsx("span",{style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:4},children:"Notifications"})}},s={render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"24px"},children:["default","primary","danger","success","warning"].map(a=>e.jsx(r,{badgeContent:3,color:a,children:e.jsx("span",{style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:4},children:a})},a))})},t={args:{badgeContent:150,max:99,children:e.jsx("span",{style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:4},children:"Messages"})}},o={args:{badgeContent:7,overlap:"circular",children:e.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:"#e0e0e0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:"bold"},children:"A"})}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{badgeContent:3,color:"primary",children:e.jsx("span",{style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:4},children:"Primary"})}),e.jsx(r,{badgeContent:99,color:"danger",children:e.jsx("span",{style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:4},children:"99+"})}),e.jsx(r,{variant:"dot",color:"danger",children:e.jsx("span",{style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:4},children:"Dot"})}),e.jsx(r,{badgeContent:"!",color:"warning",children:e.jsx("span",{style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:4},children:"Custom"})})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{badgeContent:5,overlap:"circular",children:e.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:"#e0e0e0",display:"flex",alignItems:"center",justifyContent:"center"},children:"A"})}),e.jsx(r,{badgeContent:12,overlap:"rectangular",children:e.jsx("div",{style:{width:48,height:48,background:"#e0e0e0",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4},children:"B"})})]})]})};var p,g,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    badgeContent: 4,
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #ccc',
      borderRadius: 4
    }}>Inbox</span>
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,m,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #ccc',
      borderRadius: 4
    }}>Notifications</span>
  }
}`,...(b=(m=d.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,f,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      {(['default', 'primary', 'danger', 'success', 'warning'] as const).map(color => <Badge key={color} badgeContent={3} color={color}>\r
          <span style={{
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: 4
      }}>{color}</span>\r
        </Badge>)}\r
    </div>
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,j,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    badgeContent: 150,
    max: 99,
    children: <span style={{
      padding: '8px 16px',
      border: '1px solid #ccc',
      borderRadius: 4
    }}>Messages</span>
  }
}`,...(C=(j=t.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var R,w,B;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    badgeContent: 7,
    overlap: 'circular',
    children: <div style={{
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: '#e0e0e0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    }}>\r
    A\r
  </div>
  }
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var I,D,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>\r
        <Badge badgeContent={3} color="primary"><span style={{
          padding: '8px 16px',
          border: '1px solid #ccc',
          borderRadius: 4
        }}>Primary</span></Badge>\r
        <Badge badgeContent={99} color="danger"><span style={{
          padding: '8px 16px',
          border: '1px solid #ccc',
          borderRadius: 4
        }}>99+</span></Badge>\r
        <Badge variant="dot" color="danger"><span style={{
          padding: '8px 16px',
          border: '1px solid #ccc',
          borderRadius: 4
        }}>Dot</span></Badge>\r
        <Badge badgeContent="!" color="warning"><span style={{
          padding: '8px 16px',
          border: '1px solid #ccc',
          borderRadius: 4
        }}>Custom</span></Badge>\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>\r
        <Badge badgeContent={5} overlap="circular">\r
          <div style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: '#e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>A</div>\r
        </Badge>\r
        <Badge badgeContent={12} overlap="rectangular">\r
          <div style={{
          width: 48,
          height: 48,
          background: '#e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4
        }}>B</div>\r
        </Badge>\r
      </div>\r
    </div>
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const G=["Default","Dot","Colors","MaxOverflow","CircularOverlap","AllVariants"];export{i as AllVariants,o as CircularOverlap,s as Colors,n as Default,d as Dot,t as MaxOverflow,G as __namedExportsOrder,F as default};
