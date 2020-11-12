/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as playlistsActions from '../../store/playlists/actions';

import logo from '../../assets/logo.png';

import api from '../../services/api';

import FilterPlaylist from '../../components/FilterPlaylist';
import ListPlaylist from '../../components/ListPlaylist';

import { Header, HeaderTitle, HeaderLogo } from './styles';

class Home extends Component {
  state = {
    playlists: [],
    expiredToken: false,
    hasAuthorization: false,
    filterApplied: false,
  };

  hasAuthorization = () => {
    return localStorage.getItem('@SpotiFood:token') !== null;
  };

  syncMethod = () => {
    const { playlists, filterApplied } = this.state;

    api
      .get('browse/featured-playlists')
      .then(data => {
        if (filterApplied) {
          this.setState({
            playlists,
          });
        } else {
          this.props.listPlaylists(data.data.playlists.items);
          this.setState({
            playlists,
          });
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({ expiredToken: true });
          setInterval(() => {
            this.setState({ expiredToken: false });
            window.location.replace(process.env.REACT_APP_REDIRECT_URL);
          }, 3000);
        }
      });
  };

  componentDidMount() {
    if (this.hasAuthorization()) {
      this.setState({ hasAuthorization: true });
      api
        .get('browse/featured-playlists')
        .then(data => {
          this.props.listPlaylists(data.data.playlists.items);
          this.setState({
            playlists: this.props.playlists,
          });
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.setState({ expiredToken: true });
            setInterval(() => {
              this.setState({ expiredToken: false });
              window.location.replace(process.env.REACT_APP_REDIRECT_URL);
            }, 3000);
          }
        });
    } else {
      this.setState({ hasAuthorization: false });
      setInterval(() => {
        window.location.replace(process.env.REACT_APP_REDIRECT_URL);
      }, 3000);
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.syncMethod();
    }, 30000);
  }

  myCallFromParent = dataFromChild => {
    this.setState({
      filterApplied: dataFromChild.filterApplied,
    });
  };

  render() {
    const { expiredToken, hasAuthorization, playlists } = this.state;

    return (
      <div className="container">
        <Header>
          <HeaderTitle>SpotiFood</HeaderTitle>
          <HeaderLogo height={36} src={logo} alt="SpotiFood" />
        </Header>
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
                    style={{ justifyContent: 'center' }}
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
                style={{ justifyContent: 'center' }}
              >
                <Alert.Heading>
                  Sorry, you don&apos;t have access!
                </Alert.Heading>
                <hr />
              </Alert>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
  filteredPlaylists: state.filteredPlaylists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(playlistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
