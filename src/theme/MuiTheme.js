import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  color : {
    white: '#FFF',
    black: '#000'
  },
  palette: {
    primary: {
      light: '#4D5f6A',
      main: '#213845',
      dark: '#172730'
    },
    secondary: {
      light: '#F44A5A',
      main: '#F21D31',
      dark: '#A91422'
    },
    paper: 'rgba(255, 255, 255, 0.7)'
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
  },
  container: {
    display: 'flex',
    padding: '0 5vw',
    '& > *': {
      maxWidth: 1500,
      margin: '0 auto'
    }
  }
})



export default theme
