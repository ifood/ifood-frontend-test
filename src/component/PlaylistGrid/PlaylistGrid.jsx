import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Playlist from '../Playlist';
import Info from '../Info';
import Grid from '../Grid';

function itemRenderer(playlist) {
  return <Playlist key={playlist?.id} playlist={playlist} />;
}

function PlaylistGrid({ title, items }) {
  const intl = useIntl();

  const gridTitle =
    title != null ? title : intl.formatMessage({ id: 'featured.playlists' });

  if (items == null || items.length === 0) {
    return (
      <Info
        icon="search"
        title={intl.formatMessage({ id: 'no.playlist' })}
        info={intl.formatMessage({ id: 'choose.filters.message' })}
      />
    );
  }

  return <Grid title={gridTitle} items={items} itemRenderer={itemRenderer} />;
}

PlaylistGrid.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default React.memo(PlaylistGrid);
