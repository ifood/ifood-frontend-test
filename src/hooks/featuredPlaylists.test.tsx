import React from 'react';

import axios from 'axios';

import { SnackbarProvider } from 'notistack';

import { renderHook, act } from '@testing-library/react-hooks';

import { FeaturedPlaylistProvider, useFeaturedPlaylist } from './featuredPlaylists';

describe('PlaylistList', () => {
  const playlistMock = {
    id: '37i9dQZF1DWZg863fGtALu',
    description: 'Summer classics from yesteryear!',
    name: 'Summer Throwbacks',
    external_urls: { spotify: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWZg863fGtALu' },
    images: [{ url: 'https://i.scdn.co/image/ab67706f00000003eb19e54dd1dbcbe698b49c1b' }],
  };

  it('should get featured playlist', async () => {
    const getMock = jest.fn().mockReturnValue({
      data: {
        playlists: {
          items: [playlistMock],
        },
      },
    });
    axios.get = getMock;

    const { result, waitForNextUpdate } = renderHook(useFeaturedPlaylist,
      {
        wrapper: ({ children }) => (
          <SnackbarProvider>
            <FeaturedPlaylistProvider>
              {children}
            </FeaturedPlaylistProvider>
          </SnackbarProvider>
        ),
      });

    await act(() => waitForNextUpdate());

    expect(getMock).toBeCalled();
    expect(result.current.playlists).toHaveLength(1);
  });

  it('should get featured playlist', async () => {
    const getMock = jest.fn().mockReturnValue({
      data: {
        playlists: {
          items: [playlistMock],
        },
      },
    });
    axios.get = getMock;

    const { result, waitForNextUpdate } = renderHook(useFeaturedPlaylist, {
      wrapper: ({ children }) => (
        <SnackbarProvider>
          <FeaturedPlaylistProvider>
            {children}
          </FeaturedPlaylistProvider>
        </SnackbarProvider>
      ),
    });

    await act(() => waitForNextUpdate());

    expect(getMock).toBeCalled();
    expect(result.current.playlists).toHaveLength(1);
  });

  it('should get list every 30 seconds', async () => {
    jest.useFakeTimers();

    const getMock = jest.fn().mockReturnValue({
      data: {
        playlists: {
          items: [playlistMock],
        },
      },
    });

    axios.get = getMock;

    const { result, waitForNextUpdate } = renderHook(useFeaturedPlaylist, {
      wrapper: ({ children }) => (
        <SnackbarProvider>
          <FeaturedPlaylistProvider>
            {children}
          </FeaturedPlaylistProvider>
        </SnackbarProvider>
      ),
    });

    await act(() => waitForNextUpdate());

    act(() => {
      jest.advanceTimersByTime(30000);
    });

    await act(() => waitForNextUpdate());

    expect(getMock).toBeCalledTimes(2);
    expect(result.current.playlists).toHaveLength(1);
  });
});
