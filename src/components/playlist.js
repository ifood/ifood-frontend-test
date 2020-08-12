/**
 * IMPORTS
 */
import React from 'react';


/**
 * STYLES
 */
import './styles/playlist.css'


/**
 * CODE
 */
function Playlist (props) {
    const data = props.playlist;

    // function to open playlist
    function openPlaylist() {
        // open playlist URL in new window
        window.open(data.external_urls.spotify);
    }

    return (
        <div className="playlist" onClick={openPlaylist}>
            <p className="p">PLAYLIST</p>
            <img alt="img" height="120" width="120" src={data.images[0].url}></img>
            <h1 className="title">{data.name}</h1>
            <p className="desc">{data.description}</p>
        </div>
    )
}

/**
 * EXPORTS
 */
export {Playlist};
