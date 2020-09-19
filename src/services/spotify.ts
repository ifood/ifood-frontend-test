import axios, { AxiosRequestConfig } from 'axios';

import config from '../config';

const { spotifyAccountUrl, spotifyApi } = config;

interface Token {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface FeaturedPlaylistFilter {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}

export interface PlaylistItem {
  id: string;
  description: string;
  href: string;
  images: { url: string }[];
  name: string;
}

export interface PlaylistResponse {
  items: PlaylistItem[];
  next: string | null;
  previous: string | null;
  total: number;
}

class Spotify {
  static urlApiToken = `${spotifyAccountUrl}/api/token`;

  static token: Token = {} as Token;

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

  static async getAccessToken(code: string): Promise<Token> {
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

    const { access_token, token_type, refresh_token } = response.data;

    Spotify.token = {
      refreshToken: refresh_token,
      accessToken: access_token,
      tokenType: token_type,
    };

    return Spotify.token;
  }

  static async refreshAccessToken(token: string): Promise<Token> {
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

    const { access_token, token_type } = response.data;

    Spotify.token = {
      refreshToken: token,
      accessToken: access_token,
      tokenType: token_type,
    };

    return Spotify.token;
  }

  static async getFeaturedPlaylists(filter: FeaturedPlaylistFilter): Promise<PlaylistResponse> {
    const { tokenType, accessToken } = Spotify.token;

    const searchParams = new URLSearchParams();

    Object.keys(filter).forEach((key) => {
      const fakeFilter = filter as Record<string, string>;
      const value = fakeFilter[key];

      if (!value) {
        return;
      }

      searchParams.append(key, fakeFilter[key]);
    });

    const url = `${spotifyApi}/browse/featured-playlists?${searchParams.toString()}`;

    const options = {
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
      },
    };

    const response = await axios.get(url, options);

    return response.data.playlists;
  }
}

export default Spotify;
