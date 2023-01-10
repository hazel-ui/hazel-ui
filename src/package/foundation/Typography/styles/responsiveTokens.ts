import type { TypographyType, TypeScale } from "../types.js";

/**
 * Tokens are taken from Material Design:
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const responsiveTokens: Record<TypographyType, TypeScale> = {
  display: {
    large: {
      lineHeight: "64px",
      size: "57px",
      tracking: 0,
      weight: 400,
    },
    medium: {
      lineHeight: "52px",
      size: "45px",
      tracking: 0,
      weight: 400,
    },
    small: {
      lineHeight: "44px",
      size: "36px",
      tracking: 0,
      weight: 400,
    },
  },

  headline: {
    large: {
      lineHeight: "40px",
      size: "32px",
      tracking: 0,
      weight: 400,
    },
    medium: {
      lineHeight: "36px",
      size: "28px",
      tracking: 0,
      weight: 400,
    },
    small: {
      lineHeight: "32px",
      size: "24px",
      tracking: 0,
      weight: 400,
    },
  },

  title: {
    large: {
      lineHeight: "28px",
      size: "22px",
      tracking: 0,
      weight: 400,
    },
    medium: {
      lineHeight: "24px",
      size: "16px",
      tracking: "0.15px",
      weight: 500,
    },
    small: {
      lineHeight: "",
      size: "",
      tracking: "",
      weight: null,
    },
  },

  label: {
    large: {
      lineHeight: "64px",
      size: "57px",
      tracking: 0,
      weight: 400,
    },
    medium: {
      lineHeight: "",
      size: "",
      tracking: "",
      weight: null,
    },
    small: {
      lineHeight: "",
      size: "",
      tracking: "",
      weight: null,
    },
  },

  body: {
    large: {
      lineHeight: "64px",
      size: "57px",
      tracking: 0,
      weight: 400,
    },
    medium: {
      lineHeight: "",
      size: "",
      tracking: "",
      weight: null,
    },
    small: {
      lineHeight: "",
      size: "",
      tracking: "",
      weight: null,
    },
  },
};
