import { CancelTokenSource } from 'axios';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import locale2 from 'locale2'; TODO: get default locale

import { Dispatch } from 'redux';

import settings from '../settings';

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
  nextPage: string | null;
  playlists: IPlaylist[];
  previousPage: string | null;
  token: string;
  getFilterConfig: () => Dispatch;
  appendPage: (
    token: string,
    currentCancelToken: CancelTokenSource | null,
    pageAddress: string,
  ) => Dispatch;
  listFeaturedPlaylists: (
    token: string,
    currentCancelToken: CancelTokenSource | null,
    countryCode?: string | null,
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
  search: string;
  timeoutId: NodeJS.Timeout | null;
}

class Home extends PureComponent<IProps, IState> {
  public state = {
    country: null,
    currentLimit: 20,
    currentLocale: null,
    offset: 0,
    search: '',
    timeoutId: null,
  };

  private componentRef: React.RefObject<HTMLDivElement> = React.createRef<
    HTMLDivElement
  >();

  public componentDidMount() {
    this.props.getFilterConfig();
    this.loadFeaturedPlaylists(null);
  }

  public render() {
    return (
      <div ref={this.componentRef}>
        <Filter
          countries={this.props.countries}
          country={this.state.country}
          onCountryChange={this.handleCountryChange}
          onSearch={this.handleSearch}
          onSignOut={this.handleSignOut}
          search={this.state.search}
        />
        <List
          nextPage={this.props.nextPage}
          onPageChange={this.handlePageChange}
          playlists={this.props.playlists}
        />
      </div>
    );
  }

  private loadFeaturedPlaylists(country?: string | null) {
    this.scrollToTop();
    this.props.listFeaturedPlaylists(
      this.props.token,
      this.props.cancelToken,
      country,
    );
    this.clearPlaylistRefresh();

    // set new timeout
    const timeoutId = setTimeout(() => {
      this.loadFeaturedPlaylists();
    }, settings.playlistRefreshInterval);

    this.setState({ timeoutId });
  }

  private clearPlaylistRefresh() {
    // clear current timeout if set
    const { timeoutId } = this.state;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  private handleCountryChange = (countryCode: string) => {
    // resets search when country changes
    this.setState({ country: countryCode, search: '' });
    this.loadFeaturedPlaylists(countryCode);
  };

  private handlePageChange = (pageAddress: string) => {
    this.props.appendPage(
      this.props.token,
      this.props.cancelToken,
      pageAddress,
    );
  };

  private handleSearch = (search: string) => {
    this.scrollToTop();
    // resets country when search changes
    this.setState({ country: null, search });
    if (search.length > 0) {
      this.props.searchPlaylists(
        this.props.token,
        this.props.cancelToken,
        search,
      );
      this.clearPlaylistRefresh(); // refresh can be confusing when searching
    } else {
      this.loadFeaturedPlaylists();
    }
  };

  private handleSignOut = () => {
    this.props.signOut();
  };

  // FIXME: a little component/container pattern offense
  // this component should not worry about visual stuff
  private scrollToTop = () => {
    if (this.componentRef && this.componentRef.current) {
      window.scrollTo({
        behavior: 'auto',
        top: this.componentRef.current.offsetTop,
      });
    }
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
  appendPage: (
    token: string,
    cancelToken: CancelTokenSource | null,
    pageAddress: string,
  ) => dispatch(playlistOps.appendPage(token, cancelToken, pageAddress)),
  getFilterConfig: () => dispatch(filterOps.getConfig()),
  listFeaturedPlaylists: (
    token: string,
    cancelToken: CancelTokenSource | null,
    countryCode?: string | null,
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
