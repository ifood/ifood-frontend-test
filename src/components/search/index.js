import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Types as playlistsTypes } from '../../store/playlists'
import { Types as formFiltersTypes } from '../../store/form-filters'
import { useInterval } from '../../hooks/use-interval'

import { InputInteger } from '../input-integer'
import { InputSelect } from '../input-select'
import { InputDate } from '../input-date'

const getInputComponent = name => {
  const inputMap = {
    locale: InputSelect,
    country: InputSelect,
    timestamp: InputDate,
    limit: InputInteger,
    offset: InputInteger
  }

  return inputMap[name] || null
}

export function Search() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    offset: 0,
    limit: 10
  })
  const { filters } = useSelector(state => state.filters)
  const { error } = useSelector(state => state.playlists)
  const dispatch = useDispatch()

  console.log('Filters', filters)
  console.log('Filters error', error)

  useEffect(() => {
    dispatch({ type: formFiltersTypes.GET_FORM_FILTERS, payload: formValues })
  }, [dispatch, formValues])

  const getPlaylists = () =>
    dispatch({ type: playlistsTypes.GET_PLAYLISTS, payload: formValues })

  const onSubmit = async e => {
    e.preventDefault()
    setIsSubmitted(true)
    getPlaylists()
  }

  const handleChange = (name, value) => {
    const updatedValues = { ...formValues, [name]: value }
    setFormValues(updatedValues)
  }

  useInterval(() => {
    if (!error && isSubmitted) {
      getPlaylists()
    }
  }, 30000)

  return (
    <div className='search'>
      Search
      <form onSubmit={onSubmit} noValidate>
        {filters &&
          filters.map(({ id, name, values, validation }) => {
            const inputProps = {
              key: id,
              id: `field-${id}`,
              label: name,
              name: id,
              value: formValues[id],
              onChange: handleChange
            }

            const Component = getInputComponent(id)

            return Component ? (
              <Component
                {...inputProps}
                options={values}
                validation={validation}
              />
            ) : null
          })}

        <Button variant='contained' color='primary' type='submit'>
          Buscar
        </Button>
      </form>
    </div>
  )
}
