import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameFilter from './NameFilter';
import APIFilters from './APIFilters';
import PlaylistsList from './PlaylistsList';
import { getFilters } from '../modules/ShowPlaylistsAPI';
import '../styles/showPlaylistsPage.scss';

const spotify = {
  "message": "Monday morning music, coming right up!",
  "playlists": {
    "href": "https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2015-05-18T06:44:32&offset=0&limit=2",
    "items": [{
      "collaborative": false,
      "external_urls": {
        "spotify": "http://open.spotify.com/user/spotify/playlist/6ftJBzU2LLQcaKefMi7ee7"
      },
      "href": "https://api.spotify.com/v1/users/spotify/playlists/6ftJBzU2LLQcaKefMi7ee7",
      "id": "6ftJBzU2LLQcaKefMi7ee7",
      "images": [{
        "height": 300,
        "url": "https://i.scdn.co/image/7bd33c65ebd1e45975bbcbbf513bafe272f033c7",
        "width": 300
      }],
      "name": "Monday Morning Mood",
      "owner": {
        "external_urls": {
          "spotify": "http://open.spotify.com/user/spotify"
        },
        "href": "https://api.spotify.com/v1/users/spotify",
        "id": "spotify",
        "type": "user",
        "uri": "spotify:user:spotify"
      },
      "public": null,
      "snapshot_id": "WwGvSIVUkUvGvqjgj/bQHlRycYmJ2TkoIxYfoalWlmIZT6TvsgvGMgtQ2dGbkrAW",
      "tracks": {
        "href": "https://api.spotify.com/v1/users/spotify/playlists/6ftJBzU2LLQcaKefMi7ee7/tracks",
        "total": 245
      },
      "type": "playlist",
      "uri": "spotify:user:spotify:playlist:6ftJBzU2LLQcaKefMi7ee7"
    }, {
      "collaborative": false,
      "external_urls": {
        "spotify": "http://open.spotify.com/user/spotify__sverige/playlist/4uOEx4OUrkoGNZoIlWMUbO"
      },
      "href": "https://api.spotify.com/v1/users/spotify__sverige/playlists/4uOEx4OUrkoGNZoIlWMUbO",
      "id": "4uOEx4OUrkoGNZoIlWMUbO",
      "images": [{
        "height": 300,
        "url": "https://i.scdn.co/image/24aa1d1b491dd529b9c03392f350740ed73438d8",
        "width": 300
      }],
      "name": "Upp och hoppa!",
      "owner": {
        "external_urls": {
          "spotify": "http://open.spotify.com/user/spotify__sverige"
        },
        "href": "https://api.spotify.com/v1/users/spotify__sverige",
        "id": "spotify__sverige",
        "type": "user",
        "uri": "spotify:user:spotify__sverige"
      },
      "public": null,
      "snapshot_id": "0j9Rcbt2KtCXEXKtKy/tnSL5r4byjDBOIVY1dn4S6GV73EEUgNuK2hU+QyDuNnXz",
      "tracks": {
        "href": "https://api.spotify.com/v1/users/spotify__sverige/playlists/4uOEx4OUrkoGNZoIlWMUbO/tracks",
        "total": 38
      },
      "type": "playlist",
      "uri": "spotify:user:spotify__sverige:playlist:4uOEx4OUrkoGNZoIlWMUbO"
    }],
    "limit": 2,
    "next": "https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2015-05-18T06:44:32&offset=2&limit=2",
    "offset": 0,
    "previous": null,
    "total": 12
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
      <div>
        <h1>{intl.formatMessage({ id: 'productName' })}</h1>
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
      </div>
    );
  }
}

ShowPlaylistsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
}

export default ShowPlaylistsPage;
