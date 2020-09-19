import React, { useState } from 'react';

import { FeaturedPlaylistProvider } from '../../hooks/featuredPlaylists';

import PlaylistsFilters from './PlaylistsFilters';
import PlaylistList from './PlaylistList';

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
        <div style={{ marginLeft: '16px' }}>
          <PlaylistList />
        </div>
      </Container>
    </FeaturedPlaylistProvider>
  );
};

export default Home;
