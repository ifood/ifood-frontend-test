import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Search from './pages/Search';

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Search />
  </>
);


export default App;
