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
  TypographyProps,
} from "styled-system";

import { TextTag, TextType } from "./types";
import { applyTextVariant } from "./utils";

interface TypographyPropsType
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    DisplayProps,
    LayoutProps,
    SpaceProps,
    TypographyProps {
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

const StyledText = styled.div<TypographyPropsType>`
  ${(props) => props.variant && applyTextVariant(props.variant)};
  ${styledSystemStyles};
`;

export function Typography({
  variant,
  children,
  ...rest
}: TypographyPropsType) {
  return (
    <StyledText variant={variant} as={TextTag[variant] as any} {...rest}>
      {children}
    </StyledText>
  );
}

// https://www.bbc.co.uk/gel/guidelines/typography
