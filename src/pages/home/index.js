import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from 'components/header'
import Playlist from 'components/playlist'
import Filter from 'components/filter'

import { getPlaylistRequest } from 'states/modules/playlist'
import { getFilterRequest } from 'states/modules/filter'

import { useInterval } from 'hooks'

import { refreshDelay } from 'constant'

import { Container } from './styles'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaylistRequest())
    dispatch(getFilterRequest())
  }, [dispatch])

  const refetchPlaylist = () => {
    dispatch(getPlaylistRequest())
  }

  useInterval(refetchPlaylist, refreshDelay)

  return (
    <Container>
      <Header />
      <Filter />
      <Playlist />
    </Container>
  )
}

export default Home
