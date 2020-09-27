import React, { useContext } from 'react';

import LayoutTemplate from '../../templates/LayoutTemplate';
import Login from '../../containers/Login';
import Filters from '../../containers/Filters';
import Playlists from '../../containers/Playlists';

import { AuthContext } from '../../services/auth';

import { StateProvider } from '../../stores';
import { filtersDefault, filtersReducer } from '../../stores/reducers/filters';

const Home = () => {
  const auth = useContext(AuthContext);

  if (!auth.isAuthenticated()) return <Login />;

  return (
    <LayoutTemplate>
      <StateProvider initialState={filtersDefault} reducer={filtersReducer}>
        <Filters />
        <Playlists />
      </StateProvider>
    </LayoutTemplate>
  );
};

export default Home;
