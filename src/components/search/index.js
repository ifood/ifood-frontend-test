import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import * as S from './styles'

export default function Search ({ handleChange }) {
  return (
    <S.Container>
      <S.Content>
        <S.Form>
          <FormattedMessage id="search.title">
            {placeholder =>
              <S.Input
                type='text'
                placeholder={placeholder}
                onChange={(e) => handleChange(e.target.value)} />
            }
          </FormattedMessage>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired
}
