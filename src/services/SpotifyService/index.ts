import config from '../../config';
import { AxiosRequestConfig, AxiosResponse } from "axios";
import http from "../HttpService";
import { UserToken } from "../../interfaces";

const { spotifyAccountUrl } = config;

class SpotifyService {
  SPOTIFY_URL_TOKEN = `${ spotifyAccountUrl }/api/token`;

  async getUserAccessCodeByClientCode(code: string): Promise<UserToken> {
    const { origin, pathname } = window.location;
    const redirect_uri = `${ origin }${ pathname }`;
    const grant_type = 'authorization_code';

    const queryParams = {
      grant_type,
      code,
      redirect_uri,
    };

    const queryString = new URLSearchParams(queryParams).toString();

    const result = await this.sendRequest(queryString)

    return this.getRequestResult(result);
  }

  private async sendRequest(queryString: string) {
    return await http.post(
      this.SPOTIFY_URL_TOKEN,
      queryString,
      this.createAccessTokenHeader()
    );
  }

  private createAccessTokenHeader(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: this.createAuthenticationHeader(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  }

  private createAuthenticationHeader(): string {
    const { spotifyClientId, spotifyClientSecret } = config;

    const token = btoa(`${ spotifyClientId }:${ spotifyClientSecret }`);

    return `Basic ${ token }`;
  }

  private getRequestResult(result: AxiosResponse) {
    const { access_token, token_type, refresh_token, scope, expires_in } = result.data;

    return {
      accessToken: access_token,
      tokenType: token_type,
      refreshToken: refresh_token,
      scope,
      expiresIn: expires_in
    };
  }

  async refreshUserAccessToken(refreshToken: string) {

    const params = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }

    const queryString = new URLSearchParams(params).toString();

    const result = await this.sendRequest(queryString)

    return this.getRequestResult(result);
  }

}

const SpotifyServiceInstance = new SpotifyService();

export default SpotifyServiceInstance as SpotifyService;
