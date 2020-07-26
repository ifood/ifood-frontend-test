import React from 'react';
import { Box } from '@material-ui/core';

import { Container, FilterBox, ListContainer } from './styles';

const Playlists: React.FC = () => {
  return (
    <Container>
      <FilterBox>
        <h2>Filtros</h2>
      </FilterBox>
      <ListContainer>
        <h2>Lista</h2>
      </ListContainer>
    </Container>
  );
};

export default Playlists;
