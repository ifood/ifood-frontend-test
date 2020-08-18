import React, { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import qs from 'qs';
import Cookie from 'js-cookie';

type AuthContextType = {
  isAuthenticated: boolean;
};

const AuthContext = createContext<Partial<AuthContextType>>({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  const path = router.asPath;

  useEffect(() => {
    const params = qs.parse(path);
    const authToken = params['/playlists#access_token'];
    setToken(authToken);
    Cookie.set('USER_TOKEN', authToken);
  }, [path]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
