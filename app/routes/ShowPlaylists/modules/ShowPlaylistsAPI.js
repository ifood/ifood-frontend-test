import { get } from 'Helpers/fetchWrapper';

export async function getFilters() {
  try {
    const resp = await get('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
    return resp;
  } catch (e) {
    return [];
  }
}

export async function getPlaylists(token) {
  try {
    const resp = await get('/api/featured-playlists', {
      Authorization: `Bearer ${token}`,
    });
    return resp;
  } catch (e) {
    return [];
  }
}
