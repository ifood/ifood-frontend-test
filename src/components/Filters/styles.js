import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    '& .MuiFormControl-root': {
      marginBottom: '1rem',
    },
  },
}));

export default useStyles;
