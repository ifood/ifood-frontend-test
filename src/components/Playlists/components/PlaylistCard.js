/*eslint-disable*/
import React from 'react';
import { Card, Img, TextArea } from '../styles/PlaylistsStyles';
import PropTypes from 'prop-types';

export default function PlaylistCard({ data }) {
  return (
    <Card
      aria-label={`spotifood-playlists-list-card-${data.name}`}
      key={data.id}
    >
      <Img
        aria-label={`spotifood-playlists-list-card-${data.name}-img`}
        alt={`spotifood-${data.name}-img`}
        src={data.images[0]?.url}
      />
      <TextArea
        aria-label={`spotifood-playlists-list-card-${data.name}-text-area`}
      >
        <span aria-label={`spotifood-playlists-list-card-${data.name}-name`}>
          {data.name}
        </span>
        <span
          aria-label={`spotifood-playlists-list-card-${data.name}-description`}
        >
          {data.description}
        </span>
      </TextArea>
    </Card>
  );
}

PlaylistCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.any).isRequired,
    description: PropTypes.string.isRequired,
  }),
};
