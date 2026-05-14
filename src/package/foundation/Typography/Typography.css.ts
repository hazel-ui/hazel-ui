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
  body: [
    base,
    {
      "@media": {
        [MediaQuery.minWidth.desktop]: {
          fontSize: "1rem" /** 16px */,
          fontWeight: 400,
          letterSpacing: "0.03125rem" /** tracking: 0.5px */,
          lineHeight: "1.5rem" /** 24px */,
        },
      },
      fontSize: "0.875rem" /** 14px */, // modified
      fontWeight: 400,
      letterSpacing: "0.017857rem" /** tracking: 0.25px */, // modified
      lineHeight: "1.25rem" /** 20px */, // modified
    },
  ],

  display: [
    base,
    {
      "@media": {
        [MediaQuery.minWidth.tablet]: {
          fontSize: "2.8125rem" /** 45px */,
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "3.25rem" /** 52px */,
        },

        [MediaQuery.minWidth.desktop]: {
          fontSize: "3rem" /** 48px */, // modified
          fontWeight: 400,
          letterSpacing: 0 /* letterSpacing = (tracking / size in px) */,
          lineHeight: "3.8rem" /** 61px */, // modified
        },
      },
      fontSize: "2.25rem" /** 36px */,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "2.75rem" /** 44px */,
    },
  ],

  headline: [
    base,
    {
      "@media": {
        [MediaQuery.minWidth.tablet]: {
          fontSize: "1.75rem" /** 28px */,
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "2.25rem" /** 36px */,
        },

        [MediaQuery.minWidth.desktop]: {
          fontSize: "2rem" /** 32px */,
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "2.5rem" /** 40px */,
        },
      },
      fontSize: "1.5rem" /** 24px */,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "2rem" /** 32px */,
    },
  ],

  label: [
    base,
    {
      "@media": {
        [MediaQuery.minWidth.tablet]: {
          fontSize: "0.75rem" /** 12px */,
          fontWeight: 500,
          letterSpacing: "0.041667rem" /** tracking: 0.5px */,
          lineHeight: "1rem" /** 16px */,
        },

        [MediaQuery.minWidth.desktop]: {
          fontSize: "0.875rem" /** 14px */,
          fontWeight: 500,
          letterSpacing: "0.007143rem" /** tracking: 0.1px */,
          lineHeight: "1.25rem" /** 20px */,
        },
      },
      fontSize: "0.6875rem" /** 11px */,
      fontWeight: 500,
      letterSpacing: "0.045454rem" /** tracking: 0.5px */,
      lineHeight: "1rem" /** 16px */,
    },
  ],

  title: [
    base,
    {
      "@media": {
        [MediaQuery.minWidth.tablet]: {
          fontSize: "1rem" /** 16px */,
          fontWeight: 500,
          letterSpacing: "0.009375rem" /** tracking: 0.15px */,
          lineHeight: "1.5rem" /** 24px */,
        },

        [MediaQuery.minWidth.desktop]: {
          fontSize: "1.375rem" /** 22px */,
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "1.75rem" /** 28px */,
        },
      },
      fontSize: "0.875rem" /** 14px */,
      fontWeight: 500,
      letterSpacing: "0.007143rem" /** tracking: 0.1px */,
      lineHeight: "1.25rem" /** 20px */,
    },
  ],
});
