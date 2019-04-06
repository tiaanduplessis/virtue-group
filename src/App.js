import React, { PureComponent } from 'react'
import { Switch, Redirect, Route, withRouter } from "react-router-dom"

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/MuiTheme'

import { navData } from './utils/navData'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/services/'
import Contact from './pages/Contact'

import Navbar from './components//Navbar'
import Background from './components/Background'

function getPageIndex(pathname) {
  const urlPage = pathname.split("/")[1]
  const pageValue = navData.find(page => page.path === `/${urlPage}`)
  return pageValue ? pageValue.id : null
}

class App extends PureComponent {

  static getDerivedStateFromProps(props, state) {
    const value = getPageIndex(props.location.pathname)
    return !!value ? {value} : {value: 0}
  }

  state = {
    value: 0
  }

  handleChange = (props, value) => {
    this.setState({ value }, () => {
      const newRoute = navData[value].path
      this.props.history.push(newRoute)
    })
  }

  render() {
    const { value } = this.state

    return(
      <MuiThemeProvider theme={theme}>
        <Background>
          <Navbar
            value={value}
            navData={navData}
            handleChange={this.handleChange}
          />
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/services/:service' component={Services}/>
            <Route exact path='/contact' component={Contact}/>
            <Redirect to="/home"/>
          </Switch>
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
  }
}

export default withRouter(App)
