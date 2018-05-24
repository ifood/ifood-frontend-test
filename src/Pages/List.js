import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Filters from '../components/Filters';
import PlaylistCard from '../components/PlaylistCard';

import { getPlaylists } from '../services/spotifyServices';
import { THIRD_SECONDS } from '../constants/spotify';

class List extends Component {
  static propTypes = {
    filters: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      playlists: [],
      intervalId: null,
    };
  }

  componentDidMount() {
    this._callPlaylistService();
    this._updateRefreshInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  _callPlaylistService = () => ((
    getPlaylists()
      .then((response) => {
        const playlists = response.data.playlists.items;
        this.setState({
          playlists,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  ));

  _updateRefreshInterval = () => {
    const intervalId = setInterval(this._callPlaylistService, THIRD_SECONDS);
    this.setState({
      intervalId,
    });
  }

  filterByName = (event) => {
    const searchedName = event.target.value;
    const { playlists } = this.state;
    const filteredPlaylists = playlists
      .filter((playlist) => {
        return playlist.name.toLowerCase().search(searchedName.toLowerCase()) !== -1;
      });

    this.setState({
      playlists: filteredPlaylists,
    });
  }

  render() {
    const { playlists } = this.state;
    const { filters } = this.props;

    return (
      <div className="container">
        <Filters
          filterValues={filters}
          filterByName={this.filterByName}
        />
        {
          playlists.map(playlist => ((
            <PlaylistCard
              href={playlist.external_urls.spotify}
              image={playlist.images[0].url}
              name={playlist.name}
              key={playlist.id}
            />
          )))
        }
      </div>
    );
  }
}

const mapStateToProps = store => ({
  filters: store.filters,
});

export default connect(mapStateToProps)(List);
