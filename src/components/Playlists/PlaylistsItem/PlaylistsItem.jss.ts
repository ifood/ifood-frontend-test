import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(1),
  },
  description: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 2,
    lineHeight: '1rem',
    height: '2rem',
    overflow: 'hidden',
    fontWeight: theme.typography.fontWeightMedium,
    '& > a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}));
