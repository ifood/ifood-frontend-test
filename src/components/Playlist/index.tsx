import React, { memo, useState } from 'react';

import { PlaylistItem } from '../../services/spotify';

import {
  Container,
  Image,
  Info,
  InfoText,
  Name,
  Description,
} from './styles';

const Playlist: React.FC<PlaylistItem> = (props) => {
  const {
    name,
    description,
    images,
    external_urls,
  } = props;

  const [imageLoaded, setImageLoaded] = useState(false);

  const [image] = images;
  const { spotify } = external_urls;

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <Container href={spotify} target="_blank" loaded={imageLoaded}>
      <Image src={image?.url} alt={name} onLoad={handleImageLoad} loaded={imageLoaded} />
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
