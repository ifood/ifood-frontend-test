import config from "../../config";
import AuthService from "../AuthService";
import HttpService from "../HttpService";
import { User } from "../../interfaces/User";
import StorageService from "../StorageService";

class UserService {
  private SPOTIFY_USER_INFO_URL = `${ config.spotifyApiUrl }/me`;
  private USER_SERVICE_STORAGE_NAME = '@SpotifyAccess:User';

  async getUserInfo() {
    const { accessToken } = await AuthService.getUserToken()!;

    const header = {
      headers: {
        Authorization: `Bearer ${ accessToken }`,
      }
    }

    const result = await HttpService.get<any>(this.SPOTIFY_USER_INFO_URL, header);

    const { data } = result;

    const user: User = {
      displayName: data.display_name,
      avatar: data.images[0].url
    }

    StorageService.setObjectItem(this.USER_SERVICE_STORAGE_NAME, user);
  }

  get userInfo(): User {
     const user = StorageService.getObjectItem<User>(this.USER_SERVICE_STORAGE_NAME);

     return user || {}
  }
}

const UserServiceInstance = new UserService();

export default UserServiceInstance as UserService;
