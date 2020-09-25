import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Playlist from 'components/playlist'
import Sidebar from 'components/sidebar'
import Search from 'components/search'

import { getPlaylistRequest } from 'states/modules/playlist'
import { getFilterRequest } from 'states/modules/filter'

import { useInterval } from 'hooks'

import { refreshDelay } from 'constant'

import { Container, Wrapper } from './styles'

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
      <Sidebar />
      <Wrapper>
        <Search />
        <Playlist />
      </Wrapper>
    </Container>
  )
}

export default Home
