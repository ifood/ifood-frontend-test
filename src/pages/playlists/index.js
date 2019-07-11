import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Typography,
  Table,
  TablePagination,
  TableFooter,
  TableRow,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';

import Filters from 'components/filters';
import PlaylistList from 'components/playlistList';
import { withTokenValidation } from 'hocs/withTokenValidation';
import { Creators as globalActions } from 'store/ducks/global';
import { PlaylistWrapper, PlaylistHeader, PlaylistBody } from './styles';

class Playlists extends Component {
  state = {
    timerRef: null,
  };

  componentDidMount = () => {
    const { getSpotifyFiltersRequest, getSpotifyPlaylistsRequest } = this.props;
    getSpotifyFiltersRequest();
    getSpotifyPlaylistsRequest();
    this.setTimer();
  };

  componentWillUnmount = () => {
    window.clearInterval(this.state.timerRef);
  };

  setTimer = () => {
    const refreshInterval = 30000; // 30 seconds
    const timerRef = window.setInterval(() => {
      this.props.getSpotifyPlaylistsRequest();
    }, refreshInterval);

    this.setState({ timerRef });
  };

  changePage = (event, newPage) => {
    const { getSpotifyPlaylistsRequest, setAppliedFilterChange, appliedFilters } = this.props;
    setAppliedFilterChange('offset', newPage * appliedFilters.limit);
    getSpotifyPlaylistsRequest();
  };

  render() {
    const {
      playlists,
      title,
      appliedFilters,
      responseTotals,
      showSnack,
      handleCloseSnack,
      setResponseTotals,
      loadingResults,
      serverTotals,
    } = this.props;

    return (
      <PlaylistWrapper>
        <PlaylistHeader>
          <Typography variant="h3" component="h2">
            Playlists: {title}
          </Typography>

          <Typography component="p">Navegue pelas playlists em destaque e aproveite!</Typography>
        </PlaylistHeader>
        <PlaylistBody>
          <Filters />
          <div className="results">
            <Table className="table">
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[]}
                    count={responseTotals || 0}
                    page={appliedFilters.offset / appliedFilters.limit}
                    rowsPerPage={Number(appliedFilters.limit)}
                    onChangePage={this.changePage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
            <PlaylistList
              items={playlists}
              appliedFilters={appliedFilters}
              setResponseTotals={setResponseTotals}
              loadingResults={loadingResults}
              serverTotals={serverTotals}
            />
          </div>
        </PlaylistBody>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={!!showSnack}
          autoHideDuration={6000}
          onClose={handleCloseSnack}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
        >
          <SnackbarContent
            classes={{ root: 'error' }}
            onClose={handleCloseSnack}
            message={<span id="message-id">{showSnack}</span>}
          />
        </Snackbar>
      </PlaylistWrapper>
    );
  }
}

const mapStateToProps = store => ({
  playlists: store.global.playlists,
  appliedFilters: store.global.appliedFilters,
  responseTotals: store.global.responseTotals,
  showSnack: store.global.showSnack,
  title: store.global.title,
  loadingResults: store.global.loadingResults,
  serverTotals: store.global.serverTotals,
});

const mapDispatchToProps = dispatch => bindActionCreators(globalActions, dispatch);

Playlists.defaultProps = {
  responseTotals: null,
  showSnack: '',
  title: '',
  loadingResults: false,
};

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  appliedFilters: PropTypes.object.isRequired,
  responseTotals: PropTypes.number,
  serverTotals: PropTypes.number.isRequired,
  showSnack: PropTypes.string,
  title: PropTypes.string,
  loadingResults: PropTypes.bool,
  getSpotifyPlaylistsRequest: PropTypes.func.isRequired,
  getSpotifyFiltersRequest: PropTypes.func.isRequired,
  setAppliedFilterChange: PropTypes.func.isRequired,
  handleCloseSnack: PropTypes.func.isRequired,
  setResponseTotals: PropTypes.func.isRequired,
};

export default withTokenValidation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Playlists),
);
