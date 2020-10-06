import axios from 'axios';
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPES,
  API_SPOTIFY
} from '../config.json';
interface IGetPlaylist {
  locale: string;
  timestamp: string;
  limit: number;
  offset: number;
  country: string;
}
class SpotifyService {
  private token = '';

  public authorization() {
    const client_id = CLIENT_ID; // Your client id
    const redirect_uri = REDIRECT_URI; // Your redirect uri
    const authEndpoint = AUTH_ENDPOINT;
    const scopes = SCOPES;

    return `${authEndpoint}/authorize?response_type=token&client_id=${client_id}&scope=${scopes}&redirect_uri=${redirect_uri}`;
  }

  public hasToken() {
    this.token = localStorage.getItem('SpotifyToken') || '';

    this.getUser();

    return Boolean(this.token);
  }

  public async getUser() {
    try {
      const user = await axios.get(`${API_SPOTIFY}/me`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      return user.data;
    } catch (e) {
      SpotifyServiceAuth.logout();
    }
  }

  public logout() {
    localStorage.removeItem('SpotifyToken');
    window.location.href = '/';
  }

  public async getPlaylists({ locale, timestamp, limit, offset, country }: IGetPlaylist) {
    try {
      const qs = `locale=${locale}&timestamp=${timestamp}&limit=${limit}&offset=${offset}&country=${country}`;

      const playlist = await axios.get(`
        ${API_SPOTIFY}/browse/featured-playlists?${qs}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      return playlist.data.playlists.items;
    } catch (e) {
      throw e;
    }
  }
}

export const SpotifyServiceAuth = new SpotifyService();
