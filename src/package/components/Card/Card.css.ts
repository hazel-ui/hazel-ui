import { style } from "@vanilla-extract/css";

import { Color } from "../../foundation/Color/Color.js";
import { Shadow } from "../../foundation/Shadow/Shadow.js";
import { Space } from "../../foundation/Space/Space.js";

export const card = style({
  cursor: "pointer",
  backgroundColor: Color.gray3,

  padding: Space[4],

  border: `1px solid ${Color.gray6}`,
  borderRadius: Space["1.5"],
  boxShadow: Shadow.s,

  ":hover": {
    boxShadow: Shadow.m,
    transform: "scale(1.01)",
  },

  ":active": {
    borderColor: Color.gray9,
    boxShadow: Shadow.s,
    transform: "scale(1.01)",
  },

  transition:
    "background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out",
});
