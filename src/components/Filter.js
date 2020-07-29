import usePlaylists from '../contexts/PlaylistContext'
import FieldsFilter from './FieldsFilter'
import Loader from './Loader'

const Filter = () => {
  const { filterFields, loadingFilterFields } = usePlaylists()

  return (
    <>
      {loadingFilterFields ? (
        <Loader centered />
      ) : (
        <div>
          {filterFields.map((filter) => (
            <div key={filter.id}>
              <h3>{filter.name}</h3>
              <FieldsFilter filter={filter} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Filter
