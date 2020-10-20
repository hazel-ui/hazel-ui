import React, { ReactNode } from "react";
import styled from "styled-components";
import { compose, color, ColorProps } from "styled-system";

import { Color, Theme } from "../../foundation";

import { ButtonSizeType, ButtonType } from "./types";
import { applyButtonVariant, applyButtonSize } from "./styles";

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
    <StyledButton variant={variant} size={size} as={"button" as any} {...rest}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  ${(props) => props.variant && applyButtonVariant(props.variant)};
  ${(props) => props.size && applyButtonSize(props.size)};
  font-family: ${Theme.font.sansSerif};
  border: 1px solid ${Color.gainsboro};

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
