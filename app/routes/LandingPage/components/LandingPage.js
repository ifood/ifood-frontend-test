import React, { Component } from 'react';

class LandingPage extends Component {
  componentDidMount() {
    // For now, lets keep everything hardcoded
    // altough it is not a good practice and it can be a security breach
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=38165eb1c6e3421095c7e615c99d1899&response_type=code&redirect_uri=${encodeURIComponent('http://127.0.0.1:8080/callback')}&state=foo&scope=${encodeURIComponent('playlist-read-private playlist-read-collaborative')}`);
  }

  render() {
    return <span>Wait..</span>
  }
}

export default LandingPage;
