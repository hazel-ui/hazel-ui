import{C as e}from"./Color-D8Giav_X.js";import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{p as o,y as m}from"./styled-components.browser.esm-CNZ_myGK.js";import{S as d}from"./Shadow-BRKr-rku.js";import{T as a}from"./Theme-DQvri-fl.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";function u(r){switch(r){case"s":return o`
        font-size: 0.8rem;
        padding: 0.2rem 0.8rem;
        margin: 0.15rem;
      `;case"m":return o`
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
        margin: 0.15rem;
      `;case"l":return o`
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
        margin: 0.2rem;
      `;default:return null}}const c=m.span`
  font-family: ${a.font.sansSerif};
  font-weight: ${a.fontWeight.bold};

  border-radius: 0.4rem;
  text-align: center;

  &:hover {
    box-shadow: ${d.xs};
  }

  ${r=>u(r.size)};
`;function n({size:r="s",children:t,color:s=e.gray1,backgroundColor:l=e.gray11}){return i.jsx(c,{size:r,as:"span",style:{backgroundColor:l,color:s},children:t})}n.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"s" | "m" | "l"',elements:[{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:"",defaultValue:{value:'"s"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:"Color | string",elements:[{name:"Color"},{name:"string"}]},description:"",defaultValue:{value:"Color.gray1",computed:!0}},backgroundColor:{required:!1,tsType:{name:"union",raw:"Color | string",elements:[{name:"Color"},{name:"string"}]},description:"",defaultValue:{value:"Color.gray11",computed:!0}}}};const w={argTypes:{backgroundColor:{control:"color"},color:{control:"color"}},component:n,parameters:{componentSubtitle:`This component can be used to render badge like
    elements on a page such as labels, categories, and tags. It renders
    as a <span> tag by default.`},title:"Components/Badge"},z={args:{children:"Small",size:"s"}},S={args:{backgroundColor:e.blue1,children:"Medium",color:e.blue11,size:"m"}},x={args:{backgroundColor:e.yellow10,children:"Large",color:e.yellow1,size:"l"}},T=["Small","Medium","Large"];export{x as Large,S as Medium,z as Small,T as __namedExportsOrder,w as default};
