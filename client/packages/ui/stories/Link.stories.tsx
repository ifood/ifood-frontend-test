import React from 'react'
import { Link } from '../src'

export default { title: 'Link' }

export const standard = () => (
  <Link
    palette={{ primary: "#ea1d2c", secondary: "#666" }}
  >
    Go to Somewhere
  </Link>
)
