import React from 'react';
import Container from '@material-ui/core/Container';
import { FeaturedPlaylists } from './components/FeaturedPlaylists/FeaturedPlaylists';
import { Header } from './components/Header/Header';

export const AppAuthorized: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" disableGutters>
        <FeaturedPlaylists />
      </Container>
    </>
  );
};
