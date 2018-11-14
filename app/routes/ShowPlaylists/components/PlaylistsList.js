import React from 'react';
import PropTypes from 'prop-types';
import '../styles/playlistsList.scss';

const PlaylistsList = ({ list, intl }) => {
  if (!list || list.length === 0) {
    return null;
  }

  return (
    <div className="playlist">
      <h3>{intl.formatMessage({ id: 'playlists' })}</h3>
      {list.map((item) => (
        <div key={item.id} className="playlistItem">
          <div><span>{intl.formatMessage({ id: 'name' })}</span></div>
          <div><span>{item.name}</span></div>
        </div>
      ))}
    </div>
  );
};

PlaylistsList.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  list: PropTypes.array,
};

export default PlaylistsList;
