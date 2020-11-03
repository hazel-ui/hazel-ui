import { css } from "styled-components";

import { BadgeSizeType, BadgeType } from "./types";

export function applyBadgeVariant(variant: BadgeType) {
  switch (variant) {
    case "primary":
      return css`
        background-color: #777;
      `;
    case "info":
      return css`
        background-color: #3498db;
      `;
    case "warning":
      return css`
        background-color: #f1c40f;
      `;
    case "danger":
      return css`
        background-color: #e74c3c;
      `;
    case "success":
      return css`
        background-color: #2ecc71;
      `;

    default:
      return css`
        background-color: #2c3e50;
      `;
  }
}

export function applyBadgeSize(size: BadgeSizeType) {
  switch (size) {
    case "small":
      return css`
        font-size: 1rem;
        padding: 0.2rem 0.6rem;
      `;

    case "medium":
      return css`
        font-size: 1.4rem;
        padding: 0.4rem 0.8rem;
      `;

    case "large":
      return css`
        font-size: 1.8rem;
        padding: 0.4rem 1rem;
      `;

    default:
      return css`
        font-size: 1.6rem;
        padding: 0.6rem 0.8rem;
      `;
  }
}
