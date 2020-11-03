import { ReactNode } from "react";
import styled from "styled-components";
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps as SSLayoutProps,
} from "styled-system";

export interface LayoutProps extends FlexboxProps, SSLayoutProps {
  children?: ReactNode;
}

const styledSystemStyles = compose(flexbox, layout);

export const Layout = styled.div<LayoutProps>`
  ${styledSystemStyles}
`;
