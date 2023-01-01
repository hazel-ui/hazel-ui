import styled from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps as SSTypographyProps,
} from "styled-system";

import { applyTypographyVariant } from "./styles";
import { TextTag, TypographyType } from "./types";

import type { ReactNode } from "react";

export interface TypographyProps
  extends BackgroundProps,
    // eslint config issue: https://github.com/iamturns/eslint-config-airbnb-typescript/issues/310
    BorderProps,
    ColorProps,
    DisplayProps,
    LayoutProps,
    SpaceProps,
    SSTypographyProps {
  variant?: TypographyType;
  children?: ReactNode;
}

const styledSystemStyles = compose(
  background,
  border,
  color,
  display,
  layout,
  space,
  // eslint config issue: https://github.com/iamturns/eslint-config-airbnb-typescript/issues/311
  typography
);

export function Typography({
  variant = "p",
  children,
  ...rest
}: TypographyProps) {
  return (
    <StyledDiv
      className="text-mauve-12"
      variant={variant}
      as={TextTag[variant] as any}
      {...rest}
    >
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div<TypographyProps>`
  ${(props) => props.variant && applyTypographyVariant(props.variant)};
  ${styledSystemStyles};
`;

// https://www.bbc.co.uk/gel/guidelines/typography
