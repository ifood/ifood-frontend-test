import React from 'react'

import Filter from './Filter'
import Logo from './Logo'

import { Container } from './styles'

export default function Index({filters, search, handleSearchChange}){
    return(
        <Container>
            <Logo/>
            <Filter filters={filters} search={search} handleSearchChange={handleSearchChange}/>
        </Container>
    )
}