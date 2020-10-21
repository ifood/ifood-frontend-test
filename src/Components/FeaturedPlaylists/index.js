import React from 'react'
import Carousel from 'react-elastic-carousel';

import { Container, PlaylistsContainer, Playlist } from './styles.js'

export default function FeaturedPlaylist({logged, playlists}){

    return(
        <Container>
            {logged ?
                <PlaylistsContainer>
                    {playlists.map(item =>
                        <Playlist key={item.id}>
                            <img src={item.images.url} alt="" width={250} height={250}/>
                            <p>{item.name}</p>
                        </Playlist>
                    )}
                </PlaylistsContainer>
                : <a href="http://localhost:8888">Login com o spotify</a>
            }
        </Container>
    )
}