import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-Dx_1l3Sb.js";import{c as A}from"./cn-2dOUpm6k.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const V=i.createContext(null);function W(){const n=i.useContext(V);if(!n)throw new Error("Accordion compound components must be used within Accordion");return n}const K=i.createContext(null);function P(){const n=i.useContext(K);if(!n)throw new Error("Accordion.Item compound components must be used within Accordion.Item");return n}const h=i.forwardRef(({defaultExpandedItem:n,onChange:o,allowMultiple:t=!1,className:c,children:d,...m},u)=>{const[a,p]=i.useState(()=>{const s=n?Array.isArray(n)?n:[n]:[];return new Set(s)}),l=i.useCallback(s=>{p(I=>{const x=new Set(I);return x.has(s)?x.delete(s):(t||x.clear(),x.add(s)),x}),o==null||o(s)},[t,o]);return e.jsx(V.Provider,{value:{expandedValues:a,toggleItem:l},children:e.jsx("div",{ref:u,className:A("ms-accordion",c),...m,children:d})})});h.displayName="Accordion";const B=i.forwardRef(({value:n,disabled:o=!1,className:t,children:c,...d},m)=>e.jsx(K.Provider,{value:{value:n,disabled:o},children:e.jsx("div",{ref:m,className:A("ms-accordion__item",o&&"ms-accordion__item--disabled",t),"data-disabled":o||void 0,...d,children:c})}));B.displayName="Accordion.Item";const Y=e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),H=i.forwardRef(({expandIcon:n,className:o,children:t,onClick:c,...d},m)=>{const{expandedValues:u,toggleItem:a}=W(),{value:p,disabled:l}=P(),s=u.has(p),I=y=>{l||(c==null||c(y),a(p))},x=y=>{l||(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),a(p))};return e.jsxs("div",{ref:m,role:"button",tabIndex:l?-1:0,className:A("ms-accordion__summary",s&&"ms-accordion__summary--expanded",o),"aria-expanded":s,"aria-disabled":l||void 0,onClick:I,onKeyDown:x,...d,children:[e.jsx("span",{className:"ms-accordion__summary-content",children:t}),e.jsx("span",{className:A("ms-accordion__expand-icon",s&&"ms-accordion__expand-icon--expanded"),children:n??Y})]})});H.displayName="Accordion.Summary";const U=i.forwardRef(({children:n,className:o,...t},c)=>{const{expandedValues:d}=W(),{value:m}=P(),u=d.has(m),a=i.useRef(null),[p,l]=i.useState("0");return i.useEffect(()=>{a.current&&l(u?`${a.current.scrollHeight}px`:"0")},[u,n]),e.jsx("div",{ref:c,className:A("ms-accordion__details",u&&"ms-accordion__details--expanded",o),style:{maxHeight:p},...t,children:e.jsx("div",{ref:a,children:n})})});U.displayName="Accordion.Details";h.Item=B;h.Summary=H;h.Details=U;const r=h;h.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultExpandedItem:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const X={title:"Components/Accordion",component:r,argTypes:{allowMultiple:{control:"boolean"},defaultExpandedItem:{control:"text"}}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Item,{value:"panel-1",children:[e.jsx(r.Summary,{children:"Section 1"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Content for section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})]}),e.jsxs(r.Item,{value:"panel-2",children:[e.jsx(r.Summary,{children:"Section 2"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Content for section 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),e.jsxs(r.Item,{value:"panel-3",children:[e.jsx(r.Summary,{children:"Section 3"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Content for section 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco."})})]})]})}},j={args:{allowMultiple:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Item,{value:"multi-1",children:[e.jsx(r.Summary,{children:"Tab 1"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Multiple panels can be open simultaneously."})})]}),e.jsxs(r.Item,{value:"multi-2",children:[e.jsx(r.Summary,{children:"Tab 2"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Try opening this without closing the first one."})})]})]})}},S={args:{defaultExpandedItem:"panel-1",children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Item,{value:"panel-1",children:[e.jsx(r.Summary,{children:"Pre-opened Section"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"This section starts expanded via defaultExpandedItem."})})]}),e.jsxs(r.Item,{value:"panel-2",children:[e.jsx(r.Summary,{children:"Another Section"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"This one starts collapsed."})})]})]})}},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Item,{value:"enabled-1",children:[e.jsx(r.Summary,{children:"Enabled Section"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"You can toggle this one."})})]}),e.jsxs(r.Item,{value:"disabled-1",disabled:!0,children:[e.jsx(r.Summary,{children:"Disabled Section"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"This content is not accessible."})})]})]})}},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"24px"},children:[e.jsxs("div",{style:{flex:"1 1 300px"},children:[e.jsx("h4",{style:{margin:"0 0 8px",fontFamily:"sans-serif"},children:"Single"}),e.jsxs(r,{children:[e.jsxs(r.Item,{value:"s-1",children:[e.jsx(r.Summary,{children:"Item One"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Single selection accordion content."})})]}),e.jsxs(r.Item,{value:"s-2",children:[e.jsx(r.Summary,{children:"Item Two"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Only one panel open at a time."})})]})]})]}),e.jsxs("div",{style:{flex:"1 1 300px"},children:[e.jsx("h4",{style:{margin:"0 0 8px",fontFamily:"sans-serif"},children:"Allow Multiple"}),e.jsxs(r,{allowMultiple:!0,children:[e.jsxs(r.Item,{value:"m-1",children:[e.jsx(r.Summary,{children:"Tab A"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Multi-select is enabled."})})]}),e.jsxs(r.Item,{value:"m-2",children:[e.jsx(r.Summary,{children:"Tab B"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Open alongside other panels."})})]})]})]}),e.jsxs("div",{style:{flex:"1 1 300px"},children:[e.jsx("h4",{style:{margin:"0 0 8px",fontFamily:"sans-serif"},children:"With Disabled Item"}),e.jsxs(r,{children:[e.jsxs(r.Item,{value:"d-1",children:[e.jsx(r.Summary,{children:"Active"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Clickable panel."})})]}),e.jsxs(r.Item,{value:"d-2",disabled:!0,children:[e.jsx(r.Summary,{children:"Disabled"}),e.jsx(r.Details,{children:e.jsx("p",{style:{margin:0},children:"Cannot be opened."})})]})]})]})]})};var D,b,w;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <Accordion.Item value="panel-1">\r
          <Accordion.Summary>Section 1</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>Content for section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
        <Accordion.Item value="panel-2">\r
          <Accordion.Summary>Section 2</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>Content for section 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
        <Accordion.Item value="panel-3">\r
          <Accordion.Summary>Section 3</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>Content for section 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
      </>
  }
}`,...(w=(b=g.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var T,_,E;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    allowMultiple: true,
    children: <>\r
        <Accordion.Item value="multi-1">\r
          <Accordion.Summary>Tab 1</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>Multiple panels can be open simultaneously.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
        <Accordion.Item value="multi-2">\r
          <Accordion.Summary>Tab 2</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>Try opening this without closing the first one.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
      </>
  }
}`,...(E=(_=j.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var C,M,F;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultExpandedItem: 'panel-1',
    children: <>\r
        <Accordion.Item value="panel-1">\r
          <Accordion.Summary>Pre-opened Section</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>This section starts expanded via defaultExpandedItem.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
        <Accordion.Item value="panel-2">\r
          <Accordion.Summary>Another Section</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>This one starts collapsed.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
      </>
  }
}`,...(F=(M=S.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var N,k,O;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <Accordion.Item value="enabled-1">\r
          <Accordion.Summary>Enabled Section</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>You can toggle this one.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
        <Accordion.Item value="disabled-1" disabled>\r
          <Accordion.Summary>Disabled Section</Accordion.Summary>\r
          <Accordion.Details>\r
            <p style={{
            margin: 0
          }}>This content is not accessible.</p>\r
          </Accordion.Details>\r
        </Accordion.Item>\r
      </>
  }
}`,...(O=(k=f.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var q,R,L;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <div style={{
      flex: '1 1 300px'
    }}>\r
        <h4 style={{
        margin: '0 0 8px',
        fontFamily: 'sans-serif'
      }}>Single</h4>\r
        <Accordion>\r
          <Accordion.Item value="s-1">\r
            <Accordion.Summary>Item One</Accordion.Summary>\r
            <Accordion.Details><p style={{
              margin: 0
            }}>Single selection accordion content.</p></Accordion.Details>\r
          </Accordion.Item>\r
          <Accordion.Item value="s-2">\r
            <Accordion.Summary>Item Two</Accordion.Summary>\r
            <Accordion.Details><p style={{
              margin: 0
            }}>Only one panel open at a time.</p></Accordion.Details>\r
          </Accordion.Item>\r
        </Accordion>\r
      </div>\r
      <div style={{
      flex: '1 1 300px'
    }}>\r
        <h4 style={{
        margin: '0 0 8px',
        fontFamily: 'sans-serif'
      }}>Allow Multiple</h4>\r
        <Accordion allowMultiple>\r
          <Accordion.Item value="m-1">\r
            <Accordion.Summary>Tab A</Accordion.Summary>\r
            <Accordion.Details><p style={{
              margin: 0
            }}>Multi-select is enabled.</p></Accordion.Details>\r
          </Accordion.Item>\r
          <Accordion.Item value="m-2">\r
            <Accordion.Summary>Tab B</Accordion.Summary>\r
            <Accordion.Details><p style={{
              margin: 0
            }}>Open alongside other panels.</p></Accordion.Details>\r
          </Accordion.Item>\r
        </Accordion>\r
      </div>\r
      <div style={{
      flex: '1 1 300px'
    }}>\r
        <h4 style={{
        margin: '0 0 8px',
        fontFamily: 'sans-serif'
      }}>With Disabled Item</h4>\r
        <Accordion>\r
          <Accordion.Item value="d-1">\r
            <Accordion.Summary>Active</Accordion.Summary>\r
            <Accordion.Details><p style={{
              margin: 0
            }}>Clickable panel.</p></Accordion.Details>\r
          </Accordion.Item>\r
          <Accordion.Item value="d-2" disabled>\r
            <Accordion.Summary>Disabled</Accordion.Summary>\r
            <Accordion.Details><p style={{
              margin: 0
            }}>Cannot be opened.</p></Accordion.Details>\r
          </Accordion.Item>\r
        </Accordion>\r
      </div>\r
    </div>
}`,...(L=(R=v.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const Z=["Single","AllowMultiple","DefaultExpanded","DisabledItem","KitchenSink"];export{j as AllowMultiple,S as DefaultExpanded,f as DisabledItem,v as KitchenSink,g as Single,Z as __namedExportsOrder,X as default};
