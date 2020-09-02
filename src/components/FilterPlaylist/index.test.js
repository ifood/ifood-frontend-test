import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import FilterPlaylist from "./index";
import { FilterProvider, errorMessage } from "../../context/Filter";
import { getFilters } from "../../services/filter";

jest.mock("../../services/filter");

describe("Filter", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  const filters = [
    {
      id: "locale",
      name: "Locale",
      values: [
        {
          value: "en_AU",
          name: "en_AU",
        },
        {
          value: "de_DE",
          name: "de_DE ",
        },
        {
          value: "pt_BR",
          name: "pt_BR",
        },
        {
          value: "fr_FR",
          name: "fr_FR",
        },
        {
          value: "en_US",
          name: "en_US",
        },
        {
          value: "es_AR",
          name: "es_AR",
        },
      ],
    },
    {
      id: "country",
      name: "País",
      values: [
        {
          value: "AU",
          name: "Australia",
        },
        {
          value: "DE",
          name: "Alemanhã",
        },
        {
          value: "BR",
          name: "Brasil",
        },
        {
          value: "PT",
          name: "Portugal",
        },
        {
          value: "en_US",
          name: "EUA",
        },
        {
          value: "RU",
          name: "Rússia",
        },
      ],
    },
    {
      id: "timestamp",
      name: "Data e Horário",
      validation: {
        primitiveType: "STRING",
        entityType: "DATE_TIME",
        pattern: "yyyy-MM-ddTHH:mm:ss",
      },
    },
    {
      id: "limit",
      name: "Quantidade",
      validation: {
        primitiveType: "INTEGER",
        min: 1,
        max: 50,
      },
    },
    {
      id: "offset",
      name: "Página",
      validation: {
        primitiveType: "INTEGER",
      },
    },
  ];

  test("shows loading and fields", async () => {
    getFilters.mockResolvedValue({ filters });

    render(
      <FilterProvider>
        <FilterPlaylist />
      </FilterProvider>
    );
    const loading = screen.getByTestId(/loading/i);
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId(/loading/i));

    const playlistMessage = screen.getByRole("heading", {
      level: 2,
    });
    expect(playlistMessage).toHaveTextContent("Filtros");
  });

  test("shows fields", async () => {
    getFilters.mockResolvedValue({ filters });

    render(
      <FilterProvider>
        <FilterPlaylist />
      </FilterProvider>
    );

    const loading = screen.getByTestId(/loading/i);
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId(/loading/i));

    const localeField = filters.find((filter) => filter.id === "locale");
    expect(screen.getByLabelText(`${localeField.name}:`)).toBeInTheDocument();

    const countryField = filters.find((filter) => filter.id === "country");
    expect(screen.getByLabelText(`${countryField.name}:`)).toBeInTheDocument();

    const timestampField = filters.find((filter) => filter.id === "timestamp");
    expect(
      screen.getByLabelText(`${timestampField.name}:`)
    ).toBeInTheDocument();

    const limitField = filters.find((filter) => filter.id === "limit");
    expect(screen.getByLabelText(`${limitField.name}:`)).toBeInTheDocument();

    const offsetField = filters.find((filter) => filter.id === "offset");
    expect(screen.getByLabelText(`${offsetField.name}:`)).toBeInTheDocument();
  });

  test("loads and renders an error message", async () => {
    getFilters.mockRejectedValue({});

    render(
      <FilterProvider>
        <FilterPlaylist />
      </FilterProvider>
    );

    const loading = screen.getByTestId(/loading/i);
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId(/loading/i));

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
