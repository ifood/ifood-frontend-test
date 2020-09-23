/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const token = localStorage.getItem('token')

  if (!token && isPrivate) {
    window.location.replace(
      `${process.env.REACT_APP_SPOTIFY_AUTH_URL}/login`,
      '_self'
    )
  }

  if (token && !isPrivate) {
    return <Redirect to='/' />
  }

  return <Route {...rest} component={Component} />
}
