import React, { useState, useEffect} from 'react'
import { SelectInput, SliderInput, TimeInput } from './components'
import { filtersEnum } from './enum'
import { Button }  from '@material-ui/core';
import { Loading } from '../../commons-components/loading';
import { BoxContainer } from '../../commons-components/boxContainer'

export const Filters = ({ filters, getFilter, getPlaylist }) => {
  const [offset, setOffset] = useState('')
  const [limit, setLimit] = useState(20)
  const [timestamp, setTimestamp] = useState('')
  const [country, setCountry] = useState('')
  const [locale, setLocale] = useState('')
  const [change, setChange] = useState(false)

  const inputsResolver = (input, value) => {
    switch(input){
      case filtersEnum.OFFSET:
        return setOffset(value)
      case filtersEnum.LIMIT:
        return setLimit(value)
      case filtersEnum.TIMESTAMP:
        return setTimestamp(value)
      case filtersEnum.COUNTRY:
        return setCountry(value)
      case filtersEnum.LOCALE:
        return setLocale(value)
      default:
        return null
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getPlaylist({offset, limit, timestamp, country, locale})
  }

  const myInterval = () => {
    setChange(true)
  }

  useEffect(() => {
    const timer = setInterval(() => myInterval() , 30000)

    return () => clearInterval(timer)
  },[])

  useEffect(() => {
    getPlaylist({offset, limit, timestamp, country, locale})
    setChange(false)
  },[
    offset,
    limit,
    timestamp,
    country,
    locale,
    change,
    getPlaylist
  ])

  useEffect(() => {
    getFilter()
  },[getFilter])

  return (
    <>
    <form onSubmit={onSubmit}>
      <BoxContainer>
        {filters[0] ? filters.map((filter) => (
            filter.id === filtersEnum.TIMESTAMP ?
            <TimeInput
              key={filter.name}
              filter={filter}
              inputsResolver={inputsResolver}
            />
            :
            filter.values ?
            <SelectInput
              key={filter.name}
              filter={filter}
              inputsResolver={inputsResolver}
              value={filter.values.value}
            />
            :
            <SliderInput
              key={filter.name}
              filter={filter}
              inputsResolver={inputsResolver}
            />
            )): <Loading /> }
        <Button variant="contained">
          filter
        </Button>
      </BoxContainer>
    </form>
    </>
  )
}
