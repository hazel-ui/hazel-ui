"use strict";(self.webpackChunkhazel_ui=self.webpackChunkhazel_ui||[]).push([[741],{"./src/package/components/Card/stories/Card.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Card_stories}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Typography=__webpack_require__("./src/package/foundation/Typography/Typography.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Color=__webpack_require__("./src/package/foundation/Color/Color.ts"),Shadow=__webpack_require__("./src/package/foundation/Shadow/Shadow.ts");function Card({children:children,width:width,sx:sx}){return(0,jsx_runtime.jsx)(StyledDiv,Object.assign({as:"div",style:Object.assign({width:width},sx)},{children:children}))}const StyledDiv=styled_components_browser_esm.zo.div`
  float: left;
  background-color: ${Color.I.gray8};

  margin: 1rem;
  padding: 1rem;

  border: 1px solid ${Color.I.gray6};
  border-radius: 5px;
  box-shadow: ${Shadow.j.s};

  &:hover {
    box-shadow: ${Shadow.j.m};
    transform: scale(1.01);
  }

  &:active {
    border-color: ${Color.I.gray9};
    box-shadow: ${Shadow.j.s};
    transform: scale(1.01);
  }

  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;
`;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/package/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/package/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var _a,_b,_c;var Card_stories={title:"Components/Card",component:Card,parameters:{componentSubtitle:"This is a simple container with a shadow that \n      can be used to create card-like elements."}};const Basic={args:{width:"200px",sx:{textAlign:"center"},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("img",{src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",alt:"Pikachu",width:100}),(0,jsx_runtime.jsx)(Typography.Z,Object.assign({variant:"title"},{children:"Pikachu"})),(0,jsx_runtime.jsxs)("div",Object.assign({style:{display:"flex",justifyContent:"space-between"}},{children:[(0,jsx_runtime.jsx)(Typography.Z,{children:"Type"}),(0,jsx_runtime.jsx)(Typography.Z,{children:"Electric"})]}))]})}};Basic.parameters=Object.assign(Object.assign({},Basic.parameters),{docs:Object.assign(Object.assign({},null===(_a=Basic.parameters)||void 0===_a?void 0:_a.docs),{source:Object.assign({originalSource:'{\n  args: {\n    width: "200px",\n    sx: {\n      textAlign: "center"\n    },\n    children: <>\n        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="Pikachu" width={100} />\n        <Typography variant="title">Pikachu</Typography>\n        <div style={{\n        display: "flex",\n        justifyContent: "space-between"\n      }}>\n          <Typography>Type</Typography>\n          <Typography>Electric</Typography>\n        </div>\n      </>\n  }\n}'},null===(_c=null===(_b=Basic.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})});const __namedExportsOrder=["Basic"]},"./src/package/foundation/Color/Color.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var Color;__webpack_require__.d(__webpack_exports__,{I:function(){return Color}}),function(Color){Color.blue1="var(--blue1)",Color.blue2="var(--blue2)",Color.blue3="var(--blue3)",Color.blue4="var(--blue4)",Color.blue5="var(--blue5)",Color.blue6="var(--blue6)",Color.blue7="var(--blue7)",Color.blue8="var(--blue8)",Color.blue9="var(--blue9)",Color.blue10="var(--blue10)",Color.blue11="var(--blue11)",Color.blue12="var(--blue12)",Color.gray1="var(--gray1)",Color.gray2="var(--gray2)",Color.gray3="var(--gray3)",Color.gray4="var(--gray4)",Color.gray5="var(--gray5)",Color.gray6="var(--gray6)",Color.gray7="var(--gray7)",Color.gray8="var(--gray8)",Color.gray9="var(--gray9)",Color.gray10="var(--gray10)",Color.gray11="var(--gray11)",Color.gray12="var(--gray12)",Color.green1="var(--green1)",Color.green2="var(--green2)",Color.green3="var(--green3)",Color.green4="var(--green4)",Color.green5="var(--green5)",Color.green6="var(--green6)",Color.green7="var(--green7)",Color.green8="var(--green8)",Color.green9="var(--green9)",Color.green10="var(--green10)",Color.green11="var(--green11)",Color.green12="var(--green12)",Color.orange1="var(--orange1)",Color.orange2="var(--orange2)",Color.orange3="var(--orange3)",Color.orange4="var(--orange4)",Color.orange5="var(--orange5)",Color.orange6="var(--orange6)",Color.orange7="var(--orange7)",Color.orange8="var(--orange8)",Color.orange9="var(--orange9)",Color.orange10="var(--orange10)",Color.orange11="var(--orange11)",Color.orange12="var(--orange12)",Color.purple1="var(--purple1)",Color.purple2="var(--purple2)",Color.purple3="var(--purple3)",Color.purple4="var(--purple4)",Color.purple5="var(--purple5)",Color.purple6="var(--purple6)",Color.purple7="var(--purple7)",Color.purple8="var(--purple8)",Color.purple9="var(--purple9)",Color.purple10="var(--purple10)",Color.purple11="var(--purple11)",Color.purple12="var(--purple12)",Color.red1="var(--red1)",Color.red2="var(--red2)",Color.red3="var(--red3)",Color.red4="var(--red4)",Color.red5="var(--red5)",Color.red6="var(--red6)",Color.red7="var(--red7)",Color.red8="var(--red8)",Color.red9="var(--red9)",Color.red10="var(--red10)",Color.red11="var(--red11)",Color.red12="var(--red12)",Color.yellow1="var(--yellow1)",Color.yellow2="var(--yellow2)",Color.yellow3="var(--yellow3)",Color.yellow4="var(--yellow4)",Color.yellow5="var(--yellow5)",Color.yellow6="var(--yellow6)",Color.yellow7="var(--yellow7)",Color.yellow8="var(--yellow8)",Color.yellow9="var(--yellow9)",Color.yellow10="var(--yellow10)",Color.yellow11="var(--yellow11)",Color.yellow12="var(--yellow12)"}(Color=Color||(Color={}))},"./src/package/foundation/Shadow/Shadow.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var Shadow;__webpack_require__.d(__webpack_exports__,{j:function(){return Shadow}}),function(Shadow){Shadow.xs="0 0px 6px 0 rgba(0, 0, 0, 0.15)",Shadow.s="0 3px 7px 0 rgba(0, 0, 0, 0.1)",Shadow.m="0 4px 8px 0 var(--gray7)",Shadow.l="0 8px 16px 0 rgba(0, 0, 0, 0.2)"}(Shadow=Shadow||(Shadow={}))},"./src/package/foundation/Typography/Typography.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Typography}});var TextTag,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),variants={display:"zbkr781 zbkr780",headline:"zbkr782 zbkr780",title:"zbkr783 zbkr780",label:"zbkr784 zbkr780",body:"zbkr785 zbkr780"};function Typography({color:color="var(--gray12)",variant:variant="body",as:as=TextTag[variant],children:children,sx:sx={}}){const As=as;return(0,jsx_runtime.jsx)(As,Object.assign({className:variants[variant],style:Object.assign({color:color},sx)},{children:children}))}!function(TextTag){TextTag.display="h1",TextTag.headline="h2",TextTag.title="h3",TextTag.label="h4",TextTag.body="p"}(TextTag=TextTag||(TextTag={}));try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"title"'},{value:'"display"'},{value:'"headline"'},{value:'"body"'}]}},as:{defaultValue:{value:"TextTag[variant]"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"p"'}]}},color:{defaultValue:{value:"var(--gray12)"},description:"",name:"color",required:!1,type:{name:"string"}},sx:{defaultValue:{value:"{}"},description:"",name:"sx",required:!1,type:{name:"SxProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/package/foundation/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/package/foundation/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=package-components-Card-stories-Card-stories.05fd9c00.iframe.bundle.js.map