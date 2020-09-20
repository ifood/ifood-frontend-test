import React from 'react';
import axios from 'axios';
import { SnackbarProvider } from 'notistack';

import { create, act } from 'react-test-renderer';

import PlaylistsFilters from '.';

import { FeaturedPlaylistProvider } from '../../../hooks/featuredPlaylists';

/**
 * Esse arquivo foi criado com intuido de evitar sobreposições e
 * conflitos no método "act"
 */

describe('PlaylistList with Teste Renderer', () => {
  const setMobileOpen = jest.fn();

  it('should show playlists', async () => {
    let wrapper: any;

    const getMock = jest.fn().mockReturnValue({
      data: {
        filters: [{
          id: 'locale',
          name: 'Locale',
        }],
        playlists: { items: [] }, // mocking a module
      },
    });

    axios.get = getMock;

    await act(async () => {
      wrapper = create(
        <SnackbarProvider>
          <FeaturedPlaylistProvider>
            <PlaylistsFilters mobileOpen={false} setMobileOpen={setMobileOpen} />
          </FeaturedPlaylistProvider>
        </SnackbarProvider>,
      );
    });

    setTimeout(() => {
      const wrapRoot = wrapper.root;
      const playlistItems = wrapRoot.findAllByProps({ 'data-testeid': 'filter-item' });
      expect(playlistItems).toHaveLength(1);
    });
  });
});
