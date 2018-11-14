import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameFilter from './NameFilter';
import APIFilters from './APIFilters';
import PlaylistsList from './PlaylistsList';
import { getFilters, getPlaylists } from '../modules/ShowPlaylistsAPI';
import '../styles/showPlaylistsPage.scss';

function filterPlaylistsByName(list, name) {
  const nameCleared = name.toLocaleLowerCase();

  if (nameCleared === '') {
    return [...list];
  }

  return list.filter(item => {
    const playlistNameCleared = item.name.toLocaleLowerCase();

    return playlistNameCleared.indexOf(nameCleared) !== -1;
  });
}

function validateValue(value) {
  // Boolean(0) is false, but it's a valid value for offset
  return Boolean(value) || value === 0;
}

function buildPlaylistsQuery(data) {
  const queryParams = ['locale', 'country', 'timestamp', 'limit', 'offset'];
  return Object.keys(data).filter(item =>
    queryParams.indexOf(item) !== -1 && validateValue(data[item]))
    .map(item => `${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`)
    .join('&');
}

class ShowPlaylistsPage extends Component {
  state = {
    name: '',
    filters: [],
    playlists: []
  }

  async componentDidMount() {
    try {
      const playListsQuery = buildPlaylistsQuery(this.state);
      const result = await Promise.all([getFilters(), getPlaylists(this.props.token, playListsQuery)]);
      const nextFilters = [...result[0].filters];
      const nextPlaylists = [...result[1].playlists.items];

      return this.setState({
        filters: nextFilters,
        playlists: nextPlaylists,
        filteredPlaylists: nextPlaylists
      });
    } catch (e) {
      return this.setState({
        playlists: [],
        filteredPlaylists: [],
      });
    }
  }

  getPlaylists = async () => {
    try {
      const playListsQuery = buildPlaylistsQuery(this.state);
      const result = await getPlaylists(this.props.token, playListsQuery);
      const nextPlaylists = [...result.playlists.items];
      const nextFilteredPlaylists = filterPlaylistsByName(nextPlaylists, this.state.name);

      return this.setState({
        playlists: nextPlaylists,
        filteredPlaylists: nextFilteredPlaylists,
      });
    } catch (e) {
      return this.setState({
        playlists: [],
        filteredPlaylists: [],
      });
    }
  }

  onChange = (stateProp) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ [stateProp]: e.target.value },
      () => this.getPlaylists());
  }

  onNameChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ name: e.target.value },
      () => this.filterPlaylists());
  }

  filterPlaylists = () => {
    const filteredPlaylists = filterPlaylistsByName(this.state.playlists, this.state.name);

    return this.setState({ filteredPlaylists });
  }

  render() {
    const { intl } = this.props;

    return (
      <div className="showPlaylistsPage">
        <h3>{intl.formatMessage({ id: 'filters' })}</h3>
        <div className="filtersContainer">
          <APIFilters
            onChange={this.onChange}
            filters={this.state.filters}
            intl={intl}
          />
          <NameFilter
            onChange={this.onNameChange}
            intl={intl}
          />
        </div>
        <h3>{intl.formatMessage({ id: 'playlists' })}</h3>
        <PlaylistsList
          list={this.state.filteredPlaylists}
          intl={intl}
        />
      </div>
    );
  }
}

ShowPlaylistsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
}

export default ShowPlaylistsPage;
