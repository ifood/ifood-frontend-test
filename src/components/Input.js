import { useState } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../assets/styles/default-style'

const Input = ({ id, onChange, text }) => {
  const [value, setValue] = useState('')

  return (
    <InputStyle containValue={!!value}>
      <input
        onChange={(event) => {
          onChange(event.target.value)
          setValue(event.target.value)
        }}
        id={id}
        type="text"
        name={id}
        value={value}
      />
      <label>{text}</label>
    </InputStyle>
  )
}

const ContainValueStyle = `
  input {
    border-color: white;
  }

  label {
    color: white;
    top: -40px;
    font-size: 1.75rem;
  }
`

const InputStyle = styled.div`
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
      top: -30px;
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

  ${({ containValue }) => (containValue ? ContainValueStyle : '')}

  @media (min-width: ${mediaQueries.mobile.max}px) {
    margin-bottom: 50px;
  }
`

Input.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  text: string.isRequired
}

export default Input
