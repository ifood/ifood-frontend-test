import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { limitsList, offsetList, payloadFactory } from 'utils'

import { getPlaylistRequest } from 'states/modules/playlist'
import { setFilter } from 'states/modules/filter'

import { Title, Dropdown, Option, Container } from './styles'

const Select = ({ label, options, onChange }) => (
  <Container>
    <Title>{label}</Title>
    <Dropdown onChange={onChange} defaultValue='default'>
      <Option value='default'>{label}</Option>
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Dropdown>
  </Container>
)

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
}

Select.defaultProps = {
  label: '',
  options: [],
  onChange: () => null,
}

const SelectProvider = ({ id }) => {
  const dispatch = useDispatch()

  const [options, setOptions] = useState([])

  const { filters, currentFilters } = useSelector(({ filter }) => filter)
  const { total } = useSelector(({ playlist }) => playlist)

  const renderFilter = filters.find((filter) => filter.id === id)

  useEffect(() => {
    if (id === 'limit') {
      const limits = limitsList(renderFilter.validation.max)
      setOptions(limits)
    }
  }, [id, renderFilter.validation.max])

  useEffect(() => {
    if (id === 'offset') {
      const totalOffset = Math.ceil(total / currentFilters.limit)
      const offset = offsetList(totalOffset)
      setOptions(offset)
    }
  }, [id, total, currentFilters.limit])

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
