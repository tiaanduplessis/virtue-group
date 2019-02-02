import React from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/MuiTheme'

import { navData } from './utils/navData'

import Navbar from './components/Navbar'
import Background from './components/Background'

import Home from './pages/Home'
import About from './pages/About'
import Electrical from './pages/Electrical'
import Plumbing from './pages/Plumbing'
import Contact from './pages/Contact'

const pages = { Home, About, Electrical, Plumbing, Contact }

const App = ({ location }) => <MuiThemeProvider theme={theme}>

  <Background>

    <Navbar />

    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 400, exit: 200 }}
        classNames="fade"
      >

        <section className="route-section">
          <Switch location={location}>
            {navData.map(item =>
              <Route key={item.id} path={item.path} component={pages[item.page]}/>
            )}
            <Redirect to='/home'/>
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>

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

    .fade-enter {
      opacity: 0.01;
      transform: translateY(5em) scale(0.99);
      transform-origin: center;
    }

    .fade-enter.fade-enter-active {
      opacity: 1;
      transform: translateY(0em) scale(1);
      transition: 200ms 200ms ease-in-out;
    }

    .fade-exit {
      opacity: 1;
      transform: translateY(0em) scale(1);
    }

    .fade-exit.fade-exit-active {
      opacity: 0.01;
      transform: translateY(5em) scale(0.99);
      transition: 200ms ease-in-out;
    }
    section.route-section {
      min-width: 100vw;
    }

  `}</style>
</MuiThemeProvider>


export default withRouter(App)
