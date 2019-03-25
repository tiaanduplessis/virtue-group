import React, { PureComponent, Fragment } from 'react'

import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import Transition from './Transition'
import Navbar from './Navbar'

import Home from '../pages/Home'
import About from '../pages/About'
import Electrical from '../pages/Electrical'
import Plumbing from '../pages/Plumbing'
import Contact from '../pages/Contact'

import { navData } from '../utils/navData'

const pages = { Home, About, Electrical, Plumbing, Contact }

class PageContainer extends PureComponent {

  // Keeps the url and navbar tabs in sync
  static getDerivedStateFromProps(props, state) {
    const { pathname } = props.location
    const page = navData.find(item => item.path === pathname)
    if(page.id !== state.value) return {value: page.id}
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
    const { location } = this.props

    const pageLoader = (
      <Switch location={location}>
        {navData.map(item =>
          <Route key={item.id} path={item.path} component={pages[item.page]}/>
        )}
        <Redirect to='/home'/>
      </Switch>
    )

    return (
      <Fragment>
        <Navbar
          value={value}
          navData={navData}
          handleChange={this.handleChange}
        />
        <Transition loc={location.key}>
          { pageLoader }
        </Transition>
      </Fragment>
    )
  }
}

export default withRouter(PageContainer)
