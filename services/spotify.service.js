export default class SpotityService {
  static connect() {
    return new Promise((resolve) => {
      setTimeout(resolve, 200);
    });
  }
}
