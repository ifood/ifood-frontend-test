import axios from 'axios';

const playlistsUrl = 'https://api.spotify.com/v1/browse/featured-playlists';

export const getPlaylists = params => {
  const accessToken = localStorage.getItem('access-token');
  const options = {
    headers: { Authorization: `Bearer ${accessToken}` },
    params,
  };

  return axios.get(playlistsUrl, options);
};
