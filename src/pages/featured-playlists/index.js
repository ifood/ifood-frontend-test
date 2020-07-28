import React from 'react';

import * as S from './styles';
import { CardFeatured, Filtros } from '../../components';

function FeaturedPlaylist() {
  return (
    <S.Main>
      <h1>Featured Playlist</h1>
      <CardFeatured />
      <Filtros />
    </S.Main>
  );
}

export default FeaturedPlaylist
