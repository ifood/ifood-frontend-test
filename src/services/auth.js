import { createContext } from 'react';

class Auth {
  constructor() {
    this.accessToken = null;
    this.expiresAt = null;
    this.tokenType = null;
    this.nowTime = null;
    this.loadSession();
  }

  loadSession() {
    const stored = localStorage.getItem('s');
    if (stored === 'null' || !stored) return;

    const credentials = JSON.parse(atob(stored));
    this.accessToken = credentials.accessToken;
    this.tokenType = credentials.tokenType;
    this.expiresAt = credentials.expiresAt;
  }

  checkCredentials(credentials) {
    this.nowTime = new Date().getTime();
    return this.nowTime < credentials.expiresAt;
  }

  setSession({ accessToken, tokenType, expiresIn }) {
    this.accessToken = accessToken;
    this.tokenType = tokenType;
    this.expiresAt = parseInt(expiresIn, 10) * 1000 + new Date().getTime();
    localStorage.setItem('s', btoa(JSON.stringify(this)));
  }

  getCredentials() {
    return this.tokenType && this.accessToken
      ? `${this.tokenType} ${this.accessToken}`
      : null;
  }

  isAuthenticated() {
    return this.checkCredentials({ expiresAt: this.expiresAt });
  }

  logout() {
    this.accessToken = null;
    this.tokenType = null;
    this.expiresAt = null;
    localStorage.setItem('s', null);
  }
}

const AuthContext = createContext({});

export { Auth, AuthContext };
