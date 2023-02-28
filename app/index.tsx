import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.js";

import "../src/static/styles.css"; // exported styles
// import "../dist/styles.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
