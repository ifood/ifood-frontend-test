import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';

import './Playlist.scss';

interface IPlaylist {
  imageUrl: string;
  name: string;
  spotify: string;
  description: string;
}

const Playlist = ({
  imageUrl,
  name,
  spotify,
  description
}: IPlaylist) => {
  return (
    <div className="playlist">
      <div className="playlist-click">
        <img src={imageUrl} alt={name} className="playlist-image" />
        <div className="playlist-overlay" onClick={() => window.open(spotify, '_blank')}>
          <FiPlayCircle color="#ffffff" />
        </div>
      </div>
      <h3 className="playlist-title">{name}</h3>
      <p className="playlist-description">{description}</p>
    </div>
  )
};

export default Playlist;
