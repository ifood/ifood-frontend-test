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
    position: 'relative',
    height: '91vh'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  loginContainer: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  },
  buttons: {
    color: 'white !important',
    backgroundColor: '#4db85b !important',
    borderRadius: '24px !important',
    // minWidth: '250px !important',
    // height: '48px !important',
    '&:hover': {
      backgroundColor: '#379243 !important',
    }
  },
  cardGrid: {
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
    bottom: '3px',
    left: '42%',
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
  filtersLoader: {
    margin: theme.spacing(13.2, 0, 9.2),
    marginLeft: '48%'
  },
  localSearch: {
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(0, 0, 4),
  }
}));