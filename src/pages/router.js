import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FeaturedPlaylist from './featured-playlists';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={ FeaturedPlaylist }></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
