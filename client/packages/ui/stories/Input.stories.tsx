import React from 'react'
import { Input } from '../src'

export default { title: 'Input' }

export const standard = () => (
  <Input placeholder="Type something" value="" onChange={() => console.log()} />
)
