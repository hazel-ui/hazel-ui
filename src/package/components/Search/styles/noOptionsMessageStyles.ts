import { Color } from "../../../foundation/Color/Color.js";
import { Theme } from "../../../foundation/Theme/Theme.js";

import type { CSSProperties } from "react";

export const noOptionsMessageStyles: any = (base: CSSProperties) => ({
  ...base,
  color: Color.gray11,
  fontFamily: Theme.font.sansSerif,
  marginBottom: "0.5rem",
});
