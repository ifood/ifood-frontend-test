import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Auth extends PureComponent {
  componentDidMount() {
    const URLSearchParams = (new URL(document.location)).searchParams;
    const code = URLSearchParams.get('code');
    this.props.setupToken(code);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      this.props.history.push('/showplaylists');
    }
  }

  render() {
    if (this.props.error) {
      return <span id="error">{this.props.error}</span>;
    }

    return <span id="loading">Loading..</span>;
  }
}

Auth.propTypes = {
  setupToken: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  history: PropTypes.object.isRequired,
};

export default Auth;

