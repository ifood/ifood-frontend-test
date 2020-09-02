import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "./index";

describe("Error", () => {
  let errorScreen;
  const errorMessage = "some error message";
  beforeEach(() => {
    errorScreen = render(<Error message={errorMessage} />);
  });

  test("renders error title", () => {
    const title = errorScreen.getByRole("heading", {
      level: 2,
    });
    expect(title).toHaveTextContent("Desculpe :(");
  });

  test("renders error message", () => {
    expect(errorScreen.getByText(errorMessage)).toBeInTheDocument();
  });
});
