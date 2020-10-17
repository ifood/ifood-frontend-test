import React from 'react';
import { AppContainer, Header } from './styles/AppStyles';
import Playlists from './components/Playlists';
import Filters from './components/Filters';
import useToken from './hooks/useToken';

function App() {
  const { loading } = useToken();
  return (
    <AppContainer>
      <Header>
        <h1>Spotifood</h1>
        <Filters />
      </Header>
      {loading ? <h1>Loading...</h1> : <Playlists />}
    </AppContainer>
  );
}

export default App;
