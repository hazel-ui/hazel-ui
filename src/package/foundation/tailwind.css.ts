import { style } from "@vanilla-extract/css";

export const borderB2 = style({
  borderBottomWidth: "2px",
});

export const transitionAll = style({
  transitionDuration: "150ms",
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
});
