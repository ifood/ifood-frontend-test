import './style.sass';
import React from 'react';
import SpIcon from '../../../../../components/SpIcon';
import MainStore from '../../index.store';
import SpotifyService from '../../../../../services/spotify.service';
import Playlist from './components/Playlist';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = MainStore.getState();
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    MainStore.on('change', (state) => {
      this.setState(state);
    });
    MainStore.on('change-filters', () => {
      this.getPlayLists();
    });
    this.getPlayLists();
    setTimeout(() => {
      MainStore._offset = 0;
      MainStore.filters = {};
    }, 30000);
  }

  getPlayLists() {
    const { filters, limit, offset } = MainStore;
    SpotifyService
      .getFeaturedPlaylists(filters, limit, offset)
      .then((result) => {
        MainStore.playlists = result.items;
        MainStore.total = result.total;
      })
      .catch((error) => {
        MainStore.error = error;
        MainStore.playlists = [];
        MainStore.total = 0;
      });
  }

  handlePrev() {
    this.handlePaginate(-1);
  }

  handleNext() {
    this.handlePaginate(1);
  }

  handlePaginate(dir) {
    const { offset, limit } = this.state;
    const newOffset = (limit * dir) + offset;
    MainStore.offset = newOffset;
    this.getPlayLists();
  }

  listing() {
    const { playlists } = this.state;
    // const shuffe = el => el.sort(() => (0.5 - Math.random()));
    // return shuffe(playlists)
    return playlists
      .filter((e, i) => i < 8)
      .map(playlist => <Playlist playlist={playlist} key={playlist.uri} />);
  }

  preload() {
    const {
      playlists,
      total,
      limit,
      offset,
    } = this.state;
    if (!playlists) {
      return (
        <div className="list_spinner">
          <SpIcon icon="bars" />
        </div>
      );
    }
    if (playlists.length === 0) {
      return <div className="list__404">Not found</div>;
    }
    const next = total > limit && (offset + limit) < total;
    const prev = total > limit && offset >= limit;
    return (
      <div className="list__block">
        <div className="list__block__nav list__block__nav--prev">
          <SpIcon icon="arrow" disabled={!prev} onClick={this.handlePrev} />
        </div>
        <div className="list__block__playlists">
          {this.listing()}
        </div>
        <div className="list__block__nav list__block__nav--next">
          <SpIcon icon="arrow" disabled={!next} onClick={this.handleNext} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="list">{this.preload()}</div>
    );
  }
}
