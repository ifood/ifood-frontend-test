import React from 'react';
import { AppContainer, Header } from './styles/AppStyles';
import Playlists from './components/Playlists';
import Filters from './components/Filters';
import useToken from './hooks/useToken';
import CollapseMenu from './styles/CollapseMenu';
import usePlaylist from './hooks/usePlaylist';

function App() {
  const { loading: loadingToken } = useToken();
  const { loading, title, playlists } = usePlaylist();

  return (
    <AppContainer aria-label="spotifood-page">
      <Header aria-label="spotifood-header">
        <h1>Spotifood</h1>
        <CollapseMenu aria-label="spotifood-header-filters-collapse">
          <Filters aria-label="spotifood-header-filters-area" />
        </CollapseMenu>
      </Header>
      {loadingToken ? (
        <h1>Loading...</h1>
      ) : (
        <Playlists
          loading={loading}
          title={title}
          data={playlists}
          aria-label="spotifood-playlists-area"
        />
      )}
    </AppContainer>
  );
}

export default App;
