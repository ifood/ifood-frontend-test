import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { accessToken } from '../atoms/accessToken.atom';
import http from '../http';

function useToken() {
  const [loading, setLoading] = useState(false);
  const setAccessToken = useSetRecoilState(accessToken);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } =
          (await http.post(
            'https://accounts.spotify.com/api/token',
            'grant_type=client_credentials',
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${btoa(
                  `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
                )}`,
              },
            }
          )) || {};
        setAccessToken({
          value: data.access_token,
          expires: data.expires_in,
          tokenType: data.token_type,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [setAccessToken]);

  return { loading };
}

export default useToken;
