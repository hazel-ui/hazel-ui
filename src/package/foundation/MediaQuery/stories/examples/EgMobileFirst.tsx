import { styled } from "styled-components";

import { MediaQuery } from "../../MediaQuery.js";

export function EgMobileFirst() {
  return <Container>Lorem ipsum</Container>;
}

const Container = styled.div`
  color: red;

  ${MediaQuery.minWidth.tablet} {
    color: blue;
  }

  ${MediaQuery.minWidth.desktop} {
    color: yellow;
  }
`;
