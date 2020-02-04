import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GridList, GridListTile, IconButton, GridListTileBar, CircularProgress, TextField,
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import { getFeaturedPlaylists } from '../../services/services';

class ListPlaylists extends Component {
  state = {
    isLoading: true,
    playlists: [],
    name: '',
  }

  componentDidMount() {
    this.listFeaturedPlaylists();
  }

  componentDidUpdate(prevProps, prevState) {
    const { formValues } = this.props;

    if (this.state !== prevState) {
      return;
    }

    this.listFeaturedPlaylists(formValues);
  }

  _handleNameChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  }

  async listFeaturedPlaylists(params = {}) {
    const playlists = await getFeaturedPlaylists(params);
    this.setState({ isLoading: false, playlists });
  }

  render() {
    const { isLoading, playlists, name } = this.state;
    const _filterPlaylistsByName = (playlist) => (
      playlist.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );

    return (
      <>
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <>
            <TextField
              margin="normal"
              label="Buscar playlists"
              variant="outlined"
              onChange={this._handleNameChange}
              fullWidth
            />
            <GridList cellHeight={300}>
              {playlists.filter(_filterPlaylistsByName).map((playlist, index) => (
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
        )}
      </>
    );
  }
}

ListPlaylists.propTypes = {
  formValues: PropTypes.object,
};

export default connect((state) => ({
  formValues: getFormValues('FILTERS_FORM')(state),
}))(ListPlaylists);
