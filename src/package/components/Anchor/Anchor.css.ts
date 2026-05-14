import { style } from "@vanilla-extract/css";

import { borderB2, transitionAll } from "../../foundation/tailwind.css.js";

export const anchor = style([
  borderB2,
  transitionAll,
  {
    ":hover": {
      borderBottomStyle: "solid",
      cursor: "pointer",
    },
    borderBottomStyle: "none",

    textDecoration: "none",
  },
]);
