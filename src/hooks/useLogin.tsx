import { useCallback } from 'react';
import { SpotifyServiceAuth } from '../services/auth.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        text: 'Error to login, try again...',
        icon: 'error',
      });
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
