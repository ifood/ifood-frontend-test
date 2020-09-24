/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { store } from 'states/store'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().session

  if (!signed && isPrivate) {
    window.location.replace(
      `${process.env.REACT_APP_SPOTIFY_AUTH_URL}/login`,
      '_self'
    )
  }

  if (signed && !isPrivate) {
    return <Redirect to='/' />
  }

  return <Route {...rest} component={Component} />
}
