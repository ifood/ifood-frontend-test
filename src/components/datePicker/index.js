import React from 'react'
import DatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'

import 'react-datepicker/dist/react-datepicker.css'

import remove from 'assets/images/remove.svg'

import { getPlaylistRequest } from 'states/modules/playlist'
import { setFilter } from 'states/modules/filter'

import { Container, Title, RemoveIcon, Header } from './styles'

const DatePickerProvider = () => {
  const dispatch = useDispatch()

  const { filters, currentFilters } = useSelector(({ filter }) => filter)

  const renderFilter = filters.find((filter) => filter.id === 'timestamp')

  const handleChange = async (e) => {
    const filterAlreadySelected = currentFilters.date === e

    if (filterAlreadySelected) return

    await dispatch(setFilter({ date: e }))

    await dispatch(getPlaylistRequest())
  }

  const handleRemove = async () => {
    if (!currentFilters.date) return

    await dispatch(setFilter({ date: null }))

    await dispatch(getPlaylistRequest())
  }

  return (
    <Container>
      <Header>
        <Title>{renderFilter.name}</Title>
        {currentFilters.date && (
          <RemoveIcon src={remove} onClick={handleRemove} />
        )}
      </Header>
      <DatePicker
        selected={currentFilters.date}
        dateFormat='dd/MM/yyyy HH:mm'
        placeholderText='dd/mm/aaaa hh:mm'
        locale='pt-br'
        onChange={handleChange}
        showTimeSelect
        timeFormat='HH:mm'
      />
    </Container>
  )
}

export default DatePickerProvider
