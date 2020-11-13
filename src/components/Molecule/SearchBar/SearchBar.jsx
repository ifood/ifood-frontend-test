/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { FormField } from '../FormField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ onSearchBarChange, formikProps, placeholder, name }) => {
  const values = get(formikProps.values, name)

  useEffect(() => {
    onSearchBarChange(values)
  }, [values, onSearchBarChange])

  return (
    <FormField
      {...formikProps}
      name={name}
      placeholder={placeholder}
      inputPropsTF={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

SearchBar.propTypes = {
  onSearchBarChange: PropTypes.func,
  formikProps: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
}

SearchBar.defaultProps = {
  placeholder: 'Pesquisar',
  name: 'searchBar',
  onSearchBarChange: () => {},
}

export default SearchBar
