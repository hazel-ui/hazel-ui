"use strict";(self.webpackChunkhazel_ui=self.webpackChunkhazel_ui||[]).push([[598],{"./src/package/components/Button/stories/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:function(){return Custom},Large:function(){return Large},Primary:function(){return Primary},Secondary:function(){return Secondary},Small:function(){return Small},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Color=__webpack_require__("./src/package/foundation/Color/Color.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Theme=__webpack_require__("./src/package/foundation/Theme/Theme.ts");const StyledButton=styled_components_browser_esm.zo.button`
  ${props=>function applyButtonVariant(variant,variantColor=Color.I.blue9){switch(variant){case"primary":return styled_components_browser_esm.iv`
        color: white;
        background-color: ${variantColor};
        border: 1px solid transparent;
      `;case"secondary":return styled_components_browser_esm.iv`
        color: ${variantColor};
        background-color: transparent;
        border: 1px solid ${variantColor};
      `;default:return null}}(props.variant,props.variantColor)};
  ${props=>function applyButtonSize(size){switch(size){case"small":return styled_components_browser_esm.iv`
        font-size: 13px;
        padding: 6px 12px;
        font-weight: ${Theme.Q.fontWeight.light};
      `;case"medium":return styled_components_browser_esm.iv`
        font-size: 14px;
        padding: 11px 20px;
        font-weight: ${Theme.Q.fontWeight.semiBold};
      `;case"large":return styled_components_browser_esm.iv`
        font-size: 16px;
        padding: 12px 24px;
        font-weight: ${Theme.Q.fontWeight.bold};
      `;default:return null}}(props.size)};
  font-family: ${Theme.Q.font.sansSerif};

  display: flex;
  border-radius: 0.5rem;
  margin: 1rem;
  cursor: pointer;

  transition: transform 0.3s;
  box-shadow: 0px 2px 8px -1px rgba(18, 22, 33, 0.04);
  &:hover {
    box-shadow: 0px 4px 20px -2px rgba(18, 22, 33, 0.12);
    transform: translate(0, -0.1rem);
  }
`;function Button({size:size="medium",variant:variant="primary",variantColor:variantColor,children:children}){return(0,jsx_runtime.jsx)(StyledButton,Object.assign({size:size,variant:variant,as:"button",variantColor:variantColor},{children:children}))}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"large"'},{value:'"medium"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"secondary"'}]}},variantColor:{defaultValue:null,description:"",name:"variantColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/package/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/package/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var _a,_b,_c,_d,_e,Button_stories={title:"Atoms/Button",component:Button,argTypes:{color:{control:"color"},backgroundColor:{control:"color"}},parameters:{componentSubtitle:"This component can be used to render a <button> or an <a> tag for clickable items and hyperlinks on a page."}};const Template=args=>(0,jsx_runtime.jsx)(Button,Object.assign({},args)),Primary=Template.bind({});Primary.args={children:"Button"};const Secondary=Template.bind({});Secondary.args={variant:"secondary",children:"Click me",onClick:()=>{alert("Hey, good looking!")}};const Small=Template.bind({});Small.args={variant:"secondary",size:"small",children:"Follow"};const Large=Template.bind({});Large.args={size:"large",children:"Button"};const Custom=Template.bind({});Custom.args={variantColor:Color.I.gray12,children:"Awesome",size:"large"},Primary.parameters=Object.assign(Object.assign({},Primary.parameters),{storySource:Object.assign({source:"args => <Button {...args} />"},null===(_a=Primary.parameters)||void 0===_a?void 0:_a.storySource)}),Secondary.parameters=Object.assign(Object.assign({},Secondary.parameters),{storySource:Object.assign({source:"args => <Button {...args} />"},null===(_b=Secondary.parameters)||void 0===_b?void 0:_b.storySource)}),Small.parameters=Object.assign(Object.assign({},Small.parameters),{storySource:Object.assign({source:"args => <Button {...args} />"},null===(_c=Small.parameters)||void 0===_c?void 0:_c.storySource)}),Large.parameters=Object.assign(Object.assign({},Large.parameters),{storySource:Object.assign({source:"args => <Button {...args} />"},null===(_d=Large.parameters)||void 0===_d?void 0:_d.storySource)}),Custom.parameters=Object.assign(Object.assign({},Custom.parameters),{storySource:Object.assign({source:"args => <Button {...args} />"},null===(_e=Custom.parameters)||void 0===_e?void 0:_e.storySource)});const __namedExportsOrder=["Primary","Secondary","Small","Large","Custom"]},"./src/package/foundation/Color/Color.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var Color;__webpack_require__.d(__webpack_exports__,{I:function(){return Color}}),function(Color){Color.blue1="var(--blue1)",Color.blue2="var(--blue2)",Color.blue3="var(--blue3)",Color.blue4="var(--blue4)",Color.blue5="var(--blue5)",Color.blue6="var(--blue6)",Color.blue7="var(--blue7)",Color.blue8="var(--blue8)",Color.blue9="var(--blue9)",Color.blue10="var(--blue10)",Color.blue11="var(--blue11)",Color.blue12="var(--blue12)",Color.gray1="var(--gray1)",Color.gray2="var(--gray2)",Color.gray3="var(--gray3)",Color.gray4="var(--gray4)",Color.gray5="var(--gray5)",Color.gray6="var(--gray6)",Color.gray7="var(--gray7)",Color.gray8="var(--gray8)",Color.gray9="var(--gray9)",Color.gray10="var(--gray10)",Color.gray11="var(--gray11)",Color.gray12="var(--gray12)",Color.green1="var(--green1)",Color.green2="var(--green2)",Color.green3="var(--green3)",Color.green4="var(--green4)",Color.green5="var(--green5)",Color.green6="var(--green6)",Color.green7="var(--green7)",Color.green8="var(--green8)",Color.green9="var(--green9)",Color.green10="var(--green10)",Color.green11="var(--green11)",Color.green12="var(--green12)",Color.orange1="var(--orange1)",Color.orange2="var(--orange2)",Color.orange3="var(--orange3)",Color.orange4="var(--orange4)",Color.orange5="var(--orange5)",Color.orange6="var(--orange6)",Color.orange7="var(--orange7)",Color.orange8="var(--orange8)",Color.orange9="var(--orange9)",Color.orange10="var(--orange10)",Color.orange11="var(--orange11)",Color.orange12="var(--orange12)",Color.purple1="var(--purple1)",Color.purple2="var(--purple2)",Color.purple3="var(--purple3)",Color.purple4="var(--purple4)",Color.purple5="var(--purple5)",Color.purple6="var(--purple6)",Color.purple7="var(--purple7)",Color.purple8="var(--purple8)",Color.purple9="var(--purple9)",Color.purple10="var(--purple10)",Color.purple11="var(--purple11)",Color.purple12="var(--purple12)",Color.red1="var(--red1)",Color.red2="var(--red2)",Color.red3="var(--red3)",Color.red4="var(--red4)",Color.red5="var(--red5)",Color.red6="var(--red6)",Color.red7="var(--red7)",Color.red8="var(--red8)",Color.red9="var(--red9)",Color.red10="var(--red10)",Color.red11="var(--red11)",Color.red12="var(--red12)",Color.yellow1="var(--yellow1)",Color.yellow2="var(--yellow2)",Color.yellow3="var(--yellow3)",Color.yellow4="var(--yellow4)",Color.yellow5="var(--yellow5)",Color.yellow6="var(--yellow6)",Color.yellow7="var(--yellow7)",Color.yellow8="var(--yellow8)",Color.yellow9="var(--yellow9)",Color.yellow10="var(--yellow10)",Color.yellow11="var(--yellow11)",Color.yellow12="var(--yellow12)"}(Color=Color||(Color={}))},"./src/package/foundation/Theme/Theme.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return Theme}});const Theme={space:[0,4,8,12,16,24,36,48,60,80,90,120,128],font:{serif:'"Lora", "Times New Roman", Times, serif',sansSerif:'"Open Sans", Helvetica, Arial, sans-serif',monospace:'"Lucida Console", Monaco, monospace'},fontWeight:{light:300,regular:400,semiBold:600,bold:700}}}}]);
//# sourceMappingURL=package-components-Button-stories-Button-stories.2dab78cf.iframe.bundle.js.map