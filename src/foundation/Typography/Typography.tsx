import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  compose,
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps as StyledSystemTypographyProps,
} from "styled-system";

import { TextTag, TextType } from "./types";
import { applyTextVariant } from "./utils";

export interface TypographyProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    DisplayProps,
    LayoutProps,
    SpaceProps,
    StyledSystemTypographyProps {
  variant: TextType;
  children?: ReactNode;
}

const styledSystemStyles = compose(
  background,
  border,
  color,
  display,
  layout,
  space,
  typography
);

const StyledText = styled.div<TypographyProps>`
  ${(props) => props.variant && applyTextVariant(props.variant)};
  ${styledSystemStyles};
`;

export function Typography({ variant, children, ...rest }: TypographyProps) {
  return (
    <StyledText variant={variant} as={TextTag[variant] as any} {...rest}>
      {children}
    </StyledText>
  );
}

// https://www.bbc.co.uk/gel/guidelines/typography
