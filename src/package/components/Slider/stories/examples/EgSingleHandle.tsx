import { useState } from "react";

import { Slider } from "../../Slider.js";

export function EgSingleHandle() {
  const [rangeVal, setRangeVal] = useState<number>(0);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "2rem" }}>{rangeVal}</div>
      <Slider
        onChange={(value: number) => setRangeVal(value)}
        min={10}
        max={20}
        width="200px"
      />
    </div>
  );
}
