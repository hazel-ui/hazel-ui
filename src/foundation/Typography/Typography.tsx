import React, { ReactNode } from "react";
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

export interface TypographyProps
  extends BackgroundProps,
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
  typography
);

export function Typography({
  variant = "p",
  children,
  ...rest
}: TypographyProps) {
  return (
    <StyledDiv variant={variant} as={TextTag[variant] as any} {...rest}>
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div<TypographyProps>`
  ${(props) => props.variant && applyTypographyVariant(props.variant)};
  ${styledSystemStyles};
`;

// https://www.bbc.co.uk/gel/guidelines/typography
