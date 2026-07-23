import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{B as e}from"./Button-C6PCuTDE.js";import{r as s}from"./index-Dx_1l3Sb.js";import{c as x}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const t=s.forwardRef(({variant:n="solid",color:h="primary",size:B="md",orientation:q="horizontal",disabled:m=!1,className:F,children:L,...$},k)=>{const P=s.Children.map(L,o=>s.isValidElement(o)?s.cloneElement(o,{variant:n,color:h,size:B,disabled:m||o.props.disabled,className:x("ms-btn-group__btn",o.props.className)}):o);return r.jsx("div",{ref:k,role:"group",className:x("ms-btn-group",`ms-btn-group--${q}`,`ms-btn-group--${n}`,`ms-btn-group--${h}`,`ms-btn-group--${B}`,m&&"ms-btn-group--disabled",F),"aria-disabled":m||void 0,...$,children:P})});t.displayName="ButtonGroup";t.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'danger' | 'success' | 'warning' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const Q={title:"Components/ButtonGroup",component:t,argTypes:{variant:{control:"select",options:["solid","outlined","ghost"]},color:{control:"select",options:["primary","danger","success","warning","neutral"]},size:{control:"select",options:["sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]},disabled:{control:"boolean"}}},a={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"One"}),r.jsx(e,{children:"Two"}),r.jsx(e,{children:"Three"})]})}},i={args:{variant:"outlined",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Left"}),r.jsx(e,{children:"Center"}),r.jsx(e,{children:"Right"})]})}},l={args:{variant:"ghost",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Day"}),r.jsx(e,{children:"Week"}),r.jsx(e,{children:"Month"})]})}},d={render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:["primary","danger","success","warning","neutral"].map(n=>r.jsxs(t,{color:n,children:[r.jsx(e,{children:n}),r.jsx(e,{children:"Group"}),r.jsx(e,{children:"Example"})]},n))})},u={args:{orientation:"vertical",children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"Top"}),r.jsx(e,{children:"Middle"}),r.jsx(e,{children:"Bottom"})]})}},c={args:{disabled:!0,children:r.jsxs(r.Fragment,{children:[r.jsx(e,{children:"One"}),r.jsx(e,{children:"Two"}),r.jsx(e,{children:"Three"})]})}},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[r.jsxs("div",{children:[r.jsx("p",{children:r.jsx("strong",{children:"Solid (default)"})}),r.jsxs(t,{variant:"solid",children:[r.jsx(e,{children:"Yes"}),r.jsx(e,{children:"No"}),r.jsx(e,{children:"Maybe"})]})]}),r.jsxs("div",{children:[r.jsx("p",{children:r.jsx("strong",{children:"Outlined"})}),r.jsxs(t,{variant:"outlined",children:[r.jsx(e,{children:"Left"}),r.jsx(e,{children:"Center"}),r.jsx(e,{children:"Right"})]})]}),r.jsxs("div",{children:[r.jsx("p",{children:r.jsx("strong",{children:"Ghost"})}),r.jsxs(t,{variant:"ghost",children:[r.jsx(e,{children:"Copy"}),r.jsx(e,{children:"Cut"}),r.jsx(e,{children:"Paste"})]})]}),r.jsxs("div",{children:[r.jsx("p",{children:r.jsx("strong",{children:"Vertical"})}),r.jsxs(t,{orientation:"vertical",children:[r.jsx(e,{children:"Action 1"}),r.jsx(e,{children:"Action 2"}),r.jsx(e,{children:"Action 3"})]})]}),r.jsxs("div",{children:[r.jsx("p",{children:r.jsx("strong",{children:"Disabled"})}),r.jsxs(t,{disabled:!0,children:[r.jsx(e,{children:"Save"}),r.jsx(e,{children:"Save & Close"}),r.jsx(e,{children:"Cancel"})]})]})]})};var g,j,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <Button>One</Button>\r
        <Button>Two</Button>\r
        <Button>Three</Button>\r
      </>
  }
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var f,y,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: <>\r
        <Button>Left</Button>\r
        <Button>Center</Button>\r
        <Button>Right</Button>\r
      </>
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var G,C,T;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: <>\r
        <Button>Day</Button>\r
        <Button>Week</Button>\r
        <Button>Month</Button>\r
      </>
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var w,S,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>\r
      {(['primary', 'danger', 'success', 'warning', 'neutral'] as const).map(color => <ButtonGroup key={color} color={color}>\r
          <Button>{color}</Button>\r
          <Button>Group</Button>\r
          <Button>Example</Button>\r
        </ButtonGroup>)}\r
    </div>
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var V,A,O;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    children: <>\r
        <Button>Top</Button>\r
        <Button>Middle</Button>\r
        <Button>Bottom</Button>\r
      </>
  }
}`,...(O=(A=u.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var E,M,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <>\r
        <Button>One</Button>\r
        <Button>Two</Button>\r
        <Button>Three</Button>\r
      </>
  }
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var z,R,_;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
      <div>\r
        <p><strong>Solid (default)</strong></p>\r
        <ButtonGroup variant="solid">\r
          <Button>Yes</Button>\r
          <Button>No</Button>\r
          <Button>Maybe</Button>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <p><strong>Outlined</strong></p>\r
        <ButtonGroup variant="outlined">\r
          <Button>Left</Button>\r
          <Button>Center</Button>\r
          <Button>Right</Button>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <p><strong>Ghost</strong></p>\r
        <ButtonGroup variant="ghost">\r
          <Button>Copy</Button>\r
          <Button>Cut</Button>\r
          <Button>Paste</Button>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <p><strong>Vertical</strong></p>\r
        <ButtonGroup orientation="vertical">\r
          <Button>Action 1</Button>\r
          <Button>Action 2</Button>\r
          <Button>Action 3</Button>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <p><strong>Disabled</strong></p>\r
        <ButtonGroup disabled>\r
          <Button>Save</Button>\r
          <Button>Save &amp; Close</Button>\r
          <Button>Cancel</Button>\r
        </ButtonGroup>\r
      </div>\r
    </div>
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const U=["Default","Outlined","Ghost","Colors","Vertical","Disabled","AllVariants"];export{p as AllVariants,d as Colors,a as Default,c as Disabled,l as Ghost,i as Outlined,u as Vertical,U as __namedExportsOrder,Q as default};
