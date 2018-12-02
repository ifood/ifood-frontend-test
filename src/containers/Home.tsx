import { CancelTokenSource } from 'axios';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import locale2 from 'locale2'; TODO: get default locale

import { Dispatch } from 'redux';

import { IPlaylist } from '../api/spotify';
import Filter from '../components/Filter';
import List from '../components/List';
import {
  operations as authOps,
  selectors as authSelectors,
} from '../ducks/auth';
import {
  operations as filterOps,
  selectors as filterSelectors,
} from '../ducks/filter';
import {
  operations as playlistOps,
  selectors as playlistSelectors,
} from '../ducks/playlist';

interface IProps {
  cancelToken: CancelTokenSource | null;
  countries: Array<{ name: string; value: string }>;
  country: string | null;
  nextPage: string | null;
  playlists: IPlaylist[];
  previousPage: string | null;
  token: string;
  getFilterConfig: () => Dispatch;
  getPage: (
    token: string,
    currentCancelToken: CancelTokenSource | null,
    pageAddress: string,
  ) => Dispatch;
  listFeaturedPlaylists: (
    token: string,
    currentCancelToken: CancelTokenSource | null,
    countryCode: string | null,
  ) => Dispatch;
  searchPlaylists: (
    token: string,
    currentCancelToken: CancelTokenSource | null,
    search: string,
  ) => Dispatch;
  signOut: () => Dispatch;
}

// This may be on filter reducer, but for the sake of simplification let's keep
// in the state
// For this simple app, let's convey the redux state keeps the "raw" api data
interface IState {
  currentLocale: string | null;
  country: string | null;
  currentLimit: number;
  offset: number;
}

class Home extends PureComponent<IProps, IState> {
  public state = {
    country: null,
    currentLimit: 20,
    currentLocale: null,
    offset: 0,
  };

  public componentDidMount() {
    this.props.getFilterConfig();
    this.props.listFeaturedPlaylists(
      this.props.token,
      this.props.cancelToken,
      this.props.country,
    );
  }

  public render() {
    return (
      <div>
        <Filter
          countries={this.props.countries}
          onCountryChange={this.handleCountryChange}
          onSearch={this.handleSearch}
          onSignOut={this.handleSignOut}
        />
        <List
          nextPage={this.props.nextPage}
          onPageChange={this.handlePageChange}
          previousPage={this.props.previousPage}
          playlists={this.props.playlists}
        />
      </div>
    );
  }

  private handleCountryChange = (countryCode: string) => {
    this.setState({
      country: countryCode,
    });
    this.props.listFeaturedPlaylists(
      this.props.token,
      this.props.cancelToken,
      countryCode,
    );
  };

  private handlePageChange = (pageAddress: string) => {
    this.props.getPage(this.props.token, this.props.cancelToken, pageAddress);
  };

  private handleSearch = (search: string) => {
    this.props.searchPlaylists(
      this.props.token,
      this.props.cancelToken,
      search,
    );
  };

  private handleSignOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = state => ({
  cancelToken: playlistSelectors.getCancellationToken(state),
  countries: filterSelectors.getCountryList(state),
  nextPage: playlistSelectors.getNextPage(state),
  playlists: playlistSelectors.getPlaylists(state),
  previousPage: playlistSelectors.getPreviousPage(state),
  token: authSelectors.getToken(state),
});

const mapDispatchToProps = dispatch => ({
  getFilterConfig: () => dispatch(filterOps.getConfig()),
  getPage: (
    token: string,
    cancelToken: CancelTokenSource | null,
    pageAddress: string,
  ) => dispatch(playlistOps.getPage(token, cancelToken, pageAddress)),
  listFeaturedPlaylists: (
    token: string,
    cancelToken: CancelTokenSource | null,
    countryCode: string | null,
  ) =>
    dispatch(
      playlistOps.listFeaturedPlaylists(token, cancelToken, countryCode),
    ),
  searchPlaylists: (
    token: string,
    cancelToken: CancelTokenSource | null,
    search: string,
  ) => dispatch(playlistOps.searchPlaylists(token, cancelToken, search)),
  signOut: () => dispatch(authOps.signOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
