import config from '../../config';
import AuthService from '../AuthService';
import HttpService from '../HttpService';
import { AxiosRequestConfig } from "axios";
import { FilterParams } from "../../interfaces/Filter";

const { spotifyApiUrl } = config;

class PlaylistService {
  private SPOTIFY_API = `${spotifyApiUrl}/browse/featured-playlists`;

  async getPlaylists(filters: FilterParams) {
    const { tokenType, accessToken } = AuthService.getUserToken()!;
    const Authorization = `${tokenType} ${ accessToken }`;

    const searchParams = new URLSearchParams();

    Object.keys(filters).forEach((key) => {
      const filterRecord = filters as Record<string, string>;

      const value = filterRecord[key];

      if (!value) {
        return;
      }

      searchParams.append(key, filterRecord[key]);
    });

    const url = `${this.SPOTIFY_API}?${searchParams.toString()}`;
    console.log(url);

    const options: AxiosRequestConfig = {
      headers: {
        Authorization
      }
    }

    const response = await HttpService.get(url, options);

    return response.data.playlists;
  }
}

const PlaylistServiceInstance = new PlaylistService();

export default PlaylistServiceInstance as PlaylistService;
