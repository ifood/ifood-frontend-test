import React from "react";

export default function PlaylistCard({ playlist }) {
  const { images, collaborative, public } = playlist;
  return (
    <div
      tabindex="0"
      role="button"
      className="playlist-card"
      aria-label={`Playlist named ${playlist.name}`}
    >
      <div className="playlist-card__dark-cover" />
      <img className="playlist-card__img" src={images[0].url}></img>
    </div>
  );
}
