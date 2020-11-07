import React from "react";
import { components } from "react-select";
import styled from "styled-components";
import { Layout } from "../../../foundation";

export function Control({ children, ...props }: any) {
  return (
    <Layout display="inline-flex">
      <Label isFloating={props.isFocused || props.hasValue}>Select</Label>

      <components.Control {...props}>
        <Layout display="flex">
          <components.DropdownIndicator {...props} />
          <components.IndicatorSeparator {...props} />
        </Layout>
        {children}
      </components.Control>
    </Layout>
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
