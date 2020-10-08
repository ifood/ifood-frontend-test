import React, { useReducer } from 'react';

import Router from './utils/Router';

import { theme } from './styles/themeStyles';
import { ThemeProvider } from '@material-ui/styles';
import { appReducer, initialState } from './reducer/appReducer';
import AppContext from './context/AppContext';

function App() {

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <ThemeProvider  theme={theme}>
      <AppContext.Provider value={{ playlists: state.playlists, activePlaylist: state.activePlaylist, total: state.total,  dispatch: dispatch }}>
        <Router />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
