import React from 'react';
import { Filter } from 'containers/filter';
import { Playlist } from 'containers/playlist';

import Logo from 'assets/images/spotifood-logo.png';

export const Home: React.FC = () => {
  return (
    <div>
      <header>
        <img src={Logo} alt="Logo marca Spotifood" width="500" />
      </header>
      Home
      <Filter />
      <Playlist />
    </div>
  );
};
