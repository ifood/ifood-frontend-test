import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { getPlaylistRequest } from 'states/modules/playlist'
import { setFilter } from 'states/modules/filter'

import { payloadFactory } from 'utils'

import { Item, Nav, Title } from './styles'

const List = ({ values, onClick, title, selected }) => {
  return (
    <Nav data-testid='list-container'>
      <Title>{title}</Title>
      {values.map((elem, index) => (
        <Item
          key={index}
          onClick={() => onClick(elem.value)}
          selected={selected === elem.value}
        >
          {elem.name}
        </Item>
      ))}
    </Nav>
  )
}

List.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  title: PropTypes.string,
  selected: PropTypes.string,
}

List.defaultProps = {
  values: [{}],
  onClick: () => null,
  title: '',
  selected: '',
}

const ListProvider = ({ id }) => {
  const dispatch = useDispatch()

  const { filters, currentFilters } = useSelector(({ filter }) => filter)

  const renderFilter = filters.find((filter) => filter.id === id)

  const handleClick = async (filter) => {
    const filterAlreadySelected = currentFilters[id] === filter

    let value = filter

    if (filterAlreadySelected) {
      value = ''
    }

    const payload = payloadFactory(id, value)

    await dispatch(setFilter(payload))

    await dispatch(getPlaylistRequest())
  }

  return (
    <List
      values={renderFilter.values}
      onClick={handleClick}
      title={id}
      selected={currentFilters[id]}
    />
  )
}

ListProvider.propTypes = {
  id: PropTypes.string.isRequired,
}

export { List, ListProvider }

export default ListProvider
