/**
 *
 * Select
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { SelectWrapper } from './styles'

function Select(props) {
  const { options } = props

  return (
    <SelectWrapper>
      <select>
        <option value="">
          Selecione uma opção
        </option>
        {options.map((option) => (
          <option
            key={option.name}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </SelectWrapper>
  )
}

Select.defaultProps = {
  options: [],
}

Select.propTypes = {
  options: PropTypes.array,
}

export default Select
