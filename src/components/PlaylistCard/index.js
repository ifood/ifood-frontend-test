import React from "react";

export default function PlaylistCard({ playlist }) {
  const { images } = playlist;
  return (
    <div className="playlist-card">
      <img className="playlist-card__img" src={images[0].url}></img>
    </div>
  );
}
