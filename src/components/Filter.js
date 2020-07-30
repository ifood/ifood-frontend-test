import styled from 'styled-components'
import usePlaylists from '../contexts/PlaylistContext'
import FieldsFilter from './FieldsFilter'
import Loader from './Loader'
import Input from './Input'
import { ID_SEARCH, LABEL_SEARCH } from '../constants/components'
import { colors } from '../assets/styles/default-style'

const Filter = () => {
  const { filterFields, filterByText, loadingFilterFields } = usePlaylists()

  return (
    <FilterStyle>
      {loadingFilterFields ? (
        <Loader centered />
      ) : (
        <>
          <Input
            onChange={filterByText}
            id={ID_SEARCH}
            text={LABEL_SEARCH}
          />
          <div className="row-filters">
            {filterFields.map((filter) => (
              <FieldsFilter key={filter.id} filter={filter} />
            ))}
          </div>
        </>
      )}
    </FilterStyle>
  )
}

const FilterStyle = styled.div`
  --input-color: rgba(255, 255, 255, .5);
  padding: 0 20px;

  .row-filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .wrapper-filter-input {
    position: relative;
    width: 100%;
  }

  .wrapper-filter-input label {
    background-color: ${colors.purple};
    color: var(--input-color);
    left 10px;
    padding: 0 10px;
    position: absolute;
    top: 12px;
    transition: all .3s ease-in-out;
    z-index: -1;
  }

  .filter-input {
    background-color: transparent;
    border: 3px solid var(--input-color);
    color: var(--input-color);
    font-size: 1rem;
    height: 45px;
    position: relative;
    padding-left: 10px;
    outline: none;
    transition: all .3s ease-in-out;
    width: 100%;
    z-index: 1;

    &:focus {
      border-color: white;
      color: white;
      transition: all .3s ease-in-out;
    }
  }

  .wrapper-filter-select {
    max-width: calc((100%/2) - 10px);
  }
`

export default Filter
