import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { Badge } from "../Badge";

describe("<Badge>", () => {
  test("Renders Badge tag with children text", () => {
    render(<Badge>some text</Badge>);
    expect(screen.getByRole("Badge")).toBeInTheDocument();
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });
});
