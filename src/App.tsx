import React from 'react';

import AppProvider from './hooks/index';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Search from './components/Search';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Header />
      <Search />
      <Playlist />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
