import React, { createContext, useLayoutEffect, useState } from "react";
import AuthService from "../../services/AuthService";

import { useSnackbar } from 'notistack';

interface AuthContextProps {
  isLoading: boolean;
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {

  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const logout = (): void => {
    AuthService.removeUserTokenFromStorage();
    setIsAuthenticated(false);
  }

  useLayoutEffect(() => {
    setIsLoading(true);
    AuthService.getAccessCode()
      .then(result => {
        AuthService.setUserTokenOnStorage(result);
        setIsAuthenticated(true);
        enqueueSnackbar("Yay! SignIn successfully :)", { variant: 'success' })
        window.location.href = '/playlists'
      })
      .catch(() => {
        enqueueSnackbar(
          "Outch! Sorry dude, but it's not a possible make signin with your Spotify account. :(",
          { variant: 'error' });

        setIsAuthenticated(false);
      })
      .finally(() => setIsLoading(false));
  }, [enqueueSnackbar])



  return (
    <AuthContext.Provider value={ { isLoading, isAuthenticated, logout } }>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider };
