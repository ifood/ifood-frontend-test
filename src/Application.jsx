import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

/* Page Components */
import Landing from './pages/Landing';
import Signin from './pages/Signin';

const Application = ({ authentication }) => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={Signin} />
      <PrivateRoute isAuthenticated={authentication.isAuthenticated} path="/" component={Landing} />
    </Switch>
  </BrowserRouter>
);


const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(Application);

Application.propTypes = {
  authentication: PropTypes.shape()
}
