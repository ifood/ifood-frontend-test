import React from 'react'
import { AlertIcon } from '../src'

export default { title: 'AlertIcon' }

export const standard = () => (
  <AlertIcon
    color="#666"
    width="20px"
    height="20px"
  />
)

export const bigger = () => (
  <AlertIcon
    color="#666"
    width="40px"
    height="40px"
  />
)

export const withDifferentColor = () => (
  <AlertIcon
    color="#ea1d2c"
    width="40px"
    height="40px"
  />
)