import { useCallback } from 'react';
import { SpotifyServiceAuth } from '../services/login.service';

const useLogin = () => {
  const goToLogin = useCallback(() => {
    const login = SpotifyServiceAuth.authorization();
    window.location.href = login;
  }, []);

  const getUserInformations = useCallback(async () => {
    try {
      const user = await SpotifyServiceAuth.getUser();
      return user;
    } catch (e) {

    }
  }, []);

  const hasToken = useCallback(() => {
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
    hasToken,
    getUserInformations
  }

};

export default useLogin;
