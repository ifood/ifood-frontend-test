import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GridList, GridListTile, IconButton, GridListTileBar, CircularProgress, TextField,
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { PLAYLISTS_REFRESH_INTERVAL } from '../../constants';

import { getFeaturedPlaylists } from '../../services/services';

export class RawListPlaylists extends Component {
  state = {
    isLoading: true,
    playlists: [],
    name: '',
  }

  componentDidMount() {
    this.listFeaturedPlaylists();

    this.pollingInterval = setInterval(
      () => this.listFeaturedPlaylists(), PLAYLISTS_REFRESH_INTERVAL,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      return;
    }

    this.listFeaturedPlaylists();
  }

  componentWillUnmount() {
    this.pollingInterval = null;
  }

  _handleNameChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  }

  async listFeaturedPlaylists() {
    const { formValues } = this.props;

    const playlists = await getFeaturedPlaylists(formValues);
    this.setState({ isLoading: false, playlists });
  }

  render() {
    const { isLoading, playlists, name } = this.state;
    const _filterPlaylistsByName = (playlist) => (
      playlist.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );

    return (
      <>
        <TextField
          margin="normal"
          label="Buscar playlists"
          variant="outlined"
          onChange={this._handleNameChange}
          fullWidth
        />
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <GridList cellHeight={300}>
            {playlists.filter(_filterPlaylistsByName).map((playlist, index) => (
              <GridListTile key={index}>
                <img src={playlist.images[0].url} alt={playlist.name} />
                <GridListTileBar
                  aria-label="Nome da playlist"
                  title={playlist.name}
                  subtitle={(
                    <span aria-label="Descrição da playlist">
                      {playlist.description}
                    </span>
                  )}
                  actionIcon={(
                    <IconButton
                      aria-label={`Link para a playlist ${playlist.name}`}
                      href={playlist.external_urls.spotify}
                      target="blank"
                    >
                      <OpenInNewIcon color="secondary" />
                    </IconButton>
                  )}
                />
              </GridListTile>
            ))}
          </GridList>
        )}
      </>
    );
  }
}

RawListPlaylists.propTypes = {
  formValues: PropTypes.object,
};

export default connect((state) => ({
  formValues: getFormValues('FILTERS_FORM')(state),
}))(RawListPlaylists);
