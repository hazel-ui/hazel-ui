import { style, styleVariants } from "@vanilla-extract/css";

import { MediaQuery } from "../MediaQuery/MediaQuery.js";
import { Theme } from "../Theme/Theme.js";

const base = style({
  fontFamily: Theme.font.sansSerif,
});

/**
 * Variants are inspired by Material M3
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const variants = styleVariants({
  display: [
    base,
    {
      lineHeight: "2.75rem" /** 44px */,
      fontSize: "2.25rem" /** 36px */,
      letterSpacing: 0,
      fontWeight: 400,

      "@media": {
        [MediaQuery.minWidth.tablet]: {
          lineHeight: "3.25rem" /** 52px */,
          fontSize: "2.8125rem" /** 45px */,
          letterSpacing: 0,
          fontWeight: 400,
        },

        [MediaQuery.minWidth.desktop]: {
          lineHeight: "3.8rem" /** 61px */, // modified
          fontSize: "3rem" /** 48px */, // modified
          letterSpacing: 0 /* letterSpacing = (tracking / size in px) */,
          fontWeight: 400,
        },
      },
    },
  ],

  headline: [
    base,
    {
      lineHeight: "2rem" /** 32px */,
      fontSize: "1.5rem" /** 24px */,
      letterSpacing: 0,
      fontWeight: 400,

      "@media": {
        [MediaQuery.minWidth.tablet]: {
          lineHeight: "2.25rem" /** 36px */,
          fontSize: "1.75rem" /** 28px */,
          letterSpacing: 0,
          fontWeight: 400,
        },

        [MediaQuery.minWidth.desktop]: {
          lineHeight: "2.5rem" /** 40px */,
          fontSize: "2rem" /** 32px */,
          letterSpacing: 0,
          fontWeight: 400,
        },
      },
    },
  ],

  title: [
    base,
    {
      lineHeight: "1.25rem" /** 20px */,
      fontSize: "0.875rem" /** 14px */,
      letterSpacing: "0.007143rem" /** tracking: 0.1px */,
      fontWeight: 500,

      "@media": {
        [MediaQuery.minWidth.tablet]: {
          lineHeight: "1.5rem" /** 24px */,
          fontSize: "1rem" /** 16px */,
          letterSpacing: "0.009375rem" /** tracking: 0.15px */,
          fontWeight: 500,
        },

        [MediaQuery.minWidth.desktop]: {
          lineHeight: "1.75rem" /** 28px */,
          fontSize: "1.375rem" /** 22px */,
          letterSpacing: 0,
          fontWeight: 400,
        },
      },
    },
  ],

  label: [
    base,
    {
      lineHeight: "1rem" /** 16px */,
      fontSize: "0.6875rem" /** 11px */,
      letterSpacing: "0.045454rem" /** tracking: 0.5px */,
      fontWeight: 500,

      "@media": {
        [MediaQuery.minWidth.tablet]: {
          lineHeight: "1rem" /** 16px */,
          fontSize: "0.75rem" /** 12px */,
          letterSpacing: "0.041667rem" /** tracking: 0.5px */,
          fontWeight: 500,
        },

        [MediaQuery.minWidth.desktop]: {
          lineHeight: "1.25rem" /** 20px */,
          fontSize: "0.875rem" /** 14px */,
          letterSpacing: "0.007143rem" /** tracking: 0.1px */,
          fontWeight: 500,
        },
      },
    },
  ],

  body: [
    base,
    {
      lineHeight: "1.25rem" /** 20px */, // modified
      fontSize: "0.875rem" /** 14px */, // modified
      letterSpacing: "0.017857rem" /** tracking: 0.25px */, // modified
      fontWeight: 400,

      "@media": {
        [MediaQuery.minWidth.desktop]: {
          lineHeight: "1.5rem" /** 24px */,
          fontSize: "1rem" /** 16px */,
          letterSpacing: "0.03125rem" /** tracking: 0.5px */,
          fontWeight: 400,
        },
      },
    },
  ],
});
