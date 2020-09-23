import React from 'react'

import { Container, Title, Search } from './styles'

const Header = () => (
  <Container>
    <Title>Spotifood</Title>
    <Search>
      <input placeholder='Search' />
    </Search>
    <div />
  </Container>
)

export default Header
