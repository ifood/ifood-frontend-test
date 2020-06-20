import React from 'react'
import { Button } from '../src'

export default { title: 'Button' }

export const standard = () => (
  <Button
    primaryColor="#666"
    secondaryColor="#fff"
  >
    Ok
  </Button>
)

export const withDiffenrentColor = () => (
  <Button
    primaryColor="#ea1d2c"
    secondaryColor="#fff"
  >
    Search
  </Button>
)
