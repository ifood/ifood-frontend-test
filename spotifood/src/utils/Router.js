import React from 'react';
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage';
import PlaylistPage from '../pages/PlaylistPage/PlaylistPage';

import { makeStyles } from '@material-ui/core/styles';
import PlaylistsPage from '../pages/PlaylistsPage/PlaylistsPage';

const useStyles = makeStyles({
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
});

const Router = () => {
  const classes = useStyles();
  
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/playlists">
              <PlaylistsPage />
          </Route>
          <Route exact path="/playlists/:playlistId">
              <PlaylistPage />
          </Route>
          <Route path="/">
              <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default Router;

const rootElement = document.getElementById("root");
ReactDOM.render(<Router />, rootElement);