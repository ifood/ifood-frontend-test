import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import Search from './../search'
import Input from './../input'
import Button from './../button'

export default function Filters ({ filters, handlerSubmitFilters, handlerLanguage, filterPLaylists }) {
  const [limit, setLimit] = useState(5)
  const [offset, setOffset] = useState(0)
  const [timestamp, setTimesatamp] = useState('2014-10-23T09:00:00')
  const [opened, setOpened] = useState(false)
  const [searchies, setSearchies] = useState({ country: '', locale: '' })
  const [propsInput, setPropsInput] = useState({})

  useEffect(() => {
    const props = buildInputProps(filters)

    setPropsInput(props)
  }, [filters])

  function buildInputProps (filters) {
    const props = {}

    filters.forEach((filter) => {
      if (filter.validation) {
        if (filter.id === 'timestamp') {
          props.timestamp = {
            type: getTypeInput(filter.validation.primitiveType),
            defaultValue: filter.validation.pattern,
            // pattern: filter.validation.pattern,
            onChange: (e) => setTimesatamp(e.target.value)
          }
        }

        if (filter.id === 'limit') {
          props.limit = {
            type: getTypeInput(filter.validation.primitiveType),
            min: filter.validation.min,
            max: filter.validation.max,
            defaultValue: limit,
            onChange: (e) => setLimit(e.target.value)
          }
        }

        if (filter.id === 'offset') {
          props.offset = {
            type: getTypeInput(filter.validation.primitiveType),
            defaultValue: offset,
            onChange: (e) => setOffset(e.target.value)
          }
        }

        props[`${filter.id}`].id = filter.id
      }
    })
    return props
  }

  function getTypeInput (type) {
    const types = {
      STRING: () => 'text',
      INTEGER: () => 'number'
    }

    return types[`${type}`]() || 'text'
  }

  function selectSearchies (search) {
    const searchCopy = Object.assign({}, searchies)

    if (search.value.name !== searchies[`${search.id}`].name) {
      searchCopy[`${search.id}`] = search.value

      if (search.id === 'locale') handlerLanguage(search.value.value)

      if (search.id === 'country') {
        const { value } = handlerLocaleByCountry(search.value.value)

        handlerLanguage(value)
      }

      setSearchies(searchCopy)
    } else {
      searchCopy[`${search.id}`] = ''

      setSearchies(searchCopy)
    }
  }

  function handlerLocaleByCountry (value) {
    const abreviationCountry = value.slice(-2)

    const { values } = filters.find(filter => filter.id === 'locale')

    const abreviationLocale = values.find(i => i.value.endsWith(`${abreviationCountry}`))
    return abreviationLocale || { value: 'en_US', name: 'en_US' }
  }

  async function loadByFilters (e) {
    e.preventDefault()

    const newSearchies = {
      country: searchies.country.value,
      locale: searchies.locale.value,
      offset,
      limit,
      timestamp
    }

    setOpened(!opened)
    handlerSubmitFilters(newSearchies)
  }

  return (
    <S.Container>
      <S.Content>
        <Button
          type='button'
          template='filter'
          handleClick={() => setOpened(!opened)}>
          <S.Title>Filtros</S.Title>
          <S.IconFilter />
        </Button>
        <Search handleChange={filterPLaylists} />
        <S.IconCountry name={`icon-${searchies.country && searchies.country.value.toLowerCase()}`} alt='Country' />
        <S.WrapperFilters opened={opened}>
          <S.Form onSubmit={(e) => loadByFilters(e)} >
            {filters.map((filter) => (
              <S.Filtro
                key={filter.id}>
                <S.SubTitle htmlFor={filter.id}>{filter.name}</S.SubTitle>
                {filter.values &&
                  <S.Values>
                    {filter.values.map((value, index) => (
                      <S.Value
                        id={filter.id}
                        selected={searchies[`${filter.id}`] && searchies[`${filter.id}`].name === value.name}
                        key={index}
                        onClick={() => selectSearchies({ value, id: filter.id })}>
                        {value.name}
                      </S.Value>
                    ))}
                  </S.Values>
                }
                {filter.validation &&
                  <S.WrapperValidation>
                    <Input props={propsInput[`${filter.id}`]} />
                  </S.WrapperValidation>
                }
              </S.Filtro>
            ))}
            <Button type='submit'>
              Aplicar filtros
            </Button>
          </S.Form>
        </S.WrapperFilters>
      </S.Content>
    </S.Container>
  )
}

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterPLaylists: PropTypes.func.isRequired,
  handlerLanguage: PropTypes.func.isRequired,
  handlerSubmitFilters: PropTypes.func.isRequired
}
