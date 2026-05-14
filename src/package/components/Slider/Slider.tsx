import RCSlider, { Handle } from "rc-slider";

import { Icon } from "../../foundation/Icon/Icon.js";
import { Container, Styles } from "./styles.js";

import type { SliderProps as RCSliderProps } from "rc-slider";

interface SliderProps extends RCSliderProps {
  width?: string;
}

function Slider({ min = 0, max = 30, width = "100%", ...rest }: SliderProps) {
  return (
    <Styles>
      <Container width={width}>
        {/* @ts-ignore */}
        <RCSlider
          handle={({ dragging, ...restProps }: any) => (
            <Handle dragging={dragging.toString()} {...restProps}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Icon.Circle width="8px" />
              </div>
            </Handle>
          )}
          handleStyle={{
            borderColor: "white",
            boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.28)",
            height: 32,
            marginTop: -14,
            width: 32,
          }}
          trackStyle={{ backgroundColor: "black" }}
          min={min}
          max={max}
          {...rest}
        />
      </Container>
    </Styles>
  );
}

export type { SliderProps };
export { Slider };
