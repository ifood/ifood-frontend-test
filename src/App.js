import React from 'react';
import { Provider } from 'react-redux';
import { store } from './stores';
import Routes from './pages/routes';

import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
