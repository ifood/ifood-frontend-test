import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/home';
import Playlists from 'pages/playlists';
import NotFound404 from 'pages/notFound404';
import Header from 'components/header';
import Footer from 'components/footer';

const RouteWithBar = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={routeProps => (
        <Fragment>
          <Header />
          <Component {...routeProps} />
          <Footer />
        </Fragment>
      )}
    />
  );
};

RouteWithBar.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <RouteWithBar path="/playlists" component={Playlists} />

      <RouteWithBar path="*" component={NotFound404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
