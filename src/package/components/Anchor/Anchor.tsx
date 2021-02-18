import { HTMLProps } from "react";
import styled from "styled-components";
import { Color } from "../../foundation";

export interface AnchorProps extends HTMLProps<HTMLAnchorElement> {
  color?: string;
  backgroundColor?: string;
}

export const Anchor = styled.a<AnchorProps>`
  color: ${(props) => props.color || Color.dodgerBlue};
  text-decoration: none;

  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}

  &:visited {
    color: ${(props) => props.color || Color.blueViolet};
  }

  &:hover {
    text-decoration: underline;
  }
`;
