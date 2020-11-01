import { CSSProperties } from "react";
import { OptionProps } from "react-select";

export const optionStyles = (base: CSSProperties, state: OptionProps<{}>) => ({
  ...base,
  fontSize: "1rem",
  fontFamily: "sans-serif",
  height: "50px",
  color: "green",

  // vertical center
  display: "flex",
  alignItems: "center",

  // selected option
  backgroundColor: state.isFocused || state.isSelected ? "blue" : "white",

  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "azure",
  },
  "&:hover": {
    backgroundColor: "fuchsia",
  },
});
