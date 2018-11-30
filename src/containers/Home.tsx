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
  nextPage: string | null;
  playlists: IPlaylist[];
  previousPage: string | null;
  token: string;
  getFilterConfig: () => Dispatch;
  getPage: (token: string, pageAddress: string) => Dispatch;
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
        <List
          nextPage={this.props.nextPage}
          onPageChange={this.handlePageChange}
          previousPage={this.props.previousPage}
          playlists={this.props.playlists}
        />
      </div>
    );
  }

  private handlePageChange = (pageAddress: string) => {
    this.props.getPage(this.props.token, pageAddress);
  };

  private handleSearch = (search: string) => {
    this.props.searchPlaylists(this.props.token, search);
  };

  private handleSignOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = state => ({
  nextPage: playlistSelectors.getNextPage(state),
  playlists: playlistSelectors.getPlaylists(state),
  previousPage: playlistSelectors.getPreviousPage(state),
  token: authSelectors.getToken(state),
});

const mapDispatchToProps = dispatch => ({
  getFilterConfig: () => dispatch(filterOps.getConfig()),
  getPage: (token: string, pageAddress: string) =>
    dispatch(playlistOps.getPage(token, pageAddress)),
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
