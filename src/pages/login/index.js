import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setToken } from 'states/modules/user'

import { useQueryString } from 'hooks'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { access_token: accessToken } = useQueryString()

  useEffect(() => {
    if (accessToken) {
      dispatch(setToken({ token: accessToken }))
      history.push('/')
    }
  }, [dispatch, history, accessToken])

  return <h1>Login</h1>
}

export default Login
