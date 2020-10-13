import React from 'react';
import * as S from './styles';
import spotifood from './../../assets/spotifood.png';

const Navbar = () => (
  <S.Navbar>
    <img src={spotifood} alt='spotifood icon' />
  </S.Navbar>
);

export default Navbar;