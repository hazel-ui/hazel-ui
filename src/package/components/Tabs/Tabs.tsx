import styled from "styled-components";
import {
  Root as RadixRoot,
  List as RadixList,
  Panel as RadixPanel,
  Tab as RadixTab,
} from "@radix-ui/react-tabs";
import type { TabsOwnProps } from "@radix-ui/react-tabs";
import { Color } from "../../foundation";

export function Root(props: TabsOwnProps): JSX.Element {
  return <RadixRoot {...props} />;
}

export const List = styled(RadixList)`
  display: flex;
  border-bottom: 1px solid ${Color.gray40};
  width: fit-content;
`;

export const Tab = styled(RadixTab)`
  padding: 10px 20px;
  color: ${Color.gray50};
  user-select: none;
  cursor: pointer;

  &:hover {
    color: ${Color.gray90};
  }

  &[data-state="active"] {
    color: ${Color.gray90};
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
  }
`;

export const Panel = styled(RadixPanel)`
  padding: 20px 0 0;
`;
