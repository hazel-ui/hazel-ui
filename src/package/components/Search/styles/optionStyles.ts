import { CSSProperties } from "react";
import { OptionProps } from "react-select";
import { Color, Theme } from "../../../foundation";

export const optionStyles = (base: CSSProperties, state: OptionProps<{}>) => ({
  ...base,
  color: Color.black,
  fontSize: "1rem",
  fontFamily: Theme.font.sansSerif,
  height: "3rem",

  // vertical center
  display: "flex",
  alignItems: "center",

  // selected option
  boxShadow:
    state.isFocused || state.isSelected
      ? `4px 0px 0px 0px ${state.theme.colors.primary25} inset`
      : "none",
  transition: "0.3s ease box-shadow",

  "&:nth-of-type(odd)": {
    backgroundColor: state.theme.colors.neutral0,
  },
  "&:nth-of-type(even)": {
    backgroundColor: state.theme.colors.neutral5,
  },
  "&:hover": {
    boxShadow: `4px 0px 0px 0px ${state.theme.colors.primary25} inset`,
  },

  cursor: "pointer",
});
