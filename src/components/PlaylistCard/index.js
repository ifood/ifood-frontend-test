import React from "react";
import { Link } from "react-router-dom";
import { BsFillLockFill, BsFillPeopleFill } from "react-icons/bs";

export default function PlaylistCard({ playlist }) {
  const { images, collaborative, public: isPublic, name, id } = playlist;
  return (
    <Link
      tabindex="0"
      className="playlist-card"
      aria-label={`Playlist named ${name}`}
      to={`/playlist/${id}`}
    >
      {isPublic === false && (
        <BsFillLockFill className="playlist-card__private-icon" />
      )}
      {collaborative && (
        <BsFillPeopleFill className="playlist-card__collab-icon" />
      )}
      <div className="playlist-card__dark-cover" />
      <img
        alt={name}
        className="playlist-card__img"
        src={images[0] ? images[0].url : ""}
      ></img>
    </Link>
  );
}
