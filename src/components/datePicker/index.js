import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'

import 'react-datepicker/dist/react-datepicker.css'

import remove from 'assets/images/remove.svg'

import { getPlaylistRequest } from 'states/modules/playlist'
import { setFilter } from 'states/modules/filter'

import { Container, Title, RemoveIcon, Header } from './styles'

const DatePickerElement = ({ selected, onChange }) => (
  <DatePicker
    selected={selected}
    onChange={onChange}
    dateFormat='dd/MM/yyyy HH:mm'
    placeholderText='dd/mm/aaaa hh:mm'
    locale='pt-br'
    showTimeSelect
    timeFormat='HH:mm'
  />
)

DatePickerElement.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
}

DatePickerElement.defaultProps = {
  selected: null,
  onChange: () => null,
}

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
      <DatePickerElement
        selected={currentFilters.date}
        onChange={handleChange}
      />
    </Container>
  )
}

export { DatePickerElement, DatePickerProvider }

export default DatePickerProvider
