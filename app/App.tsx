// import { Typography } from "../dist";
import { Typography, Color } from "../src/package";

import "./app.css"; // tailwind
import "../src/package/static/styles.css"; // exported styles

export function App(): JSX.Element {
  return (
    <div className="bg-red-400">
      <Typography color={Color.blue10} sx={{ marginTop: "1rem" }}>
        Hello
      </Typography>
    </div>
  );
}
