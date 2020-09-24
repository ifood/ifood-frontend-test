import React from 'react'

import {
  ManCellMusic,
  WomanDressMusic,
  WomanSweatshirtMusic,
  WomanSweatshirtBlueMusic,
} from '~/assets/images/FoodLovers'

import { Container, Image } from './styles'

export default function FoodLovers() {
  return (
    <Container>
      <Image src={ManCellMusic} className="foodlover-man" />
      <Image src={WomanDressMusic} />
      <Image src={WomanSweatshirtMusic} small />
      <Image src={WomanSweatshirtBlueMusic} />
    </Container>
  )
}
