import { ReactNode } from "react";
import { BorderProps, ColorProps } from "styled-system";
import { ButtonSizeType, ButtonType } from "./types";
export interface ButtonProps extends BorderProps, ColorProps {
    children?: ReactNode;
    onClick?: () => void;
    size?: ButtonSizeType;
    variant?: ButtonType;
    variantColor?: string;
}
export declare function Button({ size, variant, children, ...rest }: ButtonProps): JSX.Element;
