import React from 'react'
import { useSelector } from 'react-redux'

import Filter from 'components/filter'
import Title from 'components/title'

import { Container } from './styles'

const SideBar = () => {
  const { hidden } = useSelector(({ filter }) => filter)

  return (
    <Container hidden={hidden}>
      <Title />
      <Filter />
    </Container>
  )
}
export default SideBar
