import { style } from "@vanilla-extract/css";

export const borderB2 = style({
  borderBottomWidth: "2px",
});

export const transitionAll = style({
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
});
