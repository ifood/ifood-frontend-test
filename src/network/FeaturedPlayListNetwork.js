import Axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-js';

const BASE_URL = 'https://www.mocky.io/v2';
const RESOURCE = '5a25fade2e0000213aa90776';

function getFilterMetadata() {
  return Axios.get(`${BASE_URL}/${RESOURCE}`).then(({ data }) => data.filters);
}

function getFeaturedPlayList(accessToken, data) {
  const spotify = new SpotifyWebApi();
  spotify.setAccessToken(accessToken);
  return spotify.getFeaturedPlaylists(data);
}

export { getFilterMetadata, getFeaturedPlayList };
