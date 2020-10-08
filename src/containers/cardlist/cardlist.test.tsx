import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardList } from 'containers/cardlist';
import { axe, toHaveNoViolations } from 'jest-axe';

import { PlayListContext } from 'store/play-list-store';

expect.extend(toHaveNoViolations);

const list = [
  {
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ'
    },
    id: '37i9dQZF1DX5bjCEbRU4SJ',
    images: [
      {
        height: null,
        url: 'https://i.scdn.co/image/ab67706f00000003278197087524cc094f86e82b',
        width: null
      }
    ],
    name: 'Calm Down'
  }
];

const wrapper = (playlist = [], filteredList = [], empty = false) =>
  render(
    <PlayListContext.Provider
      value={{
        state: {
          playlist: playlist,
          filteredList: filteredList,
          emptyFilterList: empty
        },
        dispatch: {
          setPlaylist: jest.fn(),
          setFilteredList: jest.fn(),
          setEmptyFilterList: jest.fn()
        }
      }}
    >
      <CardList />
    </PlayListContext.Provider>
  );

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders component without errors', () => {
  //@ts-ignore
  const { container } = wrapper(list, list, false);

  expect(screen.getByText(/Calm Down/)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
