import React, { forwardRef } from 'react'

import Filter from '../filter'
import Title from 'components/title'

import { Container } from './styles'

const SideBar = () => (
  <Container>
    <Title />
    <Filter />
  </Container>
)

export default forwardRef(SideBar)
