import axios from 'axios';

export default class PlaylistApi {
  static async getPaginated(token, filters) {
    try {
      const { data } = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: filters,
      });
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  static async getPlaylistFilters() {
    try {
      const { data } = await axios.get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
      return data;
    } catch (error) {
      throw error.response;
    }
  }
}
