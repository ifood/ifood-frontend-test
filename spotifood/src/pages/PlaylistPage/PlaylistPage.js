import React from 'react';

import { Tracks } from '../../components/Tracks/Tracks';
import { Header } from '../../components/Header/Header';

import { Container } from '@material-ui/core';

const PlaylistPage = () => {

    return (
      <>
        <Header />
        <Container maxWidth="lg">
            <Tracks />
        </Container>
      </>
    )
}

export default PlaylistPage;