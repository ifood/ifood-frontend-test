import React, { memo } from 'react';
import {
  PlaylistCardContainer,
  PlaylistCardDescription,
  PlaylistCardImage
} from "./styles";

type Props = {
  imageUrl: string;
  name: string;
  playlistUrl: string;
}

const PlaylistCard = ({ imageUrl, name, playlistUrl }: Props) => {

  const openPlaylist = () => {
    window.open(playlistUrl, '_blank');
  };

  return  (
    <PlaylistCardContainer onClick={openPlaylist}
    >
      <PlaylistCardImage src={ imageUrl }/>
      <PlaylistCardDescription>
        { name }
      </PlaylistCardDescription>
    </PlaylistCardContainer>
  );
}

export default memo(PlaylistCard);
