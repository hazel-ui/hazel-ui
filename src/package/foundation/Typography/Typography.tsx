import { variants } from "./Typography.css.js";
import { TextTag, TypographyType } from "./types.js";

import type { Color } from "../Color/Color.js";
import type { SxProps } from "../sx.js";
import type { ReactNode } from "react";

export interface TypographyProps {
  variant?: TypographyType;
  children?: ReactNode;
  as?: TextTag;
  // styles
  color?: Color | string;
  sx?: SxProps;
}

export function Typography({
  color = "var(--gray12)",
  variant = "body",
  as = TextTag[variant],
  children,
  sx = {},
}: TypographyProps) {
  const As = as;
  return (
    <As className={variants[variant]} style={{ color, ...sx }}>
      {children}
    </As>
  );
}
