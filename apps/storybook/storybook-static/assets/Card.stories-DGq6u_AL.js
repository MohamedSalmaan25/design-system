import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-Dx_1l3Sb.js";import{c as d}from"./cn-2dOUpm6k.js";import{B as n}from"./Button-C6PCuTDE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const o=c.forwardRef(({variant:t="elevation",elevation:i=1,className:s,children:a,...l},h)=>e.jsx("div",{ref:h,className:d("ms-card",t==="elevation"?"ms-card--elevation":"ms-card--outlined",t==="elevation"&&`ms-card--elevation-${i}`,s),...l,children:a}));o.displayName="Card";const I=c.forwardRef(({className:t,children:i,...s},a)=>e.jsx("div",{ref:a,className:d("ms-card__header",t),...s,children:i}));I.displayName="Card.Header";const L=c.forwardRef(({component:t="div",src:i,alt:s,height:a,className:l,children:h,style:J,...v},y)=>{const j={...a!=null?{height:a}:{},...J};return t==="img"?e.jsx("img",{ref:y,className:d("ms-card__media",l),src:i,alt:s||"",style:j,...v}):t==="picture"?e.jsx("picture",{ref:y,className:d("ms-card__media",l),style:j,...v,children:h}):e.jsx("div",{ref:y,className:d("ms-card__media",l),style:j,...v,children:h})});L.displayName="Card.Media";const V=c.forwardRef(({className:t,children:i,...s},a)=>e.jsx("div",{ref:a,className:d("ms-card__content",t),...s,children:i}));V.displayName="Card.Content";const F=c.forwardRef(({className:t,children:i,...s},a)=>e.jsx("div",{ref:a,className:d("ms-card__actions",t),...s,children:i}));F.displayName="Card.Actions";o.Header=I;o.Media=L;o.Content=V;o.Actions=F;const r=o;o.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'elevation' | 'outlined'",elements:[{name:"literal",value:"'elevation'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'elevation'",computed:!1}},elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"1",computed:!1}}},composes:["HTMLAttributes"]};const U={title:"Components/Card",component:r,argTypes:{variant:{control:"select",options:["elevation","outlined"]},elevation:{control:"select",options:[0,1,2,3,4]}}},m={render:()=>e.jsxs(r,{style:{maxWidth:360},children:[e.jsx(r.Media,{component:"img",src:"https://placehold.co/360x200/3b82f6/white?text=Card+Image",alt:"Placeholder",height:200}),e.jsxs(r.Content,{children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Card Title"}),e.jsx("p",{style:{margin:0,color:"#666"},children:"This is a basic card with an image, content area, and actions."})]}),e.jsxs(r.Actions,{children:[e.jsx(n,{size:"sm",children:"Learn More"}),e.jsx(n,{size:"sm",variant:"outline",children:"Share"})]})]})},p={render:()=>e.jsxs(r,{variant:"outlined",style:{maxWidth:360},children:[e.jsx(r.Header,{children:e.jsx("h3",{style:{margin:0},children:"Outlined Card"})}),e.jsx(r.Content,{children:e.jsx("p",{style:{margin:0,color:"#666"},children:"This card uses the outlined variant with no elevation shadow."})}),e.jsx(r.Actions,{children:e.jsx(n,{size:"sm",variant:"outline",children:"Action"})})]})},x={render:()=>e.jsxs(r,{style:{maxWidth:360},children:[e.jsx(r.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:"bold"},children:"JD"}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0},children:"John Doe"}),e.jsx("span",{style:{fontSize:12,color:"#999"},children:"2 hours ago"})]})]})}),e.jsx(r.Content,{children:e.jsx("p",{style:{margin:0,color:"#666"},children:"This card has a header with avatar, title, and timestamp."})})]})},u={render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"24px"},children:[0,1,2,3,4].map(t=>e.jsx(r,{elevation:t,style:{width:200},children:e.jsx(r.Content,{children:e.jsxs("p",{style:{margin:0,textAlign:"center"},children:["Elevation ",t]})})},t))})},C={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"24px"},children:[e.jsxs(r,{style:{maxWidth:320},children:[e.jsx(r.Media,{component:"img",src:"https://placehold.co/320x180/22c55e/white?text=Nature",alt:"Nature",height:180}),e.jsxs(r.Content,{children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Beautiful Landscape"}),e.jsx("p",{style:{margin:0,color:"#666",fontSize:14},children:"Explore the breathtaking views from the mountain summit."})]}),e.jsxs(r.Actions,{children:[e.jsx(n,{size:"sm",color:"primary",children:"Read More"}),e.jsx(n,{size:"sm",variant:"outline",color:"neutral",children:"Save"})]})]}),e.jsxs(r,{variant:"outlined",style:{maxWidth:320},children:[e.jsx(r.Header,{children:e.jsx("h3",{style:{margin:0,fontSize:18},children:"Travel Tips"})}),e.jsx(r.Content,{children:e.jsx("p",{style:{margin:0,color:"#666",fontSize:14},children:"Top 10 tips for traveling on a budget this season."})}),e.jsx(r.Media,{component:"img",src:"https://placehold.co/320x160/f59e0b/white?text=Travel",alt:"Travel",height:160}),e.jsxs(r.Actions,{children:[e.jsx(n,{size:"sm",variant:"outline",children:"Share"}),e.jsx(n,{size:"sm",variant:"ghost",children:"Bookmark"})]})]}),e.jsxs(r,{elevation:3,style:{maxWidth:320},children:[e.jsx(r.Media,{component:"img",src:"https://placehold.co/320x140/ef4444/white?text=Food",alt:"Food",height:140}),e.jsxs(r.Content,{children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Recipe of the Day"}),e.jsx("p",{style:{margin:0,color:"#666",fontSize:14},children:"A delicious and easy pasta recipe ready in 20 minutes."})]}),e.jsx(r.Actions,{children:e.jsx(n,{size:"sm",color:"danger",children:"View Recipe"})})]})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Elevation Card (default)"})}),e.jsx(r,{style:{maxWidth:360},children:e.jsx(r.Content,{children:e.jsx("p",{style:{margin:0},children:"Elevation card with shadow"})})})]}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Outlined Card"})}),e.jsx(r,{variant:"outlined",style:{maxWidth:360},children:e.jsx(r.Content,{children:e.jsx("p",{style:{margin:0},children:"Outlined card with border"})})})]}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Card with all sub-components"})}),e.jsxs(r,{style:{maxWidth:360},children:[e.jsx(r.Header,{children:e.jsx("strong",{children:"Header"})}),e.jsx(r.Media,{component:"img",src:"https://placehold.co/360x120/3b82f6/white?text=Media",alt:"Media",height:120}),e.jsx(r.Content,{children:e.jsx("p",{style:{margin:0},children:"Content area"})}),e.jsxs(r.Actions,{children:[e.jsx(n,{size:"sm",children:"Action 1"}),e.jsx(n,{size:"sm",variant:"outline",children:"Action 2"})]})]})]})]})};var f,w,A;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 360
  }}>\r
      <Card.Media component="img" src="https://placehold.co/360x200/3b82f6/white?text=Card+Image" alt="Placeholder" height={200} />\r
      <Card.Content>\r
        <h3 style={{
        margin: '0 0 8px'
      }}>Card Title</h3>\r
        <p style={{
        margin: 0,
        color: '#666'
      }}>\r
          This is a basic card with an image, content area, and actions.\r
        </p>\r
      </Card.Content>\r
      <Card.Actions>\r
        <Button size="sm">Learn More</Button>\r
        <Button size="sm" variant="outline">Share</Button>\r
      </Card.Actions>\r
    </Card>
}`,...(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var z,B,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Card variant="outlined" style={{
    maxWidth: 360
  }}>\r
      <Card.Header>\r
        <h3 style={{
        margin: 0
      }}>Outlined Card</h3>\r
      </Card.Header>\r
      <Card.Content>\r
        <p style={{
        margin: 0,
        color: '#666'
      }}>\r
          This card uses the outlined variant with no elevation shadow.\r
        </p>\r
      </Card.Content>\r
      <Card.Actions>\r
        <Button size="sm" variant="outline">Action</Button>\r
      </Card.Actions>\r
    </Card>
}`,...(W=(B=p.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var b,S,M;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: 360
  }}>\r
      <Card.Header>\r
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>\r
          <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 'bold'
        }}>JD</div>\r
          <div>\r
            <h4 style={{
            margin: 0
          }}>John Doe</h4>\r
            <span style={{
            fontSize: 12,
            color: '#999'
          }}>2 hours ago</span>\r
          </div>\r
        </div>\r
      </Card.Header>\r
      <Card.Content>\r
        <p style={{
        margin: 0,
        color: '#666'
      }}>\r
          This card has a header with avatar, title, and timestamp.\r
        </p>\r
      </Card.Content>\r
    </Card>
}`,...(M=(S=x.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var T,H,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      {([0, 1, 2, 3, 4] as const).map(elevation => <Card key={elevation} elevation={elevation} style={{
      width: 200
    }}>\r
          <Card.Content>\r
            <p style={{
          margin: 0,
          textAlign: 'center'
        }}>Elevation {elevation}</p>\r
          </Card.Content>\r
        </Card>)}\r
    </div>
}`,...(_=(H=u.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var E,N,R;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <Card style={{
      maxWidth: 320
    }}>\r
        <Card.Media component="img" src="https://placehold.co/320x180/22c55e/white?text=Nature" alt="Nature" height={180} />\r
        <Card.Content>\r
          <h3 style={{
          margin: '0 0 8px'
        }}>Beautiful Landscape</h3>\r
          <p style={{
          margin: 0,
          color: '#666',
          fontSize: 14
        }}>\r
            Explore the breathtaking views from the mountain summit.\r
          </p>\r
        </Card.Content>\r
        <Card.Actions>\r
          <Button size="sm" color="primary">Read More</Button>\r
          <Button size="sm" variant="outline" color="neutral">Save</Button>\r
        </Card.Actions>\r
      </Card>\r
      <Card variant="outlined" style={{
      maxWidth: 320
    }}>\r
        <Card.Header>\r
          <h3 style={{
          margin: 0,
          fontSize: 18
        }}>Travel Tips</h3>\r
        </Card.Header>\r
        <Card.Content>\r
          <p style={{
          margin: 0,
          color: '#666',
          fontSize: 14
        }}>\r
            Top 10 tips for traveling on a budget this season.\r
          </p>\r
        </Card.Content>\r
        <Card.Media component="img" src="https://placehold.co/320x160/f59e0b/white?text=Travel" alt="Travel" height={160} />\r
        <Card.Actions>\r
          <Button size="sm" variant="outline">Share</Button>\r
          <Button size="sm" variant="ghost">Bookmark</Button>\r
        </Card.Actions>\r
      </Card>\r
      <Card elevation={3} style={{
      maxWidth: 320
    }}>\r
        <Card.Media component="img" src="https://placehold.co/320x140/ef4444/white?text=Food" alt="Food" height={140} />\r
        <Card.Content>\r
          <h3 style={{
          margin: '0 0 8px'
        }}>Recipe of the Day</h3>\r
          <p style={{
          margin: 0,
          color: '#666',
          fontSize: 14
        }}>\r
            A delicious and easy pasta recipe ready in 20 minutes.\r
          </p>\r
        </Card.Content>\r
        <Card.Actions>\r
          <Button size="sm" color="danger">View Recipe</Button>\r
        </Card.Actions>\r
      </Card>\r
    </div>
}`,...(R=(N=C.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var D,k,O;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
      <div>\r
        <p><strong>Elevation Card (default)</strong></p>\r
        <Card style={{
        maxWidth: 360
      }}>\r
          <Card.Content>\r
            <p style={{
            margin: 0
          }}>Elevation card with shadow</p>\r
          </Card.Content>\r
        </Card>\r
      </div>\r
      <div>\r
        <p><strong>Outlined Card</strong></p>\r
        <Card variant="outlined" style={{
        maxWidth: 360
      }}>\r
          <Card.Content>\r
            <p style={{
            margin: 0
          }}>Outlined card with border</p>\r
          </Card.Content>\r
        </Card>\r
      </div>\r
      <div>\r
        <p><strong>Card with all sub-components</strong></p>\r
        <Card style={{
        maxWidth: 360
      }}>\r
          <Card.Header>\r
            <strong>Header</strong>\r
          </Card.Header>\r
          <Card.Media component="img" src="https://placehold.co/360x120/3b82f6/white?text=Media" alt="Media" height={120} />\r
          <Card.Content>\r
            <p style={{
            margin: 0
          }}>Content area</p>\r
          </Card.Content>\r
          <Card.Actions>\r
            <Button size="sm">Action 1</Button>\r
            <Button size="sm" variant="outline">Action 2</Button>\r
          </Card.Actions>\r
        </Card>\r
      </div>\r
    </div>
}`,...(O=(k=g.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const X=["Default","Outlined","WithHeader","ElevationLevels","ComplexExample","AllVariants"];export{g as AllVariants,C as ComplexExample,m as Default,u as ElevationLevels,p as Outlined,x as WithHeader,X as __namedExportsOrder,U as default};
