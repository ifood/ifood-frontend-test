import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";
import _ from "lodash";
import PropTypes from "prop-types";

const matchesFilter = (playlist, filter) => {
  const playlistName = playlist.name.toUpperCase();
  const nameFilter = filter.toUpperCase();
  return playlistName.includes(nameFilter);
};

export default class FeaturedPlaylists extends Component {
  renderPlaylists() {
    const { playlists, filters } = this.props;
    const nameFilter = _.get(filters, "name");
    const filteredPlaylists = nameFilter
      ? playlists.filter(playlist => matchesFilter(playlist, filters.name))
      : playlists;

    return filteredPlaylists.map(playlist => (
      <PlaylistCard playlist={playlist} key={_.uniq(playlist.name)} />
    ));
  }

  fetchPlaylists() {
    const { accessToken, fetchFeaturedPlaylists, filters } = this.props;
    fetchFeaturedPlaylists(accessToken, filters);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.fetchPlaylists(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { accessToken, playlists } = this.props;
    accessToken && playlists.length === 0 && this.fetchPlaylists();

    return <div className="playlists-list">{this.renderPlaylists()}</div>;
  }
}

FeaturedPlaylists.propTypes = {
  getFilters: PropTypes.func,
  setFilter: PropTypes.func,
  fetchFeaturedPlaylists: PropTypes.func,
  accessToken: PropTypes.string,
  filters: PropTypes.object,
  playlists: PropTypes.array,
};
