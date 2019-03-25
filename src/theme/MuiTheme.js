import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  color : {
    white: '#fff',
    black: '#000'
  },
  palette: {
    primary: {
      light: '#4d5f6a',
      main: '#213845',
      dark: '#172730',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f44a5a',
      main: '#F21D31',
      dark: '#a91422',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
})



export default theme
