import { User } from "../../interfaces/User";
import UserService from "../../services/UserService";

export default function useUserInfo(): User | null {
  return UserService.userInfo;
}
