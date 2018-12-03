import React from 'react';
import './style.sass';
import LogoSpotifood from '../../../components/LogoSpotifood';
import SpButton from '../../../components/SpButton';
import IndexStore from '../../index.store';
import SpotifyService from '../../../services/spotify.service';


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = IndexStore.getState();
    this.connectClick = this.connectClick.bind(this);
  }

  componentDidMount() {
    IndexStore.on('change', () => {
      this.setState(IndexStore.getState());
    });
  }

  connectClick() {
    IndexStore.spotifyStatus = 'CONNECTING';
    SpotifyService.connect();
  }

  render() {
    const className = ['startup'];
    const { spotifyStatus } = this.state;
    className.push(spotifyStatus === 'CONNECTED' ? 'startup--hidden' : 'startup--show');
    return (
      <div className={className.join(' ')}>
        <div className="startup__div">
          <LogoSpotifood />
          <SpButton text="Connect" size="lg" onClick={this.connectClick} />
        </div>
      </div>
    );
  }
}
