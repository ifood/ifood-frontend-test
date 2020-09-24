import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderLogo>
        <h3>SPOTIFOOD</h3>
      </S.HeaderLogo>
      <S.HeaderTitle>
        <h1>Find your next PLAYLIST</h1>
      </S.HeaderTitle>
    </S.Header>
  );
};

export default Header;
