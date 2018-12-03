import './style.sass';
import React from 'react';
import SpIcon from '../../../../../components/SpIcon';
import LogoSpotifood from '../../../../../components/LogoSpotifood';
import IndexStore from '../../../../index.store';
import SpotifyService from '../../../../../services/spotify.service';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuit = this.handleQuit.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleQuit() {
    IndexStore.spotifyStatus = 'DISCONNECTED';
    SpotifyService.logout();
  }

  handleFilter() {
    IndexStore.filterStatus = true;
  }

  render() {
    const { me } = IndexStore;
    const thumb = me && me.images && me.images[0] ? me.images[0].url : '';
    const rStyle = thumb ? { backgroundImage: `url(${thumb})` } : {};
    return (
      <div className="header">
        <div className="header__left"><SpIcon icon="settings" onClick={this.handleFilter} /></div>
        <div className="header__center"><LogoSpotifood /></div>
        <div className="header__right" style={rStyle}>
          <button type="button" onClick={this.handleQuit} onKeyPress={this.handleQuit}>Quit</button>
        </div>
      </div>
    );
  }
}
