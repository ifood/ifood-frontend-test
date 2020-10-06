import React, { Component } from "react";
import spotifyLogo from "../spotify.png";

//styles
import "./Home.css";
import { Alert } from "react-bootstrap";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as playlistsActions from "../actions/playlists";

// api
import api from "../services/api";

//components
import FilterPlaylist from "../components/FilterPlaylist";
import ListPlaylist from "../components/ListPlaylist";

class Home extends Component {
  state = {
    playlists: [],
    expiredToken: false,
    hasAuthorization: false,
    filterApplied: false,
  };

  hasAuthorization = () => {
    return localStorage.getItem("@SpotiFood:token") === null ? false : true;
  };

  syncMethod = () => {
    const { filterApplied } = this.state;
    api
      .get("browse/featured-playlists")
      .then((data) => {
        if (filterApplied) {
          this.setState({
            playlists: this.state.playlists,
          });
        } else {
          this.props.listPlaylists(data.data.playlists.items);
          this.setState({
            playlists: this.state.playlists,
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.setState({ expiredToken: true });
          setInterval(() => {
            this.setState({ expiredToken: false });
            window.location.replace("http://localhost:3000/");
          }, 3000);
        }
      });
  };

  componentDidMount() {
    if (this.hasAuthorization()) {
      this.setState({ hasAuthorization: true });
      api
        .get("browse/featured-playlists")
        .then((data) => {
          this.props.listPlaylists(data.data.playlists.items);
          this.setState({
            playlists: this.props.playlists,
          });
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.setState({ expiredToken: true });
            setInterval(() => {
              this.setState({ expiredToken: false });
              window.location.replace("http://localhost:3000/");
            }, 3000);
          }
        });
    } else {
      this.setState({ hasAuthorization: false });
      setInterval(() => {
        window.location.replace("http://localhost:3000/");
      }, 3000);
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.syncMethod();
    }, 30000);
  }

  myCallFromParent = (dataFromChild) => {
    this.setState({
      filterApplied: dataFromChild.filterApplied,
    });
  };

  render() {
    const { expiredToken, hasAuthorization, playlists } = this.state;
    return (
      <div className="container">
        <div className="title-header">
          <h1 className="title-text">SpotiFood</h1>
          <img className="logo" height={36} src={spotifyLogo} alt="SpotiFood" />
        </div>
        <div className="row">
          {hasAuthorization ? (
            <>
              <FilterPlaylist callbackFromParent={this.myCallFromParent} />
              <div className="col-12">
                {!expiredToken ? (
                  <ListPlaylist playlists={playlists.playlists} />
                ) : (
                  <Alert
                    dismissible
                    show={expiredToken}
                    onClose={() => null}
                    variant="danger"
                    style={{ justifyContent: "center" }}
                  >
                    <Alert.Heading>Your token has been expired!</Alert.Heading>
                    <hr />
                  </Alert>
                )}
              </div>
            </>
          ) : (
            <>
              <Alert
                dismissible
                show={!hasAuthorization}
                onClose={() => null}
                variant="danger"
                style={{ justifyContent: "center" }}
              >
                <Alert.Heading>Sorry, you don't have access!</Alert.Heading>
                <hr />
              </Alert>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists,
  filteredPlaylists: state.filteredPlaylists,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(playlistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
