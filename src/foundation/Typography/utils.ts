import { css } from "styled-components";
import { latin } from "@bbc/gel-foundations/scripts";
import { getRoyal } from "@bbc/gel-foundations/typography";

import { MediaQuery } from "../MediaQuery";
import { Theme } from "../Theme";

import { letterSpacing } from "./responsive";
import { TextType } from "./types";

export function applyTextVariant(variant: TextType) {
  switch (variant) {
    case "h1":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${applyTextMediaQueries("h1")};
      `;

    case "h2":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getRoyal(latin)};
        ${applyTextMediaQueries("h2")};
      `;

    case "h3":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${applyTextMediaQueries("h3")};
      `;

    case "tag":
      return css`
        font-family: ${Theme.font.sansSerif};
        font-weight: ${Theme.fontWeight.regular};
        ${applyTextMediaQueries("tag")};
      `;

    default:
      return null;
  }
}

function applyTextMediaQueries(variant: TextType) {
  return `
    letter-spacing: ${letterSpacing[variant].mobileSmall};

    ${MediaQuery.minWidth.mobile} {
      letter-spacing: ${letterSpacing[variant].mobile};
    }

    ${MediaQuery.minWidth.tablet} {
      letter-spacing: ${letterSpacing[variant].tablet};
    }

    ${MediaQuery.minWidth.desktop} {
      letter-spacing: ${letterSpacing[variant].desktop};
    }

    ${MediaQuery.minWidth.desktopLarge} {
      letter-spacing: ${letterSpacing[variant].desktopLarge};
    }
  `;
}
