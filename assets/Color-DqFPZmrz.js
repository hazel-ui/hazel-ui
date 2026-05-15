import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as a}from"./index-CRoIksu0.js";import{M as h}from"./index-DiKvgaB-.js";import{C as n}from"./Color-D8Giav_X.js";import{r as x}from"./index-CAe6R3bO.js";import{y as c}from"./styled-components.browser.esm-CNZ_myGK.js";import{T as g}from"./Typography-B3LubWWV.js";import"./index-ChsGqxH_.js";import"./iframe-D2fDaQ-T.js";import"./index-BRq5TIsn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function f(o){navigator.clipboard.writeText(o)}function C(o="hsl(0, 0%, 0%)"){return Number(o.split(",")[2].trim().split("%")[0])>50?n.gray12:n.gray2}function y(o){return o?getComputedStyle(document.documentElement).getPropertyValue(o.slice(4,-1)):""}function j(o){return Object.keys(o).filter(r=>Number.isNaN(Number(r)))}const b=c.div`
  color: ${o=>C(o.color)};
  background-color: ${o=>o.color};

  text-align: center;
  min-width: 264px;

  height: 80px;
  padding: 0 20px;
  cursor: pointer;
  align-items: center;
`;function i({cardColor:o=n.gray5,title:r="Unavailable"}){const t=y(o),[p,l]=x.useState(t);function d(u,m){l(u),setTimeout(()=>{l(m)},800)}return e.jsx(b,{color:t,title:r,onClick:()=>{f(t),d("Copied!",t)},children:e.jsxs(g,{variant:"body",children:[`Color.${r}: ${o}`,e.jsx("br",{}),p]})})}const v=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1.6rem 1.6rem;
`;i.__docgenInfo={description:"",methods:[],displayName:"ColorBlock",props:{cardColor:{required:!1,tsType:{name:"Color"},description:"",defaultValue:{value:"Color.gray5",computed:!0}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Unavailable"',computed:!1}}}};function s(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Foundation/Color",component:i}),`
`,e.jsx(r.h1,{id:"color",children:"Color"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Color"})," is an enum that provides us with all available colors used throughout the project."]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Color } from "hazel-ui";

<p style={{ color: Color.royalBlue }}>My text</p>;
`})}),`
`,e.jsx(r.h2,{id:"available-colors",children:"Available colors"}),`
`,e.jsx(r.p,{children:"Click on a color to copy its HSL value."}),`
`,e.jsx(v,{children:j(n).map(t=>e.jsx(i,{cardColor:n[t],title:t},t))})]})}function U(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}export{U as default};
