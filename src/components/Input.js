import { useState } from 'react'
import { func, string, object } from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../assets/styles/default-style'
import { ID_SEARCH } from '../constants/components'

const Input = ({ id, onChange, text, validation }) => {
  const [value, setValue] = useState('')

  return (
    <InputStyle 
      className={`${id !== ID_SEARCH ? 'wrapper-filter-input wrapper-filter-column' : ''}`}
      containValue={Boolean(value)}
      inputType={id}
    >
      <input
        className={`${id !== ID_SEARCH ? 'filter-input' : ''}`}
        onChange={(event) => {
          onChange(id, event.target.value)
          setValue(event.target.value)
        }}
        id={id}
        type={validation && validation.primitiveType === "INTEGER" ? "number" : "text"}
        name={id}
        value={value}
      />
      <label id="label-input">{text}</label>
    </InputStyle>
  )
}

const ContainValueSearchStyle = `
  input {
    border-color: white;
  }

  label {
    color: white;
    top: -40px;
    font-size: 1.75rem;
  }
`

const SearchInputStyle = `
  --input-color: rgba(255, 255, 255, 0.5);

  height: 50px;
  position: relative;
  margin-bottom: 30px;
  width: 100%;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid var(--input-color);
    color: white;
    font-size: 1.25rem;
    height: 100%;
    position: relative;
    outline: none;
    transition: all .3s ease-in-out;
    width: 100%;
    z-index: 1;

    @media (min-width: ${mediaQueries.mobile.max}px) {
      font-size: 1.75rem;
    }
  }

  label {
    color: var(--input-color);
    font-family: sans-serif;
    font-weight: bold;
    position: absolute;
    font-size: 2.15rem;
    top: -15px;
    transition: all 0.3s ease-in-out;
    left: 0;
    z-index: 0;

    @media (min-width: ${mediaQueries.mobile.max}px) {
      font-size: 3rem;
      top: -20px;
    }
  }

  input:focus {
    border-color: white;
  }

  input:focus + label {
    color: white;
    font-size: 1.75rem;
    top: -40px;
  }

  @media (min-width: ${mediaQueries.mobile.max}px) {
    margin-bottom: 50px;
  }
`

const ContainValueNumberStyle = `
  #label-input {
    color: white;
    top: -10px;
    z-index: 1;
  }

  input.filter-input {
    border-color: white;
    color: white;
  }
`

const NumberInputStyle = `
  input:focus + label {
    color: white;
    top: -10px;
    z-index: 1;
  }
`

const InputStyle = styled.div`
  ${({inputType}) => inputType === ID_SEARCH ? SearchInputStyle : NumberInputStyle}
  ${({ containValue, inputType }) => {
    if(containValue) {
      if ( inputType === ID_SEARCH ) {
        return ContainValueSearchStyle
      } else if ( inputType !== ID_SEARCH ) {
        return ContainValueNumberStyle
      }
    }

    return ''
  }}
`

Input.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  text: string.isRequired,
  validation: object
}

Input.defaultProps = {
  validation: null
}

export default Input
