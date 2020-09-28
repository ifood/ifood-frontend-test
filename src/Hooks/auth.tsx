import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getToken from '../Utils/getToken';
import authenticate from '../Services/authenticateService';

interface AuthContextData {
  token?: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('@Spotifood:token');

    if (storedToken) {
      return storedToken;
    }

    return null;
  });

  const location = useLocation();

  useEffect(() => {
    if (!token) {
      const { accessToken, expiresIn } = getToken(
        location.hash,
      );

      if (accessToken) {
        const expiresAt = new Date();
        expiresAt.setSeconds(expiresAt.getSeconds() + expiresIn);

        localStorage.setItem('@Spotifood:token', accessToken);
        localStorage.setItem('@Spotifood:expiresAt', expiresAt.toString());

        setToken(accessToken);
      }
    } else {
      const currentDate = new Date();
      const expiresAt = localStorage.getItem('@Spotifood:expiresAt');

      if (
        expiresAt &&
        currentDate.getTime() > Date.parse(expiresAt.toString())
      ) {
        localStorage.removeItem('@Spotifood:token');
        localStorage.removeItem('@Spotifood:expiresAt');

        authenticate();
      }
    }

    if (window.location.hash !== '') {
      window.location.hash = '';
    }
  }, [token, location]);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
