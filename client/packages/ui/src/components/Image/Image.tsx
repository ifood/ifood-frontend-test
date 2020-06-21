import React, { memo, ReactElement } from 'react'
import { StyledImage } from './styles'

export interface ImageProps {
  src: string;
  width: string;
  height: string;
  alt: string;
}

const Image = (props: ImageProps): ReactElement => <StyledImage {...props} loading="lazy" />

export default memo(Image)