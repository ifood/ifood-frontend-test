import React, { useState } from 'react'
import Router from 'next/router'
import './style.styl'
const filters = [
  {
    id: 'locale',
    name: 'Locale',
    values: [
      {
        value: 'en_AU',
        name: 'en_AU',
      },
      {
        value: 'de_DE',
        name: 'de_DE ',
      },
      {
        value: 'pt_BR',
        name: 'pt_BR',
      },
      {
        value: 'fr_FR',
        name: 'fr_FR',
      },
      {
        value: 'en_US',
        name: 'en_US',
      },
      {
        value: 'es_AR',
        name: 'es_AR',
      },
    ],
  },
  {
    id: 'country',
    name: 'País',
    values: [
      {
        value: 'AU',
        name: 'Australia',
      },
      {
        value: 'DE',
        name: 'Alemanhã',
      },
      {
        value: 'BR',
        name: 'Brasil',
      },
      {
        value: 'PT',
        name: 'Portugal',
      },
      {
        value: 'US',
        name: 'EUA',
      },
      {
        value: 'RU',
        name: 'Rússia',
      },
    ],
  },
  {
    id: 'timestamp',
    name: 'Data e Horário',
    validation: {
      primitiveType: 'STRING',
      entityType: 'DATE_TIME',
      pattern: 'yyyy-MM-ddTHH:mm:ss',
    },
  },
  {
    id: 'limit',
    name: 'Quantidade',
    validation: {
      primitiveType: 'INTEGER',
      min: 1,
      max: 50,
    },
  },
  {
    id: 'offset',
    name: 'Página',
    validation: {
      primitiveType: 'INTEGER',
    },
  },
]

const Filtering = ({ type, array }) =>
  array.filter(types => types.id === type)[0].values

export default props => {
  const [filter, setFilter] = useState('country=BR&locale=pt_BR')

  const logout = () => {
    localStorage.removeItem('mytoken')
    Router.replace('/')
  }
  const handleFilter = (type, value) => {
    const newValue = `${type}=${value}`
    const modifyFilter = filter
      .split('&')
      .map(el => (el.includes(type) ? (el = newValue) : el))
    const newFilter = modifyFilter.join('&')
    setFilter(newFilter)
    props.filteres(newFilter)
  }
  return (
    <aside className='the-aside'>
      <section className='the-aside__username '>
        <h4 className=''>
          Olá, <span className='tx-light'>{props.username}.</span>
        </h4>
      </section>
      <section className='the-aside__filters'>
        <label className='the-aside__filters__lang'>
          <span className='tx-light '>Linguagem</span>
          <select onChange={e => handleFilter('locale', e.target.value)}>
            {Filtering({ type: 'locale', array: filters }).map(
              (value, index) => (
                <option key={index} value={value.value}>
                  {value.name}
                </option>
              ),
            )}
          </select>
        </label>
        <label className='the-aside__filters__country'>
          <span className='tx-light '>País</span>
          <select onChange={e => handleFilter('country', e.target.value)}>
            {Filtering({ type: 'country', array: filters }).map(
              (value, key) => (
                <option key={key} value={value.value}>
                  {value.name}
                </option>
              ),
            )}
          </select>
        </label>
      </section>
      <button onClick={logout} className='btn-sair'>
        Sair
      </button>
    </aside>
  )
}
