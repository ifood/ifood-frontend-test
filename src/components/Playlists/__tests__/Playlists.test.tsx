import React from 'react';
import { render, screen } from '@testing-library/react';
import { Playlists } from '../Playlists';
import { AppProvider } from '../../../contexts/AppContext';

const playlists = [
  {
    id: '1',
    name: 'Playlist 1',
    description: 'Playlist 1',
    image: 'image1',
    url: 'url1',
  },
  {
    id: '2',
    name: 'Playlist 2',
    description: 'Playlist 2',
    image: 'image2',
    url: 'url2',
  },
  {
    id: '3',
    name: 'Playlist 3',
    description: 'Playlist 3',
    image: 'image3',
    url: 'url3',
  },
];

describe('Playlists', () => {
  test('matches the snapshot', () => {
    const { baseElement } = render(<Playlists playlists={playlists} />, { wrapper: AppProvider });
    expect(baseElement).toMatchSnapshot();
  });

  test('renders the playlists', () => {
    render(<Playlists playlists={playlists} />, { wrapper: AppProvider });

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
