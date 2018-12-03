import React from 'react';
import Head from 'next/head';
import Startup from './components/Startup';
import Main from './components/Main';
import indexStore from './index.store';
import SpotifyService from '../services/spotify.service';

import './style.sass';


export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = indexStore.getState();
  }

  componentDidMount() {
    indexStore.on('change', () => { this.setState(indexStore.getState()); });
    window.addEventListener('message', this.checkLogin, false);

    if (window.location.hash.indexOf('access_token') > -1) {
      const accessToken = this.getHashParams().access_token;
      SpotifyService
        .getMe(accessToken)
        .then((result) => {
          if (result.data) {
            window.localStorage.setItem('accessToken', accessToken);
            window.opener.postMessage({ success: true, me: result.data });
            window.close();
          }
        });
    }
  }

  /* eslint-disable */
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  /* eslint-enable */

  checkLogin(event) {
    if (event.data.success) {
      indexStore.spotifyStatus = 'CONNECTED';
      indexStore.me = event.data.me;
    }
  }

  render() {
    const { spotifyStatus } = this.state;
    return (
      <div className="app">
        <Head>
          <title>Spotifood</title>
          <link rel="shortcut icon" href="static/logo.png" />
          <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Head>
        <div className="app__bg" />
        {spotifyStatus === 'CONNECTED' ? <Main /> : null}
        <Startup />
      </div>
    );
  }
}
