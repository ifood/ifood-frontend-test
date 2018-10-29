import React, { Component } from 'react';
import qs from 'qs';

const SUCCESS_ROUTE = '/playlists';
const FAIL_ROUTE = '/';

// TODO improve the authorzation to check if the token is already saved

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      const { location, history } = this.props;
      localStorage.removeItem('spotifood-access-token');

      const queryParams = qs.parse(location.hash);
      const accessToken = queryParams['#access_token'];

      if (!accessToken) {
        history.push(FAIL_ROUTE);
      } else {
        localStorage.setItem('spotifood-access-token', accessToken);
        history.push(SUCCESS_ROUTE);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return Authentication;
}
