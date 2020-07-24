import axios from 'axios';

export default class PlaylistApi {
  static async getPaginated(token) {
    const { data } = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }

  static async getPlaylistFilters() {
    const { data } = await axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
    return data;
  }
}
