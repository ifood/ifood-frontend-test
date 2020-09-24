import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    indicator: {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
    },
  }),
  { name: 'FeaturedPlaylists' }
);
