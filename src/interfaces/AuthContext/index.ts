import { User } from "../User";

export interface AuthContextProps {
  isAuthenticated: () => boolean;
  logout: () => void;
  isLoading: boolean;
}
