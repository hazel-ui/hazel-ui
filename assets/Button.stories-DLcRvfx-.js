import{C as a}from"./Color-D8Giav_X.js";import{j as l}from"./jsx-runtime-BTJTZTIL.js";import{p as t,y as p}from"./styled-components.browser.esm-CNZ_myGK.js";import{T as o}from"./Theme-DQvri-fl.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";function u(e,r=a.blue9){switch(e){case"primary":return t`
        color: white;
        background-color: ${r};
        border: 1px solid transparent;
      `;case"secondary":return t`
        color: ${r};
        background-color: transparent;
        border: 1px solid ${r};
      `;default:return null}}function d(e){switch(e){case"s":return t`
        font-size: 13px;
        padding: 6px 12px;
        font-weight: ${o.fontWeight.light};
      `;case"m":return t`
        font-size: 14px;
        padding: 11px 20px;
        font-weight: ${o.fontWeight.semiBold};
      `;case"l":return t`
        font-size: 16px;
        padding: 12px 24px;
        font-weight: ${o.fontWeight.bold};
      `;default:return null}}const m=p.button`
  ${e=>u(e.variant,e.variantColor)};
  ${e=>d(e.size)};
  font-family: ${o.font.sansSerif};

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
`;function n({size:e="m",variant:r="primary",variantColor:i,children:s}){return l.jsx(m,{size:e,variant:r,as:"button",variantColor:i,children:s})}n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},variantColor:{required:!1,tsType:{name:"string"},description:""}}};const b={argTypes:{variantColor:{control:"color"}},component:n,parameters:{componentSubtitle:`This component can be used to render a <button>
      or an <a> tag for clickable items and hyperlinks on a page.`},title:"Components/Button"},v={args:{children:"Button",onClick:()=>alert("Hey, good looking!"),size:"m",variant:"primary"}},w={args:{children:"Follow",size:"s",variant:"secondary"}},C={args:{children:"Discord",size:"l",variantColor:a.purple9}},z=["Primary","Secondary","CustomColors"];export{C as CustomColors,v as Primary,w as Secondary,z as __namedExportsOrder,b as default};
