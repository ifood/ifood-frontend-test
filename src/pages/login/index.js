import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setToken } from 'states/modules/session'

import LoadingIcon from 'assets/images/loading.svg'

import { useQueryString } from 'hooks'

import { Container, Spinner } from './styles'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const {
    access_token: accessToken,
    refresh_token: refreshToken,
  } = useQueryString()

  useEffect(() => {
    if (accessToken) {
      dispatch(setToken({ token: accessToken, refreshToken }))
      history.push('/')
    } else {
      window.location.replace(
        `${process.env.REACT_APP_SPOTIFY_AUTH_URL}/login`,
        '_self'
      )
    }
  }, [dispatch, history, accessToken, refreshToken])

  return (
    <Container>
      <Spinner src={LoadingIcon} alt='loading' />
    </Container>
  )
}

export default Login
