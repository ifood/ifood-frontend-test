import React, { memo } from 'react';
import {
  PlaylistCardContainer,
  PlaylistCardDescription,
  PlaylistCardImage
} from "./styles";

type Props = {
  key: number;
  imageUrl: string;
  name: string;
}

const PlaylistCard = ({ key, imageUrl, name }: Props) => (
  <PlaylistCardContainer
    key={ key }
  >
    <PlaylistCardImage src={ imageUrl }/>
    <PlaylistCardDescription>
      { name }
    </PlaylistCardDescription>
  </PlaylistCardContainer>
);

export default memo(PlaylistCard);
