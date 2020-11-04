import { ReactNode } from "react";
import { FlexboxProps, LayoutProps as SSLayoutProps } from "styled-system";
export interface LayoutProps extends FlexboxProps, SSLayoutProps {
    children?: ReactNode;
}
export declare const Layout: import("styled-components").StyledComponent<"div", any, LayoutProps, never>;
