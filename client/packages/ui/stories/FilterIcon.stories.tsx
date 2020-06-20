import React from 'react'
import { FilterIcon } from '../src'

export default { title: 'FilterIcon' }

export const standard = () => (
  <FilterIcon
    color="#666"
    width="20px"
    height="20px"
  />
)

export const bigger = () => (
  <FilterIcon
    color="#666"
    width="40px"
    height="40px"
  />
)

export const withDifferentColor = () => (
  <FilterIcon
    color="#ea1d2c"
    width="40px"
    height="40px"
  />
)