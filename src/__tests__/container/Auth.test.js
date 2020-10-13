import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, fireEvent } from "@testing-library/react";

import Auth from "containers/Dashboard/Auth";

describe("Auth screen", () => {
  const mockStore = configureStore();
  let store;

  store = mockStore();
  window.open = jest.fn();

  it("render auth ", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Auth />
      </Provider>
    );

    const loginButton = getByText("Login");

    expect(
      getByText("Acesse a nossa aplicação e ouça suas músicas favoritas!")
    ).toBeInTheDocument();

    fireEvent.click(loginButton);
  });
});
