import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameFilter from './NameFilter';
import APIFilters from './APIFilters';
import PlaylistsList from './PlaylistsList';
import { getFilters, getPlaylists } from '../modules/ShowPlaylistsAPI';
import '../styles/showPlaylistsPage.scss';

class ShowPlaylistsPage extends Component {
  state = {
    name: '',
    filters: [],
    playlists: []
  }

  async componentDidMount() {
    const result = await Promise.all([getFilters(), getPlaylists(this.props.token)]);
    const nextFilters = [...result[0].filters];
    const nextPlaylists = [...result[1].playlists.items];

    return this.setState({
      filters: nextFilters,
      playlists: nextPlaylists,
      filteredPlaylists: nextPlaylists
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
