import React, {
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';

import { useSnackbar } from 'notistack';

import Spotify from '../services/spotify';

interface AuthContextData {
  loading: boolean;
  isAuthenticated: boolean;
  logoff: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logoff = () => {
    localStorage.removeItem('@Spotifood:AccessToken');
    localStorage.removeItem('@Spotifood:RefreshToken');
    localStorage.removeItem('@Spotifood:TokenType');

    setIsAuthenticated(false);
  };

  const hasToken = () => !!localStorage.getItem('@Spotifood:RefreshToken');

  const getAccessToken = async (code: string) => {
    try {
      const { accessToken, refreshToken, tokenType } = await Spotify.getAccessToken(code);

      localStorage.setItem('@Spotifood:AccessToken', accessToken);
      localStorage.setItem('@Spotifood:RefreshToken', refreshToken);
      localStorage.setItem('@Spotifood:TokenType', tokenType);
      window.location.href = '/';
    } catch (error) {
      throw new Error('Ops! Não conseguimos fazer o login com sua conta do Spotify.');
    }
  };

  const refreshToken = async () => {
    const token = localStorage.getItem('@Spotifood:RefreshToken');

    try {
      const { accessToken, tokenType } = await Spotify.refreshAccessToken(token as string);

      localStorage.setItem('@Spotifood:AccessToken', accessToken);
      localStorage.setItem('@Spotifood:TokenType', tokenType);
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error('Não conseguimos validar seu acesso, tente refazer o login.');
    }
  };

  useEffect(() => {
    const validateAccess = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const spotifyError = urlParams.get('error');

      setLoading(true);

      try {
        if (spotifyError) {
          enqueueSnackbar('Ops! Não conseguimos fazer o login com sua conta do Spotify.', { variant: 'error' });
        }

        if (code) {
          await getAccessToken(code);
          return;
        }

        if (hasToken()) {
          await refreshToken();
        }
      } catch ({ message }) {
        enqueueSnackbar(message, { variant: 'error' });
        logoff();
      } finally {
        setLoading(false);
      }
    };

    validateAccess();
  }, [enqueueSnackbar]);

  return (
    <AuthContext.Provider value={{ loading, isAuthenticated, logoff }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProviver');
  }

  return context;
}

export { AuthProvider, useAuth };
