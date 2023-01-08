import { components } from "react-select";
import { styled } from "styled-components";

import { Box } from "../../../foundation/Box/Box.js";
import { Color } from "../../../foundation/Color/Color.js";
import { Icon } from "../../../foundation/Icon/Icon.js";
import { Theme } from "../../../foundation/Theme/Theme.js";

export function Control({
  selectProps: { floatingLabel, invalidSearch },
  children,
  ...props
}: any) {
  return (
    <components.Control {...props}>
      <Box margin="0rem 0.1rem">
        <components.DropdownIndicator {...props}>
          <Icon.Search
            size="1.3rem"
            color={invalidSearch ? Color.red7 : "none"}
          />
        </components.DropdownIndicator>
      </Box>

      <StyledIndicatorSeparator {...props} />

      <Label isFloating={props.isFocused || props.hasValue} theme={props.theme}>
        {floatingLabel}
      </Label>

      {children}
    </components.Control>
  );
}

const StyledIndicatorSeparator = styled(components.IndicatorSeparator)`
  height: 1.1rem;
  position: relative;
  top: 14%;
`;

const Label = styled.label<{ isFloating?: boolean; theme: any }>`
  position: absolute;
  left: 3.3rem;

  pointer-events: none;
  font-family: ${Theme.font.sansSerif};

  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  color: ${(props) => props.theme.colors.neutral50};
  top: ${(props) => (props.isFloating ? `10%` : `30%`)};
  font-size: ${(props) => (props.isFloating ? `0.6rem` : `1rem`)};
`;
