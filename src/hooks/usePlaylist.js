/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { accessToken } from '../atoms/accessToken.atom';
import { filters as filtersAtom } from '../atoms/filters.atom';

import http from '../http';

function usePlaylists() {
  const [loading, setLoading] = useState(false);
  const [playlistsRawData, setPlaylistsRawData] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const token = useRecoilValue(accessToken);
  const params = useRecoilValue(filtersAtom);

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
              params,
            }
          )) || { message: '', playlists: { items: [] } };
          if (mounted) {
            setPlaylistsRawData(data);
            setPlaylists(data.playlists?.items || []);
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
  }, [token.value, params]);

  return {
    loading,
    title: playlistsRawData.message || '',
    playlists,
    playlistsRawData,
  };
}

export default usePlaylists;
