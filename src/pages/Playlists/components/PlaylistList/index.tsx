import React, { memo } from "react";
import { Playlist } from "../../../../interfaces/Playlist";
import {
  PlaylistCard,
  PlaylistCardDescription,
  PlaylistCardImage
} from "./styles";

type Props = {
  playlists: Playlist[];
}

const PlaylistList: React.FC<Props> = ({ playlists }) => {

  const builderPlaylists = () => {
    return playlists.map((playlist, index) => {
      const { images, name } = playlist;
      const { url } = images[0];

      return (
        <PlaylistCard
          key={ index }
        >
          <PlaylistCardImage src={ url }/>
          <PlaylistCardDescription>
            { name }
          </PlaylistCardDescription>
        </PlaylistCard>
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
