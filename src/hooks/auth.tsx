import React, {
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react';

import Spotify from '../services/spotify';

interface AuthContextData {
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const hasToken = () => !!localStorage.getItem('@Spotifood:RefreshToken');

  const getAccessToken = async (code: string) => {
    try {
      const { accessToken, refreshToken, tokenType } = await Spotify.getAccessToken(code);

      localStorage.setItem('@Spotifood:AccessToken', accessToken);
      localStorage.setItem('@Spotifood:RefreshToken', refreshToken);
      localStorage.setItem('@Spotifood:TokenType', tokenType);

      window.location.href = '/';
    } catch (error) {
      // show error
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
      localStorage.remove('@Spotifood:AccessToken');
      localStorage.remove('@Spotifood:RefreshToken');
      localStorage.remove('@Spotifood:TokenType');
      // show error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    setLoading(true);

    if (code) {
      getAccessToken(code);
      return;
    }

    if (hasToken()) {
      refreshToken();
      return;
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ loading, isAuthenticated }}>
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
