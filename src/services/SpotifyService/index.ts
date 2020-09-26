import config from '../../config';

const { spotifyAccountUrl } = config;

class SpotifyService {
  SPOTIFY_URL_TOKEN = `${ spotifyAccountUrl }/api/token`;
}

const SpotifyServiceInstance = new SpotifyService();

export default SpotifyServiceInstance as SpotifyService;
