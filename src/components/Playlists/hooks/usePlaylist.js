import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { accessToken } from '../../../atoms/accessToken.atom';

import http from '../../../http';

function usePlaylists() {
  const [loading, setLoading] = useState(false);
  const [playlistsData, setPlaylistsData] = useState({});
  const token = useRecoilValue(accessToken);

  useEffect(() => {
    setLoading(true);
    let mounted = true;
    if (token.value) {
      (async () => {
        try {
          const { data } = (await http.get(
            'https://api.spotify.com/v1/browse/featured-playlists',
            {
              headers: {
                Authorization: `Bearer ${token.value}`,
              },
            }
          )) || { message: '', playlists: { items: [] } };
          if (mounted) {
            setPlaylistsData(data);
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(error.message);
        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      })();
    }
    return () => {
      mounted = false;
    };
  }, [token.value]);

  return {
    loading,
    title: playlistsData.message || '',
    playlists: playlistsData.playlists?.items || [],
    playlistsData,
  };
}

export default usePlaylists;
