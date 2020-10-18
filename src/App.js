import React from 'react';
import { AppContainer, Header } from './styles/AppStyles';
import Playlists from './components/Playlists';
import Filters from './components/Filters';
import useToken from './hooks/useToken';
import CollapseMenu from './styles/CollapseMenu';

function App() {
  const { loading } = useToken();
  return (
    <AppContainer>
      <Header>
        <h1>Spoti food</h1>
        <CollapseMenu>
          <Filters />
        </CollapseMenu>
      </Header>
      {loading ? <h1>Loading...</h1> : <Playlists />}
    </AppContainer>
  );
}

export default App;
