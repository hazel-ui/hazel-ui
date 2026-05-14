import{C as e}from"./Color-D8Giav_X.js";import{j as S}from"./jsx-runtime-BTJTZTIL.js";import{p as s,y as z}from"./styled-components.browser.esm-CNZ_myGK.js";import{S as w}from"./Shadow-BRKr-rku.js";import{T as l}from"./Theme-HiODj44g.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";function x(r){switch(r){case"s":return s`
        font-size: 0.8rem;
        padding: 0.2rem 0.8rem;
        margin: 0.15rem;
      `;case"m":return s`
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
        margin: 0.15rem;
      `;case"l":return s`
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        margin: 0.2rem;
      `;default:return null}}const T=z.span`
  font-family: ${l.font.sansSerif};
  font-weight: ${l.fontWeight.bold};

  border-radius: 0.4rem;
  text-align: center;

  &:hover {
    box-shadow: ${w.xs};
  }

  ${r=>x(r.size)};
`;function y({size:r="s",children:C,color:b=e.gray1,backgroundColor:h=e.gray11}){return S.jsx(T,{size:r,as:"span",style:{backgroundColor:h,color:b},children:C})}y.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"Color | string",elements:[{name:"Color"},{name:"string"}]},description:"",defaultValue:{value:"Color.gray1",computed:!0}},backgroundColor:{required:!1,tsType:{name:"union",raw:"Color | string",elements:[{name:"Color"},{name:"string"}]},description:"",defaultValue:{value:"Color.gray11",computed:!0}}}};const $={argTypes:{backgroundColor:{control:"color"},color:{control:"color"}},component:y,parameters:{componentSubtitle:`This component can be used to render badge like 
    elements on a page such as labels, categories, and tags. It renders 
    as a <span> tag by default.`},title:"Components/Badge"},o={args:{children:"Small",size:"s"}},a={args:{backgroundColor:e.blue1,children:"Medium",color:e.blue11,size:"m"}},n={args:{backgroundColor:e.yellow10,children:"Large",color:e.yellow1,size:"l"}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Small",
    size: "s"
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    backgroundColor: Color.blue1,
    children: "Medium",
    color: Color.blue11,
    size: "m"
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    backgroundColor: Color.yellow10,
    children: "Large",
    color: Color.yellow1,
    size: "l"
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const j=["Small","Medium","Large"];export{n as Large,a as Medium,o as Small,j as __namedExportsOrder,$ as default};
