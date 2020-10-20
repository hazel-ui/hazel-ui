import React from "react";

import { Button } from "./components";

export function App() {
  return (
    <>
      <header>
        <p>Custom React table component</p>
        <Button
          onClick={() => {
            alert("Hey!");
          }}
        >
          Button
        </Button>
        <Button variant="secondary">Button</Button>
      </header>
    </>
  );
}
