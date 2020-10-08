import React from 'react'; //eslint-disable-line

import { Filter } from 'containers/filter';
import { CardList } from 'containers/cardlist';
import { PlaylistStore } from 'store/play-list-store';

export const Playlist: React.FC = () => {
  return (
    <>
      <h1>Escute sua playlist favorita enquanto aguarda seu pedido.</h1>
      <PlaylistStore>
        <Filter />
        <CardList />
      </PlaylistStore>
    </>
  );
};
