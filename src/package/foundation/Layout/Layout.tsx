import { ReactNode } from "react";
import styled from "styled-components";
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps as SSLayoutProps,
  space,
  SpaceProps as SSSpaceProps,
  typography,
  TypographyProps as SSTypographyProps,
} from "styled-system";

export interface LayoutProps
  extends FlexboxProps,
    SSLayoutProps,
    SSSpaceProps,
    SSTypographyProps {
  children?: ReactNode;
}

const styledSystemStyles = compose(flexbox, layout, space, typography);

export const Layout = styled.div<LayoutProps>`
  ${styledSystemStyles}
`;
