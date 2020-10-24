import React, { ReactNode } from "react";
import styled from "styled-components";
import { compose, border, BorderProps, color, ColorProps } from "styled-system";

import { Theme } from "../../foundation";

import { ButtonSizeType, ButtonType } from "./types";
import { applyButtonVariant, applyButtonSize } from "./styles";

export interface ButtonProps extends BorderProps, ColorProps {
  children?: ReactNode;
  onClick?: () => void;
  size?: ButtonSizeType;
  variant?: ButtonType;
  variantColor?: string;
}

const styledSystemStyles = compose(border, color);

export function Button({
  size = "medium",
  variant = "primary",
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton size={size} variant={variant} as={"button" as any} {...rest}>
      {children}
    </StyledButton>
  );
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
    transform: translate(0, -0.2rem);
  }

  ${styledSystemStyles};
`;
