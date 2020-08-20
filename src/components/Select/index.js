/**
 *
 * Select
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { SelectWrapper } from './styles'

function Select(props) {
  const { id, options, onChange } = props

  const onChangeHandler = (e) => {
    if (onChange) {
      onChange(e, id)
    }
  }

  return (
    <SelectWrapper>
      <select id={id} onChange={onChangeHandler}>
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
  id: PropTypes.string.isRequired,
  options: PropTypes.array,
  onChange: PropTypes.func,
}

export default Select
