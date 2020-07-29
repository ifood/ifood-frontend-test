import { useState, useEffect } from 'react'
import { array, func, string } from 'prop-types'
import styled from 'styled-components'

const Select = ({ id, onChange, options, text }) => {
  const [valueSelected, setValueSelected] = useState('')

  useEffect(() => {
    if (valueSelected) {
      onChange(id, valueSelected)
    }
  }, [id, onChange, valueSelected])

  return (
    <SelectStyle
      className="wrapper-filter-input wrapper-filter-select"
      valueSelected={valueSelected}
    >
      {options && options.length ? (
        <>
          <select
            className="filter-input filter-select"
            onChange={(event) => setValueSelected(event.target.value)}
          >
            <option />
            {options.map((option) => (
              <option key={option.value}>{option.name}</option>
            ))}
          </select>
          <label id="label-select">{text}</label>
        </>
      ) : null}
    </SelectStyle>
  )
}

const valueActive = `
  select.filter-select {
    color: white;
  }

  #label-select {
    color: white;
    top: -10px;
    z-index: 1;
  }
`

const SelectStyle = styled.div`
  .filter-select {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus + label {
      color: white;
      top: -10px;
      z-index: 1;
    }
  }

  ${({ valueSelected }) => (valueSelected ? valueActive : '')}
`

Select.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  options: array.isRequired,
  text: string.isRequired
}

export default Select
