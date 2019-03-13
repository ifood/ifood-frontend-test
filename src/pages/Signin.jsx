import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { extractAccessTokenFromUrlHash } from '../utils/common';

import { signIn, signInSuccess } from '../modules/authentication';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleAuthenticateSpotifood = this.handleAuthenticateSpotifood.bind(this);
    this.handleAuthenticatedUser = this.handleAuthenticatedUser.bind(this);
  }

  componentDidMount() {
    this.handleAuthenticatedUser();
  }

  handleAuthenticateSpotifood() {
    const { authenticate } = this.props;
    authenticate();
  }

  async handleAuthenticatedUser() {
    const { history, location } = this.props;
    const isSpotifyAuthenticationCallback = !!location.hash;

    if (isSpotifyAuthenticationCallback) {
      const { signInUser } = this.props;
      const accessToken = extractAccessTokenFromUrlHash(location.hash);
      await signInUser(accessToken);
      history.push('/');
    }
  }

  render() {
    return (
      <div className="signin-container">
        <div className="background-ifood" />
        <div className="background-spotify" />
        <div className="signin-content">
          <h3>Bem-vindo(a) ao SpotiFood</h3>
          <div className="container">
            <h4 className="welcome-heading">Entrar</h4>
            <p className="welcome-text">
              Faça o login usando sua conta SpotiFood para acessar os nosso serviços.
            </p>
            <div className="row">
              <Button
                variant="success"
                className="btn singin-button"
                onClick={this.handleAuthenticateSpotifood}
              >
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });
const mapDispatchToProps = dispatch => bindActionCreators({
  authenticate: signIn,
  signInUser: signInSuccess,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Signin));

Signin.propTypes = {
  authenticate: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
  signInUser: PropTypes.func.isRequired,
};
