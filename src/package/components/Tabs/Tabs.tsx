import {
  List as RadixList,
  Panel as RadixPanel,
  Root as RadixRoot,
  Tab as RadixTab,
} from "@radix-ui/react-tabs";
import styled from "styled-components";

import { Color } from "../../foundation";

import type { TabsOwnProps } from "@radix-ui/react-tabs";

function Root(props: TabsOwnProps): JSX.Element {
  return <RadixRoot {...props} />;
}

const List = styled(RadixList)`
  display: flex;
  border-bottom: 1px solid ${Color.gray8};
  width: fit-content;
`;

const Tab = styled(RadixTab)`
  padding: 10px 20px;
  color: ${Color.gray9};
  user-select: none;
  cursor: pointer;

  &:hover {
    color: ${Color.gray11};
  }

  &[data-state="active"] {
    color: ${Color.gray12};
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
  }
`;

const Panel = styled(RadixPanel)`
  padding: 20px 0 0;
`;

export const Tabs = {
  Root,
  List,
  Tab,
  Panel,
};
