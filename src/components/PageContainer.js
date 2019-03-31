import React, { PureComponent, Fragment } from 'react'

import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import Transition from './Transition'
import Navbar from './Navbar'

import Home from '../pages/Home'
import About from '../pages/About'
import Electrical from '../pages/Electrical'
import Plumbing from '../pages/Plumbing'
import Maintenance from '../pages/Maintenance'
import Construction from '../pages/Construction'
import Contact from '../pages/Contact'

import { navData } from '../utils/navData'

const pages = { Home, About, Electrical, Plumbing, Maintenance, Construction, Contact }

class PageContainer extends PureComponent {

  // Keeps the url and navbar tabs in sync
  static getDerivedStateFromProps(props, state) {
    const { pathname } = props.location
    const page = navData.find(item => item.path === pathname)

    if (page && page.id !== state.value) {
      return {value: page.id}
    } else {
      return {value: 0}
    }
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

    if( value === 0 && location.pathname !== '/home') {
      return <Redirect to="/home" />
    }

    const page = (
      <Switch location={location}>
        {navData.map(item =>
          <Route key={item.id} path={item.path} component={pages[item.page]}/>
        )}
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
          { page }
        </Transition>
      </Fragment>
    )
  }
}

export default withRouter(PageContainer)
