import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

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
  const { filters } = useSelector(({ filter }) => filter)

  const currentFilter = filters.find((filter) => filter.id === id)

  const handleClick = (value) => {
    console.log(value)
  }

  return <List values={currentFilter.values} onClick={handleClick} />
}

ListProvider.propTypes = {
  id: PropTypes.string.isRequired,
}

export { List }

export default ListProvider
