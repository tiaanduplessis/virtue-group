import React, { Fragment } from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import colors from './utils/colors'

import { navData } from './utils/navData'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Electrical from './pages/Electrical'
import Plumbing from './pages/Plumbing'
import Contact from './pages/Contact'

const pages = { Home, About, Electrical, Plumbing, Contact }

const App = ({ location }) => <Fragment>

  <Navbar/>

  <TransitionGroup className="transition-group">
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

  <style global jsx>{`
    * {
      font-size: 16px;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-decoration: none;
      color: ${colors.black};
      list-style: none;
      background-color: ${colors.white}
    }

    #root {
      min-height: 100vh;
      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
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

    div.transition-group {
      position: relative;
    }
    section.route-section {
      position: absolute;
      min-width: 100vw;
      top: 0;
      left: 0;
      margin-top: 4.5em;
    }

  `}</style>
</Fragment>


export default withRouter(App)
