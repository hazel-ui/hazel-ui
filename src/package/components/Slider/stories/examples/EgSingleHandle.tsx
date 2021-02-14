import { useState } from "react";
import { Box } from "../../../../foundation";
import { Slider } from "../../Slider";

export function EgSingleHandle() {
  const [rangeVal, setRangeVal] = useState<number>(0);
  return (
    <Box display="flex">
      <Box marginRight="2rem">{rangeVal}</Box>
      <Slider
        onChange={(value: number) => setRangeVal(value)}
        min={10}
        max={20}
        width="200px"
      />
    </Box>
  );
}
