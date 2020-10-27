import React, { ReactNode } from "react";
import styled from "styled-components";
import { compose, border, BorderProps, color, ColorProps } from "styled-system";

import { Theme } from "../../foundation";

import { BadgeSizeType, BadgeType } from "./types";
import { applyBadgeVariant, applyBadgeSize } from "./styles";

export interface BadgeProps extends BorderProps, ColorProps {
  children?: ReactNode;
  size?: BadgeSizeType;
  variant?: BadgeType;
  variantColor?: string;
}

const styledSystemStyles = compose(border, color);

export const Badge = ({
  size = "medium",
  variant = "info",
  children,
  ...rest
}: BadgeProps) => {
  return (
    <StyledBadge size={size} variant={variant} as={"badge" as any} {...rest}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.span<BadgeProps>`
  ${(props) => applyBadgeVariant(props.variant!)};
  ${(props) => applyBadgeSize(props.size!)};
  font-family: ${Theme.font.sansSerif};
  &:hover {
    box-shadow: 0px 4px 20px -2px rgba(18, 22, 33, 0.12);
    transform: translate(0, -0.2rem);
  }

  box-sizing: border-box;
  display: inline-block;
  color: #ffffff;

  border-radius: 3rem;
  text-align: center;

  font-weight: 400;

  line-height: inherit;

  ${styledSystemStyles};
`;
