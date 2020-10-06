import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import axios from 'axios';
import { SpotifyServiceAuth } from '../services/auth.service';
import { mocked } from 'ts-jest/utils';
import Swal from 'sweetalert2';
import useSearch from './useSearch';

const getPlaylists = mocked(SpotifyServiceAuth.getPlaylists);
const mockedAxios = mocked(axios);

const spy = jest.spyOn(Swal, 'fire');

const MockUseCustomHook = () => {
  const { playlists, loading, handleFilters, onSearch } = useSearch();
  return (
    <div>
      <span className="loading">{loading ? 'loading' : ''}</span>
      <ul>
        {playlists.map(p => (
          <li key={p.id} >
            <span data-testid="name">{p.name}</span>
            <span data-testid="description">{p.description}</span>
          </li>
        ))}
      </ul>
      <button data-testid="button-locale" onClick={() => {handleFilters('locale', 'pt_BR')}}>Filtro</button>
      <button data-testid="button-locale-empty" onClick={() => {handleFilters('locale', '')}}>Filtro</button>
      <button data-testid="button-country" onClick={() => {handleFilters('country', 'BR')}}>Filtro</button>
      <button data-testid="button-country-empty" onClick={() => {handleFilters('country', '')}}>Filtro</button>
      <button data-testid="button-limit" onClick={() => {handleFilters('limit', 12)}}>Filtro</button>
      <button data-testid="button-limit-empty" onClick={() => {handleFilters('limit', '')}}>Filtro</button>
      <button data-testid="button-offset" onClick={() => {handleFilters('offset', 12)}}>Filtro</button>
      <button data-testid="button-offset-empty" onClick={() => {handleFilters('offset', '')}}>Filtro</button>
      <button data-testid="button-timestamp" onClick={() => {handleFilters('timestamp', '2020-10-05T14:58')}}>Filtro</button>
      <button data-testid="button-timestamp-empty" onClick={() => {handleFilters('timestamp', '')}}>Filtro</button>
      <input type="text" data-testid="search" onChange={(ev) => onSearch(ev.target.value)}  />
    </div>
  )
};

const mockReturnValue: any = [
  {
    description: 'my playlist',
    id: 'as54d6as5d4',
    external_urls: {
      url: 'https://open.spotify.com/playlist/1Bkv60CWboSUKZXbkgLG7M?si=sq94QzKYR7Wu3BENP-PMTA'
    },
    images: {
      url: 'https://via.placeholder.com/350x150'
    },
    name: 'Follow me'
  },
  {
    description: 'my second playlist',
    id: 'asdas5656',
    external_urls: {
      url: 'https://open.spotify.com/playlist/1Bkv60CWboSUKZXbkgLG7M?si=sq94QzKYR7Wu3BENP-PMTA'
    },
    images: {
      url: 'https://via.placeholder.com/350x150'
    },
    name: 'Hi'
  },
  {
    description: 'another one',
    id: '12316as',
    external_urls: {
      url: 'https://open.spotify.com/playlist/1Bkv60CWboSUKZXbkgLG7M?si=sq94QzKYR7Wu3BENP-PMTA'
    },
    images: {
      url: 'https://via.placeholder.com/350x150'
    },
    name: 'This is my playlist'
  }
];

jest.mock('../services/auth.service');
jest.mock('axios');
jest.mock('moment', () => {
  const moment = () => ({
    format: () => '2020-10-05T14:58:00'
  });

  return moment;
});

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));


beforeEach(() => {
  getPlaylists.mockClear();
  mockedAxios.mockClear();
  spy.mockClear();
});

describe('useSearch hook', () => {
  test('Simple render', async () => {
    getPlaylists.mockImplementation(() => Promise.resolve([]));
    const { container } = render(<MockUseCustomHook />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector('.loading')).toHaveTextContent('loading');
    await act(async () => new Promise(resolve => setTimeout(resolve, 100)));
    expect(container.querySelector('.loading')).toHaveTextContent('');
    expect(getPlaylists).toHaveBeenCalledTimes(1);
  });

  test('Render with playlists', async () => {
    getPlaylists.mockImplementation(() => Promise.resolve(mockReturnValue));
    const { container } = render(<MockUseCustomHook />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector('.loading')).toHaveTextContent('loading');
    await act(async () => new Promise(resolve => setTimeout(resolve, 100)));
    expect(container.querySelector('.loading')).toHaveTextContent('');
    expect(container.querySelectorAll('li').length).toBe(3);
  });

  test('Erro to get filters', async () => {
    const error = new Error('Error testing');
    (error as any).response = { status: 400 };
    getPlaylists.mockImplementation(() => Promise.reject(error));
    const { container } = render(<MockUseCustomHook />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector('.loading')).toHaveTextContent('loading');
    await act(async () => new Promise(resolve => setTimeout(resolve, 100)));
    expect(container.querySelector('.loading')).toHaveTextContent('');
    expect(spy).toHaveBeenCalledWith({ icon: 'error', text: 'Erro ao buscar playlists, tente novamente...' });
  });

  test('Click on filters', async () => {
    getPlaylists.mockImplementation(() => Promise.resolve(mockReturnValue));
    const { container, getByTestId } = render(<MockUseCustomHook />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector('.loading')).toHaveTextContent('loading');
    await act(async () => new Promise(resolve => setTimeout(resolve, 100)));
    expect(container.querySelector('.loading')).toHaveTextContent('');

    await act(async () => {
      await fireEvent.click(getByTestId('button-timestamp'));
      await fireEvent.click(getByTestId('button-limit'));
      await fireEvent.click(getByTestId('button-offset'));
      await fireEvent.click(getByTestId('button-locale'));
      await fireEvent.click(getByTestId('button-country'));

      await fireEvent.click(getByTestId('button-timestamp-empty'));
      await fireEvent.click(getByTestId('button-limit-empty'));
      await fireEvent.click(getByTestId('button-offset-empty'));
      await fireEvent.click(getByTestId('button-locale-empty'));
      await fireEvent.click(getByTestId('button-country-empty'));
    });
  });

  test('Search', async () => {
    getPlaylists.mockImplementation(() => Promise.resolve(mockReturnValue));
    const { container, getByTestId } = render(<MockUseCustomHook />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector('.loading')).toHaveTextContent('loading');
    await act(async () => new Promise(resolve => setTimeout(resolve, 100)));
    expect(container.querySelector('.loading')).toHaveTextContent('');

    await act(async () => {
      await fireEvent.change(getByTestId('search'), {
        target: { value: 'my playlist' },
      });
    });

    expect(container.querySelectorAll('li').length).toBe(1);

    await act(async () => {
      await fireEvent.change(getByTestId('search'), {
        target: { value: '' },
      });
    });

    expect(container.querySelectorAll('li').length).toBe(3);
  })
})
