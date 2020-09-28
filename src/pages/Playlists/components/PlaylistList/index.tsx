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
    console.log(playlists);
    return playlists.map((playlist, index) => {
      const { images, description } = playlist;
      const { url } = images[0];

      return (
        <PlaylistCard
          key={ index }
        >
          <PlaylistCardImage src={ url }/>
          {/*<PlaylistCardDescription dangerouslySetInnerHTML={{ __html: description}}>*/}
          {/*</PlaylistCardDescription>*/}
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
