import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Playlists from '../components/playlists/playlists';
import PageNoteFound from '../components/pageNotFound/pageNotFound';

class AppRouter extends React.Component {
  componentDidMount() {
    document.documentElement.lang = 'pt-BR';
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Playlists} exact={true} />
          <Route path="/playlists" component={Playlists} exact={true} />
          <Route component={PageNoteFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
