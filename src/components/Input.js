import { useState, useEffect } from 'react'
import { func, string } from 'prop-types'

const Input = ({ id, onChange, text }) => {
  const [value, setValue] = useState()

  useEffect(() => {
    if (value) {
      onChange(id, value)
    }
  }, [id, onChange, value])

  return (
    <div>
      <input
        onChange={(event) => setValue(event.target.value)}
        id={id}
        type="text"
        name={id}
        value={value}
      />
      <label>{text}</label>
    </div>
  )
}

Input.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  text: string.isRequired
}

export default Input
