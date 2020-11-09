import React from "react";
import { BsFillLockFill, BsFillPeopleFill } from "react-icons/bs";

export default function PlaylistCard({ playlist }) {
  const { images, collaborative, public: isPublic } = playlist;
  return (
    <div
      tabindex="0"
      role="button"
      className="playlist-card"
      aria-label={`Playlist named ${playlist.name}`}
    >
      {isPublic === false && (
        <BsFillLockFill className="playlist-card__private-icon" />
      )}
      {collaborative && (
        <BsFillPeopleFill className="playlist-card__collab-icon" />
      )}
      <div className="playlist-card__dark-cover" />
      <img className="playlist-card__img" src={images[0].url}></img>
    </div>
  );
}
