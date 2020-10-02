import SpotifyWebApi from 'spotify-web-api-js';

export default class PlaylistResource {
  static fetchFeaturedPlaylists(token, filter) {
    const spotify = new SpotifyWebApi();
    spotify.setAccessToken(token);

    return spotify.getFeaturedPlaylists(filter);
  }
}
