import { style } from "@vanilla-extract/css";

export const anchor = style({
  textDecoration: "none",

  ":hover": {
    cursor: "pointer",
    borderBottomStyle: "solid",
    // make this a util
    borderBottomWidth: "2px",
    // make this a util
    transitionProperty: "border-bottom-width",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
  },
});
