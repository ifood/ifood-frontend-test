import React from "react";
import { render } from "@testing-library/react";

import Header from "components/core/Header";

describe("Header component", () => {
  it("render header", () => {
    const { getByText } = render(<Header userName="Testing" />);

    const userName = getByText("Ola, Testing.");
    expect(userName).toBeInTheDocument();
  });
});
