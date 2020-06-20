import React from 'react'
import { CloseIcon } from '../src'

export default { title: 'CloseIcon' }

export const standard = () => (
  <CloseIcon
    color="#666"
    width="20px"
    height="20px"
  />
)

export const bigger = () => (
  <CloseIcon
    color="#666"
    width="40px"
    height="40px"
  />
)

export const withDifferentColor = () => (
  <CloseIcon
    color="#ea1d2c"
    width="40px"
    height="40px"
  />
)