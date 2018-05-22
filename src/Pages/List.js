import React, { Component } from 'react';
import Filters from '../components/Filters/Filters';
import PlaylistCard from '../components/PlaylistCard/PlaylistCard';

import { getPlaylists } from '../services/spotifyServices';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: [],
    };
  }

  componentDidMount() {
    getPlaylists()
      .then((response) => {
        const playlists = response.data.playlists.items;
        this.setState({
          playlists,
        });
      });
  }

  render() {
    const { playlists } = this.state;
    return (
      <div className="container">
        <Filters />
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
