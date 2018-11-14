import { post } from 'Helpers/fetchWrapper';

export async function authenticate(code) {
  try {
    // TODO: move the post to a back end service
    const resp = await post('/api/token', {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http://127.0.0.1:8080/callback',
    });
    return resp;
  } catch (e) {
    return [];
  }
}
