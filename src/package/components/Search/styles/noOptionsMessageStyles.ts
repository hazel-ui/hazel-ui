import { CSSProperties } from "react";
import { Color, Theme } from "../../../foundation";

export const noOptionsMessageStyles = (base: CSSProperties) => ({
  ...base,
  color: Color.gray90,
  fontFamily: Theme.font.sansSerif,
  marginBottom: "0.5rem",
});
