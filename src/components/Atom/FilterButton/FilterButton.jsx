import React from 'react'
import PropTypes from 'prop-types'
import FilterListIcon from '@material-ui/icons/FilterList'
import IconButton from '@material-ui/core/IconButton'

const FilterButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="filter">
      <FilterListIcon fontSize="large" />
    </IconButton>
  )
}

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default FilterButton
