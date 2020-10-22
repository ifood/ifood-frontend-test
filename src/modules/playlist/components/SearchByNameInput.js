import React from 'react'
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

export const SearchByNameInput = ({setSearch}) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.label}>search by playlist's name</InputLabel>
      <Input
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        id='name'
        name='name'
        />
    </FormControl>
  )
}
