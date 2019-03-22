import React, { PureComponent, Fragment } from 'react'

import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { AppBar, Toolbar, Tabs, Tab, Typography  } from '@material-ui/core'

import Home from '../pages/Home'
import About from '../pages/About'
import Electrical from '../pages/Electrical'
import Plumbing from '../pages/Plumbing'
import Contact from '../pages/Contact'

import { navData } from '../utils/navData'

import Logo from './Logo'

const pages = { Home, About, Electrical, Plumbing, Contact }

class Navbar extends PureComponent {

  state = {
    value: 0
  }

  handleChange = (props, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    const { location } = this.props

    return <Fragment>

      <AppBar>
        <Toolbar>
          <Logo compact={true}/>
        </Toolbar>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact us" />
        </Tabs>
      </AppBar>

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



    </Fragment>
  }
}

export default withRouter(Navbar)
