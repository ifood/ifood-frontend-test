import { IAuth } from '../_models';

const SPOTIFY_STORAGE = 'spfy';

// TODO conver it into a singleton
export default class Auth {
  public accessToken: string | null;
  public tokenType: string | null;
  public expiresIn: string | null;

  constructor() {
    this.accessToken = null;
    this.tokenType = null;
    this.expiresIn = null;
  }

  get session(): IAuth {
    const savedStorage = localStorage.getItem(SPOTIFY_STORAGE);
    if (!!!savedStorage) {
      return {} as IAuth;
    }

    const { accessToken, tokenType, expiresIn } = JSON.parse(
      atob(savedStorage),
    );

    return { accessToken, tokenType, expiresIn };
  }

  public getToken(): string | null {
    return this.tokenType && this.accessToken
      ? `${this.tokenType} ${this.accessToken}`
      : null;
  }

  public setSession(auth: IAuth) {
    this.accessToken = auth.accessToken;
    this.tokenType = auth.tokenType;
    this.expiresIn = auth.expiresIn;
    localStorage.setItem(SPOTIFY_STORAGE, btoa(JSON.stringify(this)));
  }

  public logout() {
    this.accessToken = null;
    this.tokenType = null;
    this.expiresIn = null;
    localStorage.removeItem(SPOTIFY_STORAGE);
  }
}
