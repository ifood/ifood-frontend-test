import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Search ({ handleChange }) {
  return (
    <S.Container>
      <S.Content>
        <S.Form>
          <S.Input
            type='text'
            placeholder='Search'
            onChange={(e) => handleChange(e.target.value)} />
        </S.Form>
      </S.Content>
    </S.Container>
  )
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired
}
