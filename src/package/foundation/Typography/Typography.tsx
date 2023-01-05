import styled from "styled-components";

import { applyTypographyVariant } from "./styles";
import { TextTag, TypographyType } from "./types";

import type { SxProps } from "../sx";
import type { ReactNode } from "react";

export interface TypographyProps {
  // eslint config issue: https://github.com/iamturns/eslint-config-airbnb-typescript/issues/310
  variant?: TypographyType;
  children?: ReactNode;
  sx?: SxProps;
}

export function Typography({
  variant = "p",
  children,
  sx = {},
  ...rest
}: TypographyProps) {
  return (
    <StyledDiv
      className="text-mauve-12"
      variant={variant}
      as={TextTag[variant] as any}
      style={sx}
      {...rest}
    >
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div<TypographyProps>`
  ${(props) => props.variant && applyTypographyVariant(props.variant)};
`;

// https://www.bbc.co.uk/gel/guidelines/typography
