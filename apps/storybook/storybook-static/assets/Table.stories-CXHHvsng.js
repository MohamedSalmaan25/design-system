import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-Dx_1l3Sb.js";import{c as d}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const m=s.forwardRef(({size:a="md",stickyHeader:r,className:n,children:i,...C},x)=>e.jsx("div",{className:"ms-table-container",style:{overflow:"auto"},children:e.jsx("table",{ref:x,className:d("ms-table",a==="sm"&&"ms-table--sm",r&&"ms-table--stickyHeader",n),...C,children:i})}));m.displayName="Table";const $=s.forwardRef(({className:a,children:r,...n},i)=>e.jsx("thead",{ref:i,className:d("ms-table__head",a),...n,children:r}));$.displayName="Table.Head";const E=s.forwardRef(({className:a,children:r,...n},i)=>e.jsx("tbody",{ref:i,className:d("ms-table__body",a),...n,children:r}));E.displayName="Table.Body";const I=s.forwardRef(({className:a,children:r,...n},i)=>e.jsx("tr",{ref:i,className:d("ms-table__row",a),...n,children:r}));I.displayName="Table.Row";const z=s.forwardRef(({align:a,variant:r,width:n,className:i,children:C,style:x,...P},L)=>{const M=r==="head"?"th":"td";return e.jsx(M,{ref:L,className:d("ms-table__cell",r&&`ms-table__cell--${r}`,a&&`ms-table__cell--${a}`,i),style:{...x,width:n},...P,children:C})});z.displayName="Table.Cell";const W=s.forwardRef(({className:a,children:r,...n},i)=>e.jsx("tfoot",{ref:i,className:d("ms-table__footer",a),...n,children:r}));W.displayName="Table.Footer";const l=m;l.Head=$;l.Body=E;l.Row=I;l.Cell=z;l.Footer=W;m.__docgenInfo={description:"",methods:[],displayName:"Table",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const V={title:"Components/Table",component:l,argTypes:{size:{control:"select",options:["sm","md"]},stickyHeader:{control:"boolean"}}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"head",children:"Name"}),e.jsx(l.Cell,{variant:"head",children:"Age"}),e.jsx(l.Cell,{variant:"head",children:"Role"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Alice"}),e.jsx(l.Cell,{children:"30"}),e.jsx(l.Cell,{children:"Engineer"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bob"}),e.jsx(l.Cell,{children:"25"}),e.jsx(l.Cell,{children:"Designer"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Charlie"}),e.jsx(l.Cell,{children:"35"}),e.jsx(l.Cell,{children:"Manager"})]})]})]})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"head",children:"Item"}),e.jsx(l.Cell,{variant:"head",align:"right",children:"Qty"}),e.jsx(l.Cell,{variant:"head",align:"right",children:"Price"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Widget"}),e.jsx(l.Cell,{align:"right",children:"2"}),e.jsx(l.Cell,{align:"right",children:"$10.00"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Gadget"}),e.jsx(l.Cell,{align:"right",children:"1"}),e.jsx(l.Cell,{align:"right",children:"$25.00"})]})]}),e.jsx(l.Footer,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"footer",children:"Total"}),e.jsx(l.Cell,{variant:"footer",align:"right",children:"3"}),e.jsx(l.Cell,{variant:"footer",align:"right",children:"$35.00"})]})})]})}},b={args:{size:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"head",children:"ID"}),e.jsx(l.Cell,{variant:"head",children:"Name"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"001"}),e.jsx(l.Cell,{children:"Alice"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"002"}),e.jsx(l.Cell,{children:"Bob"})]})]})]})}},c={args:{stickyHeader:!0,style:{maxHeight:120,overflow:"auto"},children:e.jsxs(e.Fragment,{children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"head",children:"Name"}),e.jsx(l.Cell,{variant:"head",children:"Department"})]})}),e.jsx(l.Body,{children:["Alice","Bob","Charlie","Diana","Eve","Frank"].map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a}),e.jsx(l.Cell,{children:"Engineering"})]},a))})]})}},T={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"head",children:"Left"}),e.jsx(l.Cell,{variant:"head",align:"center",children:"Center"}),e.jsx(l.Cell,{variant:"head",align:"right",children:"Right"})]})}),e.jsx(l.Body,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Data"}),e.jsx(l.Cell,{align:"center",children:"Data"}),e.jsx(l.Cell,{align:"right",children:"Data"})]})})]})}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs(l,{children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"head",children:"Name"}),e.jsx(l.Cell,{variant:"head",children:"Age"}),e.jsx(l.Cell,{variant:"head",children:"Role"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Alice"}),e.jsx(l.Cell,{children:"30"}),e.jsx(l.Cell,{children:"Engineer"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bob"}),e.jsx(l.Cell,{children:"25"}),e.jsx(l.Cell,{children:"Designer"})]})]})]}),e.jsxs(l,{size:"sm",children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"head",children:"Item"}),e.jsx(l.Cell,{variant:"head",align:"right",children:"Price"})]})}),e.jsx(l.Body,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Widget"}),e.jsx(l.Cell,{align:"right",children:"$10"})]})}),e.jsx(l.Footer,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{variant:"footer",children:"Total"}),e.jsx(l.Cell,{variant:"footer",align:"right",children:"$10"})]})})]})]})};var g,j,R;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.Cell variant="head">Name</Table.Cell>\r
            <Table.Cell variant="head">Age</Table.Cell>\r
            <Table.Cell variant="head">Role</Table.Cell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Alice</Table.Cell>\r
            <Table.Cell>30</Table.Cell>\r
            <Table.Cell>Engineer</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Bob</Table.Cell>\r
            <Table.Cell>25</Table.Cell>\r
            <Table.Cell>Designer</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Charlie</Table.Cell>\r
            <Table.Cell>35</Table.Cell>\r
            <Table.Cell>Manager</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </>
  }
}`,...(R=(j=o.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var w,p,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.Cell variant="head">Item</Table.Cell>\r
            <Table.Cell variant="head" align="right">Qty</Table.Cell>\r
            <Table.Cell variant="head" align="right">Price</Table.Cell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Widget</Table.Cell>\r
            <Table.Cell align="right">2</Table.Cell>\r
            <Table.Cell align="right">$10.00</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Gadget</Table.Cell>\r
            <Table.Cell align="right">1</Table.Cell>\r
            <Table.Cell align="right">$25.00</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
        <Table.Footer>\r
          <Table.Row>\r
            <Table.Cell variant="footer">Total</Table.Cell>\r
            <Table.Cell variant="footer" align="right">3</Table.Cell>\r
            <Table.Cell variant="footer" align="right">$35.00</Table.Cell>\r
          </Table.Row>\r
        </Table.Footer>\r
      </>
  }
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var y,f,u;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: <>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.Cell variant="head">ID</Table.Cell>\r
            <Table.Cell variant="head">Name</Table.Cell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>001</Table.Cell>\r
            <Table.Cell>Alice</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>002</Table.Cell>\r
            <Table.Cell>Bob</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </>
  }
}`,...(u=(f=b.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var H,B,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    stickyHeader: true,
    style: {
      maxHeight: 120,
      overflow: 'auto'
    },
    children: <>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.Cell variant="head">Name</Table.Cell>\r
            <Table.Cell variant="head">Department</Table.Cell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          {['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'].map(name => <Table.Row key={name}>\r
              <Table.Cell>{name}</Table.Cell>\r
              <Table.Cell>Engineering</Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </>
  }
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var D,_,F;T.parameters={...T.parameters,docs:{...(D=T.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.Cell variant="head">Left</Table.Cell>\r
            <Table.Cell variant="head" align="center">Center</Table.Cell>\r
            <Table.Cell variant="head" align="right">Right</Table.Cell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Data</Table.Cell>\r
            <Table.Cell align="center">Data</Table.Cell>\r
            <Table.Cell align="right">Data</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </>
  }
}`,...(F=(_=T.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var A,k,S;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
      <Table>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.Cell variant="head">Name</Table.Cell>\r
            <Table.Cell variant="head">Age</Table.Cell>\r
            <Table.Cell variant="head">Role</Table.Cell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Alice</Table.Cell>\r
            <Table.Cell>30</Table.Cell>\r
            <Table.Cell>Engineer</Table.Cell>\r
          </Table.Row>\r
          <Table.Row>\r
            <Table.Cell>Bob</Table.Cell>\r
            <Table.Cell>25</Table.Cell>\r
            <Table.Cell>Designer</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
      </Table>\r
      <Table size="sm">\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.Cell variant="head">Item</Table.Cell>\r
            <Table.Cell variant="head" align="right">Price</Table.Cell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          <Table.Row>\r
            <Table.Cell>Widget</Table.Cell>\r
            <Table.Cell align="right">$10</Table.Cell>\r
          </Table.Row>\r
        </Table.Body>\r
        <Table.Footer>\r
          <Table.Row>\r
            <Table.Cell variant="footer">Total</Table.Cell>\r
            <Table.Cell variant="footer" align="right">$10</Table.Cell>\r
          </Table.Row>\r
        </Table.Footer>\r
      </Table>\r
    </div>
}`,...(S=(k=h.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const J=["Default","WithFooter","Small","StickyHeader","Aligned","KitchenSink"];export{T as Aligned,o as Default,h as KitchenSink,b as Small,c as StickyHeader,t as WithFooter,J as __namedExportsOrder,V as default};
