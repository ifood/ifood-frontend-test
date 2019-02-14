import React, { Component } from 'react';

// Inline Styles
let playCountDefaultStyle = {
    color: '#000',
    fontFamily: 'Papyrus'
  };

let playlistCountStyle = {
    ...playCountDefaultStyle,
    width: "40%",
    display: 'inline-block',
    marginBottom: '20px',
    fontSize: '20px',
    lineHeight: '30px'
  };

// Method to count how many playlists are being displayed
class PlaylistCounter extends Component {
    render() {
      let playlistCounterStyle = playlistCountStyle;
  
      return (
        <div style={playlistCounterStyle}>
          <h2>Number of playlists: <span style={{color: 'blue', fontWeight: 'bold'}}>{this.props.playlists.length}</span></h2>
        </div>
      );
    }
  }

  export default PlaylistCounter;