import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps as SSTypographyProps,
} from "styled-system";
import { Color, Shadow } from "../../foundation";

export interface CardProps
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    SSTypographyProps {
  children?: ReactNode;
}

const styledSystemStyles = compose(flexbox, layout, space, typography);

export function Card({ children, ...rest }: CardProps) {
  return (
    <StyledDiv as={"div" as any} {...rest}>
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div<CardProps>`
  float: left;

  margin: 1rem;
  padding: 1rem;

  border: 1px solid ${Color.gainsboro};
  border-radius: 5px;
  box-shadow: ${Shadow.s};

  &:hover {
    box-shadow: ${Shadow.m};
    transform: translate3d(0, -3px, 0);
  }

  &:active {
    border-color: ${Color.silver};
    box-shadow: ${Shadow.s};
    transform: translate3d(0, 0, 0);
  }

  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;

  ${styledSystemStyles}
`;
