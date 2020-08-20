/**
 *
 * Loader
 *
 */

import React from 'react'

import LoaderGif from './loader.gif'
import { LoaderWrapper } from './styles'

function Loader() {
  return (
    <LoaderWrapper>
      <img src={LoaderGif} alt="Loading..." />
    </LoaderWrapper>
  )
}

export default Loader
