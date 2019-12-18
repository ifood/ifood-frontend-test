import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'

import { Types as playlistsTypes } from '../../store/playlists'
import { Types as formFiltersTypes } from '../../store/form-filters'
import { useInterval } from '../../hooks/use-interval'
import { InputInteger } from '../input-integer'
import { InputSelect } from '../input-select'
import { InputDate } from '../input-date'

const useStyles = makeStyles({
  title: {
    fontSize: '2rem'
  },
  skeleton: {
    width: '100%',
    height: 45,
    marginBottom: 10
  },
  submitButton: {
    marginTop: 10
  }
})

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
  const classes = useStyles()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    offset: 0,
    limit: 10
  })
  const { filters, loading: loadingFilters } = useSelector(
    state => state.filters
  )
  const { error, loading } = useSelector(state => state.playlists)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: formFiltersTypes.GET_FORM_FILTERS, payload: formValues })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <>
      <Typography
        className={classes.title}
        variant='h1'
        component='h1'
        gutterBottom
      >
        Spotifood
      </Typography>

      <form onSubmit={onSubmit} noValidate>
        {loadingFilters && (
          <div>
            <Skeleton className={classes.skeleton} variant='rect' />
            <Skeleton className={classes.skeleton} variant='rect' />
            <Skeleton className={classes.skeleton} variant='rect' />
            <Skeleton className={classes.skeleton} variant='rect' />
            <Skeleton className={classes.skeleton} variant='rect' />
          </div>
        )}

        {!loadingFilters &&
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

        <Grid container direction='row' justify='center' alignItems='center'>
          <Button
            className={classes.submitButton}
            variant='contained'
            color='primary'
            type='submit'
            startIcon={<SearchIcon />}
            disabled={loading}
          >
            Buscar
          </Button>
        </Grid>
      </form>
    </>
  )
}
