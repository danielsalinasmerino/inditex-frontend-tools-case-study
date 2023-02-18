import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// TODO: Rework this once we know how the screen will be
test.skip("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
