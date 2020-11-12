/* eslint-disable react/prefer-stateless-function */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Component } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

import store from './store';

import GlobalStyles from './styles/globalStyle';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
