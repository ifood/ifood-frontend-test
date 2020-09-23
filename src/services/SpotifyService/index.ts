import config from '../../config';
import { AxiosRequestConfig, AxiosResponse } from "axios";
import http from "../HttpService";
import { UserToken } from "../../interfaces";

const { spotifyAccountUrl } = config;

export default class SpotifyService {
  static SPOTIFY_URL_TOKEN = `${ spotifyAccountUrl }/api/token`;

  private static createAuthenticationHeader(): string {
    const { spotifyClientId, spotifyClientSecret } = config;

    const token = btoa(`${ spotifyClientId }:${ spotifyClientSecret }`);

    return `Basic ${ token }`;
  }

  private static createAccessTokenHeader(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: this.createAuthenticationHeader(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  }

  static async getUserAccessCodeByClientCode(code: string): Promise<UserToken> {

    const { origin, pathname } = window.location;
    const redirect_uri = `${ origin }${ pathname }`;
    const grant_type = 'authorization_code';
    const scopes = 'user-read-private user-read-email';

    const queryParams = {
      grant_type,
      code,
      redirect_uri,
      scopes
    };

    const queryString = new URLSearchParams(queryParams).toString();

    const result = await this.sendRequest(queryString)

    return this.getRequestResult(result);
  }

  private static getRequestResult(result: AxiosResponse) {
    const { access_token, token_type, refresh_token, scope, expires_in } = result.data;

    return {
      accessToken: access_token,
      tokenType: token_type,
      refreshToken: refresh_token,
      scope,
      expiresIn: expires_in
    };
  }

  private static async sendRequest(queryString: string) {
    return await http.post(
      this.SPOTIFY_URL_TOKEN,
      queryString,
      this.createAccessTokenHeader()
    );
  }

  static async refreshUserAccessToken(refreshToken: string) {

    const params = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }

    const queryString = new URLSearchParams(params).toString();

    const result = await this.sendRequest(queryString)

    return this.getRequestResult(result);
  }

}
