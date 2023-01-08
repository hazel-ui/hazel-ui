import { styled } from "styled-components";

import { applyTypographyVariant } from "./styles.js";
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
    // eslint-disable-next-line implicit-arrow-linebreak
    props.variant && applyTypographyVariant(props.variant)};
`;

export function Typography({
  color = "var(--gray12)",
  variant = "p",
  children,
  sx = {},
}: TypographyProps) {
  return (
    <StyledDiv variant={variant} as={TextTag[variant]} style={{ color, ...sx }}>
      {children}
    </StyledDiv>
  );
}

// https://www.bbc.co.uk/gel/guidelines/typography
