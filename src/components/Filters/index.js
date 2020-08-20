/**
 *
 * Filters
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import Loader from '../Loader'
import Select from '../Select'
import Text from '../Text'

import { StyledFilters } from './styles'

export function Filters(props) {
  const { filtersList, handleFilters, isLoading } = props

  if (isLoading) {
    return <Loader />
  }

  const onFilterChange = (value, filterId) => {
    handleFilters(filterId, value)
  }

  const renderField = (filter) => {
    const { id, values, validation = {} } = filter

    if (values) {
      return (
        <Select
          id={id}
          options={values}
          onChange={onFilterChange}
        />
      )
    }

    let inputType = 'text'
    const inputProps = {}
    if (validation.entityType === 'DATE_TIME') {
      inputType = 'datetime-local'
    } else if (validation.primitiveType === 'INTEGER') {
      inputProps.min = validation.min
      inputProps.max = validation.max
      inputType = 'number'
    }

    return (
      <Input
        {...inputProps}
        id={id}
        type={inputType}
        onChange={onFilterChange}
        validation={validation}
      />
    )
  }

  const renderFilter = (filter) => {
    const { id, name } = filter

    return (
      <div key={id}>
        <Text semiBold>
          {name}
        </Text>
        {renderField(filter)}
      </div>
    )
  }

  return (
    <StyledFilters>
      {filtersList.map(renderFilter)}
      {renderFilter({ id: 'name', name: 'Nome' })}
    </StyledFilters>
  )
}

Filters.propTypes = {
  filtersList: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
}

export default Filters
