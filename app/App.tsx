// import { Typography, Color } from "../dist";
import { Typography, Color } from "../src/package/index.js";

import "../src/package/static/styles.css"; // exported styles

export function App(): JSX.Element {
  return (
    <Typography color={Color.blue10} sx={{ marginTop: "1rem" }}>
      Hello
    </Typography>
  );
}
