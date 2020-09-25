import React from 'react'

import Search from 'components/search'

import { Container, Title } from './styles'

const Header = () => (
  <Container>
    <Title>Spotifood</Title>
    <Search />
  </Container>
)

export default Header
