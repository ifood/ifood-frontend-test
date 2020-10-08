import React from 'react';

import { Header } from '../../components/Header/Header';
import { Playlists } from '../../components/Playlists/Playlists';

import { Container } from '@material-ui/core';

const PlaylistsPage = () => {
    return (
        <>
            <Header />
            <Container maxWidth="sm">
                <Playlists />
            </Container>
        </>
    )
}

export default PlaylistsPage;