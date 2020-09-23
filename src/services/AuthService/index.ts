import SpotifyService from "../SpotifyService";
import { UserToken } from "../../interfaces";
import { StorageService } from "../StorageService";

export default class AuthService {

  private static AUTH_SERVICE_STORAGE_NAME = '@SpotifyAccess:Tokens';

  static async getAccessCode(): Promise<UserToken> {
    const code = await this.getAuthorizationDataCode();
    return await SpotifyService.getUserAccessCodeByClientCode(code);
  }

  private static async getAuthorizationDataCode(): Promise<string> {
    const urlParams = new URLSearchParams(window.location.search);

    const code = urlParams.get('code');
    const error = urlParams.get('error');

    return new Promise(((resolve, reject) => {
      if (error) {
        return reject(error);
      }

      if (code) {
        resolve(code);
      }

      if (this.hasRefreshToken) {
        this.refreshToken();
      }
    }))
  }

  private static get hasRefreshToken(): boolean {
    return !!this.userRefreshToken;
  }

  private static get userRefreshToken(): string | undefined {
    let userToken = this.getUserToken();
    return userToken?.refreshToken;
  }

  private static getUserToken(): UserToken | null {
    return StorageService.getObjectItem(this.AUTH_SERVICE_STORAGE_NAME);
  }

  private static async refreshToken() {
    const refreshToken = this.userRefreshToken;
    const result = await SpotifyService.refreshUserAccessToken(refreshToken!!);

    const userToken = this.getUserToken();

    this.setUserTokenOnStorage({
      ...result,
      ...userToken
    });
  }

  static setUserTokenOnStorage(userToken: UserToken): void {
    StorageService.setObjectItem<UserToken>(this.AUTH_SERVICE_STORAGE_NAME, userToken);
  }

  static removeUserTokenFromStorage(): void {
    StorageService.removeItem(this.AUTH_SERVICE_STORAGE_NAME)
  }
}
