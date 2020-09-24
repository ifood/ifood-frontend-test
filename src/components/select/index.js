import React from 'react'

const Select = () => (
  <select>
    <option key='test' value='valor'>
      teste
    </option>
  </select>
)

const SelectProvider = () => {
  return <Select />
}

export { Select }

export default SelectProvider
