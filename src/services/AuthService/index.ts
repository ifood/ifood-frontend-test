import { UserToken } from "../../interfaces";
import StorageService from "../StorageService";
import config from "../../config";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import HttpService from "../HttpService";

class AuthService {
  private SPOTIFY_URL_TOKEN = `${ config.spotifyAccountUrl }/api/token`;

  private AUTH_SERVICE_STORAGE_NAME = '@SpotifyAccess:Access';
  private clientCode: string;

  constructor() {
    this.clientCode = '';
  }

  hasSuccessClientSignIn(): boolean {
    const urlParams = new URLSearchParams(window.location.search);
    this.clientCode = urlParams.get('code') || '';
    return !!this.clientCode;
  }

  async getUserAuthorization() {
    const { origin, pathname } = window.location;
    const redirect_uri = `${ origin }${ pathname }`;
    console.log(redirect_uri);
    const grant_type = 'authorization_code';

    const queryParams = {
      grant_type,
      code: this.clientCode,
      redirect_uri,
    };

    const queryString = new URLSearchParams(queryParams).toString();
    const response = await this.sendRequest(queryString);
    const result = this.getRequestResult(response);
    this.setUserTokenOnStorage(result);
  }

  private async sendRequest(queryString: string) {
    return await HttpService.post(
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

  private setUserTokenOnStorage(userToken: UserToken): void {
    StorageService.setObjectItem<UserToken>(this.AUTH_SERVICE_STORAGE_NAME, userToken);
  }

  get hasAccessToken(): boolean {
    const userToken = this.getUserToken();
    return !!userToken?.accessToken;
  }

  getUserToken(): UserToken | null {
    return StorageService.getObjectItem(this.AUTH_SERVICE_STORAGE_NAME);
  }

  async refreshToken() {
    const userToken = this.getUserToken();
    const result = await this.refreshUserAccessToken(userToken?.refreshToken!!);

    this.setUserTokenOnStorage({
      ...result,
      ...userToken
    });
  }

  private async refreshUserAccessToken(refreshToken: string) {
    const params = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }

    const queryString = new URLSearchParams(params).toString();
    const result = await this.sendRequest(queryString)
    return this.getRequestResult(result);
  }

  removeUserTokenFromStorage(): void {
    StorageService.removeItem(this.AUTH_SERVICE_STORAGE_NAME)
  }
}

const AuthServiceInstance = new AuthService();

export default AuthServiceInstance as AuthService;
