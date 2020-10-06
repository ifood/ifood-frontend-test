import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import * as useSearchNamed from '../../hooks/useSearch';
import Playlists from './Playlists';

const onSearch: jest.Mock<any, any> = (useSearchNamed as any).onSearch;

jest.mock('../../hooks/useSearch', () => {
  const playlists = [{
      description: 'my playlist',
      id: 'as54d6as5d4',
      external_urls: [{ url: 'https://open.spotify.com/playlist/1Bkv60CWboSUKZXbkgLG7M?si=sq94QzKYR7Wu3BENP-PMTA' }],
      images: [{ url: 'https://via.placeholder.com/350x150' }],
      name: 'Follow me'
    },
  ];
  const loading = false;
  const onSearch = jest.fn();
  const handleFilters = jest.fn();

  const useSearch = () => {
    return { playlists, onSearch, handleFilters, loading }
  }

  return {
    __esModule: true,
    default: useSearch,
    onSearch,
  }
});

jest.mock('../../hooks/useFilters', () => {
  const loading = false;
  const filters = [{
    id: "timestamp",
    name: "Data e Horário",
    validation: {
      primitiveType: "STRING",
      entityType: "DATE_TIME",
      pattern: "yyyy-MM-ddTHH:mm:ss"
    }
  }]
  const useFilters = () => {
    return { filters, loading }
  };

  return {
    __esModule: true,
    default: useFilters,
  }
});

beforeEach(() => {
  onSearch.mockClear();
})

describe('Playlists', () => {
  test('Simple render', () => {
    const { container } = render(<Playlists />);
    expect(container.querySelector('.playlists')).toBeInTheDocument();
  });
});
