import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { useDebounce } from 'hooks'

import { setFilter, toggleSidebar } from 'states/modules/filter'

import hamburguer from 'assets/images/hamburguer.svg'

import { Search, Container, Input, Button, Float } from './styles'

const Header = ({ onClick, onChange, hidden }) => (
  <Container>
    <Button src={hamburguer} onClick={onClick} />
    <Search hidden={hidden}>
      <Input placeholder='Search' onChange={onChange} />
    </Search>
    <Float />
  </Container>
)

Header.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  hidden: PropTypes.bool,
}

Header.propTypes = {
  onChange: () => null,
  onClick: () => null,
  hidden: false,
}

const HeaderProvider = () => {
  const dispatch = useDispatch()

  const { hidden } = useSelector(({ filter }) => filter)

  const [value, setValue] = useDebounce(500, '')

  const handleChange = (e) => {
    const { value: inputValue } = e.target

    setValue(inputValue)
  }

  useEffect(() => {
    dispatch(setFilter({ name: value }))
  }, [dispatch, value])

  const handleClick = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Header onChange={handleChange} onClick={handleClick} hidden={hidden} />
  )
}

export { Header }
export default HeaderProvider
