import React, { useContext } from 'react'; //eslint-disable-line
import { Card } from 'components/card';
import { PlayListContext } from 'store/play-list-store';

import * as S from './styles';

export const CardList: React.FC = () => {
  const playlistContext = useContext(PlayListContext);
  const playlist = playlistContext.state.playlist;

  return (
    <S.Wrapper>
      {playlist.map((item: any) => (
        <Card>
          <span>{item.name}</span>
        </Card>
      ))}
    </S.Wrapper>
  );
};
