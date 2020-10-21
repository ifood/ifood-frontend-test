import React, {useState} from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import { Container, SliderContainer, PlaylistsContainer, Playlist, PlaylistImage, PlaylistName } from './styles.js'

export default function FeaturedPlaylist({loading, logged, playlists, total}){
    const [scrollX, setScrollX] = useState(0)

    function handleLeftArrow(){
        let x = scrollX + Math.round(window.innerWidth/2)
        
        if(x > 0 ){
            x= 45
        }

        setScrollX(x)
    }
    function handleRightArrow(){
        let x = scrollX - Math.round(window.innerWidth/2) //total que quero ir
        let listW = total * 250

        if(window.innerWidth - listW > x){
            x= window.innerWidth - listW + 125
        }

        setScrollX(x)
    }

    return(
        <Container>
            {loading ? "loading..." : logged ? <SliderContainer>
            <MdKeyboardArrowLeft onClick={handleLeftArrow} style={{
                position: "absolute",
                left: "0px",
                color: "red",
                width: "80px",
                height: "80px",
                marginTop: "100px"
            }}/>
                <PlaylistsContainer margin={scrollX}>
                    {playlists.map(item =>
                        <Playlist key={item.id}>
                            <PlaylistImage src="https://image.flaticon.com/icons/png/512/49/49097.png" alt="" width={250} height={250}/>
                            <PlaylistName>{item.name}</PlaylistName>
                        </Playlist>
                    )}
                </PlaylistsContainer>
                <MdKeyboardArrowRight onClick={handleRightArrow} style={{
                    position: "absolute",
                    right: "0px",
                    color: "red",
                    width: "80px",
                    height: "80px",
                    zIndex: 10,
                    marginTop: "-210px"
                }}/>
                </SliderContainer>
                : <a href="http://localhost:8888">Login com o spotify</a>
            }
        </Container>
    )
}