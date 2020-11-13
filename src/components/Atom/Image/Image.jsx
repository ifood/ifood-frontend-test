import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'
import { ImageContainer } from './styles'

const Image = ({ imgSrc, alt }) => {
  const [hasImgError, setHasImgError] = useState(false)

  const handleImageError = () => {
    setHasImgError(true)
  }

  return (
    <ImageContainer>
      {hasImgError || !imgSrc ? (
        <InsertPhotoIcon className="bg-icon" />
      ) : (
        <img
          className="card__image"
          src={imgSrc}
          onError={handleImageError}
          alt={alt}
        />
      )}
    </ImageContainer>
  )
}

Image.propTypes = {
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
}

export default Image
