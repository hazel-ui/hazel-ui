import styled from "styled-components";

import { Color } from "../../foundation/Color/Color";

import type { HTMLProps } from "react";

export interface AnchorProps extends HTMLProps<HTMLAnchorElement> {
  color?: string;
  backgroundColor?: string;
}

export const Anchor = styled.a<AnchorProps>`
  color: ${(props) => props.color || Color.blue9};
  text-decoration: none;

  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}

  &:visited {
    color: ${(props) => props.color || Color.purple9};
  }

  &:hover {
    text-decoration: underline;
  }
`;
