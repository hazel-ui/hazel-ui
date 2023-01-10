import { styled } from "styled-components";

import { Color } from "../../foundation/Color/Color.js";
import { Shadow } from "../../foundation/Shadow/Shadow.js";
import { Theme } from "../../foundation/Theme/Theme.js";
import { applyBadgeSize } from "./styles.js";
import { BadgeSizeType } from "./types.js";

import type { ReactNode } from "react";

export interface BadgeProps {
  children?: ReactNode;
  size?: BadgeSizeType;
  // styles
  color?: Color | string;
  backgroundColor?: Color | string;
}

const StyledBadge = styled.span<BadgeProps>`
  font-family: ${Theme.font.sansSerif};
  font-weight: ${Theme.fontWeight.bold};

  border-radius: 0.4rem;
  text-align: center;

  &:hover {
    box-shadow: ${Shadow.xs};
  }

  ${(props) => applyBadgeSize(props.size!)};
`;

export function Badge({
  size = "s",
  children,
  color = Color.gray1,
  backgroundColor = Color.gray11,
}: BadgeProps) {
  return (
    <StyledBadge size={size} as="span" style={{ color, backgroundColor }}>
      {children}
    </StyledBadge>
  );
}
