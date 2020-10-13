import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
 
import playlistsMock from "utils/mock/playlists.json";
import filterOptionsMock from "utils/mock/filter.json";

import Playlists from "containers/Dashboard/Playlists";

describe("Playlits screen", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const mockStore = configureStore([]);
  let store;

  store = mockStore({
    playlists: {
      isLoading: false,
      isSuccess: true,
      playlists: playlistsMock.playlists.items,
      errors: [],
    },
    filter: {
      isLoading: false,
      isSuccess: true,
      options: filterOptionsMock.filters,
      errors: [],
    },
  });

  store.dispatch = jest.fn();

  it("render playlitst", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Playlists />
      </Provider>
    );

    expect(getByText(/Playlists/i)).toBeInTheDocument();
  });
});
