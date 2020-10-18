import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  /* Box Sizing https://bit.ly/1A91I0J */
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
