import React from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/MuiTheme'

import PageContainer from './components/PageContainer'
import Background from './components/Background'

const App = () => (
  <MuiThemeProvider theme={theme}>

    <Background>
      <PageContainer />
    </Background>

    <style global jsx>{`
      * {
        font-size: 16px;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
      }
      #root {
        font-family: ${theme.typography.fontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
          -webkit-transition-delay: 9999s;
          -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
      }
    `}</style>
  </MuiThemeProvider>
)

export default App
