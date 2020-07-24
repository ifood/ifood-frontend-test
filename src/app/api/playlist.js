import axios from 'axios';

export default class PlaylistApi {
  static async getPaginated(token) {
    const { data } = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // params: {
      //   limit: 8,
      // },
    });
    return data;
  }
}
