import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import pickBy from 'lodash/pickBy';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../../components/Header';
import Filters from './components/Filters';
import PlaylistGrid from './components/PlaylistGrid';
import {
  playlists as playlistActions,
  filtersMetadata as filtersMetadataActions,
} from './Playlists.actions';
import { REFRESH_INTERVAL } from './Playlists.constants';

const Container = styled.div`
  flex-grow: 1;
  padding: 25px;
`;

const ErrorMessage = styled.div`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  color: #dc3545;
  font-size: 16px;
`;

const SpinnerContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  color: #bc2026;
`;

class Playlists extends Component {
  state = {
    filteredPlaylists: [],
    searchTerm: '',
  }

  componentDidMount() {
    const { fetchPlayLists, fetchFiltersMetadata } = this.props;
    const intervalId = setInterval(fetchPlayLists, REFRESH_INTERVAL);
    fetchPlayLists();
    fetchFiltersMetadata();
    this.setState({ intervalId });
  }

  componentWillReceiveProps(nextProps) {
    const { searchTerm } = this.state;
    const { playlists } = this.props;
    if (nextProps.playlists !== playlists) {
      this.setState({
        filteredPlaylists: this.filterByText(nextProps.playlists, searchTerm),
      });
    }
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  filterByText = (playlists, searchTerm) => {
    if (searchTerm === '') {
      return playlists;
    }

    return playlists.filter((playlist) => {
      return playlist.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  onFiltersChange = (filters) => {
    const { fetchPlayLists } = this.props;
    const validFilters = pickBy(filters, value => value !== '');
    fetchPlayLists(validFilters);
  }

  onSearchChange = (searchTerm) => {
    const { playlists } = this.props;
    const filteredPlaylists = playlists.length
      ? this.filterByText(playlists, searchTerm)
      : playlists;

    this.setState({
      searchTerm,
      filteredPlaylists,
    });
  }

  renderPlaylistGrid = () => {
    const { filteredPlaylists } = this.state;
    const { isLoadingPlaylists } = this.props;

    if (isLoadingPlaylists) {
      return (
        <SpinnerContainer>
          <CircularProgress />
        </SpinnerContainer>
      );
    }

    if (!filteredPlaylists.length) {
      return (
        <ErrorMessage>
          There are no playlists for these filters, please change them and try again
        </ErrorMessage>
      );
    }
    return <PlaylistGrid playlists={filteredPlaylists} />;
  }

  render() {
    const { metaFilters } = this.props;

    return (
      <Fragment>
        <Header title="Spotifood" />
        <Container>
          <Filters
            metaFilters={metaFilters}
            onChange={this.onFiltersChange}
            onSearch={this.onSearchChange}
          />
          {this.renderPlaylistGrid()}
        </Container>
      </Fragment>
    );
  }
}

Playlists.propTypes = {
  fetchPlayLists: PropTypes.func.isRequired,
  fetchFiltersMetadata: PropTypes.func.isRequired,
  metaFilters: PropTypes.array,
  playlists: PropTypes.array,
  isLoadingPlaylists: PropTypes.bool,
};

Playlists.defaultProps = {
  metaFilters: null,
  playlists: undefined,
  isLoadingPlaylists: false,
};

const mapStateToProps = (state) => {
  return {
    playlists: state.playlistsContainer.playlists.data,
    isLoadingPlaylists: state.playlistsContainer.playlists.loading,
    metaFilters: state.playlistsContainer.filters.metadata,
    isLoadingFilters: state.playlistsContainer.filters.loading,
  };
};

export { Playlists };

export default connect(mapStateToProps, {
  fetchPlayLists: playlistActions.request,
  fetchFiltersMetadata: filtersMetadataActions.request,
})(Playlists);
