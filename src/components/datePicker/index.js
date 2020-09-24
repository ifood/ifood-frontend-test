import React from 'react'
import DatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'

import 'react-datepicker/dist/react-datepicker.css'

import { getPlaylistRequest } from 'states/modules/playlist'
import { setFilter } from 'states/modules/filter'

const DatePickerProvider = () => {
  const dispatch = useDispatch()

  const { filters, currentFilters } = useSelector(({ filter }) => filter)

  const renderFilter = filters.find((filter) => filter.id === 'timestamp')

  const handleChange = async (e) => {
    const filterAlreadySelected = currentFilters.timestamp === e

    if (filterAlreadySelected) return

    await dispatch(setFilter({ timestamp: e }))

    await dispatch(getPlaylistRequest())
  }

  return (
    <>
      <span>{renderFilter.name}:</span>
      <DatePicker selected={currentFilters.timestamp} onChange={handleChange} />
    </>
  )
}

export default DatePickerProvider
