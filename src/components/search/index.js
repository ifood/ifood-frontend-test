import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'

import { Types as playlistsTypes } from '../../store/playlists'
import { useInterval } from '../../hooks/use-interval'
import { InputInteger } from '../input-integer'
import { InputSelect } from '../input-select'
import { InputDate } from '../input-date'

const useStyles = makeStyles({
  title: {
    fontSize: '2rem'
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

export function Search({ filters }) {
  const classes = useStyles()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    offset: 0,
    limit: 10
  })

  const { error, loading } = useSelector(state => state.playlists)
  const dispatch = useDispatch()

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
        {filters.map(({ id, name, values, validation }) => {
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

Search.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        })
      ),
      validation: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
        primitiveType: PropTypes.string,
        entityType: PropTypes.string,
        pattern: PropTypes.string
      })
    })
  ).isRequired
}
