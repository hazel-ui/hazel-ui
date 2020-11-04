import { ReactNode } from "react";
import { BorderProps, ColorProps } from "styled-system";
import { BadgeSizeType, BadgeType } from "./types";
export interface BadgeProps extends BorderProps, ColorProps {
    children?: ReactNode;
    size?: BadgeSizeType;
    variant?: BadgeType;
    variantColor?: string;
}
export declare const Badge: ({ size, variant, children, ...rest }: BadgeProps) => JSX.Element;
