import React, { ReactNode } from "react";
import styled from "styled-components";
import { compose, color, ColorProps } from "styled-system";

import { Theme } from "../../foundation";

import { ButtonSizeType, ButtonType } from "./types";
import { applyButtonVariant, applyButtonSize } from "./utils";

export interface ButtonProps extends ColorProps {
  variant?: ButtonType;
  size?: ButtonSizeType;
  children?: ReactNode;
  onClick?: () => void;
}

const styledSystemStyles = compose(color);

export function Button({
  variant = "primary",
  size = "medium",
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  ${(props) => props.variant && applyButtonVariant(props.variant)};
  ${(props) => props.size && applyButtonSize(props.size)};
  ${styledSystemStyles};

  font-family: ${Theme.font.sansSerif};
  font-weight: 700;
  border: 0;
  border-radius: 0.3rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;
