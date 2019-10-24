import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, wait } from '@testing-library/react'
import App from "./App";

jest.useFakeTimers();

const filterPayload = {
  filters: [
    {
      id: "country",
      name: "País",
      values: [
        { value: "BR", name: "Brasil" },
        { value: "PT", name: "Portugal" },
      ]
    }, {
      id: "offset",
      name: "Página",
      validation: { primitiveType: "INTEGER" }
    }
  ]
}
const playlistsPayload = {
  result: {
    playlists: {
      items: [{
        name: 'Sleep Songs',
        tracks: { total: 40 },
        images: [{ url: 'some/image/url' }],
        external_urls: { spotify: 'some/external/url' }
      }, {
        name: 'Wake up songs',
        tracks: { total: 32 },
        images: [{ url: 'some/image/url' }],
        external_urls: { spotify: 'some/external/url' }
      }]
    }
  }
}

describe('<App />', () => {
  let container = null;
  beforeAll(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  })

  afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("Should render and load filters", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(filterPayload)
      })
    );
    await act(async () => {
      render(<App />, container);
    });
    const formGroups = container.querySelectorAll(".form-group");
    expect(formGroups.length).toBe(3);
    ['Nome', 'País', 'Página'].forEach((text, i) => {
      expect(formGroups[i].querySelector('label').textContent).toBe(text);
    });
    global.fetch.mockRestore();
  })

  it("Should load playlists after a field selection", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(playlistsPayload)
      })
    );
    fireEvent.change(container.querySelector('select'), { target: { value: 'BR' } });
    act(() => {
      jest.advanceTimersByTime(100);
    });
    await wait(() => container.querySelector('.cardContainer'));
    expect(container.querySelector('.cardContainer')).toBeNull();
    act(() => {
      jest.advanceTimersByTime(300);
    });
    await wait(() => container.querySelector('.cardContainer'));
    expect(container.querySelectorAll('.cardContainer').length).toBe(2);
    global.fetch.mockRestore();
  });

  it("Should filter playlists after searching by name", async () => {
    const inputName = container.querySelector('[name="playlistName"]');

    fireEvent.change(inputName, { target: { value: 'sleep' } });
    await wait(() => container.querySelector('.cardContainer'));
    expect(container.querySelectorAll('.cardContainer').length).toBe(1);

    fireEvent.change(inputName, { target: { value: '' } });
    await wait(() => container.querySelector('.cardContainer'));
    expect(container.querySelectorAll('.cardContainer').length).toBe(2);
  });
})
