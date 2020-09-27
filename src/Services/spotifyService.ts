import axios, { AxiosRequestConfig } from 'axios';
import { URLSearchParams } from 'url';

import configApi from './API/configApi';

const { spotifyAccountUrl, spotifyApi } = configApi;

interface IToken {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
}

export interface IPlaylistFilter {
    locale?: string;
    country?: string;
    timestamp?: string;
    limit?: number;
    offset?: number;
}

export interface IPlaylistItem {
    id: string;
    description: string;
    external_urls: { spotify: string };
    images: { url: string }[];
    name: string;
    display_name?: string;
}

export interface IPlaylistResponse {
    items: IPlaylistItem[];
    next: string | null;
    previous: string | null;
    total: number;
}

class SpotifyService {
    static urlApiToken = `${spotifyAccountUrl}/api/token`;

    static token: IToken = {} as IToken;

    static createSimpleAuth(): string {
        const { clientId, clientSecret } = configApi;
        const authToken = btoa(`${clientId}:${clientSecret}`);

        return `Basic ${authToken}`;
    }

    static createTokenOptions(): AxiosRequestConfig {
        const options = {
            headers: {
                Authorization: SpotifyService.createSimpleAuth(),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        return options;
    }

    static async getAccessToken(code: string): Promise<IToken> {
        const { origin, pathname } = window.location;

        const params = {
            grant_type: 'authorization_code',
            code,
            redirect_uri: `${origin}${pathname}`,
        };

        const queryString = new URLSearchParams(params).toString();

        const response = await axios.post(SpotifyService.urlApiToken, queryString, SpotifyService.createTokenOptions(),);

        const { access_token, token_type, refresh_token } = response.data;

        SpotifyService.token = {
            refreshToken: refresh_token,
            accessToken: access_token,
            tokenType: token_type,
        };

        return SpotifyService.token;
    }

    static async refreshesToken(token: string): Promise<IToken> {
        const params = {
            grant_type: 'refresh_token',
            refresh_token: token,
        };

        const queryString = new URLSearchParams(params).toString();

        const response = await axios.post(SpotifyService.urlApiToken, queryString, SpotifyService.createTokenOptions(),);

        const { access_token, token_type } = response.data;

        SpotifyService.token = {
            refreshToken: token,
            accessToken: access_token,
            tokenType: token_type,
        };

        return SpotifyService.token;

    }

    static async getPlaylists(filter: IPlaylistFilter): Promise<IPlaylistResponse> {
        const { tokenType, accessToken } = SpotifyService.token;

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

export default SpotifyService;