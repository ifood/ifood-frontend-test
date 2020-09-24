import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { limitsFactory } from 'utils'

import { getPlaylistRequest } from 'states/modules/playlist'
import { setFilter } from 'states/modules/filter'

const Select = ({ label, options, onChange, selected }) => (
  <>
    <span>{label}</span>
    <select onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option} selected={option === selected}>
          {option}
        </option>
      ))}
    </select>
  </>
)

Select.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.number,
  options: PropTypes.array,
  onChange: PropTypes.func,
}

Select.defaultProps = {
  label: '',
  options: [],
  onChange: () => null,
  selected: 20,
}

const SelectProvider = ({ id }) => {
  const dispatch = useDispatch()

  const { filters, currentFilters } = useSelector(({ filter }) => filter)

  const renderFilter = filters.find((filter) => filter.id === id)

  const options = limitsFactory(renderFilter.validation.max)

  const handleChange = async (e) => {
    const { value } = e.target

    await dispatch(setFilter({ limit: value }))

    await dispatch(getPlaylistRequest())
  }

  return (
    <Select
      label={renderFilter.name}
      options={options}
      onChange={handleChange}
      selected={currentFilters[id]}
    />
  )
}

SelectProvider.propTypes = {
  id: PropTypes.string,
}

SelectProvider.defaultProps = {
  id: '',
}

export { Select }

export default SelectProvider
