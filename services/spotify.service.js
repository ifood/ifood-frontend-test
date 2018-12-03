import axios from 'axios';

const SPOTIFY_API_URI = 'https://api.spotify.com/v1';
const SPOTIFY_OAUTH_URI = 'https://accounts.spotify.com/authorize';


export default class SpotityService {
  static spotiaxios(accessToken) {
    const token = accessToken || window.localStorage.getItem('accessToken');
    if (token) {
      const a = { ...axios };
      a.defaults.headers.common.Authorization = `Bearer ${token}`;
      return a;
    }
    return axios;
  }

  static popup() {
    const scope = 'playlist-read-private user-library-read playlist-modify-private';
    const url = [`${SPOTIFY_OAUTH_URI}?response_type=token`];
    const redir = process.env.NODE_ENV === 'production' ? 'http://ifood-frontend-test.surge.sh' : 'http://localhost:3000';
    url.push(`client_id=${process.env.SPOTIFY_CLIENT_ID}`);
    url.push(`scope=${encodeURIComponent(scope)}`);
    url.push(`redirect_uri=${encodeURIComponent(redir)}`);
    const href = url.join('&');

    window.open(href, 'spotify', 'height=300,width=400');
  }

  static connect() {
    this.logout();
    this.popup();
  }

  static getFeaturedPlaylists(filters, limit, offset) {
    const url = `${SPOTIFY_API_URI}/browse/featured-playlists`;
    return this
      .spotiaxios()
      .get(url, {
        params: {
          limit,
          offset,
        },
      })
      .then(result => result.data.playlists);
  }

  static getMe(accessToken) {
    return this.spotiaxios(accessToken).get(`${SPOTIFY_API_URI}/me`);
  }

  static logout() {
    window.localStorage.removeItem('accessToken');
  }
}
