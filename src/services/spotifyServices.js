import axios from 'axios';

const playlistsUrl = 'https://api.spotify.com/v1/browse/featured-playlists';

export const getPlaylists = () => {
  const accessToken = localStorage.getItem('access-token');
  const headers = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  return axios.get(playlistsUrl, headers);
};
