import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";
import { FilterProvider } from "../../context/Filter";

describe("Header", () => {
  test("renders ifood smile", () => {
    render(<Header />);
    const appLogo = screen.getByAltText(/Spotifood/i);
    expect(appLogo).toBeInTheDocument();
  });

  test("renders Spotifood", () => {
    render(<Header />);
    const appName = screen.getByText(/Spotifood/i);
    expect(appName).toBeInTheDocument();
  });

  test("renders filter image", () => {
    render(<Header />);
    const filterImg = screen.getByAltText(/filter image/i);
    expect(filterImg).toBeInTheDocument();
  });

  describe("Filter Modal", () => {
    beforeEach(() => {
      render(
        <FilterProvider>
          <Header />
        </FilterProvider>
      );
    });
    test("shows filter modal", () => {
      const filterImg = screen.getByAltText(/filter image/i);
      fireEvent.click(filterImg);

      const modalTitle = screen.getByRole(/dialog/i);
      expect(modalTitle).toBeInTheDocument();
    });

    test("hides filter modal", () => {
      const filterImg = screen.getByAltText(/filter image/i);
      fireEvent.click(filterImg);

      const modalTitle = screen.getByRole(/dialog/i);
      expect(modalTitle).toBeInTheDocument();
      fireEvent.click(filterImg);

      expect(modalTitle).not.toBeInTheDocument();
    });
  });
});
