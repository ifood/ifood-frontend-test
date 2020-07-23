import getInstance from './config';

export default class AuthApi {
  static async auth(parameters) {
    const instance = await getInstance();
    parameters = {
      ...parameters,
      grantType: 'password',
    };
    const { data } = await instance.post('/auth', parameters);
    return data;
  }

  static async me() {
    const instance = await getInstance();
    const { data } = await instance.get('/user/me');
    return data;
  }
}
