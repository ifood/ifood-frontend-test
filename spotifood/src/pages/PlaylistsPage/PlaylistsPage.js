import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header/Header';
import { Playlists } from '../../components/Playlists/Playlists';

import { Container } from '@material-ui/core';

const PlaylistsPage = () => {
    useEffect(() => {
        setInterval(() => {
            window.location.reload();
        }, 30000);
    }, []);

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