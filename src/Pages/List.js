import React, { Component } from 'react';

import Filters from '../components/Filters';
import PlaylistCard from '../components/PlaylistCard';

import { getPlaylists } from '../services/spotifyServices';
import { THIRD_SECONDS } from '../constants/spotify';


class List extends Component {
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
    return (
      <div className="container">
        <Filters
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

export default List;
