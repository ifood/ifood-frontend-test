import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from 'components/header'

import { getPlaylistRequest } from 'states/modules/playlist'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaylistRequest())
  }, [dispatch])

  return <Header />
}

export default Home
