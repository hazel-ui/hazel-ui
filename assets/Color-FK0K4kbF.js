import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as a}from"./index-CRoIksu0.js";import{M as h}from"./index-CIs1E76J.js";import{C as n}from"./Color-D8Giav_X.js";import{r as x}from"./index-CAe6R3bO.js";import{y as c}from"./styled-components.browser.esm-CNZ_myGK.js";import{T as g}from"./Typography-DCBI8IZd.js";import"./index-ChsGqxH_.js";import"./iframe-Co3jiqNw.js";import"./index-BRq5TIsn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function f(o){navigator.clipboard.writeText(o)}function C(o="hsl(0, 0%, 0%)"){return Number(o.split(",")[2].trim().split("%")[0])>50?n.gray12:n.gray2}function y(o){return o?getComputedStyle(document.documentElement).getPropertyValue(o.slice(4,o.length-1)):""}function j(o){return Object.keys(o).filter(t=>Number.isNaN(Number(t)))}const b=c.div`
  color: ${o=>C(o.color)};
  background-color: ${o=>o.color};

  text-align: center;
  min-width: 264px;

  height: 80px;
  padding: 0 20px;
  cursor: pointer;
  align-items: center;
`;function i({cardColor:o=n.gray5,title:t="Unavailable"}){const r=y(o),[p,l]=x.useState(r);function d(u,m){l(u),setTimeout(()=>{l(m)},800)}return e.jsx(b,{color:r,title:t,onClick:()=>{f(r),d("Copied!",r)},children:e.jsxs(g,{variant:"body",children:[`Color.${t}: ${o}`,e.jsx("br",{}),p]})})}const v=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1.6rem 1.6rem;
`;i.__docgenInfo={description:"",methods:[],displayName:"ColorBlock",props:{cardColor:{required:!1,tsType:{name:"Color"},description:"",defaultValue:{value:"Color.gray5",computed:!0}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Unavailable"',computed:!1}}}};function s(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Foundation/Color",component:i}),`
`,e.jsx(t.h1,{id:"color",children:"Color"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Color"})," is an enum that provides us with all available colors used throughout the project."]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Color } from "hazel-ui";

<p style={{ color: Color.royalBlue }}>My text</p>;
`})}),`
`,e.jsx(t.h2,{id:"available-colors",children:"Available colors"}),`
`,e.jsx(t.p,{children:"Click on a color to copy its HSL value."}),`
`,e.jsx(v,{children:j(n).map(r=>e.jsx(i,{cardColor:n[r],title:r},r))})]})}function U(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{U as default};
