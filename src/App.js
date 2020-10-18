import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyles from './assets/globalStyles';

const App = () => (
  <BrowserRouter>
    <Routes />
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
