import React, { PureComponent, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import SwipeableViews from 'react-swipeable-views'

import windowSize from 'react-window-size'

import { servicesStyles } from './styles'
import { withStyles } from '@material-ui/core/styles'

import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core/'

import Electrical from './electrical'
import Construction from './construction'
import Plumbing from './plumbing'
import Maintenance from './maintenance'

const pages = [
  'electrical',
  'construction',
  'plumbing',
  'maintenance'
]

class Services extends PureComponent {

  static getDerivedStateFromProps(props, state) {
    const { service } = props.match.params
    const value = pages.indexOf(service)

    return value !== state.value ? {value} : null
  }

  state = {
    value: 0
  }

  handleChange = (event, value) => {
    const { innerText } = event.target
    this.setState({ value }, () => {
      this.redirect(innerText.toLowerCase())
    })
  }

  handleChangeIndex = index => {
    const service = pages[index]
    this.setState({value: index}, () => {
      this.redirect(service)
    })
  }

  redirect = service => {
    const { history } = this.props
    history.push(`/services/${service}`)
  }

  render() {
    const { value } = this.state
    
    const {
      classes,
      windowWidth
    } = this.props

    const isMobile = windowWidth < 760

    return value === -1 ? <Redirect to="/services/electrical" /> : (

      <Fragment>
        <AppBar
          position="static"
          color="default"
          classes={{root: !isMobile ? classes.appbar : null}}
        >
          <Tabs
            variant="scrollable"
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            classes={{root: classes.tabs}}
            scrollButtons="off"
          >
            <Tab label="Electrical" />
            <Tab label="Construction" />
            <Tab label="Plumbing" />
            <Tab label="Maintenance" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <Electrical/>
          <Construction/>
          <Plumbing/>
          <Maintenance/>
        </SwipeableViews>
      </Fragment>
    )
  }
}

export default withRouter(windowSize(
  withStyles(servicesStyles)(Services)
))
