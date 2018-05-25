import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateFilters } from '../redux/actions/updateFilters';
import Filters from '../components/Filters';
import PlaylistCard from '../components/PlaylistCard';

import { getPlaylists } from '../services/spotifyServices';
import { THIRD_SECONDS } from '../constants/spotify';

export class RawList extends Component {
  static propTypes = {
    filters: PropTypes.object,
    updateFilters: PropTypes.func,
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

  _callPlaylistService = () => {
    const { filters } = this.props;
    return getPlaylists(filters)
      .then((response) => {
        const playlists = response.data.playlists.items;
        this.setState({
          playlists,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

  filterList = (event) => {
    const field = {
      [event.target.name]: event.target.value,
    };

    const currentFilterValues = this.props.filters;
    const updatedFilters = {
      ...currentFilterValues,
      ...field,
    };

    this.props.updateFilters(updatedFilters);
    this._callPlaylistService();
  }

  render() {
    const { playlists } = this.state;
    const { filters } = this.props;

    return (
      <div className="container">
        <Filters
          filterValues={filters}
          filterByName={this.filterByName}
          onChangeFilters={this.filterList}
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateFilters }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RawList);
