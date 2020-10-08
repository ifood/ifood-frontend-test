import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ea1d2c',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#f5f3f4',
      contrastText: '#3e3e3e'
    },
  },
});
  
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));