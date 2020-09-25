import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      padding: theme.spacing(1),
    },
    item: {
      padding: theme.spacing(1),
    },
  }),
  { name: 'Playlists' }
);
