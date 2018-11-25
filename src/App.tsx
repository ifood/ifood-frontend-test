import React, { Component } from 'react';
import SpotifyLogin from 'react-spotify-login';
import settings from './settings';

class App extends Component {
  render() {
    return (
      <div>
        <SpotifyLogin
          clientId={settings.clientId}
          redirectUri={settings.redirectUrl}
          onSuccess={() => {
            console.log('Success');
          }}
          onFailure={() => {
            console.log('Failure');
          }}
        />
      </div>
    );
  }
}

export default App;
