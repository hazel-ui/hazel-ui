import { Color } from "../../../foundation/Color/Color";
import { Theme } from "../../../foundation/Theme/Theme";

import type { CSSProperties } from "react";

export const noOptionsMessageStyles: any = (base: CSSProperties) => ({
  ...base,
  color: Color.gray11,
  fontFamily: Theme.font.sansSerif,
  marginBottom: "0.5rem",
});
