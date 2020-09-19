import React, { memo } from 'react';

import { PlaylistItem } from '../../services/spotify';

import {
  Container,
  Image,
  Info,
  InfoText,
  Name,
  Description,
} from './styles';

const Playlist: React.FC<PlaylistItem> = ({
  name, description, images, external_urls,
}) => {
  const [image] = images;
  const { spotify } = external_urls;

  return (
    <Container href={spotify} target="_blank">
      <Image src={image?.url} alt={name} />
      <Info>
        <InfoText>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </InfoText>
      </Info>
    </Container>
  );
};

export default memo(Playlist);
