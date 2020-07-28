// import { useEffect, useState } from 'react'
import usePlaylists from '../contexts/PlaylistContext'
import FieldsFilter from './FieldsFilter'

const Filter = () => {
  const { filterFields, loadingFilterFields } = usePlaylists()

  return (
    <>
      {loadingFilterFields ? (
        <p>Loading Filter</p>
      ) : (
        <div>
          {filterFields.map((filter) => (
            <div key={filter.id}>
              <h3>{filter.name}</h3>
              <FieldsFilter filter={filter} />
              {/* <ul>
                {filter.values &&
                  filter.values.map((option) => <p>{option.name}</p>)}
              </ul> */}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Filter
