import { ReactNode } from "react";
import styled from "styled-components";
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps as SSSpaceProps,
  typography,
  TypographyProps as SSTypographyProps,
} from "styled-system";

export interface BoxProps
  extends FlexboxProps,
    LayoutProps,
    SSSpaceProps,
    SSTypographyProps {
  children?: ReactNode;
}

const styledSystemStyles = compose(flexbox, layout, space, typography);

export const Box = styled.div<BoxProps>`
  ${styledSystemStyles}
`;
