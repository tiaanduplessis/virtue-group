import React from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import { navData } from './utils/data'

import './App.css'

import Navbar from './components/Navbar/'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const pages = {Home, About, Contact}

const App = () => <div>

  <Navbar/>

  <Switch>
    {navData.map(item => <Route key={item.id} path={item.path} component={pages[item.page]}/>)}
    <Redirect to='/home'/>
  </Switch>
</div>



export default withRouter(App)
