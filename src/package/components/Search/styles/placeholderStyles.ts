import { PlaceholderProps } from "react-select";

import type { StylesConfigFunction } from "react-select/src/styles.js";

import { Theme } from "../../../foundation/Theme/Theme.js";

import type { CSSProperties } from "react";

export const placeholderStyles: StylesConfigFunction<
  PlaceholderProps<{}, boolean>
> = (base: CSSProperties, state: any) => ({
  ...base,
  fontFamily: Theme.font.sansSerif,
});
