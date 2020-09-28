import React, { memo } from "react";
import { Playlist } from "../../../../interfaces/Playlist";
import PlaylistCard from "../PlaylistCard";

type Props = {
  playlists: Playlist[];
}

const PlaylistList: React.FC<Props> = ({ playlists }) => {

  const builderPlaylists = () => {
    return playlists.map((playlist, index) => {
      const { images, name, external_urls } = playlist;
      const { url: imageUrl } = images[0];
      const { spotify } = external_urls;

      return (
        <div key={ index }>
          <PlaylistCard
            name={ name }
            imageUrl={ imageUrl }
            playlistUrl={ spotify }
          />
        </div>
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
