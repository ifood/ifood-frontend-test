import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Landing from './containers/Landing';
import withAuthorization from './components/withAuthorization';
import PlayLists from './containers/Playlists';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: white;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/playlists" component={withAuthorization(PlayLists)} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
