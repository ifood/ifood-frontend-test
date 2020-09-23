import React from 'react'

const Select = ({ name, label, options, ...rest }) => {
  return (
    <select name={name} selected className="form-control" {...rest}>
      <option value={name}>{label}</option>

      {options.map((option) => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
