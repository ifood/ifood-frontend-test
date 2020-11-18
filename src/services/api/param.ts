export default class ParamService {
  static filterParam(type: string): any {
    const filtered = window.location.hash.replace('#', '?');
    const query = new URLSearchParams(filtered);
    const result = {
      tokenType: query.get('token_type'),
      accessToken: query.get('access_token'),
      expiresIn: query.get('expires_in'),
    };
    console.log(result);
    return result;
  }
}
