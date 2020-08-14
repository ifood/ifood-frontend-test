import React, { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import qs from 'qs';
import Cookie from 'js-cookie';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    const params = qs.parse(path);
    const authToken = params['/playlists#access_token'];
    setToken(authToken);
    Cookie.set('USER_TOKEN', authToken);
  }, [router]);

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
