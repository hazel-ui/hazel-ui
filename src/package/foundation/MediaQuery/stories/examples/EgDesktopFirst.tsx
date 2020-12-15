import styled from "styled-components";
import { MediaQuery } from "../../MediaQuery";

export function EgDesktopFirst() {
  return <Container>Lorem ipsum</Container>;
}

const Container = styled.div`
  color: red;

  ${MediaQuery.maxWidth.tablet} {
    color: green;
  }

  ${MediaQuery.maxWidth.mobile} {
    color: blue;
  }

  ${MediaQuery.maxWidth.mobileSmall} {
    color: yellow;
  }
`;
