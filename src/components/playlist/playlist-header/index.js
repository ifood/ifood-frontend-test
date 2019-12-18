import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import FilledInput from '@material-ui/core/FilledInput'
import SearchIcon from '@material-ui/icons/Search'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  title: {
    fontSize: '1.5rem',
    marginRight: 10,
    display: 'flex',
    alignItems: 'center'
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: 200
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
      <Typography className={classes.title} variant='h1' component='h2'>
        Featured Playlists
      </Typography>

      {showFilter && (
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant='filled'
        >
          <InputLabel htmlFor='playlist-filter-adornment'>Filter</InputLabel>
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
      )}
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
