(self.webpackChunkhazel_ui=self.webpackChunkhazel_ui||[]).push([[372],{"./node_modules/@storybook/addon-docs/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-docs/dist sync recursive",module.exports=webpackEmptyContext},"./src/package/foundation/Box/Box.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{x:function(){return Box}});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const styledSystemStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.cp),Box=styled_components__WEBPACK_IMPORTED_MODULE_1__.zo.div`
  ${styledSystemStyles}
`;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/package/foundation/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/package/foundation/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/package/foundation/Icon/Icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return Icon}});var _styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/ChevronDown/ChevronDown.esm.js"),_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/ChevronRight/ChevronRight.esm.js"),_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/InfoCircle/InfoCircle.esm.js"),_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/Search/Search.esm.js"),_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/Sort/Sort.esm.js"),_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/SortDown/SortDown.esm.js"),_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/SortUp/SortUp.esm.js"),_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/X/X.esm.js"),_styled_icons_boxicons_solid__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@styled-icons/boxicons-solid/Circle/Circle.esm.js");const Icon={ChevronDown:_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_0__._,ChevronRight:_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_1__._,InfoCircle:_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_2__.Z,Search:_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_3__.o,Sort:_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_4__.P,SortDown:_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_5__.l,SortUp:_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_6__.N,X:_styled_icons_boxicons_regular__WEBPACK_IMPORTED_MODULE_7__.X,Circle:_styled_icons_boxicons_solid__WEBPACK_IMPORTED_MODULE_8__.C}},"./src/package/components/Slider/stories/Slider.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page},default:function(){return Slider_stories}});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),es=__webpack_require__("./node_modules/rc-slider/es/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Box=__webpack_require__("./src/package/foundation/Box/Box.tsx"),Icon=__webpack_require__("./src/package/foundation/Icon/Icon.tsx"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Slider(_a){var{min:min=0,max:max=30,width:width="100%"}=_a,rest=__rest(_a,["min","max","width"]);return(0,jsx_runtime.jsx)(Styles,{children:(0,jsx_runtime.jsx)(Container,Object.assign({width:width},{children:(0,jsx_runtime.jsx)(es.ZP,Object.assign({handle:_a=>{var{dragging:dragging}=_a,restProps=__rest(_a,["dragging"]);return(0,jsx_runtime.jsx)(es.HH,Object.assign({dragging:dragging.toString()},restProps,{children:(0,jsx_runtime.jsx)(Box.x,Object.assign({display:"flex",justifyContent:"center",marginTop:"10px"},{children:(0,jsx_runtime.jsx)(Icon.J.Circle,{width:"8px"})}))}))},handleStyle:{borderColor:"white",height:32,width:32,marginTop:-14,boxShadow:"0 2px 6px 0 rgba(0, 0, 0, 0.28)"},trackStyle:{backgroundColor:"black"},min:min,max:max},rest))}))})}const Container=styled_components_browser_esm.zo.div`
  width: ${props=>props.width};
`,Styles=styled_components_browser_esm.zo.div`
  .rc-slider {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    touch-action: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: #e9e9e9;
    height: 4px;
    border-radius: 6px;
  }
  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 4px;
    border-radius: 6px;
    background-color: #abe2fb;
  }
  .rc-slider-handle {
    position: absolute;
    width: 14px;
    height: 14px;
    cursor: pointer;
    cursor: -webkit-grab;
    margin-top: -5px;
    cursor: grab;
    border-radius: 50%;
    border: solid 2px #96dbfa;
    background-color: #fff;
    touch-action: pan-x;
  }
  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: #57c5f7;
    box-shadow: 0 0 0 5px #96dbfa;
  }
  .rc-slider-handle:focus {
    outline: none;
  }
  .rc-slider-handle-click-focused:focus {
    border-color: #96dbfa;
    box-shadow: unset;
  }
  .rc-slider-handle:hover {
    border-color: #57c5f7;
  }
  .rc-slider-handle:active {
    border-color: #57c5f7;
    box-shadow: 0 0 5px #57c5f7;
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .rc-slider-mark {
    position: absolute;
    top: 18px;
    left: 0;
    width: 100%;
    font-size: 12px;
  }
  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: #999;
  }
  .rc-slider-mark-text-active {
    color: #666;
  }
  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
  .rc-slider-dot {
    position: absolute;
    bottom: -2px;
    margin-left: -4px;
    width: 8px;
    height: 8px;
    border: 2px solid #e9e9e9;
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }
  .rc-slider-dot-active {
    border-color: #96dbfa;
  }
  .rc-slider-dot-reverse {
    margin-right: -4px;
  }
  .rc-slider-disabled {
    background-color: #e9e9e9;
  }
  .rc-slider-disabled .rc-slider-track {
    background-color: #ccc;
  }
  .rc-slider-disabled .rc-slider-handle,
  .rc-slider-disabled .rc-slider-dot {
    border-color: #ccc;
    box-shadow: none;
    background-color: #fff;
    cursor: not-allowed;
  }
  .rc-slider-disabled .rc-slider-mark-text,
  .rc-slider-disabled .rc-slider-dot {
    cursor: not-allowed !important;
  }
  .rc-slider-vertical {
    width: 14px;
    height: 100%;
    padding: 0 5px;
  }
  .rc-slider-vertical .rc-slider-rail {
    height: 100%;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-track {
    left: 5px;
    bottom: 0;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-handle {
    margin-left: -5px;
    touch-action: pan-y;
  }
  .rc-slider-vertical .rc-slider-mark {
    top: 0;
    left: 18px;
    height: 100%;
  }
  .rc-slider-vertical .rc-slider-step {
    height: 100%;
    width: 4px;
  }
  .rc-slider-vertical .rc-slider-dot {
    left: 2px;
    margin-bottom: -4px;
  }
  .rc-slider-vertical .rc-slider-dot:first-child {
    margin-bottom: -4px;
  }
  .rc-slider-vertical .rc-slider-dot:last-child {
    margin-bottom: -4px;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    display: block !important;
    animation-play-state: paused;
  }
  .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
  .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
    animation-name: rcSliderTooltipZoomDownIn;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
    animation-name: rcSliderTooltipZoomDownOut;
    animation-play-state: running;
  }
  .rc-slider-tooltip-zoom-down-enter,
  .rc-slider-tooltip-zoom-down-appear {
    transform: scale(0, 0);
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .rc-slider-tooltip-zoom-down-leave {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  @keyframes rcSliderTooltipZoomDownIn {
    0% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
    100% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
  }
  @keyframes rcSliderTooltipZoomDownOut {
    0% {
      transform-origin: 50% 100%;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform-origin: 50% 100%;
      transform: scale(0, 0);
    }
  }
  .rc-slider-tooltip {
    position: absolute;
    left: -9999px;
    top: -9999px;
    visibility: visible;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .rc-slider-tooltip-hidden {
    display: none;
  }
  .rc-slider-tooltip-placement-top {
    padding: 4px 0 8px 0;
  }
  .rc-slider-tooltip-inner {
    padding: 6px 2px;
    min-width: 24px;
    height: 24px;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: #6c6c6c;
    border-radius: 6px;
    box-shadow: 0 0 4px #d9d9d9;
  }
  .rc-slider-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
    bottom: 4px;
    left: 50%;
    margin-left: -4px;
    border-width: 4px 4px 0;
    border-top-color: #6c6c6c;
  }
`;try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/package/components/Slider/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/package/components/Slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}function EgSingleHandle(){const[rangeVal,setRangeVal]=(0,react.useState)(0);return(0,jsx_runtime.jsxs)(Box.x,Object.assign({display:"flex"},{children:[(0,jsx_runtime.jsx)(Box.x,Object.assign({marginRight:"2rem"},{children:rangeVal})),(0,jsx_runtime.jsx)(Slider,{onChange:value=>setRangeVal(value),min:10,max:20,width:"200px"})]}))}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Atoms/Slider",component:Slider,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",a:"a",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Atoms/Slider",component:Slider}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"slider",children:"Slider"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A numerical range input slider for interactive tables, calculators and\nforms."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.img,{src:"",alt:""})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The following props are available in addition to ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/react-component/slider#common-api",target:"_blank",rel:"nofollow noopener noreferrer",children:"rc-slider props"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Slider}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#single-handle",children:"Single handle"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single-handle",children:"Single handle"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:'import { useState } from "react";\nimport { Layout, Slider } from "hazel-ui";\n\nexport function Component() {\n  const [rangeVal, setRangeVal] = useState<number>(0);\n  return (\n    <Layout display="flex">\n      <Layout marginRight="2rem">{rangeVal}</Layout>\n      <Slider\n        onChange={(value: number) => setRangeVal(value)}\n        min={10}\n        max={20}\n        width="200px"\n      />\n    </Layout>\n  );\n}\n'})}),"\n",(0,jsx_runtime.jsx)(EgSingleHandle,{})]})}}};var Slider_stories=componentMeta}}]);
//# sourceMappingURL=package-components-Slider-stories-Slider-stories-mdx.2f264690.iframe.bundle.js.map