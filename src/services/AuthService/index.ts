import SpotifyService from "../SpotifyService";
import { UserToken } from "../../interfaces";
import StorageService from "../StorageService";

class AuthService {

  private AUTH_SERVICE_STORAGE_NAME = '@SpotifyAccess:Tokens';
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
    const result = await SpotifyService.getUserAccessCodeByClientCode(this.clientCode);
    this.setUserTokenOnStorage(result);
  }

  get hasAccessToken(): boolean {
    const userToken = this.getUserToken();
    return !!userToken?.accessToken;
  }

  private getUserToken(): UserToken | null {
    return StorageService.getObjectItem(this.AUTH_SERVICE_STORAGE_NAME);
  }

  async refreshToken() {
    const refreshToken = this.userRefreshToken;
    const result = await SpotifyService.refreshUserAccessToken(refreshToken!!);

    const userToken = this.getUserToken();

    this.setUserTokenOnStorage({
      ...result,
      ...userToken
    });
  }

  private get userRefreshToken(): string | undefined {
    const userToken = this.getUserToken();
    return userToken?.refreshToken;
  }

  setUserTokenOnStorage(userToken: UserToken): void {
    StorageService.setObjectItem<UserToken>(this.AUTH_SERVICE_STORAGE_NAME, userToken);
  }

  removeUserTokenFromStorage(): void {
    StorageService.removeItem(this.AUTH_SERVICE_STORAGE_NAME)
  }
}

const AuthServiceInstance = new AuthService();

export default AuthServiceInstance as AuthService;
