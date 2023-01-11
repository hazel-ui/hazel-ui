"use strict";(self.webpackChunkhazel_ui=self.webpackChunkhazel_ui||[]).push([[556],{"./src/package/foundation/Typography/stories/Typography.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _a,_b,_c,_d,_e,_f,_g,_h,_j;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Body:function(){return Body},Display:function(){return Display},Headline:function(){return Headline},Label:function(){return Label},Title:function(){return Title},__namedExportsOrder:function(){return __namedExportsOrder}});const meta={title:"Foundation/Typography",component:__webpack_require__("./src/package/foundation/Typography/Typography.tsx").Z,parameters:{componentSubtitle:"This component can be used to render all text-based elements\n      on a page such as headings, paragraphs, captions, and labels. The rendered text \n      will adjust size automatically based on screen size. For usage instructions, \n      refer: https://m3.material.io/styles/typography/applying-type"}};__webpack_exports__.default=meta;const Display={args:{children:"The quick brown fox jumps over the lazy dog.",variant:"display"}},Headline={args:{children:null===(_a=Display.args)||void 0===_a?void 0:_a.children,variant:"headline"}},Title={args:{children:null===(_b=Display.args)||void 0===_b?void 0:_b.children,variant:"title"}},Label={args:{children:null===(_c=Display.args)||void 0===_c?void 0:_c.children,variant:"label"}},Body={args:{children:null===(_d=Display.args)||void 0===_d?void 0:_d.children,variant:"body"}};Display.parameters=Object.assign(Object.assign({},Display.parameters),{storySource:Object.assign({source:'{\n  args: {\n    children: "The quick brown fox jumps over the lazy dog.",\n    variant: "display"\n  }\n}'},null===(_e=Display.parameters)||void 0===_e?void 0:_e.storySource)}),Headline.parameters=Object.assign(Object.assign({},Headline.parameters),{storySource:Object.assign({source:'{\n  args: {\n    children: Display.args?.children,\n    variant: "headline"\n  }\n}'},null===(_f=Headline.parameters)||void 0===_f?void 0:_f.storySource)}),Title.parameters=Object.assign(Object.assign({},Title.parameters),{storySource:Object.assign({source:'{\n  args: {\n    children: Display.args?.children,\n    variant: "title"\n  }\n}'},null===(_g=Title.parameters)||void 0===_g?void 0:_g.storySource)}),Label.parameters=Object.assign(Object.assign({},Label.parameters),{storySource:Object.assign({source:'{\n  args: {\n    children: Display.args?.children,\n    variant: "label"\n  }\n}'},null===(_h=Label.parameters)||void 0===_h?void 0:_h.storySource)}),Body.parameters=Object.assign(Object.assign({},Body.parameters),{storySource:Object.assign({source:'{\n  args: {\n    children: Display.args?.children,\n    variant: "body"\n  }\n}'},null===(_j=Body.parameters)||void 0===_j?void 0:_j.storySource)});const __namedExportsOrder=["Display","Headline","Title","Label","Body"]},"./src/package/foundation/MediaQuery/MediaQuery.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var breakpoints;function createMediaQuery(type,width){return`@media (${type}-width: ${width}px)`}__webpack_require__.d(__webpack_exports__,{z:function(){return MediaQuery}}),function(breakpoints){breakpoints[breakpoints.tablet=600]="tablet",breakpoints[breakpoints.desktop=1440]="desktop"}(breakpoints=breakpoints||(breakpoints={}));const MediaQuery={minWidth:{tablet:createMediaQuery("min",breakpoints.tablet),desktop:createMediaQuery("min",breakpoints.desktop)}}},"./src/package/foundation/Theme/Theme.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return Theme}});const Theme={space:[0,4,8,12,16,24,36,48,60,80,90,120,128],font:{sansSerif:"'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI',\n      'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', \n      'Segoe UI Emoji'",monospace:'"Lucida Console", Monaco, monospace'},fontWeight:{light:300,regular:400,semiBold:600,bold:700}}},"./src/package/foundation/Typography/Typography.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Typography}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),MediaQuery=__webpack_require__("./src/package/foundation/MediaQuery/MediaQuery.ts"),Theme=__webpack_require__("./src/package/foundation/Theme/Theme.ts");const responsiveTokens={display:{large:{lineHeight:"4rem",size:"3.5625rem",letterSpacing:0,weight:400},medium:{lineHeight:"3.25rem",size:"2.8125rem",letterSpacing:0,weight:400},small:{lineHeight:"2.75rem",size:"2.25rem",letterSpacing:0,weight:400}},headline:{large:{lineHeight:"2.5rem",size:"2rem",letterSpacing:0,weight:400},medium:{lineHeight:"2.25rem",size:"1.75rem",letterSpacing:0,weight:400},small:{lineHeight:"2rem",size:"1.5rem",letterSpacing:0,weight:400}},title:{large:{lineHeight:"1.75rem",size:"1.375rem",letterSpacing:0,weight:400},medium:{lineHeight:"1.5rem",size:"1rem",letterSpacing:"0.009375rem",weight:500},small:{lineHeight:"1.25rem",size:"0.875rem",letterSpacing:"0.007143rem",weight:500}},label:{large:{lineHeight:"1.25rem",size:"0.875rem",letterSpacing:"0.007143rem",weight:500},medium:{lineHeight:"1rem",size:"0.75rem",letterSpacing:"0.041667rem",weight:500},small:{lineHeight:"1rem",size:"0.6875rem",letterSpacing:"0.045454rem",weight:500}},body:{large:{lineHeight:"1.5rem",size:"1rem",letterSpacing:"0.03125rem",weight:400},medium:{lineHeight:"1.25rem",size:"0.875rem",letterSpacing:"0.017857rem",weight:400},small:{lineHeight:"1rem",size:"0.75rem",letterSpacing:"0.033333rem",weight:400}}};function applyTypographyMediaQueries(variant){return styled_components_browser_esm.iv`
    line-height: ${responsiveTokens[variant].small.lineHeight};
    font-size: ${responsiveTokens[variant].small.size};
    letter-spacing: ${responsiveTokens[variant].small.letterSpacing};
    font-weight: ${responsiveTokens[variant].small.weight};

    ${MediaQuery.z.minWidth.tablet} {
      line-height: ${responsiveTokens[variant].medium.lineHeight};
      font-size: ${responsiveTokens[variant].medium.size};
      letter-spacing: ${responsiveTokens[variant].medium.letterSpacing};
      font-weight: ${responsiveTokens[variant].medium.weight};
    }

    ${MediaQuery.z.minWidth.desktop} {
      line-height: ${responsiveTokens[variant].large.lineHeight};
      font-size: ${responsiveTokens[variant].large.size};
      letter-spacing: ${responsiveTokens[variant].large.letterSpacing};
      font-weight: ${responsiveTokens[variant].large.weight};
    }
  `}var TextTag;!function(TextTag){TextTag.display="h1",TextTag.headline="h2",TextTag.title="h3",TextTag.label="h4",TextTag.body="p"}(TextTag=TextTag||(TextTag={}));const StyledDiv=styled_components_browser_esm.zo.div`
  ${props=>props.variant&&function applyTypographyVariant(variant){switch(variant){case"display":return styled_components_browser_esm.iv`
        font-family: ${Theme.Q.font.sansSerif};
        ${applyTypographyMediaQueries("display")};
      `;case"headline":return styled_components_browser_esm.iv`
        font-family: ${Theme.Q.font.sansSerif};
        ${applyTypographyMediaQueries("headline")};
      `;case"title":return styled_components_browser_esm.iv`
        font-family: ${Theme.Q.font.sansSerif};
        ${applyTypographyMediaQueries("title")};
      `;case"label":return styled_components_browser_esm.iv`
        font-family: ${Theme.Q.font.sansSerif};
        ${applyTypographyMediaQueries("label")};
      `;case"body":return styled_components_browser_esm.iv`
        font-family: ${Theme.Q.font.sansSerif};
        ${applyTypographyMediaQueries("body")};
      `;default:return null}}(props.variant)};
`;function Typography({color:color="var(--gray12)",variant:variant="body",children:children,sx:sx={}}){return(0,jsx_runtime.jsx)(StyledDiv,Object.assign({variant:variant,as:TextTag[variant],style:Object.assign({color:color},sx)},{children:children}))}try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:{value:"body"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"title"'},{value:'"label"'},{value:'"body"'},{value:'"display"'},{value:'"headline"'}]}},color:{defaultValue:{value:"var(--gray12)"},description:"",name:"color",required:!1,type:{name:"string"}},sx:{defaultValue:{value:"{}"},description:"",name:"sx",required:!1,type:{name:"SxProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/package/foundation/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/package/foundation/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=package-foundation-Typography-stories-Typography-stories.91238878.iframe.bundle.js.map