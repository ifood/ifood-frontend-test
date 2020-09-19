import React, { useState } from 'react';

import { FeaturedPlaylistProvider } from '../../hooks/featuredPlaylists';

import PlaylistsFilters from './PlaylistsFilters';

import { Container } from './styles';

const Home = () => {
  const [mobileOpenDrawer, setMobileOpenDrawer] = useState(false);

  return (
    <FeaturedPlaylistProvider>
      <Container>
        <PlaylistsFilters
          mobileOpen={mobileOpenDrawer}
          setMobileOpen={setMobileOpenDrawer}
        />
      </Container>
    </FeaturedPlaylistProvider>
  );
};

export default Home;
