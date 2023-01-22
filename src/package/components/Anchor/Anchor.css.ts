import { style } from "@vanilla-extract/css";
import { borderB2, transitionAll } from "../../foundation/tailwind.css.js";

export const anchor = style([
  borderB2,
  transitionAll,
  {
    textDecoration: "none",

    ":hover": {
      cursor: "pointer",
      borderBottomStyle: "solid",
    },
  },
]);
