import React, { Component } from 'react';
import {
  Container, GridList, GridListTile, IconButton, GridListTileBar, ListSubheader, CircularProgress,
} from '@material-ui/core';

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

    console.log('playlists', playlists);
  }

  render() {
    const { isLoading, playlists } = this.state;
    console.log(playlists);
    return (
      <>
        {isLoading && <CircularProgress />}
        <GridList cellHeight={180}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {!isLoading && playlists.map((playlist, index) => (
            <GridListTile key={index}>
              <img src={playlist.images[0].url} alt={playlist.name} />
              <GridListTileBar
                title={playlist.name}
                subtitle={(
                  <span>
                    by:
                    {' '}
                    {playlist.description}
                  </span>
)}
                actionIcon={(
                  <IconButton aria-label={`info about ${playlist.name}`}>
                    {/* <InfoIcon /> */}
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
