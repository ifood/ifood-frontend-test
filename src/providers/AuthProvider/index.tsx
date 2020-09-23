import React, { createContext, useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import { StorageService } from "../../services/StorageService";
import { UserToken } from "../../interfaces/Token";

interface AuthContextProps {
  isLoading: boolean;
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const logout = (): void => {

  }

  useEffect(() => {
    setIsLoading(true);
    AuthService.getAccessCode()
      .then(result => {
        StorageService.setObjectItem<UserToken>("@SpotifyAccess:Tokens", result);
      });
  }, [])

  return (
    <AuthContext.Provider value={ { isLoading, isAuthenticated, logout } }>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider };
