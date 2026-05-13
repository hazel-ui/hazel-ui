import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as i}from"./index-CRoIksu0.js";import{M as s}from"./index-ghjPb5SR.js";import"./index-ChsGqxH_.js";import"./index-CAe6R3bO.js";import"./iframe-fc34HBmR.js";import"./index-BRq5TIsn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";var a="m9nngp0";function o(){return e.jsx("p",{className:a,children:"Resize your screen to change the color of this text."})}o.__docgenInfo={description:"",methods:[],displayName:"EgMobileFirst"};function t(r){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Foundation/MediaQuery"}),`
`,e.jsx(n.h1,{id:"mediaquery",children:"MediaQuery"}),`
`,e.jsxs(n.p,{children:[`A helper utility for writing uniform media queries. This can
be used to write media queries for a "mobile-first" approach.`,e.jsx(n.br,{}),`
`,"The breakpoints have been taken from ",e.jsx(n.a,{href:"https://m3.material.io/foundations/layout/applying-layout/window-size-classes",rel:"nofollow",children:"Material M3"}),"."]}),`
`,e.jsx(n.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:`| Name    | Viewport Size       |
| ------- | ------------------- |
| tablet  | 600px to 839px      |
| desktop | Starting from 840px |`}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:""})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { style } from "@vanilla-extract/css";
import { MediaQuery } from "hazel-ui";

export const className = style({
  color: "red",

  "@media": {
    [MediaQuery.minWidth.tablet]: {
      color: "blue",
    },

    [MediaQuery.minWidth.desktop]: {
      color: "green",
    },
  },
});
`})}),`
`,e.jsx(o,{})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{j as default};
