import React from 'react'
import { useSelector } from 'react-redux'

import Filter from 'components/filter'
import Title from 'components/title'

import { Container } from './styles'

const SideBar = () => {
  const { hide } = useSelector(({ filter }) => filter)

  return (
    <Container hide={hide}>
      <Title />
      <Filter />
    </Container>
  )
}
export default SideBar
