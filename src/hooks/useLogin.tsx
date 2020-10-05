import { useCallback } from 'react';
import { SpotifyServiceAuth } from '../services/auth.service';

const useLogin = () => {
  const goToLogin = useCallback(() => {
    const login = SpotifyServiceAuth.authorization();
    window.location.href = login;
  }, []);

  const hasToken = useCallback(() => {
    if (!window.location.hash) return false;
    const token = window.location.hash
		.split("&")[0]
    .replace("#access_token=", "");

    if (token) {
      localStorage.setItem('SpotifyToken', token);
      return true;
    } else {
      return false;
    }
  }, []);

  return {
    goToLogin,
    hasToken
  }
};

export default useLogin;
