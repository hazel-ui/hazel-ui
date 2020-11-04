import { ReactNode } from "react";
import { BackgroundProps, BorderProps, ColorProps, DisplayProps, LayoutProps, SpaceProps, TypographyProps as SSTypographyProps } from "styled-system";
import { TypographyType } from "./types";
export interface TypographyProps extends BackgroundProps, BorderProps, ColorProps, DisplayProps, LayoutProps, SpaceProps, SSTypographyProps {
    variant?: TypographyType;
    children?: ReactNode;
}
export declare function Typography({ variant, children, ...rest }: TypographyProps): JSX.Element;
