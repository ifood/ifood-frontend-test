import React, { memo } from 'react';

import LogoImage from './styles';

import spotifoodBlackImage from '../../assets/images/spotifood-black.svg';
import spotifoodWhiteImage from '../../assets/images/spotifood-white.svg';
import spotifoodRedImage from '../../assets/images/spotifood-red.svg';

interface LogoProps {
  width: string;
  color?: 'black' | 'white' | 'red';
}

const Logo: React.FC<LogoProps> = ({ width, color }) => {
  const getImage = () => {
    switch (color) {
      case 'black':
        return spotifoodBlackImage;
      case 'red':
        return spotifoodRedImage;
      default:
        return spotifoodWhiteImage;
    }
  };

  return (
    <LogoImage width={width} src={getImage()} alt="Spotifood logo" />
  );
};

export default memo(Logo);
