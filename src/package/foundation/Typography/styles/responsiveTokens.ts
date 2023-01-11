import type { TypographyType, TypeScale } from "../types.js";

/**
 * Tokens are taken from Material Design:
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const responsiveTokens: Record<TypographyType, TypeScale> = {
  display: {
    large: {
      lineHeight: "4rem" /** 64px */,
      size: "3.5625rem" /** 57px */,
      letterSpacing: 0 /* letterSpacing = (tracking / size in px) */,
      weight: 400,
    },
    medium: {
      lineHeight: "3.25rem" /** 52px */,
      size: "2.8125rem" /** 45px */,
      letterSpacing: 0,
      weight: 400,
    },
    small: {
      lineHeight: "2.75rem" /** 44px */,
      size: "2.25rem" /** 36px */,
      letterSpacing: 0,
      weight: 400,
    },
  },

  headline: {
    large: {
      lineHeight: "2.5rem" /** 40px */,
      size: "2rem" /** 32px */,
      letterSpacing: 0,
      weight: 400,
    },
    medium: {
      lineHeight: "2.25rem" /** 36px */,
      size: "1.75rem" /** 28px */,
      letterSpacing: 0,
      weight: 400,
    },
    small: {
      lineHeight: "2rem" /** 32px */,
      size: "1.5rem" /** 24px */,
      letterSpacing: 0,
      weight: 400,
    },
  },

  title: {
    large: {
      lineHeight: "1.75rem" /** 28px */,
      size: "1.375rem" /** 22px */,
      letterSpacing: 0,
      weight: 400,
    },
    medium: {
      lineHeight: "1.5rem" /** 24px */,
      size: "1rem" /** 16px */,
      letterSpacing: "0.009375rem" /** tracking: 0.15px */,
      weight: 500,
    },
    small: {
      lineHeight: "1.25rem" /** 20px */,
      size: "0.875rem" /** 14px */,
      letterSpacing: "0.007143rem" /** tracking: 0.1px */,
      weight: 500,
    },
  },

  label: {
    large: {
      lineHeight: "1.25rem" /** 20px */,
      size: "0.875rem" /** 14px */,
      letterSpacing: "0.007143rem" /** tracking: 0.1px */,
      weight: 500,
    },
    medium: {
      lineHeight: "1rem" /** 16px */,
      size: "0.75rem" /** 12px */,
      letterSpacing: "0.041667rem" /** tracking: 0.5px */,
      weight: 500,
    },
    small: {
      lineHeight: "1rem" /** 16px */,
      size: "0.6875rem" /** 11px */,
      letterSpacing: "0.045454rem" /** tracking: 0.5px */,
      weight: 500,
    },
  },

  body: {
    large: {
      lineHeight: "1.5rem" /** 24px */,
      size: "1rem" /** 16px */,
      letterSpacing: "0.03125rem" /** tracking: 0.5px */,
      weight: 400,
    },
    medium: {
      lineHeight: "1.25rem" /** 20px */,
      size: "0.875rem" /** 14px */,
      letterSpacing: "0.017857rem" /** tracking: 0.25px */,
      weight: 400,
    },
    small: {
      lineHeight: "1rem" /** 16px */,
      size: "0.75rem" /** 12px */,
      letterSpacing: "0.033333rem" /** tracking: 0.4px */,
      weight: 400,
    },
  },
};
