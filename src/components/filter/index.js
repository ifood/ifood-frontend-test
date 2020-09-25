import React from 'react'
import { useSelector } from 'react-redux'

import DatePicker from 'components/datePicker'
import List from 'components/list'
import Select from 'components/select'
import Skeleton from 'components/filterSkeleton'

const filterMap = new Map([
  ['locale', List],
  ['country', List],
  ['timestamp', DatePicker],
  ['limit', Select],
  ['offset', Select],
])

const FilterProvider = () => {
  const { filters, loading } = useSelector(({ filter }) => filter)

  return filters.map((filter) => {
    const { id: filterId } = filter
    const Filter = filterMap.get(filterId)

    return (
      <>{!loading ? <Filter key={filterId} id={filterId} /> : <Skeleton />}</>
    )
  })
}

export default FilterProvider
