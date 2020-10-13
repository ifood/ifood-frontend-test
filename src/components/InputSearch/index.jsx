import React from 'react';
import * as S from './styles';
import search from './../../assets/search.svg';

const InputSearch = () => {
  return (
    <S.Search>
      <S.Input
        placeholder='Busque por sua playlist...'
      />
      <S.Icon>
        <img src={search} alt='search icon' />
      </S.Icon>
    </S.Search>
  )
};

export default InputSearch;
