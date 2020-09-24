import React, { createContext, useLayoutEffect } from "react";
import AuthService from "../../services/AuthService";

import { useSnackbar } from 'notistack';
import { AuthContextProps } from "../../interfaces/AuthContext";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {

  const { enqueueSnackbar } = useSnackbar();

  const isAuthenticated = (): boolean => {
    return AuthService.hasRefreshToken;
  }

  const logout = (): void => {
    AuthService.removeUserTokenFromStorage();
  }

  useLayoutEffect(() => {
    const getAccessCode = async () => {
      await AuthService.getAccessCode()
        .then(result => {
          AuthService.setUserTokenOnStorage(result);
          enqueueSnackbar("Yay! SignIn successfully :)", { variant: 'success' })
          window.location.href = "/playlists"
        })
        .catch(() => {
          enqueueSnackbar(
            "Outch! Sorry dude, but it's not a possible make signin with your Spotify account. :(",
            { variant: 'error' });
        });
    }

    getAccessCode();
  }, [enqueueSnackbar])


  return (
    <AuthContext.Provider value={ { isAuthenticated, logout } }>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };
