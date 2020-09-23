import React from 'react'

import { LoadingContainer, LoaderImage } from './styles'

import loader from '~/assets/icons/loader.svg'

export default function Loading({ width, height }) {
  return (
    <LoadingContainer>
      <LoaderImage src={loader} width={width} heigth={height} />
    </LoadingContainer>
  )
}
