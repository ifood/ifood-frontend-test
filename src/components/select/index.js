import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { limitsFactory, offsetFactory, payloadFactory } from 'utils'

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

  const [options, setOptions] = useState([])

  const { filters, currentFilters } = useSelector(({ filter }) => filter)
  const { total } = useSelector(({ playlist }) => playlist)

  const renderFilter = filters.find((filter) => filter.id === id)

  useEffect(() => {
    if (id === 'limit') {
      const limits = limitsFactory(renderFilter.validation.max)
      setOptions(limits)
    }
  }, [])

  useEffect(() => {
    if (id === 'offset') {
      const totalOffset = Math.ceil(total / currentFilters.limit)
      const offset = offsetFactory(totalOffset)
      setOptions(offset)
    }
  }, [total, currentFilters.limit])

  const handleChange = async (e) => {
    const { value } = e.target

    const payload = payloadFactory(id, value)

    await dispatch(setFilter(payload))

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
