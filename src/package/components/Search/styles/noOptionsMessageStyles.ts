import { CSSProperties } from "react";
import { Color, Theme } from "../../../foundation";

export const noOptionsMessageStyles: any = (base: CSSProperties) => ({
  ...base,
  color: Color.gray11,
  fontFamily: Theme.font.sansSerif,
  marginBottom: "0.5rem",
});
