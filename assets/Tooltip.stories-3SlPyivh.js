import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{p as n,y as h}from"./styled-components.browser.esm-CNZ_myGK.js";import{S as $}from"./Shadow-BRKr-rku.js";import{T as v}from"./Theme-HiODj44g.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";function w(e,s,o){const r="2.6rem";switch(s){case"top":return n`
        top: calc(${r} * -1);

        /* bottom arrow */
        &::before {
          top: 100%;
          border-top-color: ${o};
        }
      `;case"right":return n`
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
      `;case"bottom":return n`
        bottom: calc(${r} * -1.3);

        /* top arrow */
        &::before {
          bottom: 100%;
          border-bottom-color: ${o};
        }
      `;case"left":return n`
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
      `;default:return null}}function i({arrowSize:e="0.4rem",children:s,content:o="",direction:r="right",open:g=!1,tooltipBackground:b="#2F3545",tooltipColor:T="#FFFFFF",...y}){return t.jsxs(x,{children:[s,t.jsx(F,{arrowSize:e,direction:r,tooltipBackground:b,tooltipColor:T,open:g,...y,children:o})]})}const x=h.div`
  position: relative;
  display: inline-block;

  cursor: default;

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`,F=h.span`
  position: absolute;
  border-radius: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 0.3rem;
  box-shadow: ${$.s};

  background-color: ${e=>e.tooltipBackground};
  color: ${e=>e.tooltipColor};

  font-family: ${v.font.sansSerif};
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
  ${e=>w(e.arrowSize,e.direction,e.tooltipBackground)}
`;i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{arrowSize:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"0.4rem"',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'""',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},tooltipBackground:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#2F3545"',computed:!1}},tooltipColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#FFFFFF"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:""}}};const z={argTypes:{tooltipBackground:{control:"color"},tooltipColor:{control:"color"}},component:i,title:"Atoms/Tooltip"},l={args:{children:"Hover to see tooltip",content:"Tooltip text"}},a={render:()=>t.jsxs("div",{style:{display:"flex",gap:"2rem",justifyContent:"center",margin:"2rem"},children:[t.jsx(i,{content:"Hello from the other side!",direction:"top",children:"Top"}),t.jsx(i,{content:"Hello from the other side!",direction:"right",children:"Right"}),t.jsx(i,{content:"Hello from the other side!",direction:"bottom",children:"Bottom"}),t.jsx(i,{content:"Hello from the other side!",direction:"left",children:"Left"})]})};var c,d,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Hover to see tooltip",
    content: "Tooltip text"
  }
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,f,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    margin: "2rem"
  }}>
      <Tooltip content="Hello from the other side!" direction="top">
        Top
      </Tooltip>
      <Tooltip content="Hello from the other side!" direction="right">
        Right
      </Tooltip>
      <Tooltip content="Hello from the other side!" direction="bottom">
        Bottom
      </Tooltip>
      <Tooltip content="Hello from the other side!" direction="left">
        Left
      </Tooltip>
    </div>
}`,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const D=["Default","Directions"];export{l as Default,a as Directions,D as __namedExportsOrder,z as default};
