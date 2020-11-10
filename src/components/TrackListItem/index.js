import React from "react";

export default function TrackListItem({ track }) {
  return (
    <div className="track-list-item">
      {track.name} - {track.album.name}
    </div>
  );
}
