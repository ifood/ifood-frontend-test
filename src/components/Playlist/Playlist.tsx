import React from 'react';
import './Playlist.scss';

interface Playlist {
  name: string,
  amount: number,
  image: string,
  id?: string,
  onClick?: Function,
  className?: string
}

export const Playlist = ({ id, name, amount, image, onClick, className = '' }: Playlist) => (
  <div className={`playlistItem ${className}`}>
    <img
      className="playlistItem__image"
      onClick={() => onClick && onClick({ id, name, amount, image })}
      src={image}
      alt={name}
    />

    <span className="playlistItem__name" onClick={() => onClick && onClick({ id, name, amount, image })}>
      {name}
    </span>

    <span className="playlistItem__amount">
      {amount} {amount > 1 ? 'musics' : 'music'}
    </span>
  </div>
);
