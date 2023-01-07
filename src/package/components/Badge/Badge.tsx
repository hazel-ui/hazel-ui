import { ReactNode } from "react";
import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  space,
  SpaceProps as SSSpaceProps,
  typography,
  TypographyProps as SSTypographyProps,
} from "styled-system";

import { Color } from "../../foundation/Color/Color.js";
import { Shadow } from "../../foundation/Shadow/Shadow.js";
import { Theme } from "../../foundation/Theme/Theme.js";
import { applyBadgeSize } from "./styles.js";
import { BadgeSizeType } from "./types.js";

export interface BadgeProps
  extends BorderProps,
    ColorProps,
    SSSpaceProps,
    SSTypographyProps {
  children?: ReactNode;
  size?: BadgeSizeType;
}

const styledSystemStyles = compose(border, color, space, typography);

export const Badge = ({ size = "s", children, ...rest }: BadgeProps) => {
  return (
    <StyledBadge size={size} as={"span" as any} {...rest}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.span<BadgeProps>`
  font-family: ${Theme.font.sansSerif};
  font-weight: ${Theme.fontWeight.bold};
  background-color: ${Color.gray7};

  border-radius: 0.3rem;
  text-align: center;

  &:hover {
    box-shadow: ${Shadow.xs};
  }

  ${(props) => applyBadgeSize(props.size!)};
  ${styledSystemStyles};
`;
