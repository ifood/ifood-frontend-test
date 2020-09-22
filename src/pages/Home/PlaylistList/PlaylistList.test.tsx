import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import { SnackbarProvider } from 'notistack';

import LinearProgress from '@material-ui/core/LinearProgress';

import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

import PlaylistList from '.';

import { EmptyState } from './styles';

import { FeaturedPlaylistProvider } from '../../../hooks/featuredPlaylists';

describe('PlaylistList', () => {
  let wrapper: any;

  it('should show progress bar', () => {
    wrapper = mount(
      <SnackbarProvider>
        <FeaturedPlaylistProvider>
          <PlaylistList />
        </FeaturedPlaylistProvider>
      </SnackbarProvider>,
    );

    expect(wrapper.find(LinearProgress)).toHaveLength(1);
  });

  it('should show empty state', async () => {
    const getMock = jest.fn().mockReturnValue({ data: { playlists: { items: [] } } });
    axios.get = getMock;

    await act(async () => {
      wrapper = mount(
        <SnackbarProvider>
          <FeaturedPlaylistProvider>
            <PlaylistList />
          </FeaturedPlaylistProvider>
        </SnackbarProvider>,
      );
    });

    expect(getMock).toBeCalled();
    expect(wrapper.find(EmptyState)).toHaveLength(1);
  });

  it('should show playlists', async () => {
    const getMock = jest.fn().mockReturnValue({
      data: {
        playlists: {
          items: [{
            id: '37i9dQZF1DWZg863fGtALu',
            description: 'Summer classics from yesteryear!',
            name: 'Summer Throwbacks',
            external_urls: { spotify: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWZg863fGtALu' },
            images: [{ url: 'https://i.scdn.co/image/ab67706f00000003eb19e54dd1dbcbe698b49c1b' }],
          }],
        },
      },
    });

    axios.get = getMock;

    await TestRenderer.act(async () => {
      wrapper = TestRenderer.create(
        <SnackbarProvider>
          <FeaturedPlaylistProvider>
            <PlaylistList />
          </FeaturedPlaylistProvider>
        </SnackbarProvider>,
      );
    });

    const wrapRoot = wrapper.root;

    const playlistItems = wrapRoot.findAllByProps({ 'data-testeid': 'playlist-item' });
    expect(playlistItems).toHaveLength(1);
  });
});
