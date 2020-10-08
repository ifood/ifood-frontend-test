import React from 'react';
import { render, screen, waitForDomChange, waitForElement } from '@testing-library/react';
import { Filter } from 'containers/filter';
import { axe, toHaveNoViolations } from 'jest-axe';

import { PlayListContext } from 'store/play-list-store';
import { act } from 'react-dom/test-utils';

expect.extend(toHaveNoViolations);

jest.useFakeTimers();

jest.mock('services/api-spotify', () => ({
  getFeaturedList: jest.fn(() => Promise.resolve(true))
  // getFeaturedList: jest.fn(() =>
  //   Promise.resolve([
  //     {
  //       external_urls: {
  //         spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX5bjCEbRU4SJ'
  //       },
  //       id: '37i9dQZF1DX5bjCEbRU4SJ',
  //       images: [
  //         {
  //           height: null,
  //           url: 'https://i.scdn.co/image/ab67706f00000003278197087524cc094f86e82b',
  //           width: null
  //         }
  //       ],
  //       name: 'Calm Down'
  //     }
  //   ])
  // )
}));

jest.mock('services/api-mocky', () => ({
  getFilterData: jest.fn(() =>
    Promise.resolve([
      {
        id: 'locale',
        name: 'Locale',
        values: [
          {
            value: 'en_AU',
            name: 'en_AU'
          },
          {
            value: 'de_DE',
            name: 'de_DE '
          },
          {
            value: 'pt_BR',
            name: 'pt_BR'
          },
          {
            value: 'fr_FR',
            name: 'fr_FR'
          },
          {
            value: 'en_US',
            name: 'en_US'
          },
          {
            value: 'es_AR',
            name: 'es_AR'
          }
        ]
      },
      {
        id: 'country',
        name: 'País',
        values: [
          {
            value: 'AU',
            name: 'Australia'
          },
          {
            value: 'DE',
            name: 'Alemanhã'
          },
          {
            value: 'BR',
            name: 'Brasil'
          },
          {
            value: 'PT',
            name: 'Portugal'
          },
          {
            value: 'en_US',
            name: 'EUA'
          },
          {
            value: 'RU',
            name: 'Rússia'
          }
        ]
      },
      {
        id: 'timestamp',
        name: 'Data e Horário',
        validation: {
          primitiveType: 'STRING',
          entityType: 'DATE_TIME',
          pattern: 'yyyy-MM-ddTHH:mm:ss'
        }
      },
      {
        id: 'limit',
        name: 'Quantidade',
        validation: {
          primitiveType: 'INTEGER',
          min: 1,
          max: 50
        }
      },
      {
        id: 'offset',
        name: 'Página',
        validation: {
          primitiveType: 'INTEGER'
        }
      }
    ])
  )
}));

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
      <Filter />
    </PlayListContext.Provider>
  );

test('renders filter component without errors', async () => {
  let container;

  await act(async () => {
    container = wrapper();
  });

  expect(screen.getByText(/Locale/)).toBeInTheDocument();
  expect(screen.getByText(/País/)).toBeInTheDocument();
  expect(screen.getByText(/Data e Horário/)).toBeInTheDocument();
  expect(screen.getByText(/Quantidade/)).toBeInTheDocument();
  expect(screen.getByText(/Página/)).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
