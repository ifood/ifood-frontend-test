import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    background: '#fff',
    // [theme.breakpoints.down('sm')]: {
    '& .MuiFormControl-root': {
      marginBottom: '1rem',
    },
    // },
  },
}));

export default useStyles;
