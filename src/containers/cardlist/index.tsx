import React, { useContext } from 'react'; //eslint-disable-line

import { Card } from 'components/card';
import { Image } from 'components/image';
import { PlayListContext } from 'store/play-list-store';

import * as S from './styles';

export const CardList: React.FC = () => {
  const {
    state: { playlist, filteredList, emptyFilterList: isFilterEmpty }
  } = useContext(PlayListContext);

  const renderCardList = (list: any) => {
    return (
      <S.Wrapper>
        {list.map((item: any) => (
          <Card key={item.id}>
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

  if (isFilterEmpty) {
    return renderCardList(filteredList);
  }

  if (filteredList.length) {
    return renderCardList(filteredList);
  }

  return renderCardList(playlist);
};
