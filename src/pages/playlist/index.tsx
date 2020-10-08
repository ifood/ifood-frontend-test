import React from 'react'; //eslint-disable-line

import { Image } from 'components/image';
import { Filter } from 'containers/filter';
import { CardList } from 'containers/cardlist';
import { PlaylistStore } from 'store/play-list-store';

import Logo from 'assets/images/spotifood-logo.png';

import * as S from './styles';

export const Playlist: React.FC = () => {
  return (
    <>
      <S.Header>
        <Image src={Logo} alt="Logo marca Spotifood" width="200" />
      </S.Header>

      <S.Title>
        <strong>Escute</strong> sua playlist <span>favorita</span> enquanto aguarda seu pedido.
      </S.Title>
      <PlaylistStore>
        <Filter />
        <CardList />
      </PlaylistStore>
    </>
  );
};
