import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "./App";

import "../src/package/static/styles.css";
// import "../dist/styles.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
