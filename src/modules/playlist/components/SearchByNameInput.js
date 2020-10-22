import React from 'react'
import { func } from 'prop-types'
import { Input, FormControl, makeStyles, InputLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  label: {
    width: '100%'
  }
}));

const propTypes = {
  setSearch: func.isRequired
}

export const SearchByNameInput = ({ setSearch }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.label}>search by playlist&apos;s name</InputLabel>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        id='name'
        name='name'
        />
    </FormControl>
  )
}

SearchByNameInput.propTypes = propTypes
