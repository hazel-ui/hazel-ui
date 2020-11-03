import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { Button } from "../Button";

describe("<Button>", () => {
  test("Renders button tag with children text", () => {
    render(<Button>some text</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });
});
