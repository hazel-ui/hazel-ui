import React from "react";
import { Icon } from "../../../foundation";

export function ClearIndicator(props: any) {
  function clearValue() {
    props.clearValue();
    props.selectProps.onClear && props.selectProps.onClear();
  }

  const {
    children = <Icon.Close height="10px" />,
    getStyles,
    innerProps: { ref, onMouseDown, onTouchEnd, ...restInnerProps },
  } = props;

  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles("clearIndicator", props)}
      onMouseDown={clearValue}
      onTouchEnd={clearValue}
    >
      <div style={{ padding: "5px 5px 0px 0px", cursor: "pointer" }}>
        {children}
      </div>
    </div>
  );
}
