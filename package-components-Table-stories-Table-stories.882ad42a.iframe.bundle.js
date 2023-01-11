"use strict";(self.webpackChunkhazel_ui=self.webpackChunkhazel_ui||[]).push([[416],{"./src/package/components/Table/stories/Table.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},CustomCells:function(){return CustomCells},ExpandableRows:function(){return ExpandableRows},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Table_stories}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChevronDown_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/ChevronDown/ChevronDown.esm.js"),ChevronRight_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/ChevronRight/ChevronRight.esm.js"),InfoCircle_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/InfoCircle/InfoCircle.esm.js"),Search_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/Search/Search.esm.js"),Sort_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/Sort/Sort.esm.js"),SortDown_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/SortDown/SortDown.esm.js"),SortUp_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/SortUp/SortUp.esm.js"),X_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-regular/X/X.esm.js"),Circle_esm=__webpack_require__("./node_modules/@styled-icons/boxicons-solid/Circle/Circle.esm.js");const Icon={ChevronDown:ChevronDown_esm._,ChevronRight:ChevronRight_esm._,InfoCircle:InfoCircle_esm.Z,Search:Search_esm.o,Sort:Sort_esm.P,SortDown:SortDown_esm.l,SortUp:SortUp_esm.N,X:X_esm.X,Circle:Circle_esm.C};var react=__webpack_require__("./node_modules/react/index.js"),react_table=__webpack_require__("./node_modules/react-table/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Color=__webpack_require__("./src/package/foundation/Color/Color.ts"),MediaQuery=__webpack_require__("./src/package/foundation/MediaQuery/MediaQuery.ts"),Theme=__webpack_require__("./src/package/foundation/Theme/Theme.ts");const TableContainer=styled_components_browser_esm.zo.table`
  /* enable scroll on small width */
  display: block;
  overflow: auto;
  border-collapse: collapse;

  /* width */
  ::-webkit-scrollbar {
    height: 0.6rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${Color.I.gray2};
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: ${Color.I.gray8};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Color.I.gray9};
  }
`,Th=styled_components_browser_esm.zo.th`
  font-family: ${Theme.Q.font.sansSerif};
  font-weight: ${Theme.Q.fontWeight.bold};
  line-height: 1.29;

  height: 100px;
  min-width: 142px;
  padding: 0px 27px;
  background-color: ${Color.I.gray8};
  border-bottom: 1px solid rgba(230, 230, 250, 0.7);

  font-size: 0.9rem;
  text-align: right;

  &:nth-of-type(1) {
    font-size: 1.125rem;
    text-align: left;

    /* make first column header sticky */
    left: 0;
    position: sticky;

    box-shadow: 6px 0px 25px 0px ${Color.I.gray3};
  }

  ${MediaQuery.z.minWidth.tablet} {
    &:nth-of-type(1) {
      box-shadow: none;
    }
  }
`,Td=styled_components_browser_esm.zo.td`
  font-family: ${Theme.Q.font.sansSerif};
  padding: 20px 27px;

  font-weight: ${Theme.Q.fontWeight.regular};
  text-align: right;

  &:nth-of-type(1) {
    font-weight: ${Theme.Q.fontWeight.bold};
    text-align: left;

    /* make first column body sticky */
    left: 0;
    position: sticky;

    box-shadow: 6px 0px 25px 0px ${Color.I.gray3};
    clip-path: inset(0px -30px 0px 0px);
  }

  ${MediaQuery.z.minWidth.tablet} {
    &:nth-of-type(1) {
      box-shadow: none;
      clip-path: none;
    }
  }
`,Tr=styled_components_browser_esm.zo.tr`
  &:nth-of-type(odd) td {
    background-color: ${Color.I.gray3};
  }

  &:nth-of-type(even) td {
    background-color: ${Color.I.gray4};
  }
`,TrHead=styled_components_browser_esm.zo.tr`
  padding: 0px 27px;
`;function processColumns(columns,data){let columnIndex=0;for(let td in data[0])"number"!=typeof data[0][td]||"Cell"in columns[columnIndex]||(columns[columnIndex].Cell=props=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.value.toLocaleString("en-IN")})),columnIndex++;return columns}try{processColumns.displayName="processColumns",processColumns.__docgenInfo={description:"If data in a column is numeric and no custom Cell render function\nis provided then add a custom Cell render function to format the numbers",displayName:"processColumns",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/package/components/Table/utils.tsx#processColumns"]={docgenInfo:processColumns.__docgenInfo,name:"processColumns",path:"src/package/components/Table/utils.tsx#processColumns"})}catch(__react_docgen_typescript_loader_error){}function Table(props){const data=(0,react.useMemo)((()=>props.data),[props.data]),columns=(0,react.useMemo)((()=>processColumns(props.columns,props.data)),[props.columns,props.data]),{getTableProps:getTableProps,getTableBodyProps:getTableBodyProps,headerGroups:headerGroups,rows:rows,prepareRow:prepareRow}=(0,react_table.useTable)({columns:columns,data:data,disableSortBy:!props.enableSorting},react_table.useSortBy,react_table.useExpanded);return(0,jsx_runtime.jsxs)(TableContainer,Object.assign({},getTableProps(),{children:[!props.hideHeaders&&(0,jsx_runtime.jsx)("thead",{children:headerGroups.map((headerGroup=>(0,jsx_runtime.jsx)(TrHead,Object.assign({},headerGroup.getHeaderGroupProps(),{children:headerGroup.headers.map((column=>(0,jsx_runtime.jsxs)(Th,Object.assign({},column.getHeaderProps(column.getSortByToggleProps()),{children:[column.render("Header"),(0,jsx_runtime.jsx)("span",{children:props.enableSorting?column.isSorted?column.isSortedDesc?(0,jsx_runtime.jsx)(Icon.SortDown,{size:"1rem"}):(0,jsx_runtime.jsx)(Icon.SortUp,{size:"1rem"}):(0,jsx_runtime.jsx)(Icon.Sort,{height:"1rem"}):null})]}))))}))))}),(0,jsx_runtime.jsx)("tbody",Object.assign({},getTableBodyProps(),{children:rows.map((row=>(prepareRow(row),(0,jsx_runtime.jsx)(Tr,Object.assign({},row.getRowProps(),{children:row.cells.map((cell=>(0,jsx_runtime.jsx)(Td,Object.assign({},cell.getCellProps(),{children:cell.render("Cell")}))))})))))}))]}))}Table.defaultProps={enableSorting:!1,hideHeaders:!1};try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Column<{}>[]"}},enableSorting:{defaultValue:{value:"false"},description:"",name:"enableSorting",required:!1,type:{name:"boolean"}},hideHeaders:{defaultValue:{value:"false"},description:"",name:"hideHeaders",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/package/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/package/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var _a,_b,_c,Table_stories={title:"Atoms/Table",component:Table,parameters:{componentSubtitle:"This component can be used to render a <table> element to display a data table. Optionally, column headers can be hidden and sorting can enabled for each column individually. The render function for each column can be customized and every row can be made expandable to provide additional data."}};const Template=args=>(0,jsx_runtime.jsx)(Table,Object.assign({},args)),Basic=Template.bind({});Basic.args={columns:[{Header:"Title",accessor:"col0"},{Header:"Header 1",accessor:"col1"},{Header:"Header 2",accessor:"col2"},{Header:"Header 3",accessor:"col3"},{Header:"Header 4",accessor:"col4"},{Header:"Header 5",accessor:"col5"}],data:[{col0:"Label 1",col1:.1,col2:1.2,col3:2.3,col4:3.4,col5:4.5},{col0:"Label 2",col1:11.22,col2:922.3345,col3:22.33,col4:22.335,col5:123456.33}]};const CustomCells=Template.bind({});CustomCells.args={columns:[{Header:"Title",accessor:"col0"},{Header:"Header 1",accessor:"col1",Cell:props=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["$ ",props.value]})}],data:[{col0:"Label 1",col1:30.1},{col0:"Label 2",col1:20}]};const ExpandableRows=Template.bind({});ExpandableRows.args={columns:[{Header:"Column 1",accessor:"col1",Cell:props=>props.row.canExpand?(0,jsx_runtime.jsxs)("span",Object.assign({},props.row.getToggleRowExpandedProps({style:{}}),{children:[props.row.isExpanded?(0,jsx_runtime.jsx)(Icon.ChevronDown,{size:"1.3rem"}):(0,jsx_runtime.jsx)(Icon.ChevronRight,{size:"1.3rem"})," "," ",props.value]})):(0,jsx_runtime.jsx)("span",Object.assign({style:{paddingLeft:2*props.row.depth+"rem"}},{children:props.value}))},{Header:"Column 2",accessor:"col2"}],data:[{col1:"Hello",col2:30.1,subRows:[{col1:"Jan",col2:5.2},{col1:"Feb",col2:6}]},{col1:"react-table",col2:20,subRows:[{col1:"Jan",col2:5},{col1:"Feb",col2:6}]},{col1:"whatever",col2:100}]},Basic.parameters=Object.assign(Object.assign({},Basic.parameters),{storySource:Object.assign({source:"args => <Table {...args} />"},null===(_a=Basic.parameters)||void 0===_a?void 0:_a.storySource)}),CustomCells.parameters=Object.assign(Object.assign({},CustomCells.parameters),{storySource:Object.assign({source:"args => <Table {...args} />"},null===(_b=CustomCells.parameters)||void 0===_b?void 0:_b.storySource)}),ExpandableRows.parameters=Object.assign(Object.assign({},ExpandableRows.parameters),{storySource:Object.assign({source:"args => <Table {...args} />"},null===(_c=ExpandableRows.parameters)||void 0===_c?void 0:_c.storySource)});const __namedExportsOrder=["Basic","CustomCells","ExpandableRows"]},"./src/package/foundation/Color/Color.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var Color;__webpack_require__.d(__webpack_exports__,{I:function(){return Color}}),function(Color){Color.blue1="var(--blue1)",Color.blue2="var(--blue2)",Color.blue3="var(--blue3)",Color.blue4="var(--blue4)",Color.blue5="var(--blue5)",Color.blue6="var(--blue6)",Color.blue7="var(--blue7)",Color.blue8="var(--blue8)",Color.blue9="var(--blue9)",Color.blue10="var(--blue10)",Color.blue11="var(--blue11)",Color.blue12="var(--blue12)",Color.gray1="var(--gray1)",Color.gray2="var(--gray2)",Color.gray3="var(--gray3)",Color.gray4="var(--gray4)",Color.gray5="var(--gray5)",Color.gray6="var(--gray6)",Color.gray7="var(--gray7)",Color.gray8="var(--gray8)",Color.gray9="var(--gray9)",Color.gray10="var(--gray10)",Color.gray11="var(--gray11)",Color.gray12="var(--gray12)",Color.green1="var(--green1)",Color.green2="var(--green2)",Color.green3="var(--green3)",Color.green4="var(--green4)",Color.green5="var(--green5)",Color.green6="var(--green6)",Color.green7="var(--green7)",Color.green8="var(--green8)",Color.green9="var(--green9)",Color.green10="var(--green10)",Color.green11="var(--green11)",Color.green12="var(--green12)",Color.orange1="var(--orange1)",Color.orange2="var(--orange2)",Color.orange3="var(--orange3)",Color.orange4="var(--orange4)",Color.orange5="var(--orange5)",Color.orange6="var(--orange6)",Color.orange7="var(--orange7)",Color.orange8="var(--orange8)",Color.orange9="var(--orange9)",Color.orange10="var(--orange10)",Color.orange11="var(--orange11)",Color.orange12="var(--orange12)",Color.purple1="var(--purple1)",Color.purple2="var(--purple2)",Color.purple3="var(--purple3)",Color.purple4="var(--purple4)",Color.purple5="var(--purple5)",Color.purple6="var(--purple6)",Color.purple7="var(--purple7)",Color.purple8="var(--purple8)",Color.purple9="var(--purple9)",Color.purple10="var(--purple10)",Color.purple11="var(--purple11)",Color.purple12="var(--purple12)",Color.red1="var(--red1)",Color.red2="var(--red2)",Color.red3="var(--red3)",Color.red4="var(--red4)",Color.red5="var(--red5)",Color.red6="var(--red6)",Color.red7="var(--red7)",Color.red8="var(--red8)",Color.red9="var(--red9)",Color.red10="var(--red10)",Color.red11="var(--red11)",Color.red12="var(--red12)",Color.yellow1="var(--yellow1)",Color.yellow2="var(--yellow2)",Color.yellow3="var(--yellow3)",Color.yellow4="var(--yellow4)",Color.yellow5="var(--yellow5)",Color.yellow6="var(--yellow6)",Color.yellow7="var(--yellow7)",Color.yellow8="var(--yellow8)",Color.yellow9="var(--yellow9)",Color.yellow10="var(--yellow10)",Color.yellow11="var(--yellow11)",Color.yellow12="var(--yellow12)"}(Color=Color||(Color={}))},"./src/package/foundation/MediaQuery/MediaQuery.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var breakpoints;function createMediaQuery(type,width){return`@media (${type}-width: ${width}px)`}__webpack_require__.d(__webpack_exports__,{z:function(){return MediaQuery}}),function(breakpoints){breakpoints[breakpoints.tablet=600]="tablet",breakpoints[breakpoints.desktop=1440]="desktop"}(breakpoints=breakpoints||(breakpoints={}));const MediaQuery={minWidth:{tablet:createMediaQuery("min",breakpoints.tablet),desktop:createMediaQuery("min",breakpoints.desktop)}}},"./src/package/foundation/Theme/Theme.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return Theme}});const Theme={space:[0,4,8,12,16,24,36,48,60,80,90,120,128],font:{sansSerif:"'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI',\n      'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', \n      'Segoe UI Emoji'",monospace:'"Lucida Console", Monaco, monospace'},fontWeight:{light:300,regular:400,semiBold:600,bold:700}}}}]);
//# sourceMappingURL=package-components-Table-stories-Table-stories.882ad42a.iframe.bundle.js.map