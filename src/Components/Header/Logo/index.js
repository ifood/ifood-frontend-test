import React from 'react'
import { FaSpotify } from 'react-icons/fa'

import logo from '../../../Assets/logo-spotifood.png'
import { Container, Image } from './styles.js'

export default function Logo(){
    return(
        <Container>
            <FaSpotify height="50px" width="50px"/>
            <Image src={logo}/>
        </Container>
    )
}