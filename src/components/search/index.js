import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { useDebounce } from 'hooks'

import { setFilter } from 'states/modules/filter'

import { Search } from './styles'

const SearchElement = ({ onChange }) => (
  <Search>
    <input placeholder='Search' onChange={onChange} />
  </Search>
)

SearchElement.propTypes = {
  onChange: PropTypes.func,
}

SearchElement.propTypes = {
  onChange: () => null,
}

const SearchProvider = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useDebounce(500, '')
  const handleChange = (e) => {
    const { value: inputValue } = e.target

    setValue(inputValue)
  }
  useEffect(() => {
    dispatch(setFilter({ name: value }))
  }, [value])

  return <SearchElement onChange={handleChange} />
}

export { SearchElement }
export default SearchProvider
