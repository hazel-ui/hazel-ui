import { CSSProperties } from "react";
import { PlaceholderProps } from "react-select";
import { StylesConfigFunction } from "react-select/src/styles";
import { Theme } from "../../../foundation";

export const placeholderStyles: StylesConfigFunction<
  PlaceholderProps<{}, boolean>
> = (base: CSSProperties, state: any) => ({
  ...base,
  fontFamily: Theme.font.sansSerif,
});
