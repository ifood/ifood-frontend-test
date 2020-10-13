import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "components/core/Button";

describe("Button component", () => {
  it("render as button", () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <Button type="submit" handleClick={handleClick}>
        Testing button
      </Button>
    );

    const button = getByText("Testing button");
    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });
});
