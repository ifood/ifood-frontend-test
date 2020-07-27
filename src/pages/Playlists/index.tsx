import React from 'react';

import Filters from '../../components/Filters';

import { Container, FilterBox, ListContainer } from './styles';

const Playlists: React.FC = () => {
  return (
    <Container>
      <Filters />
      <ListContainer>
        <h2>Lista</h2>
      </ListContainer>
    </Container>
  );
};

export default Playlists;
