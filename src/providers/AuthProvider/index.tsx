import React, { createContext, useLayoutEffect, useState } from "react";
import AuthService from "../../services/AuthService";

import { useSnackbar } from 'notistack';
import { AuthContextProps } from "../../interfaces";
import FullscreenLoader from "../../components/FullscreenLoader";
import UserService from "../../services/UserService";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = (): boolean => {
    return AuthService.hasAccessToken;
  }

  const logout = (): void => {
    AuthService.removeUserTokenFromStorage();
    window.location.href = '/';
  }

  useLayoutEffect(() => {
    const getAccessCode = async () => {
      if (AuthService.hasSuccessClientSignIn()) {
        setIsLoading(true);
        await AuthService.getUserAuthorization();
        await UserService.getUserInfo();
        enqueueSnackbar('Yay! Sign In has make successfully', { variant: 'success' });
        window.location.href = '/playlists';
        return;
      }

      if (AuthService.hasAccessToken) {
        await AuthService.refreshToken();
      }
    }

    getAccessCode()
      .catch(() => {
        enqueueSnackbar(
          'Outch! Sorry dude, but it\'s not a possible make signin with your Spotify account. :(',
          { variant: 'error' })
      })
      .finally(() => setIsLoading(false));
  }, [enqueueSnackbar])


  return (
    <AuthContext.Provider
      value={ { isAuthenticated, logout, isLoading } }>
      <FullscreenLoader showLoading={ isLoading }/>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };
