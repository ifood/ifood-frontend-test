import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    title: {
      flexGrow: 1,
      fontSize: '1.5rem',
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
  { name: 'Header' }
);
