import { styled } from "styled-components";

import { applyTypographyVariant } from "./styles/typography-styles.js";
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

const StyledDiv = styled.div<TypographyProps>`
  ${(props: { variant?: TypographyType }) =>
    props.variant && applyTypographyVariant(props.variant)};
`;

export function Typography({
  color = "var(--gray12)",
  variant = "body",
  children,
  sx = {},
}: TypographyProps) {
  return (
    <StyledDiv variant={variant} as={TextTag[variant]} style={{ color, ...sx }}>
      {children}
    </StyledDiv>
  );
}
