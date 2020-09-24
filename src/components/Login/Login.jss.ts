import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
    },
  }),
  { name: 'Login' }
);
