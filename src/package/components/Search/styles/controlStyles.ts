import { Color } from "../../../foundation/Color/Color.js";
import { Shadow } from "../../../foundation/Shadow/Shadow.js";

import type { CSSProperties } from "react";
import type { ControlProps } from "react-select";

export const controlStyles: any = (base: CSSProperties, state: ControlProps<{}, boolean>) => ({
  ...base,
  backgroundColor: state.isFocused ? Color.gray5 : state.theme.colors.neutral0,
  border: `0.1rem solid ${state.theme.colors.neutral30}`, // Control border
  borderRadius: "0.3rem",
  boxShadow: state.isFocused ? Shadow.xs : "none",
  cursor: "pointer",
  height: "3.2rem",
});
