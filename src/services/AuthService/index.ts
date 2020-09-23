import SpotifyService from "../SpotifyService";
import { UserToken } from "../../interfaces";

export default class AuthService {
  static async getAccessCode(): Promise<UserToken> {
    const code = await this.getAuthorizationDataCode();
    return await SpotifyService.getUserAccessCodeByCode(code);
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
    }))
  }
}
