import { CSSProperties } from "react";
import { MenuListComponentProps } from "react-select";
import { Color } from "../../../foundation";

export const menuListStyles = (
  base: CSSProperties,
  state: MenuListComponentProps<{}>
) => ({
  ...base,
  maxHeight: "15rem",
  padding: "0px",

  /* Styles for built-in scrollbar for webkit browsers */

  "::-webkit-scrollbar": {
    width: "0.6rem",
  },
  "::-webkit-scrollbar-track": {
    background: "rgba(0, 0, 0, 0)", // transparent
    borderRadius: "1rem",
  },
  "::-webkit-scrollbar-thumb": {
    background: Color.gainsboro,
    borderRadius: "1rem",
    boxShadow: "inset 0 0 0.6rem rgba(0, 0, 0, 0.2)",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: Color.silver,
  },
});
