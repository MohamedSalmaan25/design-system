import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as t}from"./index-Dx_1l3Sb.js";import{c as De}from"./cn-2dOUpm6k.js";/* empty css                  */import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const r=t.forwardRef((o,S)=>{const{label:s,helperText:T,error:ge=!1,fullWidth:he=!1,size:fe="md",variant:ve="outlined",startAdornment:j,endAdornment:_,multiline:w=!1,className:Fe,...a}=o,Se=t.useId(),W=a.id||`ms-textfield-${Se}`,[C,D]=t.useState(!1),[Te,je]=t.useState(a.value!==void 0&&a.value!==""||a.defaultValue!==void 0&&a.defaultValue!==""),y=C||Te,_e=t.useCallback(n=>{var l;D(!0),(l=a.onFocus)==null||l.call(a,n)},[a]),we=t.useCallback(n=>{var l;D(!1),(l=a.onBlur)==null||l.call(a,n)},[a]),We=t.useCallback(n=>{var l;je(n.target.value!==""),(l=a.onChange)==null||l.call(a,n)},[a]),Ce=De("ms-textfield",`ms-textfield--${ve}`,`ms-textfield--${fe}`,he&&"ms-textfield--fullWidth",ge&&"ms-textfield--error",C&&"ms-textfield--focused",s&&y&&"ms-textfield--floating",w&&"ms-textfield--multiline",Fe),N={id:W,className:"ms-textfield__input",onFocus:_e,onBlur:we,onChange:We,placeholder:s&&!y?"":a.placeholder,ref:S,...a};return e.jsxs("div",{className:Ce,children:[j&&e.jsx("span",{className:"ms-textfield__adornment ms-textfield__adornment--start",children:j}),e.jsxs("div",{className:"ms-textfield__wrapper",children:[w?e.jsx("textarea",{...N,rows:o.rows||4}):e.jsx("input",{...N}),s&&e.jsx("label",{htmlFor:W,className:"ms-textfield__label",children:s})]}),_&&e.jsx("span",{className:"ms-textfield__adornment ms-textfield__adornment--end",children:_}),T&&e.jsx("p",{className:"ms-textfield__helper",children:T})]})});r.displayName="TextField";r.__docgenInfo={description:"",methods:[],displayName:"TextField"};const Pe={title:"Components/TextField",component:r,argTypes:{label:{control:"text"},helperText:{control:"text"},placeholder:{control:"text"},error:{control:"boolean"},fullWidth:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["outlined","filled","standard"]},disabled:{control:"boolean"},multiline:{control:"boolean"},rows:{control:"number"}}},d={args:{label:"Username",placeholder:""}},i={render:()=>{const[o,S]=t.useState("");return e.jsx(r,{label:"Controlled",value:o,onChange:s=>S(s.target.value)})}},c={args:{label:"Password",helperText:"Must be at least 8 characters",type:"password"}},m={args:{label:"Email",error:!0,helperText:"Please enter a valid email",value:"invalid"}},u={args:{label:"Filled variant",variant:"filled"}},p={args:{label:"Standard variant",variant:"standard"}},x={args:{label:"Message",multiline:!0,rows:4}},b={args:{label:"Price",startAdornment:e.jsx("span",{children:"$"}),endAdornment:e.jsx("span",{children:".00"})}},g={args:{label:"Small input",size:"sm"}},h={args:{label:"Large input",size:"lg"}},f={args:{label:"Disabled",value:"Cannot edit",disabled:!0}},v={args:{label:"Full width",fullWidth:!0}},F={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:400},children:[e.jsx(r,{label:"Outlined",placeholder:"Outlined variant"}),e.jsx(r,{label:"Filled",variant:"filled",placeholder:"Filled variant"}),e.jsx(r,{label:"Standard",variant:"standard",placeholder:"Standard variant"}),e.jsx(r,{label:"Error state",error:!0,helperText:"Something is wrong"}),e.jsx(r,{label:"Small",size:"sm"}),e.jsx(r,{label:"Large",size:"lg"}),e.jsx(r,{label:"Multiline",multiline:!0,rows:3}),e.jsx(r,{label:"Disabled",disabled:!0,value:"Disabled content"}),e.jsx(r,{label:"With icon",startAdornment:e.jsx("span",{style:{fontWeight:"bold"},children:"@"})}),e.jsx(r,{label:"Full width",fullWidth:!0})]})};var z,A,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: ""
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,P,L;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <TextField label="Controlled" value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var k,I,O;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    helperText: 'Must be at least 8 characters',
    type: 'password'
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var V,$,B;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    error: true,
    helperText: 'Please enter a valid email',
    value: 'invalid'
  }
}`,...(B=($=m.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var H,K,R;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Filled variant',
    variant: 'filled'
  }
}`,...(R=(K=u.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,q,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Standard variant',
    variant: 'standard'
  }
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,X;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    multiline: true,
    rows: 4
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    startAdornment: <span>$</span>,
    endAdornment: <span>.00</span>
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,le;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Small input',
    size: 'sm'
  }
}`,...(le=(re=g.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,se,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Large input',
    size: 'lg'
  }
}`,...(ne=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,de,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    value: 'Cannot edit',
    disabled: true
  }
}`,...(ie=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ce,me,ue;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Full width',
    fullWidth: true
  }
}`,...(ue=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,xe,be;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: 400
  }}>\r
      <TextField label="Outlined" placeholder="Outlined variant" />\r
      <TextField label="Filled" variant="filled" placeholder="Filled variant" />\r
      <TextField label="Standard" variant="standard" placeholder="Standard variant" />\r
      <TextField label="Error state" error helperText="Something is wrong" />\r
      <TextField label="Small" size="sm" />\r
      <TextField label="Large" size="lg" />\r
      <TextField label="Multiline" multiline rows={3} />\r
      <TextField label="Disabled" disabled value="Disabled content" />\r
      <TextField label="With icon" startAdornment={<span style={{
      fontWeight: 'bold'
    }}>@</span>} />\r
      <TextField label="Full width" fullWidth />\r
    </div>
}`,...(be=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};const Le=["Default","Controlled","WithHelperText","Error","Filled","Standard","Multiline","WithAdornments","Small","Large","Disabled","FullWidth","KitchenSink"];export{i as Controlled,d as Default,f as Disabled,m as Error,u as Filled,v as FullWidth,F as KitchenSink,h as Large,x as Multiline,g as Small,p as Standard,b as WithAdornments,c as WithHelperText,Le as __namedExportsOrder,Pe as default};
