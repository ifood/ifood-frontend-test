import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import FeaturedPLaylists from "./index";
import { FilterProvider } from "../../context/Filter";
import { PlaylistsProvider } from "../../context/Playlists";
import { getFeaturePlaylists } from "../../services/spotify";

jest.mock("../../services/spotify");

describe("Featured Playlists", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("loads and renders the featured playlists information", async () => {
    const data = {
      message: "some message",
      playlists: {
        items: [
          {
            id: "some_id",
            external_urls: {
              spotify: "some_url",
            },
            images: [{ url: "some_image_url" }],
            name: "some_playlist_name",
          },
        ],
      },
    };

    getFeaturePlaylists.mockResolvedValue({
      data,
    });

    render(
      <FilterProvider>
        <PlaylistsProvider>
          <FeaturedPLaylists />
        </PlaylistsProvider>
      </FilterProvider>
    );

    const loading = screen.getByTestId(/loading/i);
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId(/loading/i));

    const playlistMessage = screen.getByRole("heading", {
      level: 2,
    });
    expect(playlistMessage).toHaveTextContent(data.message);

    const playlistImage = screen.getByAltText(
      `${data.playlists.items[0].name} playlist image`
    );
    expect(playlistImage).toBeInTheDocument();
  });

  test("loads and renders an error message", async () => {
    const error = {
      response: {
        data: {
          error: {
            message: "Some error",
          },
        },
      },
    };

    getFeaturePlaylists.mockRejectedValue(error);

    render(
      <FilterProvider>
        <PlaylistsProvider>
          <FeaturedPLaylists />
        </PlaylistsProvider>
      </FilterProvider>
    );

    const loading = screen.getByTestId(/loading/i);
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId(/loading/i));

    expect(
      screen.getByText(error.response.data.error.message)
    ).toBeInTheDocument();
  });

  test("Filter by name", async () => {
    const data = {
      message: "some message",
      playlists: {
        items: [
          {
            id: "1",
            external_urls: {
              spotify: "some_url",
            },
            images: [{ url: "some_image_url" }],
            name: "playlist one",
          },
          {
            id: "2",
            external_urls: {
              spotify: "some_url",
            },
            images: [{ url: "some_image_url" }],
            name: "playlist two",
          },
        ],
      },
    };

    getFeaturePlaylists.mockResolvedValue({
      data,
    });

    render(
      <FilterProvider>
        <PlaylistsProvider>
          <FeaturedPLaylists />
        </PlaylistsProvider>
      </FilterProvider>
    );

    const loading = screen.getByTestId(/loading/i);
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId(/loading/i));

    const firstPlaylist = screen.getByAltText(
      `${data.playlists.items[0].name} playlist image`
    );

    const secondPlaylist = screen.getByAltText(
      `${data.playlists.items[1].name} playlist image`
    );

    const input = screen.getByLabelText("playlistName");
    fireEvent.change(input, { target: { value: "playlist one" } });

    expect(firstPlaylist).toBeInTheDocument();

    expect(secondPlaylist).not.toBeInTheDocument();
  });
});
