import axios from 'axios';

import PlaylistsFilters from './playlistFilters';

describe('SpotifyService', () => {
  it('should get featured playlists', async () => {
    const response = {
      filters: [{ }],
    };

    const getMock = jest.fn().mockReturnValue({ data: response });
    axios.get = getMock;

    const filters = await PlaylistsFilters.get();

    expect(getMock).toBeCalled();
    expect(filters.length).toEqual(1);
  });
});
