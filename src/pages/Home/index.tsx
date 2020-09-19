import React, { useState } from 'react';

import { FeaturedPlaylistProvider } from '../../hooks/featuredPlaylists';

import PlaylistsFilters from './PlaylistsFilters';
import PlaylistList from './PlaylistList';

import { Container, Main } from './styles';

const Home = () => {
  const [mobileOpenDrawer, setMobileOpenDrawer] = useState(false);

  return (
    <FeaturedPlaylistProvider>
      <Container>
        <PlaylistsFilters
          mobileOpen={mobileOpenDrawer}
          setMobileOpen={setMobileOpenDrawer}
        />
        <Main style={{ flex: 1 }}>
          <PlaylistList />
        </Main>
      </Container>
    </FeaturedPlaylistProvider>
  );
};

export default Home;
