import { CSSProperties } from "react";
import { MenuListComponentProps } from "react-select";

export const menuListStyles = (
  base: CSSProperties,
  state: MenuListComponentProps<{}>
) => ({
  ...base,

  /* Styles for built-in scrollbar for webkit browsers */

  "::-webkit-scrollbar": {
    width: "8px",
  },
  "::-webkit-scrollbar-track": {
    background: "rgba(0,0,0,0)",
    borderRadius: "6px",
  },
  "::-webkit-scrollbar-thumb": {
    margin: "0px 2px 0px 0px",
    background: "red",
    borderRadius: "6px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "crimson",
    cursor: "pointer",
  },
});
