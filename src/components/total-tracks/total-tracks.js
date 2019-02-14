import React, { Component } from 'react';

// Inline Styles
let defaultStyle = {
    color: '#000',
    fontFamily: 'Papyrus'
  };

let totalTracksStyle = {
    ...defaultStyle,
    width: "40%",
    display: 'inline-block',
    marginBottom: '20px',
    fontSize: '20px',
    lineHeight: '30px'
  };

// Component that counts how many tracks has in all playlists being displayed
class TotalTracks extends Component {
    render() {
      let totalTracks = 0;
      this.props.playlists.forEach(playlist => {
        totalTracks = totalTracks + parseInt(playlist.numberOfTracks, 10);
      });

      let isTooLow = totalTracks < 100;
      let tracksCounterStyle = {
        ...totalTracksStyle,
        color: isTooLow ? 'red' : 'black',
        fontWeight: isTooLow ? 'bold' : 'normal'
      }
  
      return (
        <div style={tracksCounterStyle}>
          <h2>Tracks of all Playlists: {totalTracks}</h2>
        </div>
      );
    }
  }

  export default TotalTracks;