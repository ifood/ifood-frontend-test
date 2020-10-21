import React from 'react'

import logo from '../../../Assets/logo-spotifood.png'
import { Container, Image } from './styles.js'

export default function Logo(){
    return(
        <Container>
            <Image src={logo}/>
        </Container>
    )
}