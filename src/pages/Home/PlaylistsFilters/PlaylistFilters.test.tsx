import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import { SnackbarProvider } from 'notistack';

import LinearProgress from '@material-ui/core/LinearProgress';

import { act } from 'react-dom/test-utils';

import PlaylistsFilters from '.';

import { EmptyState } from './styles';

import { FeaturedPlaylistProvider } from '../../../hooks/featuredPlaylists';

describe('PlaylistList', () => {
  const setMobileOpen = jest.fn();

  it('should show progress bar', () => {
    const wrapper = mount(
      <SnackbarProvider>
        <FeaturedPlaylistProvider>
          <PlaylistsFilters mobileOpen={false} setMobileOpen={jest.fn()} />
        </FeaturedPlaylistProvider>
      </SnackbarProvider>,
    );

    setTimeout(() => {
      expect(wrapper.find(LinearProgress)).toHaveLength(1);
    });
  });

  it('should show empty state', async () => {
    const getMock = jest.fn().mockReturnValue({ data: { playlists: { items: [] } } });
    axios.get = getMock;

    let wrapper: any;

    await act(async () => {
      wrapper = mount(
        <SnackbarProvider>
          <FeaturedPlaylistProvider>
            <PlaylistsFilters mobileOpen={false} setMobileOpen={setMobileOpen} />
          </FeaturedPlaylistProvider>
        </SnackbarProvider>,
      );
    });

    setTimeout(() => {
      expect(getMock).toBeCalled();
      expect(wrapper.find(EmptyState)).toHaveLength(1);
    });
  });
});
