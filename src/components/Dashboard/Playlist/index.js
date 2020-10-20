import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Playlist({ item }) {
  return (
    <Container href={item.external_urls.spotify} target="_blank">
      <div className="playlist-content">
        <div className="playlist-cover">
          <img src={item.images[0].url} alt={item.name} />
        </div>
        <div className="playlist-info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </Container>
  );
}

Playlist.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Playlist;
