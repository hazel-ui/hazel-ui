import React from "react";
import { components } from "react-select";

export const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <div>{props.data.label}</div>
    </components.Option>
  );
};
