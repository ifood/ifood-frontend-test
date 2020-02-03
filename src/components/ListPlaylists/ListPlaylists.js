import React, { Component } from 'react';
import {
  GridList, GridListTile, IconButton, GridListTileBar, ListSubheader, CircularProgress,
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import { getFeaturedPlaylists } from '../../services/services';

class ListPlaylists extends Component {
  state = {
    isLoading: true,
    playlists: [],
  }

  componentDidMount() {
    this.listFeaturedPlaylists();
  }

  async listFeaturedPlaylists() {
    const playlists = await getFeaturedPlaylists();
    this.setState({ isLoading: false, playlists });
  }

  render() {
    const { isLoading, playlists } = this.state;
    return (
      <>
        {isLoading && <CircularProgress />}
        <GridList cellHeight={180}>
          {!isLoading && playlists.map((playlist, index) => (
            <GridListTile key={index}>
              <img src={playlist.images[0].url} alt={playlist.name} />
              <GridListTileBar
                title={playlist.name}
                subtitle={(
                  <span>
                    {playlist.description}
                  </span>
)}
                actionIcon={(
                  <IconButton aria-label={`Link para a playlist ${playlist.name}`}>
                    <OpenInNewIcon />
                  </IconButton>
              )}
              />
            </GridListTile>
          ))}
        </GridList>
      </>
    );
  }
}

export default ListPlaylists;
