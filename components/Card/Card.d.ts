import { ReactNode } from "react";
import { FlexboxProps, LayoutProps, SpaceProps, TypographyProps as SSTypographyProps } from "styled-system";
export interface CardProps extends FlexboxProps, LayoutProps, SpaceProps, SSTypographyProps {
    children?: ReactNode;
}
export declare function Card({ children, ...rest }: CardProps): JSX.Element;
