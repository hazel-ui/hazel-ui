import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as s}from"./index-CRoIksu0.js";import{M as a}from"./index-DiKvgaB-.js";import{C as l}from"./Card-CQAwQh6S.js";import{C as m}from"./Color-D8Giav_X.js";import{I as t}from"./Icon-CGj3Vi-Z.js";import{T as p}from"./Typography-B3LubWWV.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";import"./iframe-D2fDaQ-T.js";import"./index-BRq5TIsn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./extends-CF3RwP-h.js";import"./styled-components.browser.esm-CNZ_myGK.js";const h=["ChevronDown","ChevronRight","InfoCircle","Search","Sort","SortDown","SortUp","X","Circle"];function i(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Foundation/Icon",component:t}),`
`,o.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,o.jsxs(n.p,{children:["The ",o.jsx(n.code,{children:"Icon"}),` object provides us with all available icons used
throughout the project rendered as an `,o.jsx(n.code,{children:"<svg>"}),` element. All HTML
`,o.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute",rel:"nofollow",children:"SVG attributes"})," can be passed as props to this component."]}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { Icon } from "hazel-ui";

function Component() {
  return <Icon.ArrowUp size="1.3rem" />;
}
`})}),`
`,o.jsx(n.h2,{id:"available-icons",children:"Available icons"}),`
`,o.jsx("div",{children:h.map(r=>{const c=t[r];return o.jsxs(l,{textAlign:"center",width:"13rem",children:[o.jsx(c,{size:"1.3rem"}),o.jsx(p,{marginBottom:"0px",color:m.royalBlue,children:`<Icon.${r} />`})]},"iconName")})})]})}function y(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(i,{...e})}):i(e)}export{y as default};
