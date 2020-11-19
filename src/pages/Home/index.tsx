import useAxios from 'axios-hooks';
import React, { useEffect } from 'react';
import Filters from '../../components/Filters';
import { HomePage } from './styles';

const SPOTIFY_FEATURED_PLAYLIST = '/browse/featured-playlists';

const Home = () => {
  // const auth = useContext(AuthContext);
  // const now = new Date().getTime();
  // TODO Separate it into another component
  const [{ data }, fetchPlaylists] = useAxios(SPOTIFY_FEATURED_PLAYLIST, {
    manual: true,
  });

  useEffect(() => {
    const getPlaylists = async () => {
      // TODO use useStateValue filters;
      // TODO use defaultValues from store default;
      await fetchPlaylists({
        params: {
          country: 'BR',
          locale: 'pt_BR',
          limit: '2',
        },
      });
    };
    getPlaylists();
  }, [fetchPlaylists]);

  // TODO check expires lesse then now
  // if (auth.session.expiresAt < now) {
  //   return <div>You should be logged</div>;
  // }

  return (
    <HomePage>
      <Filters></Filters>
      {data &&
        data.playlists.items.map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))}
    </HomePage>
  );
};

export default Home;
