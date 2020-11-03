import React from "react";
import { components } from "react-select";
import styled from "styled-components";

export function Control({ children, ...props }: any) {
  return (
    <div style={{ display: "inline-flex" }}>
      <Label isFloating={props.isFocused || props.hasValue}>Select</Label>

      <components.Control {...props}>
        <div style={{ display: "flex" }}>
          <components.DropdownIndicator {...props} />
          <components.IndicatorSeparator {...props} />
        </div>
        {children}
      </components.Control>

      {/* custom arrow icon */}
      {/* <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg> */}
    </div>
  );
}

const Label = styled.label<{ isFloating?: boolean }>`
  left: 50px;
  pointer-events: none;
  font-family: sans-serif;
  font-style: italic;
  position: absolute;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  top: ${(props) => (props.isFloating ? `5px` : `35%`)};
  color: ${(props) => (props.isFloating ? `red` : `blue`)};
  font-size: ${(props) => (props.isFloating ? `0.5rem` : `1rem`)};
`;
