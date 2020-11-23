import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Button } from "../Button";

describe("<Button>", () => {
  test("Renders button tag with children text", () => {
    render(<Button>some text</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });
});
