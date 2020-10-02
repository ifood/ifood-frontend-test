import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { SpotifyServiceAuth } from "../services/auth.service";
import { IPlaylists } from "../types";
import Swal from 'sweetalert2';

const useSearch = () => {
  const [playlists, setPlaylists] = useState<IPlaylists[]>([]);
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [locale, setLocale] = useState('');
  const [country, setCountry] = useState('BR');
  const [timestamp, setTimestamp] = useState(moment().format());
  const [loading, setLoading] = useState(false);

  const getFeaturedPlaylist = useCallback(async (limit, offset, locale, country, timestamp) => {
    setLoading(true);
    try {
      const featuredPlaylists = await SpotifyServiceAuth.getPlaylists({
        limit,
        offset,
        locale,
        country,
        timestamp,
      });

      setPlaylists(featuredPlaylists);
    } catch (e) {
      Swal.fire({
        text: 'Error to get playlists, try again...',
        icon: 'error',
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getFeaturedPlaylist(limit, offset, locale, country, timestamp);
  }, [country, getFeaturedPlaylist, limit, locale, offset, timestamp]);

  const handleFilters = useCallback((type, value) => {
    switch (type) {
      case 'locale':
        if (value) {
          setLocale(value);
        } else {
          setLocale('');
        }
        break;
      case 'country':
        if (value) {
          setCountry(value);
        } else {
          setCountry('BR');
        }
        break;
      case 'limit':
        if (value > 50 || !value) {
          //error
          setLimit(12);
        } else {
          setLimit(value);
        }
        break;
      case 'offset':
        if (value) {
          setOffset(value);
        } else {
          setOffset(0);
        }
        break;
      case 'timestamp':
        if (value) {
          setTimestamp(moment(value).format('YYYY-MM-DDTHH:mm:ss'));
        } else {
          setTimestamp(moment().format());
        }
      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  }, []);

  const onSearch = useCallback((value: string) => {
    if (value) {
      const filter = playlists.filter(playlist => playlist['name'].toLowerCase().includes(value.toLowerCase()));
      setPlaylists(filter);
    } else {
      getFeaturedPlaylist(limit, offset, locale, country, timestamp);
    }
  }, [country, getFeaturedPlaylist, limit, locale, offset, playlists, timestamp]);

  return {
    playlists,
    onSearch,
    handleFilters,
    loading
  }
};

export default useSearch;
