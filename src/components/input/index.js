import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Input ({ props }) {
  return (
    <S.Field>
      <S.CustomInput {...props}/>
    </S.Field>
  )
}

Input.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired
  })
}
