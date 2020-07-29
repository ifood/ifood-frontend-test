import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MdFilterList } from 'react-icons/md'

import * as S from './styles'

export default function Filters ({ filters, handleOnSubmitFilters }) {
  const [opened, setOpened] = useState(false)
  const [searchies, setSearchies] = useState({})

  function selectSearchies (search) {
    const searchCopy = Object.assign({}, searchies)
    searchCopy[`${search.id}`] = search.value

    setSearchies(searchCopy)
  }

  return (
    <S.Container>
      <S.Content>
        <S.WrapperIcon onClick={() => setOpened(!opened)}>
          <S.Title>Filtros</S.Title>
          <MdFilterList size={24} />
        </S.WrapperIcon>
        <S.WrapperFilters opened={opened}>
          {filters.map((filter) => (
            <S.Filtro
              key={filter.id}>
              <S.Title>{filter.name}</S.Title>
              <S.Values>
                {filter.values && filter.values.map((value, index) => (
                  <S.Value
                    selected={searchies[`${filter.id}`] && searchies[`${filter.id}`].name === value.name}
                    key={index}
                    onClick={() => selectSearchies({ value, id: filter.id })}>
                    {value.name}
                  </S.Value>
                ))}
              </S.Values>
            </S.Filtro>
          ))}
          <S.Button onClick={async () => handleOnSubmitFilters(searchies)}>Aplicar filtros</S.Button>
        </S.WrapperFilters>
      </S.Content>
    </S.Container>
  )
}

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnSubmitFilters: PropTypes.func.isRequired
}
