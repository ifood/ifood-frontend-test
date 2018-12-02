import React from 'react';
import "./style.sass";
import store from '../../store';
import Header from './components/Header';
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
      <div className="main__left">

      </div>
      <div className="main__center">
        <Header />
      </div>
    </div>;
  }
}
