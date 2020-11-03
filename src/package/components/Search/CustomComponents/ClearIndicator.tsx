import React from "react";

export const ClearIndicator = (props: any) => {
  const clearValue = () => {
    props.clearValue();
    props.selectProps.onClear && props.selectProps.onClear();
  };

  const {
    children = <>clear</>,
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
      <div style={{ padding: "0px 5px" }}>{children}</div>
    </div>
  );
};
