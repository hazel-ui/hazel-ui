import { latin } from "@bbc/gel-foundations/scripts";
import {
  getBodyCopy,
  getBrevier,
  getCanon,
  getDoublePica,
  getFoolscap,
  getGreatPrimer,
  getLongPrimer,
  getParagon,
  getPica,
  getTrafalgar,
} from "@bbc/gel-foundations/typography";
import { css } from "styled-components";

import { MediaQuery } from "../../MediaQuery/MediaQuery.js";
import { Theme } from "../../Theme/Theme.js";
import { letterSpacing } from "./styles/letterSpacing.js";
import { TypographyType } from "../types.js";

export function applyTypographyVariant(variant: TypographyType) {
  switch (variant) {
    case "display":
      return css`
        font-family: ${Theme.font.sansSerif};
        font-weight: ${Theme.fontWeight.regular};
        ${getFoolscap(latin)};
      `;

    case "label":
      return css`
        font-family: ${Theme.font.sansSerif};
        font-weight: ${Theme.fontWeight.regular};
        ${getBrevier(latin)};
        /* ${applyTypographyMediaQueries("label")}; */
      `;

    default:
      return null;
  }
}

function applyTypographyMediaQueries(variant: TypographyType) {
  if (variant === "none") return null;

  return css`
    letter-spacing: ${letterSpacing[variant].mobileSmall};

    ${MediaQuery.minWidth.tablet} {
      letter-spacing: ${letterSpacing[variant].tablet};
    }

    ${MediaQuery.minWidth.desktop} {
      letter-spacing: ${letterSpacing[variant].desktop};
    }
  `;
}
