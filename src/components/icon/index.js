import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

function Icon ({ name, className }) {
  return (
    <S.Svg
      className={className}
      data-testid='svg'>
      <use xlinkHref={`#${name}`} />
    </S.Svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

Icon.defaultProps = {
  className: ''
}

export default Icon
