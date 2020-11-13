import { createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import deepOrange from '@material-ui/core/colors/deepOrange'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: deepOrange,
    background: {
      paperHover: '#505050',
    },
  },
})

export default theme
