import React from 'react';
import "./style.sass";
import LogoSpotifood from '../../../components/LogoSpotifood';
import SpButton from '../../../components/SpButton';
import store from '../../store';
import SpotifyService from '../../../services/spotify.service';


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.connectClick = this.connectClick.bind(this);
  }

  componentDidMount() {
    store.on('change', state => this.setState(store.getState()));
  }

  connectClick(ev) {
    store.spotifyStatus = 'CONNECTING';
    SpotifyService
      .connect()
      .then(() => {
        store.spotifyStatus = 'CONNECTED';
    });
  }

  render() {
    const className = ['startup'];
    className.push(this.state.spotifyStatus === 'CONNECTED' ? 'startup--hidden' : 'startup--show');
    return <div className={className.join(' ')}>
      <div className="startup__div">
        <LogoSpotifood />
        <SpButton text="Connect" size="lg" onClick={this.connectClick} />
      </div>
    </div>;
  }
}
