import { ReactNode } from "react";
import { styled } from "styled-components";

import { Color } from "../../foundation/Color/Color.js";
import { Shadow } from "../../foundation/Shadow/Shadow.js";

import type { SxProps } from "../../foundation/sx.js";

export interface CardProps {
  children?: ReactNode;
  // style
  width?: string;
  sx?: SxProps;
}

export function Card({ children, width, sx }: CardProps) {
  return (
    <StyledDiv as="div" style={{ width, ...sx }}>
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled.div<CardProps>`
  float: left;
  background-color: ${Color.gray8};

  margin: 1rem;
  padding: 1rem;

  border: 1px solid ${Color.gray6};
  border-radius: 5px;
  box-shadow: ${Shadow.s};

  &:hover {
    box-shadow: ${Shadow.m};
    transform: scale(1.01);
  }

  &:active {
    border-color: ${Color.gray9};
    box-shadow: ${Shadow.s};
    transform: scale(1.01);
  }

  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;
`;
