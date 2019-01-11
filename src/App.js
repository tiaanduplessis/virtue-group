import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const navItems = [
  {
    id: 0,
    name: 'Home',
    path: '/home'},
  {
    id: 1,
    name: 'About',
    path: '/about'
  },
  {
    id: 2,
    name: 'Contact Us',
    path: '/contact-us'
  }
]

const matchNavItem = path => {
  return navItems.find(item => item.path === path)
}

class App extends Component {

  constructor(props) {
    super(props)

    const activeNavItem = matchNavItem(props.location.pathname)

    this.state = {
      active: activeNavItem || navItems[0]
    }
  }


  render() {
    const {active} = this.state

    return <div>
      {`you're on ${active.path}`}
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact-us' component={Contact}/>
        <Redirect to='/home'/>
      </Switch>
    </div>
  }
}


export default withRouter(App)
