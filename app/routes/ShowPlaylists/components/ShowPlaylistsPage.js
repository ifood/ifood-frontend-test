import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameFilter from './NameFilter';
import APIFilters from './APIFilters';
import PlaylistsList from './PlaylistsList';
import { getFilters } from '../modules/ShowPlaylistsAPI';
import '../styles/showPlaylistsPage.scss';

const spotify = {
  "playlists": {
    "items": [],
  }
};

class ShowPlaylistsPage extends Component {
  state = {
    name: '',
    filters: [],
    playlists: []
  }

  async componentDidMount() {
    const result = await getFilters();
    const newStateProps = [...result.filters];

    return this.setState({
      filters: newStateProps,
      playlists: [...spotify.playlists.items],
      filteredPlaylists: [...spotify.playlists.items]
    });
  }

  onChange = (stateProp) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ [stateProp]: e.target.value },
      () => this.filterPlaylists());
  }

  filterPlaylists = () => {
    const nameCleared = this.state.name.toLocaleLowerCase();

    if (nameCleared === '') {
      return this.setState({ filteredPlaylists: [...this.state.playlists] });
    }

    const filteredPlaylists = this.state.playlists
      .filter(item => {
        const playlistNameCleared = item.name.toLocaleLowerCase();

        return playlistNameCleared.indexOf(nameCleared) !== -1;
      });

    return this.setState({ filteredPlaylists });
  }

  render() {
    const { intl } = this.props;

    return (
      <div className="showPlaylistsPage">
        <h3>{intl.formatMessage({ id: 'filters' })}</h3>
        <APIFilters
          onChange={this.onChange}
          filters={this.state.filters}
        />
        <NameFilter
          onChange={this.onChange('name')}
          intl={intl}
        />
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
