import { css } from "styled-components";

import { BadgeSizeType, BadgeType } from "./types";

export function applyBadgeVariant(variant: BadgeType) {
  switch (variant) {
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
        font-size: 0.7rem;
        padding: 0.05rem 0.4rem 0.15rem;
      `;

    case "medium":
      return css`
        font-size: 1.2rem;
        padding: 0.1rem 0.65rem 0.2rem;
      `;

    case "large":
      return css`
        font-size: 1.6rem;
        padding: 0.05rem 0.8rem 0.1rem;
      `;

    default:
      return css`
        font-size: 1.6rem;
        padding: 0.05rem 0.8rem 0.1rem;
      `;
  }
}
