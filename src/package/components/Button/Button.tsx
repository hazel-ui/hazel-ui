import styled from "styled-components";

import { Theme } from "../../foundation/Theme/Theme.js";
import { applyButtonSize, applyButtonVariant } from "./styles.js";
import { ButtonSizeType, ButtonType } from "./types.js";

import type { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  size?: ButtonSizeType;
  variant?: ButtonType;
  variantColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  ${(props) => applyButtonVariant(props.variant!, props.variantColor)};
  ${(props) => applyButtonSize(props.size!)};
  font-family: ${Theme.font.sansSerif};

  display: flex;
  border-radius: 0.5rem;
  margin: 1rem;
  cursor: pointer;

  transition: transform 0.3s;
  box-shadow: 0px 2px 8px -1px rgba(18, 22, 33, 0.04);
  &:hover {
    box-shadow: 0px 4px 20px -2px rgba(18, 22, 33, 0.12);
    transform: translate(0, -0.1rem);
  }
`;

export function Button({
  size = "medium",
  variant = "primary",
  variantColor,
  children,
}: ButtonProps) {
  return (
    <StyledButton
      size={size}
      variant={variant}
      as="button"
      variantColor={variantColor}
    >
      {children}
    </StyledButton>
  );
}
