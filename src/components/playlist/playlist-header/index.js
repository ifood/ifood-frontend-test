import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import FilledInput from '@material-ui/core/FilledInput'
import SearchIcon from '@material-ui/icons/Search'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 15
  },
  title: {
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    minHeight: 60
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center'
  },
  margin: {
    margin: 0
  },
  textField: {
    width: '100%',
    margin: '10px 0'
  }
}))

export function PlaylistHeader({ onFilter, showFilter }) {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const handleChange = event => {
    const inputValue = event.target.value
    setValue(inputValue)
    onFilter(inputValue)
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md='auto' className={classes.titleBox}>
          <Typography className={classes.title} variant='h1' component='h2'>
            Featured Playlists
          </Typography>
        </Grid>
        {showFilter && (
          <Grid item xs={12} md>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant='filled'
            >
              <InputLabel htmlFor='playlist-filter-adornment'>
                Filter
              </InputLabel>
              <FilledInput
                id='playlist-filter-adornment'
                data-testid='playlist-filter-adornment'
                type='text'
                value={value}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

PlaylistHeader.propTypes = {
  onFilter: PropTypes.func.isRequired,
  showFilter: PropTypes.bool
}

PlaylistHeader.defaultProps = {
  showFilter: true
}
