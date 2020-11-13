import React from 'react'
import PropTypes from 'prop-types'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Image } from '../../Atom/Image'
import { StyledCard } from './styles'

const Card = ({ link, imgSrc, name }) => {
  return (
    <StyledCard>
      <CardContent
        className="card__content"
        component="a"
        target="_blank"
        href={link}
      >
        <Box className="card__image">
          <Image imgSrc={imgSrc} alt="imagem do album" />
        </Box>
        <Typography className="card__title" align="left" color="textPrimary">
          {name}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

Card.propTypes = {
  link: PropTypes.string,
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default Card
