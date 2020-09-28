import React, { memo } from "react";
import { Playlist } from "../../../../interfaces/Playlist";
import PlaylistCard from "../PlaylistCard";

type Props = {
  playlists: Playlist[];
}

const PlaylistList: React.FC<Props> = ({ playlists }) => {

  const builderPlaylists = () => {
    return playlists.map((playlist, index) => {
      const { images, name } = playlist;
      const { url: imageUrl } = images[0];

      return (
        <PlaylistCard
          name={ name }
          key={ index }
          imageUrl={ imageUrl }
        />
      )
    });
  }

  return (
    <>
      { builderPlaylists() }
    </>
  );
}

export default memo(PlaylistList);
