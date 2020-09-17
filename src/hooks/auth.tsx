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
      const { access_token, refresh_token, token_type } = await Spotify.getAccessToken(code);

      localStorage.setItem('@Spotifood:AccessToken', access_token);
      localStorage.setItem('@Spotifood:RefreshToken', refresh_token);
      localStorage.setItem('@Spotifood:TokenType', token_type);

      window.location.href = '/';
    } catch (error) {
      // show error
    }
  };

  const refreshToken = async () => {
    const token = localStorage.getItem('@Spotifood:RefreshToken');

    try {
      const { access_token, token_type } = await Spotify.refreshToken(token as string);

      localStorage.setItem('@Spotifood:AccessToken', access_token);
      localStorage.setItem('@Spotifood:TokenType', token_type);
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
