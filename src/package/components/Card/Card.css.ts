import { style } from "@vanilla-extract/css";

import { Color } from "../../foundation/Color/Color.js";
import { Shadow } from "../../foundation/Shadow/Shadow.js";
import { Space } from "../../foundation/Space/Space.js";

export const card = style({
  ":active": {
    borderColor: Color.gray9,
    boxShadow: Shadow.s,
    transform: "scale(1.01)",
  },
  ":hover": {
    boxShadow: Shadow.m,
    transform: "scale(1.01)",
  },

  backgroundColor: Color.gray3,

  border: `1px solid ${Color.gray6}`,
  borderRadius: Space["1.5"],
  boxShadow: Shadow.s,

  cursor: "pointer",

  padding: Space[4],

  transition: "background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out",
});
