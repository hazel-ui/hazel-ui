import { Typography } from "../src/package";
import "./app.css";

export function App(): JSX.Element {
  return (
    <div className="bg-red-400">
      <Typography sx={{ marginTop: "1rem" }}>Hello</Typography>
    </div>
  );
}
