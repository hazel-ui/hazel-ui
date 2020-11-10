import React from "react";
import { Icon } from "../../../foundation";

export function ClearIndicator(props: any) {
  function clearValue() {
    props.clearValue();
    props.selectProps.onClear && props.selectProps.onClear();
  }

  const {
    children = <Icon.X size="1.3rem" />,
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
      <div style={{ cursor: "pointer" }}>{children}</div>
    </div>
  );
}
