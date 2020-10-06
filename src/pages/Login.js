import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import "./Login.css";
import spotifyLogo from "../spotify.png";
import { Button } from "react-bootstrap";

export default class Login extends Component {
  state = {
    loading: false,
  };

  getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };

  handleSignin = (e) => {
    e.preventDefault();
    window.open(
      `https://accounts.spotify.com/authorize?client_id=77e2595877a442789caa9dc925f30ef4&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=user-read-private%20user-read-email&state=34fFs29kd09`,
      "_self"
    );
  };

  handleLogin = (token, type, expires_in) => {
    this.setState({
      loading: true,
    });

    localStorage.setItem("@SpotiFood:token", token);
    localStorage.setItem("@SpotiFood:type", type);
    localStorage.setItem("@SpotiFood:expires_in", expires_in);

    window.history.pushState({ urlPath: "/auth" }, "", "/auth");

    this.setState({
      loading: false,
    });

    window.location.reload();
    return (
      <Switch>
        <Redirect path="/auth" to="/home" />
      </Switch>
    );
  };

  componentDidMount() {
    const { access_token, token_type, expires_in } = this.getHashParams();

    if (access_token !== undefined) {
      this.handleLogin(access_token, token_type, expires_in);
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <form className="form-signin">
        <div className="text-center mb-4">
          <img
            className="mb-4"
            src={spotifyLogo}
            alt=""
            width="72"
            height="72"
          />
          <h1 className="title-text">SpotiFood</h1>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <Button
              onClick={this.handleSignin}
              style={{
                backgroundColor: "rgb(0, 225, 85)",
                border: 0,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Login with Spotify
            </Button>
          )}
        </div>
      </form>
    );
  }
}
