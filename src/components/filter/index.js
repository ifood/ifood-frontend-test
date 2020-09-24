import React from 'react'
import { useSelector } from 'react-redux'

import DatePicker from 'components/datePicker'
import List from 'components/list'
import Select from 'components/select'

const filterMap = new Map([
  ['locale', List],
  ['country', List],
  ['timestamp', DatePicker],
  ['limit', Select],
  ['offset', Select],
])

const FilterProvider = () => {
  const { filters } = useSelector(({ filter }) => filter)

  return filters.map((filter) => {
    const { id: filterId } = filter
    const Filter = filterMap.get(filterId)

    return <Filter key={filterId} id={filterId} />
  })
}

export default FilterProvider
