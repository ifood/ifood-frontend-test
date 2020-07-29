import { useState } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from '../assets/styles/default-style'

const Input = ({ id, text }) => {
  const [value, setValue] = useState('')

  return (
    <InputStyle containValue={!!value}>
      <input
        onChange={(event) => setValue(event.target.value)}
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
  margin-bottom: 50px;
  width: 100%;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid var(--input-color);
    color: white;
    font-size: 1.75rem;
    height: 100%;
    position: relative;
    outline: none;
    width: 100%;
    z-index: 1;
  }

  label {
    color: var(--input-color);
    font-family: 'Kanit', sans-serif;
    position: absolute;
    font-size: 2.25rem;
    top: -15px;
    transition: all 0.3s ease-in-out;
    left: 0;
    z-index: 0;

    @media (min-width: ${mediaQueries.mobile.max}px) {
      font-size: 3rem;
      top: -30px;
    }
  }

  input:focus + label {
    color: white;
    font-size: 1.75rem;
    top: -40px;
  }

  ${({ containValue }) => (containValue ? ContainValueStyle : '')}
`

Input.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  text: string.isRequired
}

export default Input
