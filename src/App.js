import React from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import colors from './utils/colors'

import { navData } from './utils/navData'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Electrical from './pages/Electrical'
import Plumbing from './pages/Plumbing'
import Contact from './pages/Contact'

const pages = { Home, About, Electrical, Plumbing, Contact }

const App = () => <div>

  <Navbar/>

  <Switch>
    {navData.map(item =>
      <Route key={item.id} path={item.path} component={pages[item.page]}/>
    )}
    <Redirect to='/home'/>
  </Switch>

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

  `}</style>
</div>



export default withRouter(App)
