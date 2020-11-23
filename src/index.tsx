import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./package/static/styles.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
