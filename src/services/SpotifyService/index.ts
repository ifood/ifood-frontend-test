import config from '../../config';
import { AxiosRequestConfig } from "axios";
import http from "../HttpService";
import { UserToken } from "../../interfaces";

const { spotifyAccountUrl } = config;

export default class SpotifyService {
  static urlToken = `${ spotifyAccountUrl }/api/token`;

  private static createAuthenticationHeader(): string {
    const { spotifyClientId, spotifyClientSecret } = config;

    const token = btoa(`${ spotifyClientId }:${ spotifyClientSecret }`);

    return `Basic ${ token }`;
  }

  private static createAccessTokenOptions(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: this.createAuthenticationHeader(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  }

  static async getUserAccessCodeByCode(code: string): Promise<UserToken> {

    const { origin, pathname } = window.location;
    const redirect_uri = `${ origin }${ pathname }`;
    const grant_type = 'authorization_code';

    const queryParams = {
      grant_type,
      code,
      redirect_uri
    };

    const queryString = new URLSearchParams(queryParams).toString();

    const result = await http.post(
      this.urlToken,
      queryString,
      this.createAccessTokenOptions()
    )

    const { access_token, token_type, refresh_token, scope, expires_in } = result.data;

    return {
      accessToken: access_token,
      tokenType: token_type,
      refreshToken: refresh_token,
      scope,
      expiresIn: expires_in
    };
  }

}
