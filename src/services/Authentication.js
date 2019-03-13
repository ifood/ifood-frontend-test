import { SPOTIFY_CLIENT_ID, getHostname } from '../utils/common';

class AuthenticationService {
  constructor(fetcher) {
    this.fetcher = fetcher;
  }

  /* eslint-disable-next-line */
  async authenticateSpotify() {
    const hostPort = window.location.port;
    window.location.assign(`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=http:%2F%2F${getHostname()}${hostPort && `:${hostPort}`}%2Fsignin&scope=user-read-private%20user-read-email&response_type=token&state=123`);
  }

  async getUserInformation(accessToken) {
    const response = await this.fetcher.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userInformation = response.data;
    return userInformation;
  }
}

export default AuthenticationService;
