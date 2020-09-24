import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { getPlaylistRequest } from 'states/modules/playlist'
import { setFilter } from 'states/modules/filter'

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

  const { filters } = useSelector(({ filter }) => filter)

  const currentFilter = filters.find((filter) => filter.id === id)

  const handleClick = async (value) => {
    const payload = payloadFactory(id, value)

    await dispatch(setFilter(payload))

    await dispatch(getPlaylistRequest())
  }

  const payloadFactory = (key, value) => ({ [key]: value })

  return <List values={currentFilter.values} onClick={handleClick} />
}

ListProvider.propTypes = {
  id: PropTypes.string.isRequired,
}

export { List }

export default ListProvider
