import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { getPlaylistRequest } from 'states/modules/playlist'
import { setFilter } from 'states/modules/filter'

import { payloadFactory } from 'utils'

const List = ({ values, onClick }) => {
  return (
    <ul>
      {values.map((elem, index) => (
        <li key={index} onClick={() => onClick(elem.value)}>
          {elem.name}
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
}

List.defaultProps = {
  values: [{}],
  onClick: () => null,
}

const ListProvider = ({ id }) => {
  const dispatch = useDispatch()

  const { filters, currentFilters } = useSelector(({ filter }) => filter)

  const renderFilter = filters.find((filter) => filter.id === id)

  const handleClick = async (value) => {
    const filterAlreadySelected = currentFilters[id] === value

    if (filterAlreadySelected) return

    const payload = payloadFactory(id, value)

    await dispatch(setFilter(payload))

    await dispatch(getPlaylistRequest())
  }

  return <List values={renderFilter.values} onClick={handleClick} />
}

ListProvider.propTypes = {
  id: PropTypes.string.isRequired,
}

export { List }

export default ListProvider
