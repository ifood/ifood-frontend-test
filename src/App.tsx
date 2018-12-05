import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import LoginPage from './components/LoginPage';
import Home from './containers/Home';

import {
  operations as authOps,
  selectors as authSelectors,
} from './ducks/auth';
import settings from './settings';

interface IProps {
  isSignedIn: boolean;
  initAuth: () => Dispatch;
  signIn: (token: string) => Dispatch;
}

class App extends PureComponent<IProps> {
  public componentDidMount() {
    this.props.initAuth();
  }

  public render() {
    if (!this.props.isSignedIn) {
      return (
        <LoginPage
          clientId={settings.clientId}
          redirectUrl={settings.redirectUrl}
          onSuccess={this.handleSuccess}
        />
      );
    }

    return <Home />;
  }

  private handleSuccess = (token: string) => {
    this.props.signIn(token);
  };
}

const mapStateToProps = state => ({
  isSignedIn: authSelectors.isSignedIn(state),
});

const mapDispatchToProps = dispatch => ({
  initAuth: () => dispatch(authOps.init()),
  signIn: (token: string) => dispatch(authOps.signIn(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
