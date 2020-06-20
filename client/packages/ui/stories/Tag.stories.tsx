import React from 'react'
import { Tag } from '../src'

export default { title: 'Tag' }

export const standard = () => (
  <Tag
    value="tag"
    onClick={(value: string) => console.log(`Picked ${value}`)}
  >
    Tag
  </Tag>
)

export const active = () => (
  <Tag
    hoverPalette={{ primary: "#ea1d2c", secondary: "#fff" }}
    value="tag"
    active
    onClick={(value: string) => console.log(`Picked ${value}`)}
  >
    Tag
  </Tag>
)
