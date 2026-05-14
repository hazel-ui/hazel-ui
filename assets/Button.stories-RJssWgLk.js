import{C as y}from"./Color-D8Giav_X.js";import{j as b}from"./jsx-runtime-BTJTZTIL.js";import{p as a,y as C}from"./styled-components.browser.esm-CNZ_myGK.js";import{T as s}from"./Theme-HiODj44g.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";function w(e,r=y.blue9){switch(e){case"primary":return a`
        color: white;
        background-color: ${r};
        border: 1px solid transparent;
      `;case"secondary":return a`
        color: ${r};
        background-color: transparent;
        border: 1px solid ${r};
      `;default:return null}}function z(e){switch(e){case"s":return a`
        font-size: 13px;
        padding: 6px 12px;
        font-weight: ${s.fontWeight.light};
      `;case"m":return a`
        font-size: 14px;
        padding: 11px 20px;
        font-weight: ${s.fontWeight.semiBold};
      `;case"l":return a`
        font-size: 16px;
        padding: 12px 24px;
        font-weight: ${s.fontWeight.bold};
      `;default:return null}}const k=C.button`
  ${e=>w(e.variant,e.variantColor)};
  ${e=>z(e.size)};
  font-family: ${s.font.sansSerif};

  display: flex;
  border-radius: 6px;
  margin: 1rem;
  cursor: pointer;

  transition: transform 0.2s;
  box-shadow: 0px 2px 8px -1px rgba(18, 22, 33, 0.04);
  &:hover {
    box-shadow: 0px 4px 20px -2px rgba(18, 22, 33, 0.12);
    transform: scale(1.03);
  }
`;function x({size:e="m",variant:r="primary",variantColor:h,children:v}){return b.jsx(k,{size:e,variant:r,as:"button",variantColor:h,children:v})}x.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},variantColor:{required:!1,tsType:{name:"string"},description:""}}};const j={argTypes:{variantColor:{control:"color"}},component:x,parameters:{componentSubtitle:`This component can be used to render a <button> 
      or an <a> tag for clickable items and hyperlinks on a page.`},title:"Components/Button"},o={args:{children:"Button",onClick:()=>alert("Hey, good looking!"),size:"m",variant:"primary"}},n={args:{children:"Follow",size:"s",variant:"secondary"}},t={args:{children:"Discord",size:"l",variantColor:y.purple9}};var i,l,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Button",
    onClick: () => alert("Hey, good looking!"),
    size: "m",
    variant: "primary"
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Follow",
    size: "s",
    variant: "secondary"
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,f,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Discord",
    size: "l",
    variantColor: Color.purple9
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const V=["Primary","Secondary","CustomColors"];export{t as CustomColors,o as Primary,n as Secondary,V as __namedExportsOrder,j as default};
