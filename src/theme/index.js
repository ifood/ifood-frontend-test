import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA1D2D'
    },
    secondary: {
      main: '#111'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#3E3E3E'
    }
  }
})

export default theme
