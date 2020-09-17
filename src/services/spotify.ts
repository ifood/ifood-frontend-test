import axios, { AxiosRequestConfig } from 'axios';

import config from '../config';

const { spotifyAccountUrl } = config;

interface GetAccessTokenData {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

interface RefreshAccessTokenData {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

class Spotify {
  static urlApiToken = `${spotifyAccountUrl}/api/token`;

  static createBasicAuthenticationHeader(): string {
    const { clientId, clientSecret } = config;
    const authorizationToken = btoa(`${clientId}:${clientSecret}`);

    return `Basic ${authorizationToken}`;
  }

  static createAccessTokenOptions(): AxiosRequestConfig {
    const options = {
      headers: {
        Authorization: Spotify.createBasicAuthenticationHeader(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    return options;
  }

  static async getAccessToken(code: string): Promise<GetAccessTokenData> {
    const params = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http://localhost:3000/',
    };

    const queryString = new URLSearchParams(params).toString();

    const response = await axios.post(
      Spotify.urlApiToken,
      queryString,
      Spotify.createAccessTokenOptions(),
    );

    return response.data;
  }

  static async refreshToken(token: string): Promise<RefreshAccessTokenData> {
    const params = {
      grant_type: 'refresh_token',
      refresh_token: token,
    };

    const queryString = new URLSearchParams(params).toString();

    const response = await axios.post(
      Spotify.urlApiToken,
      queryString,
      Spotify.createAccessTokenOptions(),
    );

    return response.data;
  }
}

export default Spotify;
