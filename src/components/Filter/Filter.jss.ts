import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(2, 2, 0),
    padding: theme.spacing(2),
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    '& > :first-child': {
      flexGrow: 1,
      marginRight: theme.spacing(2),
    },
  },
  filters: {
    marginTop: theme.spacing(1),
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    '& > *': {
      flexBasis: 0,
      flexGrow: 1,
      height: '100%',
    },
    '& > :not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  indicator: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));
