import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Container } from './styles.js'

export default function FeaturedPlaylist({logged, playlists}){

    return(
        <Container>
            {logged ?
                <Carousel>
                    {playlists.map(item =>
                        <div key={item.id}>
                            <img src={item.images.url} alt="" width={250} height={250}/>
                            <p>{item.name}</p>
                        </div>
                    )}
                </Carousel>
                : <a href="http://localhost:8888">Login com o spotify</a>
            }
        </Container>
    )
}