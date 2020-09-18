import React, { useState } from 'react';

import PlaylistsFilters from './PlaylistsFilters';

import { Container } from './styles';

const Home = () => {
  const [mobileOpenDrawer, setMobileOpenDrawer] = useState(false);

  return (
    <Container>
      <PlaylistsFilters
        mobileOpen={mobileOpenDrawer}
        setMobileOpen={setMobileOpenDrawer}
      />
    </Container>
  );
};

export default Home;
