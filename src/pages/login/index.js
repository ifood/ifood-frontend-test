import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setToken } from 'states/modules/user'

import { useQueryString } from 'hooks'

const Login = () => {
  const dispatch = useDispatch()
  const { access_token: accessToken } = useQueryString()

  // console.log(accessToken)

  useEffect(() => {
    if (accessToken) {
      dispatch(setToken({ token: accessToken })) // TODO: get token from queryString URL
    }
  }, [dispatch, accessToken])

  return <h1>Login</h1>
}

export default Login
