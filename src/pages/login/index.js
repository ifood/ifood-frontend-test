import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setToken } from 'states/modules/user'

const Login = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setToken({ token: 'test' })) // TODO: get token from queryString URL
  }, [dispatch])

  return <h1>Login</h1>
}

export default Login
