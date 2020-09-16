import React from 'react';

import LogoImage from './styles';

import spotifoodImage from '../../assets/images/spotifood.svg';

interface LogoProps {
  width: string;
}

const Logo: React.FC<LogoProps> = ({ width }) => (
  <LogoImage width={width} src={spotifoodImage} alt="Spotifood logo" />
);

export default Logo;
