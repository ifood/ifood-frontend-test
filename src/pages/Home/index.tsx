import useAxios from 'axios-hooks';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/auth';
import { HomePage } from './styles';

const SPOTIFY_FEATURED_PLAYLIST = '/browse/featured-playlists';

const Home = () => {
  const auth = useContext(AuthContext);
  // TODO Separate it into another component
  const [{ data }, refetchPlaylists] = useAxios(SPOTIFY_FEATURED_PLAYLIST, {
    manual: true,
  });

  useEffect(() => {
    const getPlaylists = async () => {
      await refetchPlaylists({
        params: {
          country: 'BR',
          locale: 'pt_BR',
          limit: '2',
        },
      });
    };
    getPlaylists();
  }, [refetchPlaylists]);

  if (!auth.session) {
    return <div>You should be logged</div>;
  }

  return (
    <HomePage>
      <div>Filters</div>
      <div>List</div>
    </HomePage>
  );
};

export default Home;
