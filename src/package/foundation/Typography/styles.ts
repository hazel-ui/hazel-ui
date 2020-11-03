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
import { MediaQuery } from "../MediaQuery";
import { Theme } from "../Theme";
import { letterSpacing } from "./responsive";
import { TypographyType } from "./types";

export function applyTypographyVariant(variant: TypographyType) {
  switch (variant) {
    case "display":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getFoolscap(latin)};
      `;

    case "h1":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getCanon(latin)};
      `;

    case "h2":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getTrafalgar(latin)};
      `;

    case "h3":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getParagon(latin)};
      `;

    case "h4":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getDoublePica(latin)};
      `;

    case "h5":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getGreatPrimer(latin)};
      `;

    case "h6":
      return css`
        font-family: ${Theme.font.serif};
        font-weight: ${Theme.fontWeight.regular};
        ${getPica(latin)};
      `;

    case "p":
      return css`
        font-family: ${Theme.font.sansSerif};
        font-weight: ${Theme.fontWeight.regular};
        ${getBodyCopy(latin)};
      `;

    case "caption":
      return css`
        font-family: ${Theme.font.sansSerif};
        font-weight: ${Theme.fontWeight.regular};
        ${getLongPrimer(latin)};
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
