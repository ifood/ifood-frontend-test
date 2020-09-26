import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { useDebounce } from 'hooks'

import { setFilter } from 'states/modules/filter'

import { Search, Container, Input } from './styles'

const SearchElement = ({ onChange }) => (
  <Container>
    <Search>
      <Input placeholder='Search' onChange={onChange} />
    </Search>
  </Container>
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
  }, [dispatch, value])

  return <SearchElement onChange={handleChange} />
}

export { SearchElement }
export default SearchProvider
