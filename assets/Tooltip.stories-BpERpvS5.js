import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{p as a,y as n}from"./styled-components.browser.esm-CNZ_myGK.js";import{S as f}from"./Shadow-BRKr-rku.js";import{T as m}from"./Theme-DQvri-fl.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";function u(e,l,o){const r="2.6rem";switch(l){case"top":return a`
        top: calc(${r} * -1);

        /* bottom arrow */
        &::before {
          top: 100%;
          border-top-color: ${o};
        }
      `;case"right":return a`
        left: calc(100% + ${r} / 2);
        top: 50%;
        transform: translateX(0) translateY(-50%);

        /* left arrow */
        &::before {
          left: calc(${e} * -1);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-right-color: ${o};
        }
      `;case"bottom":return a`
        bottom: calc(${r} * -1.3);

        /* top arrow */
        &::before {
          bottom: 100%;
          border-bottom-color: ${o};
        }
      `;case"left":return a`
        left: auto;
        right: calc(100% + ${r} / 2);
        top: 50%;
        transform: translateX(0) translateY(-50%);

        /* right arrow */
        &::before {
          left: auto;
          right: calc(${e} * -2);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-left-color: ${o};
        }
      `;default:return null}}function i({arrowSize:e="0.4rem",children:l,content:o="",direction:r="right",open:s=!1,tooltipBackground:c="#2F3545",tooltipColor:d="#FFFFFF",...p}){return t.jsxs(h,{children:[l,t.jsx(b,{arrowSize:e,direction:r,tooltipBackground:c,tooltipColor:d,open:s,...p,children:o})]})}const h=n.div`
  position: relative;
  display: inline-block;

  cursor: default;

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`,b=n.span`
  position: absolute;
  border-radius: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 0.3rem;
  box-shadow: ${f.s};

  background-color: ${e=>e.tooltipBackground};
  color: ${e=>e.tooltipColor};

  font-family: ${m.font.sansSerif};
  font-size: 14px;
  line-height: 1;
  z-index: 1;
  ${e=>!e.width&&"white-space: nowrap;"};
  ${e=>e.width&&"text-align: center;"};

  visibility: ${e=>e.open?"visible":"hidden"};
  opacity: ${e=>e.open?1:0};
  transition: opacity 0.5s;

  /* border triangles */
  &::before {
    position: absolute;
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    pointer-events: none;
    border-width: ${e=>e.arrowSize};
    margin-left: ${e=>`calc(${e.arrowSize} * -1)`};
  }

  ${e=>e.width&&`width: ${e.width};`};
  ${e=>u(e.arrowSize,e.direction,e.tooltipBackground)}
`;i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{arrowSize:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"0.4rem"',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'""',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},tooltipBackground:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#2F3545"',computed:!1}},tooltipColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FFFFFF"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:""}}};const x={argTypes:{tooltipBackground:{control:"color"},tooltipColor:{control:"color"}},component:i,title:"Atoms/Tooltip"},F={args:{children:"Hover to see tooltip",content:"Tooltip text"}},j={render:()=>t.jsxs("div",{style:{display:"flex",gap:"2rem",justifyContent:"center",margin:"2rem"},children:[t.jsx(i,{content:"Hello from the other side!",direction:"top",children:"Top"}),t.jsx(i,{content:"Hello from the other side!",direction:"right",children:"Right"}),t.jsx(i,{content:"Hello from the other side!",direction:"bottom",children:"Bottom"}),t.jsx(i,{content:"Hello from the other side!",direction:"left",children:"Left"})]})},q=["Default","Directions"];export{F as Default,j as Directions,q as __namedExportsOrder,x as default};
