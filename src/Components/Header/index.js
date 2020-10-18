import React from 'react'

import Filter from './Filter'
import Logo from './Logo'

import { Container } from './styles'

export default function Index(){
    return(
        <Container>
            <Logo/>
            <Filter/>
        </Container>
    )
}