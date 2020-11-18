import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconDonut: {
    marginRight: theme.spacing(2),
    width: '60px'
  },
  iconSpotifood: {
    marginRight: theme.spacing(2),
    width: '140px'
  },
  header:{
    backgroundColor: '#000000e8',
    display: 'grid',
    alignItems: 'center',
    minHeight: '80px',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    // paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
    position: 'relative',
    "&:last-child": {
      paddingBottom: `${theme.spacing(6)}px !important`
    }
  },
  cardButton: {
    position: 'absolute',
    bottom: 0,
    left: '3px',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  filtersComponent: {
    padding: theme.spacing(4, 0, 4),
  },
  filtersFields: {
    width: '-webkit-fill-available'
  },
  localSearch: {
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(0, 0, 4),
  }
}));