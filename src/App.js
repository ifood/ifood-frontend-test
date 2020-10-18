import React from 'react';
import { AppContainer, Header } from './styles/AppStyles';
import Playlists from './components/Playlists';
import Filters from './components/Filters';
import useToken from './hooks/useToken';
import CollapseMenu from './styles/CollapseMenu';

function App() {
  const { loading } = useToken();
  return (
    <AppContainer aria-label="spotifood-page">
      <Header aria-label="spotifood-header">
        <h1>Spotifood</h1>
        <CollapseMenu aria-label="spotifood-header-filters-collapse">
          <Filters aria-label="spotifood-header-filters-area" />
        </CollapseMenu>
      </Header>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Playlists aria-label="spotifood-playlists-area" />
      )}
    </AppContainer>
  );
}

export default App;
