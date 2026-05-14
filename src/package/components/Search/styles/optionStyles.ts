import { Color } from "../../../foundation/Color/Color.js";
import { Theme } from "../../../foundation/Theme/Theme.js";

import type { CSSProperties } from "react";
import type { OptionProps } from "react-select";

export const optionStyles: any = (base: CSSProperties, state: OptionProps<{}, boolean>) => ({
  ...base,
  "&:hover": {
    boxShadow: `4px 0px 0px 0px ${state.theme.colors.primary25} inset`,
  },
  "&:nth-of-type(even)": {
    backgroundColor: state.theme.colors.neutral5,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: state.theme.colors.neutral0,
  },

  // Vertical center
  alignItems: "center",

  // Selected option
  boxShadow:
    state.isFocused || state.isSelected
      ? `4px 0px 0px 0px ${state.theme.colors.primary25} inset`
      : "none",
  color: Color.gray11,
  cursor: "pointer",
  display: "flex",
  fontFamily: Theme.font.sansSerif,
  fontSize: "1rem",
  height: "3rem",
  transition: "0.3s ease box-shadow",
});
