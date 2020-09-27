import React from 'react';
import PropTypes from 'prop-types';

import { PlaylistWrapper } from './styles';

const Playlist = ({ data, onClick }) => (
  <PlaylistWrapper onClick={onClick}>
    <div
      className="Playlist__Image"
      style={{
        backgroundImage: `url(${data.images.length ? data.images[0].url : ''})`,
      }}
    />
    <p className="Playlist__Name">{data.name}</p>
    <p className="Playlist__Owner">
      {data.owner.display_name ? data.owner.display_name : data.owner.id}
    </p>
  </PlaylistWrapper>
);

Playlist.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onClick: PropTypes.func,
};

Playlist.defaultProps = {
  onClick: null,
};

export default Playlist;
