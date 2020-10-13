import React from "react";
import { MemoryRouter } from "react-router-dom";
import { act, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

 import filterOptions from "utils/mock/filter.json";

import Filter from "components/core/Filter";

describe("Filter component", () => {
  it("render filter", async () => {
    const handleFilter = jest.fn();

    const { getByLabelText, getByText, debug } = render(
      <MemoryRouter>
        <Filter
          handleFilter={handleFilter}
          options={filterOptions.filters}
        ></Filter>
      </MemoryRouter>
    );

    const dateTimeField = getByLabelText("Data e Horário");
    const filterButton = getByText("Filtrar");

    await act(async () => {
      await userEvent.type(dateTimeField, "2020-11-20T10:00:00");
      fireEvent.click(filterButton);
    });

    expect(handleFilter).toBeCalled();
  });
});
