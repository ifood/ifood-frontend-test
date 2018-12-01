import React from 'react';
import "./style.sass";
import store from '../../store';
// import SpotifyService from '../../../services/spotify.service';


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    store.on('change', state => this.setState(store.getState()));
  }

  render() {
    const className = ['main'];
    className.push(this.state.spotifyStatus === 'CONNECTED' ? 'main--show' : 'main--hidden');
    return <div className={className.join(' ')}>
      <h1>Connected</h1>
    </div>;
  }
}
