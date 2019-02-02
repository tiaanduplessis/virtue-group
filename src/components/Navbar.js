import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import { navData } from '../utils/navData'

import Logo from './Logo'

class Navbar extends Component {

  state = {
    value: 0
  }

  handleChange = (props, value) => {
    this.setState({ value })
  }

  render() {

    const { value } = this.state


    return <div className="navbar-wrapper">
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

      <style jsx>{`
        .navbar-wrapper {
          position: fixed;
        }
      `}</style>
    </div>
  }

}

export default Navbar
