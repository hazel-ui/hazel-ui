import { styled } from "styled-components";

import { variants } from "./Typography.css.js";
import { TextTag, TypographyType } from "./types.js";

import type { Color } from "../Color/Color.js";
import type { SxProps } from "../sx.js";
import type { ReactNode } from "react";

export interface TypographyProps {
  variant?: TypographyType;
  children?: ReactNode;
  // styles
  color?: Color | string;
  sx?: SxProps;
}

const StyledDiv = styled.div<TypographyProps>``;

export function Typography({
  color = "var(--gray12)",
  variant = "body",
  children,
  sx = {},
}: TypographyProps) {
  return (
    <StyledDiv
      className={variants[variant]}
      as={TextTag[variant]}
      style={{ color, ...sx }}
    >
      {children}
    </StyledDiv>
  );
}
