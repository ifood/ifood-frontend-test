import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from 'components/header'
import Playlist from 'components/playlist'

import { Container } from './styles'

import { getPlaylistRequest } from 'states/modules/playlist'
import { getFilterRequest } from 'states/modules/filter'
import { refreshTokenRequest } from 'states/modules/session'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaylistRequest({}))
    dispatch(getFilterRequest())
  }, [dispatch])

  const refreshToken = () => {
    dispatch(refreshTokenRequest())
  }

  return (
    <Container>
      <Header />
      <button onClick={refreshToken}>Refresh Token</button>
      <Playlist />
    </Container>
  )
}

export default Home
