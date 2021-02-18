import { HTMLProps } from "react";
import styled from "styled-components";

export interface AnchorProps extends HTMLProps<HTMLAnchorElement> {}

export const Anchor = styled.a<AnchorProps>`
  color: #0070f3;
  text-decoration: none;

  &:visited {
    color: blueviolet;
  }

  &:hover {
    text-decoration: underline;
  }
`;
