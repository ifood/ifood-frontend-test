import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from 'components/header'
import Playlist from 'components/playlist'
import Filter from 'components/filter'

import { Container } from './styles'

import { getPlaylistRequest } from 'states/modules/playlist'
import { getFilterRequest } from 'states/modules/filter'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaylistRequest())
    dispatch(getFilterRequest())
  }, [dispatch])

  return (
    <Container>
      <Header />
      <Filter />
      <Playlist />
    </Container>
  )
}

export default Home
