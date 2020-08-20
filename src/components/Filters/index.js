/**
 *
 * Filters
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Select from '../Select'
import Text from '../Text'

import { StyledFilters } from './styles'
import Input from '../Input'

export function Filters(props) {
  const { filtersList } = props

  const renderField = (filter) => {
    const { id, values, validation = {} } = filter

    if (values) {
      return (
        <Select id={id} options={values} />
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

    return <Input id={id} type={inputType} {...inputProps} />
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
}

export default Filters
