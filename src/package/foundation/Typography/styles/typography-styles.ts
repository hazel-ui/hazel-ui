import { css } from "styled-components";

import { MediaQuery } from "../../MediaQuery/MediaQuery.js";
import { Theme } from "../../Theme/Theme.js";
import { TypographyType } from "../types.js";
import { responsiveTokens } from "./responsiveTokens.js";

export function applyTypographyVariant(variant: TypographyType) {
  switch (variant) {
    case "display":
      return css`
        font-family: ${Theme.font.sansSerif};
        ${applyTypographyMediaQueries("display")};
      `;

    case "headline":
      return css`
        font-family: ${Theme.font.sansSerif};
        ${applyTypographyMediaQueries("headline")};
      `;

    case "title":
      return css`
        font-family: ${Theme.font.sansSerif};
        ${applyTypographyMediaQueries("title")};
      `;

    case "label":
      return css`
        font-family: ${Theme.font.sansSerif};
        ${applyTypographyMediaQueries("label")};
      `;

    case "body":
      return css`
        font-family: ${Theme.font.sansSerif};
        ${applyTypographyMediaQueries("body")};
      `;

    default:
      return null;
  }
}

function applyTypographyMediaQueries(variant: TypographyType) {
  return css`
    line-height: ${responsiveTokens[variant].small.lineHeight};
    font-size: ${responsiveTokens[variant].small.size};
    letter-spacing: ${responsiveTokens[variant].small.letterSpacing};
    font-weight: ${responsiveTokens[variant].small.weight};

    ${MediaQuery.minWidth.tablet} {
      line-height: ${responsiveTokens[variant].medium.lineHeight};
      font-size: ${responsiveTokens[variant].medium.size};
      letter-spacing: ${responsiveTokens[variant].medium.letterSpacing};
      font-weight: ${responsiveTokens[variant].medium.weight};
    }

    ${MediaQuery.minWidth.desktop} {
      line-height: ${responsiveTokens[variant].large.lineHeight};
      font-size: ${responsiveTokens[variant].large.size};
      letter-spacing: ${responsiveTokens[variant].large.letterSpacing};
      font-weight: ${responsiveTokens[variant].large.weight};
    }
  `;
}
