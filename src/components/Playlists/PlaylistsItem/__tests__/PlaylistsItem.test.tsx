import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlaylistsItem } from '../PlaylistsItem';
import { AppProvider } from '../../../../contexts/AppContext';

const playlist = {
  id: '1',
  name: 'Playlist name',
  description: 'Playlist description',
  image: 'image1',
  url: 'http://localhost/url',
};

describe('PlaylistsItem', () => {
  test('matches the snapshot', () => {
    const { baseElement } = render(<PlaylistsItem playlist={playlist} />, { wrapper: AppProvider });
    expect(baseElement).toMatchSnapshot();
  });

  test('renders the playlists item', () => {
    render(<PlaylistsItem playlist={playlist} />, { wrapper: AppProvider });

    const link = screen.getByRole('link') as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link.href).toEqual(playlist.url);

    expect(screen.getByRole('img')).toBeInTheDocument();

    expect(screen.getByText(/playlist name/i)).toBeInTheDocument();
    expect(screen.getByText(/playlist description/i)).toBeInTheDocument();
  });
});
