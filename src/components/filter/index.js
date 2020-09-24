import React from 'react'
import { useSelector } from 'react-redux'

import DatePicker from 'components/datePicker'
import List from 'components/list'

const filterMap = new Map([
  ['locale', List],
  ['country', List],
  ['timestamp', DatePicker],
  ['limit', List],
  ['offset', List],
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
