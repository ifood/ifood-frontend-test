import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';

import { IPlaylist } from '../api/spotify';
import Filter from '../components/Filter';
import List from '../components/List';
import {
  operations as authOps,
  selectors as authSelectors,
} from '../ducks/auth';
import { operations as filterOps } from '../ducks/filter';
import {
  operations as playlistOps,
  selectors as playlistSelectors,
} from '../ducks/playlist';

interface IProps {
  playlists: IPlaylist[];
  token: string;
  getFilterConfig: () => Dispatch;
  listFeaturedPlaylists: (token: string) => Dispatch;
  searchPlaylists: (token: string, search: string) => Dispatch;
  signOut: () => Dispatch;
}

class Home extends PureComponent<IProps> {
  public componentDidMount() {
    this.props.getFilterConfig();
    this.props.listFeaturedPlaylists(this.props.token);
  }

  public render() {
    return (
      <div>
        <Filter onSearch={this.handleSearch} onSignOut={this.handleSignOut} />
        <List playlists={this.props.playlists} />
      </div>
    );
  }

  private handleSearch = (search: string) => {
    this.props.searchPlaylists(this.props.token, search);
  };

  private handleSignOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = state => ({
  playlists: playlistSelectors.getPlaylists(state),
  token: authSelectors.getToken(state),
});

const mapDispatchToProps = dispatch => ({
  getFilterConfig: () => dispatch(filterOps.getConfig()),
  listFeaturedPlaylists: (token: string) =>
    dispatch(playlistOps.listFeaturedPlaylists(token)),
  searchPlaylists: (token: string, search: string) =>
    dispatch(playlistOps.searchPlaylists(token, search)),
  signOut: () => dispatch(authOps.signOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
