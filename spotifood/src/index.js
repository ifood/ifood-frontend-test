// Global
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux';
// Components
import App from 'components/App';
import NotFounded from 'components/NotFounded';
// Store
import { store, history } from 'redux/store';
// Stylesheet
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route component={NotFounded} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

