import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  btn_singin: {
    fontSize: '16px',
    lineHeight: '1',
    borderRadius: '500px',
    padding: '19px 56px 21px',
    background: '#1DB954',
    color: '#fff',
    '&:hover': {
      background: '#1ED760',
    },
  },
}));

export default useStyles;
