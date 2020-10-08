import React, { useContext } from 'react'; //eslint-disable-line

import { Card } from 'components/card';
import { Image } from 'components/image';
import { PlayListContext } from 'store/play-list-store';

import * as S from './styles';

export const CardList: React.FC = () => {
  const playlistContext = useContext(PlayListContext);
  const playlist = playlistContext.state.playlist;

  return (
    <S.Wrapper>
      {playlist.map((item: any) => (
        <Card>
          <S.Header>
            <span>{item.name}</span>
          </S.Header>
          <Image src={item.images[0].url} alt={`Imagem do album ${item.name}`} height="298px" />
          <S.Footer>
            <a href={item.external_urls}>Ouça agora</a>
          </S.Footer>
        </Card>
      ))}
    </S.Wrapper>
  );
};
