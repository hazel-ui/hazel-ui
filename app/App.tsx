// import { Typography, Color } from "../dist";
import { Typography, Color } from "../src/package/index.js";

import "./app.css"; // tailwind
import "../src/package/static/styles.css"; // exported styles

export function App(): JSX.Element {
  return (
    <div className="bg-green-100">
      <Typography color={Color.blue10} sx={{ marginTop: "1rem" }}>
        Hello
      </Typography>
    </div>
  );
}
