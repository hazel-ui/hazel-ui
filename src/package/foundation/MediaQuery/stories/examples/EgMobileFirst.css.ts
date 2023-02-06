import { style } from "@vanilla-extract/css";
import { MediaQuery } from "../../MediaQuery.js";

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
